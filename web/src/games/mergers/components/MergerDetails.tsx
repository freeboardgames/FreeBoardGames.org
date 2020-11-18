import * as React from 'react';
import { Typography } from '@material-ui/core';
import { Merger } from '../types';

import css from './MergerDetails.css';

export interface MergerDetailsProps {
  merger: Merger;
  playOrder: string[];
  playerIdToNameFn?: (id: string) => string;
}

export class MergerDetails extends React.Component<MergerDetailsProps> {
  constructor(props: MergerDetailsProps) {
    super(props);
  }

  playerName(id: string): string {
    if (!this.props.playerIdToNameFn) {
      return `Player ${id}`;
    }
    return this.props.playerIdToNameFn(id);
  }

  render() {
    const { bonuses, chainToMerge, stockCounts } = this.props.merger;
    const renderStockCount = (playerID) => {
      return (
        <p className={css.MarginLeft} key={`count-${chainToMerge}-${playerID}`}>
          {this.playerName(playerID)} has {stockCounts[playerID]}
        </p>
      );
    };

    const renderBonus = (playerID) => {
      const bonus = bonuses[playerID];
      const elementId = `bonus-${chainToMerge}-${playerID}`;
      return (
        <p className={css.MarginLeft} id={elementId} key={elementId}>
          {this.playerName(playerID)} gets ${bonus}
        </p>
      );
    };

    return (
      <Typography component="div" variant="body1" className={css.MarginBottom} key={`merger-${chainToMerge}`}>
        <p>The following players have {chainToMerge} stock:</p>
        {this.props.playOrder
          .filter((id) => !!stockCounts[id])
          .sort((a, b) => stockCounts[b] - stockCounts[a])
          .map(renderStockCount)}
        <p>With {this.props.merger.chainSize} hotels, the bonuses are:</p>
        {Object.keys(bonuses)
          .sort((a, b) => bonuses[b] - bonuses[a])
          .map(renderBonus)}
      </Typography>
    );
  }
}
