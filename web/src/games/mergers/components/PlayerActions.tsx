import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { ReactNode } from 'react';
import { Chain, Merger, Player, SwapAndSell } from '../types';
import { fillStockMap } from '../utils';

import { StockLabel } from './StockLabel';
import css from './PlayerActions.css';
import { Hotels } from '../hotels';

interface PlayerActionsProps {
  hotels?: Hotels;
  players?: Record<string, Player>;
  availableStocks?: Record<Chain, number>;
  merger?: Merger;
  playerStage?: string;
  playerPhase?: string;
  moves: any;
  playerID: string;
  playerIndex: number;
  gameOverMessage?: string;
}

interface PlayerActionsState {
  stocksToBuy: Record<Chain, string>;
  stocksToSwap?: string;
  stocksToSell?: string;
}

export class PlayerActions extends React.Component<PlayerActionsProps, PlayerActionsState> {
  constructor(props: PlayerActionsProps) {
    super(props);
    this.state = {
      stocksToBuy: {
        Toro: '',
        Lucius: '',
        Worldywise: '',
        Amore: '',
        Festivus: '',
        Continuum: '',
        Imperative: '',
      },
      stocksToSwap: '',
      stocksToSell: '',
    };
  }

  playerID() {
    return this.props.playerID;
  }

  playerState() {
    return this.props.players[this.playerID()];
  }

  parseNumber(text: string): number {
    if (!text) {
      return 0;
    }
    return Number(text);
  }

  safeParseNumber(text: string): number {
    const parsed = this.parseNumber(text);
    if (Number.isNaN(parsed)) {
      return 0;
    }
    return parsed;
  }

  parseStocksToBuy(): Partial<Record<Chain, number>> {
    const parsed = {};
    for (const key of Object.keys(this.state.stocksToBuy)) {
      parsed[key] = this.parseNumber(this.state.stocksToBuy[key]);
    }
    return parsed;
  }

  validateStocksToBuy(): string {
    const parsed = this.parseStocksToBuy();
    let totalCount = 0;
    let totalPrice = 0;
    for (const key of Object.keys(parsed)) {
      const chain = Chain[key];
      const numToBuy = parsed[chain];
      if (numToBuy === 0) {
        continue;
      }
      if (Number.isNaN(numToBuy) || numToBuy < 0) {
        return 'Please enter positive numbers only';
      }
      const numAvailable = this.props.availableStocks[chain];
      if (numToBuy > numAvailable) {
        return `There are only ${numAvailable} ${chain} available`;
      }
      totalCount += numToBuy;
      totalPrice += numToBuy * this.props.hotels.priceOfStock(chain);
    }
    if (totalCount > 3) {
      return 'You may only buy up to 3 stocks per turn';
    }
    if (totalPrice > this.playerState().money) {
      return "You don't have enough money";
    }
    return '';
  }

  parseStocksToExchange(): SwapAndSell {
    return {
      swap: this.parseNumber(this.state.stocksToSwap),
      sell: this.parseNumber(this.state.stocksToSell),
    };
  }

  validateStocksToExchange(): string {
    const { swap, sell } = this.parseStocksToExchange();
    if (Number.isNaN(sell) || sell < 0 || Number.isNaN(swap) || swap < 0) {
      return 'Please enter positive numbers only';
    }
    const numStocksToExchange = this.playerState().stocks[this.props.merger.chainToMerge];
    if (swap + sell > numStocksToExchange) {
      return `You only have ${numStocksToExchange} ${this.props.merger.chainToMerge} stock`;
    }
    if (swap % 2 !== 0) {
      return `You may only swap an even number of stock (2 ${this.props.merger.chainToMerge} for 1 ${this.props.merger.survivingChain})`;
    }
    const numAvailableToSwapFor = this.props.availableStocks[this.props.merger.survivingChain];
    if (swap / 2 > numAvailableToSwapFor) {
      return `There are only ${numAvailableToSwapFor} ${this.props.merger.survivingChain} stocks available to swap for`;
    }
    return '';
  }

