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
}

export enum Stages {
  select_card = 'select_card',
}

export interface IG {
  players: IPlayer[];
  cardsontable: ICard[];
  buildings: IPropertyCard[];
  checks: IMoneyCard[];
}

export function getScoreBoard(G: IG): IScore[] {
  return G.players
    .map((player, i) => ({
      playerID: i.toString(),
      score: (player.checks.reduce((total, card) => total+card.value, 0)
        + player.money)*1000,
      bid: player.bid,
      money: player.money,
      passed: player.passed,
    }))
    .sort((a, b) => (a.score - b.score));
}

function CountPassedPlayers(G): number {
  return G.players
    .reduce((total, player) => (total + player.passed), 0);
}

function AllButOnePlayerHasPassed(G: IG): boolean {
  return CountPassedPlayers(G) >= G.players.length - 1;
}

function PassPutBuildingInPlayerHand(G, playerIndex){
  PutBuildingInPlayerHand(G, playerIndex, Math.round(parseInt(G.players[playerIndex].bid) / 2));
}

function WinPutBuildingInPlayerHand(G, playerIndex){
  PutBuildingInPlayerHand(G, playerIndex, parseInt(G.players[playerIndex].bid));
}

function PutBuildingInPlayerHand(G: IG, playerIndex, cost){
  G.players[playerIndex].passed = true;
  G.players[playerIndex].money = G.players[playerIndex].money - cost;
  G.players[playerIndex].bid = 0;
  G.players[playerIndex].buildings.push(G.cardsontable.pop());
}

function DealBuildingCards(G: IG, ctx: Ctx){
  let dealtCards = G.buildings.splice(0, ctx.numPlayers);
  G.cardsontable = dealtCards.map(c => ({...c, showing: true}));
}

function ResetPlayerBids(G: IG){
  G.players = G.players.map(p => ({...p, passed: false, bid: 0}));
}

function HighestBid(players): number {
  const highest_bid = players
    .reduce((highest, player) => (highest > player.bid ? highest : player.bid), 0);
  return highest_bid;
}

function AwardBuildingToRemainingPlayer(G: IG){
  let remainingPlayer = G.players
    .reduce(
      ((remaining, player, currentIndex) => (player.passed ? remaining : {playerIndex: currentIndex})),
      {playerIndex:-1});

  WinPutBuildingInPlayerHand(G, remainingPlayer.playerIndex);
}

function DealCheckCards(G: IG, ctx: Ctx){
  let dealtCards = G.checks.splice(0, ctx.numPlayers);
  G.cardsontable = dealtCards.map(c => ({...c, showing: true}));
}

function SelectBuilding(G: IG, ctx: Ctx, cardValue:number){
  const card:any = G.players[ctx.currentPlayer].buildings.find((card) => (card.value == cardValue));
  if (card === "undefined") {
    return INVALID_MOVE;
  }
  G.players[ctx.currentPlayer].selectedCard = card;
  if (AllPlayersHaveSelected(G)){
    AwardMoneyCards(G);
    if (G.checks.length > 0){
      DealCheckCards(G, ctx);
    }
  }
  return G;
}

function AllPlayersHaveSelected(G): boolean {
  return G.players
    .reduce(
      (total, player) => (total + (player.selectedCard != null)), 0)
      == G.players.length;
}

function AwardMoneyCards(G: IG): void {
  G.players = G.players
  //Get players ordered by building values 
  .sort((a, b) => (a.selectedCard.value - b.selectedCard.value))
  .map((player: IPlayer, index:any) => ({
    ...player,
    //Give lowest money to lowest buidling
    checks: [...player.checks, G.cardsontable.shift()],
    //Remove buildings from players
    buildings: player.buildings.splice(
      player.buildings.findIndex((card) => (card.value == player.selectedCard.value)), 1
    ),
    //Unset selected
    selectedCard: null
  }));
}

export const EstateBuyerGame: Game<IG> = {
  name: 'estatebuyer',
  moves: {
    GameStart: (G: IG, ctx: Ctx) => {
      DealBuildingCards(G, ctx);
      ctx.events.setPhase(Phases.auction);
    }
  },
  turn: {
    moveLimit: 1,
    order: TurnOrder.CONTINUE,
  },
  phases: {
    auction: {
      turn: {
        moveLimit: 1,
        onBegin: (G, ctx) => {
          if (G.players[ctx.currentPlayer].passed == true){
            ctx.events.endTurn();
          }
        }
      },
      moves: { 
        MovePlaceBid: (G, ctx, bid) => {
          if (bid <= 0) {
            console.log("Zero Bid", bid);
            return INVALID_MOVE;
          }
          const highest_bid: number = HighestBid(G.players);
          console.log("Bid", bid, highest_bid);
          if (bid <= highest_bid) {
            console.log("Not High Enough Bid", bid, highest_bid);
            return INVALID_MOVE;
          }
          if (G.players[ctx.currentPlayer].money - bid < 0) {
            console.log("Not Enough Money", bid, G.players[ctx.currentPlayer].money);
            return INVALID_MOVE;
          }
          G.players[ctx.currentPlayer].bid = bid;
          return G;
        },
        MovePassBid: (G, ctx) => {
          if (G.players[ctx.currentPlayer].passed) {
            console.log("Player already passed");
            return INVALID_MOVE;
          }
          PassPutBuildingInPlayerHand(G, ctx.currentPlayer);
          if (AllButOnePlayerHasPassed(G)){
            AwardBuildingToRemainingPlayer(G);
            ResetPlayerBids(G);
            DealBuildingCards(G, ctx);
          }
          return G;
        }
      },
      next: Phases.property_selection,
      endIf: (G) => {
        return (G.cardsontable.length <= 0 && G.buildings.length <= 0)
      },
      onEnd: (G, ctx) => { 
        DealCheckCards(G, ctx);
      },
    },

    property_selection: {
      //Hotseat version
      moves:{
        MoveSelectBuilding: (G, ctx, cardValue) => SelectBuilding(G, ctx, cardValue)
      },
      //Online Version
      turn: {
        moveLimit: 1,
        /*activePlayers: { all: Stages.select_card, moveLimit: 1, },
        stages: {
          select_card: {
            moves: { 
              MoveSelectBuilding: (G, ctx, cardValue) => SelectBuilding(G, ctx, cardValue)
            }
          }
        }*/
      },
      
    },
  },
  endIf: (G: IG, ctx: Ctx) => {
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
    }
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
        if (pos == 1) pos = (cardsInDeck / 2);
        return { money: true, number: i + 1, value: pos, showing: false };
      }),
    );

    // Set initial state
    return {
      cardsontable: [],
      checks: new Array(usedCardsInDeck)
        .fill(0)
        .map(() => { return check_deck.pop() }),
      buildings: new Array(usedCardsInDeck)
        .fill(0)
        .map(() => { return building_deck.pop() }),
      players: new Array(ctx.numPlayers).fill(0).map((_, i) => ({
        passed: false,
        bid: 0,
        money: gameSetupAmounts[ctx.numPlayers].money,
        buildings: [],
        checks: [],
      })),
    };
  },
};
