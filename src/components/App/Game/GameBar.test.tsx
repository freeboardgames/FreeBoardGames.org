import * as React from 'react';
import GameBar from './GameBar';
import AlertLayer from './AlertLayer';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import 'mocha';

describe('Game Bar', () => {

  it('should not display alert', () => {
    const wrapper = mount((
      <GameBar
        text="hello world"
        backgroundColor="red"
        textColor="white"
      >
          <p>Foobar Game</p>
      </GameBar>
    ));
    expect(wrapper.text()).to.contain('hello world');
    expect(wrapper.text()).to.contain('Foobar Game');
    expect(wrapper.find(AlertLayer)).to.have.lengthOf(0);
  });

  it('should display alert', () => {
    const wrapper = mount((
      <GameBar
               text="hello world"
               backgroundColor="red"
               textColor="white"
               alert={<h1>Game over</h1>}
      >
               <p>Foobar Game</p>
      </GameBar>
    ));
    expect(wrapper.text()).to.contain('hello world');
    expect(wrapper.text()).to.contain('Foobar Game');
    expect(wrapper.find(AlertLayer)).to.have.lengthOf(1);
  });
});
