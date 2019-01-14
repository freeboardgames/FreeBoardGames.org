import * as React from 'react';
import TurnatoBar from './TurnatoBar';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {

  it('should contain Turnato title', () => {
    const wrapper = mount(
        <TurnatoBar>
          hello world
        </TurnatoBar>);
    expect(wrapper.text()).to.include('Turnato');
  });

});
