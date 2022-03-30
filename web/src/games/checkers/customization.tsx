import * as React from 'react';
import { GameCustomization, GameCustomizationProps } from 'gamesShared/definitions/customization';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useCurrentGameTranslation } from 'infra/i18n';

export enum PiecesPerPlayer {
  TWELVE,
  EIGHT,
}

export interface FullCustomizationState {
  piecesPerPlayer: PiecesPerPlayer;
  forcedCapture: boolean;
  flyingKings: boolean;
  stopJumpOnKing: boolean;
  nMoveRule: number;
}

export const DEFAULT_FULL_CUSTOMIZATION: FullCustomizationState = {
  piecesPerPlayer: PiecesPerPlayer.TWELVE,
  forcedCapture: true,
  flyingKings: false,
  stopJumpOnKing: true,
  nMoveRule: 40,
};

const changePiecesPerPlayer =
  (onChange: (state?: FullCustomizationState) => void, state: FullCustomizationState) =>
  (event: React.ChangeEvent<{ value: PiecesPerPlayer }>) => {
    const index = event.target.value;
    const newState: FullCustomizationState = {
      ...state,
      piecesPerPlayer: index,
    };
    onChange(newState);
  };

const changeForcedCapture =
  (onChange: (state?: FullCustomizationState) => void, state: FullCustomizationState) => () => {
    const newState: FullCustomizationState = {
      ...state,
      forcedCapture: !state.forcedCapture,
    };
    onChange(newState);
  };

const changeFlyingKings = (onChange: (state?: FullCustomizationState) => void, state: FullCustomizationState) => () => {
  const newState: FullCustomizationState = {
    ...state,
    flyingKings: !state.flyingKings,
  };
  onChange(newState);
};

const changeStopJumpOnKing =
  (onChange: (state?: FullCustomizationState) => void, state: FullCustomizationState) => () => {
    const newState: FullCustomizationState = {
      ...state,
      stopJumpOnKing: !state.stopJumpOnKing,
    };
    onChange(newState);
  };

const changeNMoveRule =
  (onChange: (state?: FullCustomizationState) => void, state: FullCustomizationState) =>
  (event: React.ChangeEvent<{ value: number }>) => {
    const index = event.target.value;
    const newState: FullCustomizationState = {
      ...state,
      nMoveRule: index,
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
      <Typography align="right">{translate('customization.pieces_per_player')}</Typography>
      <Select value={state.piecesPerPlayer} onChange={changePiecesPerPlayer(onChange, state)} style={{ width: '100%' }}>
        <MenuItem value={PiecesPerPlayer.TWELVE}>12</MenuItem>
        <MenuItem value={PiecesPerPlayer.EIGHT}>8</MenuItem>
      </Select>
      <Typography align="right">{translate('customization.forced_capture')}</Typography>
      <Switch checked={state.forcedCapture} onChange={changeForcedCapture(onChange, state)} color="primary" />
      <Typography align="right">{translate('customization.flying_kings')}</Typography>
      <Switch checked={state.flyingKings} onChange={changeFlyingKings(onChange, state)} color="primary" />
      <Typography align="right">{translate('customization.stop_jump_on_king')}</Typography>
      <Switch checked={state.stopJumpOnKing} onChange={changeStopJumpOnKing(onChange, state)} color="primary" />
      <Typography align="right">{translate('customization.n_move_rule.label')}</Typography>
      <Select value={state.nMoveRule} onChange={changeNMoveRule(onChange, state)} style={{ width: '100%' }}>
        <MenuItem value={-1}>{translate('customization.n_move_rule.off')}</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        <MenuItem value={40}>40</MenuItem>
      </Select>
    </div>
  );
};

const customization: GameCustomization = {
  FullCustomization,
};

export default customization;
