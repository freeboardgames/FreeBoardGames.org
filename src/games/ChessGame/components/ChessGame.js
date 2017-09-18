import React from 'react';
import CheckerBoard from '../../CheckerGame/components/CheckerBoard';
import ChessPiece from './ChessPiece';
import TurnHUD from '../../../TurnHUD/containers/TurnHUDContainer';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

class ChessGame extends React.Component {
  componentDidMount () {
    this.props.joinMatch(this.props.params.id);
  }
  componentWillUnmount () {
    this.props.leaveMatch(this.props.params.id);
  }
  render () {
    if (this.props.matchInfo.loading) {
      return null;
    }
    let state = this.props.state;
    let inverted = this.props.matchInfo.player == 1;
    let onClick = (x,y) => () => {
      let real_y = y;
      let real_x = x;
      if (inverted) {
        real_x = 7 - x;
        real_y = 7 - y;
      }
      ReactGA.event({
        category: 'ChessGame',
        action: 'click',
      });
      this.props.sendClick(
        this.props.matchInfo.code,
        real_x,
        real_y,
        this.props.matchInfo.player);
    };
    //Positioning pieces
    let pieces = [];
    for (var j =0; j<state.board.length; j++) {
      let boardState_col = state.board[j];
      for (var i=0; i<boardState_col.length; i++) {
        let piece = boardState_col[i];
        if (piece != '') {
          let piece_id = parseInt(piece.split('_')[1]);
          let piece_color = 'light';
          if (piece.indexOf('d') > 0) {
            piece_color = 'dark';
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
        }
      }
    }
    let feasible = [];
    let selected = {};
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
          selected = {x: fake_x, y: fake_y};
        }
        if (cell.indexOf('*') != -1) {
          feasible.push({x: fake_x, y: fake_y});
        }
      }
    }

    return (
      <TurnHUD
        playersPrimaryColors={['grey', '#CCCC00']}
        playersSecondaryColors={['white', 'grey']}
        resign={this.props.resign}
        warning={state.check ? 'CHECK' : null}
        winner={state.winner}
        playerWhoseTurn={state.turn%2}>
        <CheckerBoard
          feasible={feasible} selected={selected}
          onClick={onClick}
          key="999">
          {pieces}
        </CheckerBoard>
      </TurnHUD>);
  }
}

ChessGame.propTypes = {
  sendClick: PropTypes.func,
  joinMatch: PropTypes.func,
  leaveMatch: PropTypes.func,
  resign: PropTypes.func,
  state: PropTypes.object,
  params: PropTypes.object,
  matchInfo: PropTypes.object
};

ChessGame.defaultProps = {
  sendClick: () => {},
  joinMatch: () => {},
  leaveMatch: () => {},
  resign: () => {},
  state: [],
  matchInfo: {},
  params: {}
};


export default ChessGame;
