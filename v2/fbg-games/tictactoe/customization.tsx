import React from 'react';
import { GameCustomization, GameCustomizationProps } from 'fbg-games/gamesShared/definitions/customization';
import Dropdown from 'fbg-games/gamesShared/components/customization/Dropdown';
import { GameMode } from 'fbg-games/gamesShared/definitions/mode';
import { useTranslation } from "next-i18next";

export enum TicTacToeDifficulty {
  EASY = 0,
  HARD = 1,
}

export interface QuickCustomizationState {
  difficulty: TicTacToeDifficulty;
}

export const DEFAULT_QUICK_CUSTOMIZATION = { difficulty: TicTacToeDifficulty.EASY };

const QuickCustomization = ({ mode, currentValue, onChange }: GameCustomizationProps) => {
  const { t } = useTranslation('game-tictactoe');

  if (mode != GameMode.AI) {
    return null;
  }

  const state = (currentValue as QuickCustomizationState) || DEFAULT_QUICK_CUSTOMIZATION;

  return (
    <Dropdown
      options={[t('easy'), t('hard')]}
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
