import * as React from 'react';
import { Card, CardText, CardMedia, CardTitle } from 'material-ui/Card';

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <Card style={{ marginTop: '16px' }}>
        <CardTitle title="Free as in freedom" />
        <CardText>
          Play when you can, wherever you are.
          Turnato is a free (as in freedom), mobile-first, board game platform.
          Its goal is to popularize board games and to make them easy to play with friends, even from afar.
        </CardText>
      </Card>
    );
  }
}

export default Header;
