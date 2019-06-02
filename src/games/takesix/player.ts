import Card from './card';

export default class Player {
  cards: Card[];
  selectedCard: Card;
  penaltyCards: Card[];

  constructor(cards: Card[], selectedCard: Card) {
    this.cards = cards;
    this.selectedCard = selectedCard;
    this.penaltyCards = [];
  }
}
