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
    LobbyService.newRoom(gameCode).then(
      roomID => {
        props.history.push(`/room/${gameCode}/${roomID}`);
      },
      () => {
        this.setState({ error: true });
      },
    );
  }

  render() {
    // TODO test this
    if (this.state.error) {
      const ErrorPage = getMessagePage('error', 'Failed to create room');
      return <ErrorPage />;
    }
    const LoadingPage = getMessagePage('loading', 'Creating room...');
    return <LoadingPage />;
  }
}
