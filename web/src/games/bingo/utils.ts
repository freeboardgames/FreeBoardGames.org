import { IGameState } from './definitions';
import { MAX_BACKOFF_CANDIDATES } from './constants';

export function shuffleArray(array) {
  const _array = [...array];
  for (let i = _array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = _array[i];
    _array[i] = _array[j];
    _array[j] = temp;
  }
  return _array;
}

export function inferActivePlayers(G: IGameState, playerID: string) {
  // get players with one or more shoutCalls
  const shoutCallPlayers = Object.keys(G.players).filter((p) => G.players[p].shoutCount > 0 && p !== playerID);
  return [playerID, ...shoutCallPlayers].slice(0, MAX_BACKOFF_CANDIDATES);
}

function _sessionStorageHelper(action: string, matchCode: string, key: string, value: any = null) {
  if (typeof window === 'undefined') {
    return null;
  }
  const storeKey = 'bingoLocalStore';
  let storeValue = JSON.parse(sessionStorage.getItem(storeKey)) || {};
  if (storeValue.matchCode !== matchCode) {
    storeValue = {};
  }
  if (action === 'get') {
    return storeValue[key];
  }
  if (action === 'set') {
    storeValue = { ...storeValue, matchCode, [key]: value };
    sessionStorage.setItem(storeKey, JSON.stringify(storeValue));
    return true;
  }
}

export function getFromSessionStore(matchCode: string, key: string) {
  return _sessionStorageHelper('get', matchCode, key);
}

export function setInSessionStore(matchCode: string, key: string, value: any) {
  return _sessionStorageHelper('set', matchCode, key, value);
}
