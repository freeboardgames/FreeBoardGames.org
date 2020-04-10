import React from 'react';
import Point from './game';
import red from '@material-ui/core/colors/red';

const RADIUS = 10;
const PIECE_RADIUS = 25;
const SIZE = 500;
const DISTANCE = 0.3;

export class Field extends React.Component<{}, {}> {

    render() {
        return (
          <svg width="100%" height="100%" viewBox="-250 -250 500 500" pointerEvents="visible">
            <g strokeWidth="4" stroke="#cccccc">
              {this.drawLinesAndCircel()}
            </g>
            <g>{this.drawPieces()}</g>
          </svg>
        );
    }

    drawLinesAndCircel(){
        return(
            <div></div>
        );
    }

    drawPieces(){
        return(
            <div></div>
        );
    }

}