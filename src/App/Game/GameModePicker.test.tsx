import React from 'react';
import { GameModePicker, GameMode, IGameModeInfo } from './GameModePicker';
import { IGameModeExtraInfoSlider, IGameModeExtraInfoDropdown } from './GameModePicker';
import { MemoryRouter } from 'react-router';
import { IGameDef } from '../../games';
import { render, fireEvent, RenderResult, cleanup, wait } from '@testing-library/react';
require('@testing-library/jest-dom/extend-expect');

const GAME_DEF_TEST: IGameDef = {
  code: 'foocode',
  name: 'foo name',
  imageURL: 'foo.jpg',
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
};

function getWrapper(modes: IGameModeInfo[]): RenderResult {
  return render(
    <MemoryRouter>
      <GameModePicker gameDef={{ ...GAME_DEF_TEST, modes }} />
    </MemoryRouter>,
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

  it('should select 3 players', () => {
    const modes: IGameModeInfo[] = [
      {
        mode: GameMode.OnlineFriend,
      },
    ];
    const wrapper = getWrapper(modes);

    const playButtonBeforeClick = wrapper.getByTestId('playButton');
    expect(playButtonBeforeClick.getAttribute('href')).toEqual('/room/new/foocode/2');

    // select dropdown
    const twoPlayers = wrapper.getByText('2 Players');
    fireEvent.click(twoPlayers);

    // select 3 players
    const threePlayers = wrapper.getByText('3 Players');
    fireEvent.click(threePlayers);

    const playButtonAfterClick = wrapper.getByTestId('playButton');
    expect(playButtonAfterClick.getAttribute('href')).toEqual('/room/new/foocode/3');
  });

  it('should show a slider', () => {
    const modes: IGameModeInfo[] = [
      {
        mode: GameMode.AI,
        extraInfo: { type: 'slider', min: 1, max: 8 } as IGameModeExtraInfoSlider,
      },
    ];
    const wrapper = getWrapper(modes);
    expect(wrapper.queryByRole('slider')).toBeInTheDocument();
  });

  it('should show a dropdown', () => {
    const wrapper = makeDropdownWrapper();
    expect(wrapper.queryAllByRole('menuitem').length).toEqual(2);
    expect(wrapper.queryByText('Easy')).toBeInTheDocument();
    expect(wrapper.queryByText('Hard')).toBeInTheDocument();
  });

  it('should have the correct dropdown defaults', async () => {
    const wrapper = makeDropdownWrapper();
    const hard = wrapper.queryAllByRole('menuitem')[1];
    const playButton = wrapper.getByRole('button');
    expect(playButton.getAttribute('href')).toEqual('/g/foocode/AI/1');
  });

  it('it should be a functional dropdown', () => {
    const wrapper = makeDropdownWrapper();
    const easy = wrapper.queryAllByRole('menuitem')[0];
    const hard = wrapper.queryAllByRole('menuitem')[1];

    fireEvent.click(hard);
    const afterHardClicked = wrapper.getByRole('button');
    expect(afterHardClicked.getAttribute('href')).toEqual('/g/foocode/AI/2');

    fireEvent.click(easy);
    const afterEasyClicked = wrapper.getByRole('button');
    expect(afterEasyClicked.getAttribute('href')).toEqual('/g/foocode/AI/1');
  });
});

function makeDropdownWrapper(): RenderResult {
  const modes: IGameModeInfo[] = [
    {
      mode: GameMode.AI,
      extraInfo: { type: 'dropdown', options: ['Easy', 'Hard'] } as IGameModeExtraInfoDropdown,
    },
  ];
  const wrapper = render(
    <MemoryRouter>
      <GameModePicker gameDef={{ ...GAME_DEF_TEST, modes }} />
    </MemoryRouter>,
  );
  return wrapper;
}
