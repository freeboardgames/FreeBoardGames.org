import { IGameArgs } from '../../App/Game/GameBoardWrapper';
import { GameMode } from '../../App/Game/GameModePicker';
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

// Visible for testing only
function isSalvoUpdate(gameArgs: IGameArgs, action: any): boolean {
  if (gameArgs.mode === GameMode.OnlineFriend) {
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
  if (action.payload.type === 'salvo') {
    return true;
  }
  return false;
}

export const getSound = (gameArgs: IGameArgs, state: any, action: any): 'hit' | 'miss' | null => {
  if (!isSalvoUpdate(gameArgs, action)) {
    return null;
  }
  const salvos = (gameArgs.mode === GameMode.OnlineFriend) ? action.state.G.salvos : state.G.salvos;
  const lastSalvo = salvos[salvos.length - 1];
  if (lastSalvo.hit) {
    return 'hit';
  } else {
    return 'miss';
  }
};

export const SeabattleSound = (gameArgs: IGameArgs) => (store: any) => (next: any) => (action: any) => {
  if (gameArgs.mode !== GameMode.OnlineFriend) {
    next(action);
  }
  const state = store.getState();
  const sound = getSound(gameArgs, state, action);
  if (sound) {
    if (sound === 'hit') {
      const hitSound = new Audio(_getRandomSound('hit'));
      hitSound.play();
    } else {
      const missSound = new Audio(_getRandomSound('miss'));
      missSound.play();
    }
  }
  return next(action);
};

const _getRandomSound = (type: 'hit' | 'miss') => {
  const arr = type === 'hit' ? HIT_SOUNDS : MISS_SOUNDS;
  return arr[Math.floor(Math.random() * arr.length)];
};
