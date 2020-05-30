import * as React from 'react';
import { IScore } from './Scoreboard';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';

import css from './PlayerBadges.css';

export interface IPlayerBadgeProps {
  playerID: number;
  name: string;
  active: boolean;
  self: boolean;
  score: IScore;
  color: string;
}

export class PlayerBadge extends React.Component<IPlayerBadgeProps, {}> {
    render() {
        const borderColor = this.props.color ?? 'white';
        const cname = [css.playerBadge, this.props.active ? css.active : ''].join(' ');
        return (
            <div
                className={cname}
                key={this.props.playerID}
                style={{ borderColor }}
                data-testid={`badge-${this.props.playerID}`}
            >
              <svg height="60" width="128"  className={this.props.self ? css.self : ''}>
                <g id="Layer1" transform="matrix(0.2,0,0,0.2,0,0)">
                  {this._maybeRenderBid()}
                  <g transform="matrix(1.09985,0,0,1.27967,-50.5889,-3.61942)">
                      <path d="M625.681,60.693C625.681,46.136 611.931,34.318 594.994,34.318L132.667,34.318C115.73,34.318 101.98,46.136 101.98,60.693L101.98,113.442C101.98,127.999 115.73,139.817 132.667,139.817L594.994,139.817C611.931,139.817 625.681,127.999 625.681,113.442L625.681,60.693Z" className={css.moneyBackground} />
                      <clipPath id="_clip4">
                          <path d="M625.681,60.693C625.681,46.136 611.931,34.318 594.994,34.318L132.667,34.318C115.73,34.318 101.98,46.136 101.98,60.693L101.98,113.442C101.98,127.999 115.73,139.817 132.667,139.817L594.994,139.817C611.931,139.817 625.681,127.999 625.681,113.442L625.681,60.693Z"/>
                      </clipPath>
                      <g clip-path="url(#_clip4)">
                          <g transform="matrix(0.936962,0,0,0.78145,19.7587,2.82839)">
                              <rect x="150.568" y="18.868" width="496.12" height="88.93" className={css.nameBackground} />
                          </g>
                      </g>
                      <path d="M625.681,60.693C625.681,46.136 611.931,34.318 594.994,34.318L132.667,34.318C115.73,34.318 101.98,46.136 101.98,60.693L101.98,113.442C101.98,127.999 115.73,139.817 132.667,139.817L594.994,139.817C611.931,139.817 625.681,127.999 625.681,113.442L625.681,60.693Z" className={css.something2} />
                  </g>
                  <g transform="matrix(1,0,0,1,32.6451,-33.0834)">
                      <text x="201.345px" y="130.464px" className={css.nameText}>{this.props.name}</text>
                  </g>
                  <g transform="matrix(1,0,0,1,125.045,29.4027)">
                      <text x="201.345px" y="130.464px" className={css.score}>{"$"+this.props.score.score}</text>
                  </g>
                  <g transform="matrix(1.18074,0,0,1.18074,32.0371,30.4905)">
                      <circle cx="66.974" cy="65.959" r="84.041" className={css.playerCircle} />
                      <text x="36px" y="90px" className={css.nameText}>{this.props.active ? ' 🕒' : ''}</text>
                      <clipPath id="_clip5">
                          <circle cx="66.974" cy="65.959" r="84.041"/>
                      </clipPath>
                      <g clip-path="url(#_clip5)">
                          <g transform="matrix(0.598866,-0.598866,0.598866,0.598866,-177.171,13.7215)">
                              <clipPath id="_clip6">
                                  <rect x="30.493" y="247.565" width="266.854" height="142.179"/>
                              </clipPath>
                              <g clip-path="url(#_clip6)">
                                  <g transform="matrix(0.707107,0.707107,-0.707107,0.707107,160.249,102.852)">
                                      
                                  </g>
                              </g>
                          </g>
                      </g>
                      <circle cx="66.974" cy="65.959" r="84.041" className={css.something3} />
                  </g>
                </g>
              </svg>
            </div>
        );
  }

  _maybeRenderBid() {
    if (!('bid' in this.props.score)){
      return;
    }

    if (this.props.score.bid <= 0){
      return;
    }
    
    return (
      <g transform="matrix(0.840306,0,0,0.758643,224.58,51.3651)" className={(this.props.score.passed?css.passed:"")}>
        <path d="M184.902,158.512L183.913,108.371L451.306,108.371L451.306,243.184L451.3,243.184C450.793,289.132 413.333,326.279 367.264,326.279C321.196,326.279 283.736,289.132 283.229,243.184L283.199,243.184C283.199,196.8 245.541,159.142 199.157,159.142C193.953,159.142 189.847,157.604 184.902,158.512Z" className={css.bidBackground} />
        <clipPath id="_clip1">
            <path d="M184.902,158.512L183.913,108.371L451.306,108.371L451.306,243.184L451.3,243.184C450.793,289.132 413.333,326.279 367.264,326.279C321.196,326.279 283.736,289.132 283.229,243.184L283.199,243.184C283.199,196.8 245.541,159.142 199.157,159.142C193.953,159.142 189.847,157.604 184.902,158.512Z"/>
        </clipPath>
        <g clip-path="url(#_clip1)">
            <g transform="matrix(1.19004,0,0,1.31814,-253.117,-55.7036)">
                <circle cx="521.062" cy="219.502" r="59.243" className={css.bidCircle} />
            </g>
            <g transform="matrix(1.19004,0,0,1.31814,78.0412,-15.2718)">
                <text x="240px" y="233.458px" className={css.bid}>{this.props.score.bid}</text>
            </g>
            <g transform="matrix(1.19004,0,0,0.694548,-256.687,69.2922)">
                <clipPath id="_clip2">
                    <rect x="347.5" y="135.443" width="307.384" height="48.934"/>
                </clipPath>
                <g clip-path="url(#_clip2)">
                    <g transform="matrix(1,-0,-0,1.89784,-2.55795e-13,-185.661)">
                        
                    </g>
                </g>
            </g>
        </g>
        <path d="M184.902,158.512L183.913,108.371L451.306,108.371L451.306,243.184L451.3,243.184C450.793,289.132 413.333,326.279 367.264,326.279C321.196,326.279 283.736,289.132 283.229,243.184L283.199,243.184C283.199,196.8 245.541,159.142 199.157,159.142C193.953,159.142 189.847,157.604 184.902,158.512Z" className={css.bidNumber} />
      </g>
    )
  }
}
