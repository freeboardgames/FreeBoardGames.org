import { IG, IPlayer } from './definitions';
import { Ctx } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';

export function moveChoseAuction(G: IG): IG {
  return { ...G, moveToPhase: 'phaseAuction' };
}

export function moveChoseTrade(G: IG, ctx: Ctx): IG {
  return { ...G, moveToPhase: 'phaseTradeFirst' };
}

export function moveGoing(G: IG): IG {
  if (G.auction.timeLastHit + G.timeoutMS > Date.now()) {
    // console.log("NOT ENOUGH TIME HAS PASSED")
    return { ...G, log: [...G.log, 'Not enough timepassed for moveGoing'] };
  }

  return {
    ...G,
    log: [...G.log, 'Successfully played moveGoing'],
    auction: { ...G.auction, counter: G.auction.counter + 1, timeLastHit: Date.now() },
  };
}

export function moveBid(G: IG, ctx: Ctx, amount: number): IG {
  var playerId = Number(ctx.playerID);
  var canBid = G.players[playerId].moneyRevealed
    ? // money revealed
      // enough money for current bid
      G.players[playerId].currentBid == -1
      ? amount
      : G.players[playerId].currentBid + amount <=
        G.players[playerId].moneys.reduce((accum, money) => {
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
    log: [...G.log, 'Successfully bid'],
  };
}

export function movePay(G: IG, ctx: Ctx, moneyIDs: number[]): IG | 'INVALID_MOVE' {
  if (
    moneyIDs.reduce((accum, moneyID): number => {
      return G.players[G.auction.payingPlayerID].moneys[moneyID].value + accum;
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
        return G.players[G.auction.payingPlayerID].moneys[moneyID].value + accum;
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
                  moneys: player.moneys.concat(
                    moneyIDs.map((moneyID) => {
                      return G.players[G.auction.payingPlayerID].moneys[moneyID];
                    }),
                  ),
                }
              : id == G.auction.payingPlayerID
              ? // Payin player
                {
                  ...player,
                  moneys: player.moneys.filter((moneycard, id) => {
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
        return G.players[G.auction.payingPlayerID].moneys[moneyID].value + accum;
      }, 0) < G.players[G.auction.payingPlayerID].currentBid
        ? //can not pay
          { ...G.auction, counter: 0, timeLastHit: Date.now(), payingPlayerID: -1, payMoneyIDs: null }
        : // can pay
          { ...G.auction, counter: 0, timeLastHit: -1, payingPlayerID: -1, payMoneyIDs: null, card: null },

    log:
      moneyIDs.reduce((accum, moneyID): number => {
        return G.players[G.auction.payingPlayerID].moneys[moneyID].value + accum;
      }, 0) < G.players[G.auction.payingPlayerID].currentBid
        ? [...G.log, 'payed failed']
        : [...G.log, 'payed'],
  };
}


export function moveChoseAnimalAndMoney(G: IG, 
										ctx: Ctx, 
										counterPlayer: number,
										animalCardId: number,
										bid: number[],
									   ): IG | 'INVALID_MOVE'

{
	//Invalid Player
	if ((counterPlayer == Number(ctx.playerID)) ||  (counterPlayer < 0 ) || (counterPlayer > ctx.numPlayers)){
		return INVALID_MOVE;
	}
	//Invalid Animal
	var cardName = G.players[counterPlayer].cards.name
	if ((G.players[counterPlayer].cards.length <= animalCardId)  // other guy not enough cards
		// i don't have this card
		||  (G.players.[Number(ctx.playerID)].cards.reduce((accum, current) => { return accum && cardName == current.name }, true))
	   )
	   {
		return INVALID_MOVE;
	}

	//TODO: Check if `bid` has unique values, and i even have these cards.

	return {...G,
		trade: {counterPlayerId: counterPlayer,
			animalId: animalCardId,
			bid: bid},
		log: [...G.log, "trade offer sent"],
	}
}
