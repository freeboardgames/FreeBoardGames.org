import React from 'react';
import { Client } from 'boardgame.io/react';
import { IGameDef, GAMES_MAP, IGameConfig, IAIConfig } from 'games';
import { gameBoardWrapper } from './GameBoardWrapper';
import { GameMode } from './GameModePicker';
import getMessagePage from '../MessagePage';
import MessagePageClass from '../MessagePageClass';
import { applyMiddleware } from 'redux';
import DEFAULT_ENHANCERS from './Enhancers';
import { IPlayerInRoom } from '../Lobby/LobbyService';
import { IGameArgs } from './GameBoardWrapper';
import ReactGA from 'react-ga';
import { SocketIO, Local } from 'boardgame.io/multiplayer';
import { GetMatch_match } from 'gqlTypes/GetMatch';

interface IGameProps {
  // FIXME: fix which props are req
  history?: { push: (url: string) => void };
  match?: GetMatch_match;
  matchCode?: string;
  gameCode?: string;
  mode?: string;
  aiLevel?: string;
  playerID?: string;
}

interface IGameState {
  loading: boolean;
  config?: IGameConfig;
  ai?: IAIConfig;
}

export default class Game extends React.Component<IGameProps, IGameState> {
  mode: GameMode;
  loadAI: boolean;
  gameCode: string;
  serverUrl: string;
  gameDef: IGameDef;
  promise: any; // for testing

  constructor(props: IGameProps) {
    super(props);
    this.state = {
      loading: true,
    };
    if (this.props.match) {
      this.mode = GameMode.OnlineFriend;
      this.gameCode = this.props.match.gameCode;
      this.serverUrl = this.props.match.bgioServerUrl;
    } else {
      this.mode = this.props.mode as GameMode;
      this.loadAI = this.mode === GameMode.AI && typeof window !== 'undefined';
      this.gameCode = this.props.gameCode;
    }
    this.gameDef = GAMES_MAP[this.gameCode];
  }

  clear() {
    this.setState({
      loading: true,
    });
  }

  load() {
    if (this.gameDef) {
      let aiPromise = Promise.resolve({});
      if (this.loadAI) {
        aiPromise = this.gameDef.aiConfig();
      }
      return Promise.all([this.gameDef.config(), aiPromise]).then(
        (promises: any) => {
          this.setState(() => ({
            config: promises[0].default as IGameConfig,
            ai: this.loadAI ? (promises[1].default as IAIConfig) : null,
            loading: false,
          }));
        },
        () => {
          this.setState({
            loading: false,
          });
          // throw(e);
        },
      );
    } else {
      this.setState({
        loading: false,
      });
      return Promise.resolve();
    }
  }

  componentDidMount() {
    if (this.gameDef) {
      this.promise = this.load();
    }
  }

  componentWillUnmount() {
    this.clear();
  }

  render() {
    let aiLevel, matchCode, playerID, credentials;
    if (this.props.match) {
      credentials = this.props.match.bgioSecret;
      matchCode = this.props.match.bgioMatchId;
      playerID = this.props.match.bgioPlayerId;
    } else {
      aiLevel = this.props.aiLevel;
      matchCode = this.props.matchCode;
      playerID = this.mode === GameMode.AI ? '1' : this.props.playerID;
    }
    if (!this.gameDef) {
      return <MessagePageClass type={'error'} message={'Game Not Found'} />;
    }
    const validGameModes = this.gameDef.modes.map((mode) => mode.mode.toLowerCase());
    if (!validGameModes.includes(this.mode.toLowerCase())) {
      return <MessagePageClass type={'error'} message={'Invalid Game Mode'} />;
    }
    if (!this.state.loading && this.state.config) {
      const gameArgs = {
        gameCode: this.gameCode,
        mode: this.mode,
        credentials,
        matchCode,
        players: this._getPlayers(),
        playerID,
      } as IGameArgs;
      const clientConfig: any = {
        game: this.state.config.bgioGame,
        debug: this.state.config.debug || false,
        loading: getMessagePage('loading', 'Connecting...'),
        board: gameBoardWrapper({
          board: this.state.config.bgioBoard,
          gameArgs,
        }),
        credentials,
        gameID: matchCode,
      };
      const allEnhancers = this.state.config.enhancers
        ? this.state.config.enhancers.concat(DEFAULT_ENHANCERS)
        : DEFAULT_ENHANCERS;
      const enhancers = allEnhancers.map((enhancer: any) => enhancer(gameArgs));
      clientConfig.enhancer = applyMiddleware(...enhancers);
      const ai = this.state.ai;
      if (this.loadAI && ai) {
        const gameAIConfig = ai.bgioAI(aiLevel);
        const gameAI = gameAIConfig.ai || gameAIConfig.bot || gameAIConfig;
        const gameAIType = gameAIConfig.type || gameAI;

        clientConfig.multiplayer = Local({
          bots: { '0': gameAIType },
        });
        clientConfig.game.ai = gameAI;
      }
      if (this.mode === GameMode.OnlineFriend) {
        clientConfig.multiplayer = SocketIO({ server: this.serverUrl });
      }
      const App = Client(clientConfig) as any;
      ReactGA.event({
        category: 'Game',
        label: gameArgs.gameCode,
        action: `Started ${this.mode} game`,
      });
      if (this.mode === GameMode.OnlineFriend) {
        return <App gameID={matchCode} playerID={playerID} credentials={credentials} />;
      } else {
        return <App gameID={matchCode} playerID={playerID} />;
      }
    } else if (this.state.loading) {
      const LoadingPage = getMessagePage('loading', `Downloading ${this.gameDef.name}...`);
      return <LoadingPage />;
    } else {
      const ErrorPage = getMessagePage('error', `Failed to download ${this.gameDef.name}.`);
      return <ErrorPage />;
    }
  }

  _getPlayers(): IPlayerInRoom[] {
    switch (this.mode) {
      case GameMode.OnlineFriend:
        return this.props.match.playerMemberships.map((membership, index) => ({
          playerID: index,
          name: membership.user.nickname,
        }));
      case GameMode.AI:
        return [
          { playerID: 0, name: 'Computer' },
          { playerID: 1, name: 'You' },
        ];
      case GameMode.LocalFriend:
        return [
          { playerID: 0, name: 'Player 1' },
          { playerID: 1, name: 'Player 2' },
        ];
    }
  }
}
