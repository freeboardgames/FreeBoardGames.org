import React from 'react';
import FreeBoardGameBar from './FreeBoardGameBar';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {

  it('should contain FreeBoardGame title', () => {
    const wrapper = mount(
      <MemoryRouter>
        <FreeBoardGameBar>
          hello world
        </FreeBoardGameBar>
      </MemoryRouter>,
    );
    expect(wrapper.text()).to.include('FreeBoardGame.org');
  });

});
