import * as React from 'react';
import Chess from './index';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

describe('Chess game', () => {

  it('should pass sanity check', () => {
    const wrapper = mount(<Chess match={{ params: {} }} />);
    expect(wrapper.text().length).to.be.above(0);
  });

  it('should show share dialog', () => {
    const wrapper = mount(<Chess match={{ params: { playerID: '0', code: 'foo' } }} />);
    expect(wrapper.html()).to.contain('Share');
    (wrapper.instance() as Chess).dismissSharing();
    expect(wrapper.html()).to.not.contain('Share');
  });
});
