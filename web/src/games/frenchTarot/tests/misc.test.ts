import { str2trick } from 'gamesShared/helpers/cards';

import { getTrickWinnerId, resolveTrick } from '../game';
import { setup_4players, setup_5players } from './util';

it('finds the winner of a given trick', () => {
  const G = setup_4players();
  [
    ['S2 SR !S10 S5', '1'],
    ['H5 !HD HC Tr1', '3'],
    ['!CR Ex C10 CV', '0'],
    ['C10 CR CD !Ex', '1'],
  ].forEach((args) => {
    const [s_trick, winnerId] = args;
    expect(getTrickWinnerId(str2trick(s_trick, G.players))).toEqual(winnerId);
  });
});

it('correctly resolves a trick', () => {
  const G = setup_5players();
  G.trick = str2trick('D4 D1 !D7 Tr4 D8', G.players);
  const isRoundOver = resolveTrick(G);
  expect(isRoundOver).toEqual(false);
  expect(G.resolvedTricks.length).toEqual(2);
  expect(G.trick.cards.length).toEqual(0);
  const trick = G.resolvedTricks[G.resolvedTricks.length - 1];
  expect(G.trick.leaderId).toEqual(trick.winnerId);
  expect(trick.winnerId).toEqual('3');
});
