import * as React from 'react';
import { Card } from './Card';
import css from './stylesheet.module.css';
import { IG } from '../types';
import { getCardTypeFromNumber } from '../cards';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';

interface InnerWrapper {
  G: IG;
  playerID: string;
  playerName: string;
  isSelf: boolean;
  isActive: boolean;
}

export function PlayerInfo(props: InnerWrapper) {
  const players = props.G.players;

  function _getTopBar() {
    return (
      <div className={css.PlayerInfoTopBar}>
        <Typography style={{ color: 'white' }} variant="body1">
          {props.isActive && players[props.playerID].turnsLeft > 0 ? '🕒 ' : '✅ '}
          <Box component="span" fontWeight="bold">
            {props.playerName}
          </Box>
          {props.isSelf ? ' (you)' : ''}
        </Typography>
        <div style={{ display: 'flex', columnGap: '8px', textAlign: 'start' }}>
          {players[props.playerID].forkUsed && (
            <Typography style={{ color: blue[400], fontWeight: 'bold' }} variant="button">
              Using fork!
            </Typography>
          )}
          <Typography style={{ color: _getCupcakeDisplayColor(), minWidth: '3.3em' }} variant="body1">
            🧁 {players[props.playerID].dessertsCount.toString()}
          </Typography>
          <Typography style={{ color: _getChipsDisplayColor(), minWidth: '3.3em' }} variant="body1">
            🥔 {players[props.playerID].chipsCount.toString()}
          </Typography>
          <Typography style={{ color: 'white', marginLeft: '10px', minWidth: '5em' }} variant="body1">
            <Box component="span" fontWeight="bold">
              Score:{' '}
            </Box>
            {players[props.playerID].score.toString()}
          </Typography>
        </div>
      </div>
    );
  }

  function _getCupcakeDisplayColor() {
    let playerDesserts = [];

    for (let i = 0; i < players.length; i++) {
      playerDesserts.push(players[i].dessertsCount);
    }

    const mostDesserts = Math.max(...playerDesserts);
    const leastDesserts = Math.min(...playerDesserts);

    if (mostDesserts === leastDesserts) return 'white';

    const thisDessert = players[props.playerID].dessertsCount;
    if (thisDessert === leastDesserts) return red[500];
    else if (thisDessert === mostDesserts) return green[500];
    else return 'white';
  }

  function _getChipsDisplayColor() {
    if (players[props.playerID].chipsCount === 0) return 'white';

    let playerChips = [];

    for (let i = 0; i < players.length; i++) {
      playerChips.push(players[i].chipsCount);
    }

    const thisChips = players[props.playerID].chipsCount;

    const mostChips = Math.max(...playerChips);
    if (thisChips === mostChips) return green[500];

    if (playerChips.filter((e) => e === mostChips).length > 1) return 'white';

    playerChips = playerChips.filter((e) => e !== mostChips);
    const secondMostChips = Math.max(...playerChips);

    if (thisChips === secondMostChips) return yellow[500];

    return 'white';
  }

  return (
    <div>
      {_getTopBar()}
      <div className={css.PlayedCards}>
        {players[props.playerID].playedCards.map((c) => (
          <Card key={c} id={getCardTypeFromNumber(c)} active={false} selected={false} isTurn={false} />
        ))}
      </div>
    </div>
  );
}
