import * as React from 'react';

import {
  ICityData,
  CITIES,
  cityImgSize,
  cityFontSize,
  ECityDotPosition,
  getCityTextPosition,
  getCityTextBoxSize,
} from '../constants/cities';

export class CityBoard extends React.Component<any, {}> {
  _getCityCenterPosition = (c: ICityData) => {
    const relativeToText = c.dotPosition && c.dotPosition.includes(ECityDotPosition.Text);
    let { x, y } = relativeToText ? getCityTextPosition(c) : c.position;

    if (relativeToText) {
      // change x-pos
      if (c.dotPosition.includes(ECityDotPosition.Left)) {
        x = x - (getCityTextBoxSize(c) / 2 + cityFontSize * 0.45);
      } else if (c.dotPosition.includes(ECityDotPosition.Right)) {
        x = x + (getCityTextBoxSize(c) / 2 + cityFontSize * 0.4);
      }
      // change y-pos
      if (c.dotPosition.includes(ECityDotPosition.Top)) {
        y = y - cityFontSize * 1.5;
      } else if (c.dotPosition.includes(ECityDotPosition.Bottom)) {
        y = y + cityFontSize * 0.65;
      } else {
        y = y - cityFontSize / 2;
      }
    } else if (c.dotPosition) {
      const commonImgOffset = cityImgSize / 2 - cityFontSize / 2;
      // change x-pos
      if (c.dotPosition.includes(ECityDotPosition.Left)) {
        x = x - commonImgOffset;
      } else if (c.dotPosition.includes(ECityDotPosition.Right)) {
        x = x + commonImgOffset;
      }
      // change y-pos
      if (c.dotPosition.includes(ECityDotPosition.Top)) {
        y = y - commonImgOffset;
      } else if (c.dotPosition.includes(ECityDotPosition.Bottom)) {
        y = y + commonImgOffset;
      }
    }

    // const cityDotOffset = {x: 0, y:0, ...c.dotOffset};
    return {
      cx: x,
      cy: y,
    };
  };

  render() {
    const allCityContent = [];

    // add image if required
    CITIES.forEach((c, idx) => {
      if (c.image) {
        allCityContent.push(
          <image
            key={`cons_city_image_${idx}`}
            x={c.position.x - cityImgSize / 2}
            y={c.position.y - cityImgSize / 2}
            width={cityImgSize}
            height={cityImgSize}
            href={c.image}
          />,
        );
      }
    });

    // add connecting lines
    CITIES.forEach((c, idx) => {
      const cityCenterPos = this._getCityCenterPosition(c);
      c.connected.forEach((cityName, cIdx) => {
        const connectedCenterPos = this._getCityCenterPosition(CITIES.filter((c) => c.name === cityName)[0]);
        allCityContent.push(
          <line
            key={`cons_city_road_${idx}_${cIdx}`}
            x1={cityCenterPos.cx}
            y1={cityCenterPos.cy}
            x2={connectedCenterPos.cx}
            y2={connectedCenterPos.cy}
            stroke="white"
            strokeWidth={0.3}
          />,
        );
      });
    });

    // add center point, text and rectangle
    CITIES.forEach((c, idx) => {
      // add city center
      allCityContent.push(
        <circle key={`cons_city_center_${idx}`} {...this._getCityCenterPosition(c)} r={0.75} fill="white" />,
      );

      // add rect behind text
      const textPos = getCityTextPosition(c);
      const cTextLength = getCityTextBoxSize(c);
      allCityContent.push(
        <rect
          key={`cons_city_name_bg_${idx}`}
          x={textPos.x - cTextLength / 2}
          y={textPos.y - cityFontSize}
          width={cTextLength}
          height={cityFontSize * 1.25}
          fill="black"
          stroke="white"
          strokeWidth={c.image ? 0 : cityFontSize * 0.1}
          rx={cityFontSize * 0.15}
          opacity={0.75}
        />,
      );

      // add text
      allCityContent.push(
        <text
          key={`cons_city_text_${idx}`}
          x={textPos.x}
          y={textPos.y}
          fontSize={cityFontSize}
          textAnchor="middle"
          fill="white"
        >
          {c.name}
        </text>,
      );
    });

    return allCityContent;
  }
}
