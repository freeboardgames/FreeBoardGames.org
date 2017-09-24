import React from 'react';

import Home from './Home.js';
import { shallow } from 'enzyme';


describe('<Home />', () => {
  var wrapper;
  it('should have some text', () => {
    wrapper = shallow(
      <Home
      disconnected = {false}
      parties = {[]}
      matches = {[]}
      games = {[]}
      requestHome = {() => {}}
      />);

    expect(wrapper.text().length > 0).to.equal(true);
  });
});
