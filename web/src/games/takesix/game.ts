import { INVALID_MOVE, ActivePlayers } from 'boardgame.io/core';
import { Game, Ctx } from 'boardgame.io';
import { IScore } from 'gamesShared/components/scores/Scoreboard';
import Card from './card';
import Player from './player';

export interface IG {
  players: Player[];
  decks: Card[][];
  cardOrder: string[];
  end: boolean;
}

export interface IGetCards {
  card: Card;
  lastCards: Card[];
}

function sortCards(a: Card, b: Card) {
  return a.number - b.number;
}

export function isAllowedDeck(G: IG, deckId: number, playerID: string): boolean {
  const { card, lastCards } = getCards(G, playerID);
  if (card.number < lastCards[0].number) {
    return true;
  }
  const diffs: number[] = G.decks.map((deck) => card.number - deck[deck.length - 1].number);
  let min = Number.MAX_SAFE_INTEGER;
  let minIndex = 0;
  diffs.forEach((diff, index) => {
    if (diff > 0 && diff < min) {
      min = diff;
      minIndex = index;
    }
  });
  return minIndex === deckId;
}

export function getCards(G: IG, playerID: string): IGetCards {
  const lastCards = G.decks.map((deck) => deck[deck.length - 1]).sort(sortCards);
  const card = G.players[playerID as any].selectedCard;
  return { card, lastCards: lastCards };
}

function moveToHand(G: IG, ctx: Ctx, card: Card, deckId: number): any {
  return {
    ...G,
    players: Object.values({
      ...G.players,
      [ctx.playerID]: {
        ...G.players[ctx.playerID as any],
        penaltyCards: [...G.players[ctx.playerID as any].penaltyCards, ...G.decks[deckId]],
      },
    }),
    decks: Object.values({
      ...G.decks,
      [deckId]: [card],
    }),
  };
}

export function selectCard(G: IG, ctx: Ctx, id: number): any {
  if (id < 0 || id >= G.players[ctx.playerID as any].cards.length) {
    return INVALID_MOVE;
  }
  return {
    ...G,
    players: Object.values({
      ...G.players,
      [ctx.playerID]: {
        ...G.players[ctx.playerID as any],
        selectedCard: G.players[ctx.playerID as any].cards[id], // Set card as selected
        cards: G.players[ctx.playerID as any].cards.filter((_, index) => index !== id), // Remove card from player's deck
      },
    }),
  };
}

export function getScoreBoard(G: IG): IScore[] {
  return G.players
    .map((player, i) => ({
      playerID: i.toString(),
      score: player.penaltyCards.reduce((acc, card) => acc + card.value, 0),
    }))
    .sort((a, b) => a.score - b.score);
}

export function selectDeck(G: IG, ctx: Ctx, id: number): any {
  if (!isAllowedDeck(G, id, ctx.playerID)) {
    return INVALID_MOVE;
  }
  const { card, lastCards } = getCards(G, ctx.playerID);

  // Card is lower than every in deck OR
  // card is #6 move all cards from deck to player's hand
  if (card.number < lastCards[0].number || G.decks[id].length === 5) {
    return moveToHand(G, ctx, card, id);
  }

  // Append card
  return {
    ...G,
    decks: Object.values({
      ...G.decks,
      [id]: [...G.decks[id], card],
    }),
  };
}

const GameConfig: Game<IG> = {
  name: 'takesix',
  phases: {
    // Everyone needs to select card
    CARD_SELECT: {
      moves: { selectCard },
      next: 'DECK_SELECT',
      // Determine player order
      onEnd: (G: IG) => {
        const selectedCards = G.players.map((player) => player.selectedCard);
        selectedCards.sort(sortCards);
        return {
          ...G,
          cardOrder: selectedCards.map((card) => card.owner).map((owner) => owner.toString()),
        };
      },
      start: true,
      turn: {
        activePlayers: ActivePlayers.ALL_ONCE,
        onMove: (_, ctx) => {
          if (ctx.activePlayers === null) {
            ctx.events.endPhase();
          }
        },
      },
    },
    // Select deck
    DECK_SELECT: {
      moves: { selectDeck },
      next: 'CARD_SELECT',
      onEnd: (G: IG) => {
        if (G.players[0].cards.length === 0) {
          G.end = true;
        }
      },
      turn: {
        moveLimit: 1,
        order: {
          playOrder: (G: IG) => G.cardOrder,
          first: () => 0,
          next: (_, ctx) => {
            if (ctx.playOrderPos < ctx.playOrder.length - 1) {
              return ctx.playOrderPos + 1;
            }
          },
        },
      },
    },
  },
  endIf: (G: IG) => {
    if (G.end === true) {
      const scoreboard = getScoreBoard(G);
      if (scoreboard[0].score === scoreboard[1].score) {
        return { draw: true };
      } else {
        return { winner: scoreboard[0].playerID.toString() };
      }
    }
  },
  events: {
    endTurn: false,
    endGame: false,
    endPhase: false,
  },
  // playerView: PlayerView.STRIP_SECRETS,
  setup: (ctx): IG => {
    // Generate deck
    const deck = ctx.random.Shuffle(
      new Array(104).fill(0).map((_, i) => {
        let value = 1;
        if ((i + 1) % 55 === 0) {
          value = 7;
        } else if ((i + 1) % 11 === 0) {
          value = 5;
        } else if ((i + 1) % 10 === 0) {
          value = 3;
        } else if ((i + 1) % 5 === 0) {
          value = 2;
        }
        return { number: i + 1, value, owner: null };
      }),
    );

    // Set initial state
    return {
      decks: new Array(4)
        .fill(0)
        .map(() => deck.pop())
        .sort(sortCards)
        .map((card) => [card]),
      players: new Array(ctx.numPlayers).fill(0).map((_, i) => ({
        cards: new Array(10)
          .fill(0)
          .map(() => {
            const card = deck.pop();
            card.owner = i;
            return card;
          })
          .sort(sortCards),
        penaltyCards: [],
      })),
      cardOrder: [],
      end: false,
    };
  },
};

export const TakeSixGame = GameConfig;
export const TakeSixGameForTest = (override: any) => ({
  ...GameConfig,
  ...override,
});