  renderButton(text: string, onClick: () => void) {
    return (
      <Button className={css.ActionButton} variant="contained" onClick={onClick}>
        {text}
      </Button>
    );
  }

  renderPlaceHotel() {
    const hasPlayableHotel = !!this.props.hotels
      .playerHotels(this.playerID())
      .find((h) => !this.props.hotels.isUnplayable(h));
    if (!hasPlayableHotel) {
      const label = 'Continue (you have no playable hotels)';
      return this.renderButton(label, () => this.props.moves.placeHotel());
    } else {
      return <div>{'Click a square with a "+" above to place a hotel'}</div>;
    }
  }

  renderChooseChainLabel(chain: Chain) {
    return <StockLabel key={`choose-${chain}`} chain={chain} onClick={() => this.props.moves.chooseNewChain(chain)} />;
  }

  renderChooseChain() {
    const chainLabels = Object.keys(Chain)
      .filter((key) => this.props.hotels.sizeOfChain(Chain[key]) === 0)
      .map((key) => this.renderChooseChainLabel(Chain[key]));

    return (
      <div className={css.WrapRow}>
        <div className={css.MarginRight}>Choose the new chain:</div>
        {chainLabels}
      </div>
    );
  }

  renderStockToBuy(chain: Chain) {
    const stockPrice = this.props.hotels.priceOfStock(chain);
    if (stockPrice === undefined) {
      return;
    }

    return (
      <div key={`stock-to-buy-${chain}`} className={`${css.MarginRight} ${css.WrapRow}`}>
        <StockLabel chain={chain}></StockLabel>
        <TextField
          name={`stock-to-buy-input-${chain}`}
          className={css.ActionInput}
          placeholder="#"
          value={this.state.stocksToBuy[chain]}
          error={!!this.validateStocksToBuy()}
          onChange={(e) => {
            this.setState({
              stocksToBuy: {
                ...this.state.stocksToBuy,
                [chain]: e.target.value || '',
              },
            });
          }}
        />
      </div>
    );
  }

  renderBuyStock() {
    const stocksToBuy = this.parseStocksToBuy();
    let numStocksToBuy = 0;
    for (const key of Object.keys(stocksToBuy)) {
      numStocksToBuy += stocksToBuy[key];
    }
    const errorMsg = this.validateStocksToBuy();
    return (
      <div className="BuyStockContainer">
        <div className={css.WrapRow}>
          <div className={css.MarginRight}>Buy up to 3 stocks:</div>
          {Object.keys(Chain).map((key) => this.renderStockToBuy(Chain[key]))}
          <Button
            className={css.ActionButton}
            disabled={!!errorMsg}
            variant="contained"
            onClick={() => {
              if (!!errorMsg) {
                return;
              }
              this.props.moves.buyStock(stocksToBuy);
              this.setState({ stocksToBuy: fillStockMap('') });
            }}
          >
            {numStocksToBuy === 0 ? 'Pass' : 'Buy'}
          </Button>
        </div>
        <div className={css.ErrorText}>{errorMsg}</div>
      </div>
    );
  }

  renderGameOverChoice() {
    return (
      <div className={css.WrapRow}>
        <div className={css.MarginRight}>Do you want to end the game?</div>
        <div className={css.MarginRight}>
          {this.renderButton('Yes (end the game)', () => this.props.moves.declareGameOver(true))}
        </div>
        {this.renderButton('No (keep playing)', () => this.props.moves.declareGameOver(false))}
      </div>
    );
  }

