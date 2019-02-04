import * as React from 'react';
import { GameMode } from './GameModePicker';
import { IGameArgs } from './GameBoardWrapper';
import { GamesList } from '../GamesList';
import FreeBoardGameBar from '../FreeBoardGameBar';
import Typography from '@material-ui/core/Typography';

export interface IGameOverProps {
  result: string;
}

export class GameOver extends React.Component<IGameOverProps, {}> {
  render() {
    return (
      <FreeBoardGameBar>
        <Typography variant="title" gutterBottom={true} align="center" style={{ marginTop: '16px' }}>
          Game Over, {this.props.result}!
        </Typography>
        <Typography variant="body1" gutterBottom={true} style={{ marginTop: '16px' }}>
          Do you want to play again? Check out our games below.
        </Typography>
        <GamesList />
      </FreeBoardGameBar>
    );
  }
}
