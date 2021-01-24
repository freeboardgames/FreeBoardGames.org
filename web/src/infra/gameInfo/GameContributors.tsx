import { IGameDef } from 'gamesShared/definitions/game';
import React from 'react';
import { Typography } from '@material-ui/core';

interface GameContributorsProps {
  game: IGameDef;
}


export class GameContributors extends React.Component<GameContributorsProps, {}> {
  render() {
    const contributors = this.props.game.contributors.map((username) => (
      <a 
        href={`https://github.com/${username}`} 
        key={username} 
        style={{marginRight: '4px'}} 
        target="_blank">
        <Typography variant="body2" component="span" style={{color: 'blue'}}>
          {username}
        </Typography>
      </a>
    ));
    return (
      <div style={{display: 'flex', height: '24px', maxWidth: '500px'}}>
        <div style={{flexGrow: 1}}></div>
        <Typography variant="body2" component="span" style={{marginRight: '4px'}}>
          by
        </Typography>
        <div>
          {contributors}
        </div>
      </div>
    );
  }
}