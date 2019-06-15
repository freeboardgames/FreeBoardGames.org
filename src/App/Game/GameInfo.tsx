import React from 'react';
import FreeBoardGameBar from '../FreeBoardGameBar';
import { GameCard } from './GameCard';
import { GameModePicker } from './GameModePicker';
import { GameInstructions } from './GameInstructions';
import { IGameDef, GAMES_MAP } from '../../games';
import MessagePageClass from '../MessagePageClass';

interface IGameInfoProps {
  match?: any;
}

class GameInfo extends React.Component<IGameInfoProps, {}> {
  render() {
    const gameCode = this.props.match.params.gameCode;
    const gameDef: IGameDef = GAMES_MAP[gameCode]!;
    if (!gameDef) {
      return <MessagePageClass type={'error'} message={'Game Not Found'} />;
    }
    return (
      <FreeBoardGameBar>
        <GameCard game={gameDef} />
        <GameModePicker gameDef={gameDef} />
        <GameInstructions gameDef={gameDef} />
      </FreeBoardGameBar>
    );
  }
}

export default GameInfo;
