import React from 'react';
import Enzyme, { ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Client } from 'boardgame.io/client';
import { GameMode } from 'gamesShared/definitions/mode';
import { MergersGame } from './game';

import { Board, BoardProps, BoardState } from './board';
import { Chain } from './types';
import { setupInitialState } from './utils';
import { Ctx } from 'boardgame.io';

Enzyme.configure({ adapter: new Adapter() });

const DEFAULT_CTX: Ctx = {
  numPlayers: 3,
  playOrder: ['0', '1', '2'],
  playOrderPos: 0,
  playerID: '0',
  activePlayers: null,
  currentPlayer: '0',
  turn: 1,
  phase: 'buildingPhase',
};

let client;

class TestBoard extends Board {
  render() {
    return (
      <Board
        {...{
          ...this.props,
          gameArgs: {
            gameCode: 'mergers',
            mode: GameMode.OnlineFriend,
            players: [
              { playerID: 0, name: 'player0', roomID: '' },
              { playerID: 1, name: 'player1', roomID: '' },
              { playerID: 2, name: 'player2', roomID: '' },
            ],
          },
        }}
      />
    );
  }
}

// TODO: add more tests
describe('Board', () => {
  describe('on game start', () => {
    let comp: ReactWrapper<BoardProps, BoardState, Board>;

    beforeEach(() => {
      client = Client({
        game: MergersGame,
        numPlayers: 3,
        playerID: '0',
      });

      const state0 = client.store.getState();

      comp = Enzyme.mount(<TestBoard G={state0.G} ctx={state0.ctx} moves={client.moves} playerID="0" />);
    });

    it('renders all players', () => {
      expect(comp.find('#player-label-0').at(0).text()).toContain('player0');
      expect(comp.find('#player-label-1').at(0).text()).toContain('player1');
      expect(comp.find('#player-label-2').at(0).text()).toContain('player2');
    });

    it('renders the available stocks', () => {
      expect(comp.find('#available-stock-Tower').at(0).text()).toContain('25');
      expect(comp.find('#available-stock-Luxor').at(0).text()).toContain('25');
      expect(comp.find('#available-stock-Worldwide').at(0).text()).toContain('25');
      expect(comp.find('#available-stock-American').at(0).text()).toContain('25');
      expect(comp.find('#available-stock-Festival').at(0).text()).toContain('25');
      expect(comp.find('#available-stock-Continental').at(0).text()).toContain('25');
      expect(comp.find('#available-stock-Imperial').at(0).text()).toContain('25');
    });

    it('renders the last move', () => {
      expect(comp.find('#last-move').at(0).text()).toContain('and will go first');
    });

    it('renders your money', () => {
      expect(comp.find('#player-status').text()).toContain('You have:$6000');
    });

    it('does not render the merger dialog', () => {
      expect(comp.find('#merger-details-dialog').length).toEqual(0);
    });
  });

  describe('during mergerPhase', () => {
    let comp: ReactWrapper<BoardProps, BoardState, Board>;

    beforeEach(() => {
      const G = setupInitialState(3);
      G.merger = {
        survivingChain: Chain.Continental,
        chainToMerge: Chain.Tower,
        mergingChains: [Chain.Tower],
        chainSize: 3,
        stockCounts: { '0': 10, '1': 5, '2': 0 },
        bonuses: { '0': 3000, '1': 1500 },
      };

      const ctx = { ...DEFAULT_CTX, phase: 'mergerPhase' };

      comp = Enzyme.mount(<TestBoard G={G} ctx={ctx} moves={{}} playerID="0" />);
    });

    it('renders the merger dialog', () => {
      expect(comp.find('#merger-details-dialog').length).toBeGreaterThan(0);
    });

    it('displays merger details', () => {
      expect(comp.find('#bonus-Tower-0').first().text()).toContain('player0 gets $3000');
      expect(comp.find('#bonus-Tower-1').first().text()).toContain('player1 gets $1500');
    });

    describe('when the dialog is dismissed', () => {
      beforeEach(() => {
        comp.find('#merger-details-dialog-close').first().simulate('click');
      });

      it('no longers renders the dialog', () => {
        expect(comp.find('#merger-details-dialog').length).toEqual(0);
      });
    });
  });

  describe('on game end', () => {
    // TODO
  });
});
