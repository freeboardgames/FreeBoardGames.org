import React from 'react';
import GameInfo from './GameInfo';
import Enzyme from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';

Enzyme.configure({ adapter: new Adapter() });

describe('Game info', () => {
  const context = {};
  it('should render chess', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter>
        <GameInfo match={{ params: { gameCode: 'chess' } }} />
      </MemoryRouter>,
    );
    expect(wrapper.html()).to.contain('Chess');
  });
  it('should render an error for an unknown game', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter>
        <GameInfo match={{ params: { gameCode: 'doesnotexist' } }} />
      </MemoryRouter>,
    );
    expect(wrapper.html()).to.contain('Not Found');
  });
});
