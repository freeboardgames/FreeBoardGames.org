import { INVALID_MOVE, TurnOrder } from 'boardgame.io/core';
import ICard from './card';
import IPropertyCard from './card';
import IMoneyCard from './card';
import IPlayer from './player';
import { IScore } from './Scoreboard';
import { Ctx, Game } from 'boardgame.io';

export enum Phases {
  auction = 'auction',
  property_selection = 'property_selection',
  property_selection_hotseat = 'property_selection_hotseat',
}

export enum Stages {
  select_card = 'select_card',
}

export interface IG {
  players: IPlayer[];
  cardsontable: ICard[];
  buildings: IPropertyCard[];
  checks: IMoneyCard[];
  hotseat: boolean;
  round: number;
}

export function getScoreBoard(G: IG): IScore[] {
  return [...G.players]
    .map((player, i) => ({
      playerID: i.toString(),
      score: player.checks.reduce((total, card) => total + card.value, 0) + player.money,
      bid: player.bid,
      money: player.money,
      passed: player.passed,
    }))
    .sort((a, b) => b.score - a.score);
}

function CountPassedPlayers(G): number {
  return G.players.reduce((total, player) => total + player.passed, 0);
}

function AllButOnePlayerHasPassed(G: IG): boolean {
  return CountPassedPlayers(G) >= G.players.length - 1;
}

function PassPutBuildingInPlayerHand(G, playerIndex) {
  PutBuildingInPlayerHand(G, playerIndex, Math.round(parseInt(G.players[playerIndex].bid) / 2));
}

function WinPutBuildingInPlayerHand(G, playerIndex) {
  PutBuildingInPlayerHand(G, playerIndex, parseInt(G.players[playerIndex].bid));
}

function PutBuildingInPlayerHand(G: IG, playerIndex, cost) {
  G.players[playerIndex].passed = true;
  G.players[playerIndex].money = G.players[playerIndex].money - cost;
  G.players[playerIndex].spentMoney = cost;

  const newCard = G.cardsontable.shift();

  G.players[playerIndex].newCard = newCard;
  G.players[playerIndex].buildings.push(newCard);
}

function DealBuildingCards(G: IG, ctx: Ctx) {
  let dealtCards = G.buildings.splice(0, ctx.numPlayers);
  G.cardsontable = dealtCards.map((c) => ({ ...c, showing: true })).sort((a, b) => a.value - b.value);
}

function ResetPlayerBids(G: IG) {
  G.players = G.players.map((p) => ({ ...p, passed: false, bid: 0 }));
}

export function HighestBid(players): number {
  const highest_bid = players.reduce((highest, player) => (highest > player.bid ? highest : player.bid), 0);
  return highest_bid;
}

function AwardBuildingToRemainingPlayer(G: IG) {
  let remainingPlayer = G.players.reduce(
    (remaining, player, currentIndex) => (player.passed ? remaining : { playerIndex: currentIndex }),
    { playerIndex: -1 },
  );

  WinPutBuildingInPlayerHand(G, remainingPlayer.playerIndex);
}

function DealCheckCards(G: IG, ctx: Ctx) {
  let dealtCards = G.checks.splice(0, ctx.numPlayers);
  G.cardsontable = dealtCards.map((c) => ({ ...c, showing: true })).sort((a, b) => a.value - b.value);
}

function AllPlayersHaveSelected(G): boolean {
  return G.players.reduce((total, player) => total + (player.selectedCard != null), 0) == G.players.length;
}

function AwardMoneyCard(player: IPlayer, cardToAward: ICard) {
  const cardIndex = player.buildings.findIndex((card) => card.value === player.selectedCard.value);
  const spentCard = player.buildings.splice(cardIndex, 1);

  return {
    ...player,
    //Give lowest money to lowest buidling
    newCard: cardToAward,
    checks: [...player.checks, cardToAward],
    //Remove buildings from players
    spentCard: spentCard.shift(),
    buidlings: player.buildings,
    //Unset selected
    selectedCard: null,
  };
}

function AwardMoneyCards(G: IG): void {
  [...G.players]
    .map((player: IPlayer, index: number) => ({ value: player.selectedCard.value, playerIndex: index }))
    .sort((a, b) => a.value - b.value)
    .forEach(
      (item) => (G.players[item.playerIndex] = AwardMoneyCard(G.players[item.playerIndex], G.cardsontable.shift())),
    );
}

function NextRound(G) {
  G.round++;
  return G;
}

