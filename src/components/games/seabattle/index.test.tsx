import * as React from 'react';
import Seabattle from './index';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

describe('Seabattle game', () => {

  it('should pass sanity check', () => {
    const wrapper = mount(<Seabattle match={{params: {}}}/>);
    expect(wrapper.text().length).to.be.above(0);
  });

});
