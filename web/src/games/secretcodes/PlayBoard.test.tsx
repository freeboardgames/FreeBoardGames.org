import Enzyme from 'enzyme';
import { Client } from 'boardgame.io/client';
import { SecretcodesGame } from './game';
import PlayBoard from './PlayBoard';
import { GameMode } from 'gamesShared/definitions/mode';
import { TeamColor } from './definitions';
import { chooseCard } from './util';

function render(client: Client, state: Any, gameOver = false) {
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
          { playerID: 2, name: 'baz' },
          { playerID: 3, name: 'bor' },
        ],
      }}
      isGameOver={gameOver}
    />,
  );
}

describe('Secretcodes UI', () => {
  let client;
  let state;

  beforeEach(() => {
    client = Client({
      game: SecretcodesGame,
    });
    state = client.store.getState();
    state.G.teams = [
      { color: TeamColor.Red, playersID: ['0', '1'], spymasterID: '0' },
      { color: TeamColor.Blue, playersID: ['2', '3'], spymasterID: '2' },
    ];
  });

  it('should highlight the last selected card.', () => {
    state.ctx.events = { endPhase: () => {} };
    chooseCard(state.G, state.ctx, 5);
    let wrapper = render(client, state);

    let firstCard = wrapper.find('.card').at(5);
    let secondCard = wrapper.find('.card').at(7);
    expect(firstCard.hasClass('cardLastSelected')).toBeTruthy();
    expect(secondCard.hasClass('cardLastSelected')).toBeFalsy();

    chooseCard(state.G, state.ctx, 7);
    wrapper = render(client, state);

    firstCard = wrapper.find('.card').at(5);
    secondCard = wrapper.find('.card').at(7);
    expect(firstCard.hasClass('cardLastSelected')).toBeFalsy();
    expect(secondCard.hasClass('cardLastSelected')).toBeTruthy();
  });

  it('should style revealed cards to the spymaster.', () => {
    state.ctx.currentPlayer = '0';
    state.G.cards[0].revealed = true;

    const wrapper = render(client, state);
    // Normal view
    let cards = wrapper.find('.card');
    expect(cards.at(0).hasClass('cardRevealedSpymasterView')).toBeFalsy();
    expect(cards.at(1).hasClass('cardRevealedSpymasterView')).toBeFalsy();

    // Spymaster view
    wrapper.find('.selectTeamBtn').simulate('click');
    cards = wrapper.find('.card');
    expect(cards.at(0).hasClass('cardRevealedSpymasterView')).toBeTruthy();
    expect(cards.at(1).hasClass('cardRevealedSpymasterView')).toBeFalsy();
  });

  it('should not style revealed cards to regular players.', () => {
    state.ctx.currentPlayer = '1';
    state.G.cards[0].revealed = true;

    const wrapper = render(client, state);

    wrapper.find('.card').forEach((cardNode) => expect(cardNode.hasClass('cardRevealedSpymasterView')).toBeFalsy());
  });

  it('should not style revealed cards to the spymaster at the end of the game.', () => {
    state.ctx.currentPlayer = '0';
    state.G.cards[0].revealed = true;

    const wrapper = render(client, state, /* gameOver= */ true);

    wrapper.find('.card').forEach((cardNode) => expect(cardNode.hasClass('cardRevealedSpymasterView')).toBeFalsy());
  });
});
