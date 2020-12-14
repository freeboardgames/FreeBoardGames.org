import * as React from 'react';

import { CALL_BOX_SIZE, GRID_SIZE } from '../constants';
import commonCSS from './biComponent.module.css';

interface ICallTableProps {
  callQueue: number[];
  callRef: number;
}

export default function CallTable(props: ICallTableProps) {
  const toShow = props.callQueue.slice(1, props.callRef);
  const gridSize = Math.ceil(Math.sqrt(props.callQueue.length));
  const normalization = GRID_SIZE / gridSize;
  const fontSize = 0.45 * normalization;
  const vSquezze = 1.25;

  return (
    <>
      {toShow.map((n, id) => {
        const xPos = (id % gridSize) * normalization;
        const yPos = Math.floor(id / gridSize) * normalization * (1 / vSquezze);

        return (
          <text
            key={`bi_call_table_number_${id}`}
            className={commonCSS.noselect}
            x={xPos + fontSize}
            y={yPos + fontSize + CALL_BOX_SIZE + vSquezze * normalization}
            fontSize={fontSize}
            textAnchor="middle"
            fill="white"
          >
            {n}
          </text>
        );
      })}
    </>
  );
}
