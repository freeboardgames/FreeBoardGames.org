import React from 'react';
import { GameDarkSublayout } from './GameDarkSublayout';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';

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
