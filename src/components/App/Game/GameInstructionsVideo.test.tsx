import React from 'react';
import { GameInstructionsVideo } from './GameInstructionsVideo';
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
  it('should contain video', () => {
    const wrapper = render(<GameInstructionsVideo gameDef={gameDefWithText} />);
    const video = wrapper.queryByTestId('gameinstructionsvideo');
    expect(video).toBeInTheDocument();
    const src = (video as any).src;
    expect(src).toEqual('https://www.youtube.com/embed/videoId');
  });
});
