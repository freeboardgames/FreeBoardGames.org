import React from 'react';
import { IGameDef } from 'gamesShared/definitions/game';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

interface IGameCardProps {
  game: IGameDef;
  isLink?: boolean;
}

interface Row {
  roomName: string; // fooRoom
  fullness: string; // 1/2
  roomID: string;
  onJoin: (roomID: string) => () => void;
}

const WhiteTextTypography = withStyles({
  root: {
    color: '#FFFFFF',
  },
})(Typography);

export class GameCardWithOverlay extends React.Component<IGameCardProps, {}> {
  render() {
    let navigateButton = null;
    const image = this.props.game.imageURL;
    const mainDivStyle: React.CSSProperties = {
      position: 'relative',
      height: '250px',
      width: '100%',
      backgroundPosition: 'left center',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      borderRadius: '8px',
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
    const rooms: Row[] = [
      {
        roomName: 'Monkey',
        fullness: '1/2',
        roomID: 'foo1',
        onJoin: (roomID: string) => () => console.log('join', roomID),
      },
      {
        roomName: 'Ferret',
        fullness: '2/3',
        roomID: 'foo2',
        onJoin: (roomID: string) => () => console.log('join', roomID),
      },
      {
        roomName: 'Elephant',
        fullness: '2/3',
        roomID: 'foo3',
        onJoin: (roomID: string) => () => console.log('join', roomID),
      },
    ];
    return (
      <div style={mainDivStyle} data-testid={`gamecard-${this.props.game.code}`}>
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
            // ...baseBadgeStyle,
            position: 'absolute',
            // height: '250px',
            backgroundColor: 'black',
            width: '100%',
            opacity: '75%',
            height: '40%',
            bottom: '0px',
          }}
        ></div>
        <div
          style={{
            // ...baseBadgeStyle,
            position: 'absolute',
            // height: '250px',
            width: '100%',
            height: '40%',
            bottom: '0px',
            left: '8px',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>{this._getRows(rooms)}</div>
        </div>
        {navigateButton}
      </div>
    );
  }
  _getRows = (rows: Row[]) => {
    const rowsComp = rows.map((row, index) => (
      <React.Fragment key={index}>
        <WhiteTextTypography gutterBottom={false} variant="h6" style={{ flex: '40' }}>
          {row.roomName}
        </WhiteTextTypography>
        <WhiteTextTypography gutterBottom={false} variant="h6" style={{ flex: '30' }}>
          {row.fullness}
        </WhiteTextTypography>
        <WhiteTextTypography gutterBottom={false} variant="h6" style={{ flex: '20' }} onClick={row.onJoin(row.roomID)}>
          <a>
            <b>Join</b>
          </a>
        </WhiteTextTypography>
        <div style={{ flexBasis: '100%', height: '0' }}></div> {/*line break*/}
      </React.Fragment>
    ));
    return rowsComp;
  };
}
