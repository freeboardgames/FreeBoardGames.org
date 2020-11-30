import { GamesList } from './GamesList';
import Enzyme from 'enzyme';
import { GAMES_LIST } from '../../../../games';

const FIRST_GAME = GAMES_LIST[0];

let wrapper: Enzyme.ReactWrapper;

beforeEach(() => {
  wrapper = Enzyme.mount(<GamesList />);
});

describe('GamesList', () => {
  it('should have correct games listed', () => {
    const game = wrapper.find(`[data-testid="gamecard-${FIRST_GAME.code}"]`).at(0);
    expect(game.exists()).toBeTruthy();
  });

  describe('filtering', () => {
    it('handles onChange()', () => {
      const instance: any = wrapper.instance();
      const searchQuery = 'foo';
      const mockEvent = { target: { value: searchQuery } };
      instance._handleSearchOnChange(mockEvent);
      const searchQueryInState = wrapper.state('searchQuery');
      expect(searchQueryInState).toEqual('foo');
    });

    it('should filter by name', () => {
      wrapper.setState({ searchQuery: FIRST_GAME.name });
      const game = wrapper.find(`[data-testid="gamecard-${FIRST_GAME.code}"]`).at(0);
      expect(game.exists()).toBeTruthy();
    });

    it('should filter by description', () => {
      wrapper.setState({ searchQuery: FIRST_GAME.description });
      const game = wrapper.find(`[data-testid="gamecard-${FIRST_GAME.code}"]`).at(0);
      expect(game.exists()).toBeTruthy();
    });

    it('should filter by description tag', () => {
      wrapper.setState({ searchQuery: FIRST_GAME.descriptionTag });
      const game = wrapper.find(`[data-testid="gamecard-${FIRST_GAME.code}"]`).at(0);
      expect(game.exists()).toBeTruthy();
    });
  });
});
