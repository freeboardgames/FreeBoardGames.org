import React from 'react';
import Game, { GameInternal } from './Game';
import { mount } from 'enzyme';
import { GAMES_MAP } from 'games';
import { GameMode } from 'gamesShared/definitions/mode';
import { GetMatch_match } from 'gqlTypes/GetMatch';
import { GameCustomizationState } from 'gamesShared/definitions/customization';
import * as Settings from 'infra/settings/SettingsService';
import { IGameOutterProps } from './Game';

const { withSettingsService } = Settings;

// so we don't actually use SocketIO and attempt a connection:
jest.mock('boardgame.io/multiplayer');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('Game', () => {
  let settingsService;
  beforeEach(() => {
    settingsService = { getGameSetting: jest.fn() };
    jest
      .spyOn(Settings, 'withSettingsService')
      .mockImplementation((Component) => (props) => <Component settingsService={settingsService} {...props} />);
  });

  it('should render properly for multiplayer', async () => {
    const gameCode = 'tictactoe';
    const game = GAMES_MAP[gameCode];
    const modes = game.modes;
    for (const mode of modes) {
      if (mode.mode === GameMode.OnlineFriend) {
        const match: GetMatch_match = {
          __typename: 'Match' as const,
          bgioMatchId: 'fooMatch',
          bgioServerUrl: 'fooBGIOServer',
          gameCode: 'chess',
          playerMemberships: [
            {
              __typename: 'MatchMembership' as const,
              user: { nickname: 'fooPlayer', id: 0, __typename: 'User' as const },
            },
          ],
          bgioPlayerId: '0',
          bgioSecret: 'fooSecret',
        };
        const app = component({ match });
        const wrapper = mount(app);
        await instance(wrapper).promise;
        expect(wrapper.text()).toContain('Downloading Chess');
        wrapper.update();
        expect(wrapper.find('Board').length).toBeGreaterThan(0);
      }
    }
  });

  it('should render properly for singleplayer', async () => {
    const gameCode = 'tictactoe';
    const app = component({ gameCode, mode: 'local' });
    const wrapper = mount(app);
    await instance(wrapper).promise;
    wrapper.update();
    expect(wrapper.find('Board').length).toBeGreaterThan(0);
  });

  it('should render properly for ai', async () => {
    const gameCode = 'tictactoe';
    const gameCustomizationState: GameCustomizationState = {
      quick: { difficulty: 1 },
    };
    settingsService.getGameSetting.mockReturnValue(gameCustomizationState);
    const app = component({ gameCode, mode: GameMode.AI });
    const wrapper = mount(app);
    await instance(wrapper).promise;
    wrapper.update();
    expect(wrapper.find('Board').length).toBeGreaterThan(0);
  });

  it('should render error correctly with rejected Promise', async () => {
    GAMES_MAP.chess.config = () => Promise.reject(new Error('fail'));
    const app = component({ gameCode: 'chess', mode: 'local' });
    const wrapper = mount(app);
    await instance(wrapper).promise;
    wrapper.update();
    expect(wrapper.text()).toContain('Failed to download');
  });

  it('should render error correctly with unknown gameCode', async () => {
    const app = component({ gameCode: 'notAGame', mode: 'local' });
    const wrapper = mount(app);
    await instance(wrapper).promise;
    wrapper.update();
    expect(wrapper.text()).toContain('Game Not Found');
  });

  it('should render error correctly with invalid game mode', async () => {
    const app = component({ gameCode: 'chess', mode: 'invalid' });
    const wrapper = mount(app);
    await instance(wrapper).promise;
    wrapper.update();
    expect(wrapper.text()).toContain('Invalid Game Mode');
  });

  it('should render loading correctly', () => {
    const app = component({ gameCode: 'tictactoe', mode: 'local' });
    const wrapper = mount(app);
    instance(wrapper).clear();
    instance(wrapper).forceUpdate();
    expect(wrapper.html()).toContain('Downloading');
  });

  it('should call componentWillUnmount() without error', () => {
    const app = component({ gameCode: 'chess', mode: 'local' });
    const wrapper = mount(app);
    instance(wrapper).componentWillUnmount();
  });
});

function component(props: IGameOutterProps) {
  const Component = () => <Game {...props} />;
  const WrappedComponent = withSettingsService(Component);
  return <WrappedComponent />;
}

function instance(wrapper) {
  return wrapper.find(GameInternal).instance() as GameInternal;
}
