import React from 'react';
import FreeBoardGameBar from '.';
import { mount } from 'enzyme';

describe('App', () => {
  it('should contain children', () => {
    const wrapper = mount(<FreeBoardGameBar>hello world</FreeBoardGameBar>);
    expect(wrapper.text()).toInclude('FreeBoardGames.org');
  });

  it('should set maxWidth=500px', () => {
    const wrapper = mount(<FreeBoardGameBar>hello world</FreeBoardGameBar>);
    const childrenDiv = wrapper.find('[data-testid="childrenDiv"]').at(0);
    expect(childrenDiv.prop('style').maxWidth).toEqual('500px');
  });

  it('should set maxWidth=1200px', () => {
    const wrapper = mount(<FreeBoardGameBar FEATURE_FLAG_readyForDesktopView>hello world</FreeBoardGameBar>);
    const childrenDiv = wrapper.find('[data-testid="childrenDiv"]').at(0);
    expect(childrenDiv.prop('style').maxWidth).toEqual('1200px');
  });
});
