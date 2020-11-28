import React from 'react';

import { BetPanel } from '../components/BetPanel';

export default {
  title: 'Games/Bombs & Bunnies/BetPanel',
  component: BetPanel,
};

const betFn = () => {};

export const NoBetsAvailable = () => <BetPanel minBet={1} maxBet={0} bet={betFn} />;
export const Bet1To1 = () => <BetPanel minBet={1} maxBet={1} bet={betFn} />;
export const Bet1To2 = () => <BetPanel minBet={1} maxBet={2} bet={betFn} />;
export const Bet2To2 = () => <BetPanel minBet={2} maxBet={2} bet={betFn} />;
export const Bet1To24 = () => <BetPanel minBet={1} maxBet={24} bet={betFn} />;
