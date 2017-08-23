import React from 'react'
import TurnatoBar from '../../../TurnatoBar/TurnatoBar'
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import ActionGroupWork from 'material-ui/svg-icons/action/group-work';
import ImageRemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router'


class GameView extends React.Component {
  componentDidMount() {
    this.props.requestGameInfo(this.props.params.game_code)
  }
  render() {
    let playWithFriends = () => {
      browserHistory.push('/newParty');
    };
    let playWithStrangers = () => {
      browserHistory.push('/lobby/' + this.props.params.game_code);
    };

    if (this.props.loading) {
      return (
        <TurnatoBar disconnected={this.props.disconnected}>
          <Card>
            <CardText style={{textAlign: "center"}}>
              <CircularProgress size={80} thickness={5} />
            </CardText>
          </Card>
        </TurnatoBar>);
    }
    // PARTY
    let gameName = this.props.info.name;
    let gameSubtitle = this.props.info.subtitle;
    let gameScreenshot = this.props.info.screenshot;
    let gameDescription = this.props.info.description;
    let gameRules = this.props.info.rules;

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

        <CardActions style={{textAlign: "right"}}>
          <RaisedButton label="Play w/ Strangers" onClick={playWithStrangers}
                        secondary={false} />
          <RaisedButton label="Play w/ Friends" onClick={playWithFriends}
                        secondary={true} />
        </CardActions>
      </Card>
      </TurnatoBar>)
    }
}

GameView.defaultProps = {
  requestGameInfo: () => {},
  disconnected: false,
  token: '',
  info: {},
  loading: true,
  params: {}
};

export default GameView
