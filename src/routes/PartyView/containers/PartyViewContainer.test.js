import React from 'react';
import { shallow } from 'enzyme';
import PartyViewContainer from './PartyViewContainer.js';
import { createMockStore } from 'redux-test-utils';

describe('PartyViewContainer', () => {
  it('should render successfully', () => {
    const testState = {
      party: {matches: [],
        games: [],
        downMapping: {},
        info: {}
      },
      auth: {_id: '1234', token: '83828'},
      connection: {disconnected: false}
    };
    const store = createMockStore(testState);

    const component = shallow(<PartyViewContainer params={{}} />,
       { context: { store } });

    expect(component).to.be.a('object');
  });
});
