import React from 'react';
import Card from '@material-ui/core/Card';

interface IGameInstructionsProps {
  videoId: string;
}

export class GameInstructionsVideo extends React.Component<IGameInstructionsProps, {}> {
  render() {
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
            src={`https://www.youtube.com/embed/${this.props.videoId}`}
            allowFullScreen
            frameBorder="0"
          />
        </div>
      </Card>
    );
  }
}
