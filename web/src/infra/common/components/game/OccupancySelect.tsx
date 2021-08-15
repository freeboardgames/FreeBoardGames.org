import React, { ChangeEvent } from 'react';
import { IGameDef } from 'gamesShared/definitions/game';
import PersonIcon from '@material-ui/icons/Person';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withTranslation, WithTranslation } from 'infra/i18n';
import { compose } from 'recompose';

interface OccupancySelectInnerProps extends WithTranslation {}

interface OccupancySelectOutterProps {
  game: IGameDef;
  value: number;
  onChange: (e: ChangeEvent<{ value: number }>) => void;
  className?: string;
  selectClassName?: string;
}

const enhance = compose<OccupancySelectInnerProps, OccupancySelectOutterProps>(withTranslation('OccupancySelect'));

export const OccupancySelect = enhance(
  class OccupancySelect extends React.Component<OccupancySelectInnerProps & OccupancySelectOutterProps, {}> {
    render() {
      const options = [];
      for (let i = this.props.game.minPlayers; i <= this.props.game.maxPlayers; i++) {
        options.push(
          <MenuItem value={i} key={i}>
            {this.props.t('players', { quantity: i })}
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
  },
);
