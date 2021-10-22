import { str2trick } from 'gamesShared/helpers/cards';

import { Contract } from '../types';
import { getTrickWinnerId, resolveTrick } from '../game';
import { setup_normal } from './util';

it('finds the winner of a given trick', () => {
  const G = setup_normal();
  const contracts = [Contract.Normal, Contract.Solo, Contract.SoloSuit];
  [
    ['SC SR !SD S10', ['1', '1', '1']],
    ['SV SD !S10 SR', ['3', '3', '3']],
    ['HV !H10 Tr3 HR', ['2', '2', '3']],
    ['!HV HD Ex H10', ['2', '2', '1']],
    ['DC DV Tr1 !D10', ['2', '2', '0']],
    ['DD Tr12 Tr14 !Tr9', ['2', '2', '2']],
  ].forEach((args) => {
    const [s_trick, winners] = args;
    const T = str2trick(
      s_trick,
      G.players.map((P) => P.id),
    );
    contracts.forEach((contract, i) => {
      const computedWinnerId = getTrickWinnerId(contract, T);
      expect(computedWinnerId).toEqual(winners[i]);
    });
  });
});

it('correctly resolves a trick', () => {
  const G = setup_normal();
  G.trick = str2trick(
    'SR S10 !SD Tr4',
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
