import { Game, TurnOrder, IGameCtx, INVALID_MOVE, PlayerView } from '@freeboardgame.org/boardgame.io/core';
import Card from './card';
import Player from './player';

export interface IG {
  players: Player[],
  decks: Card[][],
  cardOrder: string[],
  end: boolean,
}

export interface IGetCards {
  card: Card,
  lastCards: Card[]
}

export function getCards(G: IG, ctx: IGameCtx): IGetCards {
  const lastCards = G.decks
    .map((deck: Card[]) => deck[deck.length - 1])
    .sort((a: Card, b: Card) => a.number - b.number);
  const card = G.players[ctx.playerID as any].selectedCard;
  return { card: card, lastCards: lastCards };
}

function moveToHand(G: IG, ctx: IGameCtx, card: Card, deckId: number): any {
  return {
    ...G,
    players: Object.values({
      ...G.players,
      [ctx.playerID]: {
        ...G.players[ctx.playerID as any],
        penaltyCards: [
          ...G.players[ctx.playerID as any].penaltyCards,
          ...G.decks[deckId],
        ],
      },
    }),
    decks: Object.values({
      ...G.decks,
      [deckId]: [card],
    }),
  };
}

export function selectCard(G: IG, ctx: IGameCtx, id: number): any {
  if (id < 0 || id >= G.players[ctx.playerID as any].cards.length) {
    return INVALID_MOVE;
  }

  return {
    ...G,
    players: Object.values({
      ...G.players,
      [ctx.playerID]: {
        ...G.players[ctx.playerID as any],
        selectedCard: G.players[ctx.playerID as any].cards.find(
          (_: Card, index: number) => index === id,
        ), // Set card as selected
        cards: G.players[ctx.playerID as any].cards.filter(
          (_: Card, index: number) => index !== id,
        ), // Remove card from player's deck
      },
    }),
  };
}

export function selectDeck(G: IG, ctx: IGameCtx, id: number): any {
  const { card, lastCards } = getCards(G, ctx);

  // Card is lower than every in deck
  if (card.number < lastCards[0].number) {
    return moveToHand(G, ctx, card, id);
  } else {
    const diffs: number[] = G.decks.map(
      (deck: Card[]) => card.number - deck[deck.length - 1].number,
    );

    let min = Number.MAX_SAFE_INTEGER;
    let minIndex = 0;
    diffs.forEach((diff, index) => {
      if (diff > 0 && diff < min) {
        min = diff;
        minIndex = index;
      }
    });

    if (minIndex !== id) {
      return INVALID_MOVE;
    }

    // If card is #6 move all cards from deck to player's hand
    if (G.decks[id].length === 5) {
      return moveToHand(G, ctx, card, id);
    }

    return {
      ...G,
      decks: Object.values({
        ...G.decks,
        [id]: [...G.decks[id], card],
      }),
    };
  }
}

export const TakeSixGame = Game({
  name: 'takesix',
  flow: {
    endTurn: false,
    endPhase: false,
    endGame: false,
    startingPhase: 'CARD_SELECT', // Start by selecting cards
    phases: {
      // Everyone needs to select card
      CARD_SELECT: {
        allowedMoves: ['selectCard'],
        turnOrder: TurnOrder.ANY_ONCE,
        next: 'DECK_SELECT',
        // Determine player order
        onPhaseEnd: (G: IG) => {
          const selectedCards = G.players.map(
            (player: Player) => player.selectedCard,
          );
          selectedCards.sort((a: Card, b: Card) => a.number - b.number);
          return {
            ...G,
            cardOrder: selectedCards
              .map((card: Card) => card.owner)
              .map((x: number) => x.toString()),
          };
        },
      },
      // Select deck
      DECK_SELECT: {
        allowedMoves: ['selectDeck'],
        next: 'CARD_SELECT',
        // Implement CUSTOM_FROM_ONCE
        turnOrder: {
          playOrder: (G: IG) => G.cardOrder,
          first: () => 0,
          next: (_, ctx) => {
            if (ctx.playOrderPos < ctx.playOrder.length - 1) {
              return ctx.playOrderPos + 1;
            }
          },
        },
        onMove: (_, ctx) => {
          ctx.events.endTurn();
        },
        onPhaseEnd: (G: IG) => {
          if (G.players[0].cards.length === 0) {
            G.end = true;
          }
        },
      },
    },
    endGameIf: (G: IG) => {
      if (G.end === true) {
        const scoreboard = G.players.map((player, i) => ({
          playerID: i,
          penaltyPoints: player.penaltyCards.reduce(
            (acc, card) => acc + card.value,
            0,
          ),
        })).sort((a, b) => a.penaltyPoints - b.penaltyPoints);

        if (scoreboard[0].penaltyPoints === scoreboard[1].penaltyPoints) {
          return { draw: true };
        } else {
          return { winner: scoreboard[0].playerID.toString() };
        }
      }
    },
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
        return new Card(i + 1, value, null);
      }),
    );

    // Set initial state
    return {
      decks: new Array(4).fill(0).map(_ => [deck.pop()]),
      players: new Array(ctx.numPlayers).fill(0).map(
        (_, i) =>
          new Player(
            new Array(10).fill(0).map(__ => {
              const card = deck.pop();
              card.owner = i;
              return card;
            }),
            null,
          ),
      ),
      cardOrder: [],
      end: false,
    };
  },

  moves: {
    selectCard,
    selectDeck,
  },
});
