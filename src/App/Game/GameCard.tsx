import React from 'react';
import { IGameDef } from '../../games';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

interface IGameCardProps {
  game: IGameDef;
  isLink?: boolean;
}

export class GameCard extends React.Component<IGameCardProps, {}> {
  render() {
    let navigateButton = null;
    const mainDivStyle: React.CSSProperties = {
      marginBottom: '16px',
      position: 'relative',
      height: '250px',
      width: '100%',
      backgroundPosition: 'left center',
      backgroundImage: `url(${this.props.game.imageURL})`,
    };
    const baseBadgeStyle: React.CSSProperties = {
      position: 'absolute',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      padding: '0px 8px',
      borderRadius: '8px',
      backgroundColor: 'white',
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
    return (
      <div style={mainDivStyle}>
        <div
          style={{
            ...baseBadgeStyle,
            top: '12px',
            left: '8px',
            paddingTop: '4px',
          }}
        >
          <Typography gutterBottom={false} variant="h4" component="h4" style={{ fontWeight: 300 }}>
            {this.props.game.name}
          </Typography>
        </div>
        <div
          style={{
            ...baseBadgeStyle,
            bottom: '12px',
            left: '8px',
          }}
        >
          <Typography gutterBottom={false} variant="overline" component="p">
            {this.props.game.description}
          </Typography>
        </div>
        {navigateButton}
      </div>
    );
  }
}
