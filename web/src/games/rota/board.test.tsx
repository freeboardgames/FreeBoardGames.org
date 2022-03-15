import Enzyme from 'enzyme';
import { Client } from 'boardgame.io/client';
import { RotaGame } from './game';
import { Board, localPlayerNames } from './board';
import { GameMode } from 'gamesShared/definitions/mode';

let wrapper: Enzyme.ReactWrapper;
let client;

const updateGameProps = () => {
  const state = client.store.getState();
  wrapper.setProps({ G: state.G, ctx: state.ctx, moves: client.moves });
};

describe('Rota UI', () => {
  beforeEach(() => {
    client = Client({
      game: RotaGame,
    });
    const state0 = client.store.getState();
    wrapper = Enzyme.mount(
      <Board
        G={state0.G}
        ctx={state0.ctx}
        moves={client.moves}
        playerID={'0'}
        gameArgs={{
          gameCode: 'rota',
          mode: GameMode.LocalFriend,
        }}
      />,
    );
  });

  it('Checks if Game starts with RED in the PLACE phase', () => {
    expect(wrapper.text()).toContain(`[${localPlayerNames[0].toUpperCase()}] PLACE PIECE`);
  });

  it('Checks if placePiece is being called', () => {
    client.moves.placePiece = jest.fn();

    const pieceHolder = wrapper.find('[data-testid="rota_piece_holder_test_id_0"]').at(0);
    pieceHolder.simulate('click');

    expect(client.moves.placePiece).toHaveBeenCalled();
  });

  it('Checks if movePiece is being called', () => {
    client.moves.movePiece = jest.fn();

    [0, 1, 2, 3, 4, 5, 0, 1].forEach((i) => {
      const pieceHolder = wrapper.find(`[data-testid="rota_piece_holder_test_id_${i}"]`).at(0);
      pieceHolder.simulate('click');
      updateGameProps();
    });

    expect(client.moves.movePiece).toHaveBeenCalled();
  });

  it('Checks if RED wins directly without entering the MOVE phase.', () => {
    client.moves.movePiece = jest.fn();

    [0, 5, 1, 6, 2].forEach((i) => {
      const pieceHolder = wrapper.find(`[data-testid="rota_piece_holder_test_id_${i}"]`).at(0);
      pieceHolder.simulate('click');
      updateGameProps();
    });

    expect(wrapper.text()).toContain(`${localPlayerNames[0]} won!`);
  });

  it('Checks if BLUE wins after entering the MOVE phase.', () => {
    [0, 1, 2, 4, 5, 6, 0, 3, 6, 7].forEach((i) => {
      const pieceHolder = wrapper.find(`[data-testid="rota_piece_holder_test_id_${i}"]`).at(0);
      pieceHolder.simulate('click');
      updateGameProps();
    });

    expect(wrapper.text()).toContain(`${localPlayerNames[1]} won!`);
  });

  it('Checks BLUE Piece cannot be moved in REDs turn.', () => {
    [0, 1, 2, 3, 4, 5, 5, 8].forEach((i) => {
      const pieceHolder = wrapper.find(`[data-testid="rota_piece_holder_test_id_${i}"]`).at(0);
      pieceHolder.simulate('click');
      updateGameProps();
    });

    expect(wrapper.text()).toContain(`[${localPlayerNames[0].toUpperCase()}] MOVE PIECE`);
  });

  describe('online-specific tests', () => {
    beforeEach(() => {
      const gameArgs = {
        gameCode: 'rota',
        mode: GameMode.OnlineFriend,
        players: { '0': { name: 'XXX' }, '1': { name: 'YYY' } },
      };
      wrapper.setProps({ gameArgs });
    });

    it("clicks a piece-holder when it's our turn", () => {
      expect(wrapper.text()).toContain('PLACE PIECE');

      const pieceHolder = wrapper.find(`[data-testid="rota_piece_holder_test_id_0"]`).at(0);
      pieceHolder.simulate('click');
      updateGameProps();

      expect(wrapper.text()).toContain('Waiting for YYY');
    });

    it("click a piece-holder when it's not our turn", () => {
      //click piece at position 0
      let pieceHolder = wrapper.find(`[data-testid="rota_piece_holder_test_id_0"]`).at(0);
      pieceHolder.simulate('click');
      updateGameProps();

      expect(wrapper.text()).toContain('Waiting for YYY');

      //click piece at position 1
      pieceHolder = wrapper.find(`[data-testid="rota_piece_holder_test_id_1"]`).at(0);
      pieceHolder.simulate('click');
      updateGameProps();

      expect(wrapper.text()).toContain('Waiting for YYY');
    });

    it('should show gameover, you won', () => {
      // props.playerID is "0"
      const ctx = { gameover: { winner: '0' } };
      wrapper.setProps({ ctx });

      expect(wrapper.text()).toContain('Game Over, you won!');
    });

    it('should show gameover, you lost', () => {
      // props.playerID is "0"
      const ctx = { gameover: { winner: '1' } };
      wrapper.setProps({ ctx });

      expect(wrapper.text()).toContain('Game Over, you lost!');
    });
  });
});
