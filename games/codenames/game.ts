import {IGameArgs, IGameCtx, Stage} from 'boardgame.io/core';
import Player from './player';
import Team from './team';
import {wordsNL as words} from './constants';
import {Card, CARD_COLOR} from './card';

export interface IG {
    players: Player[];
    teams: Team[];
    cards: Card[];
}

export enum PHASES {
    LOBBY = 'LOBBY',
    PLAY = 'PLAY',
}

export enum STAGES {
    CHOOSE_TEAM = 'CHOOSE_TEAM',
    GIVE_CLUE = 'GIVE_CLUE',
    GUESS = 'GUESS',
}

const onBegin = {
    phases: {
        [PHASES.LOBBY]: (G: IG, ctx: IGameCtx) => {
            if (G.players.length == 2) {
                for (let i = 0; i < 2; i += 1) {
                    const team = G.teams[i];
                    const player = G.players[i];

                    team.players.push(player);
                    player.teamID = i;
                    makeSpymaster(G, ctx, player);
                }
            }
        },
        [PHASES.PLAY]: (G: IG, ctx: IGameCtx) => {
            const cards = ctx.random.Shuffle(words).slice(0, 25).map(word => new Card(word));
            const startingTeamIndex = ctx.random.Die(2, 1) % 2;
            const startingTeam = G.teams[startingTeamIndex];

            startingTeam.start = true;

            const key = ctx.random.Shuffle(cards).slice(0, 18) as Card[];
            key.map((card, index) => {
                if (index === 0) card.color = CARD_COLOR.ASSASSIN;
                else if (index <= 8) card.color = CARD_COLOR.BLUE;
                else if (index <= 16) card.color = CARD_COLOR.RED;
                else card.color = startingTeam ? CARD_COLOR.RED : CARD_COLOR.BLUE;
            });

            G.cards = cards;

            ctx.events.endTurn({
                next: function () {
                    return startingTeam.spymaster.playerID.toString();
                }(),
            });
        },
    },
    turns: {
        [PHASES.PLAY]: (G: IG, ctx: IGameCtx) => {
            ctx.events.setStage(STAGES.GIVE_CLUE);
        },
    },
};

const switchTeam = (G: IG, ctx: IGameCtx, teamID: number): any => {
    const player = getPlayer(G, ctx);
    if (player.teamID === teamID) return;

    const newTeam = G.teams[teamID];
    const oldTeam = G.teams[(teamID + 1) % 2];

    if (player.isSpymaster) {
        player.isSpymaster = false;
        oldTeam.spymaster = null;
    }

    oldTeam.players = oldTeam.players
        .filter(p => p.playerID !== player.playerID);

    newTeam.players.push(player);
    player.teamID = teamID;
};

const clueGiven = (G: IG, ctx: IGameCtx) => {
    ctx.events.endStage();
    ctx.events.setActivePlayers(function (G: IG, ctx: IGameCtx) {
        if (G.players.length === 2
            || getCurrentTeam(G, ctx).players.length === 1) return {
            currentPlayer: STAGES.GUESS,
        };

        return {
            currentPlayer: Stage.NULL,
            value: getCurrentTeam(G, ctx).players.reduce((acc, player) => {
                if (player.isSpymaster) return acc;

                acc[player.playerID.toString()] = STAGES.GUESS;
                return acc;
            }, {}),
        }
    }(G, ctx));
};

const makeSpymaster = (G: IG, ctx: IGameCtx, p: Player): any => {
    const player = G.players[p.playerID];
    const {teamID, playerID} = player;

    const spymaster = G.teams[teamID].spymaster;
    if (spymaster !== null) {
        if (spymaster.playerID === playerID) return;

        spymaster.isSpymaster = false;
    }

    G.teams[teamID].spymaster = player;
    G.players[playerID].isSpymaster = true;
};

const getPlayer = (G: IG, ctx: IGameCtx): Player => G.players[parseInt(ctx.playerID)];
const getCurrentPlayer = (G: IG, ctx: IGameCtx): Player => G.players[parseInt(ctx.currentPlayer)];
const getCurrentTeam = (G: IG, ctx: IGameCtx): Team => G.teams[parseInt(ctx.currentPlayer)];

const chooseCard = (G: IG, ctx: IGameCtx, cardIndex: number): any => {
    G.cards[cardIndex].revealed = true;

    const color = getCurrentPlayer(G, ctx).teamID ? CARD_COLOR.RED : CARD_COLOR.BLUE;

    if (G.cards[cardIndex].color !== color) {
        ctx.events.endTurn();
    }
};

const GameConfig: IGameArgs = {
    name: 'codenames',

    setup: (ctx: IGameCtx): IG => {
        return {
            players: new Array(ctx.numPlayers).fill(0).map(
                (_, i) => new Player(i),
            ),
            teams: new Array(2).fill(0).map(
                (_, i) => new Team(i),
            ),
            cards: [],
        };
    },

    playerView: (G: IG, ctx: IGameCtx, playerID: string): any => {
        if (ctx.phase !== PHASES.PLAY) return G;
        if (ctx.playOrder.includes(playerID)) return G;

        const {cards} = G;
        return {
            ...G,
            cards: cards.map((card: Card) => {
                let c = {
                    word: card.word,
                    revealed: card.revealed,
                };
                // @ts-ignore
                if (c.revealed) c.color = card.color;
                return c;
            }),
        }
    },

    phases: {
        [PHASES.LOBBY]: {
            start: true,

            onBegin: onBegin.phases[PHASES.LOBBY],

            next: PHASES.PLAY,

            turn: {
                activePlayers: {
                    all: STAGES.CHOOSE_TEAM,
                },

                stages: {
                    [STAGES.CHOOSE_TEAM]: {
                        moves: {
                            switchTeam,
                            makeSpymaster,
                        },
                    },
                },
            }
        },

        [PHASES.PLAY]: {
            onBegin: onBegin.phases[PHASES.PLAY],

            turn: {
                order: {
                    first: (G: IG): number => G.teams.find((team) => team.start).teamID,
                    next: (_, ctx: IGameCtx) => (ctx.playOrderPos + 1) % 2,
                    playOrder: (G: IG): string[] => G.teams.map((team: Team) => team.spymaster.playerID.toString()),
                },
                onBegin: onBegin.turns[PHASES.PLAY],

                stages: {
                    [STAGES.GIVE_CLUE]: {
                        moves: {
                            clueGiven,
                        },

                        next: STAGES.GUESS,
                    },

                    [STAGES.GUESS]: {
                        moves: {
                            chooseCard: {
                                // @ts-ignore
                                move: chooseCard,
                                client: false,
                            },
                        },
                    }
                },
            },
        },
    },

    endIf: (G: IG, ctx: IGameCtx) => {
        if (ctx.turn >= 2) {
            const assassin = G.cards.find((card) => card.color === CARD_COLOR.ASSASSIN);
            const blue = G.cards.filter((card) => card.color === CARD_COLOR.BLUE && !card.revealed);
            const red = G.cards.filter((card) => card.color === CARD_COLOR.RED && !card.revealed);

            if (assassin.revealed) {
                return {
                    winner: G.teams[(getCurrentTeam(G, ctx).teamID + 1) % 2],
                };
            }
            if (blue.length === 0) return {
                winner: G.teams[0],
            };
            if (red.length === 0) return {
                winner: G.teams[1],
            };
        }
    },
};

export const CodenamesGame = GameConfig;
