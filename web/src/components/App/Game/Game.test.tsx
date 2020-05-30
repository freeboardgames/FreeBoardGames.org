import React from 'react';
import Game from './Game';
import { mount } from 'enzyme';
import { GAMES_MAP } from 'games';
import { GameMode } from './GameModePicker';
import { GetMatch_match } from 'gqlTypes/GetMatch';

// so we don't actually use SocketIO and attempt a connection:
jest.mock('boardgame.io/multiplayer');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('Game', () => {
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
        const app = <Game match={match} />;
        const wrapper = mount(app);
        await (wrapper.find(Game).instance() as any).promise;
        expect(wrapper.text()).toContain('Downloading Chess');
        wrapper.update();
        expect(wrapper.find('Board').length).toBeGreaterThan(0);
      }
    }
  });

  it('should render properly for singleplayer', async () => {
    const gameCode = 'tictactoe';
    const app = <Game gameCode={gameCode} mode={'local'} />;
    const wrapper = mount(app);
    await (wrapper.find(Game).instance() as any).promise;
    wrapper.update();
    expect(wrapper.find('Board').length).toBeGreaterThan(0);
  });

  it('should render properly for ai', async () => {
    const gameCode = 'tictactoe';
    const app = <Game gameCode={gameCode} mode={GameMode.AI} aiLevel={'1'} />;
    const wrapper = mount(app);
    await (wrapper.find(Game).instance() as any).promise;
    wrapper.update();
    expect(wrapper.find('Board').length).toBeGreaterThan(0);
  });

  it('should render error correctly with rejected Promise', async () => {
    GAMES_MAP.chess.config = () => Promise.reject(new Error('fail'));
    const app = <Game gameCode={'chess'} mode={'local'} />;
    const wrapper = mount(app);
    await (wrapper.find(Game).instance() as any).promise;
    wrapper.update();
    expect(wrapper.text()).toContain('Failed to download');
  });

  it('should render error correctly with unknown gameCode', async () => {
    const app = <Game gameCode={'notAGame'} mode={'local'} />;
    const wrapper = mount(app);
    await (wrapper.find(Game).instance() as any).promise;
    wrapper.update();
    expect(wrapper.text()).toContain('Game Not Found');
  });

  it('should render error correctly with invalid game mode', async () => {
    const app = <Game gameCode={'chess'} mode={'invalid'} />;
    const wrapper = mount(app);
    await (wrapper.find(Game).instance() as any).promise;
    wrapper.update();
    expect(wrapper.text()).toContain('Invalid Game Mode');
  });

  it('should render loading correctly', () => {
    const app = <Game gameCode="tictactoe" mode="local" />;
    const wrapper = mount(app);
    (wrapper.find(Game).instance() as any).clear();
    (wrapper.find(Game).instance() as any).forceUpdate();
    expect(wrapper.html()).toContain('Downloading');
  });

  it('should call componentWillUnmount() without error', () => {
    const app = <Game gameCode={'chess'} mode={'local'} />;
    const wrapper = mount(app);
    (wrapper.find(Game).instance() as any).componentWillUnmount();
  });
});
