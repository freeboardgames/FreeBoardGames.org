import React from 'react';
import About from './About';
import FreeBoardGameBar from '../App/FreeBoardGameBar';
import Enzyme from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { expect } from 'chai';

describe('About', () => {
  it('should contain FreeBoardGameBar', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter initialEntries={['/']}>
        <About />
      </MemoryRouter>,
    );
    expect(wrapper.find(FreeBoardGameBar)).to.have.lengthOf(1);
  });
});
