import React from 'react';
import { GameModePickerInternal as GameModePicker } from './GameModePicker';
import { GameMode, IGameModeInfo } from 'gamesShared/definitions/mode';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import { render, RenderResult, cleanup } from '@testing-library/react';
import { I18n } from 'next-i18next';
import { mock } from 'jest-mock-extended';
require('@testing-library/jest-dom/extend-expect');

const i18n = mock<I18n>({ language: 'en' });

const CUSTOMIZATION = { module: undefined };

const GAME_DEF_TEST: IGameDef = {
  code: 'foocode',
  name: 'foo name',
  imageURL: 'foo.jpg',
  status: IGameStatus.PUBLISHED,
  description: 'foo desc',
  descriptionTag: 'foo tag',
  instructions: {
    videoId: 'dQw4w9WgXcQ',
  },
  config: () => {
    return null as any;
  },
  minPlayers: 2,
  maxPlayers: 3,
  modes: [],
  customization: () => Promise.resolve(CUSTOMIZATION),
};

function getWrapper(modes: IGameModeInfo[]): RenderResult {
  return render(
    <GameModePicker
      i18n={i18n}
      gameDef={{ ...GAME_DEF_TEST, modes }}
      dispatch={jest.fn()}
      t={jest.fn()}
      user={{ loggedIn: true, ready: true }}
    />,
  );
}

afterEach(cleanup);

describe('Game Mode Picker', () => {
  it('should show all 5 options and accept clicks', () => {
    const modes: IGameModeInfo[] = [
      { mode: GameMode.AI },
      { mode: GameMode.OnlineFriend },
      { mode: GameMode.LocalFriend },
    ];
    const wrapper = getWrapper(modes);
    expect(wrapper.queryByText('Online Friend')).toBeInTheDocument();
    expect(wrapper.queryByText('Computer (AI)')).toBeInTheDocument();
    expect(wrapper.queryByText('Local Friend')).toBeInTheDocument();
  });

  it('should show option to select number of players', () => {
    const modes: IGameModeInfo[] = [
      {
        mode: GameMode.OnlineFriend,
      },
    ];
    const wrapper = getWrapper(modes);
    expect(wrapper.queryByText('2 Players')).toBeInTheDocument();
  });
});
