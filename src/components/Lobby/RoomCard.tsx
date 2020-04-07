import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';

import { IGameDef } from 'games';

const theme = createMuiTheme({
  palette: {
    secondary: lightBlue,
  },
});

interface Props {
  game: IGameDef;
  players: string[];
  capacity: number;
}

interface State {}

export default class RoomCard extends React.Component<Props, State> {
  state: State = {};

  render() {
    const image = this.props.game.imageURL;
    const mainDivStyle: React.CSSProperties = {
      position: 'relative',
      height: '188px', // 250px
      width: '375px', // 500px
      backgroundPosition: 'left center',
      backgroundColor: image[0],
      backgroundImage: `url(${image.src})`,
      backgroundSize: 'cover',
    };
    const baseBadgeStyle: React.CSSProperties = {
      position: 'absolute',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      padding: '0px 8px',
      borderRadius: '8px',
      backgroundColor: 'white',
      color: 'black',
      textDecoration: 'none',
    };
    const gameNameHeading = (
      <Typography gutterBottom={false} variant="h4" component="h1" style={{ fontWeight: 300 }}>
        {this.props.game.name}
      </Typography>
    );
    const numPlayersAndCapacity = (
      <Typography gutterBottom={false} variant="h4" component="h1" style={{ fontWeight: 300 }}>
        {this.props.players.length}/{this.props.capacity}
      </Typography>
    );
    // TODO handle name overflow (foo, bar, baz, <b>+3 more...</b>)
    const playerNames = this.props.players.join(', ');
    return (
      <MuiThemeProvider theme={theme}>
        <Card>
          <div style={mainDivStyle} data-test-id={`gamecard-`}>
            <div
              style={{
                ...baseBadgeStyle,
                top: '12px',
                left: '8px',
                paddingTop: '4px',
                maxWidth: '500px',
              }}
            >
              {gameNameHeading}
            </div>
            <div
              style={{
                ...baseBadgeStyle,
                top: '12px',
                left: '300px',
                paddingTop: '4px',
                maxWidth: '500px',
              }}
            >
              {numPlayersAndCapacity}
            </div>
            <div
              style={{
                ...baseBadgeStyle,
                bottom: '20px',
                left: '8px',
              }}
            >
              <Typography gutterBottom={false} variant="overline" component="h5">
                {playerNames}
              </Typography>
            </div>
            <Button
              variant="contained"
              color={'primary'}
              style={{ position: 'absolute', bottom: '10px', left: '300px' }}
              // TODO: onClick
            >
              Join
            </Button>
          </div>
        </Card>
      </MuiThemeProvider>
    );
  }
}
