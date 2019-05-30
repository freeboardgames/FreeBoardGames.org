import React from 'react';
import getMessagePage from '../MessagePage';
import { LobbyService, IRoomMetadata, IPlayerInRoom } from './LobbyService';
import AlertLayer from '../Game/AlertLayer';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import FreeBoardGameBar from '../FreeBoardGameBar';
import { GameSharing } from '../Game/GameSharing';
import Game from '../Game/Game';
import { ListPlayers } from './ListPlayers';
import { GameCard } from '../Game/GameCard';
import { GAMES_MAP } from '../../games/index';

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
}

export class Room extends React.Component<IRoomProps, IRoomState> {
  state: IRoomState = { error: '', loading: true, gameReady: false };
  private timer: any; // fixme loads state of room
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
    if (this.state.error) {
      LoadingPage = getMessagePage('error', this.state.error);
      return <LoadingPage />;
    }
    if (this.state.loading) {
      LoadingPage = getMessagePage('loading', 'Loading...');
      return <LoadingPage />;
    }
    if (this.state.gameReady) {
      const room = this.state.roomMetadata;
      return <Game room={room} />;
    }
    return (
      <FreeBoardGameBar>
        <GameCard game={GAMES_MAP[this.state.roomMetadata.gameCode]} />
        {this._getGameSharing()}
        <ListPlayers roomMetadata={this.state.roomMetadata} />
      </FreeBoardGameBar>
    );
  }

  updateMetadata = () => {
    const { gameCode, roomID } = this.props.match.params;
    if (!LobbyService.getNickname()) {
      return;
    }
    LobbyService.getRoomMetadata(gameCode, roomID)
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
        },
        () => {
          const error = 'Failed to fetch room metadata.';
          this.setState(oldState => ({ ...oldState, error }));
          throw new Error(error);
        },
      );
  };

  _getNamePrompt = (name?: string) => {
    return (
      <FreeBoardGameBar>
        <Card
          style={{
            marginTop: '16px',
            whiteSpace: 'nowrap',
            width: '250px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
          }}
        >
          <Typography style={{ paddingTop: '16px' }} variant="h5" component="h3">
            Enter Your Nickname
          </Typography>
          <CardContent>
            <div>
              <TextField autoFocus={true} type="text" onChange={this._changeName} value={name} />
            </div>
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
      </FreeBoardGameBar>
    );
  };

  _setName = () => {
    const name = this.state.nameTextField;
    if (name.length > 0) {
      LobbyService.setNickname(name);
      this.updateMetadata();
    }
  };

  _changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nameTextField = event.target.value!;
    this.setState(oldState => {
      return { ...oldState, nameTextField };
    });
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
