import { IGameArgs } from '../../App/Game/GameBoardWrapper';
import { GameMode } from '../../App/Game/GameModePicker';
import HitSound from './media/hit.mp3';
import MissSound from './media/miss.mp3';

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
let hitSound: HTMLAudioElement;
let missSound: HTMLAudioElement;
export const SeabattleSound = (gameArgs: IGameArgs) => (store: any) => (next: any) => (action: any) => {
  if (gameArgs.mode !== GameMode.OnlineFriend) {
    next(action);
  }
  const state = store.getState();
  const sound = getSound(gameArgs, state, action);
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
