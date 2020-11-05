import { Client } from 'boardgame.io/client';
import { MancalaGame, IG } from './game';
import { Ctx } from 'boardgame.io';

describe('mancala rules', () => {
  it('should play again if finishes on players store', () => {
    const client = Client({
      game: { ...MancalaGame },
    }) as any;

    client.moves.sowSeeds('0', 2);

    const { G, ctx }: { G: IG; ctx: Ctx } = client.getState();
    expect(G.playerHoles[0]).toEqual([4, 4, 0, 5, 5, 5]);
    expect(G.playerStoreCount[0]).toEqual(1);
    expect(ctx.currentPlayer).toEqual('0');
  });

  it('should wrap and finish turn if finishes on the opponent hole', () => {
    const client = Client({
      game: { ...MancalaGame },
    }) as any;

    client.moves.sowSeeds('0', 3);

    const { G, ctx }: { G: IG; ctx: Ctx } = client.getState();
    expect(G.playerHoles[0]).toEqual([4, 4, 4, 0, 5, 5]);
    expect(G.playerHoles[1]).toEqual([5, 4, 4, 4, 4, 4]);
    expect(G.playerStoreCount[0]).toEqual(1);
    expect(ctx.currentPlayer).toEqual('1');
  });
});
