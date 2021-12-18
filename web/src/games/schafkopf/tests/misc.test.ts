import { Suit } from 'gamesShared/definitions/cards';
import { str2trick } from 'gamesShared/helpers/cards';

import { Contract } from '../types';
import { getTrickWinnerId, resolveTrick } from '../game';
import { setup_3players, setup_4players } from './util';

it('finds the winner of a given trick', () => {
  const G = setup_4players();
  [
    ['Sc7 Sc10 !ScK Sc8', '1'],
    ['Hz5 !HzK Hz10 EiA', '3'],
    ['!HzU ScU Ei10 EiK', '0'],
    ['Ei9 EiK Ei8 !Ei7', '1'],
  ].forEach((args) => {
    const [s_trick, winnerId] = args;
    expect(
      getTrickWinnerId(
        Contract.Ace,
        Suit.Eichel,
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
    'GrK Gr9 !Gr10',
    G.players.map((P) => P.id),
  );
  const isRoundOver = resolveTrick(G);
  expect(isRoundOver).toEqual(false);
  expect(G.resolvedTricks.length).toEqual(1);
  expect(G.trick.cards.length).toEqual(0);
  const trick = G.resolvedTricks[G.resolvedTricks.length - 1];
  expect(G.trick.leaderId).toEqual(trick.winnerId);
  expect(trick.winnerId).toEqual('2');
});
