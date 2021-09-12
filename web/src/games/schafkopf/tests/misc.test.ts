import { CardColor, Contract } from '../types';
import { getTrickWinnerId, resolveTrick } from '../game';
import { str2card, card2str, str2trick, setup_3players, setup_4players } from './util';

it('translates strings into cards', () => {
  expect(str2card('S7')).toEqual({ color: CardColor.Schell, value: 7 });
  expect(str2card('E10')).toEqual({ color: CardColor.Eichel, value: 10 });
  expect(str2card('G11')).toEqual({ color: CardColor.Gras, value: 11 });
  expect(str2card('GU')).toEqual({ color: CardColor.Gras, value: 11 });
  expect(str2card('HO')).toEqual({ color: CardColor.Herz, value: 12 });
  ['S8', 'E10', 'GU', 'HO', 'EA'].forEach((s) => {
    expect(card2str(str2card(s))).toEqual(s);
  });
});

it('translates strings into tricks', () => {
  const G = setup_4players();
  expect(str2trick('S8 SK !S10 S9', G.players)).toEqual({
    cards: [
      { color: CardColor.Schell, value: 10 },
      { color: CardColor.Schell, value: 9 },
      { color: CardColor.Schell, value: 8 },
      { color: CardColor.Schell, value: 13 },
    ],
    leader: G.players[2],
  });
});

it('finds the winner of a given trick', () => {
  const G = setup_4players();
  [
    ['S7 S10 !SK S8', '1'],
    ['H5 !HK H10 EA', '3'],
    ['!HU SU E10 EK', '0'],
    ['E9 EK E8 !E7', '1'],
  ].forEach((args) => {
    const [s_trick, winnerId] = args;
    expect(getTrickWinnerId(Contract.Ace, CardColor.Eichel, str2trick(s_trick, G.players))).toEqual(winnerId);
  });
});

it('correctly resolves a trick', () => {
  const G = setup_3players();
  G.trick = str2trick('GK G7 !G10', G.players);
  const isRoundOver = resolveTrick(G);
  expect(isRoundOver).toEqual(false);
  expect(G.resolvedTricks.length).toEqual(2);
  expect(G.trick.cards.length).toEqual(0);
  const trick = G.resolvedTricks[G.resolvedTricks.length - 1];
  expect(G.trick.leader.id).toEqual(trick.winner.id);
  expect(trick.winner.id).toEqual('2');
});
