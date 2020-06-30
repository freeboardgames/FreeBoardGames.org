import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { IPlayerInRoom } from 'gamesShared/definitions/player';

import css from './Scoreboard.css';

export interface IScore {
  playerID: string;
  score: number;
  bid?: number;
  money?: number;
  passed?: boolean;
}

export interface IScoreboardProps {
  scoreboard: IScore[];
  players: IPlayerInRoom[];
  playerID: string;
  scoreName?: string;
}

export class Scoreboard extends React.Component<IScoreboardProps, {}> {
  render() {
    return (
      <div className={css.scoreboard}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Player</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.scoreboard.map((score, i) => {
              const style = (score.playerID.toString() === this.props.playerID) ? css.me : null;
              const name = this.props.players.find((player) => player.playerID.toString() === score.playerID).name;
              return (
                <TableRow key={score.playerID} className={[style, css["row"+i]].join(' ')}>
                  <TableCell className={css.rank}>#{i + 1}</TableCell>
                  <TableCell className={css.name}>{name}</TableCell>
                  <TableCell className={css.score}>${score.score}k</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}
