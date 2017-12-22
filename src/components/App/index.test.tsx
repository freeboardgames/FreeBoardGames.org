import * as React from 'react';
import App from './index';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import 'mocha';

describe('App', () => {

  it('should contain Header and Main', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.text()).to.include('Header');
    expect(wrapper.text()).to.include('Main');
  });

});
