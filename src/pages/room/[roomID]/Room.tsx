import React from 'react';
import MessagePage from 'components/App/MessagePageClass';
import { LobbyService } from 'components/Lobby/LobbyService';
import FreeBoardGamesBar from 'components/App/FreeBoardGamesBar';
import { GameSharing } from 'components/App/Game/GameSharing';
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
import AlertLayer from 'components/App/Game/AlertLayer';

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
    const authData = getAuthData();
    const nickname = authData?.nickname;
    const nicknamePrompt = this.state.editingName ? (
      <AlertLayer>
        <NicknamePrompt nickname={nickname} setNickname={this._renameUser} closePrompt={this._toggleEditingName} />
      </AlertLayer>
    ) : null;
    const mainPage = this.state.roomMetadata ? (
      <React.Fragment>
        <GameCard game={GAMES_MAP[this.state.roomMetadata.gameCode]} />
        {this._getGameSharing()}
        <ListPlayers roomMetadata={this.state.roomMetadata} editNickname={this._toggleEditingName} />
      </React.Fragment>
    ) : null;
    return (
      <NicknameRequired
        showIf={this.state.showNicknameRequired}
        onSuccess={() => this.setState({ showNicknameRequired: false, loading: true })}
      >
        <FreeBoardGamesBar>
          {nicknamePrompt}
          {mainPage}
        </FreeBoardGamesBar>
      </NicknameRequired>
    );
  }

  updateMetadata = (firstRun?: boolean) => {
    const roomID = this.props.router.query.roomID as string;
    if (!firstRun) {
      if (this.state.editingName || this.state.showNicknameRequired) {
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

    LobbyService.updateRoomMetadata(roomID).then(
      (metadata) => {
        this.setState((oldState) => ({ ...oldState, roomMetadata: metadata, loading: false }));
      },
      (err) => {
        if (err.status === 401) {
          this.setState({ showNicknameRequired: true, loading: false });
        }
      },
    );
  };

  _toggleEditingName = () => {
    this.setState((oldState) => ({ ...oldState, editingName: !this.state.editingName }));
  };

  _renameUser = async (newNickname: string) => {
    LobbyService.renameUser(newNickname);
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
