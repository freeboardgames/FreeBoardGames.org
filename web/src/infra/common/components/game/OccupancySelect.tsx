import React, { ChangeEvent } from 'react';
import { IGameDef } from 'gamesShared/definitions/game';
import PersonIcon from '@material-ui/icons/Person';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export interface OccupancySelectProps {
  game: IGameDef;
  value: number;
  onChange: (e: ChangeEvent<{ value: number }>) => void;
  className?: string;
  selectClassName?: string;
}

export class OccupancySelect extends React.Component<OccupancySelectProps, {}> {
  render() {
    const options = [];
    for (let i = this.props.game.minPlayers; i <= this.props.game.maxPlayers; i++) {
      options.push(
        <MenuItem value={i} key={i}>
          {i} Players
        </MenuItem>,
      );
    }
    return (
      <div className={this.props.className}>
        <PersonIcon style={{ position: 'relative', top: '8px', padding: '0 8px' }} />
        <Select value={this.props.value} onChange={this.props.onChange} className={this.props.selectClassName}>
          {options}
        </Select>
      </div>
    );
  }
}
