import React from 'react';
import { IGameDef } from '../../games';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

interface IGameCardProps {
  game: IGameDef;
}

export class GameCard extends React.Component<IGameCardProps, {}> {
  render() {
    return (
      <Card style={{ marginBottom: '16px' }}>
        <CardMedia
          style={{ height: '250px' }}
          image={this.props.game.imageURL}
          title={this.props.game.name}
        />
        <CardContent>
          <Typography gutterBottom={true} variant="h5" component="h2">
            {this.props.game.name}
          </Typography>
          <Typography component="p">
            {this.props.game.description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
