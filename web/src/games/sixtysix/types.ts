import { ITrick, Suit, ICard } from 'gamesShared/definitions/cards';

export enum Phases {
  dealing = 'dealing',
  placement = 'placement',
  round_end = 'round_end',
}

export enum Stages {
  get_ready = 'get_ready',
}

export interface IGameMoves {
  GoOut(): void;
  Close(): void;
  DrawCards(): void;
  Meld(suit: Suit): void;
  SelectCards(handIndex: number[]): void;
  Finish(quit: boolean): void;
}

export interface IG {
  players: IPlayer[];
  deck: ICard[];
  stock: ICard[];
  trumpSuit: Suit;
  trick: ITrick;
  exchanged9: string;
  lastMeldTime: number;
  out: string;
  closed: boolean;
  resolvedTricks: ITrick[];
  roundSummaries: IRoundSummary[];
}

export const DefaultIG: IG = {
  players: [],
  deck: [],
  stock: [],
  trumpSuit: null,
  trick: { cards: [] },
  exchanged9: null,
  lastMeldTime: null,
  out: null,
  closed: false,
  resolvedTricks: [],
  roundSummaries: [],
};

export interface IPlayer {
  id: string;
  name: string;
  score: number;
  isDealer: boolean;
  isReady: boolean;
  hand: ICard[];
  melds: Suit[];
}

export const DefaultIPlayer: IPlayer = {
  id: '',
  name: '',
  score: 0,
  isDealer: false,
  isReady: true,
  hand: [],
  melds: [],
};

export interface IRoundSummary {
  winnerId: string;
  points: number[];
  schneider: number;
  schwarz: number;
  againstClose: number;
  againstOut: number;
  scoring: number[];
}
