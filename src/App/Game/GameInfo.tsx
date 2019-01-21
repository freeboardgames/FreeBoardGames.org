import * as React from 'react';
import TurnatoBar from '../TurnatoBar';
import { GameCard } from './GameCard';
import { GameModePicker } from './GameModePicker';
import { IGameDef, GAMES_MAP } from '../../games';

interface IGameInfoProps {
  match?: any;
  history?: { push: (url: string) => void };
}

export class GameInfo extends React.Component<IGameInfoProps, {}> {
  render() {
    const gameCode = this.props.match.params.gameCode;
    const gameDef: IGameDef = GAMES_MAP[gameCode]!;

    return (
      <TurnatoBar>
        <GameCard game={gameDef} />
        <GameModePicker
          gameCode={gameDef.code}
          modes={gameDef.modes}
          history={this.props.history}
        />
      </TurnatoBar>
    );
  }
}
