import Enzyme from 'enzyme';
import { Client } from 'boardgame.io/client';
import { SecretcodesGame } from './game';
import PlayBoard from './PlayBoard';
import { GameMode } from 'components/App/Game/GameModePicker';

let wrapper: Enzyme.ShallowWrapper;

describe('Secretcodes UI', () => {
  it('should highlight the last selected card', () => {
    const client = Client({
      game: SecretcodesGame,
    });
    client.moves.startGame();
    client.moves.clueGiven();
    client.moves.chooseCard(5);
    const state = client.store.getState();
    wrapper = Enzyme.shallow(
      <PlayBoard
        G={state.G}
        ctx={state.ctx}
        events={state.events}
        moves={client.moves}
        playerID={'0'}
        isActive={true}
        gameArgs={{
          gameCode: 'secretcodes',
          mode: GameMode.LocalFriend,
          players: [
            { playerID: 0, name: 'foo' },
            { playerID: 1, name: 'bar' },
          ]
        }}
        isHost={true}
        isGameOver={false}
      />,
    );
    const firstCard = wrapper.find('.card').at(5);

    expect(firstCard.hasClass('cardLastSelected')).toBeTruthy();
  });
});
