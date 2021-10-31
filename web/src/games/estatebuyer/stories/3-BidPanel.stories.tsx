import React from 'react';
import { IPlayerBidPanelProps, BidPanelComponent } from '../BidPanelComponent';
export default {
  title: 'Games/EstateBuyer/BidPanel',
  component: BidPanelComponent,
};
const bidPanelData: IPlayerBidPanelProps = {
  players: [
    {
      bid: 2,
      passed: false,
      money: 12,
    },
  ],
  currentPlayer: '0',
  moves: [],
  playerID: '0',
};
export const Default = () => <BidPanelComponent {...bidPanelData} />;
export const NotMyTurn = () => <BidPanelComponent {...{ ...bidPanelData, playerID: '2' }} />;
export const NotEnoughMoney = () => (
  <BidPanelComponent
    {...{ ...bidPanelData, players: { ...bidPanelData.players, '0': { ...bidPanelData.players['0'], money: 1 } } }}
  />
);
