import * as React from 'react';
import { Game } from './Game';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

describe('Game', () => {

  it('should pass sanity check', () => {
    const wrapper = mount(<Game match={{ params: { gameCode: 'chess', mode: 'online' } }} />);
    expect(wrapper.text().length).to.be.above(0);
  });
});
