import React from 'react';
import { IGameArgs } from '../../App/Game/GameBoardWrapper';
import { GameLayout } from '../../App/Game/GameLayout';
import { Grid } from '@freeboardgame.org/boardgame.io/ui';
import { Token } from '@freeboardgame.org/boardgame.io/ui';
import { IG, IScore, IPiecePosition, rotatePiece, flipPieceY, flipPieceX } from './game';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';
//import { Scoreboard } from './Scoreboard';
import { GameMode } from '../../App/Game/GameModePicker';
import css from './Board.css';

import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import green from '@material-ui/core/colors/lightGreen';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

import Typography from '@material-ui/core/Typography';

import { pieces } from './pieces';

export interface ICoords {
  x: number;
  y: number;
}

export interface IColorMap {
  [key: string]: string;
}

interface IBoardProps {
  G: IG;
  ctx: IGameCtx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

interface IBoardState {
  piecePosition: IPiecePosition;
  piece: boolean[];
}

export class Board extends React.Component<IBoardProps, IBoardState> {
  constructor(props: IBoardProps) {
    super(props);
    this.state = {
      piecePosition: { x: 10, y: 10, rotation: 0, flipX: false, flipY: false },
      piece: rotatePiece(pieces[9]),
    };
  }

  _placePiece = this.placePiece.bind(this);
  _flipY = this.flipY.bind(this);
  _flipX = this.flipX.bind(this);

  placePiece() {
    this.props.moves.placePiece(9, this.state.piecePosition);
  }

  rotate(n: number) {
    let piece = rotatePiece(this.state.piece);
    for (let i = 0; i < n - 1; i++) {
      piece = rotatePiece(piece);
    }
    this.setState({
      ...this.state,
      piecePosition: { ...this.state.piecePosition, rotation: (this.state.piecePosition.rotation + n) % 4 },
      piece,
    });
  }

  flipY() {
    this.setState({
      ...this.state,
      piecePosition: { ...this.state.piecePosition, flipY: !this.state.piecePosition.flipY },
      piece: flipPieceY(this.state.piece),
    });
  }

  flipX() {
    this.setState({
      ...this.state,
      piecePosition: { ...this.state.piecePosition, flipX: !this.state.piecePosition.flipX },
      piece: flipPieceX(this.state.piece),
    });
  }
  /*
    _getGameOver() {
        const scoreboard: IScore[] = this.props.ctx.gameover.scoreboard;
        if (scoreboard[0].score === scoreboard[scoreboard.length - 1].score) {
            return 'draw';
        } else {
            if (scoreboard[0].score === scoreboard[this.props.playerID as any].score) {
                return 'you won';
            } else {
                return 'you lost';
            }
        }
    }*/
  /*
    _getScoreBoard() {
        return (
            <Scoreboard
                scoreboard={this.props.ctx.gameover.scoreboard}
                playerID={this.props.playerID}
                players={this.props.gameArgs.players}
            />
        );
    }*/

  isLocalGame() {
    return this.props.gameArgs && this.props.gameArgs.mode === GameMode.LocalFriend;
  }

  _getStatus() {
    if (!this.props.gameArgs) {
      return;
    }

    let message = '';
    if (this.isLocalGame()) {
      let player;
      switch (this.props.ctx.currentPlayer) {
        case '0': {
          player = 'Red';
          break;
        }
        case '1': {
          player = 'Green';
          break;
        }
      }
      message = `${player}'s turn`;
    } else if (this.props.ctx.currentPlayer === this.props.playerID && !this.isLocalGame()) {
      message = 'Place piece';
    } else if (this.props.ctx.currentPlayer !== this.props.playerID && !this.isLocalGame()) {
      message = 'Waiting for opponent...';
    }
    return message;
  }

  _onDrop = (coords: { x: number; y: number; originalX: number; originalY: number }) => {
    const x = Math.round(coords.x);
    const y = Math.round(coords.y);
    this.setState({ ...this.state, piecePosition: { ...this.state.piecePosition, x, y } });
    /*
    if (x < 0 || y < 0 || x >= 10 || y >= 10) {
      return;
    }*/
  };

  render() {
    /*
        if (this.props.ctx.gameover) {
            return (
                <GameLayout
                    gameOver={this._getGameOver()}
                    extraCardContent={this._getScoreBoard()}
                    gameArgs={this.props.gameArgs}
                />
            );
        }*/

    const colorMap = this.getColorMap();

    return (
      <GameLayout>
        <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
          {this._getStatus()}
        </Typography>
        <Grid rows={20} cols={20} onClick={() => null} colorMap={colorMap}>
          {this.props.G.board
            .map((square, index) => ({ square, index }))
            .filter(piece => piece.square !== null)
            .map(piece => (
              <Token x={piece.index % 20} y={Math.floor(piece.index / 20)} key={piece.index}></Token>
            ))}
          <Token
            x={this.state.piecePosition.x}
            y={this.state.piecePosition.y}
            draggable={true}
            shouldDrag={() => true}
            onDrop={this._onDrop}
          >
            <g fill={blue[500]} opacity={0.8}>
              {this.state.piece
                .map((square, index) => ({ square, index }))
                .filter(piece => piece.square)
                .map(piece => (
                  <rect
                    x={piece.index % Math.sqrt(pieces[9].length)}
                    y={Math.floor(piece.index / Math.sqrt(pieces[9].length))}
                    width="1"
                    height="1"
                    key={piece.index}
                  ></rect>
                ))}
            </g>
          </Token>
        </Grid>
        <button onClick={this._placePiece}>Place</button>
        <button onClick={() => this.rotate(3)}>Rotate left</button>
        <button onClick={() => this.rotate(1)}>Rotate right</button>
        <button onClick={this._flipY}>Flip piece Y</button>
        <button onClick={this._flipX}>Flip piece X</button>
      </GameLayout>
    );
  }

  getColorMap(): IColorMap {
    const colorMap = {} as IColorMap;
    for (let x = 0; x < 20; x++) {
      for (let y = 0; y < 20; y++) {
        const key = `${x},${y}`;
        let color = grey[800];
        if ((x + y) % 2 === 0) {
          color = grey[900];
        }
        colorMap[key] = color;
      }
    }
    return colorMap;
  }
}
