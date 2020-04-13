import Enzyme from 'enzyme';
import { Client } from 'boardgame.io/client';
import { CodenamesGame } from './game';
import Board from './board';
import { GameMode } from 'components/App/Game/GameModePicker';
import { WrapperBoard } from 'boardgame.io/react';
import { Phases } from './definitions';

jest.mock('./LobbyPlayer');
jest.mock('./Lobby');

let wrapper: Enzyme.ShallowWrapper;
let client: WrapperBoard;

describe('Secretcodes UI', () => {
  beforeEach(() => {
    client = Client({
      game: CodenamesGame,
    });
    const state0 = client.store.getState();
    wrapper = Enzyme.shallow(
      <Board
        G={state0.G}
        ctx={state0.ctx}
        events={state0.events}
        moves={client.moves}
        playerID={'0'}
        isActive={true}
        isMultiplayer={false}
        gameArgs={{
          gameCode: 'secretcodes',
          mode: GameMode.LocalFriend,
          players: [{ playerID: 0, name: 'foo', roomID: 'fooroom' }],
        }}
      />,
    );
  });

  it('should render Lobby', () => {
    expect(wrapper.find('GameLayout').exists()).toBeTruthy();
    expect(wrapper.find('Lobby').exists()).toBeTruthy();
  });

  it('should render PlayBoard', () => {
    wrapper.setProps({ ctx: { phase: Phases.play } });

    expect(wrapper.find('GameLayout').exists()).toBeTruthy();
    expect(wrapper.find('PlayBoard').exists()).toBeTruthy();
  });

  it('should show gameover, red team wins', () => {
    const players = [{ playerID: 0, name: 'foo', roomID: 'fooroom' }];
    const winner = { players, teamId: 1 };
    wrapper.setProps({ ctx: { gameover: { players, winner } } });

    const gameOverMsg = wrapper.find('GameLayout').prop('gameOver');
    expect(gameOverMsg).toEqual('Red Team wins');
  });

  it('should show gameover, red team wins', () => {
    const players = [{ playerID: 0, name: 'foo', roomID: 'fooroom' }];
    const winner = { players, teamId: 0 };
    wrapper.setProps({ ctx: { gameover: { players, winner } } });

    const gameOverMsg = wrapper.find('GameLayout').prop('gameOver');
    expect(gameOverMsg).toEqual('Blue Team wins');
  });
});
