import * as React from 'react';
import { Card } from './Card';
import css from './stylesheet.module.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useCurrentGameTranslation } from 'infra/i18n';

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
  const { translate } = useCurrentGameTranslation();

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
          {props.G.round === 3
            ? translate('round_over_end', { r: props.G.round })
            : translate('round_over_next', { r: props.G.round })}
        </Typography>
        {_getRoundEndButton()}
        <Typography variant="body2" style={{ color: 'white', textAlign: 'center' }}>
          {props.G.round === 3 ? translate('scoring_end_game') : translate('scoring_end_round')}
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
        {props.G.round === 3 ? translate('button_end_game') : translate('button_ready')}
      </Button>
    );
  }

  function _getTopBar() {
    return (
      <div className={css.BottomInfoTopBar}>
        <Typography style={{ color: 'white' }} variant="body1">
          <Box component="span" fontWeight="bold">
            {translate('your_hand')}
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
          {translate('use_fork')}
        </Button>
      </div>
    );
  }

  function _getHandStatus() {
    if (props.ctx.phase === 'score') return translate('wait_next_round');
    else {
      const t = props.G.players[props.playerID].turnsLeft;
      if (t > 0) return translate('select_card', { count: t });
      else return translate('wait_other_players');
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
