import React from 'react'
import './CheckerBoard.scss'

export const Checkerboard = ({width= 8, height= 8, primaryColor="#1A5612",
  secondaryColor="#F4D500", feasibleColor="#218868", feasible={},
  selected=null, selectedColor="#606060"}) => {
  let rects = [];
  for (var i=0; i<width; i++) {
    for (var j=0; j<height; j++) {
      let color = secondaryColor;
      if ((i+j)%2 == 0) {
        color = primaryColor;
      }
      if (i in feasible && j in feasible[i]) {
        color = feasibleColor;
      }
      if (selected && selected.x == i && selected.y == j) {
        color = selectedColor;
      }
      rects.push((<rect
        height="1"
        style={{fill: color}}
        width="1"
        x={j}
        y={i}/>));
    };
  };
  return (
    <g>
      {rects}
    </g>
  );
};

export default Checkerboard
