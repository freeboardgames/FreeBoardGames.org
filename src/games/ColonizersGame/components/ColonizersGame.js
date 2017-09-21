import React from 'react';
import PropTypes from 'prop-types';

class ColonizersGame extends React.Component {
  render () {
    let board = this.props.state.board;
    let map = board.map;
    let lines = [];
    for (let i in map.edges) {
      let edge = map.edges[i];
      let point0 = map.points[edge.points[0]];
      let point1 = map.points[edge.points[1]];
      lines.push((
        <line x1={point0.x*100} y1={point0.y*100} x2={point1.x*100} y2={point1.y*100}
          strokeWidth="2" stroke="black" key={i}/>
      ));
    }
    let circles = [];
    for (let y in map.tiles) {
      for (let x in map.tiles[y]) {
        let tile = map.tiles[y][x];
        if (!tile.active) {
          continue;
        }
        let key = `[${y}][${x}]`;
        circles.push((
          <circle cx={tile.x*100} cy={tile.y*100} r={10} fill="red"
            key={key} alt={key} />
        ));
      }
    }
    return (
      <svg width="1500px" height="1200px" viewBox="0 0 1000 1000">
      {lines}
      {circles}
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
