import { getRoundSummary } from '../util/summary';
import { playTricks, setup_3players, setup_3players_null } from './util';
import * as util from '../util/misc';

it('correctly evaluates a 3p round where taker wins', () => {
  const G = setup_3players();
  playTricks(G, [
    'C10 !HQ CJ',
    'SA S7 !S10', // taker wins
    '!H9 HA H8',
    'DK !D10 D7',
    'SJ !CQ CK', // taker wins
    '!C7 CA HJ',
    'C8 DQ !SQ', // taker wins
    '!HK DA SK', // taker wins
    '!H10 D8 S8', // taker wins
    '!DJ D9 S9', // taker wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    takerBid: 24,
    takerPointsRequired: 61,
    takerPoints: 67,
    winLevel: 1,
    tops: -1,
    basicValue: 12,
    scoring: [24, 0, 0],
  });
});

it('correctly evaluates a 3p round where taker overbids', () => {
  const G = setup_3players();
  const taker = util.getPlayerById(G, G.takerId);
  taker.bid = 26;
  playTricks(G, [
    'C10 !HQ CJ',
    'SA S7 !S10', // taker wins
    '!H9 HA H8',
    'DK !D10 D7',
    'SJ !CQ CK', // taker wins
    '!C7 CA HJ',
    'C8 DQ !SQ', // taker wins
    '!HK DA SK', // taker wins
    '!H10 D8 S8', // taker wins
    '!DJ D9 S9', // taker wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    takerBid: 26,
    takerPointsRequired: 90,
    takerPoints: 67,
    winLevel: 2,
    tops: -1,
    basicValue: 12,
    scoring: [-72, 0, 0],
  });
});

it('correctly evaluates a 3p round where taker wins hand', () => {
  const G = setup_3players();
  G.hand = true;
  const taker = util.getPlayerById(G, G.takerId);
  taker.bid = 26;
  playTricks(G, [
    'C10 !HQ CJ',
    'SA S7 !S10', // taker wins
    '!H9 HA H8',
    'DK !D10 D7',
    'SJ !CQ CK', // taker wins
    '!C7 CA HJ',
    'C8 DQ !SQ', // taker wins
    '!HK DA SK', // taker wins
    '!H10 D8 S8', // taker wins
    '!DJ D9 S9', // taker wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    takerBid: 26,
    takerPointsRequired: 61,
    takerPoints: 67,
    winLevel: 2,
    tops: -1,
    basicValue: 12,
    scoring: [36, 0, 0],
  });
});

it('correctly evaluates a 3p round where taker wins Schneider', () => {
  const G = setup_3players();
  playTricks(G, [
    'C10 !CQ SQ', // taker wins
    '!DK D9 D7', // taker wins
    '!SA S7 S10', // taker wins
    '!C8 DQ CJ',
    'SJ HQ !HJ', // taker wins
    '!H10 HA H8',
    'C7 !D10 S9', // taker wins
    '!HK D8 SK', // taker wins
    '!DJ CA CK', // taker wins
    '!H9 DA S8', // taker wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    takerBid: 24,
    takerPointsRequired: 61,
    takerPoints: 94,
    winLevel: 2,
    tops: -1,
    basicValue: 12,
    scoring: [36, 0, 0],
  });
});

it('correctly evaluates a 3p round where taker loses', () => {
  const G = setup_3players();
  playTricks(G, [
    'H9 !HA H8',
    'DK !DA D7',
    'SJ !DQ CJ',
    'SA S7 !SK', // taker wins
    '!C10 CQ HJ',
    'C7 D8 !S8', // taker wins
    '!C8 CA CK',
    'H10 !D10 S10',
    'DJ !HQ SQ', // taker wins
    '!HK D9 S9', // taker wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    takerBid: 24,
    takerPointsRequired: 61,
    takerPoints: 27,
    winLevel: 2,
    tops: -1,
    basicValue: 12,
    scoring: [-72, 0, 0],
  });
});

it('correctly evaluates a 3p Null round where taker wins', () => {
  const G = setup_3players_null();
  playTricks(G, [
    'C9 !CA CK',
    'HA !H10 H7',
    '!DJ DA DK',
    'HQ !HJ H8',
    '!DQ SK D7',
    '!C7 CJ C10',
    'SJ !S7 S9',
    '!D8 C8 HK',
    '!D10 H9 SA',
    '!S8 S10 CQ',
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '2',
    takerBid: 23,
    takerPointsRequired: NaN,
    takerPoints: NaN,
    winLevel: NaN,
    tops: NaN,
    basicValue: 23,
    scoring: [0, 0, 23],
  });
});

it('correctly evaluates a 3p Null round where taker loses', () => {
  const G = setup_3players_null();
  playTricks(G, [
    'HA !H9 H7',
    '!C7 CA CK',
    'C9 !CJ CQ', // taker wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '2',
    takerBid: 23,
    takerPointsRequired: NaN,
    takerPoints: NaN,
    winLevel: NaN,
    tops: NaN,
    basicValue: 23,
    scoring: [0, 0, -46],
  });
});
