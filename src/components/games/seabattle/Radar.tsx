import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IShip } from './game';
import { Grid } from 'boardgame.io/ui';
import { Token } from 'boardgame.io/ui';

export interface IColorMap {
  [key: string]: string;
}
interface IRadarProps {
  ships: IShip[];
}
export class Radar extends React.Component<IRadarProps, {}> {
  static propTypes = {
    ships: PropTypes.array,
  };

  render() {
    const colorMap = this._getColorMap();
    return (
      <div className="seabattle-radar">
        <Grid
          rows={10}
          cols={10}
          outline={true}
          style={{position: 'fixed', bottom: 0, maxWidth: '500px'}}
          colorMap={colorMap}
          onClick={()=>{}}
        >
          {this._getShips()}
        </Grid>
      </div>
    );
  }

  _getShips() {
    const result = [];
    const shipStyle = {fill: 'white', strokeWidth: .05, stroke: 'red'};
    for (const ship of this.props.ships) {
      const cell = ship.cells[0];
      let shipDrawing; 
      if (cell.x === ship.cells[1].x) { // Vertical
        shipDrawing = <rect width='1' height={ship.cells.length} style={shipStyle} />;
      } else { // Horizontal
        shipDrawing = <rect width={ship.cells.length} height='1' style={shipStyle} />;
      }
 
      result.push(
        <Token x={cell.x} y={cell.y} key={cell.x+','+cell.y}>
          {shipDrawing}
        </Token>
      );
    }
    return result;
  }

  _getColorMap(): IColorMap {
    const colorMap = {} as IColorMap;
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const key = `${x},${y}`;
        colorMap[key] = 'black';
      }
    }
    return colorMap;
  }
}
