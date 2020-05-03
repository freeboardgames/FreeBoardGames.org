import React from 'react';
import { red, blue } from '@material-ui/core/colors';

const BOARD_SIZE = 500;

interface ISoupProps {
  boardSize: number;
  puzzel: Array<Array<string>>;
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

    // calculate hight and width of each letter 
    const lHeight = Math.floor(BOARD_SIZE / this.props.puzzel.length); 
    const lWidth = Math.floor( BOARD_SIZE / this.props.puzzel[0].length);
    const fontSize = 0.8 * Math.min(lHeight, lWidth);

    // place letters from puttel in cell
    const cells = [];
    this.props.puzzel.forEach((xList, xId) => {
        xList.forEach((l, yID) => {
            cells.push(
                <text 
                    key={'letter'+xId+yID} 
                    x={(xId+0.5)*lWidth} y={(yID+1)*lHeight} 
                    fontSize={fontSize} fontFamily="sans-serif"
                    fill={"green"} 
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

