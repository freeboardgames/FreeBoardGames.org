import React from 'react';
import AlertLayer from 'infra/common/components/alert/AlertLayer';
import { ClickAwayListener, Card, Typography, CardContent, Button } from '@material-ui/core';

interface Props {
  handleClickaway: () => void;
}
export class NewRoomModal extends React.Component<Props, {}> {
  render() {
    return (
      <AlertLayer>
        <ClickAwayListener onClickAway={this.props.handleClickaway}>
          <Card
            style={{
              marginTop: '16px',
              whiteSpace: 'nowrap',
              width: '250px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
            }}
          >
            <Typography style={{ paddingTop: '16px' }} variant="h5" component="h3">
              New Room
            </Typography>
            <Button variant="contained" color="primary" style={{ margin: '16px 0 16px 0' }}>
              TODO
            </Button>
          </Card>
        </ClickAwayListener>
      </AlertLayer>
    );
  }
}
