import * as React from 'react';
import { Card, CardText, CardMedia, CardTitle } from 'material-ui/Card';

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <Card style={{ marginTop: '16px' }}>
        <CardTitle title="Free as in freedom" />
        <CardText>
          Play when you can, wherever you are.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </CardText>
      </Card>
    );
  }
}

export default Header;
