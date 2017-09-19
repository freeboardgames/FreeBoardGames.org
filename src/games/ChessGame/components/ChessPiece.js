import React from 'react';
import KingPiece from './KingPiece.js';
import BishopPiece from './BishopPiece.js';
import QueenPiece from './QueenPiece.js';
import PawnPiece from './PawnPiece.js';
import KnightPiece from './KnightPiece.js';
import RookPiece from './RookPiece.js';
import PropTypes from 'prop-types';
import move2audio from  '../../../resources/move2.mp3';
import moveaudio from  '../../../resources/move.wav';
const MOVE_TIME = 750;

class ChessPiece extends React.Component {
  componentWillMount() {
    this.setState({
      x: this.props.x,
      y: this.props.y,
      lastFrame: null,
      stepX: 0,
      stepY: 0,
      animate: null
    });
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.x != this.props.x || nextProps.y != this.props.y) {
      this.setState({
        ...this.state,
        originTime: Date.now(),
        originX: this.props.x,
        originY: this.props.y,
      });
      if (Math.abs(nextProps.x - this.props.x) == 1) {
        (new Audio(move2audio)).play();
      } else {
        (new Audio(moveaudio)).play();
      }
      requestAnimationFrame((this.animate).bind(this));
    }
  }
  easeInOutCubic (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
  }
  animate() {
    let elapsed = Date.now() - this.state.originTime;
    if (elapsed < MOVE_TIME) {
      let perc_done = this.easeInOutCubic(elapsed, 0, 1, MOVE_TIME);
      this.setState({
        ...this.state,
        x: (this.props.x-this.state.originX)*perc_done + this.state.originX,
        y: (this.props.y-this.state.originY)*perc_done + this.state.originY,
      });
      requestAnimationFrame((this.animate).bind(this));
    } else {
      this.setState({
        ...this.state,
        x: this.props.x,
        y: this.props.y
      });
    }
  }

  render() {
    let type = 'p';
    if (this.props.type) {
      type = this.props.type;
    }
    let primaryColor = '#000000';
    let secondaryColor = '#ffffff';
    if (this.props.color == 'light') {
      primaryColor = '#ffffff';
      secondaryColor = '#000000';
    }
    let piece_drawing = null;
    switch (type) {
    case 'b': //bishop
      piece_drawing = BishopPiece(primaryColor, secondaryColor); break;
    case 'k': //king
      piece_drawing = KingPiece(primaryColor, secondaryColor); break;
    case 'q': //queen
      piece_drawing = QueenPiece(primaryColor, secondaryColor); break;
    case 'p':
      piece_drawing = PawnPiece(primaryColor, secondaryColor); break;
    case 'r':
      piece_drawing = RookPiece(primaryColor, secondaryColor); break;
    case 'n':
      piece_drawing = KnightPiece(primaryColor, secondaryColor); break;
    }
    return (
      <g transform={'translate('+this.state.x+','+this.state.y+')'} onClick={this.props.onClick(this.props.x,this.props.y)}>
        <g transform="scale(.022222,.022222)">
          {piece_drawing}
        </g>
      </g>
    );
  }
}
ChessPiece.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};


export default ChessPiece;
