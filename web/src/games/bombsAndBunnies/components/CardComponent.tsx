import * as React from 'react';
import css from './CardComponent.module.css';

import { CardStyle } from './shared/interfaces';

function getStyleClassName(style?: CardStyle) {
  if (style === undefined) return '';

  switch (style) {
    case CardStyle.Style1:
      return css.cardStyle1;

    case CardStyle.Style2:
      return css.cardStyle2;

    case CardStyle.Style3:
      return css.cardStyle3;

    case CardStyle.Style4:
      return css.cardStyle4;

    case CardStyle.Style5:
      return css.cardStyle5;

    case CardStyle.Style6:
      return css.cardStyle6;
  }

  return '';
}

export interface ICardProps {
  style?: CardStyle;
  selected?: boolean;
  click?: () => void;
}

export class CardComponent extends React.Component<ICardProps, {}> {
  front: string = '';

  render() {
    return (
      <div
        className={[
          css.card,
          this.front,
          this.props.click ? css.selectable : '',
          this.props.selected ? css.selected : '',
          getStyleClassName(this.props.style),
        ].join(' ')}
        onClick={this.props.click}
      >
        {this.renderSVG()}
      </div>
    );
  }

  renderSVG() {
    return null;
  }
}
export class FaceDownCardComponent extends CardComponent {
  front: string = css.faceDownCard;
}

export class EmptyCardComponent extends CardComponent {
  front: string = css.emptyCard;
}

export class BunnyCardComponent extends CardComponent {
  front: string = css.bunnyCard;

  renderSVG() {
    return (
      <svg width="100%" height="100%" viewBox="0 0 750 1050" className={css.cardSVG}>
        <g transform="translate(-50,850) scale(0.100000,-0.100000)" stroke="none">
          <path
            d="M2979 6807 c-337 -172 -203 -904 280 -1527 80 -104 286 -311 364
          -365 53 -38 69 -59 48 -67 -26 -9 -153 -225 -192 -325 -20 -52 -58 -214 -69
          -298 -20 -143 0 -329 52 -495 23 -71 94 -227 127 -276 l21 -31 -47 -33 c-81
          -58 -239 -218 -316 -318 -104 -137 -210 -334 -247 -458 -69 -235 -81 -317 -81
          -529 -1 -160 6 -227 32 -350 48 -217 181 -497 316 -663 24 -29 30 -43 21 -47
          -7 -2 -48 -16 -91 -30 -280 -91 -490 -283 -505 -460 -5 -61 10 -96 71 -162 46
          -50 83 -71 172 -99 104 -33 326 -26 510 16 197 45 495 124 683 181 78 23 98
          26 120 17 17 -7 111 -12 254 -14 124 -1 231 -4 236 -8 5 -3 34 -12 63 -20 30
          -8 117 -33 194 -56 245 -72 314 -89 635 -157 41 -8 122 -16 180 -16 97 -1 110
          1 170 29 76 36 113 70 147 137 59 118 10 281 -124 410 -78 75 -138 112 -251
          153 -36 13 -67 25 -70 28 -2 3 18 31 45 63 178 209 292 446 355 738 29 135 32
          462 5 600 -25 128 -83 305 -133 410 -115 241 -323 489 -521 623 -29 19 -53 39
          -53 44 0 6 16 39 35 74 227 412 182 950 -109 1308 -26 31 -46 59 -46 63 0 5
          14 14 32 22 44 20 221 154 319 243 307 278 578 714 655 1053 24 106 25 270 2
          346 -34 111 -119 185 -238 207 -84 16 -155 8 -263 -31 -380 -139 -799 -542
          -1038 -1001 -71 -136 -122 -266 -144 -366 -30 -137 -19 -125 -112 -128 -79 -3
          -83 -2 -87 20 -27 141 -39 198 -48 228 -84 268 -216 520 -400 763 -82 109
          -264 294 -363 372 -94 73 -149 106 -265 159 -77 35 -94 39 -185 42 -90 4 -105
          2 -146 -19z"
          />
        </g>
      </svg>
    );
  }
}

export class BombCardComponent extends CardComponent {
  front: string = css.bombCard;

  renderSVG() {
    return (
      <svg width="100%" height="100%" viewBox="0 0 750 1050" className={css.cardSVG}>
        <g transform="translate(-30,750) scale(0.100000,-0.100000)" stroke="none">
          <path
            d="M6163 4940 c-6 -14 -25 -66 -42 -116 l-33 -92 -105 50 c-58 27 -106
          48 -108 46 -2 -2 19 -50 46 -107 27 -57 48 -105 47 -106 -2 -1 -51 -19 -110
          -40 -59 -21 -105 -41 -102 -46 9 -15 -35 -10 -146 15 -161 37 -246 69 -490
          187 -124 59 -265 120 -315 134 -110 32 -241 43 -316 25 -130 -30 -247 -127
          -314 -260 -37 -73 -85 -238 -85 -290 0 -62 6 -60 -211 -60 l-199 0 3 -220 c2
          -121 7 -223 10 -226 3 -3 22 -1 43 5 74 20 276 41 387 41 126 0 334 -22 417
          -45 30 -8 61 -15 68 -15 9 0 12 53 12 230 l0 230 -217 2 -218 3 3 40 c2 21 12
          72 23 113 68 268 232 392 465 353 108 -18 155 -36 384 -146 332 -160 531 -220
          768 -233 l123 -7 -41 -84 c-22 -46 -39 -85 -38 -86 2 -2 50 19 107 46 58 27
          108 46 112 42 3 -5 17 -39 29 -78 13 -38 30 -86 38 -105 l14 -35 39 109 c21
          60 41 111 43 113 1 2 51 -19 110 -46 58 -28 106 -48 106 -46 0 2 -21 48 -46
          102 -25 54 -46 102 -47 106 -1 5 44 25 100 45 56 20 104 40 108 43 3 3 -44 24
          -105 45 l-110 40 50 103 c28 57 49 106 46 108 -2 2 -51 -18 -109 -45 l-105
          -50 -40 117 c-35 103 -41 113 -49 91z"
          />
          <path
            d="M3910 3729 c-410 -52 -816 -272 -1087 -588 -600 -701 -534 -1764 146
          -2381 236 -215 519 -357 843 -422 149 -30 471 -33 613 -4 379 75 648 218 915
          485 273 273 423 569 485 954 15 97 21 348 10 437 -25 193 -80 387 -154 545
          -246 525 -749 895 -1321 970 -120 16 -341 18 -450 4z"
          />
        </g>
      </svg>
    );
  }
}
