import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './CheckerBoard.scss';

class Checkerboard extends React.Component {

    render() {
    // Add tiles
        let rects = [];
        let key = 0;
        for (var j=0; j<this.props.height; j++) {
            for (var i=0; i<this.props.width; i++) {
                let color = this.props.secondaryColor;
                if ((i+j)%2 == 0) {
                    color = this.props.primaryColor;
                }
                for (let k in this.props.feasible) {
                    let f = this.props.feasible[k];
                    if (f.x == i && f.y == j) {
                        color = this.props.feasibleColor;
                    }
                }
                if (this.props.selected && this.props.selected.x == i && this.props.selected.y == j) {
                    color = this.props.selectedColor;
                }
                rects.push((<rect
          height="1"
          style={{fill: color}}
          width="1"
          x={i}
          y={j}
          key={key}
          onClick={this.props.onClick(i,j)}/>));
                key++;
            }
        }
        return (
      <svg style={{width: '100%', position: 'fixed',
          left: '0px', right:'0px', bottom: '0px', zIndex: 8999,
          maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto'}}
      viewBox={'0 0 8 8'}
      id="CheckerBoard">
        <g>
          {rects}
        </g>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={200}
          component="g">
        {this.props.children}
       </CSSTransitionGroup>
      </svg>
        );
    }
}

Checkerboard.defaultProps = {
    width: 8,
    height: 8,
    primaryColor: 'tan',
    secondaryColor: 'sienna',
    feasibleColor: 'palegreen',
    feasible: {},
    selected: null,
    selectedColor: 'green'
};

export default Checkerboard;
