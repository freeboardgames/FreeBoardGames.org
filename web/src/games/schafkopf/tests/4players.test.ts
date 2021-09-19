import { getRoundSummary } from '../util/summary';
import { playTricks, setup_4players, setup_4players_wenz } from './util';

it('correctly evaluates a round where takers win schneider', () => {
  const G = setup_4players();
  playTricks(G, [
    'EK EO !E7 E10', // taker wins
    'GK !GA G9 G7', // taker wins
    'H7 !S8 SK S9',
    '!HA SO HK SU', // taker wins
    'EA !G10 E9 G8', // taker wins
    'E8 !S10 S7 GO', // taker wins
    'EU H8 HO !H10',
    'H9 GU !SA HU', // taker wins
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
    'EA S8 !E9 E10',
    '!E8 S10 E7 HU', // taker wins
    'HA GU HO !H10',
    'EU G10 !SK S9',
    '!GK GA G9 G7', // taker wins
    'H9 !H8 HK SU', // taker wins
    'EK EO SA !G8', // taker wins
    'H7 !SO S7 GO', // taker wins
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
    'EA S10 !E7 E10',
    '!EK EO E9 GO', // taker wins
    'GK !S8 S7 S9', // taker wins
    'EU GA G9 !G7',
    '!H7 H8 HK HU', // taker wins
    'HA G10 SA !G8',
    '!E8 SO SK SU', // taker wins
    'H9 !GU HO H10',
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
    '!GO GK G8 G7',
    'EO !E7 E9 E10',
    'HK H10 H8 !H9',
    'HU !EU GU SU',
    'SO !S8 S9 SA',
    'SK G10 HA !HO', // taker wins
    'G9 S10 !H7 E8', // taker wins
    'GA EK !S7 EA', // taker wins
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
