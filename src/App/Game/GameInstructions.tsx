import React from 'react';
import Card from '@material-ui/core/Card';
import ReactMarkdown from 'react-markdown';
import Typography from '@material-ui/core/Typography';
import { IGameDef } from '../../games';

interface IGameInstructionsProps {
  gameDef: IGameDef;
}

export class GameInstructions extends React.Component<IGameInstructionsProps, {}> {
  render() {
    const instructions = this.props.gameDef.instructions;
    let text = null;
    if (instructions.text) {
      text = <ReactMarkdown linkTarget="_blank" source={instructions.text} />;
    }

    return (
      <Card style={{ marginBottom: 16 }}>
        <div style={{ position: 'relative', paddingBottom: '56.25%', paddingTop: 30, height: 0, overflow: 'hidden' }}>
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
        <div style={{ padding: '0 8px' }}>
          <Typography variant="body2" component="div">
            {text}
          </Typography>
        </div>
      </Card>
    );
  }
}
