import * as React from 'react';
import ICard from './card';
import css from './CardComponent.css';

export interface ICardProps {
  card: ICard;
  selectable?: boolean;
  selected?: boolean;
  click?: () => void;
}

export class CardComponent extends React.Component<ICardProps, {}> {
  front: string = css.MoneyCard;

  render() {
    return (
      <div
        className={[
          css.Card,
          this.front,
          this.props.selectable ? css.Selectable : '',
          this.props.selected ? css.Selected : '',
          this.props.card.showing ? css['CardFront_' + this.props.card.value] : css.hidden,
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
export class EmptyCardComponent extends CardComponent {
  front: string = css.EmptyCard;
}

export class MoneyCardComponent extends CardComponent {
  front: string = css.MoneyCard;

  renderSVG() {
    return (
      <svg width="100%" height="100%" viewBox="0 0 750 1050" className={css.CardSVG}>
        <g id="Layer1">
          <rect x="0" y="0" width="750" height="1050" className={css.MoneyCardSVGOutline} />
          <g transform="matrix(0.884531,0,0,0.928794,43.301,37.3833)">
            <rect x="0" y="0" width="750" height="1050" className={css.MoneyCardSVGBackground} />
          </g>
          {this.renderTitle()}
          {this.renderText()}
        </g>
      </svg>
    );
  }

  renderTitle() {
    if (this.props.card.showing) return null;

    return (
      <g>
        <g transform="matrix(0.73829,0,0,0.673539,95.7899,9.54578)">
          <g transform="matrix(1,0,0,0.618977,0,102.575)">
            <rect x="107.635" y="297.38" width="534.729" height="17.34" />
          </g>
          <g transform="matrix(1,0,0,0.37067,0,193.303)">
            <rect x="107.635" y="297.38" width="534.729" height="17.34" />
          </g>
        </g>
        <g transform="matrix(1,0,0,1,-5.09405,-272.125)">
          <text x="174.308px" y="462.346px" className={css.MoneyCardSVGTitle}>
            Estate
          </text>
          <text x="187.552px" y="587.346px" className={css.MoneyCardSVGTitle}>
            Buyer
          </text>
        </g>
        <g transform="matrix(1,0,0,1,160,111.819)">
          <text x="202.827px" y="762.873px" className={css.MoneyCardSVGDollar}>
            $
          </text>
        </g>
      </g>
    );
  }

  renderText() {
    if (!this.props.card.showing) return null;

    return (
      <g>
        <g>
          <g transform="matrix(1,0,0,1,0.349972,-16.682)">
            <text x="63.599px" y="189.726px" className={css.MoneyCardSVGText}>
              ${this.props.card.value}k
            </text>
          </g>
        </g>
        <g transform="matrix(-1,-1.22465e-16,1.22465e-16,-1,753.766,1042.56)">
          <g transform="matrix(1,0,0,1,0.349972,-16.682)">
            <text x="63.599px" y="189.726px" className={css.MoneyCardSVGText}>
              ${this.props.card.value}k
            </text>
          </g>
        </g>
        <g transform="matrix(1,0,0,1,160,-30.2725)">
          <text x="202.827px" y="762.873px" className={css.MoneyCardSVGDollar}>
            {this.props.card.value}
          </text>
        </g>
      </g>
    );
  }
}

export class BuildingCardComponent extends CardComponent {
  front: string = css.PropertyCard;

  renderSVG() {
    return (
      <svg width="100%" height="100%" viewBox="0 0 750 1110" className={css.CardSVG}>
        <rect x="0" y="798.191" width="750" height="311.809" className={css.PropertyCardSVGOutline} />
        <rect x="0" y="0" width="750" height="798.191" className={css.PropertyCardSVGBackground} />
        <g transform="matrix(1,0,0,1,2.09793,0)" className={css.PropertyCardSVGWindows}>
          <path d="M336.695,576.485L336.695,510.853L409.109,510.853L409.109,576.485L553.338,576.485L553.338,798.191L192.467,798.191L192.467,576.485L336.695,576.485Z" />
        </g>
        <g transform="matrix(1,0,0,1,3.57983,-97.5097)">
          <path d="M553.338,673.994L553.338,882.983L606.542,882.983L606.542,895.7L136.299,895.7L136.299,882.983L190.799,882.983L190.799,673.994C190.799,673.994 371.42,571.098 371.42,571.098L553.338,673.994ZM366.775,802.097L333.731,802.097L333.731,883.532L366.775,883.532L366.775,802.097ZM409.109,802.097L375,802.097L375,883.532L409.109,883.532L409.109,802.097ZM297.969,768.591L222.591,768.591L222.591,821.237L297.969,821.237L297.969,768.591ZM522.542,768.591L447.165,768.591L447.165,821.237L522.542,821.237L522.542,768.591ZM409.109,794.914L333.731,794.914C333.731,775.234 350.619,759.256 371.42,759.256C392.221,759.256 409.109,775.234 409.109,794.914ZM297.969,686.882L222.591,686.882L222.591,739.528L297.969,739.528L297.969,686.882ZM522.542,686.882L447.165,686.882L447.165,739.528L522.542,739.528L522.542,686.882ZM409.109,686.882L333.731,686.882L333.731,739.528L409.109,739.528L409.109,686.882ZM145.054,635.47L167.611,659.13L372.007,544.558L578.205,656.699L599.981,634.469L372.007,506.946L304.455,544.429L304.614,525L258.515,525L258.755,570.577L145.054,635.47ZM371.42,615.608C382.631,615.608 391.733,625.286 391.733,637.205C391.733,649.124 382.631,658.801 371.42,658.801C360.209,658.801 351.107,649.124 351.107,637.205C351.107,625.286 360.209,615.608 371.42,615.608Z" />
        </g>
        {this.renderTitle()}
        {this.renderText()}
      </svg>
    );
  }

  renderTitle() {
    if (this.props.card.showing) return null;

    return (
      <g>
        <g transform="matrix(0.73829,0,0,0.673539,95.7899,42.7692)">
          <g transform="matrix(1,0,0,0.618977,0,102.575)">
            <rect x="107.635" y="297.38" width="534.729" height="17.34" />
          </g>
          <g transform="matrix(1,0,0,0.37067,0,193.303)">
            <rect x="107.635" y="297.38" width="534.729" height="17.34" />
          </g>
        </g>
        <g transform="matrix(1,0,0,1,-5.09405,-238.902)">
          <text x="174.308px" y="462.346px" className={css.PropertyCardSVGTitle}>
            Estate
          </text>
          <text x="187.552px" y="587.346px" className={css.PropertyCardSVGTitle}>
            Buyer
          </text>
        </g>
      </g>
    );
  }

  renderText() {
    if (!this.props.card.showing) return null;

    return (
      <g>
        <g transform="matrix(-1,-1.22465e-16,1.22465e-16,-1,735.272,1049.06)">
          <text x="63.599px" y="189.726px" className={css.PropertyCardSVGText}>
            {this.props.card.value}
          </text>
        </g>
        <g transform="matrix(-1,-1.22465e-16,1.22465e-16,-1,350.798,1049.06)">
          <text x="63.599px" y="189.726px" className={css.PropertyCardSVGText}>
            {this.props.card.value}
          </text>
        </g>
        <g transform="matrix(1,0,0,1,20.7011,0.393204)">
          <text x="63.599px" y="189.726px" className={css.PropertyCardSVGText}>
            {this.props.card.value}
          </text>
        </g>
        <g transform="matrix(1,0,0,1,409.513,0.393204)">
          <text x="63.599px" y="189.726px" className={css.PropertyCardSVGText}>
            {this.props.card.value}
          </text>
        </g>
      </g>
    );
  }
}