  renderBreakMergerTieChain(message: string, move: string) {
    const chainSizes = this.props.merger.mergingChains.map((c) => ({
      chain: c,
      size: this.props.hotels.sizeOfChain(c),
    }));
    const biggestChainSize = chainSizes[0].size;
    const choices = chainSizes
      .filter((chainSize) => chainSize.size === biggestChainSize)
      .map((chainSize) => chainSize.chain)
      .map((chain) => (
        <StockLabel key={`stock-${chain}`} chain={chain} onClick={() => this.props.moves[move](chain)} />
      ));
    return (
      <div id="break-merger-tie" className={css.WrapRow}>
        <div className={css.MarginRight}>{message}</div>
        {choices}
      </div>
    );
  }

  renderChooseSurvivingChain() {
    return this.renderBreakMergerTieChain(
      'There is a tie. Choose the chain that will survive the merger:',
      'chooseSurvivingChain',
    );
  }

  renderChooseChainToMerge() {
    return this.renderBreakMergerTieChain('There is a tie. Choose the chain to merge next:', 'chooseChainToMerge');
  }

  renderExchangeStockInput(label: string, onChange: (n: string) => void, value: string) {
    return (
      <div className={css.SwapSellEntry}>
        <div className={css.SwapSellLabel}>{label}</div>
        <TextField
          name={`stock-to-exchange-input-${label}`}
          className={css.ActionInput}
          placeholder="#"
          value={value}
          onChange={(e) => onChange(e.target.value || '')}
        />
      </div>
    );
  }

  renderExchangeStock() {
    const stocksToExchange = this.parseStocksToExchange();
    const errorMsg = this.validateStocksToExchange();

    const setSwap = (v: string) => this.setState({ stocksToSwap: v });
    const setSell = (v: string) => this.setState({ stocksToSell: v });
    const onClick = () => {
      if (!!errorMsg) {
        return;
      }
      this.props.moves.swapAndSellStock(stocksToExchange.swap, stocksToExchange.sell);
      this.setState({ stocksToSwap: '', stocksToSell: '' });
    };

    return (
      <div className="ExchangeStockContainer">
        <div className={css.WrapRow}>
          <div className={css.MarginRight}>
            {`Sell ${this.props.merger.chainToMerge} stock, or swap 2-for-1 with ${this.props.merger.survivingChain}?`}
          </div>
          <div className={css.WrapRow}>
            {this.renderExchangeStockInput('Swap', setSwap, this.state.stocksToSwap)}
            {this.renderExchangeStockInput('Sell', setSell, this.state.stocksToSell)}
            <Button className={css.ActionButton} variant="contained" onClick={onClick} disabled={!!errorMsg}>
              {stocksToExchange.swap + stocksToExchange.sell > 0 ? 'Exchange' : 'Keep all'}
            </Button>
          </div>
        </div>
        <div className={css.ErrorText}>{errorMsg}</div>
      </div>
    );
  }

  renderBuildingPhase(): ReactNode | undefined {
    switch (this.props.playerStage) {
      case 'placeHotelStage':
        return this.renderPlaceHotel();
      case 'chooseNewChainStage':
        return this.renderChooseChain();
      case 'buyStockStage':
        return this.renderBuyStock();
      case 'declareGameOverStage':
        return this.renderGameOverChoice();
      case 'drawHotelsStage':
        return this.renderButton('Draw hotels', () => this.props.moves.drawHotels());
      default:
        break;
    }
  }

  renderActions(): ReactNode | undefined {
    if (this.props.gameOverMessage) {
      return this.props.gameOverMessage;
    }

    switch (this.props.playerPhase) {
      case 'buildingPhase':
        return this.renderBuildingPhase();
      case 'chooseSurvivingChainPhase':
        return this.renderChooseSurvivingChain();
      case 'chooseChainToMergePhase':
        return this.renderChooseChainToMerge();
      case 'mergerPhase':
        return this.renderExchangeStock();
      default:
        break;
    }
  }

  render() {
    const actions = this.renderActions();
    const yourTurnClass = actions ? css.YourTurn : '';
    return <div className={`${css.Actions} ${css.WrapRow} ${yourTurnClass}`}>{actions || 'Not your turn'}</div>;
  }
}
