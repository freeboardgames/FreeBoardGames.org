import { str2trick } from 'gamesShared/helpers/cards';
import { Suit } from 'gamesShared/definitions/cards';

import { getTrickWinnerId, resolveTrick } from '../game';
import { setup_normal } from './util';

it('finds the winner of a given trick', () => {
  const G = setup_normal();
  const trumps = [Suit.Hearts, Suit.Spades, Suit.Clubs];
  [
    ['SA SK !SQ S10', ['0', '0', '0']],
    ['SJ SQ !S10 SK', ['3', '3', '3']],
    ['HJ !H10 S5 HK', ['3', '2', '3']],
    ['!HJ CA C3 H10', ['0', '0', '1']],
    ['DA DJ S3 !D10', ['0', '2', '0']],
    ['DQ CA C10 !C5', ['1', '1', '1']],
  ].forEach((args) => {
    const [s_trick, winners] = args;
    const T = str2trick(
      s_trick,
      G.players.map((P) => P.id),
    );
    trumps.forEach((trumpSuit, i) => {
      const computedWinnerId = getTrickWinnerId(trumpSuit, T);
      expect(computedWinnerId).toEqual(winners[i]);
    });
  });
});

it('correctly resolves a trick', () => {
  const G = setup_normal();
  G.trick = str2trick(
    'SK S4 !SQ HQ',
    G.players.map((P) => P.id),
  );
  const isRoundOver = resolveTrick(G);
  expect(isRoundOver).toEqual(false);
  expect(G.resolvedTricks.length).toEqual(1);
  expect(G.trick.cards.length).toEqual(0);
  const trick = G.resolvedTricks[G.resolvedTricks.length - 1];
  expect(G.trick.leaderId).toEqual(trick.winnerId);
  expect(trick.winnerId).toEqual('3');
});
