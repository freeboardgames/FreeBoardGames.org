import Enzyme from 'enzyme';
import { Client } from 'boardgame.io/client';
import { SecretcodesGame } from './game';
// import Board from './board';
import PlayBoard from './PlayBoard';
import { GameMode } from 'components/App/Game/GameModePicker';
import { WrapperBoard } from 'boardgame.io/react';
import { Phases, TeamColor } from './definitions';

jest.mock('./LobbyPlayer');
jest.mock('./Lobby');

let wrapper: Enzyme.ShallowWrapper;
let client: WrapperBoard;

describe('Secretcodes UI', () => {
  let state0;
  beforeEach(() => {
    client = Client({
      game: SecretcodesGame,
    });
    state0 = client.store.getState();
    state0.G.teams = [
      {
        color: TeamColor.red,
        playersID: ['0', '1'],
        spymasterID: '0',
      },
      {
        color: TeamColor.blue,
        playersID: ['2', '3'],
        spymasterID: '2',
      },
    ];
    wrapper = Enzyme.shallow(
      <PlayBoard
        G={state0.G}
        ctx={state0.ctx}
        events={state0.events}
        moves={client.moves}
        playerID={'0'}
        isActive={true}
        gameArgs={{
          gameCode: 'secretcodes',
          mode: GameMode.LocalFriend,
          players: [
            { playerID: 0, name: 'foo', roomID: 'fooroom' },
            { playerID: 1, name: 'bar', roomID: 'fooroom' },
            { playerID: 2, name: 'baz', roomID: 'fooroom' },
            { playerID: 3, name: 'bor', roomID: 'fooroom' },
          ],
        }}
        isHost={true}
        isGameOver={false}
      />,
    );
  });

  it('should highlight the last selected card', () => {
    client.moves.startGame();
    wrapper.setProps({ ctx: { phase: Phases.guess, currentPlayer: '3' } });
    // const word = state0.G.cards[0].word;
    // const firstCard = wrapper.find('.card').filterWhere(card => card.contains(word));
    // wrapper.find('.playActionBtn').at(0).simulate('click');
    // wrapper.find('.playActionBtn').at(0).simulate('click');
    const firstCard = wrapper.find('.card').at(0);
    const secondCard = wrapper.find('.card').at(1);
    firstCard.simulate('click');


    expect(firstCard.hasClass('cardLastSelected')).toBeTruthy();
    // expect(secondCard.hasClass('cardLastSelected')).toBeFalsy();
  });

  // it('should render Lobby', () => {
  //   expect(wrapper.find('GameLayout').exists()).toBeTruthy();
  //   expect(wrapper.find('Lobby').exists()).toBeTruthy();
  // });
  //
  // it('should render PlayBoard', () => {
  //   wrapper.setProps({ ctx: { phase: Phases.giveClue } });
  //
  //   expect(wrapper.find('GameLayout').exists()).toBeTruthy();
  //   expect(wrapper.find('PlayBoard').exists()).toBeTruthy();
  // });
  //
  // it('should show gameover, red team wins', () => {
  //   const players = [
  //     { playerID: 0, name: 'foo', roomID: 'fooroom' },
  //     { playerID: 1, name: 'bar', roomID: 'fooroom' },
  //   ];
  //   const winner = { color: TeamColor.Red, playersID: ['1'] };
  //   wrapper.setProps({ ctx: { gameover: { players, winner } } });
  //
  //   const gameOverMsg = wrapper.find('GameLayout').prop('gameOver');
  //   expect(gameOverMsg).toEqual('Red Team wins');
  // });
  //
  // it('should show gameover, blue team wins', () => {
  //   const players = [
  //     { playerID: 0, name: 'foo', roomID: 'fooroom' },
  //     { playerID: 1, name: 'bar', roomID: 'fooroom' },
  //   ];
  //   const winner = { color: TeamColor.Blue, playersID: ['0'] };
  //   wrapper.setProps({ ctx: { gameover: { players, winner } } });
  //
  //   const gameOverMsg = wrapper.find('GameLayout').prop('gameOver');
  //   expect(gameOverMsg).toEqual('Blue Team wins');
  // });
});
