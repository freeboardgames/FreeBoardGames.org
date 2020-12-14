import * as React from 'react';
import { IScore } from './Scoreboard';
import ICard from './card';

import css from './PlayerBadges.module.css';
import { BuildingCardComponent, MoneyCardComponent } from './CardComponent';

export interface IPlayerBadgeProps {
  playerID: number;
  name: string;
  active: boolean;
  self: boolean;
  score: IScore;
  color: string;
  round: number;
  showBid: boolean;
  newCard?: ICard;
  spentCard?: ICard;
}

export class PlayerBadge extends React.Component<IPlayerBadgeProps, {}> {
  render() {
    const borderColor = this.props.color ?? 'white';
    const cname = [css.playerBadge, this.props.active ? css.active : '', this.props.self ? css.self : ''].join(' ');
    return (
      <div
        className={cname}
        key={this.props.playerID}
        style={{ borderColor }}
        data-testid={`badge-${this.props.playerID}`}
      >
        <svg height="64" width="140">
          <defs>
            <filter id="f3" x="0" y="0" width="200%" height="200%">
              <feOffset result="offOut" in="SourceAlpha" dx="10" dy="10" />
              <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
          </defs>
          <g transform="matrix(0.2,0,0,0.2,0,0)">
            <g filter="url(#f3)">
              {this._maybeRenderSpent()}
              {this._maybeRenderAward()}
              {this._maybeRenderBid()}

              <g transform="matrix(1.09985,0,0,1.27967,-50.5889,-3.61942)">
                <path
                  d="M625.681,60.693C625.681,46.136 611.931,34.318 594.994,34.318L132.667,34.318C115.73,34.318 101.98,46.136 101.98,60.693L101.98,113.442C101.98,127.999 115.73,139.817 132.667,139.817L594.994,139.817C611.931,139.817 625.681,127.999 625.681,113.442L625.681,60.693Z"
                  className={css.moneyBackground}
                />
                <clipPath id="_clip4">
                  <path d="M625.681,60.693C625.681,46.136 611.931,34.318 594.994,34.318L132.667,34.318C115.73,34.318 101.98,46.136 101.98,60.693L101.98,113.442C101.98,127.999 115.73,139.817 132.667,139.817L594.994,139.817C611.931,139.817 625.681,127.999 625.681,113.442L625.681,60.693Z" />
                </clipPath>
                <g clipPath="url(#_clip4)">
                  <g transform="matrix(0.936962,0,0,0.78145,19.7587,2.82839)">
                    <rect x="150.568" y="18.868" width="496.12" height="88.93" className={css.nameBackground} />
                  </g>
                </g>
                <path
                  d="M625.681,60.693C625.681,46.136 611.931,34.318 594.994,34.318L132.667,34.318C115.73,34.318 101.98,46.136 101.98,60.693L101.98,113.442C101.98,127.999 115.73,139.817 132.667,139.817L594.994,139.817C611.931,139.817 625.681,127.999 625.681,113.442L625.681,60.693Z"
                  className={css.something2}
                />
              </g>
              <g transform="matrix(1,0,0,1,32.6451,-33.0834)">
                <text x="201.345px" y="130.464px" className={css.nameText}>
                  {this.props.name}
                </text>
              </g>
              <g transform="matrix(1,0,0,1,125.045,29.4027)">
                <text x="480px" y="130.464px" className={css.score}>
                  {'$' + this.props.score.score + 'k'}
                </text>
              </g>
              <g transform="matrix(1.18074,0,0,1.18074,32.0371,30.4905)">
                <circle cx="66.974" cy="65.959" r="84.041" className={css.playerCircle} />
                <text x="0px" y="126px" className={css.activeText}>
                  {this.props.active ? ' 🕒' : ''}
                </text>
                <clipPath id="_clip5">
                  <circle cx="66.974" cy="65.959" r="84.041" />
                </clipPath>
                <g clipPath="url(#_clip5)">
                  <g transform="matrix(0.598866,-0.598866,0.598866,0.598866,-177.171,13.7215)">
                    <clipPath id="_clip6">
                      <rect x="30.493" y="247.565" width="266.854" height="142.179" />
                    </clipPath>
                    <g clipPath="url(#_clip6)">
                      <g transform="matrix(0.707107,0.707107,-0.707107,0.707107,160.249,102.852)"></g>
                    </g>
                  </g>
                </g>
                <circle cx="66.974" cy="65.959" r="84.041" className={css.something3} />
              </g>
            </g>
          </g>
        </svg>
        {this._maybeRenderSpentCard()}
        {this._maybeRenderNewCard()}
      </div>
    );
  }

  _maybeRenderSpentCard() {
    if (!('spentCard' in this.props)) {
      return;
    }

    const spentCard: any = this.props.spentCard;

    if (spentCard == null) {
      return;
    }

    const ComponentTag: any = spentCard.building ? BuildingCardComponent : MoneyCardComponent;

    return (
      <div className={css.spentCard} key={spentCard.number}>
        <ComponentTag card={spentCard} />
      </div>
    );
  }

