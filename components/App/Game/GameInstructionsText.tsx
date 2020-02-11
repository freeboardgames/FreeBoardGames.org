import React from 'react';
import Card from '@material-ui/core/Card';
import ReactMarkdown from 'react-markdown';
import Typography from '@material-ui/core/Typography';
import { IGameDef } from 'games';

interface IGameInstructionsProps {
  gameDef: IGameDef;
}

export class GameInstructionsText extends React.Component<IGameInstructionsProps, {}> {
  render() {
    const instructions = this.props.gameDef.instructions;
    if (!instructions) {
      return null;
    }
    return (
      <Card style={{ marginBottom: 16 }}>
        <div style={{ padding: '0 8px' }}>
          <Typography variant="body2" component="div">
            <ReactMarkdown linkTarget="_blank" source={instructions.text} />
          </Typography>
        </div>
      </Card>
    );
  }
}
