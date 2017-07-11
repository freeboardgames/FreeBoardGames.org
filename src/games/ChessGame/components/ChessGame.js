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
  componentWillUnmount: function () {
    this.props.leaveMatch(this.props.params.id)
  },
  render: function () {
    let state = this.props.state;
    let inverted = state.player == 1;
    let onClick = (x,y) => () => {
      let real_y = y;
      let real_x = x;
      if (inverted) {
        real_x = 7 - x;
        real_y = 7 - y;
      }
      this.props.sendClick(this.props.params.id, real_x, real_y, state.player);
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
          let fake_i = i;
          let fake_j = j;
          if (inverted) {
            fake_i = 7 - i;
            fake_j = 7 - j;
          }
          pieces.push(
            (<ChessPiece color={piece_color} type={piece_type}
              x={fake_i} y={fake_j} key={piece_id} onClick={onClick}/>));
          key++;
        }
      }
    }
    let feasible = [];
    let selected = [];
    for (let y=0; y<state.board.length; y++) {
      for (let x=0; x<state.board[y].length; x++) {
        let cell = state.board[y][x];
        let fake_x = x;
        let fake_y = y;
        if (inverted) {
          fake_x = 7 - x;
          fake_y = 7 - y;
        }
        if (cell.indexOf('@') != -1) {
          selected.push({x: fake_x, y: fake_y});
        }
        if (cell.indexOf('*') != -1) {
          feasible.push({x: fake_x, y: fake_y});
        }
      }
    }

    return (
    <div style={{backgroundColor: "black", height: "100%"}}>
      <TurnHUD
        match_code={this.props.params.id}
        players={state.players}
        playersPrimaryColors={['grey', 'black']}
        playersSecondaryColors={['white', 'grey']}
        player={state.player}
        resign={this.props.resign}
        winner={state.winner}
        currentPlayer={state.turn%2}/>
      <CheckerBoard
        feasible={feasible} selected={selected}
        onClick={onClick}
        key="999">
        {pieces}
      </CheckerBoard>
    </div>)
  }
})


ChessGame.defaultProps = {
  sendClick: () => {},
  joinMatch: () => {},
  leaveMatch: () => {},
  resign: () => {},
  state: []
};


export default ChessGame
