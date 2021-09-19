import { getRoundSummary } from '../util/summary';
import { playTricks, setup_normal } from './util';
import { Announcement } from '../types';

it('correctly evaluates a round where takers win (no 90)', () => {
  const G = setup_normal();
  playTricks(G, [
    'SD SD !D9 DA', // takers win
    '!CD HD DB H10',
    'HD SB DD !DA', // takers win
    '!C9 C9 CK CA',
    'SA SK S9 !SA',
    'DD DK CD !HB', // takers win
    'CB H9 !SB H10',
    'S10 S10 SK !S9', // takers win
    '!D10 HA CB HB', // takers win
    'D10 CA !DK HK', // takers win
    '!C10 HA DB C10', // takers win
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
    'DD SB !D9 H10',
    'C9 C9 CK !CA',
    'SA S10 S9 !SA',
    'HD SD DD !H10',
    'CK CA SK !C10',
    'D10 !HD DK DA',
    'D10 !H9 CD HK', // takers win
    'CB DK !CB HB', // takers win
    'SD HA !SB HB', // takers win
    '!S10 SK DB S9', // takers win
    'CD HA !D9 DA', // takers win
    '!C10 HK DB H9', // takers win
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
    'HD SD !DB DA',
    'CD !SB SB H10',
    'D10 DK CB !HB', // takers win
    'D10 HD !DK DA',
    'SA !H9 D9 HK', // takers win
    'CK C9 !CK C10',
    'C9 CA S9 !CA',
    'S10 S10 SK !SA',
    'SD SK DD !HB', // takers win
    '!C10 HK CD H9', // takers win
    'DD HA !D9 H10',
    'CB HA DB !S9', // takers win
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
    'HD SD !DB DA',
    'CD !SB SB H10',
    'D10 DK CB !HB', // takers win
    'D10 HD !DK DA',
    'SA !H9 D9 HK', // takers win
    'CK C9 !CK C10',
    'C9 CA S9 !CA',
    'S10 S10 SK !SA',
    'SD SK DD !HB', // takers win
    '!C10 HK CD H9', // takers win
    'DD HA !D9 H10',
    'CB HA DB !S9', // takers win
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
