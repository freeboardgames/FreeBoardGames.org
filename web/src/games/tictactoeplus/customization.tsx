import React from 'react';
import { GameCustomization, GameCustomizationProps } from 'gamesShared/definitions/customization';
import Dropdown from 'gamesShared/components/customization/Dropdown';
import { GameMode } from 'gamesShared/definitions/mode';

const options = ['Easy', 'Hard'];

export interface QuickCustomizationState {
  difficultyIdx: number;
}

const customization: GameCustomization = {
  renderQuick: ({ mode, currentValue, onChange }: GameCustomizationProps) => {
    if (mode != GameMode.AI) {
      return null;
    }
    const state = (currentValue as QuickCustomizationState) || { difficultyIdx: 0 };
    return (
      <Dropdown
        options={options}
        selectedIdx={state.difficultyIdx}
        callback={(difficultyIdx) => {
          onChange({ difficultyIdx });
        }}
      />
    );
  },
};

export default customization;
