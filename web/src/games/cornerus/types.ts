export interface ICoords {
  x: number;
  y: number;
}

export interface IColorMap {
  [key: string]: string;
}

export interface IPiece {
  transform: IPieceTransform;
  index: number;
  data: boolean[];
}

export interface IPieceTransform {
  x: number;
  y: number;
  rotation: number;
  flipX: boolean;
  flipY: boolean;
}

export interface IPlayer {
  end: boolean;
  pieces: number[];
}

export interface IG {
  board: string[];
  players: IPlayer[];
  turnOrder: string[];
  turn: number;
  playOrderPos: number;
}
