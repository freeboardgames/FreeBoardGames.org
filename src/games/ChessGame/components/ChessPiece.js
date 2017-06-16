import React from 'react'
import KingPiece from './KingPiece.js'
import BishopPiece from './BishopPiece.js'
import QueenPiece from './QueenPiece.js'
import PawnPiece from './PawnPiece.js'
import KnightPiece from './KnightPiece.js'
import RookPiece from './RookPiece.js'
const MOVE_TIME = 750;

var ChessPiece = React.createClass({
  componentWillMount: function() {
    this.setState({
      x: this.props.x,
      y: this.props.y,
      lastFrame: null,
      stepX: 0,
      stepY: 0,
      animate: null
    });
  },
  componentWillReceiveProps: function (nextProps) {
    if (nextProps.x != this.props.x || nextProps.y != this.props.y) {
      this.setState({
        ...this.state,
        originTime: Date.now(),
        originX: this.props.x,
        originY: this.props.y,
      });
      if (nextProps.double && !this.props.double) {
        (new Audio('/success.wav')).play();
      } else if (Math.abs(nextProps.x - this.props.x) == 1) {
        (new Audio('/move2.mp3')).play();
      } else {
        (new Audio('/move.wav')).play();
      }
      requestAnimationFrame(this.animate)
    }
  },
  easeInOutCubic: function (t, b, c, d) {
	  t /= d/2;
	  if (t < 1) return c/2*t*t*t + b;
	  t -= 2;
	  return c/2*(t*t*t + 2) + b;
  },
  animate: function() {
    let elapsed = Date.now() - this.state.originTime;
    if (elapsed < MOVE_TIME) {
      let perc_done = this.easeInOutCubic(elapsed, 0, 1, MOVE_TIME);
      this.setState({
        ...this.state,
        x: (this.props.x-this.state.originX)*perc_done + this.state.originX,
        y: (this.props.y-this.state.originY)*perc_done + this.state.originY,
      });
      requestAnimationFrame(this.animate)
    } else {
      this.setState({
        ...this.state,
        x: this.props.x,
        y: this.props.y
      });
    }
  },

  render: function() {
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
      <g transform={"translate("+this.state.x+","+this.state.y+")"} onClick={this.props.onClick(this.props.x,this.props.y)}>
        <g transform="scale(.022222,.022222)">
          {piece_drawing}
        </g>
      </g>
    )
  }
});


export default ChessPiece
