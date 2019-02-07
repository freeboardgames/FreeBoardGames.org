import * as React from 'react';
import { ShipsPlacement } from './ShipsPlacement';
import { expect } from 'chai';
import { VALID_SETUP_FIRST_PLAYER } from './mocks';
import { GameLayout } from '../../App/Game/GameLayout';

import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('Set ships correctly', () => {
  const setShips = jest.fn();
  const placement = Enzyme.mount((
    <GameLayout>
      <ShipsPlacement
        playerID={'0'}
        setShips={setShips}
      />
    </GameLayout>));
  placement.find('button').simulate('click');
  expect(setShips.mock.calls[0][0].length).to.equal(5);
});

test('invalid positioning', () => {
  const setShips = jest.fn();
  const placement = Enzyme.shallow((
    <ShipsPlacement
      playerID={'0'}
      setShips={setShips}
    />));
  placement.setState({ ships: [] });
  expect(placement.find('h2').html()).to.contain('INVALID POSITIONING');
});

test('sanity - rotate ship', () => {
  const setShips = jest.fn();
  const placement = Enzyme.mount((
    <GameLayout>
      <ShipsPlacement
        playerID={'0'}
        setShips={setShips}
      />
    </GameLayout>));
  const cell = (placement.find('Radar').props() as any).ships[0].cells[0];
  (placement.find('Radar').instance() as any)._onClick(cell);
  expect(placement.html()).to.contain('rect');
});
