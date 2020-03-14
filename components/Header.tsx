import React from 'react';
import Button from '@material-ui/core/Button';
// import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import InfoIcon from '@material-ui/icons/Info';
// import CodeIcon from '@material-ui/icons/Code';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

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
          Play Satsang related games for free and enjoy Satsang in a new way ! Use these games in your Satsang-Mandal or play them with your friends/family. If you have any feedback or would like to help us make games, you can always contact us via email.           
        </Typography>
      </div>
    );
  }
}

class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <div style={{ padding: '8px 8px 15px 8px' }}>
        {this._links()}
      </div>
    );
  }
  _links() {
    return (
      <div style={{ textAlign: 'center', marginTop: '4px' }}>
        {/* <Button
          href="https://github.com/freeboardgames/FreeBoardGames.org"
          target="_blank"
          variant="outlined"
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
          <QuestionAnswerIcon style={{ marginRight: '4px' }} />
          Chat
        </Button> */}
      </div>
    );
  }
}

export { Header, Footer };
