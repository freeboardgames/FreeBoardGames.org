import React from 'react'
import CheckerBoard from '../CheckerBoard/CheckerBoard'
import CheckerPiece from '../CheckerPiece/CheckerPiece'
import TurnHUD from '../TurnHUD/TurnHUD'

export const CheckerGame = () => {
  let mock_state = [[-1, 0, -1, 0, -1, 0, -1, 0],
                    [0, -1, 0, -1, 0, -1, 0, -1],
                    [-1, 0, -1, 0, -1, 0, -1, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 1, 0, 1, 0, 1, 0, 1],
                    [1, 0, 1, 0, 2, 0, 1, 0],
                    [0, 1, 0, 1, 0, 1, 0, 1]];
  let pieces = [];
  let key = 0;
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
          (<CheckerPiece color={color} double={double} x={i} y={j} key={key}/>));
        key++;
      }
    }
  }
  return (
  <div>
  <TurnHUD playerName="felizardo" playerColor="red" action="MOVE" isUserTurn="true" />
  <CheckerBoard width="8" height="8" feasible={{4:{0:true, 2:true}}} selected={{x: 5, y:1}}>
    {pieces}
  </CheckerBoard>
  </div>
)}

export default CheckerGame
