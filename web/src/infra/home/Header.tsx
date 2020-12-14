import React from 'react';
import Button from '@material-ui/core/Button';
// import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import InfoIcon from '@material-ui/icons/Info';
// import CodeIcon from '@material-ui/icons/Code';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { Link as MuiLink } from '@material-ui/core';

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div style={{ padding: '0 8px' }}>
        <Typography component="h1" variant="h6" gutterBottom={true} align="center" style={{ marginTop: '16px' }}>
          || Jai Shree Swaminarayan ||
        </Typography>
        <Typography
          component="h2"
          variant="body2"
          gutterBottom={true}
          style={{ marginTop: '16px', marginBottom: '16px' }}
        >
          Play satsang-related games for free and enjoy satsang in a new way ! Use these games in your Satsang-Mandal or
          play them with your friends/family. If you have any feedback or would like to help us make games, you can
          contact us via {''}
          <MuiLink href="mailto:sahajanand.games@gmail.com" target="_blank">
            email
          </MuiLink>
          {''} or chat with us on {''}
          <MuiLink href="https://discord.gg/yZYEaVR" target="_blank">
            Discord
          </MuiLink>
          .
        </Typography>
      </div>
    );
  }
}

class Footer extends React.Component<{}, {}> {
  render() {
    return <div style={{ padding: '8px 8px 15px 8px' }}>{this._links()}</div>;
  }
  _links() {
    return (
      <div style={{ textAlign: 'center', marginTop: '4px' }}>
        {/* <Button
          href="https://github.com/freeboardgames/FreeBoardGames.org"
          target="_blank"
          variant="outlined"
          rel="noopener"
          style={{ margin: '8px' }}
        >
          <CodeIcon style={{ marginRight: '4px' }} />
          Code
        </Button> */}
        <Link href="/about">
          <a style={{ textDecoration: 'none' }}>
            <Button variant="outlined" style={{ margin: '4px' }}>
              <InfoIcon style={{ marginRight: '4px' }} />
              About
            </Button>
          </a>
        </Link>
        {/* <Button href="https://discord.gg/AaE6n3n" target="_blank" variant="outlined" style={{ margin: '4px' }}>
        </Button>
        <Button href="/docs/" target="_blank" variant="outlined" style={{ margin: '4px' }}>
          <SubjectIcon style={{ marginRight: '4px' }} />
          Docs
        </Button>
        <Button
          href="https://discord.gg/AaE6n3n"
          target="_blank"
          variant="outlined"
          rel="noopener"
          style={{ margin: '4px' }}
        >
          <QuestionAnswerIcon style={{ marginRight: '4px' }} />
          Chat
        </Button> */}
      </div>
    );
  }
}

export { Header, Footer };