  _maybeRenderSpent() {
    if (!('spentCard' in this.props)) {
      return;
    }

    const spentCard: any = this.props.spentCard;

    if (spentCard == null) {
      return;
    }

    return (
      <g
        id="Card-Spent"
        transform="matrix(1,0,0,1,60,56.8804)"
        className={spentCard.building ? css.buildingColor : css.moneyColor}
      >
        <g transform="matrix(1,0,0,1,104.435,-50.7744)">
          <path
            d="M453.699,127.474L453.699,229.749L453.694,229.749C453.268,264.607 421.79,292.789 383.078,292.789C380.755,292.789 378.459,292.687 376.195,292.489L376.195,292.789L329.015,292.789C290.303,292.789 258.825,264.607 258.399,229.749L258.374,229.749C258.374,194.56 226.73,165.991 187.753,165.991C183.38,165.991 179.93,164.825 175.775,165.513L174.944,127.474L453.699,127.474Z"
            className={css.cardAwardBackground}
          />
        </g>
        <g transform="matrix(0.630179,0,0,0.947429,218.216,-35.9068)">
          <path
            d="M524.062,219.912C524.062,185.198 481.69,157.014 429.499,157.014L339.957,157.014C287.766,157.014 245.394,185.198 245.394,219.912C245.394,254.627 287.766,282.811 339.957,282.811L429.499,282.811C481.69,282.811 524.062,254.627 524.062,219.912Z"
            className={css.cardAwardHighlight}
          />
        </g>
        <g transform="matrix(1,0,0,1,219.702,-17.1011)">
          <text x="242px" y="233.458px" className={css.cardAwardText}>
            {spentCard.value}
          </text>
        </g>
      </g>
    );
  }

  _maybeRenderNewCard() {
    if (!('newCard' in this.props)) {
      return;
    }

    const newCard: any = this.props.newCard;

    if (newCard == null) {
      return;
    }

    const ComponentTag: any = newCard.building ? BuildingCardComponent : MoneyCardComponent;

    return (
      <div className={css.newCard} key={newCard.number}>
        <ComponentTag card={newCard} />
      </div>
    );
  }

  _maybeRenderAward() {
    if (!('newCard' in this.props)) {
      return;
    }

    const newCard: any = this.props.newCard;

    if (newCard == null) {
      return;
    }

    return (
      <g
        id="Card-Award"
        transform="matrix(1,0,0,1,-95.5506,56.8804)"
        className={newCard.building ? css.buildingColor : css.moneyColor}
      >
        <g transform="matrix(1,0,0,1,104.435,-50.7744)">
          <path
            d="M453.699,127.474L453.699,229.749L453.694,229.749C453.268,264.607 421.79,292.789 383.078,292.789C380.755,292.789 378.459,292.687 376.195,292.489L376.195,292.789L329.015,292.789C290.303,292.789 258.825,264.607 258.399,229.749L258.374,229.749C258.374,194.56 226.73,165.991 187.753,165.991C183.38,165.991 179.93,164.825 175.775,165.513L174.944,127.474L453.699,127.474Z"
            className={css.cardAwardBackground}
          />
        </g>
        <g transform="matrix(0.630179,0,0,0.947429,218.216,-35.9068)">
          <path
            d="M524.062,219.912C524.062,185.198 481.69,157.014 429.499,157.014L339.957,157.014C287.766,157.014 245.394,185.198 245.394,219.912C245.394,254.627 287.766,282.811 339.957,282.811L429.499,282.811C481.69,282.811 524.062,254.627 524.062,219.912Z"
            className={css.cardAwardHighlight}
          />
        </g>
        <g transform="matrix(1,0,0,1,219.702,-17.1011)">
          <text x="242px" y="233.458px" className={css.cardAwardText}>
            {newCard.value}
          </text>
        </g>
      </g>
    );
  }

  _maybeRenderBid() {
    if (!this.props.showBid) {
      return;
    }

    if (!('bid' in this.props.score)) {
      return;
    }

    if (this.props.score.bid < 0) {
      return;
    }

    const cname = [css.bidContainer, this.props.score.passed ? css.passed : ''].join(' ');

    return (
      <g transform="matrix(0.840306,0,0,0.758643,224.58,51.3651)" className={cname}>
        <path
          d="M184.902,158.512L183.913,108.371L451.306,108.371L451.306,243.184L451.3,243.184C450.793,289.132 413.333,326.279 367.264,326.279C321.196,326.279 283.736,289.132 283.229,243.184L283.199,243.184C283.199,196.8 245.541,159.142 199.157,159.142C193.953,159.142 189.847,157.604 184.902,158.512Z"
          className={css.bidBackground}
        />
        <clipPath id="_clip1">
          <path d="M184.902,158.512L183.913,108.371L451.306,108.371L451.306,243.184L451.3,243.184C450.793,289.132 413.333,326.279 367.264,326.279C321.196,326.279 283.736,289.132 283.229,243.184L283.199,243.184C283.199,196.8 245.541,159.142 199.157,159.142C193.953,159.142 189.847,157.604 184.902,158.512Z" />
        </clipPath>
        <g clipPath="url(#_clip1)">
          <g transform="matrix(1.19004,0,0,1.31814,-253.117,-55.7036)">
            <circle cx="521.062" cy="219.502" r="59.243" className={css.bidCircle} />
          </g>
          <g transform="matrix(1.19004,0,0,1.31814,78.0412,-15.2718)">
            <text x="240px" y="233.458px" className={css.bid}>
              {this.props.score.bid}
            </text>
          </g>
          <g transform="matrix(1.19004,0,0,0.694548,-256.687,69.2922)">
            <clipPath id="_clip2">
              <rect x="347.5" y="135.443" width="307.384" height="48.934" />
            </clipPath>
            <g clipPath="url(#_clip2)">
              <g transform="matrix(1,-0,-0,1.89784,-2.55795e-13,-185.661)"></g>
            </g>
          </g>
        </g>
        <path
          d="M184.902,158.512L183.913,108.371L451.306,108.371L451.306,243.184L451.3,243.184C450.793,289.132 413.333,326.279 367.264,326.279C321.196,326.279 283.736,289.132 283.229,243.184L283.199,243.184C283.199,196.8 245.541,159.142 199.157,159.142C193.953,159.142 189.847,157.604 184.902,158.512Z"
          className={css.bidNumber}
        />
      </g>
    );
  }
}
