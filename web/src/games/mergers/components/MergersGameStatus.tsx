import * as React from 'react';
import { Chain, Player } from '../types';
import { Hotels } from '../hotels';
import { IPlayerInRoom } from 'gamesShared/definitions/player';

import css from './MergersGameStatus.module.css';

export interface MergersGameStatusProps {
  hotels: Hotels;
  players: Record<string, Player>;
  playerID: string;
  availableStocks: Record<Chain, number>;
  currentPlayer: string;
  playersInRoom?: IPlayerInRoom[];
}

export class MergersGameStatus extends React.Component<MergersGameStatusProps> {
  constructor(props) {
    super(props);
  }

  playersInRoom() {
    const players = this.props.playersInRoom.filter((playerInRoom) => !!this.props.players[playerInRoom.playerID]);
    return players;
  }

  isAllPlayerStateVisible() {
    return Object.keys(this.props.players).length > 1;
  }

  priceOfStockLabel(chain: Chain): string {
    const price = this.props.hotels.priceOfStock(chain);
    return price ? `${price / 100}` : '-';
  }

  getPlayerRowHeaderClass(player: Player) {
    let rowHeaderClass = `${css.RowHeader} ${css.Player}`;
    if (this.isAllPlayerStateVisible() && player.id === this.props.currentPlayer) {
      if (player.id === this.props.playerID) {
        rowHeaderClass = `${rowHeaderClass} ${css.YourTurn}`;
      } else {
        rowHeaderClass = `${rowHeaderClass} ${css.CurrentTurn}`;
      }
    }
    return rowHeaderClass;
  }

  forEachChainRender(renderFn: (Chain) => React.ReactNode) {
    return Object.keys(Chain).map((key) => renderFn(Chain[key]));
  }

  renderChainHeader(chain: Chain) {
    return (
      <th key={`chain-header-${chain}`} className={`${css.ChainHeader} ${css[chain]}`}>
        {chain.substring(0, 1)}
      </th>
    );
  }

  renderHeaderRow() {
    return (
      <tr>
        {/* Empty cell (this column contains various row headers) */}
        <th />
        {/* Chain column headers */}
        {this.forEachChainRender(this.renderChainHeader)}
        {/* Cash column header */}
        <th>
          Cash,
          <br />
          100s
        </th>
      </tr>
    );
  }

  renderNumberCell(key: string, number: React.ReactNode, className: string = '') {
    return (
      <td id={key} key={key} className={`${css.NumberCell} ${className}`}>
        {number}
      </td>
    );
  }

  renderPlayerRow(playerInRoom: IPlayerInRoom) {
    const id = playerInRoom.playerID.toString();
    const player = this.props.players[id];
    const rowClass = this.isAllPlayerStateVisible() && id === this.props.playerID ? css.PlayerRow : '';
    const playerLabelId = `player-label-${playerInRoom.playerID}`;
    return (
      <tr key={`player-row-${playerInRoom.playerID}`} className={rowClass}>
        {/* Player row header */}
        <td id={playerLabelId} key={playerLabelId} className={this.getPlayerRowHeaderClass(player)}>
          {this.isAllPlayerStateVisible() ? playerInRoom.name : 'You have:'}
        </td>
        {/* Player's stock count for each chain */}
        {this.forEachChainRender((chain) => this.renderNumberCell(`stock-${id}-${chain}`, player.stocks[chain]))}
        {/* Player's cash */}
        {this.renderNumberCell(`cash-${id}`, player.money / 100)}
      </tr>
    );
  }

  renderAvailableStocksRow() {
    return (
      <tr className={css.ShadedRow}>
        {/* Row header */}
        <td className={`${css.BorderTop} ${css.RowHeader}`}>Available</td>
        {/* Available stock count for each chain */}
        {this.forEachChainRender((chain) =>
          this.renderNumberCell(`available-stock-${chain}`, this.props.availableStocks[chain], css.BorderTop),
        )}
        {/* Empty cell to continue border to edge of table */}
        {this.renderNumberCell('available-empty', null, css.BorderTop)}
      </tr>
    );
  }

  renderStockPriceRow() {
    return (
      <tr className={css.ShadedRow}>
        {/* Row header */}
        <td className={css.RowHeader}>Price,100s</td>
        {/* Price of stock for each chain */}
        {this.forEachChainRender((chain) => this.renderNumberCell(`price-${chain}`, this.priceOfStockLabel(chain)))}
        {/* Empty cell placeholder */}
        {this.renderNumberCell('price-empty', null)}
      </tr>
    );
  }

  render() {
    if (!this.props.playersInRoom) {
      return null;
    }
    return (
      <div className={css.AllPlayerStateTable}>
        <table>
          <thead>{this.renderHeaderRow()}</thead>
          <tbody>
            {this.playersInRoom().map((player) => this.renderPlayerRow(player))}
            {this.renderAvailableStocksRow()}
            {this.renderStockPriceRow()}
          </tbody>
        </table>
      </div>
    );
  }
}
