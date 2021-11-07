import { GAMES_MAP } from 'games';
import { GameMode } from 'gamesShared/definitions/mode';
import { TGameCode } from 'infra/types';
import { render, screen } from 'test/utils/rtl';
import { Game, IGameProps } from './Game';
import { Match } from './types';

jest.mock('boardgame.io/multiplayer');

const renderGame = (props: IGameProps) => render(<Game {...props} />);

describe('Game', () => {
  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render properly for multiplayer', async () => {
    const match = {
      __typename: 'Match' as const,
      bgioMatchId: 'fooMatch',
      bgioServerUrl: 'fooBGIOServer',
      gameCode: 'chess',
      bgioPlayerId: '0',
      bgioSecret: 'fooSecret',
      playerMemberships: [
        {
          __typename: 'MatchMembership' as const,
          user: { nickname: 'fooPlayer', id: 0, __typename: 'User' as const },
        },
      ],
    } as Match;

    renderGame({ match });

    await screen.findByText('Downloading Chess');
    await screen.findByRole('heading', { level: 6, name: /chess/i });
  });

  it('should render properly for singleplayer', async () => {
    renderGame({ gameCode: 'tictactoe' as TGameCode, mode: GameMode.LocalFriend });
    await screen.findByText('Downloading Tic-Tac-Toe');
    await screen.findByRole('heading', { level: 6, name: /tic-tac-toe/i });
  });

  it('should render properly for ai', async () => {
    renderGame({ gameCode: 'tictactoe' as TGameCode, mode: GameMode.AI });
    await screen.findByText('Downloading Tic-Tac-Toe');
    await screen.findByRole('heading', { level: 6, name: /tic-tac-toe/i });
  });

  it('should render error correctly with rejected Promise', async () => {
    jest.spyOn(GAMES_MAP.chess, 'config').mockRejectedValue(new Error('fail'));
    renderGame({ gameCode: 'chess' as TGameCode, mode: GameMode.LocalFriend });
    await screen.findByText('Failed to download Chess');
  });

  it('should render error correctly with unknown gameCode', async () => {
    renderGame({ gameCode: 'notAGame' as TGameCode, mode: GameMode.LocalFriend });
    await screen.findByText('Game Not Found');
  });

  it('should render error correctly with invalid game mode', async () => {
    renderGame({ gameCode: 'notAGame' as TGameCode, mode: 'invalid' as any });
    await screen.findByText('Game Not Found');
  });
});
