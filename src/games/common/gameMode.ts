import { IGameArgs } from 'components/App/Game/GameBoardWrapper';
import { GameMode } from 'components/App/Game/GameModePicker';

export function isLocalGame(gameArgs: IGameArgs) {
  return gameArgs && gameArgs.mode === GameMode.LocalFriend;
}

export function isOnlineGame(gameArgs: IGameArgs) {
  return gameArgs && gameArgs.mode === GameMode.OnlineFriend;
}

export function isAIGame(gameArgs: IGameArgs) {
  return gameArgs && gameArgs.mode === GameMode.AI;
}
