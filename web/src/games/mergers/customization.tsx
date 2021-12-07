import React from 'react';
import { GameCustomization, GameCustomizationProps } from 'gamesShared/definitions/customization';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { Tooltip } from '@material-ui/core';

export interface QuickCustomizationState {
  isAllPlayerStateVisible: boolean;
}

export const DEFAULT_QUICK_CUSTOMIZATION = { isAllPlayerStateVisible: false };

const QuickCustomization = ({ currentValue, onChange }: GameCustomizationProps) => {
  const state = (currentValue as QuickCustomizationState) || DEFAULT_QUICK_CUSTOMIZATION;
  return (
    <Tooltip
      leaveTouchDelay={3000}
      enterTouchDelay={0}
      arrow={true}
      title="Enable to show each player's stocks and money to all other players"
    >
      <FormControlLabel
        label="Show hands"
        labelPlacement="start"
        control={
          <Switch
            color="primary"
            checked={state.isAllPlayerStateVisible}
            onChange={(event) => onChange({ isAllPlayerStateVisible: event.target.checked })}
          />
        }
      />
    </Tooltip>
  );
};

const customization: GameCustomization = {
  QuickCustomization,
};

export default customization;
