import * as React from 'react';
import { numOfColumns, numOfRows } from './constants';

interface IShapeProps {
  x: number;
  y: number;
}

const boldLineStyle = {
  strokeWidth: 0.1,
};

const lineStyle = {
  stroke: 'white',
  strokeWidth: 0.025,
};

export const EmptyDisk1 = (props: IShapeProps) => {
  return (
    <g className="cross" key={`cross${props.x},${props.y}`}>
      <line
        x1={props.x + 1}
        y1={props.y}
        x2={props.x}
        y2={props.y}
        stroke="red"
        style={boldLineStyle}
      />
      ,
      <line
        x1={props.x}
        y1={props.y + 1}
        x2={props.x}
        y2={props.y}
        stroke="red"
        style={boldLineStyle}
      />
      ,
      <line
        x1={props.x}
        y1={props.y}
        x2={props.x + 1}
        y2={props.y}
        stroke="red"
        style={boldLineStyle}
      />
      ,
      <line
        x1={props.x}
        y1={props.y}
        x2={props.x}
        y2={props.y + 1}
        stroke="red"
        style={boldLineStyle}
      />
      
      
    </g>
  );
};

export const EmptyDisk = (props: IShapeProps) => {
  return (
    <circle
      key={`circle${props.x},${props.y}`}
      cx={props.x + 0.5}
      cy={props.y + 0.5}
      r=".3"
      fill="rgb(225,225,225)"
    />
  );
};

export const CircleGreen = (props: IShapeProps) => {
  return (
    <circle
      key={`circle${props.x},${props.y}`}
      cx={props.x + 0.5}
      cy={props.y + 0.5}
      r=".25"
      fill="rgb(21, 255, 0)"
      stroke="rgb(21, 255, 0)"
      style={boldLineStyle}
    />
  );
};

export const CircleBlue = (props: IShapeProps) => {
  return (
    <circle
      key={`circle${props.x},${props.y}`}
      cx={props.x + 0.5}
      cy={props.y + 0.5}
      r=".25"
      fill="rgb(80, 80, 253)"
      stroke="rgb(80, 80, 253)"
      style={boldLineStyle}
    />
  );
};

function getGridLines() {
  let lines: any = []; 

  // add all rows 
  for (let i = 0; i < numOfRows; i++) {
    lines.push(<line key={`line_row_${i}`} x1="0" y1={`${i}`} x2={`${numOfColumns}`} y2={`${i}`} style={lineStyle} />);
  }

  // add all columns 
  for (let i = 0; i < numOfColumns; i++) {
    lines.push(<line key={`line_col_${i}`} x1={`${i}`} y1="0" x2={`${i}`} y2={`${numOfColumns}`} style={lineStyle} />);
  }

  return lines;
}

export const Lines = getGridLines();

