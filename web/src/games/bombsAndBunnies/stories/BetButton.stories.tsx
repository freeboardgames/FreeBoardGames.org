import React from 'react';
import { BetButton } from '../components/BetButton';
export default {
  title: 'Games/Bombs & Bunnies/BetButton',
  component: BetButton,
};
export const NoBetsAvailable = () => <BetButton />;
export const CanBet = () => <BetButton click={() => {}} />;
