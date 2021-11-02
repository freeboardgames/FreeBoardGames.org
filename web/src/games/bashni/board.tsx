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
import cyan from '@material-ui/core/colors/cyan';
import green from '@material-ui/core/colors/green';
import { isOnlineGame, isAIGame } from '../../gamesShared/helpers/gameMode';
import { isFirstPersonView } from 'gamesShared/helpers/GameUtil';
import { useCurrentGameTranslation } from 'infra/i18n';

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
  const { translate } = useCurrentGameTranslation();

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
      if (validMoves.some((move) => equals(move.to, position))) {
        _move(position);
      } else {
        setSelected(_isSelectable(position) ? position : null);
      }
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
    if (validMoves.length === 1 || validMoves.every((move) => equals(move.from, validMoves[0].from))) {
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

    if (newValidMoves.length === 0) return;

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
    } else if (props.G.forcedCapture && validMoves.some((move) => move.jumped)) {
      validMoves.forEach((move) => {
        result[cartesianToAlgebraic(move.from.x, move.from.y, false)] = cyan[500];
      });
    }

    return result;
  }

  const getPieces = () => {
    return props.G.board.map((stack) => {
      const { x, y } = fromPosition(stack.pos);
      return (
        <Token
          x={x}
          y={y}
          draggable={true}
          shouldDrag={_shouldDrag}
          onDrop={_onDrop}
          onDrag={_onDrag}
          animate={true}
          key={stack.id}
        >
          {stack.pieces.length === 1 ? (
            <g opacity={props.G.captured.includes(stack.pos) ? 0.3 : 1}>
              <circle r="0.4" fill={stack.pieces[0].playerID === '0' ? grey[50] : grey[900]} cx="0.5" cy="0.5" />
              {stack.pieces[0].isKing ? (
                <circle r="0.2" cx="0.5" cy="0.5" fill={stack.pieces[0].playerID === '1' ? grey[800] : grey[400]} />
              ) : null}
            </g>
          ) : (
            renderPieceStack(stack)
          )}
        </Token>
      );
    });
  };

  const renderPieceStack = (stack) => {
    let pieces = stack.pieces.slice();
    const maxHeight = Math.floor((isInverted() ? 63 - stack.pos : stack.pos) / 8) === 0 ? 4 : 9;
    const stackTooBig = stack.pieces.length > maxHeight;
    let yoff = 0.7;
    if (stackTooBig) {
      pieces = pieces.slice(-maxHeight + 1);
      yoff = 0.5;
    }
    const renderStack = pieces.map((piece, i) => (
      <g key={piece.id + 'p'}>
        <rect
          x="0.1"
          y={yoff - i * 0.2}
          width="0.8"
          height="0.2"
          rx="0.1"
          fill={piece.playerID === '0' ? grey[50] : grey[900]}
        />
        {piece.isKing ? (
          <rect
            x="0.3"
            y={yoff - i * 0.2}
            width="0.4"
            height="0.2"
            rx="0.1"
            fill={piece.playerID === '1' ? grey[800] : grey[400]}
          />
        ) : null}
      </g>
    ));
    return (
      <g opacity={props.G.captured.includes(stack.pos) ? 0.3 : 1}>
        {renderStack}
        {stackTooBig && <polygon points="0.35,0.75 0.65,0.75 0.5,0.9" fill={green[500]} />}
      </g>
    );
  };

  function _getStatus() {
    if (isFirstPersonView(props.gameArgs, props.playerID)) {
      if (props.ctx.currentPlayer === props.playerID) {
        return translate('move_piece');
      } else {
        return translate('waiting_for_opponent');
      }
    } else {
      switch (props.ctx.currentPlayer) {
        case '0':
          return translate('white_turn');
        case '1':
          return translate('black_turn');
      }
    }
  }

  function _getGameOver() {
    const winner = props.ctx.gameover.winner;
    if (winner) {
      if (isFirstPersonView(props.gameArgs, props.playerID)) {
        if (winner === props.playerID) {
          return translate('game_over.you_won');
        } else if (winner === 'draw') {
          return translate('game_over.draw');
        } else if (winner === 'repetition') {
          return translate('game_over.threefold_repetition');
        } else {
          return translate('game_over.you_lost');
        }
      } else {
        if (winner === '0') {
          return translate('game_over.white_won');
        } else if (winner === 'draw') {
          return translate('game_over.draw');
        } else if (winner === 'repetition') {
          return translate('game_over.threefold_repetition');
        } else {
          return translate('game_over.black_won');
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
