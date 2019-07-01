import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

interface IEndGameDialogProps {
  open: boolean;
  handleClose: () => void;
  accept: () => void;
}

export default class EndGameDialog extends React.Component<IEndGameDialogProps, {}> {
  render() {
    return (
      <Dialog open={this.props.open} onClose={this.props.handleClose} aria-labelledby="alert-dialog-title">
        <DialogTitle id="alert-dialog-title">Do you really want to end the game?</DialogTitle>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            No
          </Button>
          <Button onClick={this.props.accept} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
