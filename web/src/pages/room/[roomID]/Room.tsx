import React from 'react';
import MessagePage from 'components/App/MessagePageClass';
import { LobbyService } from 'components/App/Lobby/LobbyService';
import { GAMES_MAP } from 'games';
import AlertLayer from 'components/App/Game/AlertLayer';
import FreeBoardGamesBar from 'components/App/FreeBoardGamesBar';
import { GameSharing } from 'components/App/Game/GameSharing';
import { ListPlayers } from 'components/App/Lobby/ListPlayers';
import { GameCard } from 'components/App/Game/GameCard';
import { NicknamePrompt } from 'components/App/Lobby/NicknamePrompt';
import { useRouter, NextRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';
import NicknameRequired from 'components/App/Lobby/NicknameRequired';
import SEO from 'components/SEO';
import { ActionNames } from 'redux/actions';
import { ReduxUserState } from 'redux/definitions';
import { connect } from 'react-redux';
import { Room as RoomDto } from 'dto/rooms/Room';
import { Dispatch } from 'redux';
import Router from 'next/router';

const MAX_TIMES_TO_UPDATE_METADATA = 2000;

interface IRoomProps {
  gameCode: string;
  roomID: string;
  router: NextRouter;
  user: ReduxUserState;
  dispatch: Dispatch;
}

interface IRoomState {
  roomMetadata?: RoomDto;
  nameTextField?: string;
  loading: boolean;
  error: string;
  editingName: boolean;
  interval: number | undefined;
  numberOfTimesUpdatedMetadata: number;
}

class Room extends React.Component<IRoomProps, IRoomState> {
  state: IRoomState = {
    error: '',
    loading: true,
    editingName: false,
    interval: undefined,
    numberOfTimesUpdatedMetadata: 0,
  };
  private timer: any; // fixme loads state of room

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
      return (
        <NicknameRequired>
          <MessagePage type={'loading'} message={'Loading...'} />
        </NicknameRequired>
      );
    }
    const gameDef = GAMES_MAP[this.state.roomMetadata.gameCode];
    return (
      <NicknameRequired>
        <SEO
          title={`Play ${gameDef.name}, ${gameDef.description}`}
          description={gameDef.descriptionTag}
          noindex={true}
        />
        <FreeBoardGamesBar>
          {this.getNicknamePrompt()}
          <GameCard game={gameDef} />
          {this._getGameSharing()}
          <ListPlayers roomMetadata={this.state.roomMetadata} editNickname={this._toggleEditingName} />
        </FreeBoardGamesBar>
      </NicknameRequired>
    );
  }

  updateMetadata = (firstRun?: boolean) => {
    const roomID = this.props.router.query.roomID as string;
    if (!firstRun && this.state.editingName) {
      return;
    }
    if (!this.props.user.loggedIn) {
      return;
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
    LobbyService.checkin(this.props.dispatch, roomID).then(
      async (response) => {
        if (response.matchId) {
          this._componentCleanup();
          Router.replace(`/match/${response.matchId}`);
        } else {
          this.setState({ loading: false, roomMetadata: response.room });
        }
      },
      () => {
        const error = 'Failed to fetch room metadata.';
        this._componentCleanup();
        this.setState((oldState) => ({ ...oldState, error }));
      },
    );
  };

  getNicknamePrompt() {
    if (!this.state.editingName) {
      return;
    }
    return (
      <AlertLayer>
        <NicknamePrompt
          setNickname={this._setNickname}
          nickname={this.props.user.nickname}
          closePrompt={this._toggleEditingName}
        />
      </AlertLayer>
    );
  }

  _toggleEditingName = () => {
    this.setState({ editingName: !this.state.editingName });
  };

  _setNickname = (nickname: string) => {
    LobbyService.renameUser(nickname);
    const payload: ReduxUserState = { ready: true, loggedIn: true, nickname };
    (this.props as any).dispatch({ type: ActionNames.SyncUser, payload });
    this._toggleEditingName();
  };

  componentWillUnmount() {
    this._componentCleanup();
    window.removeEventListener('beforeunload', this._componentCleanup);
  }

  _componentCleanup = () => {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  };

  _getGameSharing = () => {
    const gameCode = this.props.router.query.gameCode as string;
    const roomID = this.props.router.query.roomID as string;
    return <GameSharing gameCode={gameCode} roomID={roomID} />;
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

/* istanbul ignore next */
const mapStateToProps = function (state) {
  return {
    user: { ...state.user },
  };
};

export default connect(mapStateToProps)(roomWithRouter);
