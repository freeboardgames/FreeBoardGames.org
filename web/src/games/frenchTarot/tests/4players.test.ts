import { getRoundSummary } from '../util/summary';
import { playTricks, setup_4players } from './util';

it('correctly evaluates a round where taker wins', () => {
  const G = setup_4players();
  playTricks(G, [
    'CC !CV C4 C6', // taker wins
    '!T8 T4 T20 T21',
    'HC H9 E !H8', // taker wins
    '!H10 H2 HV HD',
    'H5 H4 T7 !H6',
    'T16 S3 !SC S8', // taker wins
    '!T10 T5 T13 T19',
    'T18 T3 T6 !T15', // taker wins
    '!H3 D7 T9 T14',
    'C3 C7 CR !C10',
    'D4 D6 !D10 D9',
    'DR D8 !DC DV', // taker wins
    '!T12 SD T17 T2',
    'T11 S2 !S7 S9', // taker wins
    '!HR DD S10 C8', // taker wins
    '!C5 C1 S4 C2', // taker wins
    '!D5 C9 D1 D3', // taker wins
    '!T1 CD SR S5', // taker wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    calledTakerId: '',
    takerPointsRequired: 51,
    takerPoints: 56,
    petitAuBout: 10,
    multiplier: 1,
    poignee: 0,
    slam: 0,
    scoring: [120, -40, -40, -40],
  });
});

it('correctly evaluates a round where taker loses but gets petit au bout', () => {
  const G = setup_4players();
  playTricks(G, [
    'D4 !D8 DC D9',
    'D5 DD !D10 DV',
    'H5 !H2 E H8',
    'T11 S2 SC !S5', // taker wins
    '!CC C1 C4 C10', // taker wins
    '!T8 T5 T13 T14',
    'C5 CV CR !C2',
    'T10 T4 !T20 T21',
    'HR H4 HV !H6', // taker wins
    '!T16 T3 T17 T19',
    'C3 CD T7 !C6',
    'T18 C9 !T6 T15', // taker wins
    '!H10 H9 T9 HD',
    'T12 SD !S7 S9', // taker wins
    '!HC S3 S4 T2',
    'DR D6 D1 !D3', // taker wins
    '!H3 D7 SR C8', // taker wins
    '!T1 C7 S10 S8', // taker wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '0',
    calledTakerId: '',
    takerPointsRequired: 51,
    takerPoints: 44,
    petitAuBout: 10,
    multiplier: 1,
    poignee: 0,
    slam: 0,
    scoring: [-66, 22, 22, 22],
  });
});
