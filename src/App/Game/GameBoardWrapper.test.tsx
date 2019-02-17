import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { GameMode } from './GameModePicker';
import { gameBoardWrapper } from './GameBoardWrapper';

Enzyme.configure({ adapter: new Adapter() });

test('show no warning', () => {
  const Board = gameBoardWrapper({
    gameCode: 'chess',
    mode: GameMode.OnlineFriend,
  });
  const el = Enzyme.mount((
    <Board isConnected={true} G={{ pgn: '' }} ctx={{}} />
  ));
  expect(el.find('AlertLayer').length).to.equal(0);
});

test('show disconnected warning', () => {
  const Board = gameBoardWrapper({
    gameCode: 'chess',
    mode: GameMode.OnlineFriend,
  });
  const el = Enzyme.mount((
    <Board isConnected={false} G={{ pgn: '' }} ctx={{}} />
  ));
  expect(el.html()).to.contain('Connection lost');
});

test('show sharing dialog and hide it', () => {
  const Board = gameBoardWrapper({
    gameCode: 'chess',
    mode: GameMode.OnlineFriend,
    matchCode: 'foo',
    playerID: '0',
  });
  const el = Enzyme.mount((
    <Board isConnected={true} G={{ pgn: '' }} ctx={{}} />
  ));
  expect(el.find('GameSharing').length).to.equal(1);
  (el.instance() as any)._dismissSharing();
  expect(el.state('dismissedSharing')).to.equal(true);
});
