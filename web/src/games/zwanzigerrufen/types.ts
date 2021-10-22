import { ICard, ITrick } from 'gamesShared/definitions/cards';

export enum Phases {
  bidding = 'bidding',
  announce = 'announce',
  placement = 'placement',
  round_end = 'round_end',
}

export enum Stages {
  get_ready = 'get_ready',
}

export enum Announcement {
  None,
  Game,
  Absolut,
  Pagat,
  Valat,
}

export interface IGameMoves {
  MakeBid(contract: Contract): void;
  Announce(announcement: Announcement, contra: boolean): void;
  SelectCards(handIndex: number[]): void;
  Finish(quit: boolean): void;
}

export enum Contract {
  None = -1,
  Pass = 0,
  Normal = 1,
  SoloSuit = 2,
  Solo = 3,
}

export interface IAnnouncements {
  Game: number;
  Absolut: number;
  Pagat: number;
  Valat: number;
}

export const DefaultIAnnouncements: IAnnouncements = {
  Game: 1,
  Absolut: 0,
  Pagat: 0,
  Valat: 0,
};

export interface IG {
  players: IPlayer[];
  deck: ICard[];
  takerId: string;
  partnerId: string;
  calledCard: ICard;
  contract: Contract;
  announcementsRe: IAnnouncements;
  announcementsContra: IAnnouncements;
  trick: ITrick;
  resolvedTricks: ITrick[];
  roundSummaries: IRoundSummary[];
}

export const DefaultIG: IG = {
  players: [],
  deck: [],
  takerId: '',
  partnerId: '',
  calledCard: null,
  contract: Contract.None,
  announcementsRe: null,
  announcementsContra: null,
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
  valat: number;
  absolut: number;
  kings: number;
  trull: number;
  pagat: number;
  mond: number;
  scoring: number[];
}
