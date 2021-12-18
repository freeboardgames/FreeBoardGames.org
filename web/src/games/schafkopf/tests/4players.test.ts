import { getRoundSummary } from '../util/summary';
import { playTricks, setup_4players, setup_4players_wenz } from './util';

it('correctly evaluates a round where takers win schneider', () => {
  const G = setup_4players();
  playTricks(G, [
    'EiK EiO !Ei7 Ei10', // taker wins
    'GrK !GrA Gr9 Gr7', // taker wins
    'Hz7 !Sc8 ScK Sc9',
    '!HzA ScO HzK ScU', // taker wins
    'EiA !Gr10 Ei9 Gr8', // taker wins
    'Ei8 !Sc10 Sc7 GrO', // taker wins
    'EiU Hz8 HzO !Hz10',
    'Hz9 GrU !ScA HzU', // taker wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '3',
    calledTakerId: '1',
    takerPointsRequired: 61,
    takerPoints: 101,
    basic: 1,
    running: 2,
    schneider: 1,
    schwarz: 0,
    multiplier: 1,
    scoring: [-2, 2, -2, 2],
  });
});

it('correctly evaluates a round where takers lose (not schneider)', () => {
  const G = setup_4players();
  playTricks(G, [
    'EiA Sc8 !Ei9 Ei10',
    '!Ei8 Sc10 Ei7 HzU', // taker wins
    'HzA GrU HzO !Hz10',
    'EiU Gr10 !ScK Sc9',
    '!GrK GrA Gr9 Gr7', // taker wins
    'Hz9 !Hz8 HzK ScU', // taker wins
    'EiK EiO ScA !Gr8', // taker wins
    'Hz7 !ScO Sc7 GrO', // taker wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '3',
    calledTakerId: '1',
    takerPointsRequired: 61,
    takerPoints: 57,
    basic: -1,
    running: 2,
    schneider: 0,
    schwarz: 0,
    multiplier: 1,
    scoring: [1, -1, 1, -1],
  });
});

it('correctly evaluates a round where takers lose schneider', () => {
  const G = setup_4players();
  playTricks(G, [
    'EiA Sc10 !Ei7 Ei10',
    '!EiK EiO Ei9 GrO', // taker wins
    'GrK !Sc8 Sc7 Sc9', // taker wins
    'EiU GrA Gr9 !Gr7',
    '!Hz7 Hz8 HzK HzU', // taker wins
    'HzA Gr10 ScA !Gr8',
    '!Ei8 ScO ScK ScU', // taker wins
    'Hz9 !GrU HzO Hz10',
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '3',
    calledTakerId: '1',
    takerPointsRequired: 61,
    takerPoints: 29,
    basic: -1,
    running: 2,
    schneider: -1,
    schwarz: 0,
    multiplier: 1,
    scoring: [2, -2, 2, -2],
  });
});

it('correctly evaluates a Wenz round where taker wins', () => {
  const G = setup_4players_wenz();
  playTricks(G, [
    '!GrO GrK Gr8 Gr7',
    'EiO !Ei7 Ei9 Ei10',
    'HzK Hz10 Hz8 !Hz9',
    'HzU !EiU GrU ScU',
    'ScO !Sc8 Sc9 ScA',
    'ScK Gr10 HzA !HzO', // taker wins
    'Gr9 Sc10 !Hz7 Ei8', // taker wins
    'GrA EiK !Sc7 EiA', // taker wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '2',
    calledTakerId: '',
    takerPointsRequired: 61,
    takerPoints: 64,
    basic: 5,
    running: -1,
    schneider: 0,
    schwarz: 0,
    multiplier: 1,
    scoring: [-5, -5, 15, -5],
  });
});
