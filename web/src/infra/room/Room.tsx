import { Subscription } from '@apollo/react-components';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReplayIcon from '@material-ui/icons/Replay';
import { gql } from 'apollo-boost';
import { IGameDef } from 'gamesShared/definitions/game';
import { GameMode } from 'gamesShared/definitions/mode';
import { JoinRoom_joinRoom, JoinRoom_joinRoom_userMemberships } from 'gqlTypes/JoinRoom';
import AlertLayer from 'infra/common/components/alert/AlertLayer';
import { LoadingMessage } from 'infra/common/components/alert/LoadingMessage';
import MessagePage from 'infra/common/components/alert/MessagePage';
import { withNickNameRequired } from 'infra/common/components/auth/hocs/withNickNameRequired';
import { NicknamePrompt } from 'infra/common/components/auth/NicknamePrompt';
import FreeBoardGamesBar from 'infra/common/components/base/FreeBoardGamesBar';
import { GameCard } from 'infra/common/components/game/GameCard';
import { GamePickerModal } from 'infra/common/components/game/GamePickerModal';
import { ReduxUserState } from 'infra/common/redux/definitions';
import { LobbyService } from 'infra/common/services/LobbyService';
import { getGameDefinition } from 'infra/game';
import { Link, NextRouter, Router, withRouter, withTranslation, WithTranslation } from 'infra/i18n';
import { home, match } from 'infra/navigation';
import { GameSharing } from 'infra/room/GameSharing';
import { ListPlayers } from 'infra/room/ListPlayers';
import { CustomizationBar } from 'infra/settings/CustomizationBar';
import { SettingsService, withSettingsService } from 'infra/settings/SettingsService';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Dispatch } from 'redux';
import { Chat } from '../chat/Chat';
import { getPlayerIds, getPlayerNicknames, isCreator } from './RoomMetadataHelper';
import { StartMatchButton } from './StartMatchButton';

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

interface InnerProps extends WithTranslation {
  router: NextRouter;
  user: ReduxUserState;
  dispatch: Dispatch;
  settingsService: SettingsService;
}

interface OutterProps {}

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

class Room extends React.Component<InnerProps & OutterProps, State> {
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
    const { t } = this.props;

    if (this.state.error) {
      return this.renderError();
    }

    if (this.state.loading) {
      return <LoadingMessage />;
    }

    return (
      <FreeBoardGamesBar toolbarContent={this.renderChatButton()}>
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
              return <MessagePage type={'error'} message={t('you_were_removed_from_the_room')} skipFbgBar={true} />;
            }

            if (this.shouldUpdateMetadata(room)) {
              this.setState({ roomMetadata: room });
            }

