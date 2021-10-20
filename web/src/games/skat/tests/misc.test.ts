import { CardColor } from 'gamesShared/definitions/cards';
import { str2trick } from 'gamesShared/helpers/cards';

import { Contract } from '../types';
import { getTrickWinnerId, resolveTrick } from '../game';
import { setup_3players } from './util';

it('finds the winner of a given trick', () => {
  const G = setup_3players();
  [
    ['D7 D10 !DK', '1'],
    ['H5 !HK H10', '2'],
    ['C10 !D7 DK', '0'],
    ['C9 DJ !C7', '1'],
  ].forEach((args) => {
    const [s_trick, winnerId] = args;
    expect(
      getTrickWinnerId(
        Contract.Suit,
        CardColor.Clubs,
        str2trick(
          s_trick,
          G.players.map((P) => P.id),
        ),
      ),
    ).toEqual(winnerId);
  });
});

it('correctly resolves a trick', () => {
  const G = setup_3players();
  G.trick = str2trick(
    'SK S7 !S10',
    G.players.map((P) => P.id),
  );
  const isRoundOver = resolveTrick(G);
  expect(isRoundOver).toEqual(false);
  expect(G.resolvedTricks.length).toEqual(2);
  expect(G.trick.cards.length).toEqual(0);
  const trick = G.resolvedTricks[G.resolvedTricks.length - 1];
  expect(G.trick.leaderId).toEqual(trick.winnerId);
  expect(trick.winnerId).toEqual('2');
});
