export interface ICoord {
  readonly x: number;
  readonly y: number;
}

export function createCoord(x: number, y: number): ICoord {
  return { x, y };
}

export function sum(a: ICoord, b: ICoord): ICoord {
  return { x: a.x + b.x, y: a.y + b.y };
}

export function multiply(coord: ICoord, multiplier: number): ICoord {
  return { x: coord.x * multiplier, y: coord.y * multiplier };
}

export function toIndex(coord: ICoord) {
  return coord.x + coord.y * 8;
}

export function inBounds(coord: ICoord) {
  return coord.x >= 0 && coord.x < 8 && coord.y >= 0 && coord.y < 8;
}

export function equals(a: ICoord, b: ICoord): boolean {
  return a.x === b.x && a.y === b.y;
}

export function fromPosition(position: number): ICoord {
  const x = position % 8;
  const y = Math.floor(position / 8);
  return { x, y };
}
