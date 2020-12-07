import { IGameState } from './definitions';
import { MAX_BACKOFF_CANDIDATES } from './constants';

export function shuffleArray(array) {
  const _array = [...array];
  // for (let i = _array.length - 1; i > 0; i--) {
  //   let j = Math.floor(Math.random() * (i + 1));
  //   let temp = _array[i];
  //   _array[i] = _array[j];
  //   _array[j] = temp;
  // }
  return _array;
}

export function inferActivePlayers(G: IGameState, playerID: string) {
  // get players with one or more shoutCalls
  const shoutCallPlayers = Object.keys(G.players).filter((p) => G.players[p].shoutCount > 0 && p !== playerID);
  return [playerID, ...shoutCallPlayers].slice(0, MAX_BACKOFF_CANDIDATES);
}
