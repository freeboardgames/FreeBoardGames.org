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
      backgroundPosition: 'center',
      backgroundImage: `url(${this.props.game.imageURL})`,
    };
    if (this.props.isLink) {
      mainDivStyle.borderRadius = '8px';
      navigateButton = (
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '8px',
            borderRadius: '32px',
            backgroundColor: 'white',
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
            position: 'absolute',
            top: '12px',
            left: '8px',
            padding: '4px 8px',
            borderRadius: '8px',
            backgroundColor: 'white',
          }}
        >
          <Typography gutterBottom={false} variant="h4" component="h4" style={{ fontWeight: 300 }}>
            {this.props.game.name}
          </Typography>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '8px',
            padding: '0 8px',
            borderRadius: '8px',
            backgroundColor: 'white',
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
