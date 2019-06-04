import React from 'react';
import AlertLayer from './AlertLayer';
import { mount } from 'enzyme';
import { expect } from 'chai';

describe('Alert Layer', () => {
  it('sanity check', () => {
    const wrapper = mount(<AlertLayer>Foobar Alert</AlertLayer>);
    expect(wrapper.text()).to.include('Foobar Alert');
  });
});
