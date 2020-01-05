import React from 'react';
import Game from './Game';
import { mount } from 'enzyme';
import { GAMES_MAP } from '../../../games';
import { GameMode } from './GameModePicker';
import { LobbyService } from '../Lobby/LobbyService';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('Game', () => {
  it('should render properly for multiplayer', async () => {
    LobbyService.getCredential = jest.fn().mockReturnValue('foo');
    const gameCode = 'tictactoe';
    const game = GAMES_MAP[gameCode];
    const modes = game.modes;
    for (const mode of modes) {
      if (mode.mode === GameMode.OnlineFriend) {
        const app = (
          <Game
            match={{ params: { gameCode, mode: 'online' } }}
            room={{
              currentUser: { playerID: 0, roomID: 'foo' },
              roomID: 'foo',
              numberOfPlayers: 1,
              players: [{ playerID: 0, roomID: 'foo' }],
              gameCode,
            }}
          />
        );
        const wrapper = mount(app);
        await (wrapper.find(Game).instance() as any).promise;
        wrapper.update();
        expect(wrapper.html()).toContain('Connecting');
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
    // const app = <Game match={{ params: { gameCode, mode: 'AI' } }} />;
    const app = <Game gameCode={gameCode} mode={GameMode.AI} />;
    const wrapper = mount(app);
    await (wrapper.find(Game).instance() as any).promise;
    wrapper.update();
    expect(wrapper.find('Board').length).toBeGreaterThan(0);
  });

  it('should render error correctly with rejected Promise', async () => {
    GAMES_MAP.chess.config = () => Promise.reject(new Error('fail'));
    const app = <Game match={{ params: { gameCode: 'chess', mode: 'local' } }} />;
    const wrapper = mount(app);
    await (wrapper.find(Game).instance() as any).promise;
    wrapper.update();
    expect(wrapper.html()).toContain('Game Not Found');
  });

  it('should render error correctly with unknown gameCode', async () => {
    const app = <Game match={{ gameCode: 'notagame', mode: 'local' }} />;
    const wrapper = mount(app);
    await (wrapper.find(Game).instance() as any).promise;
    wrapper.update();
    expect(wrapper.html()).toContain('Game Not Found');
  });

  it('should render error correctly with invalid game mode', async () => {
    const app = <Game match={{ gameCode: 'chess', mode: 'invalid' }} />;
    const wrapper = mount(app);
    await (wrapper.find(Game).instance() as any).promise;
    wrapper.update();
    expect(wrapper.html()).toContain('Game Not Found');
  });

  it('should render loading correctly', () => {
    const app = <Game gameCode="tictactoe" mode="local" />;
    const wrapper = mount(app);
    (wrapper.find(Game).instance() as any).clear();
    (wrapper.find(Game).instance() as any).forceUpdate();
    expect(wrapper.html()).toContain('Downloading');
  });

  it('should call componentWillUnmount() without error', () => {
    const app = <Game match={{ gameCode: 'chess', mode: 'local' }} />;
    const wrapper = mount(app);
    (wrapper.find(Game).instance() as any).componentWillUnmount();
  });
});
