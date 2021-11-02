import { getRoundSummary } from '../util/summary';
import { playTricks, setup_solo_trump } from './util';

it('correctly evaluates a Solo round where taker wins', () => {
  const G = setup_solo_trump();
  playTricks(G, [
    '!SA DJ S10 H10',
    'SJ H10 DJ !CJ',
    'CQ !S9 HQ S9', // taker wins
    '!HJ SA S10 CQ',
    'HK H9 HK !HA',
    'CJ C9 CA !C10', // taker wins
    '!SQ HQ DQ C10', // taker wins
    '!SJ SK D9 C9', // taker wins
    '!H9 D10 HA CK',
    'SK DA !DK D9', // taker wins
    '!SQ HJ DK CK', // taker wins
    '!DQ CA DA D10', // taker wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    partnerId: '',
    rePointsRequired: 121,
    contraPointsRequired: 120,
    rePoints: 121,
    basic: 1,
    contra: 0,
    re: 0,
    charlie: NaN,
    doppelkopf: NaN,
    fox: NaN,
    scoring: [3, -1, -1, -1],
  });
});

it('correctly evaluates a Solo round where taker loses (no 90)', () => {
  const G = setup_solo_trump();
  playTricks(G, [
    '!SQ S9 S10 CQ',
    'DQ DA DK !D9', // taker wins
    '!SA DJ DQ S9',
    'SQ D10 !DK D10', // taker wins
    '!HK H9 HA HA',
    'HJ HJ !HQ CJ',
    'CJ SA !DJ H10',
    'SJ C9 CA !C10', // taker wins
    '!SJ HQ S10 C10',
    'CQ !SK DA C9', // taker wins
    '!SK H10 HK CK',
    'H9 !CA D9 CK',
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    partnerId: '',
    rePointsRequired: 121,
    contraPointsRequired: 120,
    rePoints: 86,
    basic: -2,
    contra: 0,
    re: 0,
    charlie: NaN,
    doppelkopf: NaN,
    fox: NaN,
    scoring: [-6, 2, 2, 2],
  });
});
