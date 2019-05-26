import React from 'react';
import getMessagePage from '../MessagePage';
import { LobbyService, IRoomMetadata, IPlayerInRoom } from './LobbyService';
import AlertLayer from '../Game/AlertLayer';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

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
  player?: IPlayerInRoom;
  nameTextBox: string;
}

export class Room extends React.Component<IRoomProps, IRoomState> {
  private timer: any;  // fixme
  constructor(props: IRoomProps) {
    super(props);
    const roomID = this.props.match.params.roomID;
    this.state = {
      nameTextBox: '',
      room: {
        gameCode: this.props.match.params.gameCode,
        ready: false,
        players: [],
        roomID,
      },
      player: LobbyService.getCredential(roomID),
    };
  }
  render() {
    let LoadingPage;
    const playerInRoom = this.state.room.players[this.state.player.playerID];
    if (!playerInRoom || playerInRoom.name) {
      // user hasn't joined
    }
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
      });
  }

  _getNamePrompt = (name?: string) => {
    return (
      <AlertLayer>
        <Card style={{ whiteSpace: 'nowrap' }}>
          <Typography variant="h5" component="h2" style={{ paddingTop: '16px' }}>
            Enter Your Name
        </Typography>
          <CardContent>
            <TextField
              autoFocus={true}
              type="text"
              onChange={this._changeName}
              value={name}
            // label="Link"
            />
            <br />
            <Button
              variant="contained"
              color="primary"
              // onClick={this.props.onDismiss}
              style={{ marginTop: '16px' }}
              onClick={this._joinRoom}
            >
              Join Room
          </Button>
          </CardContent>
        </Card>
      </AlertLayer>);
  }

  _joinRoom = () => {
    const player = this.state.player;
    LobbyService.joinRoom(this.state.room, player).then((newRoom) => {
      this.setState((oldState) => {
        return { ...oldState, room: newRoom };
      });
    }, () => {
      throw new Error('failed to join room');
    });
  }

  _changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value!;
    const player: IPlayerInRoom = { ... this.state.player };
    player.name = name;
    this.setState((oldState) => {
      return { ...oldState, player };
    });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.checkIfRoomReady(this.state.room), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }
}
