import { Client } from 'boardgame.io/client';
import Enzyme from 'enzyme';
import { GameMode } from 'gamesShared/definitions/mode';
import { makeMount } from 'test/utils/enzyme';
import { Board, BoardInternal } from './board';
import { SoupOfLettersGame } from './game';

let wrapper: Enzyme.ReactWrapper;
let client;
let instance: any;
let state0: any;

const updateGameProps = () => {
  const state = client.store.getState();
  wrapper.setProps({ G: state.G, ctx: state.ctx, moves: client.moves });
};

const mount = makeMount({ gameCode: 'soupofletters' });

describe('SoupOfLetters UI', () => {
  beforeEach(() => {
    client = Client({
      game: SoupOfLettersGame,
    });
    state0 = client.store.getState();
    wrapper = mount(
      <Board
        G={state0.G}
        ctx={state0.ctx}
        moves={client.moves}
        playerID={'0'}
        gameArgs={{
          gameCode: 'soupofletters',
          mode: GameMode.LocalFriend,
          players: [
            { playerID: 0, name: 'Player A' },
            { playerID: 1, name: 'Player B' },
          ],
        }}
      />,
    );
    instance = wrapper.find(BoardInternal).instance();
  });

  it('should show all the characters mentioned in the puzzel', () => {
    expect(wrapper.text()).toContain('Turn Player 1');
    expect(wrapper.text()).toContain('seconds');

    for (let r of state0.G.puzzle) {
      for (let c of r) {
        expect(wrapper.text()).toContain(c);
      }
    }
  });

  it('should change turn when timer fires', () => {
    instance._changeTurn(false);
    updateGameProps();

    expect(wrapper.text()).toContain('Turn Player 2');
  });

  it('should change player when word is selected', () => {
    // start with player 1
    expect(wrapper.text()).toContain('Turn Player 1');

    instance._wordFound(state0.G.solution[0]);
    updateGameProps();
    expect(wrapper.text()).toContain('Turn Player 2');
  });

  it('should declare draw', () => {
    state0.G.solution.forEach((s) => {
      instance._wordFound(s);
      updateGameProps();
    });

    expect(wrapper.text()).toContain('draw');
    // score display
    expect(wrapper.text()).toContain('Score');
    expect(wrapper.text()).toContain(`${state0.G.solution.length / 2}`);
  });

  it('should declare player 1 as the winner', () => {
    state0.G.solution.forEach((s, idx) => {
      if (idx !== state0.G.solution.length - 1) {
        instance._wordFound(s);
        updateGameProps();
      }
    });
    instance._changeTurn(false);
    instance._wordFound(state0.G.solution[state0.G.solution.length - 1]);
    updateGameProps();

    expect(wrapper.text()).toContain('Player 1 (red) won!');
  });

  it('should highlight selected words', () => {
    // select some word
    const word = state0.G.solution[0];
    instance._wordFound(word);
    updateGameProps();

    // check if first letter is clicked
    word.letters.forEach((l) => {
      const letter00 = wrapper.find(`[data-testid="letter-sqr-${l.x}-${l.y}"]`).at(0);
      expect(letter00.prop('fill')).toEqual('#f44336');
    });
  });

  describe('online-specific tests', () => {
    beforeEach(() => {
      const gameArgs = {
        gameCode: 'soupofletters',
        mode: GameMode.OnlineFriend,
        players: [
          { playerID: 0, name: 'Player A', roomID: 'fooroom' },
          { playerID: 1, name: 'Player B', roomID: 'fooroom' },
        ],
      };
      wrapper.setProps({ gameArgs });
    });

    it('should show player names', () => {
      expect(wrapper.text()).toContain('You have');
      instance._changeTurn(false);
      updateGameProps();
      expect(wrapper.text()).toContain('Player B has');
    });

    it('should show not make a move when its not your turn', () => {
      client.moves.wordFound = jest.fn();
      updateGameProps();
      wrapper.setProps({ playerID: '1' });
      instance._wordFound(state0.G.solution[0]);

      expect(client.moves.wordFound).not.toHaveBeenCalled();
    });
  });
});
