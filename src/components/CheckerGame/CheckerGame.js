import React from 'react'
import CheckerBoard from '../CheckerBoard/CheckerBoard'
import CheckerPiece from '../CheckerPiece/CheckerPiece'

export const CheckerGame = () => {
  let mock_state = [[-1, 0, -1, 0, -1, 0, -1, 0],
                    [0, -1, 0, -1, 0, -1, 0, -1],
                    [-1, 0, -1, 0, -1, 0, -1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 1, 0, 1, 0, 1],
                    [1, 0, 1, 0, 1, 0, 1, 0],
                    [0, 1, 0, 1, 0, 1, 0, 1]];
  let pieces = [];
  for (var i =0; i<mock_state.length; i++) {
    let mock_state_row = mock_state[i];
    for (var j=0; j<mock_state_row.length; j++) {
      if (mock_state_row[j] != 0) {
        let color = "red";
        if (mock_state_row[j] < 0) {
          color = "#FFFFFF";
        }
        let double=false;
        if (Math.abs(mock_state_row[j]) == 2) {
          double=true;
        }
        pieces.push(
          (<CheckerPiece color={color} double={double} x={i} y={j}/>));
      }
    }
  }
  return (
  <svg style={{width: "100%", height: "100%"}} viewBox={"0 0 8 8"}>
    <CheckerBoard width="8" height="8" feasible={{4:{0:true, 2:true}}} selected={{x: 5, y:1}}/>
    {pieces}
  </svg>
)}

export default CheckerGame
