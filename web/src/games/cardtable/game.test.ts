import { Client } from 'boardgame.io/client';
import { Local } from 'boardgame.io/multiplayer';
import { CardTableGame } from './game';
import { cardEnum } from './deals';

// describe('deck moves', () => {
//   test('cutDeck(1) should rotate deck by one card', () => {
//     let client = Client({ game: { ...CardTableGame, seed: 327 }, playerID: '0', multiplayer: Local() });
//     client.start();
//     client.events.setPhase(null);
//     client.moves.cutDeck(1);
//     const { G } = client.store.getState();

//     expect(G.deck[0]).toEqual({ id: cardEnum.SK, rank: 13, faced: false });
//     expect(G.deck[1]).toEqual({ id: cardEnum.SJ, rank: 11, faced: false });
//     expect(G.deck[2]).toEqual({ id: cardEnum.H9, rank: 48, faced: false });
//     expect(G.deck[3]).toEqual({ id: cardEnum.H2, rank: 41, faced: false });
//   });

//   test('cutDeck(-3) should rotate deck by one card', () => {
//     let client = Client({ game: { ...CardTableGame, seed: 327 }, playerID: '0', multiplayer: Local() });
//     client.start();
//     client.events.setPhase(null);
//     client.moves.cutDeck(-3);
//     const { G } = client.store.getState();
//     expect(G.deck[0]).toEqual({ id: cardEnum.SQ, rank: 12, faced: false });
//     expect(G.deck[1]).toEqual({ id: cardEnum.D9, rank: 35, faced: false });
//     expect(G.deck[2]).toEqual({ id: cardEnum.DA, rank: 27, faced: false });
//     expect(G.deck[3]).toEqual({ id: cardEnum.D6, rank: 32, faced: false });
//   });

//   test('cutDeck(2) should rotate deck by two cards', () => {
//     let client = Client({ game: { ...CardTableGame, seed: 327 }, playerID: '0', multiplayer: Local() });
//     client.start();
//     client.events.setPhase(null);
//     client.moves.cutDeck(-3);
//     const { G } = client.store.getState();
//     expect(G.deck[0]).toEqual({ id: cardEnum.SQ, rank: 12, faced: false });
//     expect(G.deck[1]).toEqual({ id: cardEnum.D9, rank: 35, faced: false });
//     expect(G.deck[2]).toEqual({ id: cardEnum.DA, rank: 27, faced: false });
//     expect(G.deck[3]).toEqual({ id: cardEnum.D6, rank: 32, faced: false });
//   });

//   test('cutDeck(-11) should rotate deck by one card', () => {
//     let client = Client({ game: { ...CardTableGame, seed: 327 }, playerID: '0', multiplayer: Local() });
//     client.start();
//     client.events.setPhase(null);
//     client.moves.cutDeck(-11);
//     const { G } = client.store.getState();
//     expect(G.deck[0]).toEqual({ id: cardEnum.C5, rank: 18, faced: false });
//     expect(G.deck[1]).toEqual({ id: cardEnum.C2, rank: 15, faced: false });
//     expect(G.deck[2]).toEqual({ id: cardEnum.DJ, rank: 37, faced: false });
//     expect(G.deck[3]).toEqual({ id: cardEnum.C10, rank: 23, faced: false });
//   });

//   test('cutDeck(5) should rotate deck by one card', () => {
//     let client = Client({ game: { ...CardTableGame, seed: 327 }, playerID: '0', multiplayer: Local() });
//     client.start();
//     client.events.setPhase(null);
//     client.moves.cutDeck(5);
//     const { G } = client.store.getState();
//     expect(G.deck[0]).toEqual({ id: cardEnum.C7, rank: 20, faced: false });
//     expect(G.deck[1]).toEqual({ id: cardEnum.C6, rank: 19, faced: false });
//     expect(G.deck[2]).toEqual({ id: cardEnum.D10, rank: 36, faced: false });
//     expect(G.deck[3]).toEqual({ id: cardEnum.D5, rank: 31, faced: false });
//   });
// });

// describe('moveCard(ICardMove) consistent state changes to G', () => {
//   test('move from deck[0] to deck[1]', () => {
//     let client = Client({ game: { ...CardTableGame, seed: 327 }, playerID: '0', multiplayer: Local() });
//     client.start();
//     client.events.setPhase(null);
//     client.moves.moveCards({
//       from: { container: 'deck', ordinal: 0 },
//       to: { container: 'deck', ordinal: 1 },
//     });
//     const { G } = client.store.getState();
//     expect(G.deck[0].id).toEqual(cardEnum.SK);
//     expect(G.deck[1].id).toEqual(cardEnum.D6);
//   });

