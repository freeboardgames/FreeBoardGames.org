import { Client } from 'boardgame.io/client';
import { CardTableGame } from './game';

describe('deck moves', () => {
  test('cutDeck(1) should rotate deck by one card', () => {
    let client = Client({ game: CardTableGame });
    client.moves.cutDeck(1);
    const { G } = client.store.getState();
    expect(G.deck[0]).toEqual({ id: 'AC', rank: 26, faced: false, img: './media/png/AC.png' });
    expect(G.deck[1]).toEqual({ id: 'AD', rank: 39, faced: false, img: './media/png/AD.png' });
    expect(G.deck[2]).toEqual({ id: 'AH', rank: 52, faced: false, img: './media/png/AH.png' });
    expect(G.deck[3]).toEqual({ id: 'AS', rank: 13, faced: false, img: './media/png/AS.png' });
  });

  test('cutDeck(-3) should rotate deck by one card', () => {
    let client = Client({ game: CardTableGame });
    client.moves.cutDeck(-3);
    const { G } = client.store.getState();
    expect(G.deck[0]).toEqual({ id: 'AC', rank: 26, faced: false, img: './media/png/AC.png' });
    expect(G.deck[1]).toEqual({ id: 'AD', rank: 39, faced: false, img: './media/png/AD.png' });
    expect(G.deck[2]).toEqual({ id: 'AH', rank: 52, faced: false, img: './media/png/AH.png' });
    expect(G.deck[3]).toEqual({ id: 'AS', rank: 13, faced: false, img: './media/png/AS.png' });
  });

  test('cutDeck(2) should rotate deck by two cards', () => {
    let client = Client({ game: CardTableGame });
    client.moves.cutDeck(-3);
    const { G } = client.store.getState();
    expect(G.deck[1]).toEqual({ id: 'AD', rank: 39, faced: false, img: './media/png/AD.png' });
    expect(G.deck[2]).toEqual({ id: 'AH', rank: 52, faced: false, img: './media/png/AH.png' });
    expect(G.deck[3]).toEqual({ id: 'AS', rank: 13, faced: false, img: './media/png/AS.png' });
    expect(G.deck[0]).toEqual({ id: 'AC', rank: 26, faced: false, img: './media/png/AC.png' });
  });

  test('cutDeck(-11) should rotate deck by one card', () => {
    let client = Client({ game: CardTableGame });
    client.moves.cutDeck(-11);
    const { G } = client.store.getState();
    expect(G.deck[0]).toEqual({ id: 'AC', rank: 26, faced: false, img: './media/png/AC.png' });
    expect(G.deck[1]).toEqual({ id: 'AD', rank: 39, faced: false, img: './media/png/AD.png' });
    expect(G.deck[2]).toEqual({ id: 'AH', rank: 52, faced: false, img: './media/png/AH.png' });
    expect(G.deck[3]).toEqual({ id: 'AS', rank: 13, faced: false, img: './media/png/AS.png' });
  });

  test('cutDeck(5) should rotate deck by one card', () => {
    let client = Client({ game: CardTableGame });
    client.moves.cutDeck(5);
    const { G } = client.store.getState();
    expect(G.deck[0]).toEqual({ id: 'AC', rank: 26, faced: false, img: './media/png/AC.png' });
    expect(G.deck[1]).toEqual({ id: 'AD', rank: 39, faced: false, img: './media/png/AD.png' });
    expect(G.deck[2]).toEqual({ id: 'AH', rank: 52, faced: false, img: './media/png/AH.png' });
    expect(G.deck[3]).toEqual({ id: 'AS', rank: 13, faced: false, img: './media/png/AS.png' });
  });
});

