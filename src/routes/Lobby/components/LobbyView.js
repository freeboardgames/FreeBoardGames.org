import React from 'react';
import TurnatoBar from '../../../TurnatoBar/TurnatoBar';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import {Card, CardText} from 'material-ui/Card';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

const TICK_INTERVAL = 1000;

class LobbyView extends React.Component {
    componentDidMount() {
        this.joinLobby();
    }
    joinLobby() {
        ReactGA.event({
            category: 'Lobby',
            action: 'join',
        });
        if (this.timer)
            clearInterval(this.timer);
        this.state = { elapsed: 0 };
        this.props.joinLobby(this.props.params.game_code);
    }
    tick() {
        this.setState({ elapsed: this.state.elapsed + TICK_INTERVAL });
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.lobby.status === 'FOUND'  &&
       this.props.lobby.status != 'FOUND') {
            ReactGA.event({
                category: 'Lobby',
                action: 'found',
            });
            browserHistory.push(nextProps.lobby.link);
        }
        if (nextProps.lobby.status === 'WAITING') {
            ReactGA.event({
                category: 'Lobby',
                action: 'waiting',
            });
            this.timer = setInterval(this.tick.bind(this), TICK_INTERVAL);
        }
    }

    render() {
        let progress = null;
        switch (this.props.lobby.status) {
        case 'WAITING':
            if (this.state.elapsed > this.props.lobby.wait) {
                clearInterval(this.timer);
                ReactGA.event({
                    category: 'Lobby',
                    action: 'failed',
                });
                progress = (<span>
            <p>Failed to find someone. Retry?</p>
            <RaisedButton label="Retry" onClick={this.joinLobby.bind(this)}
                          secondary={false} />
            </span>);
            } else {
                let remaining = (this.props.lobby.wait - this.state.elapsed)/1000;
                let mins = Math.floor(remaining/60);
                let secs = Math.floor(remaining)%60;
                progress = (<span>
              <CircularProgress mode={'determinate'} size={80} thickness={5}
              max={this.props.lobby.wait} value={this.state.elapsed} />
              <p>Waiting someone else to join...</p>
              <p>{mins}:{secs < 10 ? 0 : null }{secs}</p>
            </span>);
            }
            break;
        }
        if (this.props.lobby.loading) {
            progress = (<span>
          <CircularProgress size={80} thickness={5} />
          <p>Loading ...</p>
        </span>);
        }
        return (
      <TurnatoBar disconnected={this.props.disconnected}>
        <Card>
          <CardText style={{textAlign: 'center'}}>
            {progress}
          </CardText>
        </Card>
      </TurnatoBar>);
    }
}

LobbyView.propTypes = {
    joinLobby: PropTypes.func.isRequired,
    fail: PropTypes.func.isRequired,
    disconnected: PropTypes.bool.isRequired,
    token: PropTypes.string.isRequired,
    lobby: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
};
LobbyView.defaultProps = {
    joinLobby: () => {},
    fail: () => {},
    disconnected: false,
    token: '',
    lobby: { status: 'WAITING', loading: false },
    params: {}
};

export default LobbyView;
