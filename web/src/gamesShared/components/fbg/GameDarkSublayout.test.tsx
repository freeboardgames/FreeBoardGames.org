import { cleanup, fireEvent, render, RenderResult, waitFor } from '@testing-library/react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameMode } from 'gamesShared/definitions/mode';
import React from 'react';
import { GameDarkSublayout, IOptionsItems } from './GameDarkSublayout';

afterEach(cleanup);

const mockGameArgs: IGameArgs = { gameCode: 'tictactoe', mode: GameMode.LocalFriend };

describe('Game Dark Sublayout - No Options Menu', () => {
  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = renderComponent();
  });

  it('should display', () => {
    expect(wrapper.getByText(/Foobar Game/)).toBeTruthy();
  });
});

describe('Game Dark Sublayout - Options Menu', () => {
  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = renderComponent({
      options: [
        {
          onClick: jest.fn(),
          text: `toggle me`,
        },
      ],
    });
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
    wrapper = renderComponent();
  });

  it('should display game name', () => {
    expect(wrapper.getByText(/Tic-Tac-Toe/)).toBeTruthy();
  });
});

function renderComponent(params: { options?: IOptionsItems[] } = {}) {
  return render(
    <GameDarkSublayout gameArgs={mockGameArgs} {...(params.options && { optionsMenuItems: () => params.options })}>
      <p>Foobar Game</p>
    </GameDarkSublayout>,
  );
}
