import { IG } from './definitions';
import { Ctx } from 'boardgame.io';
import { moveChoseAuction, moveChoseTrade, moveGoing, moveBid, movePay, moveChoseAnimalAndMoney } from './moves';

export let phaseNone = {};

export let phaseStart = {
  onBegin: (G: IG, ctx: Ctx) => {
    G.log.push('onBegin phaseStart');

    let activePlayers = { value: {} };
    for (let i = 0; i < ctx.numPlayers; i++) {
      if (G.playerTurnId == i) {
        activePlayers.value[i] = 'phaseStart';
      }
    }
    ctx.events.setActivePlayers(activePlayers);

    return G;
  },

  moves: {
    moveChoseAuction: {
      move: moveChoseAuction,
      client: false,
    },
    moveChoseTrade: {
      move: moveChoseTrade,
      client: false,
    },
  },

  endIf: (G: IG) => {
    if (!(G.moveToPhase == '')) {
      return { next: G.moveToPhase };
    }
  },

  onEnd: (G: IG, ctx: Ctx) => {
    G.log.push('onEnd phaseStart');

    if (G.moveToPhase == 'phaseAuction') {
      let activePlayers = { value: {} };
      for (let i = 0; i < ctx.numPlayers; i++) {
        if (G.playerTurnId == i) {
          activePlayers.value[i] = { stage: 'stageAuctionSell' };
        } else {
          activePlayers.value[i] = { stage: 'stageAuctionBid' };
        }
      }
      ctx.events.setActivePlayers(activePlayers);
    } else {
      let activePlayers = { value: {} };
      for (let i = 0; i < ctx.numPlayers; i++) {
        if (G.playerTurnId == i) {
          activePlayers.value[i] = { stage: 'phaseTradeFirst' };
        }
      }
      ctx.events.setActivePlayers(activePlayers);
    }

    G.moveToPhase = '';

    return G;
  },
};

export let phaseAuction = {
  onBegin: (G: IG) => {
    G.log.push('onBegin phaseAuction');
    G.auction.card = G.cards.pop();
    if (G.auction.card.name == 'Donkey') {
      G.log.push('Auctioning Donkey, gives money!');
      G.players.forEach((player) => {
        player.money.push(G.money.pop());
      });
    }

    G.auction.timeLastHit = Date.now();

    return G;
  },

  turn: {
    stages: {
      stageAuctionSell: {
        moves: {
          moveGoing: {
            move: moveGoing,
            client: false,
          },
        },
      },
      stageAuctionBid: {
        moves: {
          moveBid: {
            move: moveBid,
            client: false,
          },
        },
      },
    },
  },

  endIf: (G: IG, ctx: Ctx) => {
    if (G.auction.counter == 3) {
      let maxPrice = -1;
      for (let i = 0; i < ctx.numPlayers; i++) {
        maxPrice = G.players[i].currentBid > maxPrice ? G.players[i].currentBid : maxPrice;
      }
      if (maxPrice == -1) {
        return { next: 'phaseStart' };
      }
      return { next: 'phaseAuctionPay' };
    }
    return false;
  },

  onEnd: (G: IG, ctx: Ctx) => {
    let maxPrice = -1;
    let maxPayingId = -1;
    for (let i = 0; i < ctx.numPlayers; i++) {
      maxPrice = G.players[i].currentBid > maxPrice ? G.players[i].currentBid : maxPrice;
    }

    if (maxPrice == -1) {
      // No Bids
      G.players[G.playerTurnId].cards.push(G.auction.card);
      G.auction = <IAuction>{ counter: 0, timeLastHit: 0, card: null, payingPlayerID: -1, payMoneyIDs: null };
      G.playerTurnId += 1;
      G.playerTurnId = G.playerTurnId % ctx.numPlayers;
      return G;
    }

    for (let i = 0; i < ctx.numPlayers; i++) {
      if (G.players[i].currentBid == maxPrice) {
        maxPayingId = i;
      }
    }

    let activePlayers = { value: {} };
    for (let i = 0; i < ctx.numPlayers; i++) {
      if (maxPayingId == i) {
        activePlayers.value[i] = 'phaseAuctionPay';
      }
    }
    ctx.events.setActivePlayers(activePlayers);

    return { ...G, auction: { ...G.auction, payingPlayerID: maxPayingId } };
  },
};

export let phaseAuctionPay = {
  onBegin: (G: IG) => {
    G.log.push('onBegin phaseAuctionPay');

    return G;
  },

  moves: {
    movePay: {
      move: movePay,
      client: false,
    },
  },

  endIf: (G: IG) => {
    if (G.auction.payingPlayerID == -1) {
      if (G.auction.card == null) {
        return { next: 'phaseStart' };
      } else {
        return { next: 'phaseAuction' };
      }
    }
  },

  onEnd: (G: IG, ctx: Ctx) => {
    G.log.push('onEnd phaseAuctionPay');

    if (G.auction.card == null) {
      G.log.push('onEnd phaseAuctionPay successful pay');
      G.playerTurnId += 1;
      G.playerTurnId = G.playerTurnId % ctx.numPlayers;

      let activePlayers = { value: {} };
      for (let i = 0; i < ctx.numPlayers; i++) {
        if ((G.playerTurnId + 1) % G.players.length == i) {
          activePlayers.value[i] = 'phaseStart';
        } else {
          activePlayers.value[i] = 'phaseNone';
        }
      }
      ctx.events.setActivePlayers(activePlayers);
    } else {
      G.log.push('onEnd phaseAuctionPay failed pay');
      let activePlayers = { value: {} };
      for (let i = 0; i < ctx.numPlayers; i++) {
        if (G.playerTurnId == i) {
          activePlayers.value[i] = { stage: 'stageAuctionSell' };
        } else {
          activePlayers.value[i] = { stage: 'stageAuctionBid' };
        }
      }
      ctx.events.setActivePlayers(activePlayers);
    }
  },
};


export let phaseTradeFirst = {
	onBegin: (G: IG, ctx: Ctx) => {
		G.log.push('onBegin phaseTradeFirst');
		return G
	},
	moves: {
		moveChoseAnimalAndMoney: {
			move: moveChoseAnimalAndMoney,
			client: false,
		},
	},
	endIf: (G: IG, ctx: Ctx) => {
		return false
	},
	onEnd: (G: IG, ctx: Ctx) => {
	},
}



