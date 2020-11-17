import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';

import css from '../Board.css';

export interface MergersDialogProps {
  dialogId: string;
  title: string;
  closeButtonText: string;
  onClose: () => void;
  children: React.ReactNode;
}

export class MergersDialog extends React.Component<MergersDialogProps> {
  constructor(props: MergersDialogProps) {
    super(props);
  }

  createId(suffix: string): string {
    return `${this.props.dialogId}-${suffix}`;
  }

  render() {
    return (
      <Dialog
        id={this.props.dialogId}
        className={css.Mergers}
        onClose={this.props.onClose}
        aria-labelledby={this.createId('title')}
        open
      >
        <DialogTitle disableTypography id={this.createId('title')}>
          <Typography variant="h4">{this.props.title}</Typography>
        </DialogTitle>
        <DialogContent>{this.props.children}</DialogContent>
        <DialogActions>
          <Button id={this.createId('close')} onClick={this.props.onClose} variant="contained" autoFocus>
            {this.props.closeButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
