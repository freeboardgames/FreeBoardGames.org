import React from 'react';
import { MobileCarousel } from './MobileCarousel';
import { mount } from 'enzyme';

describe('Mobile Carousel', () => {
  const exampleChild = <div style={{ minWidth: '1200px' }}>hello world</div>;
  it('should contain children', () => {
    const wrapper = mount(<MobileCarousel>{exampleChild}</MobileCarousel>);
    expect(wrapper.text()).toInclude('hello world');
  });
});
