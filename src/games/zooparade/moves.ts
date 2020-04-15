import { IGameCtx, INVALID_MOVE } from 'boardgame.io/core';

import { ICard, IHand, IHint, IG} from './interfaces';

// Moves
export function movePlay(G: IG, ctx: IGameCtx, IDInHand: number) : any {
  console.log("MOVE PLAY: ", IDInHand)
  if (isNaN(IDInHand)) {
    return INVALID_MOVE
  } else if (IDInHand < 0 || IDInHand >= (ctx.numPlayers > 3 ? 4 : 5) ) {
    return INVALID_MOVE
  }

  var currentPl : number = parseInt(ctx.currentPlayer)
  // if (currentPl)

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
      G.countdown - 1,
    treats:
      (G.piles[G.hands[currentPl].cards[IDInHand].color].length === (G.hands[currentPl].cards[IDInHand].value - 1)) // Is the played card the next value?
      ?
      G.treats + 1
      :
      G.treats
  }
}
export function moveDiscard(G: IG, ctx: IGameCtx, IDInHand: number) : any {
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
export function moveHintValue(G: IG, ctx: IGameCtx, IDPlayer: number, IDHintValue: number) : any {
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
export function moveHintColor(G: IG, ctx: IGameCtx, IDPlayer: number, IDHintColor: number) : any {
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
