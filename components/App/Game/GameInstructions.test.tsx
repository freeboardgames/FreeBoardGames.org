import React from 'react';
import { GameInstructions } from './GameInstructions';
import { render, cleanup } from '@testing-library/react';
import { IGameDef } from 'games';
import { GameMode } from './GameModePicker';
require('@testing-library/jest-dom/extend-expect');

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
  it('should contain video', () => {
    const wrapper = render(<GameInstructions gameDef={gameDefWithText} />);
    const video = wrapper.queryByTestId('gameinstructionsvideo');
    expect(video).toBeInTheDocument();
    const src = (video as any).src;
    expect(src).toEqual('https://www.youtube.com/embed/videoId');
  });
  it('should not contain text instructions', () => {
    const wrapper = render(<GameInstructions gameDef={gameDefNoText} />);
    expect(wrapper.queryByText('foo game instructions')).not.toBeInTheDocument();
  });
  it('should contain text instructions', () => {
    const wrapper = render(<GameInstructions gameDef={gameDefWithText} />);
    expect(wrapper.queryByText('foo game instructions')).toBeInTheDocument();
  });
});
