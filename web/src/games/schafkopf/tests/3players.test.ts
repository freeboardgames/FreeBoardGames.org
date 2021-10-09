import { getRoundSummary } from '../util/summary';
import { playTricks, setup_3players, setup_3players_bettel } from './util';

it('correctly evaluates a 3p round where taker wins', () => {
  const G = setup_3players();
  playTricks(G, [
    'GrA !Gr10 GrK', // taker wins
    '!Sc7 Sc10 ScK',
    'Hz9 !HzK Hz10',
    'Sc8 EiU !Sc9',
    'GrU !ScU Ei9', // taker wins
    '!Gr9 Gr7 HzA', // taker wins
    '!Ei10 GrO HzO',
    'EiA !EiK Ei8', // taker wins
    '!Hz8 Ei7 EiO',
    'ScO HzU !ScA', // taker wins
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
    'Sc8 !Sc10 Sc9',
    'Gr9 !Gr10 GrK',
    'Ei10 !HzU EiO',
    'Hz9 HzK !HzA',
    'EiA Ei7 !HzO',
    'ScO ScU !Ei8', // taker wins
    '!GrU GrO Ei9',
    'GrA !Gr7 Hz10', // taker wins
    '!Sc7 EiU ScK',
    'Hz8 !EiK ScA',
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
    'Sc10 !ScK ScO',
    'Hz10 !HzA Hz8',
    'HzK !Hz9 Hz7',
    '!ScA Sc8 Sc7',
    '!GrU Gr9 Gr8',
    '!EiK Ei7 EiO',
    '!Ei8 EiA GrK',
    'Ei10 !HzO GrA',
    'GrO !ScU Sc9',
    'Ei9 !Gr10 Gr7',
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
    'Hz10 !HzA Hz8',
    'HzK !Hz9 Hz7',
    '!ScA Sc8 Sc7',
    '!GrU Gr9 GrA', // taker wins
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
