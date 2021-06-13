// mock functions for HTMLMediaElement
// https://github.com/jsdom/jsdom/issues/2155#issuecomment-366703395
(window as any).HTMLMediaElement.prototype.load = () => {
  /* do nothing */
};
(window as any).HTMLMediaElement.prototype.play = () => {
  /* do nothing */
};
(window as any).HTMLMediaElement.prototype.pause = () => {
  /* do nothing */
};
(window as any).HTMLMediaElement.prototype.addTextTrack = () => {
  /* do nothing */
};