describe('moveCard(ICardMove) consistent state changes to G', () => {
  test('move from deck[0] to deck[1]', () => {
    const compDeck = [
      {
        id: 'AC',
        rank: 26,
        faced: false,
        img: './media/png/AC.png',
      },
      {
        id: 'AS',
        rank: 13,
        faced: false,
        img: './media/png/AS.png',
      },
      {
        id: 'AD',
        rank: 39,
        faced: false,
        img: './media/png/AD.png',
      },
      {
        id: 'AH',
        rank: 52,
        faced: false,
        img: './media/png/AH.png',
      },
    ];

    let client: Client = Client({ game: CardTableGame });

    client.moves.moveCards({
      from: { container: 'deck', ordinal: 0 },
      to: { container: 'deck', ordinal: 1 },
    });
    const { G } = client.store.getState();
    expect(G.deck).toEqual(compDeck);
  });

  test('move from deck[0-2] to hands.north.held[0]', () => {
    let client: Client = Client({ game: CardTableGame });

    client.moves.moveCards({
      from: { container: 'deck', ordinal: 0, cardcount: 3 },
      to: { container: 'hands.east.private', ordinal: 0 },
    });
    const { G } = client.store.getState();
    expect(G.deck).toEqual([
      {
        id: 'AH',
        rank: 52,
        faced: false,
        img: './media/png/AH.png',
      },
    ]);

    expect(G.hands.east.private).toEqual([
      {
        id: 'AS',
        rank: 13,
        faced: false,
        img: './media/png/AS.png',
      },
      {
        id: 'AC',
        rank: 26,
        faced: false,
        img: './media/png/AC.png',
      },
      {
        id: 'AD',
        rank: 39,
        faced: false,
        img: './media/png/AD.png',
      },
    ]);
  });
});

describe('deal() consistent state changes to G', () => {
  const customGameSetup = {
    ...CardTableGame,
    seed: 327,
  };

  let client: Client = Client({ game: customGameSetup });

  test('deal() should create a hand --seed 327 passed into client creation scenario', () => {
    client.moves.deal();
    const { G } = client.store.getState();
    expect(G.deck.length).toEqual(40);
    expect(G.hands.north.held.length).toEqual(6);
    expect(G.hands.south.held.length).toEqual(6);
    expect(G.hands.south.held[0].id).toEqual('AD');
    expect(G.hands.north.held[0].id).toEqual('9D');
  });
});

describe('play() state changes to played storage', () => {
  const customGameSetup = {
    ...CardTableGame,
    seed: 327,
    playerID: '0',
  };

  let client: Client = Client({ game: customGameSetup });

  test('play(0) from the north context --seed 327 passed into client creation scenario', () => {
    client.moves.deal();
    client.moves.play(0); //moves client's current 0th card to play tail
    const { G } = client.store.getState();
    expect(G.deck.length).toEqual(40);
    expect(G.hands.north.played.length).toEqual(1);
    expect(G.hands.south.held.length).toEqual(6);
    expect(G.hands.north.played[0].id).toEqual('9D');
    expect(G.hands.north.held[0].id).toEqual('7H');
  });
});

describe('putToCrib(idx) state changes to crib storage', () => {
  const customGameSetup = {
    ...CardTableGame,
    seed: 327,
  };

  let client: Client = Client({ game: customGameSetup });

  test('putToCrib(0) from the north context --seed 327 passed into client creation scenario', () => {
    client.moves.deal();
    client.moves.putToCrib(0); //moves client's current 0th card to crib tail
    const { G } = client.store.getState();
    expect(G.deck.length).toEqual(40);
    expect(G.hands.east.private.length).toEqual(1);
    expect(G.hands.south.held.length).toEqual(6);
    expect(G.hands.east.private[0].id).toEqual('9D');
    expect(G.hands.north.held[0].id).toEqual('7H');
  });
});

describe('cutForTurn(idx) changes game state', () => {
  const customGameSetup = {
    ...CardTableGame,
    seed: 327,
  };

  let client: Client = Client({ game: customGameSetup });

  test('putToCrib(0) from the north context --seed 327 passed into client creation scenario', () => {
    client.moves.deal();
    client.moves.cutShowTurn(10); //moves client's current 0th card to crib tail
    const { G } = client.store.getState();
    expect(G.deck.length).toEqual(1);
    expect(G.deck[0].id).toEqual('6D');
  });
});

describe('flipCrib() changes game state', () => {
  const customGameSetup = {
    ...CardTableGame,
    seed: 327,
  };

  let client: Client = Client({ game: customGameSetup });

  test('default value of cribFlipped s/b undefined', () => {
    client.moves.deal();
    const { G } = client.store.getState();
    expect(G.hands.east.cribFlipped).toEqual(undefined);
  });

  test('after initial flipCrib call, cribFlipped s/b true', () => {
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
    let client: Client = Client({ game: customGameSetup, playerID: '0' });
    client.events.set;
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
    let client: Client = Client({ game: customGameSetup, playerID: '0' });
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
});
