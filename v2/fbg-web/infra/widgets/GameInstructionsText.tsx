import React from 'react';
import Card from '@mui/material/Card';
import ReactMarkdown from 'react-markdown';
import Typography from '@mui/material/Typography';

interface IGameInstructionsProps {
  text: string;
}

export class GameInstructionsText extends React.Component<IGameInstructionsProps, {}> {
  render() {
    return (
      <Card style={{ marginBottom: 16 }}>
        <div style={{ padding: '0 8px' }}>
          <Typography variant="body1" component="div">
            <ReactMarkdown linkTarget="_blank">{this.props.text}</ReactMarkdown>
          </Typography>
        </div>
      </Card>
    );
  }
}