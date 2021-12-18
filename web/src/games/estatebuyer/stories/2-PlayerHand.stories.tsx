import React from 'react';
import { IPlayerHandProps, PlayerHand } from '../PlayerHand';
export default {
  title: 'Games/EstateBuyer/PlayerHand',
  component: PlayerHand,
};
const handData: IPlayerHandProps = {
  playerIndex: 1,
  player: {
    money: 15,
    checks: [],
    buildings: [
      {
        number: 1,
        value: 1,
        showing: true,
      },
    ],
  },
};
export const NoCards = () => <PlayerHand {...{ ...handData, player: { ...handData.player, buildings: [] } }} />;
export const OneCard = () => <PlayerHand {...handData} />;
const hand2Data: IPlayerHandProps = {
  ...handData,
  player: {
    ...handData.player,
    buildings: [
      {
        number: 2,
        value: 2,
        showing: true,
      },
      {
        number: 30,
        value: 30,
        showing: true,
      },
    ],
  },
  selectCard: () => null,
};
export const TwoCardsSelectable = () => <PlayerHand {...hand2Data} />;
const hand5Data: IPlayerHandProps = {
  ...handData,
  player: {
    ...handData.player,
    buildings: [
      {
        number: 1,
        value: 1,
        showing: true,
      },
      {
        number: 2,
        value: 2,
        showing: true,
      },
      {
        number: 17,
        value: 17,
        showing: true,
      },
      {
        number: 24,
        value: 24,
        showing: true,
      },
      {
        number: 30,
        value: 30,
        showing: true,
      },
    ],
  },
};
export const FiveCards = () => <PlayerHand {...hand5Data} />;
const hand5DataWithSelected: IPlayerHandProps = {
  ...hand5Data,
  player: {
    ...hand5Data.player,
    selectedCard: {
      number: 24,
      value: 24,
      showing: true,
    },
  },
};
export const FiveCardsOneSelected = () => <PlayerHand {...hand5DataWithSelected} />;
