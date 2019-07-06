import React from 'react';
import { Client } from '@freeboardgame.org/boardgame.io/react';
import { IGameDef, GAMES_MAP, IGameConfig, IAIConfig } from '../../games';
import { gameBoardWrapper } from './GameBoardWrapper';
import { GameMode } from './GameModePicker';
import getMessagePage from '../MessagePage';
import MessagePageClass from '../MessagePageClass';
import { applyMiddleware } from 'redux';
import DEFAULT_ENHANCERS from './Enhancers';
import AddressHelper from '../Helpers/AddressHelper';
import { IRoomMetadata, IPlayerInRoom, LobbyService } from '../Lobby/LobbyService';
import { IGameArgs } from './GameBoardWrapper';

interface IGameProps {
  match?: any;
  history?: { push: (url: string) => void };
  room?: IRoomMetadata;
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
  currentUser: IPlayerInRoom;

  constructor(props: IGameProps) {
    super(props);
    if (this.props.room) {
      this.mode = GameMode.OnlineFriend;
      this.gameCode = this.props.room.gameCode;
      this.currentUser = this.props.room.currentUser;
    } else {
      this.mode = this.props.match.params.mode as GameMode;
      this.loadAI = this.mode === GameMode.AI && typeof window !== 'undefined';
      this.gameCode = this.props.match.params.gameCode;
    }
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
          state.config = promises[0].default as IGameConfig;
          if (this.loadAI) {
            state.ai = promises[1].default as IAIConfig;
          }
          state.loading = false;
          state.error = false;
        },
        () => {
          state.config = undefined;
          state.loading = false;
          state.error = true;
        },
      );
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
    let aiLevel, matchCode, playerID, credentials;
    if (this.props.match) {
      aiLevel = this.props.match.params.aiLevel;
      matchCode = this.props.match.params.matchCode;
      playerID = this.mode === GameMode.AI ? '0' : this.props.match.params.playerID;
    } else {
      credentials = LobbyService.getCredential(this.props.room.roomID).credential;
      playerID = this.currentUser.playerID.toString();
      matchCode = this.props.room.roomID;
    }
    if (!this.gameDef) {
      return <MessagePageClass type={'error'} message={'Game Not Found'} />;
    }
    if (!state.loading && state.config) {
      const gameArgs = {
        gameCode: this.gameCode,
        mode: this.mode,
        credentials,
        matchCode,
        players: this._getPlayers(),
        playerID,
      } as IGameArgs;
      const clientConfig: any = {
        game: state.config.bgioGame,
        debug: state.config.debug || false,
        loading: getMessagePage('loading', 'Connecting...'),
        board: gameBoardWrapper({
          board: state.config.bgioBoard,
          gameArgs,
        }),
        credentials,
        gameID: matchCode,
      };
      const allEnhancers = state.config.enhancers
        ? state.config.enhancers.concat(DEFAULT_ENHANCERS)
        : DEFAULT_ENHANCERS;
      const enhancers = allEnhancers.map((enhancer: any) => enhancer(gameArgs));
      clientConfig.enhancer = applyMiddleware(...enhancers);
      if (this.loadAI) {
        clientConfig.ai = state.ai.bgioAI(aiLevel);
      }
      if (this.mode === GameMode.OnlineFriend) {
        clientConfig.multiplayer = { server: AddressHelper.getServerAddress() };
      }
      const App = Client(clientConfig) as any;
      if (this.mode === GameMode.OnlineFriend) {
        return <App gameID={matchCode} playerID={playerID} credentials={credentials} />;
      } else {
        return <App gameID={matchCode} playerID={playerID} />;
      }
    } else if (state.loading) {
      const LoadingPage = getMessagePage('loading', `Downloading ${this.gameDef.name}...`);
      return <LoadingPage />;
    } else {
      const ErrorPage = getMessagePage('error', `Failed to download ${this.gameDef.name}.`);
      return <ErrorPage />;
    }
  }

  _getPlayers() {
    switch (this.mode) {
      case GameMode.OnlineFriend:
        return this.props.room.players;
      case GameMode.AI:
        return [{ playerID: 0, name: 'You', roomID: '' }, { playerID: 1, name: 'Computer', roomID: '' }];
      case GameMode.LocalFriend:
        return [{ playerID: 0, name: 'Player 1', roomID: '' }, { playerID: 1, name: 'Player 2', roomID: '' }];
    }
  }
}
