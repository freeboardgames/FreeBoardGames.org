import * as React from 'react';

import { SAINTS, saintImgHeight } from '../constants/saints';
import {
  ECyNames,
  CITIES,
  cityFontSize,
  getCityTextPosition,
  cityBoardWidth,
  ECityTextPosition,
} from '../constants/cities';

const SaintRowOffset = {
  1: [-saintImgHeight * 0.5],
  2: [-saintImgHeight, 0],
  3: [-1.4 * saintImgHeight, -saintImgHeight * 0.5, saintImgHeight * 0.4],
  4: [-1.95 * saintImgHeight, -saintImgHeight, 0, 0.95 * saintImgHeight],
};

export class SainstOnBoard extends React.Component<any, {}> {
  render() {
    const inCity = ECyNames.Mumbai;
    const saintImages = [];
    CITIES.forEach((c) => {
      const saints = SAINTS.filter(() => c.name === inCity);
      if (saints.length > 0) {
        const numSaints = Math.min(3, saints.length);
        const textPos = getCityTextPosition(c);
        // compensate for the edge cases
        let xMin = 0;
        let xMax = cityBoardWidth;
        SaintRowOffset[numSaints].forEach((offset) => {
          xMin = Math.min(xMin, textPos.x + offset);
          xMax = Math.max(xMax, textPos.x + offset);
        });
        xMin = xMin < 0 ? xMin : 0;
        xMax = xMax > cityBoardWidth ? xMax : 0;

        const xOffset = -xMin + xMax;
        let yOffest = -cityFontSize * 1.1 - saintImgHeight;
        if (c.textPosition === ECityTextPosition.Top) {
          yOffest = 0.15 * saintImgHeight;
        }

        saints.slice(0, numSaints).forEach((s, sIdx) => {
          saintImages.push(
            <image
              key={`cons_saint_image_${sIdx}`}
              x={textPos.x + SaintRowOffset[numSaints][sIdx] + xOffset}
              y={textPos.y + yOffest}
              width={saintImgHeight}
              height={saintImgHeight}
              href={s.image}
            />,
          );
        });
      }
    });

    return saintImages;
  }
}
