import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { IGameDef } from '../../games';

interface IGameRulesProps {
  gameDef: IGameDef;
}

export class GameRules extends React.Component<IGameRulesProps, {}> {
  render() {
    const src = 'https://www.youtube.com/embed/' + this.props.gameDef.videoId;

    return (
      <Card style={{ marginBottom: 16 }}>
        <CardHeader title="Rules" />
        <div style={{ position: 'relative', paddingBottom: '56.25%', paddingTop: 30, height: 0, overflow: 'hidden' }}>
          <iframe
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
            width="500"
            height="360"
            src={src}
            allowFullScreen
            frameBorder="0"
          />
        </div>
      </Card>
    );
  }
}
