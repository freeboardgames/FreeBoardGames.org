import React from 'react';

import { SkipButton } from '../components/BetButton';

export default {
  title: 'Games/Bombs & Bunnies/SkipButton',
  component: SkipButton,
};

export const NoBetsAvailable = () => <SkipButton />;
export const CanSkip = () => <SkipButton click={() => {}} />;
