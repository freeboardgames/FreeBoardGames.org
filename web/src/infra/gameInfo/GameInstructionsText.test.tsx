import React from 'react';
import Enzyme from 'enzyme';
import { GameInstructionsText } from './GameInstructionsText';

describe('GameInstructionsText', () => {
  it('should contain instructions', () => {
    const comp = Enzyme.mount(<GameInstructionsText text={'foo'} />);
    expect(comp.text()).toEqual('foo');
  });
});
