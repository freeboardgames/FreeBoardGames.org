import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { Card, CardText, CardMedia, CardTitle } from 'material-ui/Card';

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Typography variant="title" gutterBottom={true} align="center" style={{ marginTop: '16px' }}>
          Free as in freedom
        </Typography>
        <Typography variant="body1" gutterBottom={true} style={{ marginTop: '16px' }}>
          We at FreeBoardGame.org want to bring free games for everybody.
          Free as in "free beer" <i>and</i> as in "freedom".
          Not only do you get to enjoy free high quality games everywhere,
          but you also can study how they are made, change them, and contribute back to the community!
        </Typography>
      </div>
    );
  }
}

export default Header;
