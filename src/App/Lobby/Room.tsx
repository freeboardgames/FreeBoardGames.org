import React from 'react';
import getMessagePage from '../MessagePage';
import { LobbyService, IRoomMetadata, IPlayerInRoom } from './LobbyService';
import AlertLayer from '../Game/AlertLayer';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
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
  roomMetadata?: IRoomMetadata;
  nameTextField?: string;
  loading: boolean;
}

export class Room extends React.Component<IRoomProps, IRoomState> {
  state: IRoomState = { loading: true };
  private timer: any;  // fixme loads state of room
  constructor(props: IRoomProps) {
    super(props);
    this.updateMetadata();
  }
  render() {
    let LoadingPage;
    const nickname = LobbyService.getNickname();
    if (!nickname) {
      return this._getNamePrompt();
    }
    if (this.state.loading) {
      LoadingPage = getMessagePage(
        'loading',
        'Loading...',
      );
      return <LoadingPage />;
    }
    return JSON.stringify(this.state.roomMetadata);
  }

  updateMetadata = () => {
    const { gameCode, roomID } = this.props.match.params;
    if (!LobbyService.getNickname()) {
      return;
    }
    LobbyService.getRoomMetadata(gameCode, roomID)
      .then(async (metadata) => {
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
      .then((metadata) => {
        this.setState((oldState) => ({ ...oldState, roomMetadata: metadata, loading: false }));
        setTimeout(() => this.updateMetadata(), 2000);
      }, () => {
        throw new Error('failed to fetch room metadata');
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
              onClick={this._setName}
            >
              Join Room
            </Button>
          </CardContent>
        </Card>
      </AlertLayer>);
  }

  _setName = () => {
    const name = this.state.nameTextField;
    if (name.length > 0) {
      LobbyService.setNickname(name);
      this.updateMetadata();
    }
  }

  _changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nameTextField = event.target.value!;
    this.setState((oldState) => {
      return { ...oldState, nameTextField };
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }
}
