import * as React from 'react';
// import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
// import Typography from '@material-ui/core/Typography';
// import { isFirstPersonView } from 'gamesShared/helpers/GameUtil';

import { cityBoardWidth, cityBoardHeight } from './constants/cities';
import { CityBoard } from './components/cityBoard';
import { SainstOnBoard } from './components/saintsOnBoard';

export class Board extends React.Component<any, {}> {
  _renderCities = (scale: number) => {
    return (
      <svg
        key="cons_cities_board"
        width={`${100 * scale}%`}
        height={`${120 * scale}%`}
        viewBox={`0 0 ${cityBoardWidth} ${cityBoardHeight}`}
        style={{ backgroundColor: 'black' }}
      >
        <CityBoard />
        <SainstOnBoard/>
      </svg>
    );
  };

  render() {
    if (this.props.ctx.gameover) {
      return <GameLayout gameOver={null} extraCardContent={null} gameArgs={this.props.gameArgs} />;
    }
    return (
      <GameLayout gameArgs={this.props.gameArgs}>
        <div>{this._renderCities(1)}</div>
      </GameLayout>
    );
  }
}

export default Board;
