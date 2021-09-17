import * as React from 'react';
import { Card } from './Card';
import css from './stylesheet.module.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';

import { IG } from '../types';
import { Ctx } from 'boardgame.io';
import { getCardTypeFromNumber } from '../cards';

interface InnerWrapper {
  playerID: string;
  G: IG;
  ctx: Ctx;
}

export class Hand extends React.Component<InnerWrapper, {}> {
  render() {
    const h = this.props.G.hands.find((e) => e.currentOwner === this.props.playerID);

    return (
      <div>
        {this._getTopBar()}
        <div className={css.Hand}>
          {h.hand.map((c, i) => (
            <Card
              key={c}
              id={getCardTypeFromNumber(c)}
              active={true}
              selected={h.selected && h.selected.includes(i)}
              isTurn={this.props.ctx.activePlayers && this.props.ctx.activePlayers.hasOwnProperty(this.props.playerID)}
            />
          ))}
        </div>
      </div>
    );
  }

  _getTopBar() {
    return (
      <div className={css.HandTopBar}>
        <Typography style={{ color: 'white' }} variant="body1">
          Your hand
        </Typography>
        {this._getForkButton()}
      </div>
    );
  }

  _getForkButton() {
    if (this.props.G.players[this.props.playerID].forkUsed)
      return (
        <Typography style={{ color: blue[400], fontWeight: 'bold' }} variant="button">
          Fork used!
        </Typography>
      );
    else
      return (
        <Button variant="contained" size="small" color="primary" disabled={!this._canPlayerUseFork()}>
          Use Fork
        </Button>
      );
  }

  _canPlayerUseFork() {
    if (this.props.G.hands[0].hand.length < 2) return false;
    if (this.props.G.players[this.props.playerID].unusedForks < 1) return false;
    if (this.props.G.players[this.props.playerID].forkUsed) return false;
    return true;
  }
}
