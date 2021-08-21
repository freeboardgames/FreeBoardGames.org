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
];
