import React from 'react';

import { BetDisplay } from '../components/BetDisplay';

export default {
  title: 'Games/Bombs & Bunnies/BetDisplay',
  component: BetDisplay,
};

export const Bet1 = () => <BetDisplay currentBet={1} isRevealing={false} />;
export const Bet2 = () => <BetDisplay currentBet={2} isRevealing={false} />;
export const Bet3 = () => <BetDisplay currentBet={3} isRevealing={false} />;

export const Revealing0Of4 = () => <BetDisplay currentBet={4} revealedCount={0} isRevealing={true} />;
export const Revealing1Of4 = () => <BetDisplay currentBet={4} revealedCount={1} isRevealing={true} />;
export const Revealing2Of4 = () => <BetDisplay currentBet={4} revealedCount={2} isRevealing={true} />;
export const Revealing3Of4 = () => <BetDisplay currentBet={4} revealedCount={3} isRevealing={true} />;
