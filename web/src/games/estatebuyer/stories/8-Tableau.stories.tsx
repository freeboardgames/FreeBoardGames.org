import React from 'react';
import { Tableau, ITableauProps } from '../Tableau';

export default {
  title: 'Games/EstateBuyer/Tableau',
  component: Tableau,
};

const tableauData:ITableauProps = {
    drawFrom: [],
    cardsontable: [],
    numPlayers: 3,
    playerID: "1",
}

export const Empty = () => <Tableau {...tableauData} />;

