import React from 'react';
import Point from './point';
import css from './Field.css';

interface IFieldProps {
  points: Point[];
  selectPoint: (index: number) => void;
}

export class Field extends React.Component<IFieldProps, {}> {
  _selectPoint = (i: number) => () => this.props.selectPoint(i);

  render() {
    const coords = [[-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0]];
    const connectors = [0, 2, 4, 6, 9, 11, 13, 15, 16, 18, 20, 22];

    const radius = 15;
    const size = 500;
    const distance = 0.3;

    let calculated: number[][] = [];

    // Points
    let circles: any = [];
    for (let i = 0; i < 3; i++) {
      const multiplier = (size / 2 - radius) * (1 - i * distance);
      coords.forEach((coord, j) => {
        const cx = coord[0] * multiplier;
        const cy = coord[1] * multiplier;
        const key = 8 * i + j;
        circles.push(<circle cx={cx} cy={cy} r={radius} onClick={this._selectPoint(key)} key={key} />);
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
      <svg width="100%" height="100%" viewBox="-250 -250 500 500">
        <g strokeWidth="2" stroke="white">
          {lines}
        </g>
        <g fill="white">{circles}</g>
        <g fill="white">
          {this.props.points.map((point, i) => {
            if (point.piece === null) {
              return null;
            }
            return (
              <circle
                cx={calculated[i][0]}
                cy={calculated[i][1]}
                r={25}
                key={point.piece.key}
                fill={point.piece.player === '0' ? 'white' : 'grey'}
                onClick={this._selectPoint(i)}
                className={css.Piece}
              />
            );
          })}
        </g>
      </svg>
    );
  }
}
