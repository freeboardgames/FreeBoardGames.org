import { getRoundSummary } from '../util/summary';
import { playTricks, setup_3players, setup_3players_bettel } from './util';

it('correctly evaluates a 3p round where taker wins', () => {
  const G = setup_3players();
  playTricks(G, [
    'GrA !Gr10 GrK', // taker wins
    '!Sc10 ScA ScK',
    'Hz9 !HzK Hz10',
    'HzU EiU !Sc9',
    'GrU !ScU Ei9', // taker wins
    '!EiO ScO HzA', // taker wins
    '!Ei10 GrO HzO',
    'EiA !EiK Gr9', // taker wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    calledTakerId: '',
    takerPointsRequired: 61,
    takerPoints: 61,
    basic: 5,
    running: 1,
    schneider: 0,
    schwarz: 0,
    multiplier: 1,
    scoring: [10, -5, -5],
  });
});

it('correctly evaluates a 3p round where taker loses', () => {
  const G = setup_3players();
  playTricks(G, [
    'Sc10 !ScA Sc9',
    'Gr9 !Gr10 GrK',
    'Ei10 !HzU EiO',
    'Hz9 HzK !HzA',
    'EiA EiU !HzO',
    'ScO ScU !ScK', // taker wins
    '!GrU GrO Ei9',
    'GrA !EiK Hz10', // taker wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    calledTakerId: '',
    takerPointsRequired: 61,
    takerPoints: 9,
    basic: -5,
    running: 1,
    schneider: -1,
    schwarz: 0,
    multiplier: 1,
    scoring: [-12, 6, 6],
  });
});

it('correctly evaluates a 3p Bettel round where taker wins', () => {
  const G = setup_3players_bettel();
  playTricks(G, [
    'Sc10 !ScK ScO',
    'Hz10 !HzA HzU',
    'HzK !Hz9 Ei9',
    '!ScA ScU Sc9',
    '!GrU Gr10 Gr9',
    '!EiK EiU Ei9',
    '!Ei10 EiA GrK',
    'GrO !HzO GrA',
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
    'Sc10 !ScK ScO',
    'Hz10 !HzA HzU',
    'HzK !Hz9 EiO',
    '!ScA ScU Sc9',
    '!GrU Gr10 GrA', // taker wins
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
