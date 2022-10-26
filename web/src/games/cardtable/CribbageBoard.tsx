import React, { FunctionComponent } from 'react';
import css from './CribbageBoard.module.css';
import { IScore, IScoreKeeper } from './game';
import Dialog from '@material-ui/core/Dialog';
import Slider from '@material-ui/core/Slider';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';

interface PegholeProps {
  idx: number;
  className: string;
  score: IScore;
  opponent: boolean;
}

export function Peghole(props: PegholeProps) {
  let clazz = css.Peghole;

  const isPegged = (idx: number) => {
    let front = props.score.front < 61 ? props.score.front : props.score.front % 60 === 0 ? 60 : props.score.front % 60;
    let back = props.score.back < 61 ? props.score.back : props.score.back % 60 === 0 ? 60 : props.score.back % 60;
    return front === idx || back === idx;
  };

  let pegged = isPegged(props.idx);

  if (pegged) {
    clazz = props.opponent ? css.Peghole_opegged : css.Peghole_pegged;
  }

  return <div className={clazz} />;
}

type PeggroupProps = {
  start: number;
  className: string;
  score: IScore;
  opponent: boolean;
};

const Peggroup: FunctionComponent<PeggroupProps> = ({ start, className, score, opponent }: PeggroupProps) => {
  return (
    <div className={className}>
      <Peghole className={css.Peghole} idx={start} score={score} opponent={opponent} />
      <Peghole className={css.Peghole} idx={start + 1} score={score} opponent={opponent} />
      <Peghole className={css.Peghole} idx={start + 2} score={score} opponent={opponent} />
      <Peghole className={css.Peghole} idx={start + 3} score={score} opponent={opponent} />
      <Peghole className={css.Peghole} idx={start + 4} score={score} opponent={opponent} />
    </div>
  );
};

type PegstreetProps = {
  start: number;
  className: string;
  score: IScore;
  opponent: boolean;
};

const Pegstreet: FunctionComponent<PeggroupProps> = ({ start, className, score, opponent }: PegstreetProps) => {
  return start < 31 ? (
    <div className={className}>
      <Peggroup className={css.Peggroup_upstreet} start={start} score={score} opponent={opponent} />
      <Peggroup className={css.Peggroup_upstreet} start={start + 5} score={score} opponent={opponent} />
      <Peggroup className={css.Peggroup_upstreet} start={start + 10} score={score} opponent={opponent} />
      <Peggroup className={css.Peggroup_upstreet} start={start + 15} score={score} opponent={opponent} />
      <Peggroup className={css.Peggroup_upstreet} start={start + 20} score={score} opponent={opponent} />
      <Peggroup className={css.Peggroup_upstreet} start={start + 25} score={score} opponent={opponent} />
    </div>
  ) : (
    <div className={className}>
      <Peggroup className={css.Peggroup} start={start} score={score} opponent={opponent} />
      <Peggroup className={css.Peggroup} start={start + 5} score={score} opponent={opponent} />
      <Peggroup className={css.Peggroup} start={start + 10} score={score} opponent={opponent} />
      <Peggroup className={css.Peggroup} start={start + 15} score={score} opponent={opponent} />
      <Peggroup className={css.Peggroup} start={start + 20} score={score} opponent={opponent} />
      <Peggroup className={css.Peggroup} start={start + 25} score={score} opponent={opponent} />
    </div>
  );
};

type HomestreetProps = {
  start: number;
  className: string;
  score: IScore;
  opponent: boolean;
};

const Homestreet: FunctionComponent<HomestreetProps> = ({ start, className, score, opponent }: HomestreetProps) => {
  //alert(`Homestreet ${ JSON.stringify(score, null, 4) }`);

  let homeHole =
    start < 31 ? (
      <Peghole className={`${css.Peghole} ${css.tooltip} home`} opponent={opponent} idx={0} score={score} />
    ) : (
      <Peghole className={`${css.Peghole} ${css.tooltip}`} opponent={opponent} score={score} idx={-1} />
    );

  return (
    <div className={css.Homestreet}>
      <Pegstreet start={start} className={className} score={score} opponent={opponent} />
      {homeHole}
    </div>
  );
};

type CribbagePlayerProps = {
  start: number;
  invert?: boolean;
  score: IScore;
  opponent?: boolean;
};

const CribbagePlayer: FunctionComponent<CribbagePlayerProps> = ({
  start,
  invert,
  score,
  opponent,
}: CribbagePlayerProps) => {
  let clazz = invert ? css.CribbagePlayer_inverted : css.CribbagePlayer;

  return (
    <div className={clazz}>
      <Homestreet className={css.Pegstreet_upstreet} start={start} score={score} opponent={opponent} />
      <Homestreet start={start + 30} className={css.Pegstreet} score={score} opponent={opponent} />
    </div>
  );
};

type CribbageBoardProps = {
  score: IScoreKeeper;
  updateScore?: (idx: number) => void;
};

const CribbageBoard: FunctionComponent<CribbageBoardProps> = ({
  score: { north, south },
  updateScore,
}: CribbageBoardProps) => {
  const divRef = React.useRef();
  const [cribOpen, setCribOpen] = React.useState(false);
  const [isOpen, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(1);

  function handleCribToggle(): void {
    setCribOpen(!cribOpen);
  }
  function handlePegPoints(idx: number): void {
    updateScore(idx);
    //setCribOpen(false);
    //setAnchorEl(null);
  }

  function handleClickOpen(evt: React.MouseEvent) {
    evt.stopPropagation();
    evt.preventDefault();
    setOpen(true);
  }

  function handleCancel(evt: React.MouseEvent) {
    evt.stopPropagation();
    evt.preventDefault();
    setOpen(false);
  }

  function handleClose(evt: React.MouseEvent) {
    evt.stopPropagation();
    evt.preventDefault();
    setOpen(false);
    handlePegPoints(selectedValue);
  }

  function valuetext(value?: number) {
    return `${value}`;
  }

  const AnchorButton = (
    <div>
      <Button id="anchor-button" onClick={handleCribToggle} ref={divRef}>
        PEG
      </Button>
    </div>
  );

  return (
    <div className={css.CribDrawer}>
      <React.Fragment>
        {AnchorButton}
        <Popover
          open={cribOpen}
          onClose={handleCribToggle}
          anchorReference="anchorEl"
          anchorOrigin={{ horizontal: 'center', vertical: 'center' }}
          transformOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        >
          <div
            className={css.CribbageBoard}
            onClick={(evt) => {
              handleClickOpen(evt);
            }}
          >
            <CribbagePlayer start={1} score={south} opponent={true} />
            <CribbagePlayer start={1} invert={true} score={north} />
            <Dialog open={isOpen}>
              <DialogTitle id="form-dialog-title">{`Peg ${selectedValue}`}</DialogTitle>
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
                  max={+29}
                  valueLabelDisplay="auto"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={(evt) => handleCancel(evt)}>Cancel</Button>
                <Button onClick={(evt) => handleClose(evt)}>Peg Points</Button>
              </DialogActions>
            </Dialog>
          </div>
        </Popover>
      </React.Fragment>
    </div>
  );
};

export default CribbageBoard;
