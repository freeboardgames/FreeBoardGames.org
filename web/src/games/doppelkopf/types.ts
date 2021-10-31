import { CardColor, ICard, ITrick } from 'gamesShared/definitions/cards';

export enum Phases {
  bidding = 'bidding',
  discard = 'discard',
  placement = 'placement',
  round_end = 'round_end',
}

export enum Stages {
  select_trump = 'select_trump',
  get_ready = 'get_ready',
}

export interface IGameMoves {
  MakeBid(contract: Contract): void;
  SelectTrumpSuit(suit: CardColor): void;
  Announce(announcement: Announcement): void;
  SelectCards(handIndex: number[]): void;
  Finish(quit: boolean): void;
}

// not allowed at the end of the game: Pass, Some, Marriage, Solo
export enum Contract {
  None = -1,
  Pass = 0,
  Some = 1,
  Normal = 2,
  Marriage = 3,
  Solo = 4,
  SoloTrump = 5,
  SoloQueen = 6,
  SoloJack = 7,
  SoloAce = 8,
}

export enum Announcement {
  None = 0,
  Win = 121,
  No90 = 151,
  No60 = 181,
  No30 = 211,
  Schwarz = 240,
}

export interface IG {
  players: IPlayer[];
  deck: ICard[];
  takerId: string;
  partnerId?: string;
  trumpSuit: CardColor;
  contract: Contract;
  marriageShift: number;
  announcementRe: Announcement;
  announcementContra: Announcement;
  trick: ITrick;
  resolvedTricks: ITrick[];
  roundSummaries: IRoundSummary[];
}

export const DefaultIG: IG = {
  players: [],
  deck: [],
  takerId: '',
  partnerId: '',
  trumpSuit: null,
  contract: Contract.None,
  marriageShift: 0,
  announcementRe: Announcement.None,
  announcementContra: Announcement.None,
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
  partnerId?: string;
  rePointsRequired: number;
  contraPointsRequired: number;
  rePoints: number;
  basic: number;
  re: number;
  contra: number;
  charlie: number;
  doppelkopf: number;
  fox: number;
  scoring: number[];
}
