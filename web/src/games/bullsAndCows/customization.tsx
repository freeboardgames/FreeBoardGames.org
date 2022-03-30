import React from 'react';
import { GameCustomization, GameCustomizationProps } from 'gamesShared/definitions/customization';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useCurrentGameTranslation } from 'infra/i18n';

export interface FullCustomizationState {
  secretLength: number;
  limitOfAttempts: number;
  allowToRepeat: boolean;
  totalOfColours: number;
}

export const DEFAULT_FULL_CUSTOMIZATION = {
  allowToRepeat: false,
  secretLength: 4,
  limitOfAttempts: 10,
  totalOfColours: 6,
};

const changeAllowToRepeat =
  (onChange: (state?: FullCustomizationState) => void, state: FullCustomizationState) => () => {
    const newState: FullCustomizationState = {
      ...state,
      allowToRepeat: !state.allowToRepeat,
    };
    onChange(newState);
  };

const changeSecretLength =
  (onChange: (state?: FullCustomizationState) => void, state: FullCustomizationState) =>
  (event: React.ChangeEvent<{ value: number }>) => {
    const index = event.target.value;
    const newState: FullCustomizationState = {
      ...state,
      secretLength: index,
    };
    onChange(newState);
  };

const changeLimitOfAttempts =
  (onChange: (state?: FullCustomizationState) => void, state: FullCustomizationState) =>
  (event: React.ChangeEvent<{ value: number }>) => {
    const index = event.target.value;
    const newState: FullCustomizationState = {
      ...state,
      limitOfAttempts: index,
    };
    onChange(newState);
  };

const changeTotalOfColours =
  (onChange: (state?: FullCustomizationState) => void, state: FullCustomizationState) =>
  (event: React.ChangeEvent<{ value: number }>) => {
    const index = event.target.value;
    const newState: FullCustomizationState = {
      ...state,
      totalOfColours: index,
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
      <Typography align="right">{translate('customization.secretLength')}</Typography>
      <Select value={state.secretLength} onChange={changeSecretLength(onChange, state)} style={{ width: '100%' }}>
        {[3, 4, 5, 6, 7, 8].map((number, index) => (
          <MenuItem value={number} key={index}>
            {number}
          </MenuItem>
        ))}
      </Select>
      <Typography align="right">{translate('customization.limitOfAttempts')}</Typography>
      <Select value={state.limitOfAttempts} onChange={changeLimitOfAttempts(onChange, state)} style={{ width: '100%' }}>
        {[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((number, index) => (
          <MenuItem value={number} key={index}>
            {number}
          </MenuItem>
        ))}
      </Select>
      <Typography align="right">{translate('customization.totalOfColours')}</Typography>
      <Select value={state.totalOfColours} onChange={changeTotalOfColours(onChange, state)} style={{ width: '100%' }}>
        {[3, 4, 5, 6, 7].map((number, index) => (
          <MenuItem value={number} key={index}>
            {number}
          </MenuItem>
        ))}
      </Select>
      <Typography align="right">{translate('customization.allowToRepeat')}</Typography>
      <Switch checked={state.allowToRepeat} onChange={changeAllowToRepeat(onChange, state)} color="primary" />
    </div>
  );
};

const customization: GameCustomization = {
  FullCustomization,
};

export default customization;
