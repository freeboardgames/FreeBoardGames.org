import { Suit, Pattern } from 'gamesShared/definitions/cards';

import { str2card, card2str, str2trick } from 'gamesShared/helpers/cards';

it('translates strings into cards', () => {
  expect(str2card('D7')).toEqual({ suit: Suit.Diamonds, value: 7 });
  expect(str2card('C10')).toEqual({ suit: Suit.Clubs, value: 10 });
  expect(str2card('S11')).toEqual({ suit: Suit.Spades, value: 11 });
  expect(str2card('SJ')).toEqual({ suit: Suit.Spades, value: 11 });
  expect(str2card('HQ')).toEqual({ suit: Suit.Hearts, value: 12 });
  expect(str2card('S2')).toEqual({ suit: Suit.Spades, value: 2 });
  expect(str2card('C10')).toEqual({ suit: Suit.Clubs, value: 10 });
  expect(str2card('D11')).toEqual({ suit: Suit.Diamonds, value: 11 });
  expect(str2card('DV')).toEqual({ suit: Suit.Diamonds, value: 11 });
  expect(str2card('HC')).toEqual({ suit: Suit.Hearts, value: 12 });
  expect(str2card('Tr20')).toEqual({ suit: Suit.Trumps, value: 20 });
  expect(str2card('Tr1')).toEqual({ suit: Suit.Trumps, value: 1 });
  expect(str2card('Ex')).toEqual({ suit: Suit.Excuse, value: 0 });
  expect(str2card('Ex0')).toEqual({ suit: Suit.Excuse, value: 0 });
  expect(str2card('Ex4')).toEqual({ suit: Suit.Excuse, value: 0 });
  expect(str2card('Sc7')).toEqual({ suit: Suit.Schell, value: 7 });
  expect(str2card('Ei10')).toEqual({ suit: Suit.Eichel, value: 10 });
  expect(str2card('Gr11')).toEqual({ suit: Suit.Gras, value: 11 });
  expect(str2card('GrU')).toEqual({ suit: Suit.Gras, value: 11 });
  expect(str2card('HzO')).toEqual({ suit: Suit.Herz, value: 12 });
  ['S2', 'C10', 'DV', 'HC', 'Ex', 'Tr1', 'Tr20'].forEach((s) => {
    expect(card2str(str2card(s), Pattern.Tarot)).toEqual(s);
  });
  ['Sc8', 'Ei10', 'GrU', 'HzO', 'EiA'].forEach((s) => {
    // the franconian pattern is automatically recognized and doesn't need to be specified
    expect(card2str(str2card(s))).toEqual(s);
  });
  ['D8', 'C10', 'SJ', 'HQ', 'CA'].forEach((s) => {
    expect(card2str(str2card(s), Pattern.Skat)).toEqual(s);
  });
});

it('translates strings into tricks', () => {
  const players = ['0', '1', '2', '3'];
  expect(str2trick('S2 SR !S10 S5', players)).toEqual({
    cards: [
      { suit: Suit.Spades, value: 10 },
      { suit: Suit.Spades, value: 5 },
      { suit: Suit.Spades, value: 2 },
      { suit: Suit.Spades, value: 14 },
    ],
    leaderId: players[2],
  });
  expect(str2trick('Sc8 ScK !Sc10 Sc9', players)).toEqual({
    cards: [
      { suit: Suit.Schell, value: 10 },
      { suit: Suit.Schell, value: 9 },
      { suit: Suit.Schell, value: 8 },
      { suit: Suit.Schell, value: 13 },
    ],
    leaderId: players[2],
  });
  expect(str2trick('D8 !D10 DK D9', players)).toEqual({
    cards: [
      { suit: Suit.Diamonds, value: 10 },
      { suit: Suit.Diamonds, value: 13 },
      { suit: Suit.Diamonds, value: 9 },
      { suit: Suit.Diamonds, value: 8 },
    ],
    leaderId: players[1],
  });
  expect(str2trick('D8 DK !D10', players)).toEqual({
    cards: [
      { suit: Suit.Diamonds, value: 10 },
      { suit: Suit.Diamonds, value: 8 },
      { suit: Suit.Diamonds, value: 13 },
    ],
    leaderId: players[2],
  });
});
