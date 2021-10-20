import { CardColor, Pattern } from 'gamesShared/definitions/cards';

import { str2card, card2str, str2trick } from 'gamesShared/helpers/cards';

it('translates strings into cards', () => {
  expect(str2card('D7')).toEqual({ color: CardColor.Diamonds, value: 7 });
  expect(str2card('C10')).toEqual({ color: CardColor.Clubs, value: 10 });
  expect(str2card('S11')).toEqual({ color: CardColor.Spades, value: 11 });
  expect(str2card('SJ')).toEqual({ color: CardColor.Spades, value: 11 });
  expect(str2card('HQ')).toEqual({ color: CardColor.Hearts, value: 12 });
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
  expect(str2card('Sc7')).toEqual({ color: CardColor.Schell, value: 7 });
  expect(str2card('Ei10')).toEqual({ color: CardColor.Eichel, value: 10 });
  expect(str2card('Gr11')).toEqual({ color: CardColor.Gras, value: 11 });
  expect(str2card('GrU')).toEqual({ color: CardColor.Gras, value: 11 });
  expect(str2card('HzO')).toEqual({ color: CardColor.Herz, value: 12 });
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
      { color: CardColor.Spades, value: 10 },
      { color: CardColor.Spades, value: 5 },
      { color: CardColor.Spades, value: 2 },
      { color: CardColor.Spades, value: 14 },
    ],
    leaderId: players[2],
  });
  expect(str2trick('Sc8 ScK !Sc10 Sc9', players)).toEqual({
    cards: [
      { color: CardColor.Schell, value: 10 },
      { color: CardColor.Schell, value: 9 },
      { color: CardColor.Schell, value: 8 },
      { color: CardColor.Schell, value: 13 },
    ],
    leaderId: players[2],
  });
  expect(str2trick('D8 !D10 DK D9', players)).toEqual({
    cards: [
      { color: CardColor.Diamonds, value: 10 },
      { color: CardColor.Diamonds, value: 13 },
      { color: CardColor.Diamonds, value: 9 },
      { color: CardColor.Diamonds, value: 8 },
    ],
    leaderId: players[1],
  });
  expect(str2trick('D8 DK !D10', players)).toEqual({
    cards: [
      { color: CardColor.Diamonds, value: 10 },
      { color: CardColor.Diamonds, value: 8 },
      { color: CardColor.Diamonds, value: 13 },
    ],
    leaderId: players[2],
  });
});
