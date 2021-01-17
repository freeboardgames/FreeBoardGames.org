import React from 'react';
import { GameMode } from './mode';

export enum CustomizationType {
  QUICK,
  FULL,
}

export interface GameCustomizationState {
  quick?: unknown;
  full?: unknown;
}

export interface GameCustomizationProps {
  mode: GameMode;
  currentValue: unknown;
  onChange: (result: unknown) => void;
}

export interface GameCustomization {
  renderQuick?: (args: GameCustomizationProps) => React.ReactNode;
  renderFull?: (args: GameCustomizationProps) => React.ReactNode;
}
