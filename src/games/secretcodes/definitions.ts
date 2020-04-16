export enum TeamColor {
  Blue = 'blue',
  Red = 'red',
}

export interface Team {
  color: TeamColor;
  playersID: number[];
  spymasterID: null | number;
  start: boolean;
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
}

export enum Phases {
  lobby = 'lobby',
  play = 'play',
}

export enum Stages {
  chooseTeam = 'chooseTeam',
  giveClue = 'giveClue',
  guess = 'guess',
}
