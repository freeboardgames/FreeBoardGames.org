import * as React from 'react';
import OpponentPicker from './OpponentPicker';
import {ListItem} from 'material-ui/List';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import 'mocha';

describe('Opponent Picker', () => {

  it('onClick should work', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow((
      <OpponentPicker onClick={onClickMock} />
    ));
    wrapper.find(ListItem).at(3).simulate('click');
    expect(onClickMock.mock.calls.length).to.equal(1);
  });
});
