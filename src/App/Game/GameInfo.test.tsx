import React from 'react';
import GameInfo from './GameInfo';
import Enzyme from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Game info', () => {
  const context = {};
  it('should render chess', () => {
    const wrapper = Enzyme.mount(
      <GameInfo match={{ params: { gameCode: 'chess' } }} />,
    );
    expect(wrapper.html()).to.contain('Chess');
  });
});
