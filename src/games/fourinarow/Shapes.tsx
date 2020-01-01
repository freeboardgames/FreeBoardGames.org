import * as React from 'react';

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
      fill="rgb(250,250,250)"
      strokeWidth={strokeWidth}
      stroke="#c4a870"
      onClick={props.onClick}
    />
  );
};

export const CircleGreen = (props: IShapeProps) => {
  return (
    <circle
      key={`green_circle${props.x},${props.y}`}
      cx={props.x + 0.5}
      cy={props.y + 0.5}
      r={diskRadius}
      fill="rgb(21, 255, 0)"
      strokeWidth={strokeWidth}
      stroke="#c4a870"
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
      fill="rgb(80, 80, 253)"
      strokeWidth={strokeWidth}
      stroke="#c4a870"
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
