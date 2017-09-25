import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import PartyCard from './PartyCard.js';
import { shallow } from 'enzyme';


describe('<PartyCard />', () => {
  var wrapper;
  it('should have correct information', () => {
    let party_mock = {
      usersNickname: ['foo', 'bar'],
      users: ['xYZ', 'Ui7'],
      name: 'Super party'
    };

    wrapper = shallow(
      <PartyCard party={party_mock}/>);

    let card = wrapper.find(Card).dive();
    let cardHeader = card.find(CardHeader).get(0);
    expect(cardHeader.props.title).to.equal('Super party');
    expect(cardHeader.props.subtitle).to.equal('2 members');
  });
});
