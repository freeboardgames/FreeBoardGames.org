import React from 'react';
import { ShipsPlacement } from './ShipsPlacement';
import { expect } from 'chai';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('Set ships correctly', () => {
  const setShips = jest.fn();
  const placement = Enzyme.mount(<ShipsPlacement playerID={'0'} setShips={setShips} />);
  placement.find('button').simulate('click');
  expect(setShips.mock.calls[0][0].length).toEqual(5);
});

test('invalid positioning', () => {
  const setShips = jest.fn();
  const placement = Enzyme.mount(<ShipsPlacement playerID={'0'} setShips={setShips} />);
  placement.find(ShipsPlacement).setState({ ships: [] });
  expect(placement.html()).to.contain('INVALID POSITIONING');
});

test('sanity - rotate ship', () => {
  const setShips = jest.fn();
  const placement = Enzyme.mount(<ShipsPlacement playerID={'0'} setShips={setShips} />);
  const cell = (placement.find('Radar').props() as any).ships[0].cells[0];
  (placement.find('Radar').instance() as any)._onClick(cell);
  expect(placement.html()).to.contain('rect');
});
