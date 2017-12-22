import * as React from 'react';
import Home from './index';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import 'mocha';

describe('Home', () => {

  it('should contain Hello', () => {
    const wrapper = shallow(<Home/>);
    expect(wrapper.text()).to.include('Hello');
  });

});
