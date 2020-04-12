import React from 'react';
import { Point } from './game';
import css from './Field.css';
import { red, blue } from '@material-ui/core/colors';

const PIECE_RADIUS = 25;
const BOARD_SIZE = 500;
const CIRCLE_RADIUS = BOARD_SIZE * 0.4;
const POINT_SELECTION_ZOOM = 1.2;

interface IFieldProps {
  points: Point[];
  clickPoint: (pointID: number) => void;
  idSelectedPoint: number;
}

const playerColors = {
  '0': red[400],
  '1': blue[400],
};

export class Field extends React.Component<IFieldProps, {}> {
  render() {
    return (
      <svg width="100%" height="100%" viewBox="-250 -250 500 500" className={css.RotaField} pointerEvents="visible">
        <g strokeWidth="4" stroke="#cccccc">
          {this.drawLinesAndCircel()}
        </g>
        <g>{this.placePieces()}</g>
      </svg>
    );
  }

  drawLinesAndCircel() {
    const cells = [];

    // add outer circle,
    cells.push(
      <circle
        key={'rota_outer_circle'}
        cx={0}
        cy={0}
        r={CIRCLE_RADIUS}
        fill="none"
        stroke="white"
        strokeWidth={CIRCLE_RADIUS * 0.01}
      />,
    );

    // add line
    this.props.points.forEach((point, idx) => {
      const radiusFactor = 1 / (Math.sqrt(point.x ** 2 + point.y ** 2) || 1);
      cells.push(
        <line
          key={`rota_static_line_${idx}`}
          x1="0"
          y1="0"
          x2={point.x * CIRCLE_RADIUS * radiusFactor}
          y2={point.y * CIRCLE_RADIUS * radiusFactor}
          strokeWidth={CIRCLE_RADIUS * 0.004}
          stroke="white"
        />,
      );
    });

    // add circle at the intersection of line and outer-circle,
    this.props.points.forEach((point, idx) => {
      const radiusFactor = 1 / (Math.sqrt(point.x ** 2 + point.y ** 2) || 1);
      cells.push(
        <circle
          key={`rota_piece_holder_circle_${idx}`}
          cx={point.x * CIRCLE_RADIUS * radiusFactor}
          cy={point.y * CIRCLE_RADIUS * radiusFactor}
          r={PIECE_RADIUS}
          fill="black"
          stroke="white"
          strokeWidth={CIRCLE_RADIUS * 0.015}
          onClick={() => this.props.clickPoint(idx)}
        />,
      );
    });

    return cells;
  }

  placePieces() {
    const cells = [];

    // place pieces on their points
    this.props.points.forEach((point, idx) => {
      if (point.playerID !== null) {
        const radiusFactor = 1 / (Math.sqrt(point.x ** 2 + point.y ** 2) || 1);
        const scale = idx === this.props.idSelectedPoint ? POINT_SELECTION_ZOOM : 1;
        cells.push(
          <circle
            key={`rota_piece_${point.pieceID}`}
            id={`id_rota_piece_${point.pieceID}`}
            className={`${css.RotaPiece}`}
            r={PIECE_RADIUS}
            fill={playerColors[point.playerID]}
            stroke="white"
            strokeWidth={CIRCLE_RADIUS * 0.015}
            onClick={() => this.props.clickPoint(idx)}
            style={{
              transform: `translate(${point.x * CIRCLE_RADIUS * radiusFactor}px, ${
                point.y * CIRCLE_RADIUS * radiusFactor
              }px) scale(${scale})`,
            }}
          />,
        );
      }
    });
    return cells;
  }
}
