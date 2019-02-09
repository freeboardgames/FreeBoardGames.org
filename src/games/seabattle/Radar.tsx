import * as React from 'react';
import { IShip, ICell, ISalvo, getCellVector, validateShips } from './game';
import { Grid } from 'flamecoals-boardgame.io/ui';
import { Token } from 'flamecoals-boardgame.io/ui';
import SvgShip2 from './media/SvgShip2';
import SvgShip3 from './media/SvgShip3';
import SvgShip4 from './media/SvgShip4';
import SvgShip5 from './media/SvgShip5';
import SvgBackground from './media/SvgBackground';
import SvgHit from './media/SvgHit';
import SvgMiss from './media/SvgMiss';
import { Blink } from '../../App/Blink';

export interface IColorMap {
  [key: string]: string;
}
interface IRadarProps {
  ships: IShip[];
  salvos?: ISalvo[];
  editable: boolean;
  blinkSalvo?: boolean;
  onEdit?: (ships: IShip[]) => void;
  onClick?: (cell: ICell) => void;
}

export class Radar extends React.Component<IRadarProps, {}> {
  constructor(props: IRadarProps) {
    super(props);
    this.state = {
      ships: props.ships,
    };
  }

  render() {
    const result = [
      <SvgBackground onClick={this._onClick} key="background" />,
    ].concat(this._getShips())
      .concat(this._getSalvos());
    return (
      <div className="seabattle-radar">
        <Grid
          rows={10}
          cols={10}
          outline={false}
          onClick={this._onClick}
        >
          {result}
        </Grid>
      </div>
    );
  }

  _onClick = (coords: { x: number, y: number }) => {
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

  _onDrop = (coords: { x: number; y: number; originalX: number; originalY: number }) => {
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
    const newShips = [... this.props.ships];
    newShips[index] = { ...ship, cells: newCells };
    this.props.onEdit(newShips);
  }

  _getShipDrawing(size: number, rotation: 'h' | 'v') {
    // Drawings from https://github.com/studioromeo/battleship-svgs (MIT license)
    // Used SVGR to transform to react components.
    // https://github.com/smooth-code/svgr
    let ship;
    switch (size) {
      case 2: ship = <SvgShip2 />; break;
      case 3: ship = <SvgShip3 />; break;
      case 4: ship = <SvgShip4 />; break;
      case 5: ship = <SvgShip5 />; break;
    }
    if (rotation === 'v') {
      return <g transform="translate(1 0) rotate(90)">{ship}</g>;
    } else {
      return ship;
    }
  }

  _getShips() {
    const result = [];
    const shipStyle = { fill: 'white', strokeWidth: .05, stroke: 'red' };
    let i = 0;
    for (const ship of this.props.ships) {
      const cell = ship.cells[0];
      const shipDrawing = this._getShipDrawing(
        ship.cells.length,
        cell.x === ship.cells[1].x ? 'v' : 'h',
      );

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
    let i = 0;
    for (const salvo of this.props.salvos) {
      let drawing;
      if (salvo.hit) {
        drawing = <SvgHit />;
      } else {
        drawing = <SvgMiss />;
      }
      if (this.props.blinkSalvo &&
        i === this.props.salvos.length - 1) {
        drawing = <Blink>{drawing}</Blink>;
      }
      result.push(
        <Token
          x={salvo.cell.x}
          y={salvo.cell.y}
          draggable={false}
          key={i + 100}
        >
          {drawing}
        </Token>,
      );
      i++;
    }
    return result;
  }
}
