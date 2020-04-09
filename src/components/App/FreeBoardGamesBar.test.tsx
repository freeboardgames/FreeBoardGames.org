import React from 'react';
import FreeBoardGameBar from './FreeBoardGamesBar';
import { mount } from 'enzyme';

describe('App', () => {
  it('should contain FreeBoardGame title', () => {
    const wrapper = mount(<FreeBoardGameBar>hello world</FreeBoardGameBar>);
    expect(wrapper.text()).toInclude('FreeBoardGames.org');
  });
});