//   test('move from deck[0-2] to hands.east.private[0]', () => {
//     let client = Client({ game: { ...CardTableGame, seed: 327 }, playerID: '0', multiplayer: Local() });
//     client.start();
//     client.events.setPhase(null);
//     client.moves.moveCards({
//       from: { container: 'deck', ordinal: 0, cardcount: 3 },
//       to: { container: 'hands.east.private', ordinal: 0 },
//     });
//     const { G } = client.store.getState();
//     expect(G.deck.length).toEqual(49);

//     expect(G.hands.east.private).toEqual([
//       {
//         id: cardEnum.D6,
//         rank: 32,
//         faced: false,
//       },
//       {
//         id: cardEnum.SK,
//         rank: 13,
//         faced: false,
//       },
//       {
//         id: cardEnum.SJ,
//         rank: 11,
//         faced: false,
//       },
//     ]);
//   });
// });

describe('deal() consistent state changes to G', () => {
  const customGameSetup = {
    ...CardTableGame,
    seed: 327,
  };

  test('deal() should create a hand --seed 327 passed into client creation scenario', () => {
    let client = Client({ game: customGameSetup, playerID: '0', multiplayer: Local() });
    client.start();
    client.events.setPhase('gamePlay');
    client.moves.deal();
    const { G } = client.store.getState();
    expect(G.deck.length).toEqual(40);
    expect(G.hands.north.held.length).toEqual(6);
    expect(G.hands.south.held.length).toEqual(6);
    expect(G.hands.south.held[0].id).toEqual(cardEnum.C9);
    expect(G.hands.north.held[0].id).toEqual(cardEnum.H2);
  });
});

describe('play() state changes to played storage', () => {
  const customGameSetup = {
    ...CardTableGame,
    seed: 327,
    playerID: '0',
  };

  test('play(0) from the north context --seed 327 passed into client creation scenario', () => {
    let client = Client({ game: customGameSetup, playerID: '0', multiplayer: Local() });
    client.start();
    client.events.setPhase('gamePlay');
    client.moves.deal();
    client.events.setStage('thePlay');
    client.moves.play(0); //moves client's current 0th card to play tail
    const { G } = client.store.getState();
    expect(G.deck.length).toEqual(40);
    expect(G.hands.north.played.length).toEqual(1);
    expect(G.hands.south.held.length).toEqual(6);
    expect(G.hands.north.played[0].id).toEqual(cardEnum.H2);
    expect(G.hands.north.held[0].id).toEqual(cardEnum.CQ);
  });
});

describe('putToCrib(idx) state changes to crib storage', () => {
  const customGameSetup = {
    ...CardTableGame,
    seed: 327,
  };

  test('putToCrib(0) from the north context --seed 327 passed into client creation scenario', () => {
    let client = Client({ game: customGameSetup, playerID: '0', multiplayer: Local() });
    client.start();
    client.events.setPhase('gamePlay');
    client.moves.deal();
    client.moves.putToCrib(0); //moves client's current 0th card to crib tail
    const { G } = client.store.getState();
    expect(G.deck.length).toEqual(40);
    expect(G.hands.east.private.length).toEqual(1);
    expect(G.hands.south.held.length).toEqual(6);
    expect(G.hands.east.private[0].id).toEqual(cardEnum.H2);
    expect(G.hands.north.held[0].id).toEqual(cardEnum.CQ);
  });
});

describe('cutForTurn(idx) changes game state', () => {
  const customGameSetup = {
    ...CardTableGame,
    seed: 327,
  };

  test('cutShowTurn by North Player', () => {
    let client = Client({ game: customGameSetup, playerID: '0', multiplayer: Local() });
    client.start();
    client.events.setPhase('gamePlay');
    client.moves.deal();
    client.events.setStage('putToCrib');
    client.moves.cutShowTurn(10); //moves client's current 10th card to crib tail
    const { G } = client.store.getState();
    expect(G.deck.length).toEqual(1);
    expect(G.deck[0].id).toEqual(cardEnum.S8);
  });
});

describe('flipCrib() changes game state', () => {
  const customGameSetup = {
    ...CardTableGame,
    seed: 327,
  };

  test('default value of cribFlipped s/b false after deal', () => {
    let client = Client({ game: customGameSetup, playerID: '0', multiplayer: Local() });
    client.start();
    client.events.setPhase('gamePlay');
    client.moves.deal();
    const { G } = client.store.getState();
    expect(G.hands.east.cribFlipped).toEqual(false);
  });

  test('after initial flipCrib call, cribFlipped s/b true', () => {
    let client = Client({ game: customGameSetup, playerID: '0', multiplayer: Local() });
    client.start();
    client.events.setPhase('gamePlay');
    client.moves.deal();
    client.moves.flipCrib(); //should set hands.east.cribFlipped which undef by default
    const { G } = client.store.getState();
    expect(G.hands.east.cribFlipped).toEqual(true);
  });
});

