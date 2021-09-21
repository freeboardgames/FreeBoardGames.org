import { Client } from 'boardgame.io/client';
import { Local } from 'boardgame.io/multiplayer';
import { PicnicGoGame, selectCard, useFork, rotateAndScoreCards, scoreRoundEnd, scoreGameEnd } from './game';

const basePlayer = {
  playedCards: [],
  score: 0,
  dessertsCount: 0,
  chipsCount: 0,
  unusedMayo: 0,
  unusedForks: 0,
  forkUsed: false,
  turnsLeft: 1,
};

it('should set the phase to score and round should remain 1', () => {
  const client = Client({
    game: PicnicGoGame,
  });

  // Both players keep picking the first card until both hands are empty
  for (let i = 0; i < 10; i++) {
    client.moves.selectCard(0);
    client.updatePlayerID('1');
    client.moves.selectCard(0);
    client.updatePlayerID('0');
  }

  const { G, ctx } = client.store.getState();

  expect(G.round).toEqual(1);
  expect(ctx.phase).toEqual('score');
});

it('should have 2 selected cards via fork', () => {
  let g = {
    players: [
      {
        ...basePlayer,
        unusedForks: 1,
      },
    ],
    hands: [
      {
        currentOwner: '0',
        hand: [0, 1],
        selected: null,
      },
    ],
  } as any;

  g = useFork(g, { playerID: '0' } as any);
  g = selectCard(g, { playerID: '0' } as any, 0);
  g = selectCard(g, { playerID: '0' } as any, 1);

  expect(g.hands[0].selected).toHaveLength(2);
});

it('test normal beef sandwich scoring', () => {
  let g = {
    players: [
      {
        ...basePlayer,
      },
    ],
    hands: [
      {
        currentOwner: '0',
        hand: [15],
        selected: null,
      },
    ],
  } as any;

  // Select the beef sandwich card...
  g = selectCard(g, { playerID: '0' } as any, 0);
  // ...and score it
  g = rotateAndScoreCards(g, { numPlayers: 1 } as any);

  expect(g.players[0].score).toEqual(3);
});

it('test mayonnaise scoring', () => {
  let g = {
    players: [
      {
        ...basePlayer,
      },
    ],
    hands: [
      {
        currentOwner: '0',
        hand: [15, 98],
        selected: null,
      },
    ],
  } as any;

  // Select the mayo, score it, then select the beef sandwich, and score it
  g = selectCard(g, { playerID: '0' } as any, 1);
  g = rotateAndScoreCards(g, { numPlayers: 1 } as any);
  g = selectCard(g, { playerID: '0' } as any, 0);
  g = rotateAndScoreCards(g, { numPlayers: 1 } as any);

  expect(g.players[0].unusedMayo).toEqual(0);
  expect(g.players[0].score).toEqual(9);
});

it('test chips scoring', () => {
  let g = {
    players: [
      {
        ...basePlayer,
        chipsCount: 3,
      },
      {
        ...basePlayer,
        chipsCount: 1,
      },
      {
        ...basePlayer,
        chipsCount: 5,
      },
    ],
  } as any;

  g = scoreRoundEnd(g, { numPlayers: 3 } as any);

  expect(g.players[0].score).toEqual(3);
  expect(g.players[1].score).toEqual(0);
  expect(g.players[2].score).toEqual(6);
});

it('test cupcakes scoring', () => {
  let g = {
    players: [
      {
        ...basePlayer,
        dessertsCount: 3,
        score: 10,
      },
      {
        ...basePlayer,
        dessertsCount: 1,
        score: 10,
      },
      {
        ...basePlayer,
        dessertsCount: 2,
        score: 10,
      },
      {
        ...basePlayer,
        dessertsCount: 3,
        score: 10,
      },
    ],
  } as any;

  g = scoreGameEnd(g, { numPlayers: 4 } as any);

  expect(g.players[0].score).toEqual(13);
  expect(g.players[1].score).toEqual(4);
  expect(g.players[2].score).toEqual(10);
  expect(g.players[3].score).toEqual(13);
});

it('full game test - should declare player 1 as winner', () => {
  const PicnicGoCustomScenario = {
    ...PicnicGoGame,
    seed: 'test',
  };

  const spec = {
    game: PicnicGoCustomScenario,
    multiplayer: Local(),
  };

  const p0 = Client({ ...spec, playerID: '0' } as any) as any;
  const p1 = Client({ ...spec, playerID: '1' } as any) as any;

  p0.start();
  p1.start();

  p0.moves.selectCard(2);
  p1.moves.selectCard(2);
  p0.moves.useFork();
  p0.moves.selectCard(0);
  p0.moves.selectCard(4);
  p1.moves.selectCard(1);
  p0.moves.selectCard(3);
  p1.moves.selectCard(3);
  p0.moves.selectCard(4);
  p1.moves.selectCard(0);
  p0.moves.selectCard(0);
  p1.moves.selectCard(0);
  p0.moves.selectCard(0);
  p1.moves.selectCard(3);
  p0.moves.selectCard(1);
  p1.moves.selectCard(1);
  p0.moves.selectCard(0);
  p1.moves.selectCard(1);
  p0.moves.selectCard(1);
  p1.moves.selectCard(0);
  p0.moves.selectCard(0);
  p1.moves.selectCard(0);

  p0.moves.confirmScore();
  p1.moves.confirmScore();

  p0.moves.selectCard(4);
  p1.moves.selectCard(6);
  p0.moves.selectCard(8);
  p1.moves.selectCard(7);
  p0.moves.selectCard(0);
  p1.moves.selectCard(5);
  p0.moves.selectCard(3);
  p1.moves.selectCard(1);
  p0.moves.selectCard(0);
  p1.moves.selectCard(4);
  p0.moves.selectCard(1);
  p1.moves.selectCard(0);
  p0.moves.selectCard(0);
  p1.moves.selectCard(0);
  p0.moves.selectCard(0);
  p1.moves.selectCard(0);
  p0.moves.selectCard(0);
  p1.moves.selectCard(1);
  p0.moves.selectCard(0);
  p1.moves.selectCard(0);

  p0.moves.confirmScore();
  p1.moves.confirmScore();

  p0.moves.selectCard(0);
  p1.moves.selectCard(2);
  p0.moves.selectCard(5);
  p1.moves.selectCard(6);
  p0.moves.selectCard(2);
  p1.moves.selectCard(3);
  p0.moves.selectCard(4);
  p1.moves.selectCard(3);
  p0.moves.selectCard(0);
  p1.moves.selectCard(3);
  p0.moves.selectCard(1);
  p1.moves.selectCard(2);
  p0.moves.selectCard(2);
  p1.moves.selectCard(0);
  p0.moves.selectCard(0);
  p1.moves.selectCard(2);
  p0.moves.selectCard(0);
  p1.moves.selectCard(0);
  p0.moves.selectCard(0);
  p1.moves.selectCard(0);

  p0.moves.confirmScore();
  p1.moves.confirmScore();

  const { G, ctx } = p0.getState();
  expect(G.gameOver).toBeTruthy();
  expect(ctx.gameover).toEqual({
    scoreboard: [
      {
        playerID: '0',
        score: 57,
        extraData: [2],
      },
      {
        playerID: '1',
        score: 51,
        extraData: [5],
      },
    ],
  });
});
