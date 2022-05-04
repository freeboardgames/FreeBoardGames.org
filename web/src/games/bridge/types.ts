import { Suit, ICard, ITrick } from 'gamesShared/definitions/cards';

export enum Phases {
  bidding = 'bidding',
  placement = 'placement',
  round_end = 'round_end',
}

export enum Stages {
  select_dummy_card = 'select_dummy_card',
  get_ready = 'get_ready',
}

export enum Call {
  Pass,
  Double,
  Redouble,
}

export interface Contract {
  value: number;
  trumps: Suit;
}

export type Bid = Call | Contract;

export interface IGameMoves {
  MakeBid(bid: Bid): void;
  SelectCards(handIndex: number[]): void;
  SelectDummyCards(handIndex: number[]): void;
  Finish(quit: boolean): void;
}

export interface IG {
  players: IPlayer[];
  deck: ICard[];
  declarerId: string;
  partnerId: string;
  contract: Contract;
  doubling: number;
  passCount: number;
  trick: ITrick;
  resolvedTricks: ITrick[];
  roundSummaries: IRoundSummary[];
}

export const DefaultIG: IG = {
  players: [],
  deck: [],
  declarerId: '',
  partnerId: '',
  contract: null,
  doubling: 1,
  passCount: 0,
  trick: { cards: [] },
  resolvedTricks: [],
  roundSummaries: [],
};

export interface IPlayer {
  id: string;
  name: string;
  score: number;
  bids: Bid[];
  isVulnerable: boolean;
  isDealer: boolean;
  isDeclarer: boolean;
  isReady: boolean;
  hand: ICard[];
}

export const DefaultIPlayer: IPlayer = {
  id: '',
  name: '',
  score: 0,
  bids: [],
  isVulnerable: false,
  isDealer: false,
  isDeclarer: false,
  isReady: true,
  hand: [],
};

export interface IRoundSummary {
  declarerId: string;
  partnerId: string;
  contract: Contract;
  reTricks: number;
  contractPoints: number;
  overtrickBonus: number;
  slamBonus: number;
  doubleBonus: number;
  penaltyBonus: number;
  honorsBonus: number;
  scoring: number[];
}
