import * as React from 'react';
import App from './App';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router-dom';
import 'mocha';

describe('App', () => {

  it('should contain Turnato title', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>);
    expect(wrapper.text()).to.include('Turnato');
  });

});
