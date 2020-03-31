import React from 'react';
import FreeBoardGameBar from './FreeBoardGamesBar';
// import * as nextRouter from 'next/router';
import { mount } from 'enzyme';
import { ListItem } from '@material-ui/core';

describe('App', () => {
  it('should contain FreeBoardGame title and children', () => {
    const wrapper = mount(<FreeBoardGameBar>hello world</FreeBoardGameBar>);
    expect(wrapper.text()).toInclude('FreeBoardGames.org');
    expect(wrapper.text()).toInclude('hello world');
  });
});

describe('sidebar', () => {
  it('should open drawer', () => {
    const wrapper = mount(<FreeBoardGameBar>hello world</FreeBoardGameBar>);
    wrapper.find('[aria-label="open drawer"]').at(0).simulate('click');
    expect(wrapper.find(ListItem).length).toEqual(2);
  });

  it('should be disabled for current page', () => {
    const useRouter = jest.spyOn(require('next/router'), 'useRouter');
    useRouter.mockImplementation(() => ({
      asPath: '/',
    }));
    const wrapper = mount(<FreeBoardGameBar>hello world</FreeBoardGameBar>);
    expect(wrapper.find(ListItem).at(0).props().disabled).toBeTruthy(); // "home" (current page)
    expect(wrapper.find(ListItem).at(1).props().disabled).toBeFalsy(); // "about"
  });
});
