import { IG, IPlayer } from './definitions';
import { Ctx } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';

export function moveChoseAuction(G: IG): IG {
  return { ...G, moveToPhase: 'phaseAuction' };
}

export function moveChoseTrade(G: IG): IG {
  return { ...G, moveToPhase: 'phaseTradeFirst' };
}

export function moveGoing(G: IG): IG {
  if (G.auction.timeLastHit + G.timeoutMS > Date.now()) {
    return { ...G, log: ['Not enough timepassed for moveGoing', ...G.log] };
  }

  return {
    ...G,
    log: ['Successfully played moveGoing', ...G.log],
    auction: { ...G.auction, counter: G.auction.counter + 1, timeLastHit: Date.now() },
  };
}

export function moveBid(G: IG, ctx: Ctx, amount: number): IG {
  //TODO: if first bet is betting 0, i don't think it updates from -1 -> 0
  //TODO: Betting 0 resets the counter, should only reset on first 0 bet
  //TODO: Who wins when ppl bet the same value?

  let playerId = Number(ctx.playerID);

  // Only false if player is revelead, and bids over own wealth.
  let canBid = G.players[playerId].moneyRevealed
    ? // money revealed
      // enough money for current bid
      G.players[playerId].currentBid == -1
      ? amount
      : G.players[playerId].currentBid + amount <=
        G.players[playerId].money.reduce((accum, money) => {
          return money.value + accum;
        }, 0)
      ? // yes
        true
      : // no
        false
    : //
      true; //money not revealed, so can always bid

  return {
    ...G,
    players: G.players.map(
      (player: IPlayer, id): IPlayer => {
        return id == playerId
          ? {
              ...player,
              currentBid: canBid ? (player.currentBid == -1 ? amount : player.currentBid + amount) : player.currentBid,
            }
          : player;
      },
    ),
    auction: canBid ? { ...G.auction, counter: 0, timeLastHit: Date.now() } : { ...G.auction },
    log: canBid ? ['Successfully bid', ...G.log] : ['CanBid == False', ...G.log],
  };
}

export function movePay(G: IG, ctx: Ctx, moneyIDs: number[]): IG | 'INVALID_MOVE' {
  // Validate moneyIDs indices:
  if (
    Math.min(...moneyIDs) < 0 ||
    Math.max(...moneyIDs) >= G.players[G.auction.payingPlayerID].money.length ||
    moneyIDs.filter((id, index) => {
      return index == moneyIDs.indexOf(id);
    }).length !== moneyIDs.length // not all unique
  ) {
    return INVALID_MOVE;
  }

  if (
    // If can pay, you must pay!
    // -- otherwise your money will be revealed, and you may not overbid again!
    // not paying enough
    moneyIDs.reduce((accum, moneyID): number => {
      return G.players[G.auction.payingPlayerID].money[moneyID].value + accum;
    }, 0) < G.players[G.auction.payingPlayerID].currentBid &&
    // but could pay enough
    G.players[G.auction.payingPlayerID].money.reduce((accum, card): number => {
      return card.value + accum;
    }, 0) >= G.players[G.auction.payingPlayerID].currentBid
  ) {
    return INVALID_MOVE;
  }
  if (
    // If your money is revealed, you need to pay!
    moneyIDs.reduce((accum, moneyID): number => {
      return G.players[G.auction.payingPlayerID].money[moneyID].value + accum;
    }, 0) < G.players[G.auction.payingPlayerID].currentBid &&
    G.players[G.auction.payingPlayerID].moneyRevealed
  ) {
    return INVALID_MOVE;
  }

  return {
    ...G,
    players:
      //suggestedPrice < price
      moneyIDs.reduce((accum, moneyID): number => {
        return G.players[G.auction.payingPlayerID].money[moneyID].value + accum;
      }, 0) < G.players[G.auction.payingPlayerID].currentBid
        ? //can not Pay
          G.players.map((player, id) => {
            return id == G.auction.payingPlayerID
              ? { ...player, moneyRevealed: true, currentBid: -1 }
              : { ...player, currentBid: -1 };
          })
        : // can Pay
          G.players.map((player, id) => {
            return id == G.playerTurnId
              ? // This is the auctioneer player
                {
                  ...player,
                  money: player.money.concat(
                    moneyIDs.map((moneyID) => {
                      return G.players[G.auction.payingPlayerID].money[moneyID];
                    }),
                  ),
                }
              : id == G.auction.payingPlayerID
              ? // Payin player
                {
                  ...player,
                  money: player.money.filter((moneycard, id) => {
                    return moneyIDs.indexOf(id) == -1;
                  }),
                  cards: [...player.cards, G.auction.card],
                  currentBid: -1,
                  moneyRevealed: false,
                }
              : // All other players remain unchanged
                { ...player, currentBid: -1, moneyRevealed: false };
          }),
    auction:
      moneyIDs.reduce((accum, moneyID): number => {
        return G.players[G.auction.payingPlayerID].money[moneyID].value + accum;
      }, 0) < G.players[G.auction.payingPlayerID].currentBid
        ? //can not pay
          { ...G.auction, counter: 0, timeLastHit: Date.now(), payingPlayerID: -1, payMoneyIDs: null }
        : // can pay
          { ...G.auction, counter: 0, timeLastHit: -1, payMoneyIDs: null, card: null },

    log:
      moneyIDs.reduce((accum, moneyID): number => {
        return G.players[G.auction.payingPlayerID].money[moneyID].value + accum;
      }, 0) < G.players[G.auction.payingPlayerID].currentBid
        ? ['payed failed', ...G.log]
        : ['payed', ...G.log],
  };
}

