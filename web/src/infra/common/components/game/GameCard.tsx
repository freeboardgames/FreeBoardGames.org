import React from 'react';
import { IGameDef } from 'gamesShared/definitions/game';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography';
import { WithNamedT, withNamedT, WithTranslation, withTranslation } from 'infra/i18n';
import { compose } from 'recompose';

interface IGameCardInnerProps extends Pick<WithTranslation, 't'>, WithNamedT {}

interface IGameCardOutterProps {
  game: IGameDef;
  isLink?: boolean;
}

export class GameCardInternal extends React.Component<IGameCardInnerProps & IGameCardOutterProps, {}> {
  render() {
    const { t, translate } = this.props;

    let navigateButton = null;
    const image = this.props.game.imageURL;
    const mainDivStyle: React.CSSProperties = {
      position: 'relative',
      height: '250px',
      width: '100%',
      backgroundPosition: 'left center',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
    };
    const baseBadgeStyle: React.CSSProperties = {
      position: 'absolute',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      padding: '0px 8px',
      borderRadius: '8px',
      backgroundColor: 'white',
      color: 'black',
      textDecoration: 'none',
    };
    if (this.props.isLink) {
      mainDivStyle.boxShadow = '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)';
      mainDivStyle.borderRadius = '8px';
      navigateButton = (
        <div
          style={{
            ...baseBadgeStyle,
            bottom: '12px',
            right: '8px',
            borderRadius: '32px',
            padding: '0',
          }}
        >
          <IconButton aria-label="Next">
            <NavigateNextIcon />
          </IconButton>
        </div>
      );
    }
    const gameNameHeading = this.props.isLink ? (
      <Typography gutterBottom={false} variant="h4" component="h2" style={{ fontWeight: 300 }}>
        {t('play', { name: translate('name', this.props.game.name) })}
      </Typography>
    ) : (
      <Typography gutterBottom={false} variant="h4" component="h1" style={{ fontWeight: 300 }}>
        {translate('name', this.props.game.name)}
      </Typography>
    );
    return (
      <div style={mainDivStyle} data-testid={`gamecard-${this.props.game.code}`}>
        <div
          style={{
            ...baseBadgeStyle,
            top: '12px',
            left: '8px',
            paddingTop: '4px',
            maxWidth: '500px',
          }}
        >
          {gameNameHeading}
        </div>
        <div
          style={{
            ...baseBadgeStyle,
            bottom: '12px',
            left: '8px',
          }}
        >
          <Typography gutterBottom={false} variant="overline" component="h5">
            {translate('description', this.props.game.description)}
          </Typography>
        </div>
        {navigateButton}
      </div>
    );
  }
}

const enhance = compose<IGameCardInnerProps, IGameCardOutterProps>(
  withTranslation('GameCard'),
  withNamedT<IGameCardOutterProps>(({ game }) => game.code),
);

export const GameCard = enhance(GameCardInternal);
