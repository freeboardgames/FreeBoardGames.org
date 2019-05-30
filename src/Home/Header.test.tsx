import React from 'react';
import { MemoryRouter } from 'react-router';
import Header from './Header';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

describe('Header', () => {
  it('should contain Chess option', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(wrapper.text()).to.include('Free as in freedom');
  });
});
