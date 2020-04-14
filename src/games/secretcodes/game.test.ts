import { Client } from 'boardgame.io/client';
import { SecretcodesGame } from './game';
import { IGameCtx } from 'boardgame.io/core';

describe('secret codes rules', () => {
  it('should work for a simple game', () => {
    const client = Client({
      game: { ...SecretcodesGame, seed: 1 },
    }) as any;

    client.events.endPhase();
    client.moves.clueGiven();
    client.moves.chooseCard(0); // "sock", red card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(1); // "fish", red card, correct.
    client.moves.chooseCard(2); // "web", red card, correct.
    client.moves.chooseCard(3); // "lock", blue card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(4); // "plate", blue card, correct.
    client.moves.chooseCard(5); // "capital", civilian card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(6); // "spring", blue card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(7); // "berry", red card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(8); // "tag", blue card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(9); // "missile", blue card, correct.
    client.moves.chooseCard(10); // "beijing", blue card, correct.
    client.moves.chooseCard(17); // "gold", blue card, correct.
    client.moves.chooseCard(19); // "cloak", blue card, correct. Blue wins.

    const ctx: IGameCtx = client.store.getState().ctx;
    expect(ctx.gameover.winner.teamID).toEqual(0);
  });

  it('should lose if select assassin', () => {
    const client = Client({
      game: { ...SecretcodesGame, seed: 1 },
    }) as any;

    client.events.endPhase();
    client.moves.clueGiven();
    client.moves.chooseCard(0); // "sock", red card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(1); // "fish", red card, correct.
    client.moves.chooseCard(2); // "web", red card, correct.
    client.moves.chooseCard(3); // "lock", blue card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(4); // "plate", blue card, correct.
    client.moves.chooseCard(5); // "capital", civilian card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(6); // "spring", blue card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(7); // "berry", red card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(8); // "tag", blue card, mistake.
    client.moves.clueGiven();
    client.moves.chooseCard(9); // "missile", blue card, correct.
    client.moves.chooseCard(10); // "beijing", blue card, correct.
    client.moves.chooseCard(12); // "model", assassin card, loses the game.

    const ctx: IGameCtx = client.store.getState().ctx;
    expect(ctx.gameover.winner.teamID).toEqual(1);
  });
});
