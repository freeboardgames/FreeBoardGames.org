import React, { FunctionComponent } from 'react';
import { ICard } from './game';
import css from './CardContainer.css';
import { Dialog, DialogContent, DialogActions, Slider, DialogTitle, Button } from '@material-ui/core';

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
      stage?: string;
      phase?: string;
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
const CardContainer: FunctionComponent<ICardContainerProps> = (props: ICardContainerProps) => {
  let tileData = props.cards;
  let privacy = props.concealed && !props.turn;
  let view = props.flipped ? !privacy : privacy;
  let stage = props.collaborator.gameState.stage;
  const handleDeal = props.collaborator.handlers.handleDeal;
  const handleCrib = props.collaborator.handlers.handleCrib;
  const handleCutDeal = props.collaborator.handlers.handleCutDeal;
  const handleCutTurn = props.collaborator.handlers.handleCutTurn;
  const handlePlay = props.collaborator.handlers.handlePlay;
  const handleFlip = props.collaborator.handlers.handleFlip;
  const handleRotate = props.collaborator.handlers.handleRotateTurn;
  const [isOpen, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(19);

  const handleClick = (evt: React.MouseEvent, idx?: number) => {
    evt.preventDefault();
    evt.stopPropagation();
    if (stage) {
      switch (stage) {
        case 'cutForTurn': {
          setOpen(true);
          break;
        }
        case 'cuttingForDeal': {
          setOpen(true);
          break;
        }
        case 'putToCrib': {
          handleCrib(idx);
          break;
        }
        case 'dealHand': {
          handleDeal();
          break;
        }
        case 'thePlay': {
          handlePlay(idx);
          break;
        }
        case 'theCount': {
          if (props.name === 'Deck') {
            handleRotate();
          } else {
            handleFlip();
          }
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
    <img
      onClick={(evt) => handleClick(evt, index)}
      key={tile.id}
      className={css.fitpicture}
      src={require(`${view ? './media/png/gray_back.png' : tile.img}`)}
      alt={tile.id}
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

export default CardContainer;
