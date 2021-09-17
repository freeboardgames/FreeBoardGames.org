export enum Phases {
  bidding = 'bidding',
  discard = 'discard',
  placement = 'placement',
  round_end = 'round_end',
}

export enum Stages {
  call_card = 'call_card',
  select_trump = 'select_trump',
  get_ready = 'get_ready',
}

export interface IGameMoves {
  MakeBid(value: number): void;
  Discard(): void;
  Call(card: ICard): void;
  SelectTrumpSuit(suit: CardColor): void;
  SelectCards(handIndex: number[]): void;
  Finish(quit: boolean): void;
}

export enum CardColor {
  Schell,
  Herz,
  Gras,
  Eichel,
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
  kitty: ICard[];
  kittyRevealed: boolean;
  kittyPrev: ICard[];
  takerId: string;
  calledTakerId?: string;
  calledMayRun: number;
  calledCard?: ICard;
  trumpSuit: CardColor;
  contract: Contract;
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
  calledMayRun: null,
  calledCard: null,
  trumpSuit: null,
  contract: Contract.None,
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

export interface ICard {
  color: CardColor;
  value: number;
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
  schneider: number;
  scoring: number[];
}
