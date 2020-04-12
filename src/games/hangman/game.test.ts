import { Client } from 'boardgame.io/client';
import { Local } from 'boardgame.io/multiplayer';
import { HangmanGame } from './game';

describe('hangman rules', () => {
  it('should complete a game whether nobody is eliminated successfully', () => {
    const spec = {
      game: { ...HangmanGame },
      multiplayer: Local(),
    };

    const p0 = Client({ ...spec, playerID: '0' } as any) as any;
    const p1 = Client({ ...spec, playerID: '1' } as any) as any;

    p0.start();
    p1.start();

    p0.moves.setSecret('banana');
    p1.moves.setSecret('apple');

    p1.moves.selectLetter('a');
    p1.moves.selectLetter('c');
    p0.moves.selectLetter('a');
    p0.moves.selectLetter('e');
    p0.moves.selectLetter('x');
    p1.moves.selectLetter('z');
    p0.moves.selectLetter('p');
    p0.moves.selectLetter('l');

    const { ctx } = p0.getState();
    expect(ctx.gameover).toEqual({ winner: '0' });
  });

  it('should complete a draw', () => {
    const spec = {
      game: { ...HangmanGame },
      multiplayer: Local(),
    };

    const p0 = Client({ ...spec, playerID: '0' } as any) as any;
    const p1 = Client({ ...spec, playerID: '1' } as any) as any;

    p0.start();
    p1.start();

    p0.moves.setSecret('banana');
    p1.moves.setSecret('apple');

    p1.moves.selectLetter('x');
    p0.moves.selectLetter('x');
    p1.moves.selectLetter('y');
    p0.moves.selectLetter('y');
    p1.moves.selectLetter('z');
    p0.moves.selectLetter('z');
    p1.moves.selectLetter('k');
    p0.moves.selectLetter('k');
    p1.moves.selectLetter('v');
    p0.moves.selectLetter('v');
    p1.moves.selectLetter('w');
    p0.moves.selectLetter('w');

    const { ctx } = p0.getState();
    expect(ctx.gameover).toEqual({ draw: true });
  });

  it('should complete a game whether a player loses first', () => {
    const spec = {
      game: { ...HangmanGame },
      multiplayer: Local(),
    };

    const p0 = Client({ ...spec, playerID: '0' } as any) as any;
    const p1 = Client({ ...spec, playerID: '1' } as any) as any;

    p0.start();
    p1.start();

    p0.moves.setSecret('banana');
    p1.moves.setSecret('apple');

    p1.moves.selectLetter('x');
    p0.moves.selectLetter('x');
    p1.moves.selectLetter('y');
    p0.moves.selectLetter('y');
    p1.moves.selectLetter('z');
    p0.moves.selectLetter('z');
    p1.moves.selectLetter('k');
    p0.moves.selectLetter('k');
    p1.moves.selectLetter('v');
    p0.moves.selectLetter('a');
    p0.moves.selectLetter('v');
    p1.moves.selectLetter('w');
    p0.moves.selectLetter('p');
    p0.moves.selectLetter('l');
    p0.moves.selectLetter('e');

    const { ctx } = p0.getState();
    expect(ctx.gameover).toEqual({ winner: '0' });
  });
});
