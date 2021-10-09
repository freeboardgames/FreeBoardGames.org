import { CardColor, Contract } from '../types';
import { getTrickWinnerId, resolveTrick } from '../game';
import { str2card, card2str, str2trick, setup_3players } from './util';

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
  const G = setup_3players();
  expect(
    str2trick(
      'D8 DK !D10',
      G.players.map((P) => P.id),
    ),
  ).toEqual({
    cards: [
      { color: CardColor.Diamonds, value: 10 },
      { color: CardColor.Diamonds, value: 8 },
      { color: CardColor.Diamonds, value: 13 },
    ],
    leader: G.players[2],
  });
});

it('finds the winner of a given trick', () => {
  const G = setup_3players();
  [
    ['D7 D10 !DK', '1'],
    ['H5 !HK H10', '2'],
    ['C10 !D7 DK', '0'],
    ['C9 DB !C7', '1'],
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
  expect(G.trick.leader.id).toEqual(trick.winner.id);
  expect(trick.winner.id).toEqual('2');
});
