import React from 'react';
import PartyView from './PartyView.js';
import { shallow } from 'enzyme';


describe('<PartyView />', () => {
  it('should instantiate successfully', () => {
    let wrapper = shallow(
      <PartyView
        disconnected={false}
        games={[]}
        matches={[]}
        info={{users: ['foo'], currentUser: 0}}
        downMapping={{}}
        token=''
        down={() => () => {}}
        leaveParty={() => {}}
        joinParty={() => {}}
        params={{}}/>);

    expect(wrapper.text().length).to.least(1);
  });
  it('should show loading screen', () => {
    let wrapper = shallow(
      <PartyView
        disconnected={false}
        games={[]}
        matches={[]}
        info={{users: ['foo'], currentUser: 0, loading: true}}
        downMapping={{}}
        token=''
        down={() => () => {}}
        leaveParty={() => {}}
        joinParty={() => {}}
        params={{}}/>);

    expect(wrapper.text()).to.contain('LoadingScreen');
  });
});
