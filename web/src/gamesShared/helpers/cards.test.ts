import { CardColor } from 'gamesShared/definitions/cards';

import { str2card, card2str, str2trick } from 'cards';

it('translates strings into cards', () => {
  expect(str2card('S2')).toEqual({ color: CardColor.Spades, value: 2 });
  expect(str2card('C10')).toEqual({ color: CardColor.Clubs, value: 10 });
  expect(str2card('D11')).toEqual({ color: CardColor.Diamonds, value: 11 });
  expect(str2card('DV')).toEqual({ color: CardColor.Diamonds, value: 11 });
  expect(str2card('HC')).toEqual({ color: CardColor.Hearts, value: 12 });
  expect(str2card('Tr20')).toEqual({ color: CardColor.Trumps, value: 20 });
  expect(str2card('Tr1')).toEqual({ color: CardColor.Trumps, value: 1 });
  expect(str2card('Ex')).toEqual({ color: CardColor.Excuse, value: 0 });
  expect(str2card('Ex0')).toEqual({ color: CardColor.Excuse, value: 0 });
  expect(str2card('Ex4')).toEqual({ color: CardColor.Excuse, value: 0 });
  ['S2', 'C10', 'DV', 'HC', 'Ex', 'Tr1', 'Tr20'].forEach((s) => {
    expect(card2str(str2card(s))).toEqual(s);
  });
});

it('translates strings into tricks', () => {
  const players = ['0', '1', '2', '3'];
  expect(str2trick('S2 SR !S10 S5', players)).toEqual({
    cards: [
      { color: CardColor.Spades, value: 10 },
      { color: CardColor.Spades, value: 5 },
      { color: CardColor.Spades, value: 2 },
      { color: CardColor.Spades, value: 14 },
    ],
    leaderId: players[2],
  });
});
