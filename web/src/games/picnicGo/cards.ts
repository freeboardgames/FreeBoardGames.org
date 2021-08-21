import { cardTypes, ICardDefinition, IPlayer } from './types';

export const cardDefinitions: ICardDefinition[] = [
  {
    id: 'sandwichChicken',
    name: 'Chicken Sandwich',
    cardType: cardTypes.sandwich,
    scoreFunc: (p: IPlayer) => {
      if (p.unusedMayo > 0) {
        p.unusedMayo--;
        p.score += 3;
      } else {
        p.score += 1;
      }
      return p;
    },
  },
  {
    id: 'sandwichPork',
    name: 'Pork Sandwich',
    cardType: cardTypes.sandwich,
    scoreFunc: (p: IPlayer) => {
      if (p.unusedMayo > 0) {
        p.unusedMayo--;
        p.score += 6;
      } else {
        p.score += 2;
      }
      return p;
    },
  },
  {
    id: 'sandwichBeef',
    name: 'Beef Sandwich',
    cardType: cardTypes.sandwich,
    scoreFunc: (p: IPlayer) => {
      if (p.unusedMayo > 0) {
        p.unusedMayo--;
        p.score += 9;
      } else {
        p.score += 3;
      }
      return p;
    },
  },
  {
    id: 'chipsPotato1',
    name: 'Potato Chips',
    cardType: cardTypes.chips,
    scoreFunc: (p: IPlayer) => {
      p.chipsCount += 1;
      return p;
    },
  },
  {
    id: 'chipsPotato2',
    name: 'Potato Chips',
    cardType: cardTypes.chips,
    scoreFunc: (p: IPlayer) => {
      p.chipsCount += 2;
      return p;
    },
  },
  {
    id: 'chipsPotato3',
    name: 'Potato Chips',
    cardType: cardTypes.chips,
    scoreFunc: (p: IPlayer) => {
      p.chipsCount += 3;
      return p;
    },
  },
  {
    id: 'deviledEggs',
    name: 'Deviled Eggs',
    cardType: cardTypes.meal,
    scoreFunc: (p: IPlayer) => {
      const deviledEggCount = p.playedCards.filter((e) => e === 'deviledEggs').length;
      if (deviledEggCount % 2 === 0) p.score += 5;
      return p;
    },
  },
  {
    id: 'friedChicken',
    name: 'Fried Chicken',
    cardType: cardTypes.meal,
    scoreFunc: (p: IPlayer) => {
      const friedChickenCount = p.playedCards.filter((e) => e === 'friedChicken').length;
      if (friedChickenCount % 3 === 0) p.score += 10;
      return p;
    },
  },
  {
    id: 'pizza',
    name: 'Pizza',
    cardType: cardTypes.meal,
    scoreFunc: (p: IPlayer) => {
      const pizzaCount = p.playedCards.filter((e) => e === 'pizza').length;
      if (pizzaCount <= 5) p.score += pizzaCount;
      return p;
    },
  },
  {
    id: 'fork',
    name: 'Fork',
    cardType: cardTypes.special,
    scoreFunc: (p: IPlayer) => {
      p.unusedForks++;
      return p;
    },
  },
  {
    id: 'mayo',
    name: 'Mayonnaise',
    cardType: cardTypes.special,
    scoreFunc: (p: IPlayer) => {
      p.unusedMayo++;
      return p;
    },
  },
  {
    id: 'cake',
    name: 'Cake',
    cardType: cardTypes.dessert,
    scoreFunc: (p: IPlayer) => {
      p.dessertsCount++;
      return p;
    },
  },
];
