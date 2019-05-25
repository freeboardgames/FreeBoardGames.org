import React from 'react';
import getMessagePage from '../MessagePage';
import { LobbyService, IRoomMetadata } from './LobbyService';

interface IExpectedParams {
  gameCode: string;
  roomID: string;
}
interface IRoomProps {
  match: { params: IExpectedParams };
  history?: { push: (url: string) => void };
}

interface IRoomState {
  room: IRoomMetadata;
}

export class Room extends React.Component<IRoomProps, IRoomState> {
  private timer: any;  // fixme
  constructor(props: IRoomProps) {
    super(props);
    this.state = {
      room: {
        roomID: this.props.match.params.roomID,
        gameCode: this.props.match.params.gameCode,
        ready: false,
      },
    };
  }
  render() {
    const roomID = this.props.match.params.roomID;
    const gameCode = this.props.match.params.gameCode;
    const room: IRoomMetadata = { roomID, gameCode };
    let LoadingPage;
    if (!this.state.room.ready) {
      LoadingPage = getMessagePage(
        'loading',
        'Waiting for friend...',
      );
    } else {
      LoadingPage = getMessagePage(
        'error',
        'Work in progress...',
      );
    }
    return <LoadingPage />;
  }

  checkIfRoomReady = (room: IRoomMetadata) => {
    LobbyService.roomReady(room)
      .then((ready) => {
        if (ready) {
          room.ready = true;
          this.setState((oldState) => {
            return { ...oldState, room };
          });
        }
      }, () => {
        throw new Error('failed to check if room ready');
      },
      );
  }

  componentDidMount() {
    this.timer = setInterval(() => this.checkIfRoomReady(this.state.room), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }
}
