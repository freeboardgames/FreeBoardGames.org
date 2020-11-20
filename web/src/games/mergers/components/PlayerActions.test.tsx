import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Chain, IG } from '../types';
import * as utils from '../utils';

import { PlayerActions } from './PlayerActions';
import css from './PlayerActions.css';
import { Hotels } from '../hotels';

Enzyme.configure({ adapter: new Adapter() });

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

    setupFn(G);

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

  const setUpHotel = (G: IG, id: string, chain?: Chain) => {
    const hotels = new Hotels(G.hotels);
    hotels.getHotel(id).hasBeenPlaced = true;
    hotels.getHotel(id).chain = chain;
  };

  describe('trying to buy zero stocks, even with no money', () => {
    beforeEach(() => {
      setUpComponent((G) => {
        setUpHotel(G, '1-A', Chain.Tower);
        setUpHotel(G, '2-A', Chain.Tower);
        setUpHotel(G, '3-B', Chain.Luxor);
        setUpHotel(G, '4-B', Chain.Luxor);

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
        // hotels are all from the cheapest tier and of size 2 = $200 per stock
        setUpHotel(G, '1-A', Chain.Tower);
        setUpHotel(G, '2-A', Chain.Tower);
        setUpHotel(G, '3-B', Chain.Luxor);
        setUpHotel(G, '4-B', Chain.Luxor);

        // player has exactly the right amount of money
        G.players['0'].money = 600;
      });

      // player buys 3 stock
      comp
        .find('input[name="stock-to-buy-input-Tower"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-buy-input-Tower', value: '2' } });
      comp
        .find('input[name="stock-to-buy-input-Luxor"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-buy-input-Luxor', value: '1' } });

      comp.find(`.${css.ActionButton}`).at(0).simulate('click');
    });

    it('submits the correct order', () => {
      expect(comp.props().moves.buyStock).toHaveBeenCalledWith({
        ...utils.fillStockMap(0),
        [Chain.Tower]: 2,
        [Chain.Luxor]: 1,
      });
      expect(comp.find(`.${css.ActionButton}`).at(0).props().disabled).toBeFalse();
    });
  });

  describe('trying to buy stock with not enough money left', () => {
    beforeEach(() => {
      setUpComponent((G) => {
        // hotels are all from the cheapest tier and of size 2 = $200 per stock
        setUpHotel(G, '1-A', Chain.Tower);
        setUpHotel(G, '2-A', Chain.Tower);
        setUpHotel(G, '3-B', Chain.Luxor);
        setUpHotel(G, '4-B', Chain.Luxor);

        // player is short $100
        G.players['0'].money = 500;
      });

      // player buys 3 stock
      comp
        .find('input[name="stock-to-buy-input-Tower"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-buy-input-Tower', value: '2' } });
      comp
        .find('input[name="stock-to-buy-input-Luxor"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-buy-input-Luxor', value: '1' } });

      comp.find(`.${css.ActionButton}`).at(0).simulate('click');
    });

    it('disables the Buy button', () => {
      expect(comp.props().moves.buyStock).not.toHaveBeenCalled();
      expect(comp.find(`.${css.ActionButton}`).at(0).props().disabled).toBeTrue();
    });
  });

  describe('trying to buy more of a stock than is available', () => {
    beforeEach(() => {
      setUpComponent((G) => {
        setUpHotel(G, '1-A', Chain.Tower);
        setUpHotel(G, '2-A', Chain.Tower);
        setUpHotel(G, '3-B', Chain.Luxor);
        setUpHotel(G, '4-B', Chain.Luxor);
        G.players['0'].money = 1000;

        // there is only 1 Tower left
        G.availableStocks[Chain.Tower] = 1;
      });

      // player tries to buy 2 Tower
      comp
        .find('input[name="stock-to-buy-input-Tower"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-buy-input-Tower', value: '2' } });

      comp.find(`.${css.ActionButton}`).at(0).simulate('click');
    });

    it('disables the Buy button', () => {
      expect(comp.props().moves.buyStock).not.toHaveBeenCalled();
      expect(comp.find(`.${css.ActionButton}`).at(0).props().disabled).toBeTrue();
    });
  });

  describe('trying to buy more than 3 stocks', () => {
    beforeEach(() => {
      setUpComponent((G) => {
        setUpHotel(G, '1-A', Chain.Tower);
        setUpHotel(G, '2-A', Chain.Tower);
        setUpHotel(G, '3-B', Chain.Luxor);
        setUpHotel(G, '4-B', Chain.Luxor);
        G.players['0'].money = 1000;
      });

      // player tries to buy 4 stocks
      comp
        .find('input[name="stock-to-buy-input-Tower"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-buy-input-Tower', value: '2' } });
      comp
        .find('input[name="stock-to-buy-input-Luxor"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-buy-input-Luxor', value: '2' } });

      comp.find(`.${css.ActionButton}`).at(0).simulate('click');
    });

    it('disables the Buy button', () => {
      expect(comp.props().moves.buyStock).not.toHaveBeenCalled();
      expect(comp.find(`.${css.ActionButton}`).at(0).props().disabled).toBeTrue();
    });
  });

  describe('entering a value that is not a number', () => {
    beforeEach(() => {
      setUpComponent((G) => {
        setUpHotel(G, '1-A', Chain.Tower);
        setUpHotel(G, '2-A', Chain.Tower);
        setUpHotel(G, '3-B', Chain.Luxor);
        setUpHotel(G, '4-B', Chain.Luxor);
        G.players['0'].money = 1000;
      });

      // player enters a non-numerical value
      comp
        .find('input[name="stock-to-buy-input-Tower"]')
        .at(0)
        .simulate('change', { target: { name: 'stock-to-buy-input-Tower', value: 'oops' } });

      comp.find(`.${css.ActionButton}`).at(0).simulate('click');
    });

    it('disables the Buy button', () => {
      expect(comp.props().moves.buyStock).not.toHaveBeenCalled();
      expect(comp.find(`.${css.ActionButton}`).at(0).props().disabled).toBeTrue();
    });
  });
});
