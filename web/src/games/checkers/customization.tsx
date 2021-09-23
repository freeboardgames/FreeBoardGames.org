import * as React from 'react';
import { GameCustomization, GameCustomizationProps } from 'gamesShared/definitions/customization';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export enum piecesPerPlayer {
  TWELVE,
  EIGHT,
}

export interface FullCustomizationState {
  piecesPerPlayer: piecesPerPlayer;
  flyingKings: boolean;
}

export const DEFAULT_FULL_CUSTOMIZATION: FullCustomizationState = {
  piecesPerPlayer: piecesPerPlayer.TWELVE,
  flyingKings: false,
};

const changeFlyingKings = (onChange: (state?: FullCustomizationState) => void, state: FullCustomizationState) => () => {
  const newState: FullCustomizationState = {
    ...state,
    flyingKings: !state.flyingKings,
  };
  onChange(newState);
};

const changePiecesPerPlayer = (onChange: (state?: FullCustomizationState) => void, state: FullCustomizationState) => (
  event: React.ChangeEvent<{ value: piecesPerPlayer }>,
) => {
  const index = event.target.value;
  const newState: FullCustomizationState = {
    ...state,
    piecesPerPlayer: index,
  };
  onChange(newState);
};

const FullCustomization = ({ currentValue, onChange }: GameCustomizationProps) => {
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
      <Typography align="right">Pieces per Player</Typography>
      <Select value={state.piecesPerPlayer} onChange={changePiecesPerPlayer(onChange, state)} style={{ width: '100%' }}>
        <MenuItem value={piecesPerPlayer.TWELVE}>12</MenuItem>
        <MenuItem value={piecesPerPlayer.EIGHT}>8</MenuItem>
      </Select>
      <Typography align="right">Flying Kings</Typography>
      <Switch checked={state.flyingKings} onChange={changeFlyingKings(onChange, state)} color="primary" />
    </div>
  );
};

const customization: GameCustomization = {
  FullCustomization,
};

export default customization;
