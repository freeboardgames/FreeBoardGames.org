import { getRoundSummary } from '../util/summary';
import { playTricks, setup_normal } from './util';

it('correctly evaluates a round where takers win (absolut, but lose announced Pagat Ultimo)', () => {
  const G = setup_normal();
  G.announcementsRe.Pagat = 2;
  playTricks(G, [
    'SR SC !SV Tr18',
    'Tr12 Tr20 Tr16 !Tr7', // takers win
    'Tr1 !DV DD D10', // takers win
    '!Tr9 Tr8 Tr11 Tr19',
    'Tr21 Tr17 Tr10 !Tr13', // takers win
    '!CR Tr4 CC CV', // takers win
    'Tr15 !DR Tr5 Tr6',
    '!CD Tr14 HC C10', // takers win
    'H10 !HR S10 HD', // takers win
    'HV !DC SD Ex',
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    partnerId: '1',
    rePointsRequired: 45,
    contraPointsRequired: 44,
    rePoints: 59,
    basic: 1,
    valat: 0,
    absolut: 1,
    kings: 0,
    trull: 0,
    pagat: -4,
    mond: 0,
    scoring: [-2, -2, 2, 2],
  });
});

it('correctly evaluates a round where takers lose', () => {
  const G = setup_normal();
  playTricks(G, [
    'SA SQ !SJ Tr19',
    'Tr21 Tr4 Tr16 !Ex',
    'H10 HR HC !HD', // takers win
    'Tr1 !Tr14 Tr5 Tr7', // takers win
    'Tr15 !DV DD D10', // takers win
    '!CD Tr17 CC C10', // takers win
    'Tr12 !Tr20 Tr11 Tr18', // takers win
    'Tr9 !DR Tr10 Tr6',
    'CR Tr8 !S10 Tr13',
    'HV DC SD !CV',
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    partnerId: '1',
    rePointsRequired: 45,
    contraPointsRequired: 44,
    rePoints: 39,
    basic: -1,
    valat: 0,
    absolut: 0,
    kings: 0,
    trull: 0,
    pagat: 0,
    mond: -1,
    scoring: [-2, -2, 2, 2],
  });
});

it('correctly evaluates a round where takers lose (absolut)', () => {
  const G = setup_normal();
  G.announcementsContra.Absolut = 1;
  playTricks(G, [
    'Tr21 Tr8 !Tr11 Ex',
    'H10 HR HC !HD', // takers win
    'Tr15 !Tr17 Tr10 Tr6', // takers win
    'Tr9 !DV DD D10', // takers win
    '!CD Tr20 CC C10', // takers win
    'Tr12 !Tr14 Tr16 Tr7',
    'SR SC !S10 Tr18',
    'CR Tr4 Tr5 !CV',
    'Tr1 DC !SV Tr19',
    'HV DR SD !Tr13',
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    partnerId: '1',
    rePointsRequired: 33,
    contraPointsRequired: 56,
    rePoints: 31,
    basic: -1,
    valat: 0,
    absolut: -2,
    kings: 0,
    trull: 0,
    pagat: 0,
    mond: -1,
    scoring: [-4, -4, 4, 4],
  });
});

it('correctly evaluates a round where takers win (with Pagat Ultimo)', () => {
  const G = setup_normal();
  playTricks(G, [
    'SR SC !S10 Ex',
    'CD Tr17 CC !CV', // takers win
    'Tr21 !Tr8 Tr5 Tr7', // takers win
    '!HV HR HC HD', // takers win
    'Tr12 !Tr20 Tr11 Tr13', // takers win
    'Tr15 !Tr4 Tr10 Tr18',
    'Tr9 Tr14 Tr16 !Tr19',
    'CR DC SV !C10', // takers win
    '!H10 DR SD Tr6',
    'Tr1 DV DD !D10', // takers win
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    partnerId: '1',
    rePointsRequired: 45,
    contraPointsRequired: 44,
    rePoints: 57,
    basic: 1,
    valat: 0,
    absolut: 1,
    kings: 0,
    trull: 0,
    pagat: 1,
    mond: 0,
    scoring: [3, 3, -3, -3],
  });
});
