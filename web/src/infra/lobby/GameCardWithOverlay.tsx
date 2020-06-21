import React from 'react';
import { IGameDef } from 'gamesShared/definitions/game';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import css from './GameCardWithOverlay.css';

interface Props {
  game: IGameDef;
  isLink?: boolean;
}

interface Row {
  roomName: string; // fooRoom
  fullness: string; // 1/2
  roomID: string;
}

const WhiteTextTypography = withStyles({
  root: {
    color: '#FFFFFF',
  },
})(Typography);

export class GameCardWithOverlay extends React.Component<Props, {}> {
  render() {
    const rooms: Row[] = [
      {
        roomName: 'Monkey',
        fullness: '1/2',
        roomID: 'foo1',
      },
      {
        roomName: 'Ferret',
        fullness: '2/3',
        roomID: 'foo2',
      },
      {
        roomName: 'Elephant',
        fullness: '2/3',
        roomID: 'foo3',
      },
      {
        roomName: 'Horse',
        fullness: '1/2',
        roomID: 'foo4',
      },
      {
        roomName: 'Dog',
        fullness: '2/3',
        roomID: 'foo5',
      },
      {
        roomName: 'Cat',
        fullness: '2/3',
        roomID: 'foo6',
      },
    ];
    return (
      <div
        className={css.wrapper}
        style={{
          backgroundImage: `url(${this.props.game.imageURL})`,
        }}
        data-testid={`gamecard-${this.props.game.code}`}
      >
        <div className={css.heading}>
          <Typography gutterBottom={false} variant="h4" component="h2" style={{ fontWeight: 300 }}>
            {this.props.game.name}
          </Typography>
        </div>
        <div className={css.overlay}></div>
        <div className={css.tableWrapper}>
          <table className={css.table}>{this._getRows(rooms)}</table>
        </div>
      </div>
    );
  }

  _getRows = (rows: Row[]) => {
    const rowsComp = rows.map((row, index) => (
      <tr className={css.row} key={index}>
        <td>
          <WhiteTextTypography gutterBottom={false} variant="h6">
            {row.roomName}
          </WhiteTextTypography>
        </td>
        <td>
          <WhiteTextTypography gutterBottom={false} variant="h6">
            {row.fullness}
          </WhiteTextTypography>
        </td>
        <td>
          <WhiteTextTypography
            gutterBottom={false}
            variant="h6"
            style={{ flex: '20', cursor: 'pointer' }}
            onClick={() => console.log(row.roomID)}
          >
            <b>Join</b>
          </WhiteTextTypography>
        </td>
      </tr>
    ));
    return rowsComp;
  };
}
