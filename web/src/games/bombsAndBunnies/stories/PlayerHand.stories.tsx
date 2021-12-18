import React from 'react';
import { PlayerHand, IPlayerHandProps } from '../components/PlayerHand';
import { CardType, CardStyle } from '../components/shared/interfaces';
export default {
  title: 'Games/Bombs & Bunnies/PlayerHand',
  component: PlayerHand,
};
const defaultProps: IPlayerHandProps = {
  cardStyle: CardStyle.Style1,
  hand: [],
  playerId: '0',
};
export const Empty = () => <PlayerHand {...defaultProps} hand={[]} />;
export const OneCard = () => <PlayerHand {...defaultProps} hand={[CardType.Bunny]} />;
export const TwoCards = () => <PlayerHand {...defaultProps} hand={[CardType.Bunny, CardType.Bomb]} />;
export const FullHand = () => (
  <PlayerHand {...defaultProps} hand={[CardType.Bunny, CardType.Bunny, CardType.Bunny, CardType.Bomb]} />
);