describe('pegScore game state changes', () => {
  const customGameSetup = {
    ...CardTableGame,
    seed: 327,
  };

  test('testing pegging state changes', () => {
    let client = Client({ game: customGameSetup, playerID: '0', multiplayer: Local() });
    client.start();
    let playerPath: string = client.playerID === '0' ? 'north' : 'south';
    client.moves.pegPoints(4);
    const { G } = client.store.getState();
    const { score } = G;
    const playerScoreLane = score[playerPath];
    expect(playerScoreLane.front).toEqual(4);
    expect(playerScoreLane.back).toEqual(0);
    expect(playerScoreLane.game).toEqual(0);
  });

  test('pegging ensues, after player passes turn', () => {
    let client = Client({ game: customGameSetup, playerID: '0' });
    let playerPath: string = client.playerID === '0' ? 'north' : 'south';
    client.moves.pegPoints(5);
    client.moves.pegPoints(3);
    const { G } = client.store.getState();
    const { score } = G;
    const playerScoreLane = score[playerPath];
    expect(playerScoreLane.front).toEqual(8);
    expect(playerScoreLane.back).toEqual(5);
    expect(playerScoreLane.game).toEqual(0);
    expect(client.playerID).toEqual('0');
  });

  test('reset cribbage board game score', () => {
    let client = Client({ game: customGameSetup, playerID: '0' });
    client.moves.pegPoints(5);
    client.moves.pegPoints(3);
    client.moves.resetGamePegs();
    let { G } = client.store.getState();
    let { score } = G;
    expect(score.north.front).toEqual(0);
    expect(score.north.back).toEqual(-1);
    expect(score.north.game).toEqual(0);
    expect(client.playerID).toEqual('0');
  });
});

describe('state model changes', () => {
  const customGameSetup = {
    ...CardTableGame,
    seed: 327,
  };

  test('cut for deal state changes', () => {
    let matchID = 'boomer';
    let clientN = Client({ game: customGameSetup, playerID: '0', multiplayer: Local(), matchID });
    clientN.start();
    let clientS = Client({ game: customGameSetup, playerID: '1', multiplayer: Local(), matchID });
    clientS.start();
    clientN.moves.cutForDeal(1);
    let { G: gN, ctx: cN } = clientN.store.getState();
    let { G: gS, ctx: cS } = clientS.store.getState();
    let { activePlayers: actN } = cN;
    let { activePlayers: actS } = cS;
    let { hands: hN } = gN;
    let { hands: hS } = gS;
    expect(actN).toEqual(actS);
    expect(hN.north.played[0].id).toEqual(cardEnum.SK);
    expect(hS.north.played[0].id).toEqual(cardEnum.SK);
  });

  test('cut for deal state changes north cuts, south cuts same', () => {
    let matchID = 'oofda';
    let clientN = Client({ game: customGameSetup, playerID: '0', multiplayer: Local(), matchID });
    clientN.start();
    let clientS = Client({ game: customGameSetup, playerID: '1', multiplayer: Local(), matchID });
    clientS.start();
    clientN.moves.cutForDeal(5);
    clientS.moves.cutForDeal(5);

    let { G: Gn } = clientN.store.getState();
    let { G: Gs } = clientS.store.getState();

    expect(Gn.hands.north.played[0]).toEqual(Gs.hands.north.played[0]);
    expect(Gn.hands.south.played[0]).toEqual(Gs.hands.south.played[0]);
    expect(Gn.bestCut).toEqual(7);
    expect(Gs.bestCut).toEqual(7);
    expect(Gs.cutTie).toEqual(true);
    expect(Gn.cutTie).toEqual(true);

    clientN.stop();
    clientS.stop();
  });

  test('cut for deal state changes north cuts, south cuts different', () => {
    let matchID = 'oopsie';
    let clientN = Client({ game: customGameSetup, playerID: '0', multiplayer: Local(), matchID });
    let clientS = Client({ game: customGameSetup, playerID: '1', multiplayer: Local(), matchID });
    clientN.start();
    clientS.start();
    clientN.moves.cutForDeal(5);
    clientS.moves.cutForDeal(4);

    let { G: Gn } = clientN.store.getState();
    let { G: Gs } = clientS.store.getState();

    expect(Gn.hands.north.played[0]).toEqual(Gs.hands.north.played[0]);
    expect(Gn.hands.south.played[0]).toEqual(Gs.hands.south.played[0]);
    expect(Gn.bestCut).toEqual(2);
    expect(Gs.bestCut).toEqual(2);
    expect(Gs.cutTie).toBeFalsy();
    expect(Gn.cutTie).toBeFalsy();
    expect(Gn.chosenDealer).toEqual(1);

    clientN.stop();
    clientS.stop();
  });
});
