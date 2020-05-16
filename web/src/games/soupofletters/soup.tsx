import React from 'react';
import { red, blue, grey } from '@material-ui/core/colors';
import { ISolvedWord } from './game'; 

const BOARD_SIZE = 500;

interface ISoupProps {
  boardSize: number;
  puzzel: Array<Array<string>>;
  solution: Array<ISolvedWord>;
  clickPoint?: (pointID: number) => void;
}

const playerColors = {
  '0': red[400],
  '1': blue[400],
};

export class Soup extends React.Component<ISoupProps, {}> {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <svg
          width={`${this.props.boardSize}%`}
          height={`${this.props.boardSize}%`}
          viewBox={`0 0 ${BOARD_SIZE} ${BOARD_SIZE}`}
          pointerEvents="visible"
        >
          <g>{this._placeLetters()}</g>
        </svg>
      </div>
    );
  }

  _placeLetters() {

    console.log(this.props.puzzel);
    console.log(this.props.solution);

    // calculate hight and width of each letter 
    const lHeight = Math.floor(BOARD_SIZE / this.props.puzzel.length); 
    const lWidth = Math.floor( BOARD_SIZE / this.props.puzzel[0].length);
    const fontSize = 0.75 * Math.min(lHeight, lWidth);

    // place letters from puttel in cell
    const cells = [];
    this.props.puzzel.forEach((yList, yId) => {
        yList.forEach((l, xId) => {
          // square around the letter 
          cells.push(
            <rect
              key={'square'+xId+yId}
              x={(xId)*lWidth} y={(yId)*lHeight} 
              width={lWidth} height={lWidth}
              fill='black'
              stroke={grey[500]} strokeWidth={0.05*fontSize}
            />
          );
          // letter inside the square 
          cells.push(
            <text 
              key={'letter'+xId+yId} 
              x={(xId+0.5)*lWidth} y={(yId+0.80)*lHeight} 
              fontSize={fontSize} fontFamily="sans-serif"
              fill={grey[100]} 
              textAnchor="middle"
            > 
                {l} 
            </text>
          );
        }); 
    });
    return cells;
  }

}

