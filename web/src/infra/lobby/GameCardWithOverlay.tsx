import Typography from '@mui/material/Typography';
import { IGameDef } from 'gamesShared/definitions/game';
import { Link, useTranslation } from 'infra/i18n';
import { room as navigate } from 'infra/navigation';
import React from 'react';
import css from './GameCardWithOverlay.module.css';

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

export const GameCardWithOverlay = function GameCardWithOverlay({ game, rooms }: GameCardWithOverlayProps) {
  return (
    <div
      className={css.wrapper}
      style={{ backgroundImage: game?.imageURL ? `url(${game.imageURL})` : 'none' }}
      data-testid={`gamecard-${game?.code}`}
    >
      <div className={css.heading}>
        <Typography gutterBottom={false} variant="h4" component="h2" style={{ fontWeight: 300 }}>
          {game.name}
        </Typography>
      </div>
      <div className={css.overlay}></div>
      <div className={css.tableWrapper}>
        <table className={css.table}>
          <tbody>
            <Rooms rooms={rooms} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

function Rooms({ rooms }: { rooms: RoomDisplay[] }) {
  const { t } = useTranslation('GameCardWithOverlay');
  return (
    <>
      {rooms.map((room, index) => (
        <tr key={index}>
          <td>
            <Typography gutterBottom={false} variant="h6" sx={{ color: '#FFFFFF' }}>
              {room.name}
            </Typography>
          </td>

          <td>
            <Typography gutterBottom={false} variant="h6" sx={{ color: '#FFFFFF' }}>
              {room.occupancy}/{room.capacity}
            </Typography>
          </td>

          <td>
            <Link href={navigate(room.id)}>
              <Typography gutterBottom={false} variant="h6" sx={{ color: '#FFFFFF', flex: '20', cursor: 'pointer' }}>
                <b>{t('join')}</b>
              </Typography>
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
}
