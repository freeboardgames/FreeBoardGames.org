import { Client } from '@freeboardgame.org/boardgame.io/client';
import { TakeSixGame } from './game';

// https://github.com/nicolodavis/boardgame.io/blob/master/docs/testing.md
it('should declare player 1 as the winner', () => {
    // set up a specific board scenario
    const TictactoeCustomScenario = {
        ...TakeSixGame,
        seed: 'deadbeef',
    };

    const spec = {
        game: TictactoeCustomScenario,
        multiplayer: { local: true },
    };

    const p0 = Client({ ...spec, playerID: '0' } as any);
    const p1 = Client({ ...spec, playerID: '1' } as any);

    // initialize the client with your custom scenario
    const client = Client({
        game: TictactoeCustomScenario,
    });

    p0.moves.selectCard(0);
    p1.moves.selectCard(0);
    p1.moves.selectDeck(0);
    p0.moves.selectDeck(2);
    p1.moves.selectCard(2);
    p0.moves.selectCard(3);
    p0.moves.selectDeck(3);
    p1.moves.selectDeck(3);
    p0.moves.selectCard(7);
    p1.moves.selectCard(7);
    p0.moves.selectDeck(0);
    p1.moves.selectDeck(1);
    p0.moves.selectCard(0);
    p1.moves.selectCard(0);
    p1.moves.selectDeck(0);
    p0.moves.selectDeck(3);
    p0.moves.selectCard(0);
    p1.moves.selectCard(0);
    p0.moves.selectDeck(2);
    p1.moves.selectDeck(1);
    p0.moves.selectCard(0);
    p1.moves.selectCard(0);
    p0.moves.selectDeck(2);
    p1.moves.selectDeck(3);
    p0.moves.selectCard(0);
    p1.moves.selectCard(0);
    p0.moves.selectDeck(2);
    p1.moves.selectDeck(2);
    p0.moves.selectCard(0);
    p1.moves.selectCard(0);
    p0.moves.selectDeck(0);
    p1.moves.selectDeck(0);
    p0.moves.selectCard(0);
    p1.moves.selectCard(0);
    p0.moves.selectDeck(2);
    p1.moves.selectDeck(2);
    p0.moves.selectCard(0);
    p1.moves.selectCard(0);
    p1.moves.selectDeck(3);
    p0.moves.selectDeck(1);

    // player '1' should be declared the winner
    const { G, ctx } = client.store.getState();
    expect(ctx.gameover).toEqual({ winner: '1' });
});
