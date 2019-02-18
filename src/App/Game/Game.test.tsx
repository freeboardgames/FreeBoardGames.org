import React from 'react';
import Game from './Game';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import asyncBootstrapper from 'react-async-bootstrapper';

describe('Game', () => {

  it('should render properly for multiplayer', async () => {
    const app = <Game match={{ params: { gameCode: 'chess', mode: 'online' } }} />;
    await asyncBootstrapper(app);
    const wrapper = mount(app);
    expect(wrapper.html()).to.contain('connecting');
  });

  it('should render properly for singleplayer', async () => {
    const app = <Game match={{ params: { gameCode: 'chess', mode: 'local' } }} />;
    await asyncBootstrapper(app);
    const wrapper = mount(app);
    expect(wrapper.find('Checkerboard').length).to.equal(1);
  });
});
