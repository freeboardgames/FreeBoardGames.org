import HitSound1 from './media/hit1.mp3';
import HitSound2 from './media/hit2.mp3';
import HitSound3 from './media/hit3.mp3';
import MissSound1 from './media/miss1.mp3';
import MissSound2 from './media/miss2.mp3';
import MissSound3 from './media/miss3.mp3';
import MissSound4 from './media/miss4.mp3';
import MissSound5 from './media/miss5.mp3';

const HIT_SOUNDS = [HitSound1, HitSound2, HitSound3];
const MISS_SOUNDS = [MissSound1, MissSound2, MissSound3, MissSound4, MissSound5];

export const playSeabattleSound = (sound: string) => {
  if (sound === 'HIT') {
    const hitSound = new Audio(_getRandomSound('hit'));
    hitSound.play();
  } else if (sound === 'MISS') {
    const missSound = new Audio(_getRandomSound('miss'));
    missSound.play();
  }
};

const _getRandomSound = (type: 'hit' | 'miss') => {
  const arr = type === 'hit' ? HIT_SOUNDS : MISS_SOUNDS;
  return arr[(Math.random() * arr.length) << 0];
};
