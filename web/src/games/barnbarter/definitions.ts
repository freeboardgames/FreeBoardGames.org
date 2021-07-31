import { Ctx } from 'boardgame.io';
import { IGameArgs } from 'gamesShared/definitions/game';

export interface IBoardState {
  showCallTable: boolean;
}

export interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  isActive: boolean;
  gameArgs?: IGameArgs;
  events?: any;
}

export interface ICard {
  name: string;
  value: number;
}

export interface IMoney {
  value: number;
}

export interface IPlayer {
  money: IMoney[];
  moneyRevealed: boolean; // When a player bids too high, he/she must reveal money.
  cards: ICard[];
  currentBid: number;
}

export interface IAuction {
  counter: number; // Counting the 'going once, twice, sold'
  timeLastHit: number; // Tracking  the time when auction started, going once
  // going twice, sold!
  card: ICard; // The Card which is for sale.
  payingPlayerID: number;
  payMoneyIDs: number[];
}

export interface IG {
  log: string[];
  players: IPlayer[];
  cards: ICard[];
  money: IMoney[];
  auction: IAuction;
  playerTurnId: number;

  moveToPhase: string;
  timeoutMS: number;
}
