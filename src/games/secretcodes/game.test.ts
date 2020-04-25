import { Client } from 'boardgame.io/client';
import { SecretcodesGame } from './game';
import { IGameCtx } from 'boardgame.io/core';
import { TeamColor } from './definitions';

describe('secret codes rules', () => {
  it('should work for a simple game', () => {
    const client = Client({
      game: { ...SecretcodesGame, seed: 1 },
    }) as any;

    client.moves.startGame();
    client.moves.clueGiven(); // blue team starts
    client.moves.pass(); // pass turn to red team
    client.moves.clueGiven();
    client.moves.chooseCard(0); // "sock", red card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(1); // "fish", red card, correct.
    client.moves.chooseCard(2); // "web", red card, correct.
    client.moves.chooseCard(3); // "lock", civilian card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(4); // "plate", blue card, correct.
    client.moves.chooseCard(5); // "capital", blue card, correct.
    client.moves.pass();
    client.moves.clueGiven();
    client.moves.chooseCard(6); // "spring", civilian card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(7); // "berry", blue card, correct.
    client.moves.pass();
    client.moves.clueGiven();
    client.moves.chooseCard(8); // "tag", civilian card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(9); // "missile", blue card, correct.
    client.moves.chooseCard(10); // "beijing", blue card, correct.
    client.moves.chooseCard(13); // "foot", blue card, correct.
    client.moves.chooseCard(18); // "crane", blue card, correct.
    client.moves.chooseCard(23); // "australia", blue card, correct. Blue wins.

    const ctx: IGameCtx = client.store.getState().ctx;
    expect(ctx.gameover.winner.color).toEqual(TeamColor.Blue);
  });

  it('should lose if select assassin', () => {
    const client = Client({
      game: { ...SecretcodesGame, seed: 1 },
    }) as any;

    client.moves.startGame();
    client.moves.clueGiven(); // blue team starts
    client.moves.pass(); // pass turn to red team
    client.moves.clueGiven();
    client.moves.chooseCard(0); // "sock", red card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(1); // "fish", red card, correct.
    client.moves.chooseCard(2); // "web", red card, correct.
    client.moves.chooseCard(3); // "lock", civilian card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(4); // "plate", blue card, correct.
    client.moves.chooseCard(5); // "capital", blue card, correct.
    client.moves.pass();
    client.moves.clueGiven();
    client.moves.chooseCard(6); // "spring", civilian card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(7); // "berry", blue card, correct.
    client.moves.pass();
    client.moves.clueGiven();
    client.moves.chooseCard(8); // "tag", civilian card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(9); // "missile", blue card, correct.
    client.moves.chooseCard(10); // "beijing", blue card, correct.
    client.moves.chooseCard(11); // "palm", assassin card, loses the game.

    const ctx: IGameCtx = client.store.getState().ctx;
    expect(ctx.gameover.winner.color).toEqual(TeamColor.Red);
  });
});
