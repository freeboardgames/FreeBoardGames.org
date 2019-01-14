import * as React from "react";
const SvgMiss = (props: any) => (
  <g>
    <line 
      x1="0" 
      y1="0" 
      x2="1" 
      y2="1" 
      stroke="white"
      strokeWidth="0.05"
    />
    <line 
      x1="1" 
      y1="0" 
      x2="0" 
      y2="1" 
      stroke="white"
      strokeWidth="0.05"
    />
  </g>
);

export default SvgMiss;
