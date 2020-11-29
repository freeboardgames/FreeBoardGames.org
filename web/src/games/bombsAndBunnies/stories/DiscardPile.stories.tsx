import React from 'react';
import { CardStyle } from '../components/shared/interfaces';

import { DiscardPile } from '../components/DiscardPile';

export default {
  title: 'Games/Bombs & Bunnies/DiscardPile',
  component: DiscardPile,
};

export const Empty = () => <DiscardPile cards={[]} />;
export const SingleCard = () => <DiscardPile cards={[CardStyle.Style1]} />;
export const DifferentStyledCards2 = () => <DiscardPile cards={[CardStyle.Style1, CardStyle.Style2]} />;
export const DifferentStyledCards3 = () => (
  <DiscardPile cards={[CardStyle.Style1, CardStyle.Style2, CardStyle.Style3]} />
);
export const DifferentStyledCards4 = () => (
  <DiscardPile cards={[CardStyle.Style1, CardStyle.Style2, CardStyle.Style3, CardStyle.Style4]} />
);
export const DifferentStyledCards5 = () => (
  <DiscardPile cards={[CardStyle.Style1, CardStyle.Style2, CardStyle.Style3, CardStyle.Style4, CardStyle.Style5]} />
);
export const DifferentStyledCards6 = () => (
  <DiscardPile
    cards={[CardStyle.Style1, CardStyle.Style2, CardStyle.Style3, CardStyle.Style4, CardStyle.Style5, CardStyle.Style6]}
  />
);
export const DifferentStyledCards20 = () => <DiscardPile cards={new Array(20).fill(0).map((_, i) => i % 6)} />;
