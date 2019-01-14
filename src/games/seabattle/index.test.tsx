import * as React from 'react';
import Seabattle from './index';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

describe('Seabattle game', () => {

  it('should pass sanity check', () => {
    const wrapper = mount(<Seabattle match={{ params: {} }} />);
    expect(wrapper.text().length).to.be.above(0);
  });

  it('should show share dialog', () => {
    const wrapper = mount(<Seabattle match={{ params: { playerID: '0', code: 'foo' } }} />);
    expect(wrapper.html()).to.contain('Share');
    (wrapper.instance() as Seabattle).dismissSharing();
    expect(wrapper.html()).to.not.contain('Share');
  });
});
