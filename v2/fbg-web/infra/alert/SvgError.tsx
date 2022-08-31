import React from "react";
const SvgError = (props: any) => (
  <svg viewBox="0 0 1 1" style={props.style}>
    <g>
      <line
        x1="0.2"
        y1="0.2"
        x2="0.8"
        y2="0.8"
        stroke="black"
        strokeWidth="0.05"
      />
      <line
        x1="0.8"
        y1="0.2"
        x2="0.2"
        y2="0.8"
        stroke="black"
        strokeWidth="0.05"
      />
    </g>
  </svg>
);

export default SvgError;
