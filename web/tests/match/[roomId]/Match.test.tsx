import Enzyme from 'enzyme';
import { Match } from '../../../src/pages/match/[matchId]/Match';
import { LobbyService } from 'components/App/Lobby/LobbyService';
import MessagePage from 'components/App/MessagePageClass';
import Game from 'components/App/Game/Game';

jest.mock('components/App/Lobby/LobbyService');

it('renders loading page', async () => {
  let mockRouter: any = { query: { matchId: 'fooMatch' } };
  let mockDispatch: any = jest.fn();
  (LobbyService.getMatch as jest.Mock).mockResolvedValue('fooMatch');

  const wrapper = Enzyme.shallow(<Match router={mockRouter} dispatch={mockDispatch} />);

  const messagePage = wrapper.find(MessagePage);
  expect(messagePage.length).toBe(1);
  expect(messagePage.prop('message')).toEqual('Loading...');

  const flushPromises = () => new Promise(setImmediate);
  await flushPromises();

  wrapper.update();
});

it('renders game', async () => {
  let mockRouter: any = { query: { matchId: 'fooMatch' } };
  let mockDispatch: any = jest.fn();
  (LobbyService.getMatch as jest.Mock).mockResolvedValue({ match: 'fooMatch' });

  const wrapper = Enzyme.shallow(<Match router={mockRouter} dispatch={mockDispatch} />);

  const messagePage = wrapper.find(MessagePage);
  expect(messagePage.length).toBe(1);
  expect(messagePage.prop('message')).toEqual('Loading...');

  const flushPromises = () => new Promise(setImmediate);
  await flushPromises();

  wrapper.update();

  const game = wrapper.find(Game);
  expect(game.length).toBe(1);
  expect(game.prop('match')).toEqual('fooMatch');
});

it('renders 404', async () => {
  let mockRouter: any = { query: { matchId: 'fooMatch' } };
  let mockDispatch: any = jest.fn();
  (LobbyService.getMatch as jest.Mock).mockRejectedValue({ response: { notFound: true } });

  const wrapper = Enzyme.shallow(<Match router={mockRouter} dispatch={mockDispatch} />);

  const messagePage = wrapper.find(MessagePage);
  expect(messagePage.length).toBe(1);
  expect(messagePage.prop('message')).toEqual('Loading...');

  const flushPromises = () => new Promise(setImmediate);
  await flushPromises();

  wrapper.update();

  const messagePage2 = wrapper.find(MessagePage);

  expect(messagePage2.prop('message')).toEqual('Match not found.');
});

it('renders error', async () => {
  let mockRouter: any = { query: { matchId: 'fooMatch' } };
  let mockDispatch: any = jest.fn();
  (LobbyService.getMatch as jest.Mock).mockRejectedValue({});

  const wrapper = Enzyme.shallow(<Match router={mockRouter} dispatch={mockDispatch} />);

  const messagePage = wrapper.find(MessagePage);
  expect(messagePage.length).toBe(1);
  expect(messagePage.prop('message')).toEqual('Loading...');

  const flushPromises = () => new Promise(setImmediate);
  await flushPromises();

  wrapper.update();

  const messagePage2 = wrapper.find(MessagePage);

  expect(messagePage2.prop('message')).toEqual('Could not load match.');
});
