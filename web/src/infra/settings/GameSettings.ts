export interface GameSettings {
  customization?: CustomizationGameSettings;
}

export interface CustomizationGameSettings {
  quick: unknown;
  full: unknown;
}