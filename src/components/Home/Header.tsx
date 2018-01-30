import * as React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
const introjpg = require('./intro.jpg'); // tslint:disable-line

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
