import React from 'react';
import { CardStyle } from '../components/shared/interfaces';
import { PlayerStack, IPlayerStackProps } from '../components/PlayerStack';
export default {
  title: 'Games/Bombs & Bunnies/PlayerStack',
  component: PlayerStack,
};
const defaultData: IPlayerStackProps = {
  cardStyle: CardStyle.Style1,
  playerId: '0',
  stackSize: 0,
};
export const Empty = () => <PlayerStack {...defaultData} stackSize={0} />;
export const StackSize1 = () => <PlayerStack {...defaultData} stackSize={1} />;
export const StackSize2 = () => <PlayerStack {...defaultData} stackSize={2} />;
export const StackSize3 = () => <PlayerStack {...defaultData} stackSize={3} />;
export const StackSize4 = () => <PlayerStack {...defaultData} stackSize={4} />;
