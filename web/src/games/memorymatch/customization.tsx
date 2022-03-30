import React from 'react';
import { GameCustomization, GameCustomizationProps } from 'gamesShared/definitions/customization';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useCurrentGameTranslation } from 'infra/i18n';

export interface FullCustomizationState {
  stayInTurnOnMatch: boolean;
}

export const DEFAULT_FULL_CUSTOMIZATION = { stayInTurnOnMatch: true };

const changeStayInTurnOnMatch =
  (onChange: (state?: FullCustomizationState) => void, state: FullCustomizationState) => () => {
    const newState = { stayInTurnOnMatch: !state.stayInTurnOnMatch };
    if (newState.stayInTurnOnMatch === DEFAULT_FULL_CUSTOMIZATION.stayInTurnOnMatch) {
      onChange();
    } else {
      onChange(newState);
    }
  };

type Props = GameCustomizationProps;

const FullCustomization = ({ currentValue, onChange }: Props) => {
  const { translate } = useCurrentGameTranslation();
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
        label={translate('customization.stay_in_turn_on_match')}
      />
    </div>
  );
};

const customization: GameCustomization = {
  FullCustomization,
};

export default customization;
