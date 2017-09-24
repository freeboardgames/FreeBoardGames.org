import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from './HomeContainer.js';
import { createMockStore } from 'redux-test-utils';

describe('HomeContainer', () => {
  it('should render successfully', () => {
    const testState = {
      home: {parties: [],
        games: [],
        matches: []},
      connection: {disconnected: false},
      auth: {token: 'foobar'}
    };
    const store = createMockStore(testState);

    const component = shallow(<HomeContainer />, { context: { store } });

    expect(component).to.be.a('object');
  });
});
