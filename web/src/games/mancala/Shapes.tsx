import * as React from 'react';
import { grey } from '@material-ui/core/colors';

interface IShapeProps {
  x: number;
  y: number;
  seedCount: number;
  onClick?: () => void;
}

const holeRadius = 0.4;
const strokeWidth = 0;

const SeedCount = (props: IShapeProps) => (
  <text
    x={props.x * 100 + 1.5}
    y={props.y * 100 + 4}
    textAnchor="middle"
    fontSize="24"
    stroke="#51c5cf"
    style={{ pointerEvents: 'none' }}
  >
    {props.seedCount}
  </text>
);

export const Hole = (props: IShapeProps) => (
  <g>
    <circle
      data-testid="hole"
      key={`hole${props.x},${props.y}`}
      cx={props.x * 100 + 1.5}
      cy={props.y * 100}
      r={holeRadius * 100}
      strokeWidth={strokeWidth}
      stroke={grey[50]}
      fill={grey[50]}
      onClick={props.onClick}
    />
    <SeedCount x={props.x} y={props.y} seedCount={props.seedCount} />
  </g>
);

export const Store = (props: IShapeProps) => (
  <g>
    <rect
      key={`store${props.x},${props.y}`}
      x={props.x * 100 - holeRadius * 100}
      y={props.y * 100 - holeRadius * 150}
      rx="30"
      ry="30"
      width={holeRadius * 200}
      height={holeRadius * 300}
      strokeWidth={strokeWidth}
      stroke={grey[50]}
      fill={grey[50]}
    />
    <SeedCount x={props.x} y={props.y} seedCount={props.seedCount} />
  </g>
);

export const BoardBackground = () => (
  <rect x="-50" y="-50" rx="30" ry="30" width="800" height="200" style={{ fill: '#deb887' }}></rect>
);
