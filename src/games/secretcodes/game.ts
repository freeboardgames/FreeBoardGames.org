import { IGameArgs, IGameCtx } from 'boardgame.io/core';
import { words } from './constants';
import { IG, Phases, Stages, CardColor, Team, Card } from './definitions';
import {
  switchTeam,
  clueGiven,
  makeSpymaster,
  getCurrentTeam,
  chooseCard,
  makeCard,
  makePlayer,
  makeTeam,
} from './util';

const onBegin = {
  phases: {
    [Phases.lobby]: (G: IG, ctx: IGameCtx) => {
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
    [Phases.play]: (G: IG, ctx: IGameCtx) => {
      const cards = ctx.random
        .Shuffle(words)
        .slice(0, 25)
        .map((word) => makeCard(word));
      const startingTeamIndex = ctx.random.Die(2, 1) % 2;
      const startingTeam = G.teams[startingTeamIndex];

      startingTeam.start = true;

      const key = ctx.random.Shuffle(cards).slice(0, 18) as Card[];
      key.map((card, index) => {
        if (index === 0) card.color = CardColor.assassin;
        else if (index <= 8) card.color = CardColor.blue;
        else if (index <= 16) card.color = CardColor.red;
        else card.color = startingTeam ? CardColor.red : CardColor.blue;
      });

      G.cards = cards;

      ctx.events.endTurn({
        next: (function () {
          return startingTeam.spymaster.playerID.toString();
        })(),
      });
    },
  },
  turns: {
    [Phases.play]: (G: IG, ctx: IGameCtx) => {
      ctx.events.setStage(Stages.giveClue);
    },
  },
};

const GameConfig: IGameArgs = {
  name: 'secretcodes',

  setup: (ctx: IGameCtx): IG => {
    return {
      players: new Array(ctx.numPlayers).fill(0).map((_, i) => makePlayer(i)),
      teams: new Array(2).fill(0).map((_, i) => makeTeam(i)),
      cards: [],
    };
  },

  playerView: (G: IG, ctx: IGameCtx, playerID: string): any => {
    if (playerID === null) return G;
    if (ctx.phase !== Phases.play) return G;
    if (ctx.playOrder.includes(playerID)) return G;

    const { cards } = G;
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
    };
  },

  phases: {
    [Phases.lobby]: {
      start: true,

      onBegin: onBegin.phases[Phases.lobby],

      next: Phases.play,

      turn: {
        activePlayers: {
          all: Stages.chooseTeam,
        },

        stages: {
          [Stages.chooseTeam]: {
            moves: {
              switchTeam,
              makeSpymaster,
            },
          },
        },
      },
    },

    [Phases.play]: {
      onBegin: onBegin.phases[Phases.play],

      turn: {
        order: {
          first: (G: IG): number => G.teams.find((team) => team.start).teamID,
          next: (_, ctx: IGameCtx) => (ctx.playOrderPos + 1) % 2,
          playOrder: (G: IG): string[] => G.teams.map((team: Team) => team.spymaster.playerID.toString()),
        },
        onBegin: onBegin.turns[Phases.play],

        stages: {
          [Stages.giveClue]: {
            moves: {
              clueGiven,
            },

            next: Stages.guess,
          },

          [Stages.guess]: {
            moves: {
              chooseCard: {
                // @ts-ignore
                move: chooseCard,
                client: false,
              },
            },
          },
        },
      },
    },
  },

  endIf: (G: IG, ctx: IGameCtx) => {
    if (ctx.turn >= 2) {
      const assassin = G.cards.find((card) => card.color === CardColor.assassin);
      const blue = G.cards.filter((card) => card.color === CardColor.blue && !card.revealed);
      const red = G.cards.filter((card) => card.color === CardColor.red && !card.revealed);

      if (assassin.revealed) {
        return {
          winner: G.teams[(getCurrentTeam(G, ctx).teamID + 1) % 2],
        };
      }
      if (blue.length === 0)
        return {
          winner: G.teams[0],
        };
      if (red.length === 0)
        return {
          winner: G.teams[1],
        };
    }
  },
};

export const CodenamesGame = GameConfig;
