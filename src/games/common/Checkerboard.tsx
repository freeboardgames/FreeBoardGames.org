/*
 * Copyright 2018 The @freeboardgame.org/boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from 'react';
import { Grid } from 'ui';

/**
 * Checkerboard
 *
 * Component that will show a configurable checker board for games like
 * chess, checkers and others. The vertical columns of squares are labeled
 * with letters from a to z, while the rows are labeled with numbers, starting
 * with 1.
 *
 * Props:
 *   onClick - On Click Callback, (row, col) of the square passed as argument.
 *   primaryColor - Primary color, #d18b47 by default.
 *   secondaryColor - Secondary color, #ffce9e by default.
 *   colorMap - Object of object having cell names as key and colors as values.
 *   Ex: { 'c5': 'red' } colors cells c5 with red.
 *
 * Usage:
 *
 * <Checkerboard>
 *   <Token square={'c5'}>
 *     <Knight color='dark' />
 *   </Token>
 * </Checkerboard>
 */
const NUM_COLS = 8;
const NUM_ROWS = 8;
export interface IAlgebraicCoords {
  square: string;
}
export interface ICartesianCoords {
  x: number;
  y: number;
}
export interface IOnDragData {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
}
export interface IColorMap {
  [key: string]: string;
}
interface ICheckerboardProps {
  onClick: (coords: ICartesianCoords) => void;
  invert: boolean;
  primaryColor: string;
  secondaryColor: string;
  highlightedSquares: IColorMap;
  style: React.CSSProperties;
  children?: any;
}
export class Checkerboard extends React.Component<any, any> {
  static defaultProps = {
    invert: false,
    primaryColor: '#ffce9e',
    secondaryColor: '#d18b47',
    highlightedSquares: {},
    style: {},
  };
  _onClick = this.onClick.bind(this);

  onClick(coords: ICartesianCoords) {
    const { x, y } = coords;
    this.props.onClick({ square: cartesianToAlgebraic(x, y, this.props.invert) });
  }

  render() {
    // Convert the square="" prop to x and y.
    const tokens = React.Children.map(this.props.children, (child: any) => {
      if (child.props.square) {
        const square = child.props.square;
        const { x, y } = algebraicToCartesian(square, this.props.invert);
        return React.cloneElement(child, { x, y });
      } else {
        return React.cloneElement(child, applyInvertion({ x: child.props.x, y: child.props.y }, this.props.invert));
      }
    });

    // Build colorMap with checkerboard pattern.
    const colorMap = {} as IColorMap;
    for (let x = 0; x < NUM_COLS; x++) {
      for (let y = 0; y < NUM_ROWS; y++) {
        const key = `${x},${y}`;
        let color = this.props.secondaryColor;
        if ((x + y) % 2 === 0) {
          color = this.props.primaryColor;
        }
        colorMap[key] = color;
      }
    }

    // Add highlighted squares.
    for (const square of Object.keys(this.props.highlightedSquares)) {
      const { x, y } = algebraicToCartesian(square, this.props.invert);
      const key = `${x},${y}`;
      colorMap[key] = this.props.highlightedSquares[square];
    }

    return (
      <Grid rows={NUM_ROWS} cols={NUM_COLS} style={this.props.style} onClick={this._onClick} colorMap={colorMap}>
        {tokens}
      </Grid>
    );
  }
}

/**
 * Given an algebraic notation, returns x and y values.
 * Example: A1 returns { x: 0, y: 0 }
 */
export function algebraicToCartesian(square: string, invert?: boolean) {
  const regexp = /([A-Za-z])([0-9]+)/g;
  const match = regexp.exec(square);
  if (match == null) {
    throw Error('Invalid square provided: ' + square);
  }
  const colSymbol = match[1].toLowerCase();
  const col = colSymbol.charCodeAt(0) - 'a'.charCodeAt(0);
  const row = parseInt(match[2], 10);
  if (invert) {
    return { x: NUM_COLS - col - 1, y: row - 1 };
  } else {
    return { x: col, y: NUM_ROWS - row };
  }
}

/**
 * Given an x and y values, returns algebraic notation.
 * Example: 0, 0 returns A1
 */
export function cartesianToAlgebraic(x: number, y: number, invert?: boolean) {
  if (invert) {
    const colSymbol = String.fromCharCode(NUM_COLS - x - 1 + 'a'.charCodeAt(0));
    return colSymbol + (y + 1);
  } else {
    const colSymbol = String.fromCharCode(x + 'a'.charCodeAt(0));
    return colSymbol + (NUM_ROWS - y);
  }
}

export function applyInvertion(coord: ICartesianCoords, invert: boolean) {
  if (invert) {
    return { x: NUM_COLS - coord.x - 1, y: NUM_ROWS - coord.y - 1 };
  }
  return coord;
}
