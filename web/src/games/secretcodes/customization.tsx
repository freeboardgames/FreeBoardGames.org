import React from 'react';
import { GameCustomization, GameCustomizationProps } from 'gamesShared/definitions/customization';
import { PREDEFINED_WORDS } from './constants';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useCurrentGameTranslation } from 'infra/i18n';

export interface FullCustomizationState {
  words: string[];
}

export const DEFAULT_FULL_CUSTOMIZATION = { words: PREDEFINED_WORDS[0].words };

const stateToText = (state: FullCustomizationState) => {
  return state.words.join('\n');
};

const textToState = (text): FullCustomizationState | undefined => {
  if (stateToText(DEFAULT_FULL_CUSTOMIZATION) === text) {
    return;
  }
  return { words: text.split('\n') };
};

const changeTextValue =
  (onChange: (FullCustomizationState) => void) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    const state = textToState(inputText);
    onChange(state);
  };

const getPredefinedWordsBucket = (state: FullCustomizationState) => {
  let i = 0;
  for (const predefinedWords of PREDEFINED_WORDS) {
    if (stateToText({ words: predefinedWords.words }) === stateToText({ words: state.words })) {
      return i;
    }
    i++;
  }
  return null;
};

const handlePredefinedWordChange =
  (onChange: (state?: FullCustomizationState) => void) => (event: React.ChangeEvent<{ value: number }>) => {
    const index = event.target.value;
    if (index === null) {
      return;
    }
    if (index === 0) {
      onChange();
      return;
    }
    onChange({ words: PREDEFINED_WORDS[index].words });
  };

const renderSelectValue = (index: number | null) => {
  const { translate } = useCurrentGameTranslation();
  if (index === null) {
    return translate('custom');
  }
  return PREDEFINED_WORDS[index].label;
};

const renderPredefinedWordsSelect = (
  onChange: (state?: FullCustomizationState) => void,
  state: FullCustomizationState,
) => {
  return (
    <Select
      value={getPredefinedWordsBucket(state)}
      displayEmpty
      renderValue={renderSelectValue}
      onChange={handlePredefinedWordChange(onChange)}
      style={{ width: '250px' }}
    >
      {PREDEFINED_WORDS.map((predefinedWords, index) => (
        <MenuItem value={index} key={index}>
          {predefinedWords.label}
        </MenuItem>
      ))}
    </Select>
  );
};

const FullCustomization = ({ currentValue, onChange }: GameCustomizationProps) => {
  const { translate } = useCurrentGameTranslation();
  const state = (currentValue as FullCustomizationState) || DEFAULT_FULL_CUSTOMIZATION;
  return (
    <div>
      {renderPredefinedWordsSelect(onChange, state)}
      <div style={{ height: '32px' }}></div>
      <TextField
        label={translate('words', { size: state.words.length })}
        multiline
        style={{ width: '250px' }}
        rows={15}
        value={stateToText(state)}
        variant="outlined"
        onChange={changeTextValue(onChange)}
      />
    </div>
  );
};

const customization: GameCustomization = {
  FullCustomization,
};

export default customization;
