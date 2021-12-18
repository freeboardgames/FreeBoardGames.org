import { ITrick, Suit, ICard } from 'gamesShared/definitions/cards';

export enum Phases {
  bidding = 'bidding',
  discard = 'discard',
  placement = 'placement',
  round_end = 'round_end',
}

export enum Stages {
  declare_hand = 'declare_hand',
  select_contract = 'select_contract',
  select_trump = 'select_trump',
  announce = 'announce',
  place_card = 'place_card',
  get_ready = 'get_ready',
}

export enum Announcement {
  None,
  Schneider,
  Schwarz,
  Ouvert,
}

export enum Contract {
  None,
  Suit,
  Null,
  Grand,
}

export interface IGameMoves {
  MakeBid(value: number): void;
  DeclareHand(declare: boolean): void;
  Discard(): void;
  SelectContract(contract: Contract): void;
  SelectTrumpSuit(suit: Suit): void;
  Announce(announcement: Announcement): void;
  SelectCards(handIndex: number[]): void;
  Finish(quit: boolean): void;
}

export interface IG {
  players: IPlayer[];
  deck: ICard[];
  kitty: ICard[];
  kittyRevealed: boolean;
  kittyPrev: ICard[];
  holderId: string;
  bidderId: string;
  takerId: string;
  contract: Contract;
  trumpSuit: Suit;
  hand: boolean;
  announcement: Announcement;
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
  holderId: null,
  bidderId: null,
  takerId: '',
  contract: Contract.None,
  trumpSuit: null,
  hand: null,
  announcement: null,
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
  bid: 1,
  isDealer: false,
  isTaker: false,
  isReady: true,
  hand: [],
};

export interface IRoundSummary {
  takerId: string;
  takerBid: number;
  takerPointsRequired: number;
  takerPoints: number;
  winLevel: number;
  tops: number;
  basicValue: number;
  scoring: number[];
}
