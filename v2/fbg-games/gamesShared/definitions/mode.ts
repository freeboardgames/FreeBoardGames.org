export interface IGameModeInfo {
  mode: GameMode;
}
  
export enum GameMode {
  AI = 'AI',
  OnlineFriend = 'online',
  LocalFriend = 'local',
}