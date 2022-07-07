import { ComponentType } from 'react';
import { GameMode } from './mode';

export enum CustomizationType {
  QUICK,
  FULL,
}

export interface GameCustomizationState {
  quick?: unknown;
  full?: unknown;
}

export interface FullGameCustomizationState {
  local?: GameCustomizationState;
  online?: GameCustomizationState;
  AI?: GameCustomizationState;
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