export const Moves = {
  GameStart: (G: IG, ctx: Ctx, hotseat: boolean) => {
    G.hotseat = hotseat;
    DealBuildingCards(G, ctx);
    NextRound(G);
    ctx.events.setPhase(Phases.auction);
  },
  PlaceBid: (G, ctx, bid) => {
    if (bid <= 0) {
      return INVALID_MOVE;
    }
    const highest_bid: number = HighestBid(G.players);
    if (bid <= highest_bid) {
      return INVALID_MOVE;
    }
    if (G.players[ctx.currentPlayer].money - bid < 0) {
      return INVALID_MOVE;
    }
    G.players[ctx.currentPlayer].bid = bid;
    return G;
  },
  PassBid: (G, ctx) => {
    if (G.players[ctx.currentPlayer].passed) {
      return INVALID_MOVE;
    }
    PassPutBuildingInPlayerHand(G, ctx.currentPlayer);
    return G;
  },
  SelectBuilding: (G: IG, ctx: Ctx, playerIndex: number, cardValue: number) => {
    if (!(playerIndex in G.players)) {
      return INVALID_MOVE;
    }

    const card: any = G.players[playerIndex].buildings.find((card) => card.value == cardValue);
    if (card === undefined) {
      return INVALID_MOVE;
    }
    G.players[playerIndex].selectedCard = card;
    if (AllPlayersHaveSelected(G)) {
      AwardMoneyCards(G);
      if (G.checks.length > 0) {
        DealCheckCards(G, ctx);
        NextRound(G);
      }
    }
    return G;
  },
};

export const EstateBuyerGame: Game<IG> = {
  name: 'estatebuyer',
  moves: {
    GameStart: Moves.GameStart,
  },
  turn: {
    minMoves: 1,
    maxMoves: 1,
    order: {
      first: () => 0,
      next: (G, ctx) => ctx.random.Die(ctx.numPlayers) - 1,
    },
  },
  phases: {
    auction: {
      turn: {
        minMoves: 1,
        maxMoves: 1,
        order: {
          first: (G, ctx) => ctx.playOrderPos,
          next: (G, ctx) => {
            let i: number = 0;
            let pos: number = 0;
            do {
              i++;
              pos = (ctx.playOrderPos + i) % ctx.numPlayers;
            } while (G.players[pos].passed == true);

            return pos;
          },
        },
        onBegin: (G, ctx) => {
          if (AllButOnePlayerHasPassed(G)) {
            AwardBuildingToRemainingPlayer(G);
            ResetPlayerBids(G);
            DealBuildingCards(G, ctx);
            NextRound(G);
          }
          return G;
        },
      },
      moves: {
        MovePlaceBid: Moves.PlaceBid,
        MovePassBid: Moves.PassBid,
      },
      next: Phases.property_selection,
      endIf: (G) => {
        return G.cardsontable.length <= 0 && G.buildings.length <= 0;
      },
      onEnd: (G, ctx) => {
        DealCheckCards(G, ctx);
        NextRound(G);
      },
    },

    property_selection: {
      next: Phases.property_selection_hotseat,
      endIf: (G) => {
        return G.hotseat;
      },
      turn: {
        activePlayers: { all: Stages.select_card },
        stages: {
          select_card: {
            moves: {
              MoveSelectBuilding: Moves.SelectBuilding,
            },
          },
        },
      },
    },

    property_selection_hotseat: {
      turn: {
        minMoves: 1,
        maxMoves: 1,
        order: TurnOrder.CONTINUE,
      },
      moves: {
        MoveSelectBuilding: Moves.SelectBuilding,
      },
    },
  },
  endIf: (G: IG) => {
    if (G.cardsontable.length <= 0 && G.checks.length <= 0) {
      const scoreboard = getScoreBoard(G);
      if (scoreboard[0].score === scoreboard[1].score) {
        return { draw: true };
      }
      return { winner: scoreboard[0].playerID.toString() };
    }
  },
  setup: (ctx: Ctx): IG => {
    const cardsInDeck = 30;
    const gameSetupAmounts = {
      2: { cards: 16, money: 24 },
      3: { cards: 24, money: 18 },
      4: { cards: 28, money: 18 },
      5: { cards: 30, money: 15 },
      6: { cards: 30, money: 15 },
    };
    const usedCardsInDeck = gameSetupAmounts[ctx.numPlayers].cards;

    // Generate deck
    const building_deck = ctx.random.Shuffle(
      new Array(cardsInDeck).fill(0).map((_, i) => {
        return { building: true, number: i + 1, value: i + 1, showing: false };
      }),
    );

    // Generate deck
    const check_deck = ctx.random.Shuffle(
      new Array(cardsInDeck).fill(0).map((_, i) => {
        let pos = i % (cardsInDeck / 2);
        if (pos == 1) pos = cardsInDeck / 2;
        return { money: true, number: i + 1, value: pos, showing: false };
      }),
    );

    // Set initial state
    return {
      hotseat: false,
      round: 0,
      cardsontable: [],
      checks: new Array(usedCardsInDeck).fill(0).map(() => {
        return check_deck.pop();
      }),
      buildings: new Array(usedCardsInDeck).fill(0).map(() => {
        return building_deck.pop();
      }),
      players: new Array(ctx.numPlayers).fill(0).map(() => ({
        passed: false,
        bid: 0,
        money: gameSetupAmounts[ctx.numPlayers].money,
        buildings: [],
        checks: [],
      })),
    };
  },
};
