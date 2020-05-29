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
import Tooltip from '@material-ui/core/Tooltip';
import ReplayIcon from '@material-ui/icons/Replay';
import NicknameRequired from 'components/App/Lobby/NicknameRequired';
import SEO from 'components/SEO';
import { ActionNames } from 'redux/actions';
import { ReduxUserState } from 'redux/definitions';
import { connect } from 'react-redux';
import { CheckinRoom_checkinRoom } from 'gqlTypes/CheckinRoom';
import { Dispatch } from 'redux';
import Router from 'next/router';

const MAX_TIMES_TO_UPDATE_METADATA = 1000;
const CHECKIN_PERIOD = 5;

interface IRoomProps {
  gameCode: string;
  router: NextRouter;
  user: ReduxUserState;
  dispatch: Dispatch;
}

interface IRoomState {
  roomMetadata?: CheckinRoom_checkinRoom;
  nameTextField?: string;
  userId?: number;
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
    this.timer = setInterval(() => this.updateMetadata(), CHECKIN_PERIOD * 1e3);
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
          <ListPlayers
            roomMetadata={this.state.roomMetadata}
            editNickname={this._toggleEditingName}
            userId={this.state.userId}
          />
          {this._getStartMatchButton()}
        </FreeBoardGamesBar>
      </NicknameRequired>
    );
  }

  redirectToMatch(matchId: string) {
    this._componentCleanup();
    Router.replace(`/match/${matchId}`);
  }

  updateMetadata = (firstRun?: boolean) => {
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
    LobbyService.checkin(this.props.dispatch, this._roomId()).then(
      async (response) => {
        if (response.checkinRoom.matchId) {
          this.redirectToMatch(response.checkinRoom.matchId);
        } else {
          this.setState({ loading: false, roomMetadata: response.checkinRoom, userId: response.checkinRoom.userId });
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
    const dispatch = (this.props as any).dispatch;
    LobbyService.renameUser(dispatch, nickname);
    const payload: ReduxUserState = { ready: true, loggedIn: true, nickname };
    dispatch({ type: ActionNames.SyncUser, payload });
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
    return <GameSharing gameCode={gameCode} roomID={this._roomId()} />;
  };

  _roomId() {
    return this.props.router.query.roomID as string;
  }

  _startMatch = () => {
    this.setState({ loading: true });
    LobbyService.startMatch(this.props.dispatch, this._roomId()).catch(() => {
      this._componentCleanup();
      this.setState({ loading: false, error: 'Failed to start match' });
    });
  };

  _getStartMatchButton() {
    const creator = this.state.roomMetadata.userMemberships.find((membership) => membership.isCreator);
    let disabled = false;
    let explanation;
    if (this.state.roomMetadata.capacity > this.state.roomMetadata.userMemberships.length) {
      disabled = true;
      explanation = 'Not enough players.';
    } else if (creator.user.id !== this.state.userId) {
      disabled = true;
      explanation = `Only ${creator.user.nickname} can start.`;
    }
    const button = (
      <div style={{ float: 'right', paddingBottom: '32px' }}>
        <Button
          variant="outlined"
          color="primary"
          disabled={disabled}
          onClick={this._startMatch}
          data-testid="startButton"
        >
          Start match
        </Button>
      </div>
    );
    if (disabled) {
      return <Tooltip title={explanation}>{button}</Tooltip>;
    }
    return button;
  }

  _tryAgain = () => {
    this.setState((oldState) => ({ ...oldState, error: '' }));
    this.updateMetadata();
    this.timer = setInterval(() => this.updateMetadata(), CHECKIN_PERIOD * 1e3);
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
