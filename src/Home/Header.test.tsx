import React from 'react';
import Header from './Header';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

describe('Header', () => {

  it('should contain Chess option', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.text()).to.include('Free as in freedom');
  });

});
