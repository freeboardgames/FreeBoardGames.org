import { Typography } from '@material-ui/core';
import React from 'react';

import css from './StockGuide.css';

export function StockGuide() {
  const indexToCountMap = {
    0: '-',
    1: '-',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6-10',
    7: '11-20',
    8: '21-30',
    9: '31-40',
    10: '41 & over',
    11: '-',
    12: '-',
  };

  const rows = [];

  const headerCells = [];
  headerCells.push(
    <th key="Header1">
      Tower
      <br />
      Luxor
    </th>,
  );
  headerCells.push(
    <th key="Header2">
      American
      <br />
      Worldwide
      <br />
      Festival
    </th>,
  );
  headerCells.push(
    <th key="Header3">
      Imperial
      <br />
      Continental
    </th>,
  );
  headerCells.push(<th key="Header4">Stock price</th>);
  headerCells.push(<th key="Header5">First bonus</th>);
  headerCells.push(<th key="Header6">Second bonus</th>);
  rows.push(<tr key="Headers">{headerCells}</tr>);

  for (let i = 2; i < 13; i++) {
    const cells = [];
    cells.push(<td key={`Tier1-${i}`}>{indexToCountMap[i]}</td>);
    cells.push(<td key={`Tier2-${i}`}>{indexToCountMap[i - 1]}</td>);
    cells.push(<td key={`Tier3-${i}`}>{indexToCountMap[i - 2]}</td>);
    cells.push(<td key={`Price-${i}`}>${i * 100}</td>);
    cells.push(<td key={`Bonus1-${i}`}>${i * 1000}</td>);
    cells.push(<td key={`Bonus2-${i}`}>${(i * 1000) / 2}</td>);
    rows.push(<tr key={`Row-${i}`}>{cells}</tr>);
  }

  return (
    <Typography component="div" variant="body1">
      <table className={`${css.StockGuide}`}>
        <tbody>{rows}</tbody>
      </table>
    </Typography>
  );
}
