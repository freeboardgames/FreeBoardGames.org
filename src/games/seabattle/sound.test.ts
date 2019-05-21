import { expect } from 'chai';
import { playSeabattleSound } from './sound';
import { GameMode } from '../../App/Game/GameModePicker';

// mock functions for HTMLMediaElement
// https://github.com/jsdom/jsdom/issues/2155#issuecomment-366703395
(window as any).HTMLMediaElement.prototype.load = () => { /* do nothing */ };
(window as any).HTMLMediaElement.prototype.play = jest.fn();  //  () => { /* do nothing */ };
(window as any).HTMLMediaElement.prototype.pause = () => { /* do nothing */ };
(window as any).HTMLMediaElement.prototype.addTextTrack = () => { /* do nothing */ };

const gameArgsOnline = {
  gameCode: 'seabattle',
  mode: GameMode.OnlineFriend,
  matchCode: 'foo',
  playerID: '0',
};

const gameArgsAI = { ...gameArgsOnline, mode: GameMode.AI };
const mockStateFn = jest.fn();
const mockStore = { getState: mockStateFn };

test('should play hit sound', () => {
  playSeabattleSound('HIT');
  expect((window as any).HTMLMediaElement.prototype.play.mock.calls.length).to.equal(1);
});

test('should play hit sound', () => {
  playSeabattleSound('MISS');
  expect((window as any).HTMLMediaElement.prototype.play.mock.calls.length).to.equal(2);
});
