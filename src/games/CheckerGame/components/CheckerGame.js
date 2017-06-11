import React from 'react'
import TurnatoBar from '../../../TurnatoBar/TurnatoBar'
import {Card, CardText} from 'material-ui/Card';
import CheckerBoard from './CheckerBoard'
import CheckerPiece from './CheckerPiece'
import CircularProgress from 'material-ui/CircularProgress';
import './CheckerGame.scss'
import TurnHUD from '../../../TurnHUD/containers/TurnHUDContainer'

export const CheckerGame = React.createClass({
  componentDidMount: function () {
    this.props.joinMatch(this.props.params.id)
  },
  render: function () {
    let state = this.props.state;
    let onClick = (x,y) => () => {
      this.props.sendClick(this.props.params.id, x,y, state.player);
    };
    if (state.loading) {
      return (
        <TurnatoBar>
          <Card>
            <CardText style={{textAlign: "center"}}>
              <CircularProgress size={80} thickness={5} />
            </CardText>
          </Card>
        </TurnatoBar>);
    }
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
    let winLayer = null;
    if (state.winner != null) {
      winLayer = (<div style={{position: 'absolute', left: 0, top: 0,
        right:0, height: '100%', background: 'rgba(255,255,255,.85)',
        zIndex: 9000, display: 'block', textAlign: 'center'}}>
        <div style={{transform: 'translateX(-50%) translateY(-50%)',
          left: '50%', top: '50%', position: 'absolute'}}>
          <h1>{state.players[state.winner]} WON!!!
          </h1>
          <a href="/">Go Back</a>
        </div>
      </div>)
    }
    let current_player = state.turn%2;
    return (
    <div style={{backgroundColor: "black", height: "100%"}}>
      <TurnHUD
        playerName={state.players[current_player]}
        playerColor={(current_player==0) ? 'grey' : '#CCCC00'}
        action={(current_player == state.player) ? 'YOUR TURN' : 'WAITING'}
        isUserTurn={current_player == state.player}/>
      <CheckerBoard
        feasible={state.feasible} selected={state.selected}
        onClick={onClick}
        key="999">
        {pieces}
      </CheckerBoard>
      {winLayer}
    </div>)
  }
})


CheckerGame.defaultProps = {
  sendClick: () => {},
  joinMatch: () => {},
  state: []
};


export default CheckerGame
