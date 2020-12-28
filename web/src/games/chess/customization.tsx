import React from 'react';
import { GameCustomization, GameCustomizationProps } from 'gamesShared/definitions/customization';
import Slider from 'gamesShared/components/customization/Slider';
import { GameMode } from 'gamesShared/definitions/mode';

const MIN_VALUE = 1;
const MAX_VALUE = 8;

export interface QuickCustomizationState {
  difficulty: number;
}

const customization: GameCustomization = {
  renderQuick: ({ mode, currentValue, onChange }: GameCustomizationProps) => {
    if (mode != GameMode.AI) {
      return null;
    }
    const state = (currentValue as QuickCustomizationState) || { difficulty: MIN_VALUE };
    return (
      <Slider
        label={'Difficulty'}
        min={MIN_VALUE}
        max={MAX_VALUE}
        value={state.difficulty}
        callback={(difficulty) => {
          onChange({ difficulty });
        }}
      />
    );
  },
};

export default customization;
