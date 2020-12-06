import * as React from 'react';

import { GRID_SIZE, CALL_BOX_SIZE, STROKE_WIDTH, WAIT_MSG_NUMBER } from '../constants';
import commonCSS from './biComponent.css';

const cornerAdjustment = 1 + 1 / GRID_SIZE;

interface ICallCardProps {
  callRef: number;
  callQueue: number[];
}

export default function CallCard(props: ICallCardProps) {
  const xPos = GRID_SIZE / 2 - CALL_BOX_SIZE / 2;
  const yPos = 0;
  const boxMargin = 0.3;
  const animationStyle = {
    transition: '0.6s',
    transform: `rotateY(${360 * props.callRef}deg)`,
    transformOrigin: `50% 50%`,
  };
  const number = props.callQueue[props.callRef];
  const fontSize = number === WAIT_MSG_NUMBER ? 0.2 : 0.45;
  const yOffset = number === WAIT_MSG_NUMBER ? 0.6 : 0.67;

  return (
    <g key={'bi_call_group'}>
      <text
        key={'bi_call_text'}
        className={commonCSS.noselect}
        x={xPos + 0.5 * CALL_BOX_SIZE}
        y={yPos + yOffset * CALL_BOX_SIZE}
        fontSize={fontSize * CALL_BOX_SIZE}
        textAnchor="middle"
        fill="white"
        style={{ ...animationStyle }}
      >
        {number === WAIT_MSG_NUMBER ? 'Wait...' : number}
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
