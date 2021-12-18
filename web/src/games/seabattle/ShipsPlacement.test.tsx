import React from 'react';
import { ShipsPlacement, ShipsPlacementInternal } from './ShipsPlacement';
import { RadarInternal } from './Radar';
import { makeMount } from 'test/utils/enzymeUtil';

const mount = makeMount({ gameCode: 'seabattle' });

test('Set ships correctly', () => {
  const setShips = jest.fn();
  const placement = mount(<ShipsPlacement playerID={'0'} setShips={setShips} />);
  placement.find('button').simulate('click');
  expect(setShips.mock.calls[0][0].length).toEqual(5);
});

test('invalid positioning', () => {
  const setShips = jest.fn();
  const placement = mount(<ShipsPlacement playerID={'0'} setShips={setShips} />);
  const internal = placement.find(ShipsPlacementInternal);
  internal.setState({ ships: [] });
  expect(placement.html()).toContain('INVALID POSITIONING');
});

test('sanity - rotate ship', () => {
  const setShips = jest.fn();
  const placement = mount(<ShipsPlacement playerID={'0'} setShips={setShips} />);
  const radar = placement.find(RadarInternal);
  const cell = (radar.props() as any).ships[0].cells[0];
  (radar.instance() as any)._onClick(cell);
  expect(placement.html()).toContain('rect');
});
