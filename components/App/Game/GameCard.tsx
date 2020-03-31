import React from 'react';
import { IGameDef } from 'games';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Typography from '@material-ui/core/Typography';

interface IGameCardProps {
  game: IGameDef;
  isLink?: boolean;
}

export class GameCard extends React.Component<IGameCardProps, {}> {
  render() {
    let navigateButton = null;
    const mainDivStyle: React.CSSProperties = {
      position: 'relative',
      height: '250px',
      width: '100%',
      backgroundPosition: 'left center',
      backgroundImage: `url(${this.props.game.imageURL})`,
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
        Play {this.props.game.name}
      </Typography>
    ) : (
      <Typography gutterBottom={false} variant="h4" component="h1" style={{ fontWeight: 300 }}>
        {this.props.game.name}
      </Typography>
    );
    return (
      <div style={mainDivStyle} data-test-id={`gamecard-${this.props.game.code}`}>
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
            {this.props.game.description}
          </Typography>
        </div>
        {navigateButton}
      </div>
    );
  }
}
