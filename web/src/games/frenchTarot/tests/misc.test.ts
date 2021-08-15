import { CardColor } from '../types';
import { getTrickWinnerId, resolveTrick } from '../game';
import { str2card, card2str, str2trick, setup_4players, setup_5players } from './util';

it('translates strings into cards', () => {
  expect(str2card('S2')).toEqual({ color: CardColor.Spades, value: 2 });
  expect(str2card('C10')).toEqual({ color: CardColor.Clubs, value: 10 });
  expect(str2card('D11')).toEqual({ color: CardColor.Diamonds, value: 11 });
  expect(str2card('DV')).toEqual({ color: CardColor.Diamonds, value: 11 });
  expect(str2card('HC')).toEqual({ color: CardColor.Hearts, value: 12 });
  expect(str2card('T20')).toEqual({ color: CardColor.Trumps, value: 20 });
  expect(str2card('T1')).toEqual({ color: CardColor.Trumps, value: 1 });
  expect(str2card('E')).toEqual({ color: CardColor.Excuse, value: 0 });
  expect(str2card('E0')).toEqual({ color: CardColor.Excuse, value: 0 });
  expect(str2card('E4')).toEqual({ color: CardColor.Excuse, value: 0 });
  ['S2', 'C10', 'DV', 'HC', 'E', 'T1', 'T20'].forEach((s) => {
    expect(card2str(str2card(s))).toEqual(s);
  });
});

it('translates strings into tricks', () => {
  const G = setup_4players();
  expect(str2trick('S2 SR !S10 S5', G.players)).toEqual({
    cards: [
      { color: CardColor.Spades, value: 10 },
      { color: CardColor.Spades, value: 5 },
      { color: CardColor.Spades, value: 2 },
      { color: CardColor.Spades, value: 14 },
    ],
    leader: G.players[2],
  });
});

it('finds the winner of a given trick', () => {
  const G = setup_4players();
  [
    ['S2 SR !S10 S5', '1'],
    ['H5 !HD HC T1', '3'],
    ['!CR E C10 CV', '0'],
    ['C10 CR CD !E', '1'],
  ].forEach((args) => {
    const [s_trick, winnerId] = args;
    expect(getTrickWinnerId(str2trick(s_trick, G.players))).toEqual(winnerId);
  });
});

it('correctly resolves a trick', () => {
  const G = setup_5players();
  G.trick = str2trick('D4 D1 !D7 T4 D8', G.players);
  const isRoundOver = resolveTrick(G);
  expect(isRoundOver).toEqual(false);
  expect(G.resolvedTricks.length).toEqual(2);
  expect(G.trick.cards.length).toEqual(0);
  const trick = G.resolvedTricks[G.resolvedTricks.length - 1];
  expect(G.trick.leader.id).toEqual(trick.winner.id);
  expect(trick.winner.id).toEqual('3');
});
