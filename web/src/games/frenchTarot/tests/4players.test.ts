import { getRoundSummary } from '../util/summary';
import { playTricks, setup_4players } from './util';

it('correctly evaluates a round where taker wins', () => {
  const G = setup_4players();
  playTricks(G, [
    'CC !CV C4 C6', // taker wins
    '!Tr8 Tr4 Tr20 Tr21',
    'HC H9 Ex !H8', // taker wins
    '!H10 H2 HV HD',
    'H5 H4 Tr7 !H6',
    'Tr16 S3 !SC S8', // taker wins
    '!Tr10 Tr5 Tr13 Tr19',
    'Tr18 Tr3 Tr6 !Tr15', // taker wins
    '!H3 D7 Tr9 Tr14',
    'C3 C7 CR !C10',
    'D4 D6 !D10 D9',
    'DR D8 !DC DV', // taker wins
    '!Tr12 SD Tr17 Tr2',
    'Tr11 S2 !S7 S9', // taker wins
    '!HR DD S10 C8', // taker wins
    '!C5 C1 S4 C2', // taker wins
    '!D5 C9 D1 D3', // taker wins
    '!Tr1 CD SR S5', // taker wins
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
    'H5 !H2 Ex H8',
    'Tr11 S2 SC !S5', // taker wins
    '!CC C1 C4 C10', // taker wins
    '!Tr8 Tr5 Tr13 Tr14',
    'C5 CV CR !C2',
    'Tr10 Tr4 !Tr20 Tr21',
    'HR H4 HV !H6', // taker wins
    '!Tr16 Tr3 Tr17 Tr19',
    'C3 CD Tr7 !C6',
    'Tr18 C9 !Tr6 Tr15', // taker wins
    '!H10 H9 Tr9 HD',
    'Tr12 SD !S7 S9', // taker wins
    '!HC S3 S4 Tr2',
    'DR D6 D1 !D3', // taker wins
    '!H3 D7 SR C8', // taker wins
    '!Tr1 C7 S10 S8', // taker wins
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
