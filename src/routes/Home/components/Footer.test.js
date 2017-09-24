import React from 'react';

import Footer from './Footer.js';
import { shallow } from 'enzyme';


describe('<Footer />', () => {
  var wrapper;
  it('should have some text', () => {
    wrapper = shallow(
      <Footer/>);

    expect(wrapper.text().length > 0).to.equal(true);
  });
});
