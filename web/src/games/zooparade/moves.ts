import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';
import { ICard, IHand, IHint, IG } from './interfaces';

// Moves
export function movePlay(G: IG, ctx: Ctx, IDInHand: number): any {
  if (isNaN(IDInHand)) {
    return INVALID_MOVE
  } else if (IDInHand < 0 || IDInHand >= (ctx.numPlayers > 3 ? 4 : 5)) {
    return INVALID_MOVE
  }

  var currentPl: number = parseInt(ctx.currentPlayer)

  // NOTE! This does not exclude the possiblity of playing a 'null' card, once all cards have been picked up.
  // However, the game automatically ends, once all players couldn't pick up a card, thus
  // you always have max_cards in hand, and can never play a 'null'.
  var movelogString = "Player: " + ctx.currentPlayer + "\tMove: Play"
  movelogString += "\t CardColor: " + G.hands[currentPl].cards[IDInHand].color.toString()
  movelogString += "\t CardValue: " + G.hands[currentPl].cards[IDInHand].value.toString()
  movelogString += "\t CardIdInHand: " + IDInHand.toString()
  return {
    ...G,
    hands: G.hands.map((hand: IHand) => {
      if (!(hand.player === currentPl)) {
        return hand
      }
      return <IHand>{
        player: currentPl,
        cards: hand.cards.map((card: ICard, indexHand: number) => {
          if (!(indexHand === IDInHand)) {
            return card
          }
          if (G.deckindex >= 0) {
            return <ICard>{
              id: G.deck[G.deckindex].id,
              value: G.deck[G.deckindex].value,
              color: G.deck[G.deckindex].color
            }
          }
          return null // no more cards in deck
        }),
        hints: hand.hints.map((hint: IHint, indexHint: number) => {
          if (!(indexHint === IDInHand)) {
            return hint
          }
          return <IHint>{ color: [0, 0, 0, 0, 0], value: [0, 0, 0, 0, 0] }
        })
      }
    }),
    deckindex: G.deckindex - 1,
    piles: G.piles.map((pile: ICard[], index: number) => {
      if (!(index === G.hands[currentPl].cards[IDInHand].color)) {
        return pile // wrong colored pile, leave this pile untouched
      }

      if (pile.length === 0) { // First card for pile
        if (G.hands[currentPl].cards[IDInHand].value === 0) {
          return <ICard[]>[G.hands[currentPl].cards[IDInHand]] // Put the played card on the pile
        }
        return pile //
      }

      if (pile[pile.length - 1].value === G.hands[currentPl].cards[IDInHand].value - 1) {
        // correct Value
        return <ICard[]>[...pile, G.hands[currentPl].cards[IDInHand]]
      }
      return pile // wrong number for pile
    }),
    trash:
      (G.piles[G.hands[currentPl].cards[IDInHand].color].length === (G.hands[currentPl].cards[IDInHand].value)) // Is the played card the next value?
        ?
        G.trash // Unchanged if success in put to piles
        :
        [...G.trash, G.hands[currentPl].cards[IDInHand]], // If you played the wrong card, it gets discarded

    countdown:
      (G.piles[G.hands[currentPl].cards[IDInHand].color].length === (G.hands[currentPl].cards[IDInHand].value)) // Is the played card the next value?
        ?
        G.countdown // Success
        :
        G.countdown - 1, // Failed Play
    treats:
      ((G.piles[G.hands[currentPl].cards[IDInHand].color].length === (G.hands[currentPl].cards[IDInHand].value)) // did you play a good move?
        && (G.hands[currentPl].cards[IDInHand].value === 4)) // Did you finish the color?  - if both, gain treat
        ?
        (G.treats === 8) ? 8 : G.treats + 1 // max 8 Treats
        :
        G.treats,
    movelog:
      (G.piles[G.hands[currentPl].cards[IDInHand].color].length === (G.hands[currentPl].cards[IDInHand].value)) // Is the played card the next value?
        ?
        [...G.movelog, movelogString + "Success"]
        :
        [...G.movelog, movelogString + "Failed"],
  }
}

