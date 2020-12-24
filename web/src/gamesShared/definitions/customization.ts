import { GameMode } from './mode';

export interface GameCustommizationState {
  quick?: unknown;
  full?: unknown;
}

export interface GameCustomizationRenderArgs {
  mode: GameMode;
  currentValue: unknown;
  onChange: (result: unknown) => void;
}

export interface GameCustomization {
  renderQuick?: (args: GameCustomizationRenderArgs) => JSX.Element | null;
  renderFull?: (args: GameCustomizationRenderArgs) => JSX.Element | null;
}
