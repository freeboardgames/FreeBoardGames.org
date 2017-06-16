import React from 'react'
import TurnatoBar from '../../../TurnatoBar/TurnatoBar'
import {Card, CardText} from 'material-ui/Card';
import CheckerBoard from '../../CheckerGame/components/CheckerBoard'
import ChessPiece from './ChessPiece'
import CircularProgress from 'material-ui/CircularProgress';
import './ChessGame.scss'
import TurnHUD from '../../../TurnHUD/containers/TurnHUDContainer'

export const ChessGame = React.createClass({
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
        let piece = boardState_col[i];
        if (piece != '') {
          let piece_id = parseInt(piece.split('_')[1]);
          let piece_color = "light";
          if (piece.indexOf('d') > 0) {
            piece_color = "dark";
          }
          let piece_type = piece[0];
          pieces.push(
            (<ChessPiece color={piece_color} type={piece_type}
              x={i} y={j} key={piece_id} onClick={onClick}/>));
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
        playerColor={(current_player==0) ? 'black' : 'grey'}
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


ChessGame.defaultProps = {
  sendClick: () => {},
  joinMatch: () => {},
  state: []
};


export default ChessGame
