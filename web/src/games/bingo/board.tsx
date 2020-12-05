import * as React from 'react';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Button } from '@material-ui/core';

import { IBoardProps, IBoardState, INumberState } from './definitions';
import GameGrid from './grid';

export class BingoBoard extends React.Component<IBoardProps, IBoardState> {
  _callOnTimeout = () => {
    this.props.moves.incrementCallRef();
  };

  _numberClicked = (number: INumberState) => {
    this.props.moves.playerClickedNumber(number, this.props.playerID);
  };

  _shoutBingo = () => {
    this.props.moves.playerShouted(); //this.props.playerID);
  };

  _gameOverStatus = () => {};

  _renderFooter = () => {
    return (
      <div style={{ display: 'flex' }}>
        <Button
          key="bi_shout_btn"
          variant="contained"
          color="primary"
          style={{
            marginTop: '12px',
            marginLeft: '12px',
            marginRight: '12px',
            alignContent: 'center',
            // display: 'flex',
            justifyContent: 'left',
          }}
          onClick={this._shoutBingo}
        >
          Table
        </Button>
        <Button
          key="bi_shout_btn"
          variant="contained"
          color="primary"
          style={{
            marginTop: '12px',
            marginLeft: 'auto',
            marginRight: '12px',
            alignContent: 'center',
            // display: 'flex',
            justifyContent: 'right',
            verticalAlign: 'bottom',
          }}
          onClick={this._shoutBingo}
        >
          Bingo! ⭐⭐✰
        </Button>
      </div>
    );
  };

  render() {
    if (this.props.ctx.gameover) {
      return (
        <GameLayout
          gameOver={'Player X Won!'}
          extraCardContent={
            this.props.ctx.gameover.draw ? null : (
              <GameGrid
                size={0.5}
                numbers={this.props.G.players[this.props.ctx.gameover.winner].numbers}
                callQueue={this.props.G.callQueue}
                callRef={this.props.G.callRef}
                timeRef={this.props.G.timeRef}
                onNumberClicked={() => {}}
                callOnTimeout={() => {}}
              />
            )
          }
          gameArgs={this.props.gameArgs}
        />
      );
    }

    return (
      <GameLayout gameArgs={this.props.gameArgs}>
        <GameGrid
          size={1}
          numbers={this.props.G.players[0].numbers}
          callQueue={this.props.G.callQueue}
          callRef={this.props.G.callRef}
          timeRef={this.props.G.timeRef}
          onNumberClicked={this._numberClicked}
          callOnTimeout={this._callOnTimeout}
        />
        {this._renderFooter()}
      </GameLayout>
    );
  }
}
