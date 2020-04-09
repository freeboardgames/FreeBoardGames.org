import React from 'react';
import { GameInstructionsText } from './GameInstructionsText';
import { render, cleanup } from '@testing-library/react';
import { IGameDef } from 'games';
import { GameMode } from './GameModePicker';

afterEach(cleanup);

const gameDefNoText: IGameDef = {
  code: 'foogame',
  instructions: { videoId: 'videoId' },
  description: 'foodescription',
  descriptionTag: 'foodescriptiontag',
  name: 'foogame',
  imageURL: 'fooimage',
  minPlayers: 2,
  maxPlayers: 2,
  config: jest.fn(),
  modes: [{ mode: GameMode.LocalFriend }],
};

const gameDefWithText: IGameDef = {
  ...gameDefNoText,
  instructions: { ...gameDefNoText.instructions, text: 'foo game instructions' },
};

describe('Game Instructions', () => {
  it('should not contain text instructions', () => {
    const wrapper = render(<GameInstructionsText gameDef={gameDefNoText} />);
    expect(wrapper.queryByText('foo game instructions')).not.toBeInTheDocument();
  });
  it('should contain text instructions', () => {
    const wrapper = render(<GameInstructionsText gameDef={gameDefWithText} />);
    expect(wrapper.queryByText('foo game instructions')).toBeInTheDocument();
  });
});
