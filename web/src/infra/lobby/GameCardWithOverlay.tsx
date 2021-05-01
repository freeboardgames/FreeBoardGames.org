import React from 'react';
import { IGameDef } from 'gamesShared/definitions/game';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import css from './GameCardWithOverlay.module.css';
import { Router } from 'infra/i18n';

interface GameCardWithOverlayProps {
  game: IGameDef;
  rooms: RoomDisplay[];
}

export interface RoomDisplay {
  id: string;
  name: string;
  occupancy: number;
  capacity: number;
  gameCode: string;
}

const WhiteTextTypography = withStyles({
  root: {
    color: '#FFFFFF',
  },
})(Typography);

export class GameCardWithOverlay extends React.Component<GameCardWithOverlayProps, {}> {
  render() {
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
          <table className={css.table}>
            <tbody>{this._getRows(this.props.rooms)}</tbody>
          </table>
        </div>
      </div>
    );
  }

  _getRows(rooms: RoomDisplay[]) {
    const rowsComp = rooms.map((room, index) => (
      <tr key={index}>
        <td>
          <WhiteTextTypography gutterBottom={false} variant="h6">
            {room.name}
          </WhiteTextTypography>
        </td>
        <td>
          <WhiteTextTypography gutterBottom={false} variant="h6">
            {room.occupancy}/{room.capacity}
          </WhiteTextTypography>
        </td>
        <td>
          <WhiteTextTypography
            gutterBottom={false}
            variant="h6"
            style={{ flex: '20', cursor: 'pointer' }}
            onClick={() => {
              Router.push(`/room/${room.id}`);
            }}
          >
            <b>Join</b>
          </WhiteTextTypography>
        </td>
      </tr>
    ));
    return rowsComp;
  }
}
