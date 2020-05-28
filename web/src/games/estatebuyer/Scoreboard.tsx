import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import grey from '@material-ui/core/colors/grey';
import { IPlayerInRoom } from 'components/App/Lobby/LobbyService';

export interface IScore {
  playerID: string;
  score: number;
  bid: number;
  money: number;
  passed: boolean;
}

interface IScoreboardProps {
  scoreboard: IScore[];
  players: IPlayerInRoom[];
  playerID: string;
  scoreName?: string;
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
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.scoreboard.map((score, i) => {
              let style = {};
              if (score.playerID.toString() === this.props.playerID) {
                style = {
                  background: grey[200],
                };
              }
              const name = this.props.players.find((player) => player.playerID.toString() === score.playerID).name;
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
}
