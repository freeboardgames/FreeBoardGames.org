import React from 'react';
import { GameCustomization, GameCustomizationProps } from 'gamesShared/definitions/customization';
import Dropdown from 'gamesShared/components/customization/Dropdown';
import { GameMode } from 'gamesShared/definitions/mode';

export enum TicTacToeDifficulty {
  EASY = 0,
  HARD = 1,
}

export interface QuickCustomizationState {
  difficulty: TicTacToeDifficulty;
}

export const DEFAULT_QUICK_CUSTOMIZATION = { difficulty: TicTacToeDifficulty.EASY };

const customization: GameCustomization = {
  renderQuick: ({ mode, currentValue, onChange }: GameCustomizationProps) => {
    if (mode != GameMode.AI) {
      return null;
    }
    const state = (currentValue as QuickCustomizationState) || DEFAULT_QUICK_CUSTOMIZATION;
    return (
      <Dropdown
        options={['Easy', 'Hard']}
        selectedIdx={state.difficulty}
        callback={(difficulty) => {
          onChange({ difficulty });
        }}
      />
    );
  },
};

export default customization;
