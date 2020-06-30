import React from 'react';

import { MoneyCardComponent } from '../CardComponent';

export default {
  title: 'Games/EstateBuyer/Cards/MoneyCard',
  component: MoneyCardComponent,
};

const cardData = {
  number: 1,
  value: 1,
  showing: true,
};

export const Hidden = () => <MoneyCardComponent card={{ ...cardData, showing: false }} />;
export const Showing1 = () => <MoneyCardComponent card={cardData} />;
export const Showing2 = () => <MoneyCardComponent card={{ ...cardData, number: 2 }} />;
export const Showing3 = () => <MoneyCardComponent card={{ ...cardData, number: 3 }} />;
export const Showing4 = () => <MoneyCardComponent card={{ ...cardData, number: 4 }} />;
export const Showing5 = () => <MoneyCardComponent card={{ ...cardData, number: 5 }} />;
export const Showing6 = () => <MoneyCardComponent card={{ ...cardData, number: 6 }} />;
export const Showing7 = () => <MoneyCardComponent card={{ ...cardData, number: 7 }} />;
export const Showing8 = () => <MoneyCardComponent card={{ ...cardData, number: 8 }} />;
export const Showing9 = () => <MoneyCardComponent card={{ ...cardData, number: 9 }} />;
export const Showing10 = () => <MoneyCardComponent card={{ ...cardData, number: 10 }} />;
export const Showing11 = () => <MoneyCardComponent card={{ ...cardData, number: 11 }} />;
export const Showing12 = () => <MoneyCardComponent card={{ ...cardData, number: 12 }} />;
export const Showing13 = () => <MoneyCardComponent card={{ ...cardData, number: 13 }} />;
export const Showing14 = () => <MoneyCardComponent card={{ ...cardData, number: 14 }} />;
export const Showing15 = () => <MoneyCardComponent card={{ ...cardData, number: 15 }} />;
