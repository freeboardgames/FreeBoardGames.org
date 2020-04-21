import { Client } from 'boardgame.io/client';
import { HangmanGame } from './game';

describe('hangman rules', () => {
  it('should complete a game whether nobody is eliminated successfully', () => {
    const client = Client({
      game: { ...HangmanGame },
    }) as any;

    client.moves.setSecret('banana');
    client.moves.setSecret('apple');

    client.moves.selectLetter('a');
    client.moves.selectLetter('c');
    client.moves.selectLetter('e');
    client.moves.selectLetter('z');
    client.moves.selectLetter('p');
    client.moves.selectLetter('l');

    client.events.endTurn();

    client.moves.selectLetter('x');
    client.moves.selectLetter('y');
    client.moves.selectLetter('z');
    client.moves.selectLetter('k');
    client.moves.selectLetter('v');
    client.moves.selectLetter('w');

    const { ctx } = client.getState();
    expect(ctx.gameover).toEqual({ winner: '0' });
  });

  it('should complete a draw', () => {
    const client = Client({
      game: { ...HangmanGame },
    }) as any;

    client.moves.setSecret('banana');
    client.moves.setSecret('apple');

    client.moves.selectLetter('x');
    client.moves.selectLetter('y');
    client.moves.selectLetter('z');
    client.moves.selectLetter('k');
    client.moves.selectLetter('v');
    client.moves.selectLetter('w');

    client.events.endTurn();

    client.moves.selectLetter('x');
    client.moves.selectLetter('y');
    client.moves.selectLetter('z');
    client.moves.selectLetter('k');
    client.moves.selectLetter('v');
    client.moves.selectLetter('w');

    const { ctx } = client.getState();
    expect(ctx.gameover).toEqual({ draw: true });
  });

  // it('should complete a game whether a player loses first', () => {
  //   const client = Client({
  //     game: { ...HangmanGame },
  //   }) as any;

  //   client.moves.setSecret('banana');
  //   client.moves.setSecret('apple');

  //   client.moves.selectLetter('x');
  //   client.moves.selectLetter('x');
  //   client.moves.selectLetter('y');
  //   client.moves.selectLetter('y');
  //   client.moves.selectLetter('z');
  //   client.moves.selectLetter('z');
  //   client.moves.selectLetter('k');
  //   client.moves.selectLetter('k');
  //   client.moves.selectLetter('v');
  //   client.moves.selectLetter('a');
  //   client.moves.selectLetter('v');
  //   client.moves.selectLetter('w');
  //   client.moves.selectLetter('p');
  //   client.moves.selectLetter('l');
  //   client.moves.selectLetter('e');

  //   const { ctx } = client.getState();
  //   expect(ctx.gameover).toEqual({ winner: '0' });
  // });
});
