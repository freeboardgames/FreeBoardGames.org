import React from 'react';
import getMessagePage from '../MessagePage';
import { LobbyService } from './LobbyService';
import { GAMES_MAP } from '../../games';

interface IExpectedParams {
  gameCode: string;
}

interface INewRoomProps {
  match: { params: IExpectedParams };
  history?: { push: (url: string) => void };
}

interface INewRoomState {
  error: boolean;
}

/** Class responsible for creating a new room and redirecting to the correct URL. */
export class NewRoom extends React.Component<INewRoomProps, INewRoomState> {
  state = { error: false };

  constructor(props: INewRoomProps) {
    super(props);
    const gameCode = props.match.params.gameCode;
    if (!(gameCode in GAMES_MAP)) {
      this.state = { error: true };
      return;
    }
    LobbyService.newRoom(gameCode)
      .then((roomId) => {
        props.history.push(`/room/${gameCode}/${roomId}`);
      }, () => {
        this.setState({ error: true });
      });
  }

  render() {
    // TODO test this
    if (this.state.error) {
      const ErrorPage = getMessagePage(
        'error',
        'lobby.failedCreateRoom',
      );
      return <ErrorPage />;
    }
    const LoadingPage = getMessagePage(
      'loading',
      'lobby.creatingRoom',
    );
    return <LoadingPage />;
  }
}