export function moveTradeBack(G: IG) {
  return { ...G, trade: null, log: ['undo Trade Offer', ...G.log] };
}

export function moveChoseAnimalAndMoney(
  G: IG,
  ctx: Ctx,
  counterPlayer: number,
  animalCardId: number, //of defender
  bid: number[],
): IG | 'INVALID_MOVE' {
  //Invalid Player
  if (counterPlayer == Number(ctx.playerID) || counterPlayer < 0 || counterPlayer >= ctx.numPlayers) {
    return INVALID_MOVE;
  }
  //Invalid Animal
  if (
    G.players[counterPlayer].cards.length <= animalCardId || // other guy not enough cards
    0 > animalCardId // other guy not enough cards
  ) {
    return INVALID_MOVE;
  }

  if (
    // (bid.length == 0) ||   I think you should be allowed to offer for nothing.
    Math.min(...bid) < 0 ||
    Math.max(...bid) >= G.players[G.playerTurnId].money.length ||
    bid.filter((id, index) => {
      return index == bid.indexOf(id);
    }).length !== bid.length // not all unique
  ) {
    return INVALID_MOVE;
  }

  // Chose 1 or 2 animals for trade
  let animalIdDefender = G.players[counterPlayer].cards
    .map((card, index) => {
      return card.name == G.players[counterPlayer].cards[animalCardId].name ? index : -1;
    })
    .filter((value) => {
      return value > -1;
    });

  let animalIdAttacker = G.players[G.playerTurnId].cards
    .map((card, index) => {
      return card.name == G.players[counterPlayer].cards[animalCardId].name ? index : -1;
    })
    .filter((value) => {
      return value > -1;
    });

  if (animalIdAttacker.length == 0) {
    return INVALID_MOVE;
  }

  if (!(animalIdDefender.length == animalIdAttacker.length && animalIdAttacker.length == 2)) {
    animalIdDefender = [animalIdDefender[0]];
    animalIdAttacker = [animalIdAttacker[0]];
  }

  return {
    ...G,
    trade: {
      counterPlayerId: counterPlayer,
      animalIdDefender: animalIdDefender,
      animalIdAttacker: animalIdAttacker,
      bid: bid,
    },
    log: ['trade offer sent', ...G.log],
  };
}

export function moveAnswerTrade(G: IG, ctx: Ctx, counterBid: number[]): IG | 'INVALID_MOVE' {
  if (
    Math.min(...counterBid) < 0 ||
    Math.max(...counterBid) >= G.players[G.trade.counterPlayerId].money.length ||
    counterBid.filter((id, index) => {
      return index == counterBid.indexOf(id);
    }).length !== counterBid.length // not all unique
  ) {
    return INVALID_MOVE;
  }

  let valueAttacker = G.players[G.playerTurnId].money.reduce((accum, card, index) => {
    return G.trade.bid.indexOf(index) > -1 ? accum + card.value : accum;
  }, 0);

  let valueDefender = G.players[G.trade.counterPlayerId].money.reduce((accum, card, index) => {
    return counterBid.indexOf(index) > -1 ? accum + card.value : accum;
  }, 0);

  let attackerWin = valueAttacker >= valueDefender;
  return {
    ...G,
    players: G.players.map((player, index) => {
      return index == G.playerTurnId || index == G.trade.counterPlayerId
        ? index == G.playerTurnId
          ? // Attacker
            {
              ...player,
              cards: attackerWin
                ? // Win cards
                  player.cards.concat(
                    G.players[G.trade.counterPlayerId].cards.filter((card, index) => {
                      return G.trade.animalIdDefender.indexOf(index) >= 0;
                    }),
                  )
                : // Lose Cards
                  player.cards.filter((card, index) => {
                    return G.trade.animalIdAttacker.indexOf(index) == -1;
                  }),
              money: player.money
                .filter(
                  (card, index) => {
                    return G.trade.bid.indexOf(index) == -1;
                  }, //keep non-bid
                )
                .concat(
                  G.players[G.trade.counterPlayerId].money.filter(
                    (card, index) => {
                      return counterBid.indexOf(index) >= 0;
                    }, //keep non-bid
                  ),
                ),
            }
          : //Defender
            {
              ...player,
              cards: attackerWin
                ? // Lose cards
                  player.cards.filter((card, index) => {
                    return G.trade.animalIdDefender.indexOf(index) == -1;
                  })
                : // Win Cards
                  player.cards.concat(
                    G.players[G.playerTurnId].cards.filter((card, index) => {
                      return G.trade.animalIdAttacker.indexOf(index) >= 0;
                    }),
                  ),
              money: player.money
                .filter((card, index) => {
                  return G.trade.bid.indexOf(index) >= 0;
                })
                .concat(
                  G.players[G.trade.counterPlayerId].money.filter(
                    (card, index) => {
                      return counterBid.indexOf(index) == -1;
                    }, //keep non-bid
                  ),
                ),
            }
        : // Uninvolved Player
          player;
    }),
    trade: { counterPlayerId: -2, animalIdAttacker: null, animalIdDefender: null, bid: null },
    log: attackerWin ? ['attacker win trade', ...G.log] : ['defender win trade', ...G.log],
  };
}
