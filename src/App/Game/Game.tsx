import * as React from 'react';
import { Client } from 'flamecoals-boardgame.io/react';
import { IGameDef, GAMES_MAP } from '../../games';
import { gameBoardWrapper } from './GameBoardWrapper';
import { GameMode } from './GameModePicker';

interface IGameProps {
  match?: any;
  history?: { push: (url: string) => void };
}

export class Game extends React.Component<IGameProps, {}> {
  render() {
    const gameCode = this.props.match.params.gameCode;
    const mode = this.props.match.params.mode as GameMode;
    const matchCode = this.props.match.params.matchCode;
    const playerID = this.props.match.params.playerID;
    const gameDef: IGameDef = GAMES_MAP[gameCode];
    const clientConfig: any = {
      game: gameDef.bgioGame,
      board: gameBoardWrapper({
        gameCode,
        mode,
        matchCode,
        playerID,
      }),
      debug: false,
    };
    if (gameDef.enhancer) {
      clientConfig.enhancer = gameDef.enhancer;
    }
    if (mode === GameMode.OnlineFriend) {
      clientConfig.multiplayer = true;
    }
    const App = Client(clientConfig) as any;
    return (
      <App gameID={matchCode} playerID={playerID} />
    );
  }
}
