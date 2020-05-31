export interface IGameModeInfo {
  mode: GameMode;
  extraInfo?: IGameModeExtraInfo;
}

interface IGameModeExtraInfo {
  type: string;
}

export interface IGameModeExtraInfoSlider extends IGameModeExtraInfo {
  type: 'slider';
  min: number;
  max: number;
}

export interface IGameModeExtraInfoDropdown extends IGameModeExtraInfo {
  type: 'dropdown';
  options: string[];
}

export enum GameMode {
  AI = 'AI',
  OnlineFriend = 'online',
  LocalFriend = 'local',
}