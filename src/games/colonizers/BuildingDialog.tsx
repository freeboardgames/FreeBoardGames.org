import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

interface IBuildingDialogProps {
  handleClose: () => void;
  open: boolean;
}

export default class BuildingDialog extends React.Component<IBuildingDialogProps, {}> {
  render() {
    return (
      <Dialog onClose={this.props.handleClose} aria-labelledby="simple-dialog-title" open={this.props.open}>
        <DialogTitle id="simple-dialog-title">Build</DialogTitle>
        <List>
          {[0, 1, 2, 3].map(value => (
            <ListItem key={value} role={undefined} dense>
              <ListItemText primary={`Line item ${value + 1}`} />
            </ListItem>
          ))}
        </List>
      </Dialog>
    );
  }
}
