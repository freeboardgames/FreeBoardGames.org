import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

import css from '../Board.module.css';

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

  PaperComponent(props: PaperProps) {
    return (
      <Draggable handle={`#${this.createId('title')}`} cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
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
        PaperComponent={this.PaperComponent.bind(this)}
        aria-labelledby={this.createId('title')}
        open
      >
        <DialogTitle disableTypography style={{ cursor: 'move' }} id={this.createId('title')}>
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
