import * as React from 'react';
import { Card } from './Card';
import css from './stylesheet.module.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { IG } from '../types';
import { Ctx } from 'boardgame.io';
import { getCardTypeFromNumber } from '../cards';

interface InnerWrapper {
  playerID: string;
  G: IG;
  ctx: Ctx;
}

export class BottomInfo extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div>
        {this._getTopBar()}
        {this.props.ctx.phase === 'play' ? this._getHand() : this._getRoundEndDisplay()}
      </div>
    );
  }

  _getHand() {
    const h = this.props.G.hands.find((e) => e.currentOwner === this.props.playerID);

    return (
      <div className={css.BottomInfoCardDisplay}>
        {h.hand.map((c, i) => (
          <Card
            key={c}
            id={getCardTypeFromNumber(c)}
            active={true}
            selected={h.selected && h.selected.includes(i)}
            isTurn={this.props.G.players[this.props.playerID].turnsLeft > 0}
          />
        ))}
      </div>
    );
  }

  _getRoundEndDisplay() {
    return (
      <div className={css.BottomInfoEndRound}>
        <Typography variant="h6" style={{ color: 'white', textAlign: 'center' }}>
          Round {this.props.G.round} over - {this.props.G.round === 3 ? 'game over!' : 'ready for next round?'}
        </Typography>
        {this._getRoundEndButton()}
        <Typography variant="body2" style={{ color: 'white', textAlign: 'center' }}>
          {'(chips ' + (this.props.G.round === 3 ? 'and cupcakes ' : '') + 'are scored after all players are ready)'}
        </Typography>
      </div>
    );
  }

  _getRoundEndButton() {
    const isActive = this.props.ctx.activePlayers.hasOwnProperty(this.props.playerID);

    return (
      <Button
        variant={isActive ? 'contained' : 'text'}
        color={this.props.G.round === 3 ? 'secondary' : 'primary'}
        disableRipple={!isActive}
        disableFocusRipple={!isActive}
        style={{ cursor: isActive ? 'pointer' : 'auto' }}
      >
        {this.props.G.round === 3 ? 'End Game' : 'Ready'}
      </Button>
    );
  }

  _getTopBar() {
    return (
      <div className={css.BottomInfoTopBar}>
        <Typography style={{ color: 'white' }} variant="body1">
          <Box component="span" fontWeight="bold">
            Your hand
          </Box>
          {' - ' + this._getHandStatus()}
        </Typography>
        <Button variant="contained" size="small" color="primary" disabled={!this._canPlayerUseFork()}>
          Use Fork
        </Button>
      </div>
    );
  }

  _getHandStatus() {
    if (this.props.ctx.phase === 'score') return 'Waiting for next round';
    else {
      const t = this.props.G.players[this.props.playerID].turnsLeft;
      if (t > 0) return 'Select ' + t + ' more card' + (t > 1 ? 's' : '');
      else return 'Waiting for other players';
    }
  }

  _canPlayerUseFork() {
    if (this.props.ctx.phase !== 'play') return false;
    if (this.props.G.hands[0].hand.length < 2) return false;
    if (this.props.G.players[this.props.playerID].unusedForks < 1) return false;
    if (this.props.G.players[this.props.playerID].forkUsed) return false;
    return true;
  }
}
