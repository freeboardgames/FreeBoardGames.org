import React from 'react';

import { DeckComponent } from '../DeckComponent';

export default {
  title: 'Games/EstateBuyer/Decks',
  component: DeckComponent,
};

const buildingCard = {
    building: true,
    number: 1,
    value: 1,
    showing: false,
}

const moneyCard = {
    money: true,
    number: 1,
    value: 1,
    showing: false,
}

export const Empty = () => <DeckComponent cards={[]} />;
export const OneBuildingCard = () => <DeckComponent cards={[buildingCard]} />;
export const SixBuildingCard = () => <DeckComponent cards={[buildingCard, buildingCard, buildingCard, buildingCard, buildingCard, buildingCard]} />;
export const SixBuildingCardWithCount = () => <DeckComponent cards={[buildingCard, buildingCard, buildingCard, buildingCard, buildingCard, buildingCard]} numCardsPerRound={2} />;
export const OneMoneyCard = () => <DeckComponent cards={[moneyCard]} />;
export const TenMoneyCard = () => <DeckComponent cards={[moneyCard, moneyCard, moneyCard, moneyCard, moneyCard,moneyCard, moneyCard, moneyCard, moneyCard, moneyCard]} />;