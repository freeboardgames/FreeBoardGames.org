import React from 'react';

import { IPlayerZonesProps, PlayerZones } from '../components/PlayerZones';
import { IPlayerProps, CardType, CardStyle } from '../components/shared/interfaces';

export default {
  title: 'Games/Bombs & Bunnies/PlayerZones/2 Players',
  component: PlayerZones,
};

const defaultPlayer: IPlayerProps = {
  bet: 0,
  betSkipped: false,
  hand: [],
  id: '0',
  stack: [CardType.Bunny],
  revealedStack: [CardType.Bunny, CardType.Bunny, CardType.Bomb],
  wins: 0,
  cardStyle: CardStyle.Style1,
  isOut: false,
  isBeingPunished: false,
  isDiscarding: false,
};

const defaultPlayers = [defaultPlayer, defaultPlayer];

const defaultData: IPlayerZonesProps = {
  canRevealTargetStack: () => false,
  currentPlayerId: '0',
  perspectivePlayerId: '0',
  currentBet: 0,
  players: defaultPlayers,
};

export const Empty = () => <PlayerZones {...defaultData} />;
