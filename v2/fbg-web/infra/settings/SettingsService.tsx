import { FullGameCustomizationState } from "fbg-games/gamesShared/definitions/customization";

export interface GameSettings {
  customization?: FullGameCustomizationState;
}

export interface UserSettings {
  sound?: SoundUserSettings;
  chat?: ChatUserSettings;
}

export interface SoundUserSettings {
  disableSoundEffects: boolean;
}

export interface ChatUserSettings {
  forceChatClosed: boolean;
}

export class SettingsService {
  setUserSetting<K extends keyof UserSettings>(key: K, value: UserSettings[K]) {
    localStorage.setItem(`${key}-setting`, JSON.stringify(value));
  }

  getUserSetting<K extends keyof UserSettings>(key: K): UserSettings[K] | null {
    if (typeof window === "undefined") {
      return null;
    }
    const rawItem = localStorage.getItem(`${key}-setting`);
    if (!rawItem) {
      return null;
    }
    return JSON.parse(rawItem) as UserSettings[K];
  }

  setGameSetting<K extends keyof GameSettings>(
    key: K,
    gameId: string,
    value: GameSettings[K]
  ) {
    localStorage.setItem(`${key}-${gameId}-setting`, JSON.stringify(value));
  }

  getGameSetting<K extends keyof GameSettings>(
    key: K,
    gameId: string
  ): GameSettings[K] | null {
    if (typeof window === "undefined") {
      return null;
    }
    const rawItem = localStorage.getItem(`${key}-${gameId}-setting`);
    if (!rawItem) {
      return null;
    }
    return JSON.parse(rawItem) as GameSettings[K];
  }
}

const settingsService = new SettingsService();

export const useSettingsService = () => {
  return {
    settingsService,
  };
};
