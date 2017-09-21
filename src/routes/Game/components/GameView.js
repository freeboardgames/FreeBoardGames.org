import React from 'react';
import TurnatoBar from '../../../TurnatoBar/TurnatoBar';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { browserHistory } from 'react-router';
import chess_screenshot from '../../../resources/chess_screenshot.webp';
import checkers_screenshot from '../../../resources/checkers_screenshot.webp';


class GameView extends React.Component {
  componentDidMount() {
    this.props.requestGameInfo(this.props.params.game_code);
  }
  render() {
    // PARTY
    let gameCode = this.props.info.code;
    let gameName = this.props.info.name;
    let gameSubtitle = this.props.info.subtitle;
    let gameScreenshot;
    switch (gameCode) {
    case 'chess':
      gameScreenshot = chess_screenshot;
      break;
    case 'checkers':
      gameScreenshot = checkers_screenshot;
      break;
    }
    let gameDescription = this.props.info.description;

    return (<TurnatoBar disconnected={this.props.disconnected}>
      <br />
      <Card>
        <CardHeader
          title={gameName}
          subtitle={gameSubtitle}
        />
        <CardText>
          <img src={gameScreenshot} style={{width: '60%', marginLeft:'20%',
            marginRight: '20%'}} />
          <br /><br />
          {gameDescription}
        </CardText>

        <CardActions style={{textAlign: 'right'}}>
          <RaisedButton label="Play w/ Friends"
                        onClick={this.playWithFriends}
                        secondary={true} />
        </CardActions>
      </Card>
      </TurnatoBar>);
  }
  playWithFriends() {
    browserHistory.push('/newParty');
  }
}

GameView.propTypes = {
  requestGameInfo:PropTypes.func.isRequired,
  disconnected: PropTypes.bool.isRequired,
  token: PropTypes.string,
  info: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  params: PropTypes.object.isRequired
};
GameView.defaultProps = {
  requestGameInfo: () => {},
  disconnected: false,
  token: '',
  info: {},
  loading: true,
  params: {}
};

export default GameView;
