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
  MakeBid(contract: Contract): void;
  Discard(): void;
  Call(card: ICard): void;
  AnnounceSlam(announce: boolean): void;
  DeclarePoignee(announce: boolean): void;
  SelectCards(handIndex: number[]): void;
  Finish(quit: boolean): void;
}

export enum Contract {
  None = -1,
  Pass = 0,
  Small = 1,
  Guard = 2,
  GuardWithout = 3,
  GuardAgainst = 4,
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
  contract: Contract;
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
  contract: Contract.None,
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
  bid: Contract;
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
  bid: Contract.None,
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
