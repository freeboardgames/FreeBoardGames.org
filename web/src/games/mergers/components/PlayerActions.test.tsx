import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Chain, IG } from '../types';
import * as utils from '../utils';

import { PlayerActions } from './PlayerActions';
import css from './PlayerActions.css';
import { Hotels } from '../hotels';

Enzyme.configure({ adapter: new Adapter() });

const setUpHotel = (G: IG, id: string, chain?: Chain) => {
  const hotels = new Hotels(G.hotels);
  hotels.getHotel(id).hasBeenPlaced = true;
  hotels.getHotel(id).chain = chain;
};

describe('#renderBuyStock', () => {
  let comp;
  let G: IG;
  let moves;

  const setUpComponent = (setupFn?: (G) => void) => {
    G = {
      hotels: Hotels.buildGrid(),
      players: { '0': { stocks: { ...utils.fillStockMap(0) }, money: 6000 } },
      availableStocks: { ...utils.fillStockMap(25) },
    };

    moves = { buyStock: jest.fn() };

    // hotels are all from the cheapest tier and of size 2 = $200 per stock
    setUpHotel(G, '1-A', Chain.Toro);
    setUpHotel(G, '2-A', Chain.Toro);
    setUpHotel(G, '3-B', Chain.Lucius);
    setUpHotel(G, '4-B', Chain.Lucius);

    if (setupFn) {
      setupFn(G);
    }

    comp = Enzyme.mount(
      <PlayerActions
        hotels={new Hotels(G.hotels)}
        players={G.players}
        availableStocks={G.availableStocks}
        merger={G.merger}
        moves={moves}
        playerStage="buyStockStage"
        playerPhase="buildingPhase"
        playerID="0"
        playerIndex={0}
        gameOverMessage=""
      />,
    );
  };

  describe('trying to buy zero stocks, even with no money', () => {
    beforeEach(() => {
      setUpComponent((G) => {
        // player doesn't have any money
        G.players['0'].money = 0;
      });

      comp.find(`.${css.ActionButton}`).at(0).simulate('click');
    });

    it('submits an empty order', () => {
      expect(comp.props().moves.buyStock).toHaveBeenCalledWith(utils.fillStockMap(0));
      expect(comp.find(`.${css.ActionButton}`).at(0).props().disabled).toBeFalse();
    });
  });

  describe('trying to buy 3 stocks with exactly the right amount of money left', () => {
    beforeEach(() => {
      setUpComponent((G) => {
        // player has exactly the right amount of money
        G.players['0'].money = 600;
      });

      // player buys 3 stock
      comp
        .find('input[name="stock-to-buy-input-Toro"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-buy-input-Toro', value: '2' } });
      comp
        .find('input[name="stock-to-buy-input-Lucius"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-buy-input-Lucius', value: '1' } });

      comp.find(`.${css.ActionButton}`).at(0).simulate('click');
    });

    it('submits the correct order', () => {
      expect(comp.props().moves.buyStock).toHaveBeenCalledWith({
        ...utils.fillStockMap(0),
        [Chain.Toro]: 2,
        [Chain.Lucius]: 1,
      });
      expect(comp.find(`.${css.ActionButton}`).at(0).props().disabled).toBeFalse();
    });
  });

  describe('trying to buy stock with not enough money left', () => {
    beforeEach(() => {
      setUpComponent((G) => {
        // player is short $100
        G.players['0'].money = 500;
      });

      // player buys 3 stock
      comp
        .find('input[name="stock-to-buy-input-Toro"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-buy-input-Toro', value: '2' } });
      comp
        .find('input[name="stock-to-buy-input-Lucius"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-buy-input-Lucius', value: '1' } });

      comp.find(`.${css.ActionButton}`).at(0).simulate('click');
    });

    it('disables the Buy button and displays an error', () => {
      expect(comp.props().moves.buyStock).not.toHaveBeenCalled();
      expect(comp.find(`.${css.ActionButton}`).at(0).props().disabled).toBeTrue();
      expect(comp.text()).toContain("You don't have enough money");
    });
  });

  describe('trying to buy more of a stock than is available', () => {
    beforeEach(() => {
      setUpComponent((G) => {
        G.players['0'].money = 1000;

        // there is only 1 Toro left
        G.availableStocks[Chain.Toro] = 1;
      });

      // player tries to buy 2 Toro
      comp
        .find('input[name="stock-to-buy-input-Toro"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-buy-input-Toro', value: '2' } });

      comp.find(`.${css.ActionButton}`).at(0).simulate('click');
    });

    it('disables the Buy button and displays an error', () => {
      expect(comp.props().moves.buyStock).not.toHaveBeenCalled();
      expect(comp.find(`.${css.ActionButton}`).at(0).props().disabled).toBeTrue();
      expect(comp.text()).toContain('There are only 1 Toro available');
    });
  });

  describe('trying to buy more than 3 stocks', () => {
    beforeEach(() => {
      setUpComponent((G) => {
        G.players['0'].money = 1000;
      });

      // player tries to buy 4 stocks
      comp
        .find('input[name="stock-to-buy-input-Toro"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-buy-input-Toro', value: '2' } });
      comp
        .find('input[name="stock-to-buy-input-Lucius"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-buy-input-Lucius', value: '2' } });

      comp.find(`.${css.ActionButton}`).at(0).simulate('click');
    });

    it('disables the Buy button and displays an error', () => {
      expect(comp.props().moves.buyStock).not.toHaveBeenCalled();
      expect(comp.find(`.${css.ActionButton}`).at(0).props().disabled).toBeTrue();
      expect(comp.text()).toContain('You may only buy up to 3 stocks per turn');
    });
  });

  describe('entering a value that is not a number', () => {
    beforeEach(() => {
      setUpComponent((G) => {
        G.players['0'].money = 1000;
      });

      // player enters a non-numerical value
      comp
        .find('input[name="stock-to-buy-input-Toro"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-buy-input-Toro', value: 'oops' } });

      comp.find(`.${css.ActionButton}`).at(0).simulate('click');
    });

    it('disables the Buy button and displays an error', () => {
      expect(comp.props().moves.buyStock).not.toHaveBeenCalled();
      expect(comp.find(`.${css.ActionButton}`).at(0).props().disabled).toBeTrue();
      expect(comp.text()).toContain('Please enter numbers only');
    });
  });
});

