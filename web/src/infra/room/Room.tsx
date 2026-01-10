import { useSubscription } from '@apollo/client';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import ReplayIcon from '@mui/icons-material/Replay';
import { gql } from '@apollo/client';
import { IGameDef } from 'gamesShared/definitions/game';
import { GameMode } from 'gamesShared/definitions/mode';
import { JoinRoomMutation } from 'gqlTypes/generated';
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
import { Link } from 'infra/i18n';
import { NextRouter, withRouter } from 'next/router';
import { withTranslation, WithTranslation } from 'infra/i18n';
import Router from 'next/router';
import { home, match } from 'infra/navigation';
import { GameSharing } from 'infra/room/GameSharing';
import { ListPlayers } from 'infra/room/ListPlayers';
import { CustomizationBar } from 'infra/settings/CustomizationBar';
import { SettingsService, withSettingsService } from 'infra/settings/SettingsService';
import React, { useState, useEffect } from 'react';
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
        position
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
  roomMetadata?: JoinRoomMutation['joinRoom'];
  nameTextField?: string;
  userId?: number;
  loading: boolean;
  partialLoading: boolean;
  error: string;
  warning: string;
  editingName: boolean;
  changingGame: boolean;
}

const Room: React.FC<InnerProps & OutterProps> = ({ t, router, user, dispatch, settingsService }) => {
  const [roomMetadata, setRoomMetadata] = useState<JoinRoomMutation['joinRoom'] | undefined>();
  const [nameTextField, setNameTextField] = useState<string | undefined>();
  const [userId, setUserId] = useState<number | undefined>();
  const [loading, setLoading] = useState(true);
  const [partialLoading, setPartialLoading] = useState(false);
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');
  const [editingName, setEditingName] = useState(false);
  const [changingGame, setChangingGame] = useState(false);

  const _roomId = () => {
    return router.query.roomID as string;
  };

  const { data: subscriptionData } = useSubscription(ROOM_SUBSCRIPTION, {
    variables: { roomId: _roomId() }
  });

  useEffect(() => {
    joinRoom();
  }, []);

  // Handle subscription data updates
  useEffect(() => {
    const room = subscriptionData?.roomMutated;
    if (room && roomMetadata) {
      if (room.matchId) {
        redirectToMatch(room.matchId);
        setPartialLoading(true);
        return;
      }

      if (shouldUpdateMetadata(room, roomMetadata)) {
        setRoomMetadata(room);
      }
    }
  }, [subscriptionData, roomMetadata]);

  const joinRoom = () => {
    LobbyService.joinRoom(dispatch, _roomId()).then(
      async (response) => {
        const metadata = response.joinRoom;
        if (metadata.matchId) {
          redirectToMatch(metadata.matchId);
        } else {
          setLoading(false);
          setRoomMetadata(metadata);
          setUserId(metadata.userId);
        }
      },
      () => {
        setLoading(false);
        setError(t('failed_to_fetch_room_metadata'));
      },
    );
  };

  const shouldUpdateMetadata = (room: JoinRoomMutation['joinRoom'], oldRoom: JoinRoomMutation['joinRoom']) => {
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
  };

  const redirectToMatch = (matchId: string) => {
    Router.replace(match(matchId));
  };

  const renderError = () => {
    const TryAgain = (
      <Button variant="outlined" style={{ margin: '8px' }} onClick={_tryAgain}>
        <ReplayIcon style={{ marginRight: '8px' }} />
        {t('try_again')}
      </Button>
    );
    return <MessagePage type={'error'} message={error} actionComponent={TryAgain} />;
  };

  const renderWarning = () => {
    const btn = (
      <Button variant="outlined" style={{ margin: '8px' }} onClick={_dismissWarning}>
        {t('ok')}
      </Button>
    );
    return (
      <div>
        <h2>{warning}</h2>
        {btn}
      </div>
    );
  };

  if (error) {
    return renderError();
  }

  if (loading) {
    return <LoadingMessage />;
  }

  const room = subscriptionData?.roomMutated || roomMetadata;
  if (!room) {
    return null;
  }

  if (warning) {
    return renderWarning();
  }

  if (partialLoading) {
    return <CircularProgress style={{ paddingTop: '16px' }} />;
  }

  if (room.matchId) {
    redirectToMatch(room.matchId);
    setPartialLoading(true);
    return null;
  }

  const currentUserInMetadata = room.userMemberships.find(
    (membership: JoinRoomMutation['joinRoom']['userMemberships'][0]) => membership.user.id === userId,
  );
  if (!currentUserInMetadata) {
    return <MessagePage type={'error'} message={t('you_were_removed_from_the_room')} skipFbgBar={true} />;
  }

  const gameDef = getGameDefinition(room.gameCode);

  const renderBottomBar = (room: JoinRoomMutation['joinRoom'], gameDef: IGameDef) => {
    const isAdmin = isCreator(room, userId);
    const customizationBar = <CustomizationBar gameDef={gameDef} info={{ mode: GameMode.OnlineFriend }} />;
    const placeholder = <div style={{ flexGrow: 1, display: 'flex' }}></div>;
    const middleContent = isAdmin ? customizationBar : placeholder;
    return (
      <div style={{ display: 'flex' }}>
        {renderLeaveRoomButton()}
        {middleContent}
        <StartMatchButton roomMetadata={room} userId={userId} startMatch={_startMatch} />
      </div>
    );
  };

  const renderGameCard = (room: JoinRoomMutation['joinRoom'], gameDef: IGameDef) => {
    const changeGameEnabled = isCreator(room, userId);
    const backgroundColor = changeGameEnabled ? 'rgb(220, 0, 78)' : '#e0e0e0';
    const color = changeGameEnabled ? 'white' : 'darkgrey';
    const changeGameButton = (
      <Button
        style={{ position: 'absolute', backgroundColor, color, right: '8px', top: '12px' }}
        color="secondary"
        disabled={!changeGameEnabled}
        onClick={_toggleChangingGame}
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
  };

  const renderChatButton = () => {
    return (
      <div style={{ marginLeft: 'auto' }}>
        <Chat channelType="room" channelId={_roomId()} dispatch={dispatch} />
      </div>
    );
  };

  const renderLeaveRoomButton = () => {
    return (
      <Link href={() => home()}>
        <Button variant="outlined" onClick={_leaveRoom}>
          {t('leave_room')}
        </Button>
      </Link>
    );
  };

  const getNicknamePrompt = () => {
    if (!editingName) {
      return;
    }
    return (
      <AlertLayer>
        <NicknamePrompt
          setNickname={_setNickname}
          nickname={user.nickname}
          closePrompt={_toggleEditingName}
        />
      </AlertLayer>
    );
  };

  const gameCode = () => {
    return roomMetadata?.gameCode;
  };

  const getSetupData = () => {
    return (settingsService.getGameSetting('customization', gameCode()) || {})[GameMode.OnlineFriend];
  };

  const _newGamePicked = (game?: IGameDef) => {
    _toggleChangingGame();
    if (!game) {
      return;
    }
    const metadata = roomMetadata;
    if (!metadata) return;

    const occupancy = metadata.userMemberships.length;
    const capacity = metadata.capacity;
    if (occupancy > game.maxPlayers) {
      setWarning(t('max_players', { name: game.name, max: game.maxPlayers, current: occupancy }));
      return;
    }
    const newCapacity = Math.min(Math.max(capacity, game.minPlayers), game.maxPlayers);
    setPartialLoading(true);
    LobbyService.updateRoom(dispatch, {
      roomId: _roomId(),
      gameCode: game.code,
      capacity: newCapacity,
    }).then(
      () => {
        setPartialLoading(false);
      },
      () => {
        setPartialLoading(false);
        setError(t('failed_to_change_game'));
      },
    );
  };

  const _changeCapacity = (delta: number) => () => {
    const metadata = roomMetadata;
    if (!metadata) return;

    const capacity = metadata.capacity;
    const newCapacity = capacity + delta;
    LobbyService.updateRoom(dispatch, {
      roomId: _roomId(),
      gameCode: gameCode(),
      capacity: newCapacity,
    }).then(
      () => {
        setPartialLoading(false);
      },
      () => {
        setPartialLoading(false);
        setError(t('failed_to_update_capacity'));
      },
    );
  };

  const _toggleChangingGame = () => {
    setChangingGame(!changingGame);
  };

  const _toggleEditingName = () => {
    setEditingName(!editingName);
  };

  const _leaveRoom = () => {
    LobbyService.leaveRoom(dispatch, _roomId());
  };

  const _removeUser = (userIdToBeRemoved: number) => () => {
    LobbyService.removeUser(dispatch, userIdToBeRemoved, _roomId());
  };

  const _moveUpUser = (userIdToBeMovedUp: number) => () => {
    LobbyService.moveUpUser(dispatch, userIdToBeMovedUp, _roomId());
  };

  const _shuffleUsers = () => () => {
    LobbyService.shuffleUsers(dispatch, _roomId());
  };

  const _setNickname = (nickname: string) => {
    _toggleEditingName();
    setPartialLoading(true);
    LobbyService.renameUser(dispatch, nickname).then(
      () => {
        setPartialLoading(false);
      },
      () => {
        setPartialLoading(false);
        setError(t('failed_to_set_nickname'));
      },
    );
  };

  const _getGameSharing = (room: JoinRoomMutation['joinRoom']) => {
    const gameDef = getGameDefinition(room.gameCode);
    return (
      <GameSharing
        gameCode={room.gameCode}
        roomID={_roomId()}
        isPublic={room.isPublic}
        gameName={gameDef.name}
      />
    );
  };

  const _startMatch = (shuffleUsers: boolean) => () => {
    setPartialLoading(true);
    LobbyService.startMatch(dispatch, _roomId(), shuffleUsers, getSetupData()).then(
      (matchId) => {
        redirectToMatch(matchId);
      },
      () => {
        setPartialLoading(false);
        setError(t('failed_to_start_match'));
      },
    );
  };

  const _tryAgain = () => {
    setError('');
    joinRoom();
  };

  const _dismissWarning = () => {
    setWarning('');
  };

  return (
    <FreeBoardGamesBar toolbarContent={renderChatButton()}>
      {getNicknamePrompt()}
      {changingGame ? <GamePickerModal gamePickedCallback={_newGamePicked} /> : null}
      <React.Fragment>
        {renderGameCard(room, gameDef)}
        {_getGameSharing(room)}
        <ListPlayers
          roomMetadata={room}
          editNickname={_toggleEditingName}
          shuffleUsers={_shuffleUsers}
          moveUpUser={_moveUpUser}
          removeUser={_removeUser}
          changeCapacity={_changeCapacity}
          userId={userId}
        />
        {renderBottomBar(room, gameDef)}
      </React.Fragment>
    </FreeBoardGamesBar>
  );
};

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
