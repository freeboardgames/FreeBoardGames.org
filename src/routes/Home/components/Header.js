import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import introwebp from '../../../resources/intro.webp';

class Header extends React.Component {
  render () {
    return (
            <Card>
              <CardMedia
                overlay={<CardTitle title="Play when you can, where you are."
                subtitle="Free, open-source board games on your phone." />}
              >
              <img src={introwebp} alt="People playing board game." />
            </CardMedia>
            </Card>
    );
  }
}

Header.propTypes = {
};

export default Header;
