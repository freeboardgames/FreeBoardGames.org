import grey from '@material-ui/core/colors/grey';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { IPlayerInRoom } from 'gamesShared/definitions/player';
import { useTranslation } from 'infra/i18n';
import React from 'react';

export interface IScore {
  playerID: string;
  score: number;
}

interface IScoreboardProps {
  scoreboard: IScore[];
  players: IPlayerInRoom[];
  playerID: string;
  scoreName?: string;
}

export function Scoreboard(props: IScoreboardProps) {
  const { t } = useTranslation('Scoreboard');

  return (
    <div className="scoreboard">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t('rank')}</TableCell>
            <TableCell>{t('player')}</TableCell>
            <TableCell>{props.scoreName || t('score')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.scoreboard.map((score, i) => {
            let style = {};
            if (score.playerID.toString() === props.playerID) {
              style = {
                background: grey[200],
              };
            }
            const name = props.players.find((player) => player.playerID.toString() === score.playerID).name;
            return (
              <TableRow key={score.playerID} style={style}>
                <TableCell>#{i + 1}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{score.score}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
