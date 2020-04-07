import React from 'react';
import Enzyme from 'enzyme';

import RoomCard from './RoomCard';

const mockGameDef = { name: 'foogame', imageURL: { src: 'imageurl', 0: 'imageurl' } };

beforeEach(() => {
  const players = ['foo'];
  const capacity = 2;
  comp = Enzyme.mount(<RoomCard players={players} capacity={capacity} game={mockGameDef as any} />);
});

let comp: Enzyme.ReactWrapper;

it('has capacity', () => {
  const capacity = comp.find({ 'data-testid': 'capacity' }).at(0).text();
  expect(capacity).toEqual('1/2');
});

it('has join button', () => {
  const joinButtonExists = comp.find({ 'data-testid': 'joinbutton' }).exists();
  expect(joinButtonExists).toBeTruthy();
});

it('has names', () => {
  const playerNames = comp.find({ 'data-testid': 'names' }).at(0).text();
  expect(playerNames).toEqual('foo');
});

it('truncates names', () => {
  const players = ['Alice', 'Bob', 'Carol', 'Craig', 'Dan', 'Erin'];
  comp.setProps({ players, capacity: 8 });
  const playerNames = comp.find({ 'data-testid': 'names' }).at(0).text();
  expect(playerNames).toEqual('Alice, Bob, + 4 more');
});
