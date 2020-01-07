import React from 'react';
import Button from '@material-ui/core/Button';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div style={{ padding: '0 8px' }}>
        <Typography variant="h6" gutterBottom={true} align="center" style={{ marginTop: '16px' }}>
          Free as in freedom
        </Typography>
        <Typography variant="body2" gutterBottom={true} style={{ marginTop: '16px' }}>
          We at FreeBoardGames.org want to bring free games for everybody. Free as in &quot;free beer&quot; <i>and</i>
          as in &quot;freedom&quot;. Not only do you get to enjoy free high quality games everywhere, but you also can
          study how they are made, change them, and contribute back to the community!
        </Typography>
        {this._links()}
      </div>
    );
  }
  _links() {
    return (
      <div style={{ textAlign: 'center', marginTop: '4px' }}>
        <Button
          href="https://github.com/freeboardgames/FreeBoardGames.org"
          target="_blank"
          variant="outlined"
          style={{ margin: '8px' }}
        >
          <CodeIcon style={{ marginRight: '4px' }} />
          Code
        </Button>
        <Link href="/about">
          <a style={{ textDecoration: 'none' }}>
            <Button variant="outlined" style={{ margin: '4px' }}>
              <InfoIcon style={{ marginRight: '4px' }} />
              About
            </Button>
          </a>
        </Link>
        <Button href="https://discord.gg/AaE6n3n" target="_blank" variant="outlined" style={{ margin: '4px' }}>
          <QuestionAnswerIcon style={{ marginRight: '4px' }} />
          Chat
        </Button>
      </div>
    );
  }
}

export default Header;
