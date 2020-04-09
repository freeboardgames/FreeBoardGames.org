export enum CARD_COLOR {
  CIVILIAN = 'CIVILIAN',
  BLUE = 'BLUE',
  RED = 'RED',
  ASSASSIN = 'ASSASSIN',
}

export class Card {
  word: string;
  color: CARD_COLOR;
  revealed: boolean;

  constructor(word: string) {
    this.word = word;
    this.color = CARD_COLOR.CIVILIAN;
    this.revealed = false;
  }
}
