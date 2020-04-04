import {IGameArgs, IGameCtx} from 'boardgame.io/core';
import Player from './player';
import Team from './team';
import {words} from './constants';
import {Card} from './card';

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

const GameConfig: IGameArgs = {
    name: 'codenames',

    setup: (ctx): IG => {
        const cards = ctx.random.Shuffle(words).slice(0, 25).map(word => new Card(word));
        const key = ctx.random.Shuffle(cards).slice(0, 18) as string[];

        return {
            players: new Array(ctx.numPlayers).fill(0).map(
                (_, i) => new Player(i),
            ),
            teams: new Array(2).fill(0).map(
                (_, i) => new Team(i),
            ),
            cards,
            key,
        };
    },

    phases: {
        [PHASES.LOBBY]: {
            start: true,

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
            turn: {
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
