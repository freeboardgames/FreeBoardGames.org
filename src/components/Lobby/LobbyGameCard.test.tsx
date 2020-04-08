import React from 'react';
import Enzyme from 'enzyme';

import LobbyGameCard from './LobbyGameCard';
import { Room } from 'dto/Room';

const mockGameDef = { name: 'foogame', imageURL: { src: 'imageurl', 0: 'imageurl' } };

const mockRoom: Room = { gameCode: 'chess', players: ['foo'], capacity: 2 };
const mockRooms: Room[] = [mockRoom];

beforeEach(() => {
  comp = Enzyme.mount(<LobbyGameCard rooms={mockRooms} game={mockGameDef as any} />);
});

let comp: Enzyme.ReactWrapper;

it('renders', () => {
  expect(comp.find('GameCard').exists()).toBeTruthy();
});
