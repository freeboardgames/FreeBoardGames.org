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
}

const settingsService = new SettingsService();

export const useSettingsService = () => {
  return {
    settingsService,
  };
};
