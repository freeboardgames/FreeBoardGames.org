import React from 'react';
import { GameSettings } from './GameSettings';
import { UserSettings } from './UserSettings';
import { GAMES_MAP } from 'games';

export class SettingsService {

  setUserSetting<K extends keyof UserSettings>(key: K, value: UserSettings[K]) {

  }

  getUserSetting<K extends keyof UserSettings>(key: K): UserSettings[K] {

  }

  setGameSetting<K extends keyof GameSettings>(key: K, gameCode: keyof typeof GAMES_MAP, value: GameSettings[K]) {

  }

  getGameSetting<K extends keyof GameSettings>(key: K, gameCode: keyof typeof GAMES_MAP): GameSettings[K] {

  }
}

const settingsService = new SettingsService();

export const withSettingsService = (WrappedComponent: any) => (props: unknown) => (
    <WrappedComponent 
        settingsService={settingsService} 
        {...props} 
    />
)
