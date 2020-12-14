import * as React from 'react';
import { grey, red, blue } from '@material-ui/core/colors';

import ShjImg from './media/ShjSqr.png';
// import GopImg from './media/GopSqr.png';

const diskRadius = 0.425;
const strokeWidth = 0.03;

interface IEmptyDiskProps {
  x: number;
  y: number;
  onClick: () => void;
}

export const EmptyDisk = (props: IEmptyDiskProps) => {
  return (
    <circle
      key={`empty_disk_${props.x}_${props.y}`}
      data-testid={`empty_disk_testid_${props.x}_${props.y}`}
      cx={props.x + 0.5}
      cy={props.y + 0.5}
      r={diskRadius}
      strokeWidth={strokeWidth}
      stroke={grey[50]}
      onClick={props.onClick}
      fillOpacity={0}
    />
  );
};

interface IFilledDiskProps {
  x: number;
  y: number;
  showOnScreen: boolean;
  color: string;
}

const colorMap = {
  '0': blue[500],
  '1': red[500],
};

export const FilledDisk = (props: IFilledDiskProps) => {
  const animate = {
    transition: `${0.2 * (1 + props.y)}s`,
    transitionTimingFunction: 'ease-in-out',
  };
  return (
    <g>
      <circle
        key={`filled_disk_${props.color}_${props.x}_${props.y}`}
        cx={props.x + 0.5}
        cy={-0.5 + (!props.showOnScreen ? 0 : 1 + props.y)}
        r={diskRadius - strokeWidth / 2}
        strokeWidth={0}
        fill={colorMap[props.color]}
        style={animate}
      />
      <image
        x={props.x + 0.11}
        y={(!props.showOnScreen ? 0 : 1 + props.y) - diskRadius * 2.1}
        width="0.78"
        height="0.78"
        href={ShjImg}
        style={animate}
      />
    </g>
  );
};
