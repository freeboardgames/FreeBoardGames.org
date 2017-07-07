import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

class TurnatoBar extends React.Component {
  render() {
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
      </div>)
    }
    return (
      <div>
        <MuiThemeProvider>
          <div style={{maxWidth: "500px",
                       marginLeft: "auto",
                       marginRight: "auto"}}>
          <a href="/">
            <AppBar
              title="Turnato"
              iconElementLeft={<IconButton></IconButton>}
              iconElementRight={<IconButton><ActionAccountCircle /></IconButton>}
            />
          </a>
          {this.props.children}
          </div>
        </MuiThemeProvider>
      {disconnectedLayer}
      </div>
    );
  }
}
export default TurnatoBar;

TurnatoBar.defaultProps = {
  disconnected: false
};
