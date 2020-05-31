import React from 'react';
import AlertLayer from './AlertLayer';
import { mount } from 'enzyme';

describe('Alert Layer', () => {
  it('sanity check', () => {
    const wrapper = mount(<AlertLayer>Foobar Alert</AlertLayer>);
    expect(wrapper.text().includes('Foobar Alert')).toBeTruthy();
  });
});
