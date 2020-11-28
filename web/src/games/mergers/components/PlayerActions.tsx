import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { ReactNode } from 'react';
import { Chain, Merger, Player } from '../types';
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
  stocksToSwap?: number;
  stocksToSell?: number;
}

export class PlayerActions extends React.Component<PlayerActionsProps, PlayerActionsState> {
  constructor(props: PlayerActionsProps) {
    super(props);
    this.state = {
      stocksToBuy: {
        Tower: '',
        Luxor: '',
        Worldwide: '',
        American: '',
        Festival: '',
        Continental: '',
        Imperial: '',
      },
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
      if (Number.isNaN(numToBuy)) {
        return 'Please enter numbers only';
      }
      const numAvailable = this.props.availableStocks[chain];
      if (numToBuy > numAvailable) {
        return `There are only ${numAvailable} ${chain} available`;
      }
      totalCount += numToBuy;
      totalPrice += numToBuy * this.props.hotels.priceOfStock(chain);
    }
    if (totalCount > 3) {
      return 'You  may only buy up to 3 stocks per turn';
    }
    if (totalPrice > this.playerState().money) {
      return "You don't have enough money";
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
      return <div>Click an outlined square above to place hotel</div>;
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

  renderSwapAndSellInput(label: string, onChange: (n: number) => void, value?: number) {
    return (
      <div className={css.SwapSellEntry}>
        <div className={css.SwapSellLabel}>{label}</div>
        <TextField
          className={css.ActionInput}
          placeholder="#"
          value={value || ''}
          onChange={(e) => onChange(this.safeParseNumber(e.target.value))}
        />
      </div>
    );
  }

  renderSwapAndSellStock() {
    const { stocksToSwap, stocksToSell } = this.state;
    const numToSwap = stocksToSwap || 0;
    const numToSell = stocksToSell || 0;
    const setSwap = (n: number) => this.setState({ stocksToSwap: n });
    const setSell = (n: number) => this.setState({ stocksToSell: n });
    const onClick = () => {
      this.props.moves.swapAndSellStock(numToSwap, numToSell);
      this.setState({ stocksToSwap: 0, stocksToSell: 0 });
    };

    return (
      <div className={css.WrapRow}>
        <div className={css.MarginRight}>{`Do you want to exchange any ${this.props.merger.chainToMerge} stock?`}</div>
        {this.renderSwapAndSellInput('Swap', setSwap, stocksToSwap)}
        {this.renderSwapAndSellInput('Sell', setSell, stocksToSell)}
        <Button className={css.ActionButton} variant="contained" onClick={onClick}>
          {numToSwap + numToSell > 0 ? 'OK' : 'Pass'}
        </Button>
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
        return this.renderSwapAndSellStock();
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
