import * as React from 'react';

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

export const Cross = (props: IShapeProps) => {
  return (
    <g className="cross" key={`cross${props.x},${props.y}`}>
      <line
        x1={props.x + 0.25}
        y1={props.y + 0.25}
        x2={props.x + 0.75}
        y2={props.y + 0.75}
        stroke="red"
        style={boldLineStyle}
      />
      ,
      <line
        x1={props.x + 0.75}
        y1={props.y + 0.25}
        x2={props.x + 0.25}
        y2={props.y + 0.75}
        stroke="red"
        style={boldLineStyle}
      />
    </g>
  );
};

export const Circle = (props: IShapeProps) => {
  return (
    <circle
      key={`circle${props.x},${props.y}`}
      cx={props.x + 0.5}
      cy={props.y + 0.5}
      r=".25"
      fill="none"
      stroke="lime"
      style={boldLineStyle}
    />
  );
};

export const Lines = [
  <line key="line1" x1="1" y1="0" x2="1" y2="3" style={lineStyle} />,
  <line key="line2" x1="2" y1="0" x2="2" y2="3" style={lineStyle} />,
  <line key="line3" x1="0" y1="1" x2="3" y2="1" style={lineStyle} />,
  <line key="line4" x1="0" y1="2" x2="3" y2="2" style={lineStyle} />,
  <line key="line5" x1="0" y1="1" x2="3" y2="1" style={lineStyle} />,
];
