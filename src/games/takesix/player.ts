import Card from './card';

export default interface Player {
  cards: Card[];
  selectedCard?: Card;
  penaltyCards: Card[];
}
