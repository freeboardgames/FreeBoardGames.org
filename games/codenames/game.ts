import {IGameArgs, IGameCtx} from 'boardgame.io/core';
import Player from './player';
import Team from './team';
import {words} from './constants';
import {Card, CARD_COLOR} from './card';

export interface IG {
    players: Player[];
    teams: Team[];
    cards: Card[];
    key: string[];
}

export enum PHASES {
    LOBBY = 'LOBBY',
    PLAY = 'PLAY',
}

export enum STAGES {
    GIVE_CLUE = 'GIVE_CLUE',
    GUESS = 'GUESS',
}

const onBeginPlay = (G: IG, ctx: IGameCtx) => {
    const cards = ctx.random.Shuffle(words).slice(0, 25).map(word => new Card(word));
    const startingTeam = ctx.random.Die(2, 1) % 2;

    G.teams[startingTeam].start = true;

    const key = ctx.random.Shuffle(cards).slice(0, 18) as Card[];
    key.map((card, index) => {
        if(index === 0) card.color = CARD_COLOR.ASSASSIN;
        else if(index <= 8) card.color = CARD_COLOR.BLUE;
        else if(index <= 16) card.color = CARD_COLOR.RED;
        else card.color = startingTeam ? CARD_COLOR.RED : CARD_COLOR.BLUE;
    });

    G.cards = cards;

    ctx.events.endTurn({
        next: function(G: IG, ctx: IGameCtx) {
            return G.teams[startingTeam].spymaster.playerID.toString();
        }(G, ctx),
    });
};

const onBeginPlayTurn = (G: IG, ctx: IGameCtx) => {
    ctx.events.setStage('giveClue');
};

const GameConfig: IGameArgs = {
    name: 'codenames',

    setup: (ctx): IG => {

        return {
            players: new Array(ctx.numPlayers).fill(0).map(
                (_, i) => new Player(i),
            ),
            teams: new Array(2).fill(0).map(
                (_, i) => new Team(i),
            ),
            cards: [],
            key: [],
        };
    },

    playerView: (G: IG, ctx: IGameCtx, playerID: string): any => {
        if(ctx.phase !== PHASES.PLAY) return G;

        if(ctx.playOrder.includes(playerID)) return G;

        const {players, teams, cards, key} = G;
        return {
            players,
            teams,
            cards: cards.map((card) => {
                return { word: card.word };
            }),
        }
    },

    phases: {
        [PHASES.LOBBY]: {
            start: true,

            onBegin: (G: IG, ctx: IGameCtx) => {
                if(G.players.length == 2) {
                    for(let i = 0; i < 2; i += 1) {
                        const team = G.teams[i];
                        const player = G.players[i];

                        team.players.push(player);
                        team.spymaster = player;
                        player.teamID = i;
                        player.isSpymaster = true;
                    }
                }
            },

            next: PHASES.PLAY,

            turn: {
                activePlayers: {
                    all: 'chooseTeam',
                },

                stages: {
                    chooseTeam: {
                        moves: {
                            switchTeam: (G: IG, ctx: IGameCtx, teamID: number): any => {
                                const player = G.players[ctx.playerID];
                                if(player.teamID === teamID) return;

                                const newTeam = G.teams[teamID];
                                const oldTeam = G.teams[(teamID + 1) % 2];

                                if(player.isSpymaster) {
                                    player.isSpymaster = false;
                                    oldTeam.spymaster = null;
                                }

                                oldTeam.players = oldTeam.players
                                    .filter(p => p.playerID !== parseInt(ctx.playerID));

                                newTeam.players.push(player);
                                player.teamID = teamID;
                            },

                            makeSpymaster: (G: IG, ctx: IGameCtx, player: Player): any => {
                                const {teamID} = player;

                                if(G.teams[teamID].spymaster !== null) {
                                    if(G.teams[teamID].spymaster.playerID === player.playerID) return;

                                    G.teams[teamID].spymaster.isSpymaster = false;
                                }

                                G.teams[teamID].spymaster = player;
                                player.isSpymaster = true;
                            },
                        },
                    },
                },
            }
        },

        [PHASES.PLAY]: {
            onBegin: onBeginPlay,

            turn: {
                order: {
                    first: (G: IG): number => G.teams.find((team) => team.start).teamID,
                    next: (_, ctx: IGameCtx) => (ctx.playOrderPos + 1) % 2,
                    playOrder: (G: IG): string[] => G.teams.map((team: Team) => team.spymaster.playerID.toString()),
                },
                onBegin: onBeginPlayTurn,

                stages: {
                    [STAGES.GIVE_CLUE]: {
                        moves: {},
                    },

                    [STAGES.GUESS]: {
                        moves: {},
                    }
                },
            },
        },
    },
};

export const CodenamesGame = GameConfig;
