import React from 'react';
import { GameDarkSublayout, IOptionsItems } from './GameDarkSublayout';
import { MemoryRouter } from 'react-router';
import { render, fireEvent, RenderResult, cleanup, wait } from '@testing-library/react';
require('@testing-library/jest-dom/extend-expect');

afterEach(cleanup);

describe('Game Dark Sublayout - No Options Menu', () => {
  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = render(
      <MemoryRouter>
        <GameDarkSublayout>
          <p>Foobar Game</p>
        </GameDarkSublayout>
      </MemoryRouter>,
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
      <MemoryRouter>
        <GameDarkSublayout optionsMenuItems={() => options}>
          <p>Foobar Game</p>
        </GameDarkSublayout>
      </MemoryRouter>,
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
    await wait(() => expect(wrapper.queryByText('toggle me')).not.toBeInTheDocument());
  });
});
