import React from 'react';
import { GameCustomization, GameCustomizationProps } from 'gamesShared/definitions/customization';
import Dropdown from 'gamesShared/components/customization/Dropdown';
import { GameMode } from 'gamesShared/definitions/mode';
import { useCurrentGameTranslation } from 'infra/i18n';

export enum TicTacToePlusDifficulty {
  EASY = 0,
  HARD = 1,
}

export interface QuickCustomizationState {
  difficulty: TicTacToePlusDifficulty;
}

export const DEFAULT_QUICK_CUSTOMIZATION = { difficulty: TicTacToePlusDifficulty.EASY };

type Props = GameCustomizationProps;

const QuickCustomization = ({ mode, currentValue, onChange }: Props) => {
  const { translate } = useCurrentGameTranslation();

  if (mode != GameMode.AI) {
    return null;
  }

  const state = (currentValue as QuickCustomizationState) || DEFAULT_QUICK_CUSTOMIZATION;

  return (
    <Dropdown
      options={[translate('easy'), translate('hard')]}
      selectedIdx={state.difficulty}
      callback={(difficulty) => {
        onChange({ difficulty });
      }}
    />
  );
};

const customization: GameCustomization = {
  QuickCustomization,
};

export default customization;
