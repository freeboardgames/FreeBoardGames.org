import React from 'react';
import { Client } from '@freeboardgame.org/boardgame.io/react';
import { IGameDef, GAMES_MAP, IGameConfig, IAIConfig } from '../../games';
import { gameBoardWrapper } from './GameBoardWrapper';
import { GameMode } from './GameModePicker';
import getMessagePage from '../MessagePage';
import MessagePageClass from '../MessagePageClass';
import { applyMiddleware } from 'redux';

interface IGameProps {
  match?: any;
  history?: { push: (url: string) => void };
}

interface IGameState {
  loading: boolean;
  error: boolean;
  config: IGameConfig | undefined;
  ai?: IAIConfig | undefined;
}

const state: IGameState = {
  loading: true,
  error: false,
  config: undefined,
};

export default class Game extends React.Component<IGameProps, {}> {
  mode: GameMode;
  loadAI: boolean;
  gameCode: string;
  gameDef: IGameDef;
  gameConfigPromise: Promise<any>;

  constructor(props: IGameProps) {
    super(props);
    this.mode = this.props.match.params.mode as GameMode;
    this.loadAI = this.mode === GameMode.AI && typeof window !== 'undefined';
    this.gameCode = this.props.match.params.gameCode;
    this.gameDef = GAMES_MAP[this.gameCode];
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
    if (this.gameDef) {
      let aiPromise = Promise.resolve({});
      if (this.loadAI) {
        aiPromise = this.gameDef.aiConfig();
      }
      return Promise.all([this.gameDef.config(), aiPromise]).then(
        (promises: any) => {
          state.config = (promises[0].default as IGameConfig);
          if (this.loadAI) {
            state.ai = (promises[1].default as IAIConfig);
          }
          state.loading = false;
          state.error = false;
        }, () => {
          state.config = undefined;
          state.loading = false;
          state.error = true;
        });
    } else {
      state.config = undefined;
      state.loading = false;
      state.error = true;
      return Promise.resolve();
    }
  }

  componentDidMount() {
    if (this.gameDef) {
      this.load().then(() => {
        this.forceUpdate();
      });
    }
  }

  componentWillUnmount() {
    this.clear();
  }

  render() {
    const aiLevel = this.props.match.params.aiLevel;
    const matchCode = this.props.match.params.matchCode;
    const playerID = this.props.match.params.playerID;
    if (!this.gameDef) {
      return <MessagePageClass type={'error'} message={'Game Not Found'} />;
    }
    if (!state.loading && state.config) {
      const gameArgs = {
        gameCode: this.gameCode,
        mode: this.mode,
        matchCode,
        playerID,
      };
      const clientConfig: any = {
        game: state.config.bgioGame,
        debug: state.config.debug || false,
        server: process.env.BGIO_SERVER_URL || undefined,
        loading: getMessagePage('loading', 'Connecting...'),
        board: gameBoardWrapper({
          board: state.config.bgioBoard,
          gameArgs,
        }),
      };
      if (state.config.enhancers) {
        const enhancers = [];
        for (const enhancer of state.config.enhancers) {
          enhancers.push(enhancer(gameArgs));
        }
        clientConfig.enhancer = applyMiddleware(...enhancers);
      }
      if (this.loadAI) {
        clientConfig.ai = state.ai.bgioAI(aiLevel);
      }
      if (this.mode === GameMode.OnlineFriend) {
        clientConfig.multiplayer = true;
      }
      const App = Client(clientConfig) as any;
      return (
        <App gameID={matchCode} playerID={playerID} />
      );
    } else if (state.loading) {
      const LoadingPage = getMessagePage(
        'loading',
        `Downloading ${this.gameDef.name}...`,
      );
      return <LoadingPage />;
    } else {
      const ErrorPage = getMessagePage(
        'error',
        `Failed to download ${this.gameDef.name}.`,
      );
      return <ErrorPage />;
    }
  }
}
