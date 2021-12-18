import Enzyme from 'enzyme';
import { Client } from 'boardgame.io/client';
import { MemoryMatchGame } from './game';
import { MemoryMatchBoard } from './board';
import { GameMode } from 'gamesShared/definitions/mode';

let wrapper: Enzyme.ReactWrapper;
let client;
let instance: any;
let state0: any;

const updateGameProps = () => {
  const state = client.store.getState();
  wrapper.setProps({ G: state.G, ctx: state.ctx, moves: client.moves });
};

describe('SoupOfLetters UI', () => {
  beforeEach(() => {
    client = Client({
      game: MemoryMatchGame,
    });
    state0 = client.store.getState();
    wrapper = Enzyme.mount(
      <MemoryMatchBoard
        G={state0.G}
        ctx={state0.ctx}
        moves={client.moves}
        playerID={'0'}
        isActive={true}
        gameArgs={{
          gameCode: 'memorymatch',
          mode: GameMode.LocalFriend,
          players: [
            { playerID: 0, name: 'Player A' },
            { playerID: 1, name: 'Player B' },
          ],
        }}
      />,
    );
    instance = wrapper.instance();
  });

  it('should render change in players turn', () => {
    expect(wrapper.text()).toContain("Player 1's Turn");
    // now click on two matching images
    const card = state0.G.cards[0];
    wrapper.find(`[data-testid="mm-card-group-${card.id}"]`).at(0).simulate('click');
    updateGameProps();
    const pair = state0.G.cards.filter((c) => c.name !== card.name)[0];
    wrapper.find(`[data-testid="mm-card-group-${pair.id}"]`).at(0).simulate('click');
    updateGameProps();
    instance.props.moves.hideShownCards();
    updateGameProps();
    // now next player should be allowed to play
    expect(wrapper.text()).toContain("Player 2's Turn");
  });

  it('should declare a draw', () => {
    const cardNames = new Set(state0.G.cards.map((c) => c.name));
    cardNames.forEach((cName) => {
      const namedCards = state0.G.cards.filter((c) => c.name === cName);
      wrapper.find(`[data-testid="mm-card-group-${namedCards[0].id}"]`).at(0).simulate('click');
      updateGameProps();
      const bCards = state0.G.cards.filter((c) => c.name !== cName);
      wrapper.find(`[data-testid="mm-card-group-${bCards[0].id}"]`).at(0).simulate('click');
      updateGameProps();
      instance.props.moves.hideShownCards();
      updateGameProps();
      wrapper.find(`[data-testid="mm-card-group-${namedCards[0].id}"]`).at(0).simulate('click');
      updateGameProps();
      wrapper.find(`[data-testid="mm-card-group-${namedCards[1].id}"]`).at(0).simulate('click');
      updateGameProps();
    });
    expect(wrapper.text()).toContain('Game Over, draw!');
  });

  it('should declare Player 2 as the winner', () => {
    const cardNames = new Set(state0.G.cards.map((c) => c.name));
    let names = [...cardNames];
    let lastName = names.pop();
    names.forEach((cName) => {
      const namedCards = state0.G.cards.filter((c) => c.name === cName);
      wrapper.find(`[data-testid="mm-card-group-${namedCards[0].id}"]`).at(0).simulate('click');
      updateGameProps();
      const bCards = state0.G.cards.filter((c) => c.name !== cName);
      wrapper.find(`[data-testid="mm-card-group-${bCards[0].id}"]`).at(0).simulate('click');
      updateGameProps();
      instance.props.moves.hideShownCards();
      updateGameProps();
      wrapper.find(`[data-testid="mm-card-group-${namedCards[0].id}"]`).at(0).simulate('click');
      updateGameProps();
      wrapper.find(`[data-testid="mm-card-group-${namedCards[1].id}"]`).at(0).simulate('click');
      updateGameProps();
    });
    const lastCards = state0.G.cards.filter((c) => c.name === lastName);
    wrapper.find(`[data-testid="mm-card-group-${lastCards[0].id}"]`).at(0).simulate('click');
    updateGameProps();
    wrapper.find(`[data-testid="mm-card-group-${lastCards[1].id}"]`).at(0).simulate('click');
    updateGameProps();
    expect(wrapper.text()).toContain('Game Over, Player 2 won!');
  });

  describe('online-specific tests', () => {
    beforeEach(() => {
      const gameArgs = {
        gameCode: 'memorymatch',
        mode: GameMode.OnlineFriend,
        players: [
          { playerID: 0, name: 'Player A', roomID: 'fooroom' },
          { playerID: 1, name: 'Player B', roomID: 'fooroom' },
        ],
      };
      wrapper.setProps({ gameArgs });
    });

    it('click letter when our turn', () => {
      client.moves.cardClicked = jest.fn();
      wrapper.find(`[data-testid="mm-card-group-0"]`).at(0).simulate('click');
      updateGameProps();
      expect(client.moves.cardClicked).toHaveBeenCalled();
    });

    it('click letter when it is not our turn', () => {
      client.moves.cardClicked = jest.fn();
      updateGameProps();
      wrapper.setProps({ playerID: '1' });
      wrapper.find(`[data-testid="mm-card-group-0"]`).at(0).simulate('click');
      expect(client.moves.cardClicked).not.toHaveBeenCalled();
    });

    it('should show gameover, you won', () => {
      // props.playerID is "0"
      const ctx = { gameover: { winner: '0' }, currentPlayer: '0' };
      wrapper.setProps({ ctx });

      expect(wrapper.text()).toContain('Game Over, you won!');
    });

    it('should show gameover, you lost', () => {
      // props.playerID is "0"
      const ctx = { gameover: { winner: '1' }, currentPlayer: '0' };
      wrapper.setProps({ ctx });

      expect(wrapper.text()).toContain('Game Over, you lost!');
    });
  });
});