            const gameDef = getGameDefinition(room.gameCode);
            return (
              <React.Fragment>
                {this.renderGameCard(room, gameDef)}
                {this._getGameSharing()}
                <ListPlayers
                  roomMetadata={room}
                  editNickname={this._toggleEditingName}
                  moveUpUser={this._moveUpUser}
                  removeUser={this._removeUser}
                  changeCapacity={this._changeCapacity}
                  userId={this.state.userId}
                />
                {this.renderBottomBar(room, gameDef)}
              </React.Fragment>
            );
          }}
        </Subscription>
      </FreeBoardGamesBar>
    );
  }

  private renderBottomBar(room, gameDef) {
    const isAdmin = isCreator(room, this.state.userId);
    const customizationBar = <CustomizationBar gameDef={gameDef} info={{ mode: GameMode.OnlineFriend }} />;
    const placeholder = <div style={{ flexGrow: 1, display: 'flex' }}></div>;
    const middleContent = isAdmin ? customizationBar : placeholder;
    return (
      <div style={{ display: 'flex' }}>
        {this.renderLeaveRoomButton()}
        {middleContent}
        <StartMatchButton roomMetadata={room} userId={this.state.userId} startMatch={this._startMatch} />
      </div>
    );
  }

  private renderError() {
    const { t } = this.props;
    const TryAgain = (
      <Button variant="outlined" style={{ margin: '8px' }} onClick={this._tryAgain}>
        <ReplayIcon style={{ marginRight: '8px' }} />
        {t('try_again')}
      </Button>
    );
    return <MessagePage type={'error'} message={this.state.error} actionComponent={TryAgain} />;
  }

  private renderWarning() {
    const { t } = this.props;
    const btn = (
      <Button variant="outlined" style={{ margin: '8px' }} onClick={this._dismissWarning}>
        {t('ok')}
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
    const { t } = this.props;
    const changeGameEnabled = isCreator(room, this.state.userId);
    const backgroundColor = changeGameEnabled ? 'rgb(220, 0, 78)' : '#e0e0e0';
    const color = changeGameEnabled ? 'white' : 'darkgrey';
    const changeGameButton = (
      <Button
        style={{ position: 'absolute', backgroundColor, color, right: '8px', top: '12px' }}
        color="secondary"
        disabled={!changeGameEnabled}
        onClick={this._toggleChangingGame}
      >
        {t('change_game')}
      </Button>
    );
    return (
      <div style={{ position: 'relative' }}>
        <GameCard game={gameDef} />
        {changeGameButton}
      </div>
    );
  }

  private renderChatButton() {
    return (
      <div style={{ marginLeft: 'auto' }}>
        <Chat channelType="room" channelId={this._roomId()} dispatch={this.props.dispatch} />
      </div>
    );
  }

  private redirectToMatch(matchId: string) {
    Router.replace(match(matchId));
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
    const { t } = this.props;
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
        this.setState({ error: t('failed_to_fetch_room_metadata') });
      },
    );
  };

  private renderLeaveRoomButton() {
    const { t } = this.props;
    return (
      <Link href={() => home()}>
        <Button variant="outlined" onClick={this._leaveRoom}>
          {t('leave_room')}
        </Button>
      </Link>
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

  private gameCode() {
    return this.state.roomMetadata.gameCode;
  }

  private getSetupData() {
    return (this.props.settingsService.getGameSetting('customization', this.gameCode()) || {})[GameMode.OnlineFriend];
  }

  _newGamePicked = (game?: IGameDef) => {
    const { t } = this.props;
    this._toggleChangingGame();
    if (!game) {
      return;
    }
    const metadata = this.state.roomMetadata;
    const occupancy = metadata.userMemberships.length;
    const capacity = metadata.capacity;
    if (occupancy > game.maxPlayers) {
      this.setState({
        warning: t('max_players', { name: game.name, max: game.maxPlayers, current: occupancy }),
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
        this.setState({ partialLoading: false, error: t('failed_to_change_game') });
      },
    );
  };

  _changeCapacity = (delta: number) => () => {
    const { t } = this.props;
    const metadata = this.state.roomMetadata;
    const capacity = metadata.capacity;
    const newCapacity = capacity + delta;
    LobbyService.updateRoom(this.props.dispatch, {
      roomId: this._roomId(),
      gameCode: this.gameCode(),
      capacity: newCapacity,
    }).then(
      () => {
        this.setState({ partialLoading: false });
      },
      () => {
        this.setState({ partialLoading: false, error: t('failed_to_update_capacity') });
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
  };

  _removeUser = (userIdToBeRemoved: number) => () => {
    const dispatch = (this.props as any).dispatch;
    LobbyService.removeUser(dispatch, userIdToBeRemoved, this._roomId());
  };

  _moveUpUser = (userIdToBeMovedUp: number) => () => {
    const dispatch = (this.props as any).dispatch;
    LobbyService.moveUpUser(dispatch, userIdToBeMovedUp, this._roomId());
  };

  _setNickname = (nickname: string) => {
    const { t } = this.props;
    this._toggleEditingName();
    this.setState({ partialLoading: true });
    const dispatch = (this.props as any).dispatch;
    LobbyService.renameUser(dispatch, nickname).then(
      () => {
        this.setState({ partialLoading: false });
      },
      () => {
        this.setState({ partialLoading: false, error: t('failed_to_set_nickname') });
      },
    );
  };

  _getGameSharing = () => {
    return (
      <GameSharing gameCode={this.gameCode()} roomID={this._roomId()} isPublic={this.state.roomMetadata.isPublic} />
    );
  };

  _roomId() {
    return this.props.router.query.roomID as string;
  }

  _startMatch = () => {
    const { t } = this.props;
    this.setState({ partialLoading: true });
    LobbyService.startMatch(this.props.dispatch, this._roomId(), this.getSetupData()).then(
      (matchId) => {
        this.redirectToMatch(matchId);
      },
      () => {
        this.setState({ partialLoading: false, error: t('failed_to_start_match') });
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

/* istanbul ignore next */
const mapStateToProps = function (state) {
  return {
    user: { ...state.user },
  };
};

const enhance = compose<InnerProps, OutterProps>(
  withRouter,
  withTranslation('Room'),
  withSettingsService,
  withNickNameRequired,
  connect(mapStateToProps),
);

export default enhance(Room);
