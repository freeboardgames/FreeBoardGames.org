import React from 'react';
import { IPlayerZoneProps, PlayerZone } from '../components/PlayerZone';
import { CardType, CardStyle } from '../components/shared/interfaces';
export default {
  title: 'Games/Bombs & Bunnies/PlayerZone',
  component: PlayerZone,
};
const defaultData: IPlayerZoneProps = {
  playerId: '0',
  playerName: 'Player 1',
  stackSize: 0,
  revealedStack: [],
  totalPlayers: 1,
  positionIndex: 0,
  bet: 0,
  playerCardStyle: CardStyle.Style1,
  playerStatuses: [],
  totalPlayerCards: 0,
  playerIsOut: false,
};
export const Empty = () => <PlayerZone {...defaultData} />;
export const Stack1 = () => <PlayerZone {...defaultData} stackSize={1} />;
export const AllRevealedBunny1 = () => <PlayerZone {...defaultData} revealedStack={[CardType.Bunny]} />;
export const AllRevealedBomb2 = () => <PlayerZone {...defaultData} revealedStack={[CardType.Bunny, CardType.Bomb]} />;
export const Stack1RevealedBomb1 = () => <PlayerZone {...defaultData} stackSize={1} revealedStack={[CardType.Bomb]} />;
