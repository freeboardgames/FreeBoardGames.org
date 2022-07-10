import { IGameArgs } from 'fbg-games/gamesShared/definitions/game';
import { GameMode } from 'fbg-games/gamesShared/definitions/mode';

export function isLocalGame(gameArgs: IGameArgs) {
  return gameArgs && gameArgs.mode === GameMode.LocalFriend;
}

export function isOnlineGame(gameArgs: IGameArgs) {
  return gameArgs && gameArgs.mode === GameMode.OnlineFriend;
}

export function isAIGame(gameArgs: IGameArgs) {
  return gameArgs && gameArgs.mode === GameMode.AI;
}