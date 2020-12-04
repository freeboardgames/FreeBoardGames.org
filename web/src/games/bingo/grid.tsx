import * as React from 'react';

import { INumberState } from './definitions';

const GRID_SIZE = 5;
const CALL_BOX_SIZE = 2;
const STROKE_WIDTH = 0.125 / GRID_SIZE;
const cornerAdjustment = 1 + 1 / GRID_SIZE;
// const TIME_OUT = 7;
// const TIME_BUFF = 1.5;

interface ICountdownProps {
  // yPos: number;
  // timeTef: number;
  // callOnTimeout: () => void;
}

class Countdown extends React.Component<ICountdownProps, any> {
  constructor(props: ICountdownProps) {
    super(props);
    this.state = {
      timeLeft: 5,
    };
  }

  render() {
    setTimeout(() => {
      this.setState({ timeLeft: this.state.timeLeft - 1 });
    }, 1000);

    return (
      <text
        key={`bi_count_down`}
        x={GRID_SIZE - 1}
        y={0.25 + CALL_BOX_SIZE / 2}
        fontSize={0.45}
        textAnchor="middle"
        fill="white"
      >
        {this.state.timeLeft}
      </text>
    );
  }
}

interface ICallCard {
  callRef: number;
  callQueue: number[];
}

function CallCard(props: ICallCard) {
  const xPos = GRID_SIZE / 2 - CALL_BOX_SIZE / 2;
  const yPos = 0;
  const boxMargin = 0.3;
  const animationStyle = {
    // transition: '0.6s',
    // transform: `rotateY(${props.number.state === ECardState.HIDDEN ? -180 : 0}deg)`,
    // transformOrigin: `${((xPos + 0.5) / GRID_SIZE) * 100}% 50%`,
  };

  return (
    <g key={'bi_call_group'}>
      <text
        key={'bi_call_text'}
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
  onCardClick: (number) => void;
}

function GridCard(props: IGridCardProps) {
  const xPos = Math.floor(props.number.id / GRID_SIZE);
  const yPos = props.number.id % GRID_SIZE;
  const boxMargin = STROKE_WIDTH;

  return (
    <g
      key={`bi_card_group_${props.number.id}`}
      data-testid={`bi-card-group-${props.number.id}`}
      onClick={() => {
        props.onCardClick(props.number.id);
      }}
    >
      <text
        key={`bi_card_text_${props.number.id}`}
        x={xPos + 0.5}
        y={yPos + 0.68 + CALL_BOX_SIZE}
        fontSize={0.45}
        textAnchor="middle"
        fill="white"
      >
        {props.number.value}
      </text>
      <rect
        id={`bi_card_rect_id_${props.number.id}`}
        key={`bi_card_rect_${props.number.id}`}
        x={xPos + boxMargin}
        y={yPos + boxMargin + CALL_BOX_SIZE}
        width={1 - 2 * boxMargin}
        height={1 - 2 * boxMargin}
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

interface IGameGridProps extends ICallCard {
  numbers: INumberState[];
  onCardClick: (number) => void;
}

export default function GameGrid(props: IGameGridProps) {
  return (
    <svg width="100%" height="140%" viewBox={`0 0 ${GRID_SIZE} ${GRID_SIZE + CALL_BOX_SIZE}`}>
      <Countdown />
      <CallCard callQueue={props.callQueue} callRef={props.callRef} />
      {props.numbers.map((n, idx) => (
        <GridCard key={`bi_card_${idx}`} number={n} onCardClick={props.onCardClick} />
      ))}
    </svg>
  );
}
