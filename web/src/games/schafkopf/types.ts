import { ICard, Suit, ITrick } from 'gamesShared/definitions/cards';

export enum Phases {
  bidding = 'bidding',
  discard = 'discard',
  placement = 'placement',
  round_end = 'round_end',
}

export enum Stages {
  call_card = 'call_card',
  select_trump = 'select_trump',
  announce_tout = 'announce_tout',
  get_ready = 'get_ready',
}

export interface IGameMoves {
  MakeBid(value: number): void;
  Call(card: ICard): void;
  SelectTrumpSuit(suit: Suit): void;
  AnnounceTout(announce: boolean): void;
  GiveContra(): void;
  SelectCards(handIndex: number[]): void;
  Finish(quit: boolean): void;
}

export enum Contract {
  None = -1,
  Pass = 0,
  Some = 1,
  Ace = 2,
  Bettel = 3,
  Wenz = 4,
  Solo = 5,
}

export interface IG {
  players: IPlayer[];
  deck: ICard[];
  takerId: string;
  calledTakerId?: string;
  calledMayRun: number;
  calledCard?: ICard;
  trumpSuit: Suit;
  contract: Contract;
  announcedTout: boolean;
  contra: number;
  trick: ITrick;
  resolvedTricks: ITrick[];
  roundSummaries: IRoundSummary[];
}

export const DefaultIG: IG = {
  players: [],
  deck: [],
  takerId: '',
  calledTakerId: '',
  calledMayRun: null,
  calledCard: null,
  trumpSuit: null,
  contract: Contract.None,
  announcedTout: null,
  contra: 1,
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
  basic: number;
  running: number;
  schneider: number;
  schwarz: number;
  multiplier: number;
  scoring: number[];
}
