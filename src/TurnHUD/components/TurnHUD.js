import React from 'react';
import TurnatoBar from '../../TurnatoBar/TurnatoBar';
import {Card, CardText} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import LinearProgress from 'material-ui/LinearProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function askPermission() {
  ReactGA.event({
    category: 'TurnHUD',
    action: 'askNotificationPermission',
  });
  return new Promise((resolve, reject) => {
    const permissionResult = Notification.requestPermission((result) => {
      resolve(result);
    });

    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  });
}

function subscribeUserToPush() {
  return navigator.serviceWorker.ready
  .then((registration) => {
    if (!registration) {
      return;
    }
    const subscribeOptions = {
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        'BAN72E3hbQ14KDaYyr9tSTXewOB9CvN-sSyQuk0vPq-V755kPnoCivqUZvP8ib1p_MFgIiLgNYb_eT6N0uYYIuo'
      )
    };

    return registration.pushManager.subscribe(subscribeOptions);
  });
}


class TurnHUD extends React.Component {
  componentDidMount() {
    askPermission()
    .then((permissionResult) => {
      if (permissionResult !== 'granted') {
        ReactGA.event({
          category: 'TurnHUD',
          action: 'notificationPermissionDenied',
        });
      }
      subscribeUserToPush()
      .then((pushSubscription) => {
        if (!pushSubscription) {
          ReactGA.event({
            category: 'TurnHUD',
            action: 'notificationFailedPushSubscribe',
          });
          return;
        }
        this.props.savePushSubscription(pushSubscription);
        ReactGA.event({
          category: 'TurnHUD',
          action: 'notificationSuccessPushSubscription',
        });
        return pushSubscription;
      });
    });
  }

