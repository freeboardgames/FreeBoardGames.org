import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { fromPosition, equals } from './coord';
import { IG, IMove, getValidMoves } from './game';
import {
  Checkerboard,
  IAlgebraicCoords,
  ICartesianCoords,
  IOnDragData,
  applyInvertion,
  algebraicToCartesian,
  IColorMap,
  cartesianToAlgebraic,
} from 'gamesShared/components/boards/Checkerboard';
import { Token } from 'deprecated-bgio-ui';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import blue from '@material-ui/core/colors/blue';
import { isOnlineGame, isAIGame } from '../../gamesShared/helpers/gameMode';
import { isFirstPersonView } from 'gamesShared/helpers/GameUtil';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  step?: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

function roundCoords(coords: ICartesianCoords) {
  return { x: Math.round(coords.x), y: Math.round(coords.y) };
}

export function Board(props: IBoardProps) {
  const [selected, setSelected] = React.useState(null);
  const [validMoves, setValidMoves] = React.useState(getValidMoves(props.G, props.ctx.currentPlayer));

  function isInverted() {
    return (isAIGame(props.gameArgs) || isOnlineGame(props.gameArgs)) && props.playerID === '1';
  }

  const _isSelectable = (coords: ICartesianCoords) => {
    if (isOnlineGame(props.gameArgs) && props.playerID !== props.ctx.currentPlayer) {
      return false;
    }

    return validMoves.some((move) => equals(move.from, coords));
  };

  const _onClick = (coords: IAlgebraicCoords) => {
    const position = algebraicToCartesian(coords.square);
    if (selected === null && _isSelectable(position)) {
      setSelected(position);
    } else {
      _move(position);
    }
  };

  const _shouldDrag = (coords: ICartesianCoords) => {
    return _isSelectable(applyInvertion(coords, isInverted()));
  };

  const _onDrag = (coords: IOnDragData) => {
    const x = coords.x;
    const y = coords.y;
    const originalX = coords.originalX;
    const originalY = coords.originalY;
    if (Math.sqrt((x - originalX) ** 2 + (y - originalY) ** 2) > 0.2) {
      setSelected(applyInvertion({ x: originalX, y: originalY }, isInverted()));
    } else {
      setSelected(null);
    }
  };

  const _onDrop = async (coords: ICartesianCoords) => {
    if (selected) {
      _move(applyInvertion(roundCoords(coords), isInverted()));
    }
  };

  const _move = async (coords: ICartesianCoords) => {
    if (selected === null || coords === null) {
      return;
    }

    await props.moves.move(selected, coords);
  };

  function _getPreselectedMove(validMoves: IMove[]): ICartesianCoords {
    if (validMoves.length === 1) {
      const from = validMoves[0].from;
      return { x: from.x, y: from.y };
    }
    return null;
  }

  React.useEffect(() => {
    const newValidMoves =
      props.G.jumping === null
        ? getValidMoves(props.G, props.ctx.currentPlayer)
        : getValidMoves(props.G, props.ctx.currentPlayer, props.G.jumping);

    setValidMoves(newValidMoves);
    setSelected(_getPreselectedMove(newValidMoves));
  }, [props.ctx.turn]);

  function _getHighlightedSquares() {
    const result = {} as IColorMap;

    if (selected !== null) {
      result[cartesianToAlgebraic(selected.x, selected.y, false)] = blue[700];
      validMoves
        .filter((move) => equals(move.from, selected))
        .forEach((move) => {
          result[cartesianToAlgebraic(move.to.x, move.to.y, false)] = blue[500];
        });
    }

    return result;
  }

  const getPieces = () => {
    return props.G.board
      .map((piece, index) => ({ data: piece, index }))
      .filter((piece) => piece.data !== null)
      .map((piece) => {
        const { x, y } = fromPosition(piece.index);
        return (
          <Token
            x={x}
            y={y}
            draggable={true}
            shouldDrag={_shouldDrag}
            onDrop={_onDrop}
            onDrag={_onDrag}
            animate={true}
            key={piece.data.id}
          >
            <g>
              <circle r="0.4" fill={piece.data.playerID === '0' ? grey[50] : grey[900]} cx="0.5" cy="0.5" />
              {piece.data.isKing ? (
                <circle r="0.2" cx="0.5" cy="0.5" fill={piece.data.playerID === '1' ? grey[800] : grey[400]} />
              ) : null}
            </g>
          </Token>
        );
      });
  };

  function _getStatus() {
    if (isFirstPersonView(props.gameArgs, props.playerID)) {
      if (props.ctx.currentPlayer === props.playerID) {
        return 'Move piece';
      } else {
        return 'Waiting for opponent...';
      }
    } else {
      switch (props.ctx.currentPlayer) {
        case '0':
          return "White's turn";
        case '1':
          return "Black's turn";
      }
    }
  }

  function _getGameOver() {
    const winner = props.ctx.gameover.winner;
    if (winner) {
      if (isFirstPersonView(props.gameArgs, props.playerID)) {
        if (winner === props.playerID) {
          return 'you won';
        } else {
          return 'you lost';
        }
      } else {
        if (winner === '0') {
          return 'white won';
        } else {
          return 'black won';
        }
      }
    }
  }

  function render() {
    if (props.ctx.gameover) {
      return <GameLayout gameOver={_getGameOver()} gameArgs={props.gameArgs} />;
    }

    return (
      <GameLayout gameArgs={props.gameArgs}>
        <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
          {_getStatus()}
        </Typography>
        <Checkerboard onClick={_onClick} invert={isInverted()} highlightedSquares={_getHighlightedSquares()}>
          {getPieces()}
        </Checkerboard>
      </GameLayout>
    );
  }

  return render();
}
