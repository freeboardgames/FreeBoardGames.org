import { JoinRoom_joinRoom } from 'gqlTypes/JoinRoom';
import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

export interface IStartMatchButtonProps {
  roomMetadata?: JoinRoom_joinRoom;
  userId: number;
  startMatch: () => void;
}

export class StartMatchButton extends React.Component<IStartMatchButtonProps, {}> {
  render() {
    const creator = this.props.roomMetadata.userMemberships.find((membership) => membership.isCreator);
    let disabled = false;
    let explanation;
    if (this.props.roomMetadata.capacity > this.props.roomMetadata.userMemberships.length) {
      disabled = true;
      explanation = 'Not enough players.';
    } else if (creator.user.id !== this.props.userId) {
      disabled = true;
      explanation = `Only ${creator.user.nickname} can start.`;
    }
    const button = (
      <Button
        variant="outlined"
        color="primary"
        disabled={disabled}
        onClick={this.props.startMatch}
        data-testid="startButton"
      >
        Start match
      </Button>
    );
    if (disabled) {
      return <Tooltip title={explanation}>{button}</Tooltip>;
    }
    return button;
  }
}
