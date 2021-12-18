import * as React from 'react';
import { GameCustomization, GameCustomizationProps } from 'gamesShared/definitions/customization';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import { useCurrentGameTranslation } from 'infra/i18n';

export interface FullCustomizationState {
  forcedCapture: boolean;
}

export const DEFAULT_FULL_CUSTOMIZATION: FullCustomizationState = {
  forcedCapture: true,
};

const changeForcedCapture = (
  onChange: (state?: FullCustomizationState) => void,
  state: FullCustomizationState,
) => () => {
  const newState: FullCustomizationState = {
    ...state,
    forcedCapture: !state.forcedCapture,
  };
  onChange(newState);
};

const FullCustomization = ({ currentValue, onChange }: GameCustomizationProps) => {
  const { translate } = useCurrentGameTranslation();
  const state = (currentValue as FullCustomizationState) || DEFAULT_FULL_CUSTOMIZATION;
  const style = {
    padding: '16px',
    display: 'grid',
    gridTemplateColumns: 'max-content max-content',
    gridAutoRows: '36px',
    columnGap: '16px',
    alignItems: 'center',
  };

  return (
    <div style={style}>
      <Typography align="right">{translate('customization.forced_capture')}</Typography>
      <Switch checked={state.forcedCapture} onChange={changeForcedCapture(onChange, state)} color="primary" />
    </div>
  );
};

const customization: GameCustomization = {
  FullCustomization,
};

export default customization;
