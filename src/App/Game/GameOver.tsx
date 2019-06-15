import React from 'react';
import { GameMode } from './GameModePicker';
import { IGameArgs } from './GameBoardWrapper';
import { GamesList } from '../GamesList';
import FreeBoardGameBar from '../FreeBoardGameBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';
import ReactGA from 'react-ga';

export interface IGameOverProps {
  result: string;
  gameArgs?: IGameArgs;
  extraCardContent?: React.ReactNode;
}

export class GameOver extends React.Component<IGameOverProps, {}> {
  render() {
    const playAgain =
      this.props.gameArgs &&
      (this.props.gameArgs.mode === GameMode.AI || this.props.gameArgs.mode === GameMode.LocalFriend);
    let playAgainLink;
    const extraCardContent = this._getExtraCardContent();
    if (playAgain) {
      playAgainLink = (
        <Button
          onClick={this._refreshPage(this.props.gameArgs)}
          variant="outlined"
          style={{ width: '150px', marginRight: '50%', marginLeft: '35%', marginBottom: '24px' }}
        >
          <ReplayIcon style={{ marginRight: '8px' }} />
          Play Again
        </Button>
      );
    }
    ReactGA.event({
      category: 'GameOver',
      label: this.props.gameArgs.gameCode,
      action: this.props.result, // 'red won'
    });
    return (
      <FreeBoardGameBar>
        <Typography variant="h6" gutterBottom={true} align="center" style={{ marginTop: '16px' }}>
          Game Over, {this.props.result}!
        </Typography>
        {playAgainLink}
        {extraCardContent}
        <GamesList />
      </FreeBoardGameBar>
    );
  }
  _getExtraCardContent = () => {
    if (!this.props.extraCardContent) {
      return null;
    }
    const otherPlayerCard = <div style={{ paddingBottom: '12px' }}>{this.props.extraCardContent}</div>;
    return otherPlayerCard;
  };

  _refreshPage = (gameArgs: IGameArgs) => () => {
    ReactGA.event({
      category: 'GameOver',
      action: 'Clicked play again',
      label: gameArgs.gameCode,
    });
    window.location.reload();
  };
}
