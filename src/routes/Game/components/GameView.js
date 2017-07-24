import React from 'react'
import TurnatoBar from '../../../TurnatoBar/TurnatoBar'
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import CircularProgress from 'material-ui/CircularProgress';
import {List, ListItem} from 'material-ui/List';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { Link } from 'react-router'
import Subheader from 'material-ui/Subheader';
import ActionGroupWork from 'material-ui/svg-icons/action/group-work';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import ImageRemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PlacesCasino from 'material-ui/svg-icons/places/casino';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import CopyToClipboard from 'react-copy-to-clipboard';
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
          <img src={gameScreenshot} style={{width: '100%'}} />
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
