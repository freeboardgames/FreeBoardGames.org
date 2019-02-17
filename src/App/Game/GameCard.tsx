import React from 'react';
import { IGameDef } from '../../games';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';

interface IGameCardProps {
  game: IGameDef;
}

export class GameCard extends React.Component<IGameCardProps, {}> {
  render() {
    return (
      <Card style={{ marginBottom: '16px' }}>
        <CardMedia
          overlay={
            <CardTitle
              title={this.props.game.name}
              subtitle={this.props.game.description}
            />}
        >
          <img
            src={this.props.game.imageURL}
            alt={this.props.game.name}
          />
        </CardMedia>
      </Card>
    );
  }
}
