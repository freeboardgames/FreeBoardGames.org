import * as React from 'react';
import { GameDarkSublayout } from './GameDarkSublayout';
import AlertLayer from './AlertLayer';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

describe('Game Dark Sublayout', () => {

  it('should display', () => {
    const wrapper = mount((
      <GameDarkSublayout>
        <p>Foobar Game</p>
      </GameDarkSublayout>
    ));
    expect(wrapper.text()).to.contain('Foobar Game');
  });
});
