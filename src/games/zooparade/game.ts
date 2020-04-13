import { IGameArgs, IGameCtx, INVALID_MOVE } from 'boardgame.io/core';
import { TextareaAutosize } from '@material-ui/core';
import { transcode } from 'buffer';

import { ICard, IHand, IHint, IG} from './interfaces';
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


// Setup
function setup(ctx: IGameCtx): IG {
  // Create Deck
  var deckindex = 49
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
  for ( var i = 0; i < 5; i++) {
    piles[i] = Array(0)
  }
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
      hands[j].cards[i] = deck[deckindex]
      deckindex -= 1
      hands[j].hints[i] = <IHint> { color: null, value: null }
    }
  }


  // Rest
  var countdown = 3
  var treats = 8


  var finalG = <IG> {
    deck: deck,
    deckindex: deckindex,
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
function isEnd(G: IG, ctx: IGameCtx) {
  if ( G.deckindex === ( - 1 - ctx.numPlayers)) {
    return true 
    // Every player has made a move after the deck turned empty
  }
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
function movePlay(G: IG, ctx: IGameCtx, IDInHand: number) : any {
  if (isNaN(IDInHand)) {
    return INVALID_MOVE
  } else if (IDInHand < 0 || IDInHand >= (ctx.numPlayers > 3 ? 4 : 5) ) {
    return INVALID_MOVE
  }

  var currentPl : number = parseInt(ctx.currentPlayer)

  // NOTE! This does not exclude the possiblity of playing a 'null' card, once all cards have been picked up.
  // However, the game automatically ends, once all players couldn't pick up a card, thus
  // you always have max_cards in hand, and can never play a 'null'.

  return {
    ...G,
    hands: G.hands.map((hand: IHand, index: number) => {
      if (!(hand.player === currentPl)) {
        return hand
      }
      return <IHand> {
        player: currentPl,
        cards: hand.cards.map((card: ICard, indexHand: number) => {
          if (!(indexHand === IDInHand)) {
            return card
          }
          if (G.deckindex >= 0) {
            return <ICard> {
              id: G.deck[G.deckindex].id,
              value: G.deck[G.deckindex].value,
              color: G.deck[G.deckindex].color
            }
          }
          return null // no more cards in deck
        }),
        hints: hand.hints.map((hint: IHint, indexHint: number) => {
          if (!(indexHint===IDInHand)) {
            return hint
          }
          return <IHint> { color: null, value: null}
        })
      }
    }),
    deckindex: G.deckindex - 1,
    piles: G.piles.map((pile: ICard[], index: number) => {
      if (!(index === G.hands[currentPl].cards[IDInHand].color)) {
        return pile // wrong colored pile, leave this pile untouched
      }

      if (pile.length === 0) { // First card for pile
        if (G.hands[currentPl].cards[IDInHand].value === 1) {
          return <ICard[]> [G.hands[currentPl].cards[IDInHand]] // Put the played card on the pile
        }
        return pile //
      }

      if (pile[pile.length - 1].value === G.hands[currentPl].cards[IDInHand].value - 1) {
        // correct Value
        return <ICard[]> [...pile, G.hands[currentPl].cards[IDInHand]]
      }
      return pile // wrong number for pile
    }),
    trash:
      (G.piles[G.hands[currentPl].cards[IDInHand].color].length === (G.hands[currentPl].cards[IDInHand].value - 1)) // Is the played card the next value?
      ?
      G.trash // Unchanged if success in put to piles
      :
      [...G.trash,  G.hands[currentPl].cards[IDInHand] ], // If you played the wrong card, it gets discarded

    countdown:
      (G.piles[G.hands[currentPl].cards[IDInHand].color].length === (G.hands[currentPl].cards[IDInHand].value - 1)) // Is the played card the next value?
      ?
      G.countdown
      :
      G.countdown - 1
  }
}
function moveDiscard(G: IG, ctx: IGameCtx, IDInHand: number) : any {
  if (isNaN(IDInHand)) {
    return INVALID_MOVE
  } else if (IDInHand < 0 || IDInHand > (ctx.numPlayers > 3 ? 4 : 5) ) {
    return INVALID_MOVE
  }

  var currentPl : number = parseInt(ctx.currentPlayer)

  // NOTE! This does not exclude the possiblity of playing a 'null' card, once all cards have been picked up.
  // However, the game automatically ends, once all players couldn't pick up a card, thus
  // you always have max_cards in hand, and can never play a 'null'.
  console.log("TODO: How to force! / return Invalid Move if this is true.")
  console.log("Note : This action cannot be performed if all the blue tokens are in the lid of the box.The player has to perform another action.")

  return {
    ...G,
    hands: G.hands.map((hand: IHand, index: number) => {
      if (!(hand.player === currentPl)) {
        return hand
      }
      return <IHand> {
        player: currentPl,
        cards: hand.cards.map((card: ICard, indexHand: number) => {
          if (!(indexHand === IDInHand)) {
            return card
          }
          if (G.deckindex >= 0) {
            return <ICard> {
              id: G.deck[G.deckindex].id,
              value: G.deck[G.deckindex].value,
              color: G.deck[G.deckindex].color
            }
          }
          return null // no more cards in deck
        }),
        hints: hand.hints.map((hint: IHint, indexHint: number) => {
          if (!(indexHint===IDInHand)) {
            return hint
          }
          return <IHint> { color: null, value: null}
        })
      }
    }),
    trash: [...G.trash, G.hands[currentPl].cards[IDInHand]],
    deckindex: G.deckindex - 1
  }
}
function moveHintValue(G: IG, ctx: IGameCtx, IDPlayer: number, IDHintValue: number) : any {
  var currentPl : number = parseInt(ctx.currentPlayer)
  if (isNaN(IDPlayer)) {
    return INVALID_MOVE
  } else if (IDPlayer < 0 || IDPlayer >= ctx.numPlayers  ) {
    return INVALID_MOVE
  } else if (IDPlayer == currentPl) {
    return INVALID_MOVE
  }
  if (isNaN(IDHintValue)) {
    return INVALID_MOVE
  } else if (IDHintValue < 1 || IDHintValue > 5) {
    return INVALID_MOVE
  }
  console.log("TODO: How to force! / return Invalid Move if this is true.")
  console.log("Note: This action cannot be performed if the lid of the box is empty of blue tokens.The player has to perform another action")

  console.log("TODO: Clarify rules: Is it possible to give a Hint about a Value/Color that the player doesn't have?")
  console.log(" Example: Player doesn't have any card with Value 1, however the hint he/she recieves is Value=1 ... thus nothing shows up, and the player knows none of his cards are 1s.")

  return {
    ...G,
    treats: G.treats - 1,
    hands: G.hands.map((hand: IHand, index: number) => {
      if (!(index === IDPlayer)) {
        return hand
      }
      return <IHand> {
        player: G.hands[IDPlayer].player,
        cards: G.hands[IDPlayer].cards,
        hints:
          G.hands[IDPlayer].hints.map((hint: IHint, indexHint: number) => {
              return <IHint> { 
                value : (G.hands[IDPlayer].cards[indexHint].value === IDHintValue) ? IDHintValue : hint.value,
                color: hint.color
              }
            }
          )
      }

    })
  }
}
function moveHintColor(G: IG, ctx: IGameCtx, IDPlayer: number, IDHintColor: number) : any {
  var currentPl : number = parseInt(ctx.currentPlayer)
  if (isNaN(IDPlayer)) {
    return INVALID_MOVE
  } else if (IDPlayer < 0 || IDPlayer >= ctx.numPlayers  ) {
    return INVALID_MOVE
  } else if (IDPlayer == currentPl) {
    return INVALID_MOVE
  }
  if (isNaN(IDHintColor)) {
    return INVALID_MOVE
  } else if (IDHintColor < 0 || IDHintColor > 4) {
    return INVALID_MOVE
  }
  console.log("TODO: How to force! / return Invalid Move if this is true.")
  console.log("Note: This action cannot be performed if the lid of the box is empty of blue tokens.The player has to perform another action")

  console.log("TODO: Clarify rules: Is it possible to give a Hint about a Value/Color that the player doesn't have?")
  console.log(" Example: Player doesn't have any card with Value 1, however the hint he/she recieves is Value=1 ... thus nothing shows up, and the player knows none of his cards are 1s.")

  return {
    ...G,
    treats: G.treats - 1,
    hands: G.hands.map((hand: IHand, index: number) => {
      if (!(index === IDPlayer)) {
        return hand
      }
      return <IHand> {
        player: G.hands[IDPlayer].player,
        cards: G.hands[IDPlayer].cards,
        hints:
          G.hands[IDPlayer].hints.map((hint: IHint, indexHint: number) => {
              return <IHint> { 
                color: (G.hands[IDPlayer].cards[indexHint].color === IDHintColor) ? IDHintColor : hint.color,
                value: hint.value
              }
            }
          )
      }

    })
  }
}

// Game
export const ZooParadeGame = {
  name: "ZooParade",

  setup: setup,

  playerView: (G, ctx, playerID) => {
    return G
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
    movePlay,
    moveDiscard,
    moveHintValue,
    moveHintColor,
  },

  turn: { moveLimit: 1 },

  endIf: (G, ctx) => {
    if (isLose(G)) {
      return { winner: ctx.currentPlayer }; // TODO: RETURN THE SCORE
    }
    if (isWin(G)) {
      return { draw: true }; // TODO: RETURN THE SCORE
    }
    if (isEnd(G, ctx)) {
      return { draw: true }; // TODO: RETURN THE SCORE
    }
  },
};

