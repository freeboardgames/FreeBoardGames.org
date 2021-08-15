import { getCalledTakerId } from '../game';
import { getRoundSummary } from '../engine/summary';
import { str2card, playTricks, setup_5players } from './util';

it('finds the called taker in a 5-player game', () => {
  const G = setup_5players();
  expect(getCalledTakerId(G.players, str2card('CR'))).toEqual('1');
  expect(getCalledTakerId(G.players, str2card('SR'))).toEqual('3');
});

it('correctly evaluates a round where taker loses Excuse', () => {
  // taker loses Excuse in last trick, but gets T1 and T21
  const G = setup_5players();
  G.calledTakerId = getCalledTakerId(G.players, G.calledCard);
  playTricks(G, [
    'C1 C2 !C7 C6 C3',
    'C5 C4 !C8 CD C9', // taker wins
    'S3 S2 S1 !S9 S8', // taker wins
    'S7 S4 S5 !S10 T8',
    'C10 CR T3 T4 !CV', // taker wins
    'SC T16 S6 !SV T14', // called taker wins
    'D4 !D1 D2 T5 D8', // taker wins
    'T2 T18 T10 !SD T15', // called taker wins
    'D9 !D5 D3 T11 DR', // taker wins
    'T6 T9 D6 !SR H1', // calledtaker wins
    'T7 !D10 D7 T13 H5', // taker wins
    'T12 T20 DC !T17 H7', // called taker wins
    'CC !DV DD T19 H9', // taker wins
    'HC T1 H4 !T21 H10', // taker wins
    'HR H2 HV !E HD',
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '3',
    calledTakerId: '1',
    takerPointsRequired: 41,
    takerPoints: 71.5,
    petitAuBout: 0,
    multiplier: 2,
    poignee: 0,
    slam: 0,
    scoring: [-112, 168, -112, 168, -112],
  });
});

it('correctly evaluates a round where taker loses', () => {
  // taker loses Excuse and T1
  const G = setup_5players();
  G.calledTakerId = getCalledTakerId(G.players, G.calledCard);
  playTricks(G, [
    'D9 DV !D6 T11 DR', // taker wins
    'SC S4 S1 !S10 S8',
    '!C5 CR C8 CD C3', // called taker wins
    'D4 !D10 DC T21 D8', // taker wins
    'T7 T20 T3 !T17 T8', // called taker wins
    'C10 !C2 C7 C6 C9',
    '!CC C4 T10 T13 CV', // taker wins
    'T12 T18 D3 !T19 T15', // taker wins
    'S7 S2 S5 !SV T14',
    'HC H2 H4 T5 !H7', // taker wins
    'S3 T16 S6 !SD H10', // called taker wins
    'T6 !T1 DD T4 H9',
    '!T2 T9 D7 S9 H1', // called taker wins
    'C1 !D1 D2 SR HD',
    'HR D5 !HV E H5',
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '3',
    calledTakerId: '1',
    takerPointsRequired: 51,
    takerPoints: 50,
    petitAuBout: 0,
    multiplier: 2,
    poignee: 0,
    slam: 0,
    scoring: [52, -78, 52, -78, 52],
  });
});

it('correctly evaluates a slam', () => {
  // taker loses Excuse and T1
  const G = setup_5players();
  G.calledTakerId = getCalledTakerId(G.players, G.calledCard);
  playTricks(G, [
    'CC CR !C8 C6 CV',
    'C5 !C2 C7 CD C9',
    'T6 T20 T3 !T19 T8',
    'D9 !D1 DC T5 D8',
    'T7 T16 T10 !T21 T15',
    'T2 T18 HV !T4 T14',
    'D4 !D10 D7 T13 DR',
    'T12 T1 DD !T17 H9',
    'S3 S4 S6 !S9 S8',
    'SC S2 S5 !SD C3',
    'S7 T9 S1 !SV H1',
    'HC !DV D3 E H10',
    'C1 !D5 D2 T11 H5',
    'C10 C4 D6 !SR H7',
    'HR H2 H4 !S10 HD',
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '3',
    calledTakerId: '1',
    takerPointsRequired: 36,
    takerPoints: 91,
    petitAuBout: 0,
    multiplier: 2,
    poignee: 0,
    slam: 200,
    scoring: [-360, 540, -360, 540, -360],
  });
});

it('correctly evaluates petit au bout and poignee', () => {
  // taker loses Excuse and T1
  const G = setup_5players();
  G.calledTakerId = getCalledTakerId(G.players, G.calledCard);
  G.poignee = 20;
  playTricks(G, [
    'S3 S4 !S1 E S8',
    'HC H2 H4 T17 !H7', // taker wins
    'SC S2 S5 !S9 T8',
    'T12 T18 T10 T21 !T14', // taker wins
    'C1 CR C8 !C6 CV', // called taker wins
    'CC !C2 C7 CD C3', // taker wins
    'T6 T16 T3 !T5 T15', // tcalled aker wins
    'C10 !C4 S6 T11 C9', // taker wins
    'T2 T20 D2 !T13 DR', // called taker wins
    'D4 !D1 DC T19 D8', // taker wins
    'T7 T9 HV !T4 H1', // called taker wins
    'D9 !D10 D7 SV H10', // called taker wins
    'HR !DV DD SR HD',
    'C5 D5 !D3 S10 H9', // called taker wins
    'S7 !T1 D6 SD H5', // called taker wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    takerId: '3',
    calledTakerId: '1',
    takerPointsRequired: 36,
    takerPoints: 66.5,
    petitAuBout: 10,
    multiplier: 2,
    poignee: 20,
    slam: 0,
    scoring: [-152, 228, -152, 228, -152],
  });
});
