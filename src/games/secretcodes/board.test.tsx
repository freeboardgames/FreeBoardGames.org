import Enzyme from 'enzyme';
import { Client } from 'boardgame.io/client';
import { SecretcodesGame } from './game';
import Board from './board';
import { GameMode } from 'components/App/Game/GameModePicker';
import { WrapperBoard } from 'boardgame.io/react';
import { Phases, TeamColor } from './definitions';

jest.mock('./LobbyPlayer');
jest.mock('./Lobby');

let wrapper: Enzyme.ShallowWrapper;
let client: WrapperBoard;

describe('Secretcodes UI', () => {
  beforeEach(() => {
    client = Client({
      game: SecretcodesGame,
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
          players: [
            { playerID: 0, name: 'foo', roomID: 'fooroom' },
            { playerID: 1, name: 'bar', roomID: 'fooroom' },
          ],
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
    const players = [
      { playerID: 0, name: 'foo', roomID: 'fooroom' },
      { playerID: 1, name: 'bar', roomID: 'fooroom' },
    ];
    const winner = { color: TeamColor.Red, playersID: ['1'] };
    wrapper.setProps({ ctx: { gameover: { players, winner } } });

    const gameOverMsg = wrapper.find('GameLayout').prop('gameOver');
    expect(gameOverMsg).toEqual('Red Team wins');
  });

  it('should show gameover, blue team wins', () => {
    const players = [
      { playerID: 0, name: 'foo', roomID: 'fooroom' },
      { playerID: 1, name: 'bar', roomID: 'fooroom' },
    ];
    const winner = { color: TeamColor.Blue, playersID: ['0'] };
    wrapper.setProps({ ctx: { gameover: { players, winner } } });

    const gameOverMsg = wrapper.find('GameLayout').prop('gameOver');
    expect(gameOverMsg).toEqual('Blue Team wins');
  });
});
