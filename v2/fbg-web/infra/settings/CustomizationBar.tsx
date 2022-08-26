import css from "./CustomizationBar.module.css";
import {
  GameCustomization,
  FullGameCustomizationState,
  CustomizationType,
  GameCustomizationState,
} from "fbg-games/gamesShared/definitions/customization";
import { GameMode } from "fbg-games/gamesShared/definitions/mode";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import { useSettingsService } from "./SettingsService";

export interface CustomizationBarProps {
  gameId: string;
  mode: GameMode;
}

interface CustomizationState {
  showDialog: boolean;
  customizationState: FullGameCustomizationState;
}

const CustomizationBar = function (
  props: CustomizationBarProps,
  state: CustomizationState
) {
  const { settingsService } = useSettingsService();
  const [customizationState, setState] = useState(() =>
    settingsService.getGameSetting("customization", props.gameId)
  );
  const modeState: GameCustomizationState =
    (customizationState || {})[props.mode] || {};
  const dialog = state.showDialog ? (
    <FullCustomizationDialog gameId={props.gameId} fullState={modeState.full} />
  ) : null;
  return (
    <div className={css.BarWrapperWrapper}>
      {dialog}
      <div className={css.BarWrapper}>
        <QuickCustommizationBar
          gameId={props.gameId}
          quickState={modeState.quick}
        />
      </div>
      <FullCustomizationButton
        gameId={props.gameId}
        fullState={modeState.full}
      />
    </div>
  );
};

interface FullCustomizationButtonProps {
  gameId: string;
  fullState?: unknown;
}

const FullCustomizationButton = function (props: FullCustomizationButtonProps) {
  const customization =
    require(`fbg-games/${props.gameId}/customization`).default;
  if (!customization || !customization.FullCustomization) {
    return null;
  }
  return (
    <IconButton
      aria-label="Customize game"
      // TODO
      // onClick={this.toggleFullCustomizationDialog}
      style={{ height: "48px", width: "48px", marginLeft: "auto" }}
    >
      <SettingsIcon
        style={{ color: props.fullState ? "#3f51b5" : undefined }}
      />
    </IconButton>
  );
};

interface QuickCustomizationBarProps {
  gameId: string;
  quickState?: unknown;
}

const QuickCustommizationBar = function (props: QuickCustomizationBarProps) {
  // TODO
  return null;
};

interface FullCustomizationDialogProps {
  gameId: string;
  fullState?: unknown;
}

const FullCustomizationDialog = function (props: FullCustomizationDialogProps) {
  // TODO
  return null;
};

export default CustomizationBar;
