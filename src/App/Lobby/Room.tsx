import React from 'react';
import getMessagePage from '../MessagePage';
import { LobbyService, IRoomMetadata, IPlayerInRoom } from './LobbyService';
import AlertLayer from '../Game/AlertLayer';
import FreeBoardGameBar from '../FreeBoardGameBar';
import { GameSharing } from '../Game/GameSharing';
import Game from '../Game/Game';
import { ListPlayers } from './ListPlayers';
import { GameCard } from '../Game/GameCard';
import { GAMES_MAP } from '../../games/index';
import { NicknamePrompt } from './NicknamePrompt';

interface IExpectedParams {
  gameCode: string;
  roomID: string;
}
interface IRoomProps {
  match: { params: IExpectedParams };
  history?: { push: (url: string) => void };
}

interface IRoomState {
  roomMetadata?: IRoomMetadata;
  nameTextField?: string;
  loading: boolean;
  gameReady: boolean;
  error: string;
  editingName: boolean;
}

export class Room extends React.Component<IRoomProps, IRoomState> {
  state: IRoomState = { error: '', loading: true, gameReady: false, editingName: false };
  private timer: any; // fixme loads state of room
  private promise: Promise<IRoomMetadata | void>;

  componentDidMount() {
    this.updateMetadata();
  }

  render() {
    const LoadingPage = getMessagePage('loading', 'Loading...');
    const nickname = LobbyService.getNickname();
    if (typeof window === 'undefined') {
      // SSR
      return <LoadingPage />;
    }
    if (!nickname) {
      return <FreeBoardGameBar>{this._getNamePrompt()}</FreeBoardGameBar>;
    }
    if (this.state.loading) {
      return <LoadingPage />;
    }
    if (this.state.error) {
      const ErrorPage = getMessagePage('error', this.state.error);
      return <ErrorPage />;
    }
    if (this.state.gameReady) {
      const room = this.state.roomMetadata;
      return <Game room={room} />;
    }
    const nicknamePrompt = this.state.editingName ? (
      <AlertLayer>{this._getNamePrompt(this.state.roomMetadata.currentUser.name)}</AlertLayer>
    ) : null;
    return (
      <FreeBoardGameBar>
        {nicknamePrompt}
        <GameCard game={GAMES_MAP[this.state.roomMetadata.gameCode]} />
        {this._getGameSharing()}
        <ListPlayers roomMetadata={this.state.roomMetadata} editNickname={this._toggleEditingName} />
      </FreeBoardGameBar>
    );
  }

  updateMetadata = () => {
    const { gameCode, roomID } = this.props.match.params;
    if (!LobbyService.getNickname()) {
      return;
    }
    this.promise = LobbyService.getRoomMetadata(gameCode, roomID)
      .then(async metadata => {
        if (!metadata.currentUser) {
          const player: IPlayerInRoom = {
            playerID: metadata.players.length,
            roomID,
            name: LobbyService.getNickname(),
          };
          await LobbyService.joinRoom(gameCode, player);
          return LobbyService.getRoomMetadata(gameCode, roomID);
        }
        return metadata;
      })
      .then(
        metadata => {
          if (metadata.numberOfPlayers === metadata.players.length) {
            this.setState(oldState => ({ ...oldState, gameReady: true }));
            this._stopTimer();
          }
          this.setState(oldState => ({ ...oldState, roomMetadata: metadata, loading: false }));
          if (!this.state.gameReady) {
            setTimeout(() => this.updateMetadata(), 2000);
          }
          return metadata;
        },
        () => {
          const error = 'Failed to fetch room metadata.';
          this.setState(oldState => ({ ...oldState, error }));
        },
      );
  };

  _getNamePrompt = (name?: string) => {
    const togglePrompt = this.state.editingName ? this._toggleEditingName : null;
    return <NicknamePrompt setNickname={this._setNickname} nickname={name} togglePrompt={togglePrompt} />;
  };

  _toggleEditingName = () => {
    this.setState(oldState => ({ ...oldState, editingName: !this.state.editingName }));
  };

  _setNickname = (nickname: string) => {
    LobbyService.setNickname(nickname);
    if (this.state.editingName) {
      const room = this.state.roomMetadata;
      LobbyService.renameUser(room.gameCode, room.currentUser, nickname);
      this._toggleEditingName();
    }
    this.updateMetadata();
  };

  componentWillUnmount() {
    this._stopTimer();
  }

  _stopTimer = () => {
    clearInterval(this.timer);
    this.timer = null;
  };

  _getGameSharing = () => {
    const { gameCode, roomID } = this.props.match.params;
    return <GameSharing gameCode={gameCode} roomID={roomID} roomMetadata={this.state.roomMetadata} />;
  };
}
