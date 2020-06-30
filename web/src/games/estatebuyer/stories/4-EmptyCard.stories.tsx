import React from 'react';

import { EmptyCardComponent } from '../CardComponent';

export default {
  title: 'Games/EstateBuyer/Cards/EmptyCard',
  component: EmptyCardComponent,
};

const cardData = {
  number: 0,
  value: 0,
  showing: false,
};

export const Empty = () => <EmptyCardComponent card={cardData} />;
