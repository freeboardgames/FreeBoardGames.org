import * as React from 'react';
import { grey, red, blue } from '@material-ui/core/colors';

interface IShapeProps {
  x: number;
  y: number;
}

const diskRadius = 0.375;
const strokeWidth = 0.05;

export const EmptyDisk = (props: any) => {
  return (
    <circle
      key={`empty_circle${props.x},${props.y}`}
      cx={props.x + 0.5}
      cy={props.y + 0.5}
      r={diskRadius}
      strokeWidth={strokeWidth}
      stroke={grey[50]}
      onClick={props.onClick}
    />
  );
};

export const CircleRed = (props: IShapeProps) => {
  return (
    <circle
      key={`green_circle${props.x},${props.y}`}
      cx={props.x + 0.5}
      cy={props.y + 0.5}
      r={diskRadius}
      fill={red[500]}
      strokeWidth={strokeWidth}
      stroke={grey[50]}
    />
  );
};

export const CircleBlue = (props: IShapeProps) => {
  return (
    <circle
      key={`blue_circle${props.x},${props.y}`}
      cx={props.x + 0.5}
      cy={props.y + 0.5}
      r={diskRadius}
      fill={blue[500]}
      strokeWidth={strokeWidth}
      stroke={grey[50]}
    />
  );
};
