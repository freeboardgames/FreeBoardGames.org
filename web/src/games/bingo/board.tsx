import * as React from 'react';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import Typography from '@material-ui/core/Typography';

import { IBoardProps, IBoardState } from './definitions';
import GameGrid from './grid';

export class BingoBoard extends React.Component<IBoardProps, IBoardState> {
  render() {
    if (this.props.ctx.gameover) {
      return <GameLayout gameOver={'Player X Won!'} gameArgs={this.props.gameArgs} />;
    }

    return (
      <GameLayout gameArgs={this.props.gameArgs}>
        <div style={{ backgroundColor: 'black' }}>
          <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
            {'5 seconds remaining'}
          </Typography>
          <GameGrid
            numbers={this.props.G.playerNumbers[0]}
            callQueue={this.props.G.callQueue}
            callRef={this.props.G.callRef}
            onCardClick={() => {}}
          />
        </div>
      </GameLayout>
    );
  }
}
