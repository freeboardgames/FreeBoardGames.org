import React from 'react';

import LoadingScreen from './LoadingScreen.js';
import { shallow } from 'enzyme';


describe('<LoadingScreen />', () => {
  var wrapper;
  it('should have some text', () => {
    wrapper = shallow(
      <LoadingScreen/>);

    expect(wrapper.text().length > 0).to.equal(true);
  });
});
