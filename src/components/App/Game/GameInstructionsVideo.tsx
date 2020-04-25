import React from 'react';
import Card from '@material-ui/core/Card';
import { IGameDef } from 'games';

interface IGameInstructionsProps {
  gameDef: IGameDef;
}

export class GameInstructionsVideo extends React.Component<IGameInstructionsProps, {}> {
  render() {
    const instructions = this.props.gameDef.instructions;
    if (!instructions || !instructions.videoId) {
      return null;
    }
    return (
      <Card style={{ marginBottom: 16, maxWidth: '1200px' }}>
        <div
          style={{
            position: 'relative',
            maxWidth: '1200px',
            maxHeight: '360px',
            paddingBottom: '56.25%',
            paddingTop: 30,
            height: 0,
            overflow: 'hidden',
          }}
        >
          <iframe
            data-testid={'gameinstructionsvideo'}
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
            width="500"
            height="360"
            src={`https://www.youtube.com/embed/${instructions.videoId}`}
            allowFullScreen
            frameBorder="0"
          />
        </div>
      </Card>
    );
  }
}
