import React from 'react'

export const Checkerboard = ({width= 8, height= 8, primaryColor="#1A5612",
  secondaryColor="#F4D500", feasibleColor="green", feasible={},
  selected=null, selectedColor="blue", onClick,children}) => {

  // Add tiles
  let rects = [];
  let key = 0;
  for (var j=0; j<height; j++) {
    for (var i=0; i<width; i++) {
      let color = secondaryColor;
      if ((i+j)%2 == 0) {
        color = primaryColor;
      }
      for (let k in feasible) {
        let f = feasible[k];
        if (f.x == i && f.y == j) {
          color = feasibleColor;
        }
      }
      if (selected && selected.x == i && selected.y == j) {
        color = selectedColor;
      }
      rects.push((<rect
        height="1"
        style={{fill: color}}
        width="1"
        x={i}
        y={j}
        key={key}
        onClick={onClick(i,j)}/>));
      key++;
    };
  };
  return (
    <svg style={{width: "100%", position: "fixed",
    left: "0px", right:"0px", bottom: "0px",
    maxWidth: "500px", marginLeft: "auto", marginRight: "auto"}}
    viewBox={"0 0 8 8"}
    id="CheckerBoard">
      <g>
        {rects}
      </g>
      {children}
    </svg>
  );
};

export default Checkerboard
