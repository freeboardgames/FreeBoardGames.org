import React from 'react';
import { GameSettings } from './GameSettings';
import { UserSettings } from './UserSettings';
import { GAMES_MAP } from 'games';

export class SettingsService {
  setUserSetting<K extends keyof UserSettings>(key: K, value: UserSettings[K]) {
    localStorage.setItem(`${key}-setting`, JSON.stringify(value));
  }

  getUserSetting<K extends keyof UserSettings>(key: K): UserSettings[K] {
    return JSON.parse(localStorage.getItem(`${key}-setting`)) as UserSettings[K];
  }

  setGameSetting<K extends keyof GameSettings>(key: K, gameCode: keyof typeof GAMES_MAP, value: GameSettings[K]) {
    localStorage.setItem(`${key}-${gameCode}-setting`, JSON.stringify(value));
  }

  getGameSetting<K extends keyof GameSettings>(key: K, gameCode: keyof typeof GAMES_MAP): GameSettings[K] {
    return JSON.parse(localStorage.getItem(`${key}-${gameCode}-setting`)) as GameSettings[K];
  }
}

const settingsService = new SettingsService();

export const withSettingsService = (WrappedComponent: any) => (props) => (
  <WrappedComponent settingsService={settingsService} {...props} />
);
