import { TurnOrder } from 'boardgame.io/core';
const suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const PLAYER_COUNT = 2;
const HAND_SIZE = 1;
const DRAW_PILE_SIZE = 26;
const DECK_SIZE = 52;
interface Card {
  suit: string;
  rank: string;
  value: number;
  image: string;
}
interface Player {
  id: number;
  hand: Array<Card>;
  drawPile: Array<Card>;
  discardPile: Array<Card>;
}
export interface IG {
  hand: Array<Card>;
  discard: Array<Card>;
  players: Array<Player>;
  war: false;
}

let deck: Array<Card> = initDeck();
const players: Array<Player> = Array(0);
for (let i = 0; i < PLAYER_COUNT; i++) {
  let player: Player = {
    id: i,
    hand: Array(0),
    drawPile: Array(0),
    discardPile: Array(0),
  };
  for (let j = 0; j < DRAW_PILE_SIZE; j++) {
    let draw = drawCard(deck);
    deck = draw.deck;
    player.drawPile.push(draw.card[0]);
  }
  players.push(player);
}

function initDeck() {
  let deck = new Array(DECK_SIZE);
  let iterator = 0;
  suits.forEach((suit) => {
    ranks.forEach((rank, i) => {
      deck[iterator] = {
        suit: suit,
        rank: rank,
        value: i,
        image: `card${suit}${rank}`,
      };
      iterator++;
    });
  });
  return deck;
}

function drawCard(deck: Array<Card>) {
  const draw = Math.floor(Math.random() * deck.length);
  const card = deck.splice(draw, HAND_SIZE);
  return {
    deck: deck,
    card: card,
  };
}

const GameConfig = {
  name: 'warGame',

  setup: () => ({
    players: players,
  }),

  turn: {
    order: TurnOrder.ONCE,
  },

  phases: {
    draw: {
      onBegin: (G) => {
        G.players.forEach((player, i) => {
          if (player.drawPile.length === 0) {
            let drawPileSize = player.discardPile.length;
            for (let j = 0; j < drawPileSize; j++) {
              let draw = drawCard(G.players[i].discardPile);
              G.players[i].discardPile = draw.deck;
              G.players[i].drawPile.push(draw.card[0]);
            }
          }
        });
      },
      start: true,
      endIf: (G) => G.players[0].hand.length === 1 && G.players[1].hand.length === 1,
      next: 'battle',
    },
    battle: {
      moves: {
        battle: (G, ctx) => {
          if (G.players[0].hand[0].value !== G.players[1].hand[0].value) {
            let winner = G.players.reduce(
              (a, b) => {
                if (a.hand.length === 0 || b.hand[0].value > a.hand[0].value) {
                  a = b;
                }
                return a;
              },
              { hand: [], value: -1 },
            );
            G.players.forEach((h, i) => {
              G.players[winner.id].discardPile.push(G.players[i].hand.pop());
              ctx.events.endPhase();
            });
          } else {
            G.war = true;
            ctx.events.endPhase();
          }
        },
      },
      endIf: () => false,
      next: (G) => {
        return G.war === true ? 'war' : 'draw';
      },
    },
    war: {
      endIf: () => false,
      next: 'draw',
    },
  },

  moves: {
    clickCell: (G, ctx, id) => {
      if (id == ctx.currentPlayer) {
        if (G.war === true) {
          for (let i = 0; i <= 2; i++) {
            let draw = drawCard(G.players[ctx.currentPlayer].drawPile);
            G.players[ctx.currentPlayer].drawPile = draw.deck;
            G.players[ctx.currentPlayer].hand.push(draw.card[0]);
          }
        }
        let draw = drawCard(G.players[ctx.currentPlayer].drawPile);
        G.players[ctx.currentPlayer].drawPile = draw.deck;
        G.players[ctx.currentPlayer].hand.push(draw.card[0]);

        ctx.events.endTurn();
      }
    },
  },
};

export const WarGame = GameConfig;
