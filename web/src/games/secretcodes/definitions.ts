export enum TeamColor {
  Blue = 'blue',
  Red = 'red',
}

export interface Team {
  color: TeamColor;
  playersID: string[];
  spymasterID: null | string;
}

export enum CardColor {
  civilian = 'civilian',
  blue = 'blue',
  red = 'red',
  assassin = 'assassin',
}

export interface Card {
  word: string;
  color: CardColor;
  revealed: boolean;
}

export interface IG {
  teams: Team[];
  cards: Card[];
  currentTeamIndex?: number;
  lastSelectedCardIndex: null | number;
}

export enum Phases {
  lobby = 'lobby',
  giveClue = 'giveClue',
  guess = 'guess',
}
