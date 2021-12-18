import React from 'react';
import { GameModePickerCard } from './GameModePickerCard';
import { GameMode } from 'gamesShared/definitions/mode';
import { render, cleanup, waitFor } from '@testing-library/react';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import { GameCustomization } from 'gamesShared/definitions/customization';

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
  modes: [
    {
      mode: GameMode.AI,
    },
  ],
};

describe('GameModePickerCard', () => {
  afterEach(cleanup);

  it('should have the correct dropdown defaults', async () => {
    const { wrapper } = getWrapper();
    const playButton = wrapper.getByRole('button');
    expect(playButton).toBeInTheDocument();
  });

  it('it should be a functional dropdown', async () => {
    const { wrapper } = getWrapper();

    await waitFor(() => expect(wrapper.getByText(/Game-specific widget/)).toBeTruthy());
  });
});

export enum ExampleDifficulty {
  EASY = 0,
  HARD = 1,
}

export interface QuickCustomizationState {
  difficulty: ExampleDifficulty;
}

export const DEFAULT_QUICK_CUSTOMIZATION = { difficulty: ExampleDifficulty.EASY };

function getWrapper() {
  const QuickCustomization = () => {
    return <div>Game-specific widget</div>;
  };

  const custom: GameCustomization = {
    QuickCustomization,
  };

  const customization = () => Promise.resolve({ default: custom });
  const playOnlineGameCallback = jest.fn();
  const wrapper = render(
    <GameModePickerCard
      gameDef={{ ...GAME_DEF_TEST, customization }}
      info={{ mode: GameMode.AI }}
      playButtonError={false}
      playButtonDisabled={false}
      playOnlineGameCallback={playOnlineGameCallback}
    />,
  );

  return { wrapper, playOnlineGameCallback };
}
