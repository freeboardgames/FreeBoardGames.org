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

// function getGridLines() {
//   let lines: any = [];

//   // add all rows
//   for (let i = 0; i < numOfRows; i++) {
//     lines.push(<line key={`line_row_${i}`} x1="0" y1={`${i}`} x2={`${numOfColumns}`} y2={`${i}`} style={lineStyle} />);
//   }

//   // add all columns
//   for (let i = 0; i < numOfColumns; i++) {
//     lines.push(<line key={`line_col_${i}`} x1={`${i}`} y1="0" x2={`${i}`} y2={`${numOfColumns}`} style={lineStyle} />);
//   }

//   return lines;
// }

// export const Lines = getGridLines();
