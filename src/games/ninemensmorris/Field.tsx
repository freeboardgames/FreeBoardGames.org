import React from 'react';
import Point from './point';
import css from './Field.css';
import red from '@material-ui/core/colors/red';

interface IFieldProps {
  points: Point[];
  selectPoint: (index: number) => void;
  selected: number;
}

export class Field extends React.Component<IFieldProps, {}> {
  _selectPoint = (i: number) => () => this.props.selectPoint(i);

  render() {
    const coords = [[-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0]];
    const connectors = [0, 2, 4, 6, 9, 11, 13, 15, 16, 18, 20, 22];

    const radius = 10;
    const pieceRadius = 25;
    const size = 500;
    const distance = 0.3;

    let calculated: number[][] = [];

    // Points
    let circles: any = [];
    for (let i = 0; i < 3; i++) {
      const multiplier = (size / 2 - pieceRadius) * (1 - i * distance);
      coords.forEach((coord, j) => {
        const cx = coord[0] * multiplier;
        const cy = coord[1] * multiplier;
        const key = 8 * i + j;
        circles.push(<circle cx={cx} cy={cy} r={radius} key={key} />);
        circles.push(
          <circle
            cx={cx}
            cy={cy}
            r={pieceRadius}
            onClick={this._selectPoint(key)}
            key={`${key}clickable`}
            fill="none"
          />,
        );
        calculated.push([cx, cy]);
      });
    }

    // Connections
    let lines: any = [];
    connectors.forEach(i => {
      this.props.points[i].connections.forEach(connection => {
        lines.push(
          <line
            x1={calculated[i][0]}
            y1={calculated[i][1]}
            x2={calculated[connection][0]}
            y2={calculated[connection][1]}
            key={i * 100 + connection}
          ></line>,
        );
      });
    });

    return (
      <svg width="100%" height="100%" viewBox="-250 -250 500 500" className={css.Field} pointerEvents="visible">
        <g strokeWidth="4" stroke="#cccccc">
          {lines}
        </g>
        <g fill="#cccccc">{circles}</g>
        <g>
          {this.props.points.map((point, i) => {
            if (point.piece === null) {
              return null;
            }
            const scale = i === this.props.selected ? 1.2 : 1;
            return (
              <circle
                r={pieceRadius}
                key={point.piece.key}
                fill={point.piece.player === '0' ? 'white' : red[500]}
                onClick={this._selectPoint(i)}
                className={css.Piece}
                style={{ transform: `translate(${calculated[i][0]}px, ${calculated[i][1]}px) scale(${scale})` }}
              />
            );
          })}
        </g>
      </svg>
    );
  }
}
