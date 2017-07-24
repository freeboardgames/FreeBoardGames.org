import React from 'react'
const MOVE_TIME = 750;

class CheckerPiece extends React.Component {
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
  componentWillReceiveProps(nextProps) {
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
      requestAnimationFrame((this.animate).bind(this))
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
      requestAnimationFrame((this.animate).bind(this))
    } else {
      this.setState({
        ...this.state,
        x: this.props.x,
        y: this.props.y
      });
    }
  }

  render() {
    let star = null;
    if (this.props.double == true) {
      star = (<polygon stroke="#000000" points="50,33.034549713134766 53.87126159667969,44.171669006347656 65.65957641601562,44.411895751953125 56.263832092285156,51.535240173339844 59.67815017700195,62.820831298828125 50,56.086181640625 40.32184982299805,62.820831298828125 43.736167907714844,51.535240173339844 34.340423583984375,44.411895751953125 46.12873840332031,44.171669006347656 50,33.034549713134766 53.87126159667969,44.171669006347656 " strokeWidth="3"  fill="#000000" orient="point" r="16.465452" shape="star" cy="48.5" cx="49"/>);
    }
    return (
      <g transform={"translate("+this.state.x+","+this.state.y+")"} onClick={this.props.onClick(this.props.x,this.props.y)}>
        <g transform="scale(.01,.01)">
          <ellipse ry="45" rx="45" cy="50" cx="50" strokeWidth="0" stroke="#000000" fill={this.props.color}/>
          <ellipse ry="35" rx="35" cy="50" cx="50" strokeWidth="5" stroke="#000000" fill={this.props.color}/>
          <ellipse ry="20" rx="20" cy="50" cx="50" strokeWidth="3" stroke="#000000" fill={this.props.color}/>
          {star}
        </g>
      </g>
    )
  }
};


export default CheckerPiece
