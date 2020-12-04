import React from 'react';

import { PlayerRevealedStack } from '../components/PlayerRevealedStack';
import { CardStyle, CardType } from '../components/shared/interfaces';

export default {
  title: 'Games/Bombs & Bunnies/PlayerRevealedStack',
  component: PlayerRevealedStack,
};

const defaultProps = {
  stack: [],
  cardStyle: CardStyle.Style1,
};

export const Empty = () => <PlayerRevealedStack {...defaultProps} stack={[]} />;
export const Bunny1 = () => <PlayerRevealedStack {...defaultProps} stack={[CardType.Bunny]} />;
export const Bunny2 = () => <PlayerRevealedStack {...defaultProps} stack={[CardType.Bunny, CardType.Bunny]} />;
export const Bunny3 = () => (
  <PlayerRevealedStack {...defaultProps} stack={[CardType.Bunny, CardType.Bunny, CardType.Bunny]} />
);
export const Bunny4 = () => (
  <PlayerRevealedStack {...defaultProps} stack={[CardType.Bunny, CardType.Bunny, CardType.Bunny, CardType.Bunny]} />
);
export const Bomb1 = () => <PlayerRevealedStack {...defaultProps} stack={[CardType.Bomb]} />;
export const BunnyBomb2 = () => <PlayerRevealedStack {...defaultProps} stack={[CardType.Bunny, CardType.Bomb]} />;
