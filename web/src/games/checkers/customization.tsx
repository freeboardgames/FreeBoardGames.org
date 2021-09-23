import * as React from 'react';
import { GameCustomization, GameCustomizationProps } from 'gamesShared/definitions/customization';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';

export interface FullCustomizationState {
  flyingKings: boolean;
}

export const DEFAULT_FULL_CUSTOMIZATION: FullCustomizationState = {
  flyingKings: false,
};

const changeFlyingKings = (onChange: (state?: FullCustomizationState) => void, state: FullCustomizationState) => () => {
  const newState: FullCustomizationState = {
    ...state,
    flyingKings: !state.flyingKings,
  };
  onChange(newState);
};

const FullCustomization = ({ currentValue, onChange }: GameCustomizationProps) => {
  const state = (currentValue as FullCustomizationState) || DEFAULT_FULL_CUSTOMIZATION;
  const style = {
    padding: '16px',
    display: 'grid',
    gridTemplateColumns: 'max-content max-content',
    gridAutoRows: '2em',
    columnGap: '16px',
    alignItems: 'center',
  };

  return (
    <div style={style}>
      <Typography align="right">Flying Kings</Typography>
      <Switch checked={state.flyingKings} onChange={changeFlyingKings(onChange, state)} color="primary" />
    </div>
  );
};

const customization: GameCustomization = {
  FullCustomization,
};

export default customization;
