import * as React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
let introjpg:any = null;
if (typeof window !== 'undefined') {
  introjpg = require('./intro.jpg');
}

class Header extends React.Component<{}, {}> {
  render() {
    return (
      <Card>
        <CardMedia
          overlay={
            <CardTitle
              title="Play when you can, wherever you are."
              subtitle="Free, open-source board games on your phone."
            />}
        >
          <img src={introjpg} alt="People playing board game." />
        </CardMedia>
      </Card>
    );
  }
}

export default Header;
