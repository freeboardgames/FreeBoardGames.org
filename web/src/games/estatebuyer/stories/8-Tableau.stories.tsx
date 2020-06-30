import React from 'react';
import { Tableau, ITableauProps } from '../Tableau';

export default {
  title: 'Games/EstateBuyer/Tableau',
  component: Tableau,
};

const tableauData: ITableauProps = {
  drawFrom: [],
  cardsontable: [],
  numPlayers: 3,
  playerID: '1',
};

export const Empty = () => <Tableau {...tableauData} />;

const buildingCard = {
  building: true,
  number: 1,
  value: 1,
  showing: false,
};

const tableauBuilding3Data: ITableauProps = {
  ...tableauData,
  drawFrom: [buildingCard, buildingCard, buildingCard, buildingCard, buildingCard, buildingCard],
  cardsontable: [buildingCard, buildingCard, buildingCard],
};

export const ThreeBuildings = () => <Tableau {...tableauBuilding3Data} />;

const tableauBuilding6Data: ITableauProps = {
  ...tableauData,
  drawFrom: [buildingCard, buildingCard, buildingCard, buildingCard, buildingCard, buildingCard],
  cardsontable: [buildingCard, buildingCard, buildingCard, buildingCard, buildingCard, buildingCard],
};

export const SixBuildings = () => <Tableau {...tableauBuilding6Data} />;
