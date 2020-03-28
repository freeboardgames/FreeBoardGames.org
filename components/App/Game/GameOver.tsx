import React from 'react';
import { GameMode } from './GameModePicker';
import { IGameArgs } from './GameBoardWrapper';
import { GamesList } from '../GamesList';
import FreeBoardGamesBar from '../FreeBoardGamesBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';
import ReactGA from 'react-ga';
import getMessagePage from '../MessagePage';
import { LobbyService } from '../Lobby/LobbyService';

export interface IGameOverProps {
  result: string;
  gameArgs?: IGameArgs;
  extraCardContent?: React.ReactNode;
}

export interface IGameOverState {
  loading: boolean;
}

export class GameOver extends React.Component<IGameOverProps, {}> {
  state = { loading: false };
  render() {
    if (this.state.loading) {
      const Page = getMessagePage('loading', 'Loading...');
      return <Page />;
    }
    let playAgain;
    const extraCardContent = this._getExtraCardContent();
    if (this.props.gameArgs) {
      playAgain = (
        <div style={{ textAlign: 'center' }}>
          <Button
            onClick={this._playAgainHandle}
            variant="outlined"
            style={{ marginRight: 'auto', marginLeft: 'auto', marginBottom: '24px' }}
          >
            <ReplayIcon style={{ marginRight: '8px' }} />
            Play Again
          </Button>
        </div>
      );
    }
    ReactGA.event({
      category: 'Game',
      label: this.props.gameArgs.gameCode,
      action: 'Game over',
    });
    return (
      <FreeBoardGamesBar>
        <Typography variant="h6" gutterBottom={true} align="center" style={{ marginTop: '16px' }}>
          Game Over, {this.props.result}!
        </Typography>
        {playAgain}
        {extraCardContent}
        <GamesList />
      </FreeBoardGamesBar>
    );
  }
  _getExtraCardContent = () => {
    if (!this.props.extraCardContent) {
      return null;
    }
    const otherPlayerCard = <div style={{ paddingBottom: '12px' }}>{this.props.extraCardContent}</div>;
    return otherPlayerCard;
  };

  _playAgainHandle = async () => {
    const args = this.props.gameArgs;
    ReactGA.event({
      category: 'GameOver',
      action: 'Clicked play again',
      label: args.gameCode,
    });

    if (args.mode === GameMode.AI || args.mode === GameMode.LocalFriend) {
      window.location.replace(window.location.pathname);
    } else {
      this.setState({ loading: true });
      const nextRoomId = await LobbyService.getPlayAgainNextRoom(args.gameCode, args.matchCode, args.players.length);
      window.location.replace(`/room/${args.gameCode}/${nextRoomId}` as any);
    }
  };
}
