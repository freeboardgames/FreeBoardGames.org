import { CardColor, Contract } from '../types';
import { getTrickWinnerId, resolveTrick } from '../game';
import { str2card, card2str, str2trick, setup_normal } from './util';

it('translates strings into cards', () => {
  expect(str2card('D7')).toEqual({ color: CardColor.Diamonds, value: 7 });
  expect(str2card('C10')).toEqual({ color: CardColor.Clubs, value: 10 });
  expect(str2card('S11')).toEqual({ color: CardColor.Spades, value: 11 });
  expect(str2card('SB')).toEqual({ color: CardColor.Spades, value: 11 });
  expect(str2card('HD')).toEqual({ color: CardColor.Hearts, value: 12 });
  ['D8', 'C10', 'SB', 'HD', 'CA'].forEach((s) => {
    expect(card2str(str2card(s))).toEqual(s);
  });
});

it('translates strings into tricks', () => {
  const G = setup_normal();
  expect(
    str2trick(
      'D8 DK !D10 D9',
      G.players.map((P) => P.id),
    ),
  ).toEqual({
    cards: [
      { color: CardColor.Diamonds, value: 10 },
      { color: CardColor.Diamonds, value: 9 },
      { color: CardColor.Diamonds, value: 8 },
      { color: CardColor.Diamonds, value: 13 },
    ],
    leader: G.players[2],
  });
});

it('finds the winner of a given trick', () => {
  const G = setup_normal();
  const contracts = [Contract.Normal, Contract.SoloTrump, Contract.SoloQueen, Contract.SoloJack, Contract.SoloAce];
  const trumpSuits: CardColor[] = [CardColor.Diamonds, CardColor.Clubs, null, null, null];
  [
    ['S7 S10 !SK S8', ['1', '1', '1', '1', '1']],
    ['S7 S10 !SK S10', ['3', '3', '3', '3', '3']],
    ['H5 !HK H10 HA', ['2', '2', '3', '3', '3']],
    ['!HB HA H10 H9', ['2', '2', '1', '0', '1']],
    ['C9 DK DA !D9', ['2', '0', '2', '2', '2']],
    ['C9 DK DD !D9', ['2', '2', '2', '1', '1']],
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
  expect(G.trick.leader.id).toEqual(trick.winner.id);
  expect(trick.winner.id).toEqual('2');
});
