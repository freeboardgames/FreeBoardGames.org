import * as React from 'react';
import Chess from './index';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import 'mocha';

describe('Chess game', () => {

  it('should have Chess on result', () => {
    const wrapper = mount(<Chess/>);
    expect(wrapper.text()).to.include('Chess');
  });

});
