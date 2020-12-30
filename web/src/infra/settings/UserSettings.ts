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
