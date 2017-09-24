import React from 'react';

import Header from './Header.js';
import { shallow } from 'enzyme';


describe('<Header />', () => {
  var wrapper;
  it('should have some text', () => {
    wrapper = shallow(
      <Header/>);

    expect(wrapper.text().length > 0).to.equal(true);
  });
});
