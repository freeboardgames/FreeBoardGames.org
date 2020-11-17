import * as React from 'react';
import Button from '@material-ui/core/Button';

import css from '../Board.css';
import { StockLabel } from './StockLabel';
import { Chain, Player } from '../types';
import { Hotels } from '../hotels';
import { MergersDialog } from './MergersDialog';
import { StockGuide } from './StockGuide';
import { IPlayerInRoom } from 'gamesShared/definitions/player';

export interface MergersGameStatusProps {
  hotels: Hotels;
  player: Player;
  availableStocks: Record<Chain, number>;
  lastMove?: string;
  currentPlayer: string;
  players?: IPlayerInRoom[];
  children: React.ReactNode;
}

export interface MergersGameStatusState {
  showPriceCard: boolean;
}

export class MergersGameStatus extends React.Component<MergersGameStatusProps, MergersGameStatusState> {
  constructor(props) {
    super(props);
    this.state = {
      showPriceCard: false,
    };
  }

  renderStock(chain: Chain, count: number, hideEmpty?: boolean) {
    const hiddenClass = hideEmpty && count === 0 ? css.HiddenStock : '';
    return (
      <div key={`stock-count-${chain}`} className={`${css.PlayerStock} ${hiddenClass}`}>
        <StockLabel chain={chain}></StockLabel>
        <div className={css.PlayerStockCount}>{`/${count}`}</div>
      </div>
    );
  }

  renderPlayers() {
    if (!this.props.players) {
      return null;
    }

    return (
      <div className={css.WrapRow}>
        <div className={css.MarginRight}>Current turn:</div>
        {this.props.players.map((player) => {
          let turnClass = '';
          if (this.props.currentPlayer === `${player.playerID}`) {
            if (this.props.currentPlayer === this.props.player.id) {
              turnClass = css.YourTurn;
            } else {
              turnClass = css.CurrentTurn;
            }
          }
          const elementId = `player-label-${player.playerID}`;
          return (
            <div id={elementId} key={elementId} className={`${css.Player} ${turnClass}`}>
              {player.name}
            </div>
          );
        })}
        <div className={css.Spacer}></div>
        <Button variant="contained" onClick={() => this.setState({ showPriceCard: true })}>
          Show Guide
        </Button>
      </div>
    );
  }

  renderAvailableStock(chain: Chain) {
    const size = this.props.hotels.sizeOfChain(chain);
    const stockPrice = Hotels.priceOfStockBySize(chain, size);
    const stockPriceMessage = stockPrice === undefined ? '--' : `$${stockPrice}`;
    const hotelSizeMessage = stockPrice === undefined ? '' : ` (${size})`;
    const elementId = `available-stock-${chain}`;
    return (
      <div id={elementId} key={elementId} className={css.AvailableStockAndPrice}>
        {this.renderStock(chain, this.props.availableStocks[chain])}
        {stockPriceMessage}
        {hotelSizeMessage}
      </div>
    );
  }

  renderAvailableStocks() {
    return (
      <div className={css.WrapRow}>
        <div className={css.MarginRight}>Available stocks:</div>
        {Object.keys(Chain).map((key) => this.renderAvailableStock(Chain[key]))}
      </div>
    );
  }

  renderPlayerStatus() {
    const { money, stocks } = this.props.player;
    return (
      <div id="player-status" className={css.WrapRow}>
        <div className={css.MarginRight}>You have:</div>
        <span className={css.PlayerMoney}>${money}</span>
        {Object.keys(Chain).map((key) => this.renderStock(Chain[key], stocks[Chain[key]], true))}
      </div>
    );
  }

  renderLastMove() {
    let message: string;
    message = this.props.lastMove || '';
    for (const p of this.props.players || []) {
      message = message.replace(new RegExp(`Player ${p.playerID}`, 'g'), p.name);
    }
    return (
      <div id="last-move" className={css.WrapRow}>
        <div className={css.MarginRight}>Last move:</div>
        <div>{message}</div>
      </div>
    );
  }

  maybeRenderPriceCard() {
    if (!this.state.showPriceCard) {
      return null;
    }

    return (
      <MergersDialog
        dialogId="price-card-dialog"
        title="Stock Price and Bonus by Number of Stock"
        onClose={() => this.setState({ showPriceCard: false })}
        closeButtonText="CLOSE"
      >
        <StockGuide></StockGuide>
      </MergersDialog>
    );
  }

  render() {
    return (
      <div className={`${css.Mergers} ${css.MergersContainer}`}>
        {this.renderPlayers()}
        {this.renderAvailableStocks()}
        {this.renderLastMove()}
        {this.props.children}
        {this.renderPlayerStatus()}
        {this.maybeRenderPriceCard()}
      </div>
    );
  }
}
