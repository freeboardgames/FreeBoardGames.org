import { IGameArgs, IGameCtx } from 'boardgame.io/core';
import { words } from './constants';
import { Card, CardColor, IG, Phases, Stages, Team, TeamColor } from './definitions';
import {
  chooseCard,
  clueGiven,
  getOtherTeam,
  getPlayerTeam,
  makeCard,
  makeSpymaster,
  makeTeam,
  switchTeam,
} from './util';

const onBegin = {
  phases: {
    [Phases.lobby]: (G: IG, ctx: IGameCtx) => {
      if (ctx.numPlayers === 2) {
        G.teams[0].playersID = ['0'];
        G.teams[0].spymasterID = '0';
        G.teams[1].playersID = ['1'];
        G.teams[1].spymasterID = '1';
      }
    },
    [Phases.play]: (G: IG, ctx: IGameCtx) => {
      const cards = ctx.random
        .Shuffle(words)
        .slice(0, 25)
        .map((word) => makeCard(word));
      const startingTeamIndex = ctx.random.Die(2) % 2;
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
        next: startingTeam.spymasterID,
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

  setup: (): IG => {
    return {
      teams: new Array(2).fill(0).map((_, i) => makeTeam(i === 0 ? TeamColor.Blue : TeamColor.Red)),
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
          first: (G: IG): number => 0,
          next: (_, ctx: IGameCtx) => (ctx.playOrderPos + 1) % 2,
          playOrder: (G: IG): string[] => G.teams.map((team: Team) => team.spymasterID),
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
    // turn 1 is used to setup the game so we only check from turn 2 and up
    if (ctx.turn >= 2) {
      const assassin = G.cards.find((card) => card.color === CardColor.assassin);
      const blue = G.cards.filter((card) => card.color === CardColor.blue && !card.revealed);
      const red = G.cards.filter((card) => card.color === CardColor.red && !card.revealed);

      if (assassin.revealed) {
        return {
          winner: getOtherTeam(G, getPlayerTeam(G, ctx.currentPlayer)),
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

export const SecretcodesGame = GameConfig;
