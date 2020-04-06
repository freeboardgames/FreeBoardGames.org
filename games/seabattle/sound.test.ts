import { playSeabattleSound } from './sound';

// mock functions for HTMLMediaElement
// https://github.com/jsdom/jsdom/issues/2155#issuecomment-366703395
(window as any).HTMLMediaElement.prototype.load = () => {
  /* do nothing */
};
(window as any).HTMLMediaElement.prototype.play = jest.fn(); //  () => { /* do nothing */ };
(window as any).HTMLMediaElement.prototype.pause = () => {
  /* do nothing */
};
(window as any).HTMLMediaElement.prototype.addTextTrack = () => {
  /* do nothing */
};

test('should play hit sound', () => {
  playSeabattleSound('HIT');
  expect((window as any).HTMLMediaElement.prototype.play.mock.calls.length).toEqual(1);
});

test('should play hit sound', () => {
  playSeabattleSound('MISS');
  expect((window as any).HTMLMediaElement.prototype.play.mock.calls.length).toEqual(2);
});
