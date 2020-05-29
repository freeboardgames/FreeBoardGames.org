import Enzyme from 'enzyme';
import { Client } from 'boardgame.io/client';
import { SecretcodesGame } from './game';
import PlayBoard from './PlayBoard';
import { GameMode } from 'components/App/Game/GameModePicker';

function render(client: Client) {
  const state = client.store.getState();
  return Enzyme.shallow(
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
        ],
      }}
      isHost={true}
      isGameOver={false}
    />,
  );
}

describe('Secretcodes UI', () => {
  it('should highlight the last selected card.', () => {
    const client = Client({
      game: SecretcodesGame,
    });
    client.moves.startGame();
    client.moves.clueGiven();

    client.moves.chooseCard(5);
    let wrapper = render(client);

    let firstCard = wrapper.find('.card').at(5);
    let secondCard = wrapper.find('.card').at(7);
    expect(firstCard.hasClass('cardLastSelected')).toBeTruthy();
    expect(secondCard.hasClass('cardLastSelected')).toBeFalsy();

    client.moves.clueGiven();
    client.moves.chooseCard(7);
    wrapper = render(client);

    firstCard = wrapper.find('.card').at(5);
    secondCard = wrapper.find('.card').at(7);
    expect(firstCard.hasClass('cardLastSelected')).toBeFalsy();
    expect(secondCard.hasClass('cardLastSelected')).toBeTruthy();
  });
});
