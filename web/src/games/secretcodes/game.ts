import { ActivePlayers } from 'boardgame.io/core';
import { Ctx, Game } from 'boardgame.io';
import { Card, CardColor, IG, Phases, TeamColor } from './definitions';
import {
  chooseCard,
  distributePlayers,
  getActivePlayersWithoutSpymaster,
  getCurrentTeam,
  getOtherTeam,
  getPlayerTeam,
  makeCard,
  makeSpymaster,
  makeTeam,
  pass,
  removePlayersFromTeams,
  startGame,
  switchTeam,
} from './util';
import { GameCustomizationState } from 'gamesShared/definitions/customization';
import { DEFAULT_FULL_CUSTOMIZATION, FullCustomizationState } from './customization';

const GameConfig: Game<IG> = {
  name: 'secretcodes',

  setup: (ctx, customData: GameCustomizationState): IG => {
    const fullCustomization = (customData?.full as FullCustomizationState) || DEFAULT_FULL_CUSTOMIZATION;
    const teams = new Array(2).fill(0).map((_, i) => makeTeam(i === 0 ? TeamColor.Blue : TeamColor.Red));
    if (ctx.numPlayers === 2) {
      teams[0].playersID = ['0'];
      teams[0].spymasterID = '0';
      teams[1].playersID = ['1'];
      teams[1].spymasterID = '1';
    }
    const cards = ctx.random
      .Shuffle(fullCustomization.words)
      .slice(0, 25)
      .map((word) => makeCard(word));
    const lastSelectedCardIndex = null;
    return {
      teams,
      cards,
      lastSelectedCardIndex,
    };
  },

  playerView: (G: IG, ctx: Ctx, playerID: string): any => {
    if (ctx.gameover) return G;
    if (playerID === null) return G;
    if (ctx.phase !== Phases.guess) return G;
    if (playerID == G.teams[0].spymasterID || playerID == G.teams[1].spymasterID) return G;

    const { cards } = G;
    return {
      ...G,
      cards: cards.map((card: Card) => {
        let c: Card = {
          word: card.word,
          revealed: card.revealed,
        };
        if (c.revealed) c.color = card.color;
        return c;
      }),
    };
  },

  phases: {
    [Phases.lobby]: {
      start: true,
      moves: {
        removePlayersFromTeams,
        distributePlayers,
        switchTeam,
        makeSpymaster,
        startGame,
      },

      next: Phases.guess,

      turn: {
        activePlayers: ActivePlayers.ALL,
      },
    },

    [Phases.guess]: {
      next: Phases.guess,
      turn: {
        activePlayers: ActivePlayers.ALL,
        order: {
          first: () => 0,
          next: () => 0,
          playOrder: (G: IG, ctx: Ctx): string[] => getActivePlayersWithoutSpymaster(getCurrentTeam(G), ctx),
        },
      },
      moves: {
        chooseCard: {
          move: chooseCard,
          client: false,
        },
        pass: {
          move: pass,
          client: false,
        },
      },
    },
  },

  endIf: (G: IG, ctx: Ctx) => {
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
          winner: G.teams.find((team) => team.color === TeamColor.Blue),
        };
      if (red.length === 0)
        return {
          winner: G.teams.find((team) => team.color === TeamColor.Red),
        };
    }
  },
};

export const SecretcodesGame = GameConfig;
