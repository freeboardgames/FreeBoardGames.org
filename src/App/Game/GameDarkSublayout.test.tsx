import React from 'react';
import { GameDarkSublayout, IOptionsItems } from './GameDarkSublayout';
import { mount, ReactWrapper } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';
import MoreVert from '@material-ui/icons/MoreVert';

describe('Game Dark Sublayout', () => {
  it('should display', () => {
    const wrapper = mount(
      <MemoryRouter>
        <GameDarkSublayout>
          <p>Foobar Game</p>
        </GameDarkSublayout>
      </MemoryRouter>,
    );
    expect(wrapper.text()).to.contain('Foobar Game');
  });
});

describe('Game Dark Sublayout - with options menu', () => {
  let onClickMock: jest.Mock;
  let options: () => IOptionsItems[];
  let wrapper: ReactWrapper;
  beforeEach(() => {
    onClickMock = jest.fn();
    options = () => [{ text: 'Toggle me', onClick: onClickMock }];
    wrapper = mount(
      <MemoryRouter>
        <GameDarkSublayout optionsMenuItems={options}>
          <p>Foobar Game</p>
        </GameDarkSublayout>
      </MemoryRouter>,
    );
  });
  it('should display morevert button', () => {
    expect(wrapper.find(MoreVert).length).to.be.greaterThan(0);
  });
  // it('should show options menu', () => {
  // TODO ...
  // });
});
