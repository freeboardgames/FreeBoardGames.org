import { GameMode } from './mode';

export interface GameCustommizationState {
  quick?: unknown;
  full?: unknown;
}

export interface GameCustomizationProps {
  mode: GameMode;
  currentValue: unknown;
  onChange: (result: unknown) => void;
}

export interface GameCustomization {
  renderQuick?: (args: GameCustomizationProps) => JSX.Element | null;
  renderFull?: (args: GameCustomizationProps) => JSX.Element | null;
}
