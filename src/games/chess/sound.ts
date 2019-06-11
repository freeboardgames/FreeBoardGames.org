import MoveSound from './media/move.mp3';

let sound: HTMLAudioElement;

export const playSound = () => {
  if (!sound) {
    sound = new Audio(MoveSound);
  }
  sound.play();
};
