import * as React from 'react';
import { CardSmall } from './Card';
import css from './stylesheet.module.css';
import { IG, cardEnum } from '../types';
import { getCardTypeFromNumber } from '../cards';
import { useCurrentGameTranslation } from 'infra/i18n';

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
  isNext: boolean;
  isActive: boolean;
}

export function PlayerInfo(props: InnerWrapper) {
  const { translate } = useCurrentGameTranslation();
  const players = props.G.players;

  function _getTopBar() {
    return (
      <div className={css.PlayerInfoTopBar}>
        <Typography style={{ color: 'white' }} variant="body1">
          {(props.isActive && players[props.playerID].turnsLeft > 0
            ? translate('symbols.waiting')
            : translate('symbols.done')) + ' '}
          <Box component="span" fontWeight="bold">
            {props.playerName}
          </Box>
          {props.isNext ? ' ' + translate('is_next') : ''}
          {props.isSelf ? ' ' + translate('is_you') : ''}
        </Typography>
        <div style={{ display: 'flex', columnGap: '8px', textAlign: 'start' }}>
          {players[props.playerID].forkUsed && (
            <Typography style={{ color: blue[400], fontWeight: 'bold' }} variant="button">
              {translate('using_fork')}
            </Typography>
          )}
          <Typography style={{ color: _getCupcakeDisplayColor(), minWidth: '3.3em' }} variant="body1">
            {translate('symbols.cupcake') + ' ' + players[props.playerID].dessertsCount}
          </Typography>
          <Typography style={{ color: _getChipsDisplayColor(), minWidth: '3.3em' }} variant="body1">
            {translate('symbols.chips') + ' ' + players[props.playerID].chipsCount}
          </Typography>
          <Typography style={{ color: 'white', marginLeft: '10px', minWidth: '5em' }} variant="body1">
            <Box component="span" fontWeight="bold">
              {translate('score') + ' '}
            </Box>
            {players[props.playerID].score}
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

  function _getCardsList() {
    let mayoAndSandwiches = [];
    let chips = [];
    let deviledEggs = [];
    let friedChickens = [];
    let pizzas = [];
    let cupcakes = [];
    let forks = [];

    for (let i = 0; i < players[props.playerID].playedCards.length; i++) {
      const c = players[props.playerID].playedCards[i];

      switch (getCardTypeFromNumber(c)) {
        case cardEnum.sandwichChicken:
        case cardEnum.sandwichPork:
        case cardEnum.sandwichBeef:
        case cardEnum.mayo:
          mayoAndSandwiches.push(c);
          break;
        case cardEnum.chipsPotato1:
        case cardEnum.chipsPotato2:
        case cardEnum.chipsPotato3:
          chips.push(c);
          break;
        case cardEnum.deviledEggs:
          deviledEggs.push(c);
          break;
        case cardEnum.friedChicken:
          friedChickens.push(c);
          break;
        case cardEnum.pizza:
          pizzas.push(c);
          break;
        case cardEnum.cake:
          cupcakes.push(c);
          break;
        case cardEnum.fork:
          forks.push(c);
          break;
      }
    }

    chips.sort((a, b) => a - b);

    let combinedArray = [mayoAndSandwiches, chips, deviledEggs, friedChickens, pizzas, cupcakes, forks];

    return (
      <div className={css.PlayedCards}>
        {combinedArray.map((e, i) => {
          if (e.length === 0) return;
          return (
            <div key={i}>
              {combinedArray[i].map((c) => (
                <CardSmall key={c} id={getCardTypeFromNumber(c)} />
              ))}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      {_getTopBar()}
      {_getCardsList()}
    </div>
  );
}
