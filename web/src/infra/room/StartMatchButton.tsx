import { JoinRoom_joinRoom } from 'gqlTypes/JoinRoom';
import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { WithTranslation, withTranslation } from 'infra/i18n';
import { compose } from 'recompose';

export interface IStartMatchButtonInnerProps extends WithTranslation {}

export interface IStartMatchButtonOutterProps {
  roomMetadata?: JoinRoom_joinRoom;
  userId: number;
  startMatch: () => void;
}

const enhance = compose<IStartMatchButtonInnerProps, IStartMatchButtonOutterProps>(withTranslation('StartMatchButton'));

export const StartMatchButton = enhance(
  class StartMatchButton extends React.Component<IStartMatchButtonInnerProps & IStartMatchButtonOutterProps, {}> {
    render() {
      const creator = this.props.roomMetadata.userMemberships.find((membership) => membership.isCreator);
      let disabled = false;
      let explanation;
      if (this.props.roomMetadata.capacity > this.props.roomMetadata.userMemberships.length) {
        disabled = true;
        explanation = this.props.t('not_enough_players');
      } else if (creator.user.id !== this.props.userId) {
        disabled = true;
        explanation = this.props.t('only_creator_can_start', { name: creator.user.nickname });
      }
      const button = (
        <Button
          variant="outlined"
          color="primary"
          disabled={disabled}
          onClick={this.props.startMatch}
          data-testid="startButton"
        >
          {this.props.t('start_match')}
        </Button>
      );
      if (disabled) {
        return (
          <Tooltip title={explanation}>
            <span>{button}</span>
          </Tooltip>
        );
      }
      return button;
    }
  },
);
