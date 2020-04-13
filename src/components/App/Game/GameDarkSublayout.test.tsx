import React from 'react';
import { GameDarkSublayout, IOptionsItems } from './GameDarkSublayout';
import { render, fireEvent, RenderResult, cleanup, waitFor } from '@testing-library/react';
import { GameMode } from './GameModePicker';
import { IGameArgs } from './GameBoardWrapper';
require('@testing-library/jest-dom/extend-expect');

afterEach(cleanup);

const mockGameArgs: IGameArgs = { gameCode: 'tictactoe', mode: GameMode.LocalFriend };

describe('Game Dark Sublayout - No Options Menu', () => {
  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = render(
      <GameDarkSublayout gameArgs={mockGameArgs}>
        <p>Foobar Game</p>
      </GameDarkSublayout>,
    );
  });

  it('should display', () => {
    expect(wrapper.getByText(/Foobar Game/)).toBeTruthy();
  });
});

describe('Game Dark Sublayout - Options Menu', () => {
  let wrapper: RenderResult;
  let options: IOptionsItems[];
  beforeEach(() => {
    options = [
      {
        onClick: jest.fn(),
        text: `toggle me`,
      },
    ];
    wrapper = render(
      <GameDarkSublayout gameArgs={mockGameArgs} optionsMenuItems={() => options}>
        <p>Foobar Game</p>
      </GameDarkSublayout>,
    );
  });

  it('should start with the options menu closed', () => {
    expect(wrapper.queryByText('toggle me')).not.toBeInTheDocument();
  });

  it('should open then close options menu', async () => {
    const optionsMenuButton = wrapper.getByLabelText('Open options');
    fireEvent.click(optionsMenuButton);
    expect(wrapper.queryByText('toggle me')).toBeInTheDocument();

    const option = wrapper.getByText('toggle me');
    fireEvent.click(option);
    await waitFor(() => expect(wrapper.queryByText('toggle me')).not.toBeInTheDocument());
  });
});

describe('Game Dark Sublayout - With Game Name', () => {
  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = render(
      <GameDarkSublayout gameArgs={mockGameArgs}>
        <p>Foobar Game</p>
      </GameDarkSublayout>,
    );
  });

  it('should display game name', () => {
    expect(wrapper.getByText(/Tic-Tac-Toe/)).toBeTruthy();
  });
});
