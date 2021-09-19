import { getRoundSummary } from '../util/summary';
import { playTricks, setup_solo_trump } from './util';

it('correctly evaluates a Solo round where taker wins', () => {
  const G = setup_solo_trump();
  playTricks(G, [
    '!SA DB S10 H10',
    'SB H10 DB !CB',
    'CD !S9 HD S9', // taker wins
    '!HB SA S10 CD',
    'HK H9 HK !HA',
    'CB C9 CA !C10', // taker wins
    '!SD HD DD C10', // taker wins
    '!SB SK D9 C9', // taker wins
    '!H9 D10 HA CK',
    'SK DA !DK D9', // taker wins
    '!SD HB DK CK', // taker wins
    '!DD CA DA D10', // taker wins
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
    '!SD S9 S10 CD',
    'DD DA DK !D9', // taker wins
    '!SA DB DD S9',
    'SD D10 !DK D10', // taker wins
    '!HK H9 HA HA',
    'HB HB !HD CB',
    'CB SA !DB H10',
    'SB C9 CA !C10', // taker wins
    '!SB HD S10 C10',
    'CD !SK DA C9', // taker wins
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
