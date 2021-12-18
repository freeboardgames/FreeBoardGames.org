import { str2card } from 'gamesShared/helpers/cards';

import { getCalledTakerId } from '../game';
import { getRoundSummary } from '../util/summary';
import { playTricks, setup_5players } from './util';

it('finds the called taker in a 5-player game', () => {
  const G = setup_5players();
  expect(getCalledTakerId(G.players, str2card('CR'))).toEqual('1');
  expect(getCalledTakerId(G.players, str2card('SR'))).toEqual('3');
});

it('correctly evaluates a round where taker loses Excuse', () => {
  // taker loses Excuse in last trick, but gets Tr1 and Tr21
  const G = setup_5players();
  G.calledTakerId = getCalledTakerId(G.players, G.calledCard);
  playTricks(G, [
    'C1 C2 !C7 C6 C3',
    'C5 C4 !C8 CD C9', // taker wins
    'S3 S2 S1 !S9 S8', // taker wins
    'S7 S4 S5 !S10 Tr8',
    'C10 CR Tr3 Tr4 !CV', // taker wins
    'SC Tr16 S6 !SV Tr14', // called taker wins
    'D4 !D1 D2 Tr5 D8', // taker wins
    'Tr2 Tr18 Tr10 !SD Tr15', // called taker wins
    'D9 !D5 D3 Tr11 DR', // taker wins
    'Tr6 Tr9 D6 !SR H1', // calledtaker wins
    'Tr7 !D10 D7 Tr13 H5', // taker wins
    'Tr12 Tr20 DC !Tr17 H7', // called taker wins
    'CC !DV DD Tr19 H9', // taker wins
    'HC Tr1 H4 !Tr21 H10', // taker wins
    'HR H2 HV !Ex HD',
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
  // taker loses Excuse and Tr1
  const G = setup_5players();
  G.calledTakerId = getCalledTakerId(G.players, G.calledCard);
  playTricks(G, [
    'D9 DV !D6 Tr11 DR', // taker wins
    'SC S4 S1 !S10 S8',
    '!C5 CR C8 CD C3', // called taker wins
    'D4 !D10 DC Tr21 D8', // taker wins
    'Tr7 Tr20 Tr3 !Tr17 Tr8', // called taker wins
    'C10 !C2 C7 C6 C9',
    '!CC C4 Tr10 Tr13 CV', // taker wins
    'Tr12 Tr18 D3 !Tr19 Tr15', // taker wins
    'S7 S2 S5 !SV Tr14',
    'HC H2 H4 Tr5 !H7', // taker wins
    'S3 Tr16 S6 !SD H10', // called taker wins
    'Tr6 !Tr1 DD Tr4 H9',
    '!Tr2 Tr9 D7 S9 H1', // called taker wins
    'C1 !D1 D2 SR HD',
    'HR D5 !HV Ex H5',
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
  // taker loses Excuse and Tr1
  const G = setup_5players();
  G.calledTakerId = getCalledTakerId(G.players, G.calledCard);
  playTricks(G, [
    'CC CR !C8 C6 CV',
    'C5 !C2 C7 CD C9',
    'Tr6 Tr20 Tr3 !Tr19 Tr8',
    'D9 !D1 DC Tr5 D8',
    'Tr7 Tr16 Tr10 !Tr21 Tr15',
    'Tr2 Tr18 HV !Tr4 Tr14',
    'D4 !D10 D7 Tr13 DR',
    'Tr12 Tr1 DD !Tr17 H9',
    'S3 S4 S6 !S9 S8',
    'SC S2 S5 !SD C3',
    'S7 Tr9 S1 !SV H1',
    'HC !DV D3 Ex H10',
    'C1 !D5 D2 Tr11 H5',
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
  // taker loses Excuse and Tr1
  const G = setup_5players();
  G.calledTakerId = getCalledTakerId(G.players, G.calledCard);
  G.poignee = 20;
  playTricks(G, [
    'S3 S4 !S1 Ex S8',
    'HC H2 H4 Tr17 !H7', // taker wins
    'SC S2 S5 !S9 Tr8',
    'Tr12 Tr18 Tr10 Tr21 !Tr14', // taker wins
    'C1 CR C8 !C6 CV', // called taker wins
    'CC !C2 C7 CD C3', // taker wins
    'Tr6 Tr16 Tr3 !Tr5 Tr15', // tcalled aker wins
    'C10 !C4 S6 Tr11 C9', // taker wins
    'Tr2 Tr20 D2 !Tr13 DR', // called taker wins
    'D4 !D1 DC Tr19 D8', // taker wins
    'Tr7 Tr9 HV !Tr4 H1', // called taker wins
    'D9 !D10 D7 SV H10', // called taker wins
    'HR !DV DD SR HD',
    'C5 D5 !D3 S10 H9', // called taker wins
    'S7 !Tr1 D6 SD H5', // called taker wins
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
