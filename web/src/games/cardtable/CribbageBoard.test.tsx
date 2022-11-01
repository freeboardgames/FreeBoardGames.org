import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CribbageBoard from './CribbageBoard';
import { CardTableGame } from './game';
import { Client } from 'boardgame.io/client';
import { Local } from 'boardgame.io/multiplayer';

// mock functions for HTMLMediaElement
// https://github.com/jsdom/jsdom/issues/2155#issuecomment-366703395
(window as any).HTMLMediaElement.prototype.load = () => {
  /* do nothing */
};
(window as any).HTMLMediaElement.prototype.play = () => {
  /* do nothing */
};
(window as any).HTMLMediaElement.prototype.pause = () => {
  /* do nothing */
};
(window as any).HTMLMediaElement.prototype.addTextTrack = () => {
  /* do nothing */
};

Enzyme.configure({ adapter: new Adapter() });

test('test a peg { f: 59, b:58} +1', () => {
  const client = Client({
    game: CardTableGame,
    multiplayer: Local(),
    playerID: '0',
  });
  client.start();
  const store = client.store;
  client.moves.pegPoints(29);
  client.moves.pegPoints(29);
  client.moves.pegPoints(1);
  client.moves.pegPoints(1);
  let { G, ctx } = store.getState();

  const board = Enzyme.mount(<CribbageBoard score={G.score} playerID={ctx.currentPlayer} />);
  // should be ignored
  let cribButton = board.find('button#anchor-button');
  cribButton.simulate('click');
  let front = board.find('Peghole[idx=60]').not('[opponent]').childAt(0);
  let back = board.find('Peghole[idx=59]').not('[opponent]').childAt(0);

  expect(back.prop('className')).toEqual('Peghole_pegged');
  expect(front.prop('className')).toEqual('Peghole_pegged');
});
