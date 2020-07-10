import * as React from 'react';
import { grey } from '@material-ui/core/colors';

interface IShapeProps {
  x: number;
  y: number;
}

const holeRadius = 0.4;
const strokeWidth = 0;

export const Hole = (props: any) => {
  return (
    <g>
      <circle
        key={`hole${props.x},${props.y}`}
        cx={props.x * 100 + 1.5}
        cy={props.y * 100}
        r={holeRadius * 100}
        strokeWidth={strokeWidth}
        stroke={grey[50]}
        fill={grey[50]}
        onClick={props.onclick}
      />
      <text x={props.x * 100 + 1.5} y={props.y * 100} textAnchor="middle" fontSize="24" stroke="#51c5cf">
        {props.seedCount}
      </text>
    </g>
  );
};

export const Store = (props: any) => {
  return (
    <g>
      <circle
        key={`store${props.x},${props.y}`}
        cx={props.x * 100 + 1.5}
        cy={props.y * 100}
        r={holeRadius * 100}
        strokeWidth={strokeWidth}
        stroke={grey[50]}
        fill={grey[50]}
      />
      <text x={props.x * 100 + 1.5} y={props.y * 100} textAnchor="middle" fontSize="24" stroke="#51c5cf">
        {props.seedCount}
      </text>
    </g>
  );
};
