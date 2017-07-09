import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';

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
              iconElementLeft={<img src="/logo_optimized.svg" style={{color:'white', width: '48px', height: '48px'}}></img>}
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
/*
<IconButton><SvgIcon>
  <g transform="translate(0,-52.3622)">
  <path
  transform="matrix(1.6652723,0,0,1.7188792,-5.0794868,-42.390792)"
  style={{fill: 'none', strokeWidth: 100, strokeLinecap: 'round',
          strokeLinejoin: 'bevel', strokeMiterlimit: 4,
          strokeDasharray: 'none', strokeOpacity: 1 }}
  d="M 332.34018,334.64877 C 314.21828,444.51724 206.87943,391.50797 197.70351,312.44157 186.89878,219.34015 275.4626,148.88062 362.67612,150.72966 477.34826,153.16087 560.64858,260.26478 553.07351,371.05691 544.04393,503.12261 419.95177,597.79244 290.90007,585.88968 143.85068,572.32695 39.148879,433.35761 54.560895,288.83137 62.064949,218.46208 96.647508,152.51984 149.50539,105.59519">
  </path>
  </g>
</SvgIcon></IconButton>
*/
