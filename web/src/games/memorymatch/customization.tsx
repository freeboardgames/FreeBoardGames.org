import React from 'react';
import { GameCustomization, GameCustomizationProps } from 'gamesShared/definitions/customization';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export interface FullCustomizationState {
  stayInTurnOnMatch: boolean;
}

export const DEFAULT_FULL_CUSTOMIZATION = { stayInTurnOnMatch: true };

const changeStayInTurnOnMatch = (
  onChange: (state?: FullCustomizationState) => void,
  state: FullCustomizationState,
) => () => {
  const newState = { stayInTurnOnMatch: !state.stayInTurnOnMatch };
  if (newState.stayInTurnOnMatch === DEFAULT_FULL_CUSTOMIZATION.stayInTurnOnMatch) {
    onChange();
  } else {
    onChange(newState);
  }
};

const customization: GameCustomization = {
  renderFull: ({ currentValue, onChange }: GameCustomizationProps) => {
    const state = (currentValue as FullCustomizationState) || DEFAULT_FULL_CUSTOMIZATION;
    return (
      <div style={{ padding: '16px' }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.stayInTurnOnMatch}
              onChange={changeStayInTurnOnMatch(onChange, state)}
              color="primary"
            />
          }
          label="Stay In Turn On Match"
        />
      </div>
    );
  },
};

export default customization;
