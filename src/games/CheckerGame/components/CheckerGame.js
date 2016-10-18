import React from 'react'
import CheckerBoard from './CheckerBoard'
import CheckerPiece from './CheckerPiece'
import './CheckerGame.scss'
import TurnHUD from '../../../TurnHUD/containers/TurnHUDContainer'

/*
*/
export const CheckerGame = ({state, sendClick}) => {
  let onClick = (x,y) => () => {
    sendClick(x,y);
  };
  //Positioning pieces
  let pieces = [];
  let key = 0;
  for (var j =0; j<state.board.length; j++) {
    let boardState_col = state.board[j];
    for (var i=0; i<boardState_col.length; i++) {
      if (boardState_col[i]) {
        let piece = boardState_col[i];
        let color = "yellow";
        if (piece.player == 0) {
          color = "white";
        }
        pieces.push(
          (<CheckerPiece color={color} double={piece.double}
            x={i} y={j} key={piece.key} onClick={onClick}/>));
        key++;
      }
    }
  }
  return (
  <div style={{backgroundColor: "black", height: "100%"}}>
  <TurnHUD/>
  <CheckerBoard
    feasible={state.feasible} selected={state.selected}
    onClick={onClick}
    key="999">
    {pieces}
  </CheckerBoard>

  </div>
)}

export default CheckerGame
