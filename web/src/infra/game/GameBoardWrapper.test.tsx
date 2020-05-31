import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GameMode } from 'gamesShared/definitions/mode';
import { gameBoardWrapper } from 'infra/game/GameBoardWrapper';

Enzyme.configure({ adapter: new Adapter() });

class MockBoard extends React.Component<any, any> {
  render() {
    return <div>foo</div>;
  }
}

describe('GameBoardWrapper', () => {
  it('should not show warning', () => {
    const Board = gameBoardWrapper({
      board: MockBoard,
      gameArgs: {
        gameCode: 'chess',
        mode: GameMode.OnlineFriend,
      },
    });
    const wrapper = Enzyme.mount(<Board isConnected={true} G={{ pgn: '' }} ctx={{}} />);
    expect(wrapper.find('AlertLayer').length).toEqual(0);
  });

  it('should show disconnected warning', () => {
    const Board = gameBoardWrapper({
      board: MockBoard,
      gameArgs: {
        gameCode: 'chess',
        mode: GameMode.OnlineFriend,
      },
    });
    const wrapper = Enzyme.mount(<Board isConnected={false} G={{ pgn: '' }} ctx={{}} />);
    expect(wrapper.html()).toContain('Connection lost');
  });
});
