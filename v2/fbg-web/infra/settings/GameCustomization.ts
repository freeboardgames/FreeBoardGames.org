import { CustomizationType, EMPTY_FULL_GAME_CUSTOMIZATION_STATE, FullGameCustomizationState, GameCustomizationState } from "fbg-games/gamesShared/definitions/customization";
import { GameMode } from "fbg-games/gamesShared/definitions/mode";

export function getGameCustomization(gameId: string): FullGameCustomizationState {
  const rawItem = localStorage.getItem(`customization-${gameId}-setting`);
  if (!rawItem) {
    return EMPTY_FULL_GAME_CUSTOMIZATION_STATE;
  }
  return (JSON.parse(rawItem) || EMPTY_FULL_GAME_CUSTOMIZATION_STATE);
}

export function setGameCustomization(gameId: string, mode: GameMode, type: CustomizationType, value: unknown) {
  const fullState = getGameCustomization(gameId);
  fullState[mode][type] = value;
  localStorage.setItem(`customization-${gameId}-setting`, JSON.stringify(fullState));
  return fullState;
}