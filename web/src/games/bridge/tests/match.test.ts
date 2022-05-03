import { getRoundSummary } from '../util/summary';
import { playTricks, setup_normal, setup_honors } from './util';

it('correctly evaluates a round where declarer wins (with honors bonus)', () => {
  const G = setup_honors('1', '3');
  playTricks(G, [
    'HJ H10 !H5 H7',
    '!D9 DJ D8 DQ', // declarer wins
    'C5 CA C4 !C2', // declarer wins
    'S2 !CK C9 C7', // declarer wins
    'H6 !H8 H9 H3',
    'D5 HK !H2 HQ', // declarer wins
    'S4 !C8 S3 C10', // declarer wins
    'S5 SJ S10 !SK', // declarer wins
    'SQ D10 H4 !S9', // declarer wins
    '!D7 CQ D2 S7',
    'DA !CJ D3 S8', // declarer wins
    'DK !C3 D4 S6', // declarer wins
    'D6 !C6 HA SA', // declarer wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    declarerId: '1',
    partnerId: '3',
    contract: G.contract,
    reTricks: 10,
    contractPoints: 80,
    overtrickBonus: NaN,
    slamBonus: NaN,
    doubleBonus: NaN,
    penaltyBonus: NaN,
    honorsBonus: 100,
    scoring: [-0, 180, -0, 180],
  });
});

it('correctly evaluates a round where declarer wins (vulnerable)', () => {
  const G = setup_honors('3', '1');
  G.contract.value = 6;
  G.players[1].isVulnerable = true;
  G.players[3].isVulnerable = true;
  playTricks(G, [
    '!D5 DJ D8 DQ', // declarer wins
    'C5 CQ C4 !C2', // declarer wins
    'D7 !D10 D2 S9', // declarer wins
    'D9 !CA C9 C10', // declarer wins
    'DA !C3 S10 C7', // declarer wins
    'S4 SJ S3 !SK', // declarer wins
    'H6 H8 H5 !HQ', // declarer wins
    'SQ CJ D3 !S7', // declarer wins
    'HJ !H10 HA H7',
    'S2 HK !H9 H3', // declarer wins
    'D6 !C8 H4 S8', // declarer wins
    'DK !C6 H2 SA', // declarer wins
    'S5 !CK D4 S6', // declarer wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    declarerId: '3',
    partnerId: '1',
    contract: G.contract,
    reTricks: 12,
    contractPoints: 120,
    overtrickBonus: NaN,
    slamBonus: 750,
    doubleBonus: NaN,
    penaltyBonus: NaN,
    honorsBonus: 100,
    scoring: [-0, 970, -0, 970],
  });
});

it('correctly evaluates a round where declarer wins (doubling bonus)', () => {
  const G = setup_honors('1', '3');
  G.doubling = 4;
  G.contract.value = 6;
  G.players[1].isVulnerable = true;
  G.players[3].isVulnerable = true;
  playTricks(G, [
    'C5 CQ !C4 C2', // declarer wins
    'HJ !CA C9 C10', // declarer wins
    'DK !CK D3 C7', // declarer wins
    'H6 !H10 H4 H7', // declarer wins
    'D9 !C3 H2 H3', // declarer wins
    'D6 !C8 HA DQ', // declarer wins
    'S5 !HK H5 HQ', // declarer wins
    'S4 !SJ S10 S9', // declarer wins
    'S2 !CJ H9 S6', // declarer wins
    'D5 !DJ D2 SK', // declarer wins
    'D7 !D10 D4 S8', // declarer wins
    'SQ !C6 S3 SA', // declarer wins
    'DA !H8 D8 S7', // declarer wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    declarerId: '1',
    partnerId: '3',
    contract: G.contract,
    reTricks: 13,
    contractPoints: 480,
    overtrickBonus: 400,
    slamBonus: 750,
    doubleBonus: 100,
    penaltyBonus: NaN,
    honorsBonus: 100,
    scoring: [-0, 1830, -0, 1830],
  });
});

it('correctly evaluates a round where declarer loses (with honors bonus)', () => {
  const G = setup_honors('1', '3');
  G.doubling = 2;
  playTricks(G, [
    'HJ H8 !H9 H7',
    '!C5 C8 C9 C2',
    'DA C6 !C4 C7', // declarer wins
    'SQ SJ S3 !S6',
    '!S2 CJ S10 S7', // declarer wins
    'DK !DJ D4 DQ',
    '!H6 H10 HA HQ',
    'D5 D10 !D8 C10', // declarer wins
    'S5 CA H2 !S8', // declarer wins
    'S4 !CK D2 SK', // declarer wins
    'D7 !C3 D3 H3', // declarer wins
    'D9 !HK H5 S9', // declarer wins
    'D6 !CQ H4 SA', // declarer wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    declarerId: '1',
    partnerId: '3',
    contract: G.contract,
    reTricks: 8,
    contractPoints: NaN,
    overtrickBonus: NaN,
    slamBonus: NaN,
    doubleBonus: NaN,
    penaltyBonus: -300,
    honorsBonus: 100,
    scoring: [300, 100, 300, 100],
  });
});

it('correctly evaluates a round where declarer loses', () => {
  const G = setup_normal();
  playTricks(G, [
    'H2 !HK H4 H7',
    'DJ !DK D10 D6',
    'D4 !D7 S4 D8',
    'S3 S6 C2 !SQ',
    'S8 SK H5 !S2', // declarer wins
    'H10 H3 !H9 C4', // declarer wins
    '!S7 S9 CK S5',
    'D2 !D3 H8 DA', // declarer wins
    'HA DQ !HJ SJ', // declarer wins
    '!C9 CQ C10 C7',
    'D9 !D5 C6 S10', // declarer wins
    '!CA C8 H6 CJ', // declarer wins
    'SA C3 !HQ C5', // declarer wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    declarerId: '0',
    partnerId: '2',
    contract: G.contract,
    reTricks: 7,
    contractPoints: NaN,
    overtrickBonus: NaN,
    slamBonus: NaN,
    doubleBonus: NaN,
    penaltyBonus: -50,
    honorsBonus: NaN,
    scoring: [0, 50, 0, 50],
  });
});

it('correctly evaluates a round where declarer wins', () => {
  const G = setup_normal();
  playTricks(G, [
    'C9 !CQ C10 C5',
    'SA !S9 S4 S10', // declarer wins
    '!DJ D3 D10 D8', // declarer wins
    '!S8 S6 C6 SQ',
    'CA C3 C2 !C7', // declarer wins
    '!H10 H3 H8 H7', // declarer wins
    '!H2 HK H6 S2',
    'D9 !D7 HJ D6', // declarer wins
    'HA DQ !H5 S5', // declarer wins
    '!S3 SK CK SJ',
    'S7 !C8 HQ C4', // declarer wins
    'D4 D5 !H4 DA', // declarer wins
    'D2 DK !H9 CJ', // declarer wins
  ]);
  expect(getRoundSummary(G)).toEqual({
    declarerId: '0',
    partnerId: '2',
    contract: G.contract,
    reTricks: 9,
    contractPoints: 60,
    overtrickBonus: 30,
    slamBonus: NaN,
    doubleBonus: NaN,
    penaltyBonus: NaN,
    honorsBonus: NaN,
    scoring: [90, -0, 90, -0],
  });
});
