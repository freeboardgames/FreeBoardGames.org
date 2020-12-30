import * as React from 'react';

import { SAINTS, saintImgHeight, saintImgWidth } from '../constants/saints';
import {
  ECyNames,
  CITIES,
  cityFontSize,
  getCityTextPosition,
  cityBoardWidth,
  ECityTextPosition,
  cityImgSize,
} from '../constants/cities';
import { render } from 'enzyme';

const bookImg = require('../media/book.png');
const SaintImgScale = [1, 1, 1, 0.95, 0.8, 0.75, 0.75];


export class SainstOnBoard extends React.Component<any, {}> {

    _getImageScale = (numImages) => {
        return SaintImgScale[numImages - 1]; 
    };

    _getImageWidth = (numImages) => {
        const width = saintImgWidth * this._getImageScale(numImages); 
        return {
            1: [-width * 0.5],
            2: [-width, 0],
            3: [-1.45 * width, -0.5 * width, width * 0.45],
            4: [-1.7 * width, -0.85 * width, -0.075 * width , 0.85 * width],
            5: [-1.6 * width, -0.8 * width, 0, 0.8 * width, 1.6 * width],
        }[numImages];
    };

  render() {
    const bookInCity = ECyNames.Philippines;
    const bookAndSaintsImages = [];
    let renderedBook = null;
    CITIES.forEach((c) => {
      const saints: any[] = SAINTS.filter((s) => c.name === s.isInCity);
      if(c.name === bookInCity){
        saints.splice(1,0, {image: bookImg, isBook: true});
      }
      
      if (saints.length > 0) {
        const numSaints = Math.min(3, saints.length);
        const textPos = getCityTextPosition(c);
        // compensate for the edge cases
        let xMin = 0;
        let xMax = cityBoardWidth;
        this._getImageWidth(numSaints).forEach((offset) => {
          xMin = Math.min(xMin, textPos.x + offset);
          xMax = Math.max(xMax, textPos.x + offset + cityImgSize * 0.4);
        });
        xMin = xMin < 0 ? xMin : 0;
        xMax = xMax > cityBoardWidth ? (cityBoardWidth - xMax) : 0;

        const xOffset = -xMin + xMax;
        let yOffest = -cityFontSize * 1.1 - saintImgHeight  * this._getImageScale(numSaints);
        if (c.textPosition === ECityTextPosition.Top) {
          yOffest = 0.15 * saintImgHeight * this._getImageScale(numSaints);
        }

        saints.slice(0, numSaints).forEach((s, sIdx) => {
          const renderedImg = (
            <image
              key={`cons_saint_image_${sIdx}`}
              x={textPos.x + this._getImageWidth(numSaints)[sIdx] + xOffset}
              y={textPos.y + yOffest}
              width={saintImgHeight * this._getImageScale(numSaints)}
              height={saintImgHeight * this._getImageScale(numSaints)}
              href={s.image}
            />
          ); 
          if (s.isBook){
              renderedBook = renderedImg;
          } else {
              bookAndSaintsImages.push(renderedImg);
          }
        });
      }
    });

    if (renderedBook){
        bookAndSaintsImages.push(renderedBook);
    }

    return bookAndSaintsImages;
  }
}
