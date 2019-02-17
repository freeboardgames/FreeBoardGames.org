import React from 'react';
import Game from './Game';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

describe('Game', () => {

  it('should render properly for multiplayer', () => {
    const wrapper = mount(<Game match={{ params: { gameCode: 'chess', mode: 'online' } }} />);
    expect(wrapper.html()).to.contain('connecting');
  });

  it('should render properly for singleplayer', () => {
    const wrapper = mount(<Game match={{ params: { gameCode: 'chess', mode: 'local' } }} />);
    expect(wrapper.find('Checkerboard').length).to.equal(1);
  });
});
