import { JoinRoomMutation } from 'gqlTypes/generated';
import React from 'react';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import { WithTranslation, withTranslation } from 'infra/i18n';
import { compose } from 'recompose';

export interface IStartMatchButtonInnerProps extends WithTranslation {}

export interface IStartMatchButtonOutterProps {
  roomMetadata?: JoinRoomMutation['joinRoom'];
  userId: number;
  startMatch: (boolean) => () => void;
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
      let button = (
        <Button
          variant="outlined"
          color="primary"
          disabled={disabled}
          onClick={this.props.startMatch(false)}
          data-testid="startButton"
        >
          {this.props.t('start_match')}
        </Button>
      );
      if (disabled) {
        button = <Tooltip title={explanation}>{button}</Tooltip>;
      }
      return (
        <ButtonGroup>
          {button}
          <Tooltip title={this.props.t('start_match_shuffle')}>
            <Button
              color="primary"
              disabled={disabled}
              onClick={this.props.startMatch(true)}
              data-testid="startButtonWithShuffle"
            >
              <ShuffleIcon />
            </Button>
          </Tooltip>
        </ButtonGroup>
      );
    }
  },
);
