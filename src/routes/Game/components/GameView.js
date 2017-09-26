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
    let game = this.props.info;
    let gameScreenshot;
    switch (game.code) {
    case 'chess':
      gameScreenshot = chess_screenshot;
      break;
    case 'checkers':
      gameScreenshot = checkers_screenshot;
      break;
    }

    return (<TurnatoBar>
      <br />
      <Card>
        <CardHeader
          title={game.name}
          subtitle={game.subtitle}
        />
        <CardText>
          <img src={gameScreenshot} style={{width: '60%', marginLeft:'20%',
            marginRight: '20%'}} />
          <br /><br />
          {game.description}
        </CardText>

        <CardActions style={{textAlign: 'right'}}>
          //TODO(felizardo): Add single player button
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
