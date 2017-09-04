import React from 'react';
import PropTypes from 'prop-types';

class ColonizersGame extends React.Component {
  render () {
    let lines = [];
    let board = this.props.state.board;
    for (let i in board.edges) {
      let edge = board.edges[i];
      console.log(JSON.stringify(edge));
      let point0 = board.points[edge.points[0]];
      let point1 = board.points[edge.points[1]];
      lines.push((
        <line x1={point0.x*100} y1={point1.y*100} x2={point1.x*100} y2={point1.y*100}
          strokeWidth="2" stroke="black"/>
      ));
    }
    return (
      <svg width="100%" height="100%" viewBox="0 0 1000 1000">
      {lines}
      </svg>);
  }
}

ColonizersGame.propTypes = {
  state: PropTypes.object,
};

ColonizersGame.defaultProps = {
  state: {}
};

export default ColonizersGame;
