import React from 'react'
import CheckerBoard from './CheckerBoard'
import CheckerPiece from './CheckerPiece'
import TurnHUD from '../../../TurnHUD/containers/TurnHUDContainer'

/*
selectedPiece = {
  X,
  Y,
  tempX,
  tempY
},
selectPiece(x, y),
movePiece(tempX, tempY),
releasePiece()

based on that:

feasibleSlots is calculated

*/
export const CheckerGame = ({boardState,
  selectedPiece, selectPiece, movePiece, releasePiece,
  feasibleSlots}) => {
  //Handling pan
  let handlePan = (panType, x, y) => {
    if (panType == 'SELECT') {
      var tryX = Math.floor(x);
      var tryY = Math.floor(y);
      if (boardState[tryY][tryX] != 0) {
        selectPiece(tryX, tryY);
      } else {
          tryX = Math.round(x);
          tryY = Math.round(y);
          if (boardState[tryY][tryX] != 0) {
            selectPiece(tryX, tryY);
          }
      }
    } else if (panType == 'MOVE') {
      movePiece(x,y);
    } else if (panType == 'RELEASE') {
      releasePiece();
    }
  };

  //Selected slot on the board
  let selectedSlot = null;
  if (selectedPiece) {
    selectedSlot = {x: Math.floor(selectedPiece.tempX), y: Math.floor(selectedPiece.tempY)};
    console.log(selectedPiece);
  }
  //Positioning pieces
  let pieces = [];
  let key = 0;
  for (var j =0; j<boardState.length; j++) {
    let boardState_col = boardState[j];
    for (var i=0; i<boardState_col.length; i++) {
      if (boardState_col[i] != 0) {
        let color = "red";
        if (boardState_col[i] < 0) {
          color = "#FFFFFF";
        }
        let double=false;
        if (Math.abs(boardState_col[i]) == 2) {
          double=true;
        }
        let realX = i;
        let realY = j;
        if (selectedPiece && selectedPiece.x == i && selectedPiece.y == j) {
          realX = selectedPiece.tempX-.5;
          realY = selectedPiece.tempY-.5;
        }
        pieces.push(
          (<CheckerPiece color={color} double={double} x={realX} y={realY} key={key}/>));
        key++;
      }
    }
  }
  return (
  <div>
  <TurnHUD/>
  <CheckerBoard width={boardState[0].length} height={boardState.length}
    feasible={feasibleSlots} selected={selectedSlot}
    handlePan={handlePan}>
    {pieces}
  </CheckerBoard>
  </div>
)}

TurnHUD.propTypes = {
  boardState   : React.PropTypes.array.isRequired
};

export default CheckerGame
