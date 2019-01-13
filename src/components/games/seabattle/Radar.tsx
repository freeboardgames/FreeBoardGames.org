import * as React from 'react';
import * as PropTypes from 'prop-types';
import { IShip, ICell, ISalvo, getCellVector, validateShips } from './game';
import { Grid } from 'flamecoals-boardgame.io/ui';
import { Token } from 'flamecoals-boardgame.io/ui';

export interface IColorMap {
  [key: string]: string;
}
interface IRadarProps {
  ships: IShip[];
  salvos?: ISalvo[];
  editable: boolean;
  onEdit?: (ships: IShip[]) => void;
  onClick?: (cell: ICell) => void;
}

export class Radar extends React.Component<IRadarProps, {}> {
  static propTypes = {
    ships: PropTypes.array,
    salvos: PropTypes.array,
    editable: PropTypes.bool,
    onEdit: PropTypes.func,
    onClick: PropTypes.func,
  };

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
          colorMap={colorMap}
          onClick={this._onClick}
        >
          {this._getShips().concat(this._getSalvos())}
        </Grid>
      </div>
    );
  }

  _onClick = (coords: {x: number, y: number}) => {
    if (this.props.editable) {
      const shipIndex = this._findShip(coords.x, coords.y);
      if (shipIndex !== -1) {
        this._rotateShip(shipIndex);
      }
    } else {
      this.props.onClick(coords);
    }
  }

  _shouldDrag = () => {
    return this.props.editable;
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
      const shipIndex = this._findShip(originalX, originalY);
      this._moveShip(shipIndex, x, y);
    } 
  }

  _findShip(x: number, y: number): number {
    return this.props.ships.findIndex((ship) => {
      return ship.cells.findIndex((c) => (c.x === x && c.y === y)) !== -1;
    });
  }

  _moveShip(shipIndex: number, x: number, y: number) {
    const ship = this.props.ships[shipIndex];
    const delta = getCellVector(ship.cells[1], ship.cells[0]);
    this._setShip(shipIndex, x, y, delta);
  }

  _rotateShip(shipIndex: number) {
    const ship = this.props.ships[shipIndex];
    const delta = getCellVector(ship.cells[1], ship.cells[0]);
    const temp = delta.x;
    delta.x = delta.y;
    delta.y = temp;
    this._setShip(shipIndex, ship.cells[0].x, ship.cells[0].y, delta);
  }

  _setShip(index: number, x: number, y: number, vector: ICell) {
    const ship = this.props.ships[index];
    const newCells = [];
    for (let i = 0; i < ship.cells.length; i++) {
      newCells.push({ x: x + vector.x * i, y: y + vector.y * i });
    }
    const newShips = [ ... this.props.ships ];
    newShips[index] = { ...ship, cells: newCells };
    this.props.onEdit(newShips);
  }

  _getShips() {
    const result = [];
    const shipStyle = {fill: 'white', strokeWidth: .05, stroke: 'red'};
    let i = 0;
    for (const ship of this.props.ships) {
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
          draggable={this.props.editable}
          shouldDrag={this._shouldDrag}
          onDrop={this._onDrop}
          key={i}
        >
          {shipDrawing}
        </Token>,
      );
      i++;
    }
    return result;
  }

  _getSalvos() {
    const result: JSX.Element[] = [];
    if (!this.props.salvos) {
      return result;
    }
    let i = 100;
    for (const salvo of this.props.salvos) {
      result.push(
        <Token
          x={salvo.cell.x}
          y={salvo.cell.y}
          draggable={false}
          key={i}
        >
          <circle
            cx="0.5"
            cy="0.5"
            r="0.5"
            fill={(salvo.hit) ? 'red' : 'white'}
          />
        </Token>,
      );
      i++;
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
