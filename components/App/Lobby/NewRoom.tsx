import React from 'react';
import getMessagePage from '../MessagePage';
import { LobbyService } from './LobbyService';
import { GAMES_MAP } from 'games';

interface IExpectedParams {
  gameCode: string;
  numPlayers: number;
}

interface INewRoomProps {
  match: { params: IExpectedParams };
  history?: { replace: (url: string) => void };
}

interface INewRoomState {
  error: boolean;
}

/** Class responsible for creating a new room and redirecting to the correct URL. */
export class NewRoom extends React.Component<INewRoomProps, INewRoomState> {
  state = { error: false };

  componentDidMount() {
    const gameCode = this.props.match.params.gameCode;
    const numPlayers = this.props.match.params.numPlayers;
    if (!(gameCode in GAMES_MAP)) {
      this.setState({ error: true });
      return;
    }
    LobbyService.newRoom(gameCode, numPlayers).then(
      roomID => {
        this.props.history.replace(`/room/${gameCode}/${roomID}`);
      },
      () => {
        this.setState({ error: true });
      },
    );
  }

  render() {
    if (this.state.error) {
      const ErrorPage = getMessagePage('error', 'Failed to create room');
      return <ErrorPage />;
    }
    const LoadingPage = getMessagePage('loading', 'Creating room...');
    return <LoadingPage />;
  }
}
