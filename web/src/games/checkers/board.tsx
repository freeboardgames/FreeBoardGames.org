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
import { isOnlineGame, isAIGame } from '../../gamesShared/helpers/gameMode';
import { isFirstPersonView } from 'gamesShared/helpers/GameUtil';
import { useCurrentGameTranslation } from 'infra/i18n';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: {
    move: (from: ICartesianCoords, to: ICartesianCoords) => Promise<void>;
  };
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

  const isInverted = () => {
    return (isAIGame(props.gameArgs) || isOnlineGame(props.gameArgs)) && props.playerID === '1';
  };

  const isSelectable = (coords: ICartesianCoords) => {
    if (isOnlineGame(props.gameArgs) && props.playerID !== props.ctx.currentPlayer) {
      return false;
    }

    return validMoves.some((move) => equals(move.from, coords));
  };

  const onClick = (coords: IAlgebraicCoords) => {
    const position = algebraicToCartesian(coords.square);
    if (selected === null && isSelectable(position)) {
      setSelected(position);
    } else {
      if (validMoves.some((move) => equals(move.to, position))) {
        move(position);
      } else {
        setSelected(isSelectable(position) ? position : null);
      }
    }
  };

  const shouldDrag = (coords: ICartesianCoords) => {
    return isSelectable(applyInvertion(coords, isInverted()));
  };

  const onDrag = (coords: IOnDragData) => {
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

  const onDrop = async (coords: ICartesianCoords) => {
    if (selected) {
      move(applyInvertion(roundCoords(coords), isInverted()));
    }
  };

  const move = async (coords: ICartesianCoords) => {
    if (selected === null || coords === null) {
      return;
    }

    await props.moves.move(selected, coords);
  };

  const getPreselectedMove = (validMoves: IMove[]): ICartesianCoords => {
    if (validMoves.length === 1 || validMoves.every((move) => equals(move.from, validMoves[0].from))) {
      const from = validMoves[0].from;
      return { x: from.x, y: from.y };
    }
    return null;
  };

  React.useEffect(() => {
    const newValidMoves =
      props.G.jumping === null
        ? getValidMoves(props.G, props.ctx.currentPlayer)
        : getValidMoves(props.G, props.ctx.currentPlayer, props.G.jumping);

    if (newValidMoves.length === 0) return;

    setValidMoves(newValidMoves);
    setSelected(getPreselectedMove(newValidMoves));
  }, [props.ctx.turn]);

  const getHighlightedSquares = () => {
    const result = {} as IColorMap;

    if (selected !== null) {
      result[cartesianToAlgebraic(selected.x, selected.y, false)] = blue[700];
      validMoves
        .filter((move) => equals(move.from, selected))
        .forEach((move) => {
          result[cartesianToAlgebraic(move.to.x, move.to.y, false)] = blue[500];
        });
    } else if (props.G.config.forcedCapture && validMoves.some((move) => move.jumped)) {
      validMoves.forEach((move) => {
        result[cartesianToAlgebraic(move.from.x, move.from.y, false)] = cyan[500];
      });
    }

    return result;
  };

  const getPieces = () => {
    return props.G.board.map((piece) => {
      const { x, y } = fromPosition(piece.pos);
      return (
        <Token
          x={x}
          y={y}
          draggable={true}
          shouldDrag={shouldDrag}
          onDrop={onDrop}
          onDrag={onDrag}
          animate={true}
          key={piece.id}
        >
          <g>
            <circle r="0.4" fill={piece.playerID === '0' ? grey[50] : grey[900]} cx="0.5" cy="0.5" />
            {piece.isKing ? (
              <circle r="0.2" cx="0.5" cy="0.5" fill={piece.playerID === '1' ? grey[800] : grey[400]} />
            ) : null}
          </g>
        </Token>
      );
    });
  };

  const getStatus = () => {
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
  };

  const getGameOver = () => {
    const winner = props.ctx.gameover.winner;
    if (winner) {
      if (isFirstPersonView(props.gameArgs, props.playerID)) {
        if (winner === props.playerID) {
          return translate('game_over.you_won');
        } else if (winner === 'draw') {
          return translate('game_over.draw');
        } else {
          return translate('game_over.you_lost');
        }
      } else {
        if (winner === '0') {
          return translate('game_over.white_won');
        } else if (winner === 'draw') {
          return translate('game_over.draw');
        } else {
          return translate('game_over.black_won');
        }
      }
    }
  };

  if (props.ctx.gameover) {
    return <GameLayout gameOver={getGameOver()} gameArgs={props.gameArgs} />;
  }

  return (
    <GameLayout gameArgs={props.gameArgs}>
      <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
        {getStatus()}
      </Typography>
      <Checkerboard onClick={onClick} invert={isInverted()} highlightedSquares={getHighlightedSquares()}>
        {getPieces()}
      </Checkerboard>
    </GameLayout>
  );
}
