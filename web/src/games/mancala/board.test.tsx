import { makeRender, screen } from 'test/utils/rtl';
import { Board } from './board';
import { Client } from 'boardgame.io/client';
import { MancalaGame } from './game';
import { GameMode } from 'gamesShared/definitions/mode';

describe('mancala', () => {
  it('should render', () => {
    const client = Client({
      game: MancalaGame,
    });
    const state0 = client.store.getState();

    const render = makeRender({ gameCode: 'mancala' });
    render(
      <Board
        G={state0.G}
        ctx={state0.ctx}
        moves={client.moves}
        playerID={'0'}
        gameArgs={{
          gameCode: 'mancala',
          mode: GameMode.LocalFriend,
          players: [
            { name: 'foo', playerID: 0 },
            { name: 'bar', playerID: 1 },
          ],
        }}
      />,
    );
    const holes = screen.getAllByTestId('hole');

    // First page must have 12 Holes
    expect(holes).toHaveLength(12);
  });
});
