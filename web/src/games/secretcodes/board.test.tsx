import Enzyme from 'enzyme';
import { Client } from 'boardgame.io/client';
import { SecretcodesGame } from './game';
import { Board } from './board';
import { GameMode } from 'gamesShared/definitions/mode';
import { Phases, TeamColor } from './definitions';
import { makeMount } from 'test/utils/enzymeUtil';
import { PlayBoard } from './PlayBoard';

let wrapper: Enzyme.ReactWrapper;
let client;

const mount = makeMount({ gameCode: 'secretcodes' });

describe('Secretcodes UI', () => {
  beforeEach(() => {
    client = Client({
      game: SecretcodesGame,
    });

    const state = client.store.getState();
    wrapper = mount(
      <Board
        G={state.G}
        ctx={state.ctx}
        events={state.events}
        moves={client.moves}
        playerID={'0'}
        isActive={true}
        isMultiplayer={false}
        gameArgs={{
          gameCode: 'secretcodes',
          mode: GameMode.LocalFriend,
          players: [
            { playerID: 0, name: 'foo' },
            { playerID: 1, name: 'bar' },
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
    wrapper.setProps({ ctx: { activePlayers: { '1': {} }, currentPlayer: '1', phase: Phases.guess } });

    expect(wrapper.find('GameLayout').exists()).toBeTruthy();
    expect(wrapper.find(PlayBoard).exists()).toBeTruthy();
  });

  it('should show gameover, red team wins', () => {
    const players = [
      { playerID: 0, name: 'foo' },
      { playerID: 1, name: 'bar' },
    ];
    const winner = { color: TeamColor.Red, playersID: ['1'] };
    wrapper.setProps({ ctx: { gameover: { players, winner } } });

    const gameOverMsg = wrapper.find('GameLayout').prop('gameOver');
    expect(gameOverMsg).toEqual('Red Team wins');
  });

  it('should show gameover, blue team wins', () => {
    const players = [
      { playerID: 0, name: 'foo' },
      { playerID: 1, name: 'bar' },
    ];
    const winner = { color: TeamColor.Blue, playersID: ['0'] };
    wrapper.setProps({ ctx: { gameover: { players, winner } } });

    const gameOverMsg = wrapper.find('GameLayout').prop('gameOver');
    expect(gameOverMsg).toEqual('Blue Team wins');
  });
});
