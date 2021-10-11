import { ICard, ITrick } from 'gamesShared/definitions/cards';

export enum Phases {
  bidding = 'bidding',
  discard = 'discard',
  placement = 'placement',
  round_end = 'round_end',
}

export enum Stages {
  call_card = 'call_card',
  announce_slam = 'announce_slam',
  declare_poignee = 'declare_poignee',
  get_ready = 'get_ready',
}

export interface IGameMoves {
  MakeBid(value: number): void;
  Discard(): void;
  Call(card: ICard): void;
  AnnounceSlam(announce: boolean): void;
  DeclarePoignee(announce: boolean): void;
  SelectCards(handIndex: number[]): void;
  Finish(quit: boolean): void;
}

export interface IG {
  players: IPlayer[];
  deck: ICard[];
  kitty: ICard[];
  kittyRevealed: boolean;
  kittyPrev: ICard[];
  takerId: string;
  calledTakerId?: string;
  calledCard?: ICard;
  contract: number;
  announcedSlam: boolean;
  poignee: number;
  trick: ITrick;
  resolvedTricks: ITrick[];
  roundSummaries: IRoundSummary[];
}

export const DefaultIG: IG = {
  players: [],
  deck: [],
  kitty: [],
  kittyRevealed: false,
  kittyPrev: [],
  takerId: '',
  calledTakerId: '',
  contract: 0,
  announcedSlam: false,
  poignee: 0,
  trick: { cards: [] },
  resolvedTricks: [],
  roundSummaries: [],
};

export interface IPlayer {
  id: string;
  name: string;
  score: number;
  bid: number;
  isDealer: boolean;
  isTaker: boolean;
  isReady: boolean;
  discardSelection?: number[];
  hand: ICard[];
}

export const DefaultIPlayer: IPlayer = {
  id: '',
  name: '',
  score: 0,
  bid: -1,
  isDealer: false,
  isTaker: false,
  isReady: true,
  hand: [],
};

export interface IRoundSummary {
  takerId: string;
  calledTakerId?: string;
  takerPointsRequired: number;
  takerPoints: number;
  petitAuBout: number;
  multiplier: number;
  poignee: number;
  slam: number;
  scoring: number[];
}
