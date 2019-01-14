import * as React from 'react';
import GameBar from './GameBar';
import AlertLayer from './AlertLayer';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

describe('Game Bar', () => {

  it('should display', () => {
    const wrapper = mount((
      <GameBar>
        <p>Foobar Game</p>
      </GameBar>
    ));
    expect(wrapper.text()).to.contain('Foobar Game');
  });
});
