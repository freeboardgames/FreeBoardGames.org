import React from 'react'
import Hammer from 'react-hammerjs'

export const Checkerboard = ({width= 8, height= 8, primaryColor="#1A5612",
  secondaryColor="#F4D500", feasibleColor="#218868", feasible={},
  selected=null, selectedColor="#606060", handlePan, children}) => {
  // Handle touch and mouse events start / move / end
  let handlePanGeneric = (panType) => (evt) => {
    let e = document.getElementById('CheckerBoard');
    let eBoundingBox = e.getBoundingClientRect();
    let p = evt.changedPointers[0];
    let offsetX = p.offsetX;
    let offsetY = p.offsetY;
    if (!offsetX) {
      offsetX = evt.center.x - eBoundingBox.left;
    }
    if (!offsetY) {
      offsetY = evt.center.y - eBoundingBox.top;
    }
    evt.preventDefault();
    if (e.contains(p.target) && offsetY > 0 && offsetX > 0) {
      handlePan(panType,
        width*(offsetX/e.clientWidth),
        height*(offsetY/e.clientHeight));
    }
  };

  // Add tiles
  let rects = [];
  let key = 0;
  for (var j=0; j<height; j++) {
    for (var i=0; i<width; i++) {
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
        x={i}
        y={j}
        key={key}/>));
      key++;
    };
  };
  return (

    <Hammer onPan={handlePanGeneric('MOVE')}
      onPanStart={handlePanGeneric('SELECT')}
      onPanEnd={handlePanGeneric('RELEASE')}>
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
    </Hammer>
  );
};

export default Checkerboard
