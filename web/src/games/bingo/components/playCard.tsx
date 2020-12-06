import * as React from 'react';
import { blue, red } from '@material-ui/core/colors';

import { INumberState } from '../definitions';
import { GRID_SIZE, CALL_BOX_SIZE, STROKE_WIDTH, WILDCARD_NUM } from '../constants';
import commonCSS from './biComponent.css';

const fbgIcon = require('../media/fbg_icon.png');
const cornerAdjustment = 1 + 1 / GRID_SIZE;

interface IOneCardProps {
  number: INumberState;
  onNumberClicked: (number: INumberState) => void;
}

function OneCard(props: IOneCardProps) {
  const { number } = props;
  const xPos = Math.floor(number.id / GRID_SIZE);
  const yPos = number.id % GRID_SIZE;
  const boxMargin = STROKE_WIDTH;
  const imageScale = 0.2;
  const isWildcard = number.value === WILDCARD_NUM;

  return (
    <g
      key={`bi_card_group_${number.id}`}
      data-testid={`bi-card-group-${number.id}`}
      onClick={() => {
        if (!isWildcard) {
          props.onNumberClicked(number);
        }
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
      {isWildcard ? (
        <image
          key={`bi_wildcard_image`}
          x={xPos + imageScale}
          y={yPos + imageScale + CALL_BOX_SIZE}
          width={1 - 2 * imageScale}
          height={1 - 2 * imageScale}
          href={fbgIcon}
        />
      ) : (
        <text
          key={`bi_card_text_${number.id}`}
          className={commonCSS.noselect}
          x={xPos + 0.5}
          y={yPos + 0.68 + CALL_BOX_SIZE}
          fontSize={0.45}
          textAnchor="middle"
          fill="white"
        >
          {number.value}
        </text>
      )}
    </g>
  );
}

interface IPlayCardProps {
  numbers: INumberState[];
  onNumberClicked: (number: INumberState) => void;
}

export default function PlayCard(props: IPlayCardProps) {
  return (
    <>
      {props.numbers.map((n, idx) => (
        <OneCard key={`bi_card_${idx}`} number={n} onNumberClicked={props.onNumberClicked} />
      ))}
    </>
  );
}
