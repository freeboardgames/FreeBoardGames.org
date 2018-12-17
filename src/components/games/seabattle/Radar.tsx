import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IShip, ICell, getCellVector } from './game';
import { Grid } from 'boardgame.io/ui';
import { Token } from 'boardgame.io/ui';

export interface IColorMap {
  [key: string]: string;
}
interface IRadarProps {
  ships: IShip[];
}
interface IRadarState {
  ships: IShip[];
}
export class Radar extends React.Component<IRadarProps, IRadarState> {
  static propTypes = {
    ships: PropTypes.array,
  };

  _ignoreClick = false;

  constructor(props: IRadarProps) {
    super(props);
    this.state = {
      ships: props.ships,
    };
  }

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
          onClick={this._onClick}
        >
          {this._getShips()}
        </Grid>
      </div>
    );
  }

  _onClick = (coords: {x: number, y: number}) => {
    if (this._ignoreClick) {
      this._ignoreClick = false;
      return;
    }
    const shipIndex = this._findShip(coords.x, coords.y);
    if (shipIndex !== -1) {
      this._rotateShip(shipIndex);
    }
  }

  _shouldDrag = () => {
    return true;
  }

  _onDrop = (coords: {x: number; y: number; originalX: number; originalY: number}) => {
    const x = Math.round(coords.x);
    const y = Math.round(coords.y);
    const originalX = coords.originalX;
    const originalY = coords.originalY;
    if (x < 0 || y < 0 || x >= 10 || y >= 10) {
      return;
    }
    if (originalX !== x || originalY !== y) {
      this._ignoreClick = true;
      const shipIndex = this._findShip(originalX, originalY);
      this._moveShip(shipIndex, x, y);
    }
  }

  _findShip(x: number, y: number): number {
    return this.state.ships.findIndex((ship) => {
      return ship.cells.findIndex((c) => (c.x === x && c.y === y)) !== -1;
    });
  }

  _moveShip(shipIndex: number, x: number, y: number) {
    const ship = this.state.ships[shipIndex];
    const delta = getCellVector(ship.cells[0], ship.cells[1]);
    this._setShip(shipIndex, x, y, delta);
  }

  _rotateShip(shipIndex: number) {
    const ship = this.state.ships[shipIndex];
    const delta = getCellVector(ship.cells[0], ship.cells[1]);
    const temp = delta.x;
    delta.x = delta.y;
    delta.y = temp;
    this._setShip(shipIndex, ship.cells[0].x, ship.cells[0].y, delta);
  }

  _setShip(index: number, x: number, y: number, vector: ICell) {
    const ship = this.state.ships[index];
    const newCells = [];
    for (let i = 0; i < ship.cells.length; i++) {
      newCells.push({ x: x + vector.x * i, y: y + vector.y * i });
    }
    const newShips = [ ... this.state.ships ];
    newShips[index] = { ...ship, cells: newCells };
    this.setState({
      ships: newShips,
    });
  }

  _getShips() {
    const result = [];
    const shipStyle = {fill: 'white', strokeWidth: .05, stroke: 'red'};
    for (const ship of this.state.ships) {
      const cell = ship.cells[0];
      let shipDrawing;
      if (cell.x === ship.cells[1].x) { // Vertical
        shipDrawing = <rect width="1" height={ship.cells.length} style={shipStyle} />;
      } else { // Horizontal
        shipDrawing = <rect width={ship.cells.length} height="1" style={shipStyle} />;
      }

      result.push(
        <Token
          x={cell.x}
          y={cell.y}
          draggable={true}
          shouldDrag={this._shouldDrag}
          onDrop={this._onDrop}
          key={`${cell.x},${cell.y}`}
        >
          {shipDrawing}
        </Token>,
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
