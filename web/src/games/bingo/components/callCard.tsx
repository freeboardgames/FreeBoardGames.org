import * as React from 'react';

import { GRID_SIZE, CALL_BOX_SIZE, STROKE_WIDTH, INITIAL_WAIT_REF_NUM } from '../constants';
import commonCSS from './biComponent.module.css';

const cornerAdjustment = 1 + 1 / GRID_SIZE;

interface ICallCardProps {
  callRef: number;
  callQueue: number[];
  isSpectator: boolean;
}

export default function CallCard(props: ICallCardProps) {
  const scale = props.isSpectator ? 1.7 : 1;
  const boxSize = CALL_BOX_SIZE * scale;
  const xPos = GRID_SIZE / 2 - boxSize / 2;
  const yPos = props.isSpectator ? GRID_SIZE / 2 : 0;
  const boxMargin = 0.3;
  const animationStyle = {
    transition: '0.6s',
    transform: `rotateY(${360 * props.callRef}deg)`,
    transformOrigin: `50% 50%`,
  };
  const number = props.callQueue[props.callRef];
  const fontSize = number === INITIAL_WAIT_REF_NUM ? 0.18 : 0.45;
  const yOffset = number === INITIAL_WAIT_REF_NUM ? 0.48 : 0.67;

  return (
    <g key={'bi_call_group'}>
      <text
        key={'bi_call_text'}
        className={commonCSS.noselect}
        x={xPos + 0.5 * boxSize}
        y={yPos + yOffset * boxSize}
        fontSize={fontSize * boxSize}
        textAnchor="middle"
        fill="white"
        style={{ ...animationStyle }}
      >
        {number === INITIAL_WAIT_REF_NUM ? (
          <>
            <tspan x="50%" dy="0">
              Starting
            </tspan>
            <tspan x="50%" dy={fontSize * 2 * scale}>
              in ...
            </tspan>
          </>
        ) : (
          number
        )}
      </text>
      <rect
        id={'bi_call_rect_id'}
        key={'bi_call_rect'}
        x={xPos + boxMargin}
        y={yPos + boxMargin}
        width={boxSize - 2 * boxMargin}
        height={boxSize - 2 * boxMargin}
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
