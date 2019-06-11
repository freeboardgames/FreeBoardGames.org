import MoveSound from './media/move.mp3';

export const playSound = () => {
  const sound = new Audio(MoveSound);
  sound.play();
};
