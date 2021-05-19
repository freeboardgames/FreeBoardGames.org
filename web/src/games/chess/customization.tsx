import React from 'react';
import { GameCustomization, GameCustomizationProps } from 'gamesShared/definitions/customization';
import Slider from 'gamesShared/components/customization/Slider';
import { GameMode } from 'gamesShared/definitions/mode';
import { WithCurrentGameTranslation, withCurrentGameTranslation } from 'infra/i18n';

const MIN_VALUE = 1;
const MAX_VALUE = 8;

export interface QuickCustomizationState {
  difficulty: number;
}

export const DEFAULT_QUICK_CUSTOMIZATION = { difficulty: MIN_VALUE };

type Props = GameCustomizationProps & WithCurrentGameTranslation;

const QuickCustomization = withCurrentGameTranslation(({ mode, currentValue, onChange, translate }: Props) => {
  if (mode != GameMode.AI) {
    return null;
  }
  const state = (currentValue as QuickCustomizationState) || DEFAULT_QUICK_CUSTOMIZATION;
  return (
    <Slider
      label={translate('difficulty')}
      min={MIN_VALUE}
      max={MAX_VALUE}
      value={state.difficulty}
      callback={(difficulty) => {
        onChange({ difficulty });
      }}
    />
  );
});

const customization: GameCustomization = {
  QuickCustomization,
};

export default customization;
