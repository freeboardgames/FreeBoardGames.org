import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { buildingRecipes } from './buildingRecipes';

interface IBuildingDialogProps {
  handleClose: () => void;
  handleClick: (index: number) => void;
  open: boolean;
}

export default class BuildingDialog extends React.Component<IBuildingDialogProps, {}> {
  render() {
    return (
      <Dialog onClose={this.props.handleClose} aria-labelledby="simple-dialog-title" open={this.props.open}>
        <DialogTitle id="simple-dialog-title">Build</DialogTitle>
        <List>
          {buildingRecipes.map((recipe, i) => (
            <ListItem key={i} role={undefined} onClick={() => this.props.handleClick(i)} button>
              <ListItemText primary={recipe.name} />
            </ListItem>
          ))}
        </List>
      </Dialog>
    );
  }
}
