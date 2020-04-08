import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import { Room } from 'dto/Room';

import { GAMES_MAP } from 'games';

const theme = createMuiTheme({
  palette: {
    secondary: lightBlue,
  },
});

interface Props {
  // game: IGameDef;
  room: Room;
  // players: string[];
  // capacity: number;
}

interface State {}

const MAX_NUM_OF_NAMES = 2;

export default class RoomCard extends React.Component<Props, State> {
  state: State = {};

  render() {
    const room = this.props.room;
    const game = GAMES_MAP[room.gameCode];
    const image = game.imageURL;
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
      <Typography gutterBottom={false} variant="h4" component="h1" style={{ fontWeight: 300 }} data-testid={'gamename'}>
        {game.name}
      </Typography>
    );
    const numPlayersAndCapacity = (
      <Typography gutterBottom={false} variant="h4" component="h1" style={{ fontWeight: 300 }} data-testid={'capacity'}>
        {room.players.length}/{room.capacity}
      </Typography>
    );
    const [playerNames, extraPlayerNames] = this._getNames();
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
              <Typography gutterBottom={false} variant="overline" component="h5" data-testid={'names'}>
                {playerNames}
                <b>{extraPlayerNames}</b>
              </Typography>
            </div>
            <Button
              variant="contained"
              color={'primary'}
              style={{ position: 'relative', top: '143px', left: '300px' }}
              data-testid={'joinbutton'}
              // TODO: onClick
            >
              Join
            </Button>
          </div>
        </Card>
      </MuiThemeProvider>
    );
  }

  /** Create a human-readable list of player names in a lobby. */
  _getNames = () => {
    const players = this.props.room.players;
    if (players.length < MAX_NUM_OF_NAMES) {
      return [players.join(', '), ''];
    }
    // [playerNames, excessNames]
    return [`${players[0]}, ${players[1]}`, `, + ${players.length - 2} more`];
  };
}