describe('#renderExchangeStock', () => {
  let comp;
  let G: IG;
  let moves;

  beforeEach(() => {
    G = {
      hotels: Hotels.buildGrid(),
      players: { '0': { stocks: { ...utils.fillStockMap(0) }, money: 6000 } },
      availableStocks: { ...utils.fillStockMap(25) },
      merger: {
        survivingChain: Chain.Toro,
        chainToMerge: Chain.Lucius,
      },
    };

    moves = { swapAndSellStock: jest.fn() };

    // Lucius is merging into Toro
    setUpHotel(G, '1-A', Chain.Toro);
    setUpHotel(G, '2-A', Chain.Toro);
    setUpHotel(G, '3-B', Chain.Toro);
    setUpHotel(G, '4-B');
    setUpHotel(G, '5-B', Chain.Lucius);
    setUpHotel(G, '6-B', Chain.Lucius);

    // Player 0 has 5 Lucius stock
    G.players['0'].stocks[Chain.Lucius] = 5;

    // There's only 1 Toro stock available
    G.availableStocks[Chain.Toro] = 1;

    comp = Enzyme.mount(
      <PlayerActions
        hotels={new Hotels(G.hotels)}
        players={G.players}
        availableStocks={G.availableStocks}
        merger={G.merger}
        moves={moves}
        playerPhase="mergerPhase"
        playerID="0"
        playerIndex={0}
        gameOverMessage=""
      />,
    );
  });

  describe('trying to exchange zero stocks', () => {
    beforeEach(() => {
      comp.find(`.${css.ActionButton}`).at(0).simulate('click');
    });

    it('submits an empty order', () => {
      expect(comp.props().moves.swapAndSellStock).toHaveBeenCalledWith(0, 0);
      expect(comp.find(`.${css.ActionButton}`).at(0).props().disabled).toBeFalse();
    });
  });

  describe('trying to exchange all of your stocks', () => {
    beforeEach(() => {
      comp
        .find('input[name="stock-to-exchange-input-Swap"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-exchange-input-Swap', value: '2' } });
      comp
        .find('input[name="stock-to-exchange-input-Sell"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-exchange-input-Sell', value: '3' } });

      comp.find(`.${css.ActionButton}`).at(0).simulate('click');
    });

    it('submits the correct order', () => {
      expect(comp.props().moves.swapAndSellStock).toHaveBeenCalledWith(2, 3);
      expect(comp.find(`.${css.ActionButton}`).at(0).props().disabled).toBeFalse();
    });
  });

  describe('trying to only swap stocks', () => {
    beforeEach(() => {
      comp
        .find('input[name="stock-to-exchange-input-Swap"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-exchange-input-Swap', value: '2' } });

      comp.find(`.${css.ActionButton}`).at(0).simulate('click');
    });

    it('submits the correct order', () => {
      expect(comp.props().moves.swapAndSellStock).toHaveBeenCalledWith(2, 0);
      expect(comp.find(`.${css.ActionButton}`).at(0).props().disabled).toBeFalse();
    });
  });

  describe('trying to only sell stocks', () => {
    beforeEach(() => {
      comp
        .find('input[name="stock-to-exchange-input-Sell"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-exchange-input-Sell', value: '3' } });

      comp.find(`.${css.ActionButton}`).at(0).simulate('click');
    });

    it('submits the correct order', () => {
      expect(comp.props().moves.swapAndSellStock).toHaveBeenCalledWith(0, 3);
      expect(comp.find(`.${css.ActionButton}`).at(0).props().disabled).toBeFalse();
    });
  });

  describe('trying to exchange more stocks than you have', () => {
    beforeEach(() => {
      comp
        .find('input[name="stock-to-exchange-input-Swap"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-exchange-input-Swap', value: '2' } });
      comp
        .find('input[name="stock-to-exchange-input-Sell"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-exchange-input-Sell', value: '4' } });

      comp.find(`.${css.ActionButton}`).at(0).simulate('click');
    });

    it('disables the Buy button and displays an error', () => {
      expect(comp.props().moves.swapAndSellStock).not.toHaveBeenCalled();
      expect(comp.find(`.${css.ActionButton}`).at(0).props().disabled).toBeTrue();
      expect(comp.text()).toContain('You only have 5 Lucius stock');
    });
  });

  describe('trying to swap for more stocks of surviving chain than is available', () => {
    beforeEach(() => {
      comp
        .find('input[name="stock-to-exchange-input-Swap"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-exchange-input-Swap', value: '4' } });
      comp
        .find('input[name="stock-to-exchange-input-Sell"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-exchange-input-Sell', value: '1' } });

      comp.find(`.${css.ActionButton}`).at(0).simulate('click');
    });

    it('disables the Buy button and displays an error', () => {
      expect(comp.props().moves.swapAndSellStock).not.toHaveBeenCalled();
      expect(comp.find(`.${css.ActionButton}`).at(0).props().disabled).toBeTrue();
      expect(comp.text()).toContain('There are only 1 Toro stocks available to swap for');
    });
  });

  describe('trying to swap an odd number of stock', () => {
    beforeEach(() => {
      comp
        .find('input[name="stock-to-exchange-input-Swap"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-exchange-input-Swap', value: '1' } });

      comp.find(`.${css.ActionButton}`).at(0).simulate('click');
    });

    it('disables the Buy button and displays an error', () => {
      expect(comp.props().moves.swapAndSellStock).not.toHaveBeenCalled();
      expect(comp.find(`.${css.ActionButton}`).at(0).props().disabled).toBeTrue();
      expect(comp.text()).toContain('You may only swap an even number of stock (2 Lucius for 1 Toro)');
    });
  });

  describe('entering a value that is not a number', () => {
    beforeEach(() => {
      comp
        .find('input[name="stock-to-exchange-input-Swap"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-exchange-input-Swap', value: 'oops' } });

      comp.find(`.${css.ActionButton}`).at(0).simulate('click');
    });

    it('disables the Buy button and displays an error', () => {
      expect(comp.props().moves.swapAndSellStock).not.toHaveBeenCalled();
      expect(comp.find(`.${css.ActionButton}`).at(0).props().disabled).toBeTrue();
      expect(comp.text()).toContain('Please enter numbers only');
    });
  });
});
