import { ComponentType } from 'react';
import { GameMode } from './mode';

export enum CustomizationType {
  QUICK = 'quick',
  FULL = 'full',
}

export interface GameCustomizationState {
  quick: any;
  full: any;
}

export interface FullGameCustomizationState {
  local: GameCustomizationState;
  online: GameCustomizationState;
  AI: GameCustomizationState;
}

export const EMPTY_FULL_GAME_CUSTOMIZATION_STATE = {
  local: { quick: null, full: null },
  online: { quick: null, full: null },
  AI: { quick: null, full: null }
}

export interface GameCustomizationProps {
  mode: GameMode;
  currentValue: unknown;
  onChange: (result: unknown) => void;
}

export interface GameCustomization<
  TQuickCustomizationProps extends GameCustomizationProps = GameCustomizationProps,
  TFullCustomizationProps extends GameCustomizationProps = GameCustomizationProps,
> {
  QuickCustomization?: ComponentType<TQuickCustomizationProps>;
  FullCustomization?: ComponentType<TFullCustomizationProps>;
}