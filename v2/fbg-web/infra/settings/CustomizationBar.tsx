import css from "./CustomizationBar.module.css";
import {
  FullGameCustomizationState,
  GameCustomizationState,
  CustomizationType,
  EMPTY_FULL_GAME_CUSTOMIZATION_STATE,
} from "fbg-games/gamesShared/definitions/customization";
import { GameMode } from "fbg-games/gamesShared/definitions/mode";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEffect, useState } from "react";
import { getGameCustomization, setGameCustomization } from "./GameCustomization";

export interface CustomizationBarProps {
  gameId: string;
  mode: GameMode;
}

const CustomizationBar = function (
  props: CustomizationBarProps
) {
  const [customizationState, setCustomizationState] = useState(EMPTY_FULL_GAME_CUSTOMIZATION_STATE);
  const [showDialog, setShowDialog] = useState(false);
  useEffect(() => {
    setCustomizationState(getGameCustomization(props.gameId));
  }, []);
  const onChange = (customizationType: CustomizationType) => (value?: unknown) => {
    const newState = setGameCustomization(props.gameId, props.mode, customizationType, value);
    setCustomizationState(newState);
  };
  const modeState: GameCustomizationState = customizationState[props.mode] || {};
  const dialog = showDialog ? (
    <FullCustomizationDialog gameId={props.gameId} fullState={modeState.full} />
  ) : null;
  return (
    <div className={css.BarWrapperWrapper}>
      {dialog}
      <div className={css.BarWrapper}>
        <QuickCustommizationBar
          gameId={props.gameId}
          mode={props.mode}
          quickState={modeState.quick}
          onChange={onChange}
        />
      </div>
      <FullCustomizationButton
        gameId={props.gameId}
        fullState={modeState.full}
        setShowDialog={setShowDialog}
      />
    </div>
  );
};

interface FullCustomizationButtonProps {
  gameId: string;
  fullState?: unknown;
  setShowDialog: (showDialog: boolean) => void;
}

const FullCustomizationButton = function (props: FullCustomizationButtonProps) {
  const customization =
    require(`fbg-games/${props.gameId}/customization`).default;
  if (!customization || !customization.FullCustomization) {
    return null;
  }
  const onClick = () => {
    props.setShowDialog(true)
  };
  return (
    <IconButton
      aria-label="Customize game"
      onClick={onClick}
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
  mode: GameMode;
  quickState?: unknown;
  onChange: (type: CustomizationType) => (value: unknown) => void;
}

const QuickCustommizationBar = function (props: QuickCustomizationBarProps) { 
  const customization = require(`fbg-games/${props.gameId}/customization`).default;
  if (!customization || !customization.QuickCustomization) {
    return null;
  }

  const { QuickCustomization } = customization; 

  const childProps = {
    mode: props.mode,
    currentValue: props.quickState,
    onChange: props.onChange(CustomizationType.QUICK),
  };

  return <QuickCustomization {...childProps} />; 
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
