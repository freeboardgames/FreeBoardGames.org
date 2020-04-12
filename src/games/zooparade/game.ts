import { IGameArgs, IGameCtx, INVALID_MOVE } from 'boardgame.io/core';
import { TextareaAutosize } from '@material-ui/core';

// Helpers
function idToColor(id: number) {
  return Math.floor(id / 10)
}
function idToValue(id: number) {
  var rem = id % 10
  if (rem === 9 ){
    return 5
  }
  if (rem >= 7 ){
    return 4
  }
  if (rem >= 5 ){
    return 3 
  }
  if (rem >= 3 ){
    return 2 
  }
  if (rem >= 0){
    return 1
  }
}

// Interfaces 
export interface ICard {
  id: number;
  color: number;
  value: number;
}

export interface IHint {
  color: number;
  value: number;
}

export interface IHand {
  player: number;
  cards: ICard[];
  hints: IHint[];
}

export interface IG {
  deck: ICard[];
  trash: ICard[];
  piles: ICard[][];

  hands: IHand[];

  countdown: number;
  treats: number;
}

// Setup
function setup(ctx: IGameCtx): IG {
  // Create Deck
  var deck = Array(50).fill(null)
  for (var i = 0; i < 50; i++) {
    deck[i] = <ICard> {
      id: i,
      color: idToColor(i),
      value: idToValue(i),
    }
  }
  var deck = ctx.random.Shuffle(deck)
  var piles: ICard[][] = Array(5).fill(null)
  var trash: ICard[] = Array(0)

  // Create Player Hands
  var nrCards: number
  if ( ( ctx.numPlayers === 2 ) || ( ctx.numPlayers === 3 ) ){
    nrCards = 5
  } else { // 4 or 5 players
    nrCards = 4 
  }
  var hands = Array(ctx.numPlayers).fill(null)

  for (var j = 0; j < ctx.numPlayers; j++ ) {
    hands[j] = <IHand> { player: j,
                         cards: Array(nrCards).fill(null),
                         hints: Array(nrCards).fill(null)}
    for (var i = 0; i < nrCards; i++) {
      hands[j].cards[i] = deck.pop()
      hands[j].hints[i] = null
    }
  }


  // Rest
  var countdown = 3
  var treats = 8


  var finalG = <IG> {
    deck: deck,
    trash: trash,
    piles: piles,
    hands: hands, 
    countdown: countdown ,
    treats: treats,
  }


  return finalG
}

// End Conditions
function isWin(G: IG){
  for (var i = 0 ; i < 5; i++) {
    if ( G.piles[i] === null ) {
      return false
    }
    if ( !(G.piles[i].length === 5)) {
      return false
    }
    if ( i === 4 ) {
      return true
    }
  }
} 
function isLose(G: IG) {
  if (G.countdown === 0) {
    return true
  }
}
function isEnd(G: IG) {
  if (!( G.deck.length === 0)) {
    return false
    // Still some cards to pick up
  }
  var plNr : number = G.hands.length
  var nrCards : number = 5
  if (plNr < 4 ) {
    nrCards = 4
  }
  for ( var i = 0 ; i < plNr ; i++ )
  {
    if (!( G.hands[plNr].cards.length === nrCards - 1)) {
      // This player still has full hand.
      return false
    }
  }

  // Deck is empty and all players are missing one card.
  return true
}

function getScore(G: IG): number {
  var score = 0
  for (var i = 0; i < 5 ; i++) {
    var cardsOnPile = G.piles[i].length 
    score += G.piles[i][cardsOnPile - 1].value
  }

  return score
}

// Moves

function testMove(G: IG) {
  G.treats += 1
  return G
}

function moveDiscard(G: IG, ctx: IGameCtx, IDInHand: number) {
  console.log("Move Discard 1")
  var currentPl : number = parseInt(ctx.currentPlayer)

  console.log("Move Discard 2")
  G.trash.push(G.hands[currentPl].cards[IDInHand])
  
  console.log("Move Discard 3")
  if (G.deck.length > 0) {
    console.log("Move Discard 4")
    G.hands[currentPl].cards[IDInHand] = G.deck.pop()
  }

  console.log("Move Discard 5")
  G.hands[currentPl].hints[IDInHand] = null
  console.log("Move Discard 6")

  console.log(G)
  return G
}


// Game
export const ZooParadeGame = {
  name: "ZooParade",

  setup: setup,

  playerView: (G, ctx, playerID) => {
    for (var i = 0; i < G.deck.length; i++) {
      G.deck[i] = null
    }

    // Hide your own cards
    var id = parseInt(playerID) 
    if (!(isNaN(id))) { // However, if this is not a multiplayer then this is NaN. For testing only, as this game can only be played Multiplayer.
      console.log("Hiding for player", id)
      var len = G.hands[id].length
      for (var i = 0; i < len; i++) {
        G.hands[id].cards = null
      }
    }

    return G
  },

  moves: {
    testMove,
    moveDiscard,
  },

  turn: { moveLimit: 1 },

  endIf: (G, ctx) => {
    if (isLose(G)) {
      return { winner: ctx.currentPlayer }; // TODO: RETURN THE SCORE
    }
    if (isWin(G)) {
      return { draw: true }; // TODO: RETURN THE SCORE
    }
    if (isEnd(G)) {
      return { draw: true }; // TODO: RETURN THE SCORE
    }
  },
};

