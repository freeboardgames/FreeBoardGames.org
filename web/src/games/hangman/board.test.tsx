import Enzyme from 'enzyme';
import { Client } from 'boardgame.io/client';
import { HangmanGame } from './game';
import Board from './board';
import { GameMode } from 'components/App/Game/GameModePicker';
import { WrapperBoard } from 'boardgame.io/react';

let wrapper: Enzyme.ReactWrapper;
let client: WrapperBoard;
let instance: any;

const updateGameProps = () => {
  const state = client.store.getState();
  wrapper.setProps({ G: state.G, ctx: state.ctx, moves: client.moves });
};

const getPlayerStatus = (correctGuess: boolean) => {
  return {
    secret: 'apple',
    secretLength: 5,
    hint: 'fruit',
    guesses: correctGuess ? { a: [0], p: [1, 2], l: [3], e: [4] } : { x: [], y: [], z: [], c: [], v: [], w: [] },
  };
};

describe('Hangman UI', () => {
  beforeEach(() => {
    client = Client({
      game: HangmanGame,
    });
    const state0 = client.store.getState();
    wrapper = Enzyme.mount(
      <Board
        G={state0.G}
        ctx={state0.ctx}
        moves={client.moves}
        playerID={'0'}
        isActive={true}
        gameArgs={{
          gameCode: 'hangman',
          mode: GameMode.LocalFriend,
          players: [
            { playerID: 0, name: 'Player A', roomID: 'fooroom' },
            { playerID: 1, name: 'Player B', roomID: 'fooroom' },
          ],
        }}
      />,
    );
    instance = wrapper.instance();
  });

  it('should prompt player to enter word', () => {
    expect(wrapper.find('EnterWordPrompt').exists()).toBeTruthy();
  });

  it('sets secret for Player A', () => {
    instance._setSecret('foo', 'bar');
    updateGameProps();
    expect(wrapper.text()).toContain('Player B');
  });

  it('sets secret for Player B', () => {
    instance._setSecret('foo', 'bar'); // Player A
    instance._setSecret('bar', 'qux'); // Player B
    updateGameProps();

    // Game begins
    expect(wrapper.text()).toContain("Player A's Turn");
  });

  it('clicks letters', () => {
    // set secrets
    instance._setSecret('foo', 'bar'); // Player A
    instance._setSecret('bar', 'qux'); // Player B
    client.moves.selectLetter = jest.fn();

    updateGameProps();

    // Player A's turn
    const letter = wrapper.find('[data-testid="letter-z-cir"]').at(0);
    letter.simulate('click');

    expect(client.moves.selectLetter).toHaveBeenCalled();
    expect(client.moves.selectLetter.mock.calls[0][0]).toEqual('z');
  });

  it('has colors for guess results', () => {
    // set secrets
    instance._setSecret('foo', 'bar'); // Player A
    instance._setSecret('bar', 'qux'); // Player B
    client.moves.selectLetter = jest.fn();
    updateGameProps();
    const G = {
      players: {
        '0': {
          secret: 'foo',
          secretLength: 3,
          hint: 'bar',
          guesses: {
            r: [2],
            z: [],
          },
        },
        '1': {
          secret: 'bar',
          secretLength: 3,
          hint: 'qux',
          guesses: {
            r: [2],
            z: [],
          },
        },
      },
    };
    wrapper.setProps({ G });

    // Z should be red
    const letterZ = wrapper.find('[data-testid="letter-z-cir"]').at(0);
    expect(letterZ.prop('fill')).toEqual('#ff1744');

    // R should be green
    const letterR = wrapper.find('[data-testid="letter-r-cir"]').at(0);
    expect(letterR.prop('fill')).toEqual('#00e676');
  });

  it('should show gameover', () => {
    const ctx = { gameover: true, currentPlayer: '0' };
    const G = { players: { '1': { secret: 'foo', guesses: {} }, '0': { secret: 'bar', guesses: {} } } };
    wrapper.setProps({ G, ctx });

    expect(wrapper.text()).toContain('Game Over, Player A won!');
    const scoreRows = wrapper.find('.scoreTable tbody tr');
    expect(scoreRows.at(0).text()).toContain('Player A');
    expect(scoreRows.at(0).text()).toContain('0');
    expect(scoreRows.at(1).text()).toContain('Player B');
    expect(scoreRows.at(1).text()).toContain('0');
  });

  it('should show that the guess was CORRECT', () => {
    instance._setSecret('bar', 'bar'); // Player A
    instance._setSecret('abc', 'qux'); // Player B
    updateGameProps();

    ['a', 'z', 'b', 'c'].forEach((l) => {
      let letter = wrapper.find(`[data-testid="letter-${l}-cir"]`).at(0);
      letter.simulate('click');
      updateGameProps();
    });

    expect(wrapper.text()).toContain('Your guess was CORRECT');
    expect(wrapper.text()).toContain('Your score is 75 points');
    const scoreRows = wrapper.find('.scoreTable tbody tr');
    expect(scoreRows.at(0).text()).toContain('Player A');
    expect(scoreRows.at(0).text()).toContain('75');
    expect(scoreRows.at(1).text()).toContain('Player B');
    expect(scoreRows.at(1).text()).toContain('0');
  });

  it('should show that the guess was INCORRECT', () => {
    instance._setSecret('bar', 'bar'); // Player A
    instance._setSecret('abc', 'qux'); // Player B
    updateGameProps();

    ['x', 'y', 'z', 'l', 'm', 'n'].forEach((l) => {
      let letter = wrapper.find(`[data-testid="letter-${l}-cir"]`).at(0);
      letter.simulate('click');
      updateGameProps();
    });

    expect(wrapper.text()).toContain('Your guess was INCORRECT');
    expect(wrapper.text()).toContain('The word to be guessed was ABC');
  });

  describe('online-specific tests', () => {
    beforeEach(() => {
      const gameArgs = {
        gameCode: 'hangman',
        mode: GameMode.OnlineFriend,
        players: [
          { playerID: 0, name: 'Player A', roomID: 'fooroom' },
          { playerID: 1, name: 'Player B', roomID: 'fooroom' },
        ],
      };
      wrapper.setProps({ gameArgs });
    });

    it("clicks a letter when it's our turn", () => {
      client.moves.setSecret('foo', 'bar'); // Player A
      client.moves.setSecret('baz', 'qux'); // Player B
      updateGameProps();
      // this.props.playerID is "0", but currentPlayer is "0"

      client.moves.selectLetter = jest.fn();
      const letter = wrapper.find('[data-testid="letter-z-cir"]').at(0);
      letter.simulate('click');

      expect(client.moves.selectLetter).toHaveBeenCalled();
      expect(client.moves.selectLetter.mock.calls[0][0]).toEqual('z');
    });

    it("clicks a letter when it's NOT our turn", () => {
      client.moves.setSecret('foo', 'bar'); // Player A
      client.moves.setSecret('baz', 'qux'); // Player B
      client.moves.selectLetter = jest.fn();
      updateGameProps();
      wrapper.setProps({ playerID: '1' });

      const letter = wrapper.find('[data-testid="letter-z-cir"]').at(0);
      letter.simulate('click');

      expect(client.moves.selectLetter).not.toHaveBeenCalled();
    });

    it('should show gameover, draw', () => {
      const ctx = { gameover: { draw: true }, currentPlayer: '1' };
      const G = { players: { '0': getPlayerStatus(true), '1': getPlayerStatus(true) } };
      wrapper.setProps({ G, ctx });

      expect(wrapper.text()).toContain('Game Over, draw!');
    });

    it('should show gameover, you won', () => {
      // props.playerID is "0"
      const ctx = { gameover: { winner: '0' }, currentPlayer: '0' };
      const G = { players: { '0': getPlayerStatus(true), '1': getPlayerStatus(true) } };
      wrapper.setProps({ G, ctx });

      expect(wrapper.text()).toContain('Game Over, you won!');
    });

    it('should show gameover, you lost', () => {
      // props.playerID is "0"
      const ctx = { gameover: { winner: '1' }, currentPlayer: '0' };
      const G = { players: { '0': getPlayerStatus(true), '1': getPlayerStatus(true) } };
      wrapper.setProps({ G, ctx });

      expect(wrapper.text()).toContain('Game Over, you lost!');
    });
  });
});
