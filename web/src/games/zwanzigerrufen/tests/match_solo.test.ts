import { getRoundSummary } from '../util/summary';
import { playTricks, setup_solo, setup_solo_suit } from './util';

it('correctly evaluates a Solo round where taker wins', () => {
  const G = setup_solo();
  playTricks(G, [
    '!Tr11 Tr18 Tr1 Tr12', // taker wins
    'DD !D10 Tr9 DV',
    'S10 Tr14 !SR SD', // taker wins
    'Tr7 !Tr21 Tr10 Tr6', // taker wins
    'Tr20 !Tr19 CV Tr13',
    '!HV HC C10 HR',
    'Tr8 Ex CR !Tr4', // taker wins
    'DR !DC CD Tr5',
    'Tr17 Tr16 SV !HD',
    '!CC Tr15 SC H10', // taker wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '1',
    partnerId: '',
    rePointsRequired: 45,
    contraPointsRequired: 44,
    rePoints: 45,
    basic: 5,
    valat: 0,
    absolut: 0,
    kings: 0,
    trull: 0,
    pagat: 0,
    mond: 0,
    scoring: [-5, 15, -5, -5],
  });
});

it('correctly evaluates a Solo round where taker loses', () => {
  const G = setup_solo();
  playTricks(G, [
    '!Tr7 Tr16 Tr10 Tr6', // taker wins
    'Tr8 !Tr21 Tr9 Tr4', // taker wins
    'Tr20 !Tr15 Tr1 Tr12',
    '!CC Tr18 CR Tr5', // taker wins
    'HV !HC SV HD',
    'DR D10 C10 !DV',
    '!Tr11 Ex SR Tr13', // taker wins
    'Tr17 !Tr14 CD H10',
    '!S10 Tr19 SC SD', // taker wins
    'DD !DC CV HR',
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '1',
    partnerId: '',
    rePointsRequired: 45,
    contraPointsRequired: 44,
    rePoints: 42,
    basic: -5,
    valat: 0,
    absolut: 0,
    kings: 0,
    trull: 0,
    pagat: 0,
    mond: 0,
    scoring: [5, -15, 5, 5],
  });
});

it('correctly evaluates a Solo round where taker wins (absolut)', () => {
  const G = setup_solo();
  playTricks(G, [
    '!HV HC Tr10 HD',
    'S10 Ex !SR SD', // taker wins
    'Tr17 !Tr18 Tr1 Tr13', // taker wins
    'Tr8 !Tr14 Tr9 Tr12', // taker wins
    'Tr20 !Tr15 CV Tr5',
    '!DR DC SV DV',
    '!DD D10 C10 Tr6',
    'Tr11 Tr21 CD !Tr4', // taker wins
    'Tr7 !Tr16 CR H10', // taker wins
    'CC !Tr19 SC HR', // taker wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '1',
    partnerId: '',
    rePointsRequired: 45,
    contraPointsRequired: 44,
    rePoints: 56,
    basic: 5,
    valat: 0,
    absolut: 1,
    kings: 0,
    trull: 0,
    pagat: 0,
    mond: 0,
    scoring: [-6, 18, -6, -6],
  });
});

it('correctly evaluates a Suit Solo round where taker wins', () => {
  const G = setup_solo_suit();
  playTricks(G, [
    '!CC CD Ex CR', // taker wins
    'HV HC H10 !HD', // taker wins
    'Tr14 DV D10 !DR', // taker wins
    'Tr13 Tr12 DC !DD', // taker wins
    'SC Tr8 SR !S10',
    'Tr7 Tr10 !SV Tr20',
    'Tr18 Tr1 !SD Tr4',
    'Tr15 Tr11 !Tr21 Tr6',
    'Tr16 Tr17 !Tr5 Tr19', // taker wins
    'CV HR Tr9 !C10',
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '3',
    partnerId: '',
    rePointsRequired: 45,
    contraPointsRequired: 44,
    rePoints: 47,
    basic: 4,
    valat: 0,
    absolut: 0,
    kings: 0,
    trull: NaN,
    pagat: NaN,
    mond: NaN,
    scoring: [-4, -4, -4, 12],
  });
});

it('correctly evaluates a Suit Solo round where taker loses (absolut)', () => {
  const G = setup_solo_suit();
  playTricks(G, [
    '!CC CD Ex C10',
    'HV !HR H10 HD',
    'Tr18 !HC Tr5 Tr20',
    'Tr16 !DV DC DD', // taker wins
    'CV Tr10 Tr9 !CR', // taker wins
    'Tr7 Tr1 D10 !DR', // taker wins
    'SC Tr8 SR !S10',
    'Tr15 Tr17 !SV Tr6',
    'Tr14 Tr11 !SD Tr4',
    'Tr13 Tr12 !Tr21 Tr19',
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '3',
    partnerId: '',
    rePointsRequired: 45,
    contraPointsRequired: 44,
    rePoints: 30,
    basic: -4,
    valat: 0,
    absolut: -1,
    kings: 0,
    trull: NaN,
    pagat: NaN,
    mond: NaN,
    scoring: [5, 5, 5, -15],
  });
});
