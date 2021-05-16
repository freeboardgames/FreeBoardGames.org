jest.mock('infra/common/services/LobbyService');
jest.mock('infra/common/components/auth/NicknameRequired', () => ({ children }) => children);
jest.mock('infra/game/Game', () => () => <div>Mocked game</div>);
jest.mock('infra/i18n/hocs/withRouter', () => ({
  withRouter: (C) => (p) => {
    const props = { ...p, router: { query: { matchId: 'fooMatch' } }, dispatch: jest.fn() };
    return <C {...props} />;
  },
}));

import Match from './Match';
import { LobbyService } from 'infra/common/services/LobbyService';
import { mocked } from 'ts-jest/utils';
import { mock } from 'jest-mock-extended';
import { makeRender, screen, waitFor } from 'test/utils/rtl';

const render = makeRender({ dispatch: jest.fn() });

it('renders loading page', async () => {
  mocked(LobbyService.getMatch).mockResolvedValue(mock());
  render(<Match />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

it('renders game', async () => {
  mocked(LobbyService.getMatch).mockResolvedValue(mock());
  render(<Match />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.queryByText('Mocked game')).toBeInTheDocument();
  });
});

it('renders 404', async () => {
  mocked(LobbyService.getMatch).mockRejectedValue({ response: { notFound: true } });
  render(<Match />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.queryByText('Match not found.')).toBeInTheDocument();
  });
});

it('renders error', async () => {
  mocked(LobbyService).getMatch.mockRejectedValue(mock());
  render(<Match />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.queryByText('Could not load match.')).toBeInTheDocument();
  });
});
