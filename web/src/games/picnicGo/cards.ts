import { IPlayer, cardEnum } from './types';

export function getCardName(c: cardEnum): string {
  // TODO: Refactor this for localization
  const cardNames = [
    'Chicken Sandwich',
    'Pork Sandwich',
    'Beef Sandwich',
    'Potato Chips',
    'Potato Chips',
    'Potato Chips',
    'Deviled Eggs',
    'Fried Chicken',
    'Pizza',
    'Fork',
    'Mayonnaise',
    'Cake',
  ];

  return cardNames[c];
}

export const cardFunctions: ((p: IPlayer) => IPlayer)[] = [
  (p: IPlayer) => {
    if (p.unusedMayo > 0) {
      p.unusedMayo--;
      p.score += 3;
    } else p.score += 1;
    return p;
  },
  (p: IPlayer) => {
    if (p.unusedMayo > 0) {
      p.unusedMayo--;
      p.score += 6;
    } else p.score += 2;
    return p;
  },
  (p: IPlayer) => {
    if (p.unusedMayo > 0) {
      p.unusedMayo--;
      p.score += 9;
    } else p.score += 3;
    return p;
  },
  (p: IPlayer) => {
    p.chipsCount += 1;
    return p;
  },
  (p: IPlayer) => {
    p.chipsCount += 2;
    return p;
  },
  (p: IPlayer) => {
    p.chipsCount += 3;
    return p;
  },
  (p: IPlayer) => {
    const count = p.playedCards.filter((e) => e === cardEnum.deviledEggs).length;
    if (count % 2 === 0) p.score += 5;
    return p;
  },
  (p: IPlayer) => {
    const count = p.playedCards.filter((e) => e === cardEnum.friedChicken).length;
    if (count % 3 === 0) p.score += 10;
    return p;
  },
  (p: IPlayer) => {
    const count = p.playedCards.filter((e) => e === cardEnum.pizza).length;
    if (count <= 5) p.score += count;
    return p;
  },
  (p: IPlayer) => {
    p.unusedForks++;
    return p;
  },
  (p: IPlayer) => {
    p.unusedMayo++;
    return p;
  },
  (p: IPlayer) => {
    p.dessertsCount++;
    return p;
  },
];

export const defaultDeck = new Array(108).fill(0).map((_, i) => {
  if (i < 5) return cardEnum.sandwichChicken;
  else if (i >= 5 && i < 15) return cardEnum.sandwichPork;
  else if (i >= 15 && i < 20) return cardEnum.sandwichBeef;
  else if (i >= 20 && i < 26) return cardEnum.chipsPotato1;
  else if (i >= 26 && i < 38) return cardEnum.chipsPotato2;
  else if (i >= 38 && i < 46) return cardEnum.chipsPotato3;
  else if (i >= 46 && i < 60) return cardEnum.deviledEggs;
  else if (i >= 60 && i < 74) return cardEnum.friedChicken;
  else if (i >= 74 && i < 88) return cardEnum.pizza;
  else if (i >= 88 && i < 98) return cardEnum.cake;
  else if (i >= 98 && i < 104) return cardEnum.mayo;
  else return cardEnum.fork;
});
