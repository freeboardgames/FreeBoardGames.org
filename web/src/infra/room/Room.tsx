import React from 'react';
import MessagePage from 'infra/common/components/alert/MessagePageClass';
import { LobbyService } from 'infra/common/services/LobbyService';
import { GAMES_MAP } from 'games';
import { IGameDef } from 'gamesShared/definitions/game';
import AlertLayer from 'infra/common/components/alert/AlertLayer';
import FreeBoardGamesBar from 'infra/common/components/base/FreeBoardGamesBar';
import { GameSharing } from 'infra/room/GameSharing';
import { ListPlayers } from 'infra/room/ListPlayers';
import { GameCard } from 'infra/common/components/game/GameCard';
import { NicknamePrompt } from 'infra/common/components/auth/NicknamePrompt';
import { useRouter, NextRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';
import NicknameRequired from 'infra/common/components/auth/NicknameRequired';
import { StartMatchButton } from './StartMatchButton';
import { ReduxUserState } from 'infra/common/redux/definitions';
import { connect } from 'react-redux';
import { JoinRoom_joinRoom, JoinRoom_joinRoom_userMemberships } from 'gqlTypes/JoinRoom';
import { Dispatch } from 'redux';
import Router from 'next/router';
import { Subscription } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import CircularProgress from '@material-ui/core/CircularProgress';
import css from './Room.css';
import { GamePickerModal } from 'infra/common/components/game/GamePickerModal';
import { isCreator, getPlayerIds, getPlayerNicknames } from './RoomMetadataHelper';

export const ROOM_SUBSCRIPTION = gql`
  subscription RoomMutated($roomId: String!) {
    roomMutated(roomId: $roomId) {
      gameCode
      capacity
      isPublic
      matchId
      userId
      userMemberships {
        isCreator
        user {
          id
          nickname
        }
      }
    }
  }
`;

interface Props {
  gameCode: string;
  router: NextRouter;
  user: ReduxUserState;
  dispatch: Dispatch;
}

interface State {
  roomMetadata?: JoinRoom_joinRoom;
  nameTextField?: string;
  userId?: number;
  loading: boolean;
  partialLoading: boolean;
  error: string;
  warning: string;
  editingName: boolean;
  changingGame: boolean;
}

class Room extends React.Component<Props, State> {
  state: State = {
    error: '',
    warning: '',
    loading: true,
    partialLoading: false,
    editingName: false,
    changingGame: false,
  };

  componentDidMount() {
    this.joinRoom();
  }

  render() {
    if (this.state.error) {
      return this.renderError();
    }
    if (this.state.loading) {
      return <MessagePage type={'loading'} message={'Loading...'} />;
    }
    return (
      <FreeBoardGamesBar>
        {this.getNicknamePrompt()}
        {this.state.changingGame ? <GamePickerModal gamePickedCallback={this._newGamePicked} /> : null}
        <Subscription
          subscription={ROOM_SUBSCRIPTION}
          variables={{ roomId: this._roomId(), jwt: LobbyService.getUserToken() }}
        >
          {(resp) => {
            if (this.state.warning) {
              return this.renderWarning();
            }
            if (this.state.partialLoading) {
              return <CircularProgress style={{ paddingTop: '16px' }} />;
            }
            const room = resp.data?.roomMutated || this.state.roomMetadata;
            if (room.matchId) {
              this.redirectToMatch(room.matchId);
              this.setState({ partialLoading: true });
              return null;
            }
            const currentUserInMetadata = room.userMemberships.find(
              (membership: JoinRoom_joinRoom_userMemberships) => membership.user.id === this.state.userId,
            );
            if (!currentUserInMetadata) {
              return <MessagePage type={'error'} message={'You were removed from the room.'} skipFbgBar={true} />;
            }
            if (this.shouldUpdateMetadata(room)) {
              this.setState({ roomMetadata: room });
            }
            const gameDef = GAMES_MAP[room.gameCode];
            return (
              <React.Fragment>
                {this.renderGameCard(room, gameDef)}
                {this._getGameSharing()}
                <ListPlayers
                  roomMetadata={room}
                  editNickname={this._toggleEditingName}
                  removeUser={this._removeUser}
                  changeCapacity={this._changeCapacity}
                  userId={this.state.userId}
                />
                {this.renderLeaveRoomButton()}
                <StartMatchButton roomMetadata={room} userId={this.state.userId} startMatch={this._startMatch} />
              </React.Fragment>
            );
          }}
        </Subscription>
      </FreeBoardGamesBar>
    );
  }

  private renderError() {
    const TryAgain = (
      <Button variant="outlined" style={{ margin: '8px' }} onClick={this._tryAgain}>
        <ReplayIcon style={{ marginRight: '8px' }} />
        Try Again
      </Button>
    );
    return <MessagePage type={'error'} message={this.state.error} actionComponent={TryAgain} />;
  }

  private renderWarning() {
    const btn = (
      <Button variant="outlined" style={{ margin: '8px' }} onClick={this._dismissWarning}>
        OK
      </Button>
    );
    return (
      <div>
        <h2>{this.state.warning}</h2>
        {btn}
      </div>
    );
  }

  private renderGameCard(room: JoinRoom_joinRoom, gameDef: IGameDef) {
    const changeGameEnabled = isCreator(room, this.state.userId);
    const backgroundColor = changeGameEnabled ? 'rgb(220, 0, 78)' : '#e0e0e0';
    const color = changeGameEnabled ? 'white' : 'darkgrey';
    const changeGameButton = (
      <Button
        style={{ position: 'absolute', backgroundColor, color }}
        className={css.ChangeGameButton}
        color="secondary"
        disabled={!changeGameEnabled}
        onClick={this._toggleChangingGame}
      >
        Change Game
      </Button>
    );
    return (
      <div style={{ position: 'relative' }}>
        <GameCard game={gameDef} />
        {changeGameButton}
      </div>
    );
  }

  private redirectToMatch(matchId: string) {
    Router.replace(`/match/${matchId}`);
  }

  private shouldUpdateMetadata(room: JoinRoom_joinRoom) {
    const oldRoom = this.state.roomMetadata;
    const currentPlayersIds = getPlayerIds(room.userMemberships).join(',');
    const oldPlayersIds = getPlayerIds(oldRoom.userMemberships).join(',');
    const currentPlayersNicks = getPlayerNicknames(room.userMemberships).join(',');
    const oldPlayersNicks = getPlayerNicknames(oldRoom.userMemberships).join(',');
    return (
      room.capacity !== oldRoom.capacity ||
      room.gameCode !== oldRoom.gameCode ||
      currentPlayersIds !== oldPlayersIds ||
      currentPlayersNicks !== oldPlayersNicks
    );
  }

  joinRoom = () => {
    LobbyService.joinRoom(this.props.dispatch, this._roomId()).then(
      async (response) => {
        const roomMetadata = response.joinRoom;
        if (roomMetadata.matchId) {
          this.redirectToMatch(response.joinRoom.matchId);
        } else {
          this.setState({ loading: false, roomMetadata: roomMetadata, userId: roomMetadata.userId });
        }
      },
      () => {
        this.setState({ error: 'Failed to fetch room metadata.' });
      },
    );
  };

  private renderLeaveRoomButton() {
    return (
      <Button variant="outlined" onClick={this._leaveRoom}>
        Leave room
      </Button>
    );
  }

  private getNicknamePrompt() {
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

  _newGamePicked = (game?: IGameDef) => {
    this._toggleChangingGame();
    if (!game) {
      return;
    }
    const metadata = this.state.roomMetadata;
    const occupancy = metadata.userMemberships.length;
    const capacity = metadata.capacity;
    if (occupancy > game.maxPlayers) {
      this.setState({
        warning: `${game.name} can play up to ${game.maxPlayers} players, but the room has ${occupancy} players.`,
      });
      return;
    }
    const newCapacity = Math.min(Math.max(capacity, game.minPlayers), game.maxPlayers);
    this.setState({ partialLoading: true });
    LobbyService.updateRoom(this.props.dispatch, {
      roomId: this._roomId(),
      gameCode: game.code,
      capacity: newCapacity,
    }).then(
      () => {
        this.setState({ partialLoading: false });
      },
      () => {
        this.setState({ partialLoading: false, error: 'Failed to change game' });
      },
    );
  };

  _changeCapacity = (delta: number) => () => {
    const metadata = this.state.roomMetadata;
    const capacity = metadata.capacity;
    const game = GAMES_MAP[this.state.roomMetadata.gameCode];
    const newCapacity = capacity + delta;
    LobbyService.updateRoom(this.props.dispatch, {
      roomId: this._roomId(),
      gameCode: game.code,
      capacity: newCapacity,
    }).then(
      () => {
        this.setState({ partialLoading: false });
      },
      () => {
        this.setState({ partialLoading: false, error: 'Failed to update capacity' });
      },
    );
  };

  _toggleChangingGame = () => {
    this.setState({ changingGame: !this.state.changingGame });
  };

  _toggleEditingName = () => {
    this.setState({ editingName: !this.state.editingName });
  };

  _leaveRoom = () => {
    const dispatch = (this.props as any).dispatch;
    LobbyService.leaveRoom(dispatch, this._roomId());
    // FIXME: on dev only, this does not work for a redirect to '/'.
    // However, it works for other routes such as '/about' ... why?
    Router.push('/');
  };

  _removeUser = (userIdToBeRemoved: number) => () => {
    const dispatch = (this.props as any).dispatch;
    LobbyService.removeUser(dispatch, userIdToBeRemoved, this._roomId());
  };

  _setNickname = (nickname: string) => {
    this._toggleEditingName();
    this.setState({ partialLoading: true });
    const dispatch = (this.props as any).dispatch;
    LobbyService.renameUser(dispatch, nickname).then(
      () => {
        this.setState({ partialLoading: false });
      },
      () => {
        this.setState({ partialLoading: false, error: 'Failed to set nickname.' });
      },
    );
  };

  _getGameSharing = () => {
    const gameCode = this.props.router.query.gameCode as string;
    return <GameSharing gameCode={gameCode} roomID={this._roomId()} isPublic={this.state.roomMetadata.isPublic} />;
  };

  _roomId() {
    return this.props.router.query.roomID as string;
  }

  _startMatch = () => {
    this.setState({ partialLoading: true });
    LobbyService.startMatch(this.props.dispatch, this._roomId()).then(
      (matchId) => {
        this.redirectToMatch(matchId);
      },
      () => {
        this.setState({ partialLoading: false, error: 'Failed to start match' });
      },
    );
  };

  _tryAgain = () => {
    this.setState({ error: '' });
    this.joinRoom();
  };

  _dismissWarning = () => {
    this.setState({ warning: '' });
  };
}

const roomWithRouter = (props) => {
  const router = useRouter();
  return (
    <NicknameRequired>
      <Room {...props} router={router} />
    </NicknameRequired>
  );
};

/* istanbul ignore next */
const mapStateToProps = function (state) {
  return {
    user: { ...state.user },
  };
};

export default connect(mapStateToProps)(roomWithRouter);
