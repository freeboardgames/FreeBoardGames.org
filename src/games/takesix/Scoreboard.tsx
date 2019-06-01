import * as React from 'react';
import { IScore } from './game';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';

interface IScoreboardProps {
  scoreboard: IScore[];
}

export class Scoreboard extends React.Component<IScoreboardProps, {}> {
  render() {
    return (
      <div className="scoreboard">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Player</TableCell>
              <TableCell>Penalty points</TableCell>
            </TableRow>
          </TableHead>
          {this.props.scoreboard.map((score, i) => (
            <TableRow key={score.playerID}>
              <TableCell>#{i + 1}</TableCell>
              <TableCell>{score.playerID}</TableCell>
              <TableCell>{score.penaltyPoints}</TableCell>
            </TableRow>
          ))}
        </Table>
      </div>
    );
  }
}
