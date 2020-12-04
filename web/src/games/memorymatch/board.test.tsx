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
    const pair = state0.G.cards.filter((c) => c.name === card.name && c.id !== card.id)[0];
    wrapper.find(`[data-testid="mm-card-group-${pair.id}"]`).at(0).simulate('click');
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
      wrapper.find(`[data-testid="mm-card-group-${namedCards[1].id}"]`).at(0).simulate('click');
      updateGameProps();
    });
    expect(wrapper.text()).toContain('Game Over, draw!');
  });

  it('should declare Player 2 as th winner', () => {
    const cardNames = new Set(state0.G.cards.map((c) => c.name));
    const matchingPairs = [];
    cardNames.forEach((cName) => {
      matchingPairs.push(state0.G.cards.filter((c) => c.name === cName));
    });
    // now insert two non-matchin pairs at position 0 and 2
    matchingPairs.push(matchingPairs[0]);
    matchingPairs.push(matchingPairs[2]);
    matchingPairs[0] = '_skip_';
    matchingPairs[2] = '_skip_';

    matchingPairs.forEach((mp) => {
      if (mp === '_skip_') {
        instance.props.moves.hideShownCards();
      } else {
        wrapper.find(`[data-testid="mm-card-group-${mp[0].id}"]`).at(0).simulate('click');
        updateGameProps();
        wrapper.find(`[data-testid="mm-card-group-${mp[1].id}"]`).at(0).simulate('click');
        updateGameProps();
      }
    });
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
