import HitSound from './media/hit.mp3';
import MissSound from './media/miss.mp3';

// Visible for testing only
function isSalvoUpdate(action: any): boolean {
  if (action.type !== 'UPDATE') {
    return false;
  }
  const moveLog = action.deltalog.find(
    (entry: any) => entry.action.type === 'MAKE_MOVE' &&
      entry.action.payload.type === 'salvo',
  );
  if (!moveLog) {
    return false;
  }
  return true;
}

export const getSound = (action: any): 'hit' | 'miss' | null => {
  if (!isSalvoUpdate(action)) {
    return null;
  }
  const salvos = action.state.G.salvos;
  const lastSalvo = salvos[salvos.length - 1];
  if (lastSalvo.hit) {
    return 'hit';
  } else {
    return 'miss';
  }
};
let hitSound: HTMLAudioElement;
let missSound: HTMLAudioElement;
export const SeabattleSound = (store: any) => (next: any) => (action: any) => {
  const sound = getSound(action);
  if (!hitSound) {
    hitSound = new Audio(HitSound);
  }
  if (!missSound) {
    missSound = new Audio(MissSound);
  }
  if (sound) {
    if (sound === 'hit') {
      hitSound.play();
    } else {
      missSound.play();
    }
  }
  return next(action);
};
