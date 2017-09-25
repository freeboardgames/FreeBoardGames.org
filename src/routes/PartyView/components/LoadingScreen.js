import React from 'react';
import TurnatoBar from '../../../TurnatoBar/TurnatoBar';
import {Card, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';

class LoadingScreen extends React.Component {
  render () {
    return (
      <TurnatoBar disconnected={false}>
        <Card>
          <CardText style={{textAlign: 'center'}}>
            <CircularProgress size={80} thickness={5} />
          </CardText>
        </Card>
      </TurnatoBar>
    );
  }
}

LoadingScreen.propTypes = {
};

export default LoadingScreen;
