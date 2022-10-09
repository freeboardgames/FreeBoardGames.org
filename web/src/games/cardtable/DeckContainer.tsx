import React, { FunctionComponent } from 'react';
import { Pattern } from 'gamesShared/definitions/cards';
import { Card } from 'gamesShared/components/cards/Card';
import { ICard, playerEnum, stageEnum, phaseEnum } from './game';
import { Dialog, DialogContent, DialogActions, Slider, DialogTitle, Button } from '@material-ui/core';
import css from './CardContainer.module.css';
import { deckAssets, cardEnum } from './deals';

interface ICardContainerProps {
  collaborator?: {
    handlers: {
      handleFlip?: () => void;
      handleDeal?: () => void;
      handlePlay?: (idx: number) => void;
      handleCrib?: (idx: number) => void;
      handleCutDeal?: (idx: number) => void;
      handleCutTurn?: (idx: number) => void;
      handleRotateTurn: () => void;
    };
    gameState: {
      playerID?: playerEnum;
      currentDealer?: playerEnum;
      stage?: stageEnum;
      phase?: phaseEnum;
      cutTie?: boolean;
    };
  };

  cards: ICard[];
  deck?: boolean;
  flipped?: boolean;
  concealed?: boolean;
  turn?: boolean;
  name: string;
  className?: string;
}
function valuetext(value?: number) {
  return `${value}`;
}
const DeckContainer: FunctionComponent<ICardContainerProps> = (props: ICardContainerProps) => {
  let tileData = props.cards;
  let view = !props.concealed && props.turn;
  let stage: stageEnum = props.collaborator.gameState.stage;
  let name = props.name;
  let playerID: playerEnum = props.collaborator.gameState.playerID;
  let currentDealer = props.collaborator.gameState.currentDealer;

  const handleDeal = props.collaborator.handlers.handleDeal;
  const handleCutDeal = props.collaborator.handlers.handleCutDeal;
  const handleCutTurn = props.collaborator.handlers.handleCutTurn;
  const handleRotate = props.collaborator.handlers.handleRotateTurn;
  const [isOpen, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(19);

  const isClickAllowed = (parentContainer: string): boolean => {
    if (stage && parentContainer) {
      switch (stage) {
        case stageEnum.cuttingForDeal: {
          return name === 'Deck';
        }
        case stageEnum.dealHand: {
          return playerID === currentDealer;
        }
        case stageEnum.cutForTurn: {
          return name === 'Deck' && playerID != currentDealer; //&& playerID matches non-dealer
        }
        case stageEnum.theCount: {
          return name === 'Deck' && playerID === currentDealer;
        }
        default:
          return false;
      }
    }
  };

  const handleClick = (idx?: number, name?: string) => {
    let allowed: boolean = isClickAllowed(name);
    if (stage && allowed) {
      switch (stage) {
        case 'cutForTurn': {
          setOpen(true);
          break;
        }
        case 'cuttingForDeal': {
          setOpen(true);
          break;
        }
        case 'dealHand': {
          handleDeal();
          break;
        }
        case 'theCount': {
          handleRotate();
          break;
        }
        default:
          alert(`got a click at: ${idx}`);
      }
    }
  };

  const handleClose = (evt: React.MouseEvent) => {
    evt.preventDefault();
    evt.stopPropagation();
    switch (stage) {
      case 'cuttingForDeal': {
        handleCutDeal(selectedValue);
        setOpen(false);
        break;
      }
      case 'cutForTurn': {
        handleCutTurn(selectedValue);
        setOpen(false);
        break;
      }
      default: {
      }
    }
  };

  const handleCancel = (evt: React.MouseEvent) => {
    switch (stage) {
      case 'cutForTurn':
      case 'cuttingForDeal': {
        evt.stopPropagation();
        evt.preventDefault();
        setOpen(false);
        break;
      }
      default: {
      }
    }
  };

  let tileList = tileData.map((tile, index) => (
    <Card
      key={tile.id}
      click={() => handleClick(index, name)}
      type={!view ? deckAssets[cardEnum.GB] : deckAssets[tile.id]}
      pattern={Pattern.English}
      height={80}
    />
  ));
  if (props.deck) {
    tileList.length = 1;
  }

  let dialogTitle = props.collaborator.gameState.cutTie ? `Tie! Recut at ${selectedValue}` : `Cut at ${selectedValue}`;
  let closeText = props.collaborator.gameState.stage === 'cuttingForDeal' ? 'Cut for deal' : 'Cut for turn';

  return (
    <div className={css.cardcontainer}>
      <Dialog open={isOpen}>
        <DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <Slider
            defaultValue={1}
            value={selectedValue}
            getAriaValueText={valuetext}
            onChange={(event, values) => {
              event.stopPropagation();
              event.preventDefault();
              let value = typeof values === 'number' ? values : values[0];
              setSelectedValue(value);
            }}
            aria-labelledby="form-dialog-title"
            step={1}
            marks
            min={1}
            max={52}
            valueLabelDisplay="auto"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={(evt) => handleCancel(evt)}>Cancel</Button>
          <Button onClick={(evt) => handleClose(evt)}>{closeText}</Button>
        </DialogActions>
      </Dialog>
      <div className={css.grid}>{tileList}</div>
    </div>
  );
};

export default DeckContainer;
