import React from 'react';
import { Client } from 'flamecoals-boardgame.io/react';
import { IGameDef, GAMES_MAP } from '../../games';
import { IGameConfig } from '../../games/config';
import { gameBoardWrapper } from './GameBoardWrapper';
import { GameMode } from './GameModePicker';

interface IGameProps {
  match?: any;
  history?: { push: (url: string) => void };
}

interface IGameState {
  loading: boolean;
  error: boolean;
  config: IGameConfig | undefined;
}

const state: IGameState = {
  loading: true,
  error: false,
  config: undefined,
};

export default class Game extends React.Component<IGameProps, {}> {
  gameCode: string;
  gameConfigPromise: Promise<any>;

  constructor(props: IGameProps) {
    super(props);
    this.gameCode = this.props.match.params.gameCode;
  }

  clear() {
    state.loading = true;
    state.error = false;
    state.config = undefined;
  }

  bootstrap() {
    return this.load();
  }

  load() {
    const gameDef: IGameDef = GAMES_MAP[this.gameCode];
    return gameDef.config().then((config) => {
      state.config = config.default;
      state.loading = false;
      state.error = false;
    }, () => {
      state.config = undefined;
      state.loading = false;
      state.error = true;
    });
  }

  componentDidMount() {
    this.load().then(() => {
      this.forceUpdate();
    });
  }

  render() {
    const mode = this.props.match.params.mode as GameMode;
    const matchCode = this.props.match.params.matchCode;
    const playerID = this.props.match.params.playerID;
    if (!state.loading && state.config) {
      const clientConfig: any = {
        game: state.config.bgioGame,
        board: gameBoardWrapper({
          board: state.config.bgioBoard,
          gameArgs: {
            gameCode: this.gameCode,
            mode,
            matchCode,
            playerID,
          },
        }),
        debug: false,
      };
      if (state.config.enhancer) {
        clientConfig.enhancer = state.config.enhancer;
      }
      if (mode === GameMode.OnlineFriend) {
        clientConfig.multiplayer = true;
      }
      const App = Client(clientConfig) as any;
      return (
        <App gameID={matchCode} playerID={playerID} />
      );
    } else if (state.loading) {
      return (<div>Loading...</div>);
    } else {
      return (<div>Error loading Game!</div>);
    }
  }
}
