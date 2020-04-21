import React from 'react';
import MessagePage from 'components/App/MessagePageClass';
// import { LobbyService, IRoomMetadata, IPlayerInRoom } from 'components/App/Lobby/LobbyService';
import { LobbyService } from 'components/Lobby/LobbyService';
import FreeBoardGamesBar from 'components/App/FreeBoardGamesBar';
import { GameSharing } from 'components/App/Game/GameSharing';
// import Game from '../../../../components/App/Game/Game';
// import { ListPlayers } from '../../../../components/App/Lobby/ListPlayers';
// import { GameCard } from '../../../../components/App/Game/GameCard';
// import { NicknamePrompt } from '../../../../components/App/Lobby/NicknamePrompt';
import { useRouter, NextRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';
import { GAMES_MAP } from 'games';
import { GameCard } from 'components/App/Game/GameCard';
import { ListPlayers } from 'components/App/Lobby/ListPlayers';
import NicknamePrompt from 'components/Lobby/NicknamePrompt';
import { Room as RoomMetadata } from 'dto/Room';
import { getAuthData } from 'misc/AuthHelper';
import NicknameRequired from 'components/Lobby/NicknameRequired';

const MAX_TIMES_TO_UPDATE_METADATA = 2000;

interface IRoomProps {
  gameCode: string;
  roomID: string;
  router: NextRouter;
}

interface IRoomState {
  roomMetadata?: RoomMetadata;
  nameTextField?: string;
  loading: boolean;
  gameReady: boolean;
  error: string;
  editingName: boolean;
  interval: number | undefined;
  numberOfTimesUpdatedMetadata: number;
  showNicknameRequired: boolean;
}

class Room extends React.Component<IRoomProps, IRoomState> {
  state: IRoomState = {
    error: '',
    loading: true,
    gameReady: false,
    editingName: false,
    interval: undefined,
    numberOfTimesUpdatedMetadata: 0,
    showNicknameRequired: !getAuthData(),
  };
  private timer: any; // fixme loads state of room
  private promise: Promise<RoomMetadata | void>;

  constructor(props) {
    super(props);
    this._componentCleanup = this._componentCleanup.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this._componentCleanup);
    this.timer = setInterval(() => this.updateMetadata(), 2000);
    this.updateMetadata(true);
  }

  render() {
    if (this.state.error) {
      const TryAgain = (
        <Button variant="outlined" style={{ margin: '8px' }} onClick={this._tryAgain}>
          <ReplayIcon style={{ marginRight: '8px' }} />
          Try Again
        </Button>
      );
      return <MessagePage type={'error'} message={this.state.error} actionComponent={TryAgain} />;
    }
    if (this.state.loading) {
      return <MessagePage type={'loading'} message={'Loading...'} />;
    }
    // if (this.state.gameReady) {
    //   const room = this.state.roomMetadata;
    //   return <Game room={room} />;
    // }
    // const nicknamePrompt = this.state.editingName ? (
    //   <AlertLayer>{this._getNamePrompt(this.state.roomMetadata.currentUser.name)}</AlertLayer>
    // ) : null;
    const nicknamePrompt = null;
    return (
      <NicknameRequired
        showIf={this.state.showNicknameRequired}
        onSuccess={() => this.setState({ showNicknameRequired: false })}
      >
        <FreeBoardGamesBar>
          {nicknamePrompt}
          <GameCard game={GAMES_MAP[this.state.roomMetadata.gameCode]} />
          {this._getGameSharing()}
          <ListPlayers roomMetadata={this.state.roomMetadata} editNickname={this._toggleEditingName} />
        </FreeBoardGamesBar>
      </NicknameRequired>
    );
  }

  updateMetadata = (firstRun?: boolean) => {
    const roomID = this.props.router.query.roomID as string;
    if (!firstRun) {
      if (this.state.editingName) {
        return;
      }
    }
    if (this.state.numberOfTimesUpdatedMetadata > MAX_TIMES_TO_UPDATE_METADATA) {
      const error = 'Session expired.  Please refresh the page.';
      this.setState((oldState) => ({ ...oldState, error }));
      return;
    }
    this.setState((oldState) => ({
      ...oldState,
      numberOfTimesUpdatedMetadata: this.state.numberOfTimesUpdatedMetadata + 1,
    }));

    this.promise = LobbyService.getRoom(roomID).then(
      (metadata) => {
        this.setState((oldState) => ({ ...oldState, roomMetadata: metadata, loading: false }));
      },
      (err) => {
        if (err.status === 401) {
          this.setState({ showNicknameRequired: true });
        }
      },
    );
    // this.promise = LobbyService.getRoomMetadata(gameCode, roomID)
    //   .then(async (metadata) => {
    //     if (!metadata.currentUser) {
    //       const player: IPlayerInRoom = {
    //         playerID: metadata.players.length,
    //         roomID,
    //         name: LobbyService.getNickname(),
    //       };
    //       await LobbyService.joinRoom(gameCode, player);
    //       return LobbyService.getRoomMetadata(gameCode, roomID);
    //     }
    //     return metadata;
    //   })
    //   .then(
    //     (metadata) => {
    //       if (metadata.numberOfPlayers === metadata.players.length) {
    //         this.setState((oldState) => ({ ...oldState, gameReady: true }));
    //         this._componentCleanup();
    //       }
    //       this.setState((oldState) => ({ ...oldState, roomMetadata: metadata, loading: false }));
    //       return metadata;
    //     },
    //     () => {
    //       const error = 'Failed to fetch room metadata.';
    //       this._componentCleanup();
    //       this.setState((oldState) => ({ ...oldState, error }));
    //     },
    //   );
  };

  _getNamePrompt = (name?: string) => {
    const togglePrompt = this.state.editingName ? this._toggleEditingName : null;
    // return <NicknamePrompt setNickname={this._setNickname} nickname={name} togglePrompt={togglePrompt} />;
    return <NicknamePrompt setNickname={this._setNickname} nickname={name} />;
  };

  _toggleEditingName = () => {
    this.setState((oldState) => ({ ...oldState, editingName: !this.state.editingName }));
  };

  _setNickname = (nickname: string) => {
    // TODO
    // LobbyService.setNickname(nickname);
    // if (this.state.editingName) {
    //   const room = this.state.roomMetadata;
    //   LobbyService.renameUser(room.gameCode, room.currentUser, nickname);
    //   this._toggleEditingName();
    // }
    // this.updateMetadata();
  };

  componentWillUnmount() {
    this._componentCleanup();
    window.removeEventListener('beforeunload', this._componentCleanup);
  }

  _componentCleanup = () => {
    clearInterval(this.timer);
    this.timer = undefined;
  };

  _getGameSharing = () => {
    const gameCode = this.props.router.query.gameCode as string;
    const roomID = this.props.router.query.roomID as string;
    return <GameSharing gameCode={gameCode} roomID={roomID} roomMetadata={this.state.roomMetadata} />;
  };

  _tryAgain = () => {
    this.setState((oldState) => ({ ...oldState, error: '' }));
    this.updateMetadata();
    this.timer = setInterval(() => this.updateMetadata(), 2000);
  };
}

const roomWithRouter = (props) => {
  const router = useRouter();
  return <Room {...props} router={router} />;
};

export default roomWithRouter;
