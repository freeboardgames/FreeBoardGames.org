import { GameCustomization } from 'gamesShared/definitions/customization';
import dropdown from 'gamesShared/components/customization/Dropdown';
import { GameMode } from 'gamesShared/definitions/mode';

const options = ['Easy', 'Hard'];

export interface QuickCustomizationState {
  difficulty: 'Easy' | 'Hard';
}

const customization: GameCustomization = {
  renderQuick: ({ mode, currentValue, onChange }) => {
    if (mode != GameMode.AI) {
      return null;
    }
    const state = currentValue as QuickCustomizationState;
    let idx = options.indexOf(state.difficulty);
    if (idx === -1) {
      idx = 0;
    }
    return dropdown(options, idx, (newIdx) => {
      const difficulty = options[newIdx];
      onChange({ difficulty });
    });
  },
};

export default customization;
