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
  selectCard: (id: number) => void;
  useFork: () => void;
  confirmScore: () => void;
}

export function BottomInfo(props: InnerWrapper) {
  function _getHand() {
    const h = props.G.hands.find((e) => e.currentOwner === props.playerID);

    return (
      <div className={css.BottomInfoCardDisplay}>
        {h.hand.map((c, i) => (
          <Card
            key={c}
            id={getCardTypeFromNumber(c)}
            active={true}
            selected={h.selected && h.selected.includes(i)}
            isTurn={props.G.players[props.playerID].turnsLeft > 0}
            click={() => props.selectCard(i)}
          />
        ))}
      </div>
    );
  }

  function _getRoundEndDisplay() {
    return (
      <div className={css.BottomInfoEndRound}>
        <Typography variant="h6" style={{ color: 'white', textAlign: 'center' }}>
          Round {props.G.round} over - {props.G.round === 3 ? 'game over!' : 'ready for next round?'}
        </Typography>
        {_getRoundEndButton()}
        <Typography variant="body2" style={{ color: 'white', textAlign: 'center' }}>
          {'(chips ' + (props.G.round === 3 ? 'and cupcakes ' : '') + 'are scored after all players are ready)'}
        </Typography>
      </div>
    );
  }

  function _getRoundEndButton() {
    const isActive = props.ctx.activePlayers.hasOwnProperty(props.playerID);

    return (
      <Button
        variant={isActive ? 'contained' : 'text'}
        color={props.G.round === 3 ? 'secondary' : 'primary'}
        disableRipple={!isActive}
        disableFocusRipple={!isActive}
        style={{ cursor: isActive ? 'pointer' : 'auto' }}
        onClick={isActive ? () => props.confirmScore() : null}
      >
        {props.G.round === 3 ? 'End Game' : 'Ready'}
      </Button>
    );
  }

  function _getTopBar() {
    return (
      <div className={css.BottomInfoTopBar}>
        <Typography style={{ color: 'white' }} variant="body1">
          <Box component="span" fontWeight="bold">
            Your hand
          </Box>
          {' - ' + _getHandStatus()}
        </Typography>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={() => props.useFork()}
          disabled={!_canPlayerUseFork()}
        >
          Use Fork
        </Button>
      </div>
    );
  }

  function _getHandStatus() {
    if (props.ctx.phase === 'score') return 'Waiting for next round';
    else {
      const t = props.G.players[props.playerID].turnsLeft;
      if (t > 0) return 'Select ' + t + ' more card' + (t > 1 ? 's' : '');
      else return 'Waiting for other players';
    }
  }

  function _canPlayerUseFork() {
    if (props.ctx.phase !== 'play') return false;
    if (props.G.hands[0].hand.length < 2) return false;
    if (props.G.players[props.playerID].unusedForks < 1) return false;
    if (props.G.players[props.playerID].forkUsed) return false;
    return true;
  }

  return (
    <div>
      {_getTopBar()}
      {props.ctx.phase === 'play' ? _getHand() : _getRoundEndDisplay()}
    </div>
  );
}
