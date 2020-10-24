import React from 'react';
import { DesktopCarousel } from './DesktopCarousel';
import { mount } from 'enzyme';

describe('Desktop Carousel', () => {
  const exampleChild = <div style={{ minWidth: '1200px' }}>hello world</div>;
  it('should contain children', () => {
    const wrapper = mount(<DesktopCarousel>{exampleChild}</DesktopCarousel>);
    expect(wrapper.text()).toInclude('hello world');
  });
});
