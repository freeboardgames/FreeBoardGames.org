import { JoinRoomMutation } from 'gqlTypes/generated';
import React from 'react';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import { WithTranslation, withTranslation } from 'infra/i18n';
import { compose } from 'recompose';
import { getCreator, isCreator } from './RoomMetadataHelper';

export interface IStartMatchButtonOutterProps {
  roomMetadata?: JoinRoomMutation['joinRoom'];
  userId?: number;
  startMatch: (shuffleUsers: boolean) => () => void;
}

const enhance = compose<WithTranslation, IStartMatchButtonOutterProps>(withTranslation('StartMatchButton'));

export const StartMatchButton = enhance(
  class StartMatchButton extends React.Component<
    WithTranslation & IStartMatchButtonOutterProps,
    Record<string, never>
  > {
    render() {
      const { roomMetadata, userId, t } = this.props;
      const creator = getCreator(roomMetadata);
      let disabled = false;
      let explanation: string | undefined;

      if (roomMetadata.capacity > roomMetadata.userMemberships.length) {
        disabled = true;
        explanation = t('not_enough_players');
      } else if (!isCreator(roomMetadata, userId)) {
        // Only the room creator can start the match
        disabled = true;
        explanation = t('only_creator_can_start', { name: creator.user.nickname });
      }

      // Always use contained variant for consistent sizing
      // Disabled state will naturally show as muted
      return (
        <ButtonGroup variant="contained" disableElevation>
          <Tooltip title={disabled ? explanation : ''} placement="top">
            <span style={{ display: 'inline-flex' }}>
              <Button
                color="primary"
                disabled={disabled}
                onClick={disabled ? undefined : this.props.startMatch(false)}
                data-testid="startButton"
              >
                {t('start_match')}
              </Button>
            </span>
          </Tooltip>
          <Tooltip title={disabled ? explanation : t('start_match_shuffle')} placement="top">
            <span style={{ display: 'inline-flex' }}>
              <Button
                color="primary"
                disabled={disabled}
                onClick={disabled ? undefined : this.props.startMatch(true)}
                data-testid="startButtonWithShuffle"
              >
                <ShuffleIcon />
              </Button>
            </span>
          </Tooltip>
        </ButtonGroup>
      );
    }
  },
);
