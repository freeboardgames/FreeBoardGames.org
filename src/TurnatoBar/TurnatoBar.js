import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

const TurnatoBar = ({children}) => (
  <MuiThemeProvider>
  <div style={{maxWidth: "500px", marginLeft: "auto", marginRight: "auto"}}>
  <a href="/">
    <AppBar
      title="Turnato"
      iconElementLeft={<IconButton></IconButton>}
      iconElementRight={<IconButton><ActionAccountCircle /></IconButton>}
    />
  </a>
  {children}
  </div>
  </MuiThemeProvider>
);

export default TurnatoBar;
