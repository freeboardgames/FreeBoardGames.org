import { getRoundSummary } from '../util/summary';
import { playTricks, setup_3players, setup_3players_bettel } from './util';

it('correctly evaluates a 3p round where taker wins', () => {
  const G = setup_3players();
  playTricks(G, [
    'GA !G10 GK', // taker wins
    '!S7 S10 SK',
    'H9 !HK H10',
    'S8 EU !S9',
    'GU !SU E9', // taker wins
    '!G9 G7 HA', // taker wins
    '!E10 GO HO',
    'EA !EK E8', // taker wins
    '!H8 E7 EO',
    'SO HU !SA', // taker wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    calledTakerId: '',
    takerPointsRequired: 61,
    takerPoints: 71,
    basic: 5,
    running: -3,
    schneider: 0,
    schwarz: 0,
    multiplier: 1,
    scoring: [16, -8, -8],
  });
});

it('correctly evaluates a 3p round where taker loses', () => {
  const G = setup_3players();
  playTricks(G, [
    'S8 !S10 S9',
    'G9 !G10 GK',
    'E10 !HU EO',
    'H9 HK !HA',
    'EA E7 !HO',
    'SO SU !E8', // taker wins
    '!GU GO E9',
    'GA !G7 H10', // taker wins
    '!S7 EU SK',
    'H8 !EK SA',
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    calledTakerId: '',
    takerPointsRequired: 61,
    takerPoints: 26,
    basic: -5,
    running: -3,
    schneider: -1,
    schwarz: 0,
    multiplier: 1,
    scoring: [-18, 9, 9],
  });
});

it('correctly evaluates a 3p Bettel round where taker wins', () => {
  const G = setup_3players_bettel();
  playTricks(G, [
    'S10 !SK SO',
    'H10 !HA H8',
    'HK !H9 H7',
    '!SA S8 S7',
    '!GU G9 G8',
    '!EK E7 EO',
    '!E8 EA GK',
    'E10 !HO GA',
    'GO !SU S9',
    'E9 !G10 G7',
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '2',
    calledTakerId: '',
    takerPointsRequired: 0,
    takerPoints: 0,
    basic: 3,
    running: NaN,
    schneider: NaN,
    schwarz: NaN,
    multiplier: 1,
    scoring: [-3, -3, 6],
  });
});

it('correctly evaluates a 3p Bettel round where taker loses', () => {
  const G = setup_3players_bettel();
  playTricks(G, [
    'S10 !SK SO',
    'H10 !HA H8',
    'HK !H9 H7',
    '!SA S8 S7',
    '!GU G9 GA', // taker wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '2',
    calledTakerId: '',
    takerPointsRequired: 0,
    takerPoints: 0,
    basic: -3,
    running: NaN,
    schneider: NaN,
    schwarz: NaN,
    multiplier: 1,
    scoring: [3, 3, -6],
  });
});