export function moveDiscard(G: IG, ctx: Ctx, IDInHand: number): any {
  if (isNaN(IDInHand)) {
    return INVALID_MOVE
  } else if (IDInHand < 0 || IDInHand > (ctx.numPlayers > 3 ? 4 : 5)) {
    return INVALID_MOVE
  }

  var currentPl: number = parseInt(ctx.currentPlayer)

  // NOTE! This does not exclude the possiblity of playing a 'null' card, once all cards have been picked up.
  // However, the game automatically ends, once all players couldn't pick up a card, thus
  // you always have max_cards in hand, and can never play a 'null'.
  var movelogString = "Player: " + ctx.currentPlayer + "\tMove: Discard"
  movelogString += "\t CardColor: " + G.hands[currentPl].cards[IDInHand].color.toString()
  movelogString += "\t CardValue: " + G.hands[currentPl].cards[IDInHand].value.toString()
  movelogString += "\t CardIdInHand: " + IDInHand.toString()

  return {
    ...G,
    hands: G.hands.map((hand: IHand) => {
      if (!(hand.player === currentPl)) {
        return hand
      }
      return <IHand>{
        player: currentPl,
        cards: hand.cards.map((card: ICard, indexHand: number) => {
          if (!(indexHand === IDInHand)) {
            return card
          }
          if (G.deckindex >= 0) {
            return <ICard>{
              id: G.deck[G.deckindex].id,
              value: G.deck[G.deckindex].value,
              color: G.deck[G.deckindex].color
            }
          }
          return null // no more cards in deck
        }),
        hints: hand.hints.map((hint: IHint, indexHint: number) => {
          if (!(indexHint === IDInHand)) {
            return hint
          }
          return <IHint>{ color: [0, 0, 0, 0, 0], value: [0, 0, 0, 0, 0] }
        })
      }
    }),
    trash: [...G.trash, G.hands[currentPl].cards[IDInHand]],
    deckindex: G.deckindex - 1,
    treats: (G.treats === 8) ? 8 : G.treats + 1, // max 8 Treats
    movelog:
      [...G.movelog, movelogString],
  }
}

export function moveHintValue(G: IG, ctx: Ctx, IDPlayer: number, IDHintValue: number): any {
  var currentPl: number = parseInt(ctx.currentPlayer)
  if (isNaN(IDPlayer)) {
    return INVALID_MOVE
  } else if (IDPlayer < 0 || IDPlayer >= ctx.numPlayers) {
    return INVALID_MOVE
  } else if (IDPlayer == currentPl) {
    return INVALID_MOVE
  }
  if (isNaN(IDHintValue)) {
    return INVALID_MOVE
  } else if (IDHintValue < 0 || IDHintValue > 4) {
    return INVALID_MOVE
  }

  if (G.treats === 0) {
    return INVALID_MOVE
  }

  var movelogString = "Player: " + ctx.currentPlayer + "\tMove: Hint Value"
  movelogString += "Hint Reciver: " + IDPlayer.toString()
  movelogString += "HintValue: " + IDHintValue.toString()

  return {
    ...G,
    treats: G.treats - 1,
    hands: G.hands.map((hand: IHand, index: number) => {
      if (!(index === IDPlayer)) {
        return hand
      }
      return <IHand>{
        player: G.hands[IDPlayer].player,
        cards: G.hands[IDPlayer].cards,
        hints:
          G.hands[IDPlayer].hints.map((hint: IHint, indexHint: number) => {
            var newHintValue = Object.assign([], hint.value)
            newHintValue[IDHintValue] = (G.hands[IDPlayer].cards[indexHint].value === IDHintValue) ? 1 : -1
            return <IHint>{
              value: newHintValue,
              color: hint.color
            }
          }
          )
      }
    }),
    movelog:
      [...G.movelog, movelogString],
  }
}

export function moveHintColor(G: IG, ctx: Ctx, IDPlayer: number, IDHintColor: number): any {
  var currentPl: number = parseInt(ctx.currentPlayer)
  if (isNaN(IDPlayer)) {
    return INVALID_MOVE
  } else if (IDPlayer < 0 || IDPlayer >= ctx.numPlayers) {
    return INVALID_MOVE
  } else if (IDPlayer == currentPl) {
    return INVALID_MOVE
  }
  if (isNaN(IDHintColor)) {
    return INVALID_MOVE
  } else if (IDHintColor < 0 || IDHintColor > 4) {
    return INVALID_MOVE
  }

  if (G.treats === 0) {
    return INVALID_MOVE
  }

  var movelogString = "Player: " + ctx.currentPlayer + "\tMove: Hint Color"
  movelogString += "Hint Reciver: " + IDPlayer.toString()
  movelogString += "HintValue: " + IDHintColor.toString()

  return {
    ...G,
    treats: G.treats - 1,
    hands: G.hands.map((hand: IHand, index: number) => {
      if (!(index === IDPlayer)) {
        return hand
      }
      return <IHand>{
        player: G.hands[IDPlayer].player,
        cards: G.hands[IDPlayer].cards,
        hints:
          G.hands[IDPlayer].hints.map((hint: IHint, indexHint: number) => {
            var newHintColor = Object.assign([], hint.color)
            newHintColor[IDHintColor] = (G.hands[IDPlayer].cards[indexHint].color === IDHintColor) ? 1 : -1
            return <IHint>{
              color: newHintColor,
              value: hint.value
            }
          }
          )
      }
    }),
    movelog:
      [...G.movelog, movelogString],
  }
}