  render() {
    let promptText = () => {
      ReactGA.event({
        category: 'TurnHUD',
        action: 'promptText',
      });
      var text = prompt('Say something');
      if (text) {
        ReactGA.event({
          category: 'TurnHUD',
          action: 'text',
        });
        this.props.sendMessage(this.props.matchInfo.code,
                               this.props.matchInfo.player,
                               text);
      }
    };
    let promptResign = () => {
      ReactGA.event({
        category: 'TurnHUD',
        action: 'promptResign',
      });
      var resign = confirm('Are you sure you want to resign?');
      if (resign) {
        ReactGA.event({
          category: 'TurnHUD',
          action: 'resign',
        });
        this.props.resign(this.props.matchInfo.code,
                          this.props.matchInfo.player);
      }
    };

    if (this.props.matchInfo.loading) {
      return (
        <TurnatoBar>
          <Card>
            <CardText style={{textAlign: 'center'}}>
              <CircularProgress size={80} thickness={5} />
            </CardText>
          </Card>
        </TurnatoBar>);
    }
    // WARNING
    let svg_height = '10';
    let warning_el = null;
    if (this.props.warning) {
      svg_height = '15';
      warning_el = (<g>
        <rect height="5" width="80" y="10" x="0" fill="yellow"></rect>
        <text fontFamily="sans-serif"
              style={{textAnchor: 'middle', textAlign: 'center'}}>
              <tspan fontSize="4px" x="40" y="14">{this.props.warning}</tspan>
        </text>
      </g>);
    }
    // MESSAGES
    let messages_els = [];
    for (var i =0; i<this.props.messages.length; i++) {
      let m = this.props.messages[i];
      messages_els.push(
        (<p style={{color: 'white'}} key={i}>
          <span style={{color: this.props.playersSecondaryColors[m.player]}}>
            <b>{this.props.matchInfo.playersNickname[m.player]}</b>
          </span>: {m.text}
         </p>));
    }
    messages_els.reverse();

    // WIN LAYER
    let winLayer = null;
    if (this.props.winner != null) {
      ReactGA.event({
        category: 'TurnHUD',
        action: 'endGame',
      });
      winLayer = (<div style={{position: 'absolute', left: 0, top: 0,
        right:0, height: '100%', background: 'rgba(255,255,255,.85)',
        zIndex: 9000, display: 'block', textAlign: 'center'}}>
        <div style={{transform: 'translateX(-50%) translateY(-50%)',
          left: '50%', top: '50%', position: 'absolute'}}>
          <h1>{this.props.matchInfo.playersNickname[this.props.winner]} WON!!!
          </h1>
          <a href="javascript:history.back();">Go Back</a>
        </div>
      </div>);
    }

    // DISCONNECT LAYER
    let disconnectedLayer = null;
    if (this.props.disconnected) {
      disconnectedLayer = (<div style={{position: 'absolute', left: 0, top: 0,
        right:0, height: '100%', background: 'rgba(255,255,255,.85)',
        zIndex: 9001, display: 'block', textAlign: 'center'}}>
        <div style={{transform: 'translateX(-50%) translateY(-50%)',
          left: '50%', top: '50%', position: 'absolute'}}>
          <h1>Connection lost</h1>
          <h2>Reconnecting...</h2>
        </div>
      </div>);
    }
    return (
    <div style={{backgroundColor: 'black', height: '100%'}}>
      <div style={{width: '100%', position: 'fixed',
        left: '0px', right:'0px', top: '0px',
        maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', zIndex: 999,
        pointerEvents: 'none'}}>
        {this.props.sendingMessage ? (<MuiThemeProvider>
        <LinearProgress mode="indeterminate" />
        </MuiThemeProvider>) : null}
        <svg viewBox={'0 0 80 '+svg_height}>
         <g>
           <rect height="10" width="80" y="0" x="0" fill="white"></rect>
           <rect height="10" width="13.9" y="0" x="0" fill="white"
            onClick={promptResign} style={{pointerEvents:'all'}}></rect>
           <rect height="10" width="13.9" y="0" x="66" fill="white"
            onClick={promptText} style={{pointerEvents:'all'}}></rect>
           <rect fillOpacity=".1" height="8.5" width=".1" y=".75" x="14"></rect>
           <g transform="matrix(.4 0 0 .4 2 .5)" onClick={promptResign} style={{pointerEvents:'all'}}>
            <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" fillOpacity={1}></path>
           </g>

           <g transform="matrix(.4 0 0 .4 69 .5)" onClick={promptText} style={{pointerEvents:'all'}}>
            <path d="m21.99 4c0-1.1-0.89-2-1.99-2h-16c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h14l4 4-0.01-18zm-3.99 10h-12v-2h12v2zm0-3h-12v-2h12v2zm0-3h-12v-2h12v2z"></path>
           </g>
          <rect fillOpacity=".1" height="8.5" width=".1" y=".75" x="67"></rect>
          <text fontFamily="sans-serif"
                style={{textAnchor: 'middle', textAlign: 'center'}}>
            <tspan fontSize="4px" x="40" y="9">
              {(this.props.playerWhoseTurn == this.props.matchInfo.player) ?
                  'PLAY' : 'WAIT'}
            </tspan>
          </text>
          <text x="40" fill={this.props.playersPrimaryColors[this.props.playerWhoseTurn]}
                fontFamily="sans-serif"
                style={{textAnchor: 'middle', textAlign: 'center'}}>
            <tspan fontSize="4px" y="4px" x="40">
              {this.props.matchInfo.playersNickname[this.props.playerWhoseTurn]}
            </tspan>
          </text>
        </g>
        {warning_el}
        </svg>
        {messages_els}
      </div>
      {winLayer}
      {disconnectedLayer}
      {this.props.children}
    </div>);
  }
}
TurnHUD.propTypes = {
  matchInfo: PropTypes.object.isRequired,
  playerWhoseTurn: PropTypes.number.isRequired,
  playersPrimaryColors: PropTypes.array.isRequired,
  playersSecondaryColors: PropTypes.array.isRequired,
  winner: PropTypes.number,
  messages: PropTypes.array.isRequired,
  warning: PropTypes.string,
  sendingMessage: PropTypes.bool.isRequired,
  disconnected: PropTypes.bool.isRequired,
  sendMessage: PropTypes.func.isRequired,
  savePushSubscription: PropTypes.func.isRequired,
  resign: PropTypes.func.isRequired,
  children: PropTypes.node
};
TurnHUD.defaultProps = {
  matchInfo: {
    code: '',
    players: [],
    playersNickname: [],
    player: 0,
    loading: true
  },
  playerWhoseTurn: 0,
  playersPrimaryColors: ['black', 'grey'], // Light background
  playersSecondaryColors: ['grey', 'white'], // Dark background
  winner: null,
  messages: [],
  warning: null,
  sendingMessage: false,
  disconnected: false,
  sendMessage: () => {},
  savePushSubscription: () => {},
  resign: () => {}
};
export default TurnHUD;
