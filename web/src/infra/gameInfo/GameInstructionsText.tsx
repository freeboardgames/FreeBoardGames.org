import React from 'react';
import Card from '@material-ui/core/Card';
import ReactMarkdown from 'react-markdown';
import Typography from '@material-ui/core/Typography';

interface IGameInstructionsProps {
  text: string;
}

export class GameInstructionsText extends React.Component<IGameInstructionsProps, {}> {
  render() {
    return (
      <Card style={{ marginBottom: 16 }}>
        <div style={{ padding: '0 8px' }}>
          <Typography variant="body1" component="div">
            <ReactMarkdown linkTarget="_blank" source={this.props.text} />
          </Typography>
        </div>
      </Card>
    );
  }
}
