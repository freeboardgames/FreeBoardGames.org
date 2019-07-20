import React from 'react';
import { GameInstructions } from './GameInstructions';
import { render, cleanup } from '@testing-library/react';
import { IGameDef } from '../../games';
import { GameMode } from './GameModePicker';
require('@testing-library/jest-dom/extend-expect');

afterAll(cleanup);

describe('Game Instructions', () => {
  it('should contain video', () => {
    const wrapper = renderWrapper(false);
    expect(wrapper.queryByTestId('gameinstructionsvideo')).toBeInTheDocument();
  });
  it('should not contain text instructions', () => {
    const wrapper = renderWrapper(false);
    expect(wrapper.queryByText('foo game instructions')).not.toBeInTheDocument();
  });
  it('should contain text instructions', () => {
    const wrapper = renderWrapper(true);
    expect(wrapper.queryByText('foo game instructions')).toBeInTheDocument();
  });
});

function renderWrapper(withTextInstructions: boolean) {
  let mockGameDef: IGameDef;
  if (withTextInstructions) {
    mockGameDef = {
      code: 'foogame',
      instructions: { videoId: 'video', text: 'foo game instructions' },
      description: 'foodescription',
      descriptionTag: 'foodescriptiontag',
      name: 'foogame',
      imageURL: 'fooimage',
      minPlayers: 2,
      maxPlayers: 2,
      config: jest.fn(),
      modes: [{ mode: GameMode.LocalFriend }],
    };
  } else {
    mockGameDef = {
      code: 'foogame',
      instructions: { videoId: 'video' },
      description: 'foodescription',
      descriptionTag: 'foodescriptiontag',
      name: 'foogame',
      imageURL: 'fooimage',
      minPlayers: 2,
      maxPlayers: 2,
      config: jest.fn(),
      modes: [{ mode: GameMode.LocalFriend }],
    };
  }
  return render(<GameInstructions gameDef={mockGameDef} />);
}
