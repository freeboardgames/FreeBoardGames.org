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

export const defaultDeck = new Array(108).fill('').map((_, i) => {
  if (i < 5) return 'sandwichChicken';
  else if (i >= 5 && i < 15) return 'sandwichPork';
  else if (i >= 15 && i < 20) return 'sandwichBeef';
  else if (i >= 20 && i < 26) return 'chipsPotato1';
  else if (i >= 26 && i < 38) return 'chipsPotato2';
  else if (i >= 38 && i < 46) return 'chipsPotato3';
  else if (i >= 46 && i < 60) return 'deviledEggs';
  else if (i >= 60 && i < 74) return 'friedChicken';
  else if (i >= 74 && i < 88) return 'pizza';
  else if (i >= 88 && i < 98) return 'cake';
  else if (i >= 98 && i < 104) return 'mayo';
  else return 'fork';
});
