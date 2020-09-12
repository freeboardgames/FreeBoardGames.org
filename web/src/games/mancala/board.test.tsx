import Enzyme from 'enzyme';
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
    const comp = Enzyme.mount(
      <Board
        G={state0.G}
        ctx={state0.ctx}
        moves={client.moves}
        playerID={'0'}
        gameArgs={{
          gameCode: 'zooparade',
          mode: GameMode.LocalFriend,
          players: [
            { name: 'foo', playerID: 0 },
            { name: 'bar', playerID: 1 },
          ],
        }}
      />,
    );
    // First page must have 12 Holes
    expect(comp.find('Hole').length).toEqual(12);
  });
});
