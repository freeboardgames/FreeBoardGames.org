import * as React from 'react';
import { red, blue } from '@material-ui/core/colors';

import { INumberState } from './definitions';
import { GRID_SIZE, TIME_OUT, TIME_BUFF } from './constants';
import gridCSS from './grid.css';

const STROKE_WIDTH = 0.125 / GRID_SIZE;
const cornerAdjustment = 1 + 1 / GRID_SIZE;
const CALL_BOX_SIZE = 2;

interface ICountdownProps {
  timeRef: number;
  callOnTimeout: () => void;
}

interface ICountdownState {
  timeLeft: number;
}

class Countdown extends React.Component<ICountdownProps, ICountdownState> {
  constructor(props: ICountdownProps) {
    super(props);
    this.state = { timeLeft: this._getTimeLeft() };
  }

  _getTimeLeft = () => {
    let timeLeft = (TIME_OUT + TIME_BUFF) * 1000 - (Date.now() - this.props.timeRef);
    timeLeft = Math.floor((timeLeft >= 0 ? timeLeft : 0) / 1000);
    return timeLeft;
  };

  _fireTimer = () => {
    const timeLeft = this._getTimeLeft();
    if (timeLeft > 0) {
      setTimeout(() => {
        this.setState({ timeLeft });
      }, 200);
    } else {
      this.props.callOnTimeout();
    }
  };

  componentDidMount() {
    this._fireTimer();
  }

  componentDidUpdate() {
    this._fireTimer();
  }

  render() {
    return [1, GRID_SIZE - 1].map((xPos, idx) => (
      <text
        key={`bi_count_down_${idx}`}
        className={gridCSS.noselect}
        x={xPos}
        y={0.25 + CALL_BOX_SIZE / 2}
        fontSize={0.45}
        textAnchor="middle"
        fill="white"
      >
        {this.state.timeLeft}
      </text>
    ));
  }
}

interface ICallCardProps {
  callRef: number;
  callQueue: number[];
}

function CallCard(props: ICallCardProps) {
  const xPos = GRID_SIZE / 2 - CALL_BOX_SIZE / 2;
  const yPos = 0;
  const boxMargin = 0.3;
  const animationStyle = {
    transition: '0.6s',
    transform: `rotateY(${360 * props.callRef}deg)`,
    transformOrigin: `${50}% 50%`,
  };

  return (
    <g key={'bi_call_group'}>
      <text
        key={'bi_call_text'}
        className={gridCSS.noselect}
        x={xPos + 0.5 * CALL_BOX_SIZE}
        y={yPos + 0.67 * CALL_BOX_SIZE}
        fontSize={0.45 * CALL_BOX_SIZE}
        textAnchor="middle"
        fill="white"
        style={{ ...animationStyle }}
      >
        {props.callQueue[props.callRef]}
      </text>
      <rect
        id={'bi_call_rect_id'}
        key={'bi_call_rect'}
        x={xPos + boxMargin}
        y={yPos + boxMargin}
        width={CALL_BOX_SIZE - 2 * boxMargin}
        height={CALL_BOX_SIZE - 2 * boxMargin}
        rx={STROKE_WIDTH * cornerAdjustment}
        style={{
          stroke: 'white',
          strokeWidth: STROKE_WIDTH,
          fillOpacity: 0,
        }}
      />
    </g>
  );
}

interface IGridCardProps {
  number: INumberState;
  onNumberClicked: (number: INumberState) => void;
}

function GridCard(props: IGridCardProps) {
  const { number } = props;
  const xPos = Math.floor(number.id / GRID_SIZE);
  const yPos = number.id % GRID_SIZE;
  const boxMargin = STROKE_WIDTH;

  return (
    <g
      key={`bi_card_group_${number.id}`}
      data-testid={`bi-card-group-${number.id}`}
      onClick={() => {
        props.onNumberClicked(number);
      }}
    >
      <rect
        id={`bi_card_rect_id_${number.id}`}
        key={`bi_card_rect_${number.id}`}
        x={xPos + boxMargin}
        y={yPos + boxMargin + CALL_BOX_SIZE}
        width={1 - 2 * boxMargin}
        height={1 - 2 * boxMargin}
        rx={STROKE_WIDTH * cornerAdjustment}
        style={{
          stroke: 'white',
          strokeWidth: STROKE_WIDTH,
          fill: number.missed ? red['A200'] : number.marked ? blue[500] : 'white',
          fillOpacity: number.missed ? 0.75 : number.marked ? 0.82 : 0,
        }}
      />
      <text
        key={`bi_card_text_${number.id}`}
        className={gridCSS.noselect}
        x={xPos + 0.5}
        y={yPos + 0.68 + CALL_BOX_SIZE}
        fontSize={0.45}
        textAnchor="middle"
        fill="white"
      >
        {number.value}
      </text>
    </g>
  );
}

interface IGameGridProps extends ICountdownProps, ICallCardProps {
  size: number;
  numbers: INumberState[];
  onNumberClicked: (number: INumberState) => void;
}

export default function GameGrid(props: IGameGridProps) {
  return (
    <svg
      width={`${props.size * 100}%`}
      height={`${props.size * 140}%`}
      viewBox={`0 0 ${GRID_SIZE} ${GRID_SIZE + CALL_BOX_SIZE}`}
      style={{ backgroundColor: 'black', display: 'block', margin: 'auto' }}
    >
      <Countdown key={`bi_counter_${props.timeRef}`} timeRef={props.timeRef} callOnTimeout={props.callOnTimeout} />
      <CallCard callQueue={props.callQueue} callRef={props.callRef} />
      {props.numbers.map((n, idx) => (
        <GridCard key={`bi_card_${idx}`} number={n} onNumberClicked={props.onNumberClicked} />
      ))}
    </svg>
  );
}
