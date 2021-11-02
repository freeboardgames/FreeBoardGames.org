import { getRoundSummary } from '../util/summary';
import { playTricks, setup_normal } from './util';
import { Announcement } from '../types';

it('correctly evaluates a round where takers win (no 90)', () => {
  const G = setup_normal();
  playTricks(G, [
    'SQ SQ !D9 DA', // takers win
    '!CQ HQ DJ H10',
    'HQ SJ DQ !DA', // takers win
    '!C9 C9 CK CA',
    'SA SK S9 !SA',
    'DQ DK CQ !HJ', // takers win
    'CJ H9 !SJ H10',
    'S10 S10 SK !S9', // takers win
    '!D10 HA CJ HJ', // takers win
    'D10 CA !DK HK', // takers win
    '!C10 HA DJ C10', // takers win
    'CK HK !D9 H9', // takers win
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    partnerId: '2',
    rePointsRequired: 121,
    contraPointsRequired: 120,
    rePoints: 167,
    basic: 2,
    re: 0,
    contra: 0,
    charlie: 0,
    doppelkopf: 0,
    fox: 2,
    scoring: [4, -4, 4, -4],
  });
});

it('correctly evaluates a round where takers lose', () => {
  const G = setup_normal();
  playTricks(G, [
    'DQ SJ !D9 H10',
    'C9 C9 CK !CA',
    'SA S10 S9 !SA',
    'HQ SQ DQ !H10',
    'CK CA SK !C10',
    'D10 !HQ DK DA',
    'D10 !H9 CQ HK', // takers win
    'CJ DK !CJ HJ', // takers win
    'SQ HA !SJ HJ', // takers win
    '!S10 SK DJ S9', // takers win
    'CQ HA !D9 DA', // takers win
    '!C10 HK DJ H9', // takers win
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    partnerId: '2',
    rePointsRequired: 121,
    contraPointsRequired: 120,
    rePoints: 102,
    basic: -2,
    re: 0,
    contra: 0,
    charlie: 0,
    doppelkopf: 0,
    fox: 1,
    scoring: [-1, 1, -1, 1],
  });
});

it('correctly evaluates a round where takers lose (no 90)', () => {
  const G = setup_normal();
  G.announcementContra = Announcement.No90;
  playTricks(G, [
    'HQ SQ !DJ DA',
    'CQ !SJ SJ H10',
    'D10 DK CJ !HJ', // takers win
    'D10 HQ !DK DA',
    'SA !H9 D9 HK', // takers win
    'CK C9 !CK C10',
    'C9 CA S9 !CA',
    'S10 S10 SK !SA',
    'SQ SK DQ !HJ', // takers win
    '!C10 HK CQ H9', // takers win
    'DQ HA !D9 H10',
    'CJ HA DJ !S9', // takers win
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    partnerId: '2',
    rePointsRequired: 90,
    contraPointsRequired: 151,
    rePoints: 77,
    basic: -3,
    contra: -3,
    re: 0,
    charlie: 1,
    doppelkopf: 0,
    fox: 0,
    scoring: [-5, 5, -5, 5],
  });
});

it('correctly evaluates a round where nobody wins', () => {
  const G = setup_normal();
  G.announcementRe = Announcement.No90;
  G.announcementContra = Announcement.No60;
  playTricks(G, [
    'HQ SQ !DJ DA',
    'CQ !SJ SJ H10',
    'D10 DK CJ !HJ', // takers win
    'D10 HQ !DK DA',
    'SA !H9 D9 HK', // takers win
    'CK C9 !CK C10',
    'C9 CA S9 !CA',
    'S10 S10 SK !SA',
    'SQ SK DQ !HJ', // takers win
    '!C10 HK CQ H9', // takers win
    'DQ HA !D9 H10',
    'CJ HA DJ !S9', // takers win
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    partnerId: '2',
    rePointsRequired: 151,
    contraPointsRequired: 181,
    rePoints: 77,
    basic: -1,
    contra: -1,
    re: 0,
    charlie: 1,
    doppelkopf: 0,
    fox: 0,
    scoring: [-1, 1, -1, 1],
  });
});
