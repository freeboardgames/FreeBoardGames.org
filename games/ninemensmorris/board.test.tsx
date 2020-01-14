import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Client as ReactClient } from 'boardgame.io/react';
import { NineMensMorrisGame } from './game';

import { Board } from './board';
import { GameMode } from 'components/App/Game/GameModePicker';

Enzyme.configure({ adapter: new Adapter() });

const players = [
  { playerID: 0, name: 'foo', roomID: '' },
  { playerID: 1, name: 'bar', roomID: '' },
];

const BoardTest = (props: any) => (
  <Board
    {...{
      ...props,
      gameArgs: {
        mode: GameMode.OnlineFriend,
        players,
      },
    }}
  />
);

test('round placing pieces', () => {
  const App = ReactClient({
    game: NineMensMorrisGame,
    debug: false,
    board: BoardTest,
  }) as any;
  const comp = Enzyme.mount(<App playerID={'0'} />);

  comp
    .find('.ClickableCircle')
    .at(0)
    .simulate('click');

  comp.setProps({ playerID: '1' });
  comp.update();
  expect(comp.find('.Piece').length).toEqual(1);

  comp
    .find('.ClickableCircle')
    .at(1)
    .simulate('click');
  expect(comp.find('.Piece').length).toEqual(2);
});
