export enum Phases {
  dealing = 'dealing',
  bidding = 'bidding',
  calling = 'calling',
  discard = 'discard',
  announce_slam = 'announce_slam',
  placement = 'placement',
  round_end = 'round_end',
  result = 'result',
}

export enum Stages {
  declare_poignee = 'declare_poignee',
  place_card = 'place_card',
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

export interface ICard {
  color: CardColor;
  value: number;
}

export enum CardColor {
  Clubs,
  Diamonds,
  Spades,
  Hearts,
  Trumps,
  Excuse,
}

export interface ITrick {
  cards: ICard[];
  leader?: IPlayer;
  winner?: IPlayer;
}

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
