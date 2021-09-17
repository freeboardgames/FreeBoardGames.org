import * as React from 'react';
import { Card } from './Card';
import css from './stylesheet.module.css';
import { IG } from '../types';
import { getCardTypeFromNumber } from '../cards';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';

interface InnerWrapper {
  G: IG;
  playerID: string;
  playerName: string;
  isSelf: boolean;
  isActive: boolean;
}

export class PlayerInfo extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div>
        {this._getTopBar()}
        <div className={css.PlayedCards}>
          {this.props.G.players[this.props.playerID].playedCards.map((c) => (
            <Card key={c} id={getCardTypeFromNumber(c)} active={false} selected={false} isTurn={false} />
          ))}
        </div>
      </div>
    );
  }

  _getTopBar() {
    return (
      <div className={css.PlayerInfoTopBar}>
        <Typography style={{ color: 'white' }} variant="body1">
          {this.props.isActive && this.props.G.players[this.props.playerID].turnsLeft > 0 ? '🕒 ' : '✅ '}
          <Box component="span" fontWeight="bold">
            {this.props.playerName}
          </Box>
          {this.props.isSelf ? ' (you)' : ''}
        </Typography>
        <div style={{ display: 'flex', columnGap: '10px' }}>
          <Typography style={{ color: this._getCupcakeDisplayColor() }} variant="body1">
            🧁 {this.props.G.players[this.props.playerID].dessertsCount.toString()}
          </Typography>
          <Typography style={{ color: this._getChipsDisplayColor() }} variant="body1">
            🥔 {this.props.G.players[this.props.playerID].chipsCount.toString()}
          </Typography>
          <Typography style={{ color: 'white', marginLeft: '10px' }} variant="body1">
            Score: {this.props.G.players[this.props.playerID].score.toString()}
          </Typography>
        </div>
      </div>
    );
  }

  _getCupcakeDisplayColor() {
    let playerDesserts = [];

    for (let i = 0; i < this.props.G.players.length; i++) {
      playerDesserts.push(this.props.G.players[i].dessertsCount);
    }

    const mostDesserts = Math.max(...playerDesserts);
    const leastDesserts = Math.min(...playerDesserts);

    if (mostDesserts === leastDesserts) return 'white';

    const thisDessert = this.props.G.players[this.props.playerID].dessertsCount;
    if (thisDessert === leastDesserts) return red[500];
    else if (thisDessert === mostDesserts) return green[500];
    else return 'white';
  }

  _getChipsDisplayColor() {
    if (this.props.G.players[this.props.playerID].chipsCount === 0) return 'white';

    let playerChips = [];

    for (let i = 0; i < this.props.G.players.length; i++) {
      playerChips.push(this.props.G.players[i].chipsCount);
    }

    const thisChips = this.props.G.players[this.props.playerID].chipsCount;

    const mostChips = Math.max(...playerChips);
    if (thisChips === mostChips) return green[500];

    if (playerChips.filter((e) => e === mostChips).length > 1) return 'white';

    playerChips = playerChips.filter((e) => e !== mostChips);
    const secondMostChips = Math.max(...playerChips);

    if (thisChips === secondMostChips) return yellow[500];

    return 'white';
  }
}
