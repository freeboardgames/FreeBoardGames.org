import { Suit } from 'gamesShared/definitions/cards';
import { str2trick } from 'gamesShared/helpers/cards';

import { Contract } from '../types';
import { getTrickWinnerId, resolveTrick } from '../game';
import { setup_normal } from './util';

it('finds the winner of a given trick', () => {
  const G = setup_normal();
  const contracts = [Contract.Normal, Contract.SoloTrump, Contract.SoloQueen, Contract.SoloJack, Contract.SoloAce];
  const trumpSuits: Suit[] = [Suit.Diamonds, Suit.Clubs, null, null, null];
  [
    ['S7 S10 !SK S8', ['1', '1', '1', '1', '1']],
    ['S7 S10 !SK S10', ['3', '3', '3', '3', '3']],
    ['H5 !HK H10 HA', ['2', '2', '3', '3', '3']],
    ['!HJ HA H10 H9', ['2', '2', '1', '0', '1']],
    ['C9 DK DA !D9', ['2', '0', '2', '2', '2']],
    ['C9 DK DQ !D9', ['2', '2', '2', '1', '1']],
  ].forEach((args) => {
    const [s_trick, winners] = args;
    const T = str2trick(
      s_trick,
      G.players.map((P) => P.id),
    );
    contracts.forEach((contract, i) => {
      const computedWinnerId = getTrickWinnerId(contract, trumpSuits[i], T);
      expect(computedWinnerId).toEqual(winners[i]);
    });
  });
});

it('correctly resolves a trick', () => {
  const G = setup_normal();
  G.trick = str2trick(
    'SK S7 !SA S10',
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
