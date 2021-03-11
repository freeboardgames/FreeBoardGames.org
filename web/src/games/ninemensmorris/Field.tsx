import React from 'react';
import Point from './point';
import css from './Field.module.css';
import red from '@material-ui/core/colors/red';

const COORDS = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
  [-1, 0],
];
const CONNECTORS = [0, 2, 4, 6, 9, 11, 13, 15, 16, 18, 20, 22];

const RADIUS = 10;
const PIECE_RADIUS = 25;
const SIZE = 500;
const DISTANCE = 0.3;

interface IFieldProps {
  points: Point[];
  selectPoint: (index: number) => void;
  selected: number;
}

interface IPointCoord {
  cx: number;
  cy: number;
  key: number;
}

export class Field extends React.Component<IFieldProps, {}> {
  _selectPoint = (i: number) => () => this.props.selectPoint(i);

  render() {
    return (
      <svg width="100%" height="100%" viewBox="-250 -250 500 500" className={css.Field} pointerEvents="visible">
        <g strokeWidth="4" stroke="#cccccc">
          {this.getLines()}
        </g>
        <g fill="#cccccc">{this.getCircles()}</g>
        <g>{this.getPieces()}</g>
      </svg>
    );
  }

  getPointsCoords(): IPointCoord[] {
    const result: IPointCoord[] = [];
    for (let i = 0; i < 3; i++) {
      const multiplier = (SIZE / 2 - PIECE_RADIUS) * (1 - i * DISTANCE);
      COORDS.forEach((coord, j) => {
        const cx = coord[0] * multiplier;
        const cy = coord[1] * multiplier;
        const key = 8 * i + j;
        result.push({ cx, cy, key });
      });
    }
    return result;
  }

  getPieces() {
    const coords = this.getPointsCoords();
    return this.props.points.map((point, i) => {
      if (point.piece === null) {
        return null;
      }
      const scale = i === this.props.selected ? 1.2 : 1;
      return (
        <circle
          r={PIECE_RADIUS}
          key={point.piece.key}
          fill={point.piece.player === '0' ? 'white' : red[500]}
          onClick={this._selectPoint(i)}
          className={`${css.Piece} Piece`}
          style={{ transform: `translate(${coords[i].cx}px, ${coords[i].cy}px) scale(${scale})` }}
        />
      );
    });
  }

  getCircles() {
    const result = [];
    for (const p of this.getPointsCoords()) {
      result.push(<circle cx={p.cx} cy={p.cy} r={RADIUS} key={p.key} />);
      result.push(
        <circle
          cx={p.cx}
          cy={p.cy}
          r={PIECE_RADIUS}
          onClick={this._selectPoint(p.key)}
          className="ClickableCircle"
          key={`${p.key}clickable`}
          fill="none"
        />,
      );
    }
    return result;
  }

  getLines() {
    const coords = this.getPointsCoords();
    return CONNECTORS.map((i) =>
      this.props.points[i].connections.map((connection) => (
        <line
          x1={coords[i].cx}
          y1={coords[i].cy}
          x2={coords[connection].cx}
          y2={coords[connection].cy}
          key={i * 100 + connection}
        ></line>
      )),
    );
  }
}
