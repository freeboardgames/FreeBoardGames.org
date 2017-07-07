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
  componentWillUnmount: function () {
    this.props.leaveMatch(this.props.params.id)
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
    return (
    <div style={{backgroundColor: "black", height: "100%"}}>
    <TurnHUD
      match_code={this.props.params.id}
      players={state.players}
      playersPrimaryColors={['grey', '#CCCC00']}
      playersSecondaryColors={['white', 'yellow']}
      player={state.player}
      winner={state.winner}
      currentPlayer={state.turn%2}/>
      <CheckerBoard
        feasible={state.feasible} selected={state.selected}
        onClick={onClick}
        key="999">
        {pieces}
      </CheckerBoard>
    </div>)
  }
})


CheckerGame.defaultProps = {
  sendClick: () => {},
  joinMatch: () => {},
  state: []
};


export default CheckerGame
