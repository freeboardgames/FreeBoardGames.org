import React from 'react';
import CheckerBoard from './CheckerBoard';
import CheckerPiece from './CheckerPiece';
import './CheckerGame.scss';
import TurnHUD from '../../../TurnHUD/containers/TurnHUDContainer';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';

class CheckerGame extends React.Component {
  componentDidMount () {
    this.props.joinMatch(this.props.params.id);
  }
  componentWillUnmount () {
    this.props.leaveMatch(this.props.params.id);
  }
  render () {
    let state = this.props.state;
    let onClick = (x,y) => () => {
      this.props.sendClick(
        this.props.matchInfo.code,
        x,
        y,
        this.props.matchInfo.player);
      ReactGA.event({
        category: 'CheckerGame',
        action: 'click',
      });
    };
    //Positioning pieces
    let pieces = [];
    for (var j =0; j<state.board.length; j++) {
      let boardState_col = state.board[j];
      for (var i=0; i<boardState_col.length; i++) {
        if (boardState_col[i]) {
          let piece = boardState_col[i];
          let color = 'yellow';
          if (piece.player == 0) {
            color = 'white';
          }
          pieces.push(
            (<CheckerPiece color={color} double={piece.double}
              x={i} y={j} key={piece.key} onClick={onClick}/>));
        }
      }
    }
    return (
    <div style={{backgroundColor: 'black', height: '100%'}}>
    <TurnHUD
      playersPrimaryColors={['grey', '#CCCC00']}
      playersSecondaryColors={['white', 'yellow']}
      winner={state.winner}
      resign={this.props.resign}
      playerWhoseTurn={state.turn%2}/>
      <CheckerBoard
        feasible={state.feasible} selected={state.selected}
        onClick={onClick}
        key="999">
        {pieces}
      </CheckerBoard>
    </div>);
  }
}


CheckerGame.propTypes = {
  sendClick: PropTypes.func,
  leaveMatch: PropTypes.func,
  joinMatch: PropTypes.func,
  resign: PropTypes.func,
  params: PropTypes.object,
  matchInfo: PropTypes.object,
  state: PropTypes.array
};

CheckerGame.defaultProps = {
  sendClick: () => {},
  joinMatch: () => {},
  resign: () => {},
  matchInfo: {},
  state: []
};


export default CheckerGame;
