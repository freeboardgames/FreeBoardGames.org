import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AlertLayer from './AlertLayer';
import * as PropTypes from 'prop-types';

interface IGameBarProps {
    alert?: React.ReactNode;
    children: React.ReactNode;
    text: string;
    backgroundColor: string;
    textColor: string;
}

class GameBar extends React.Component<IGameBarProps, {}> {
  static propTypes = {
    alert: PropTypes.element,
    children: PropTypes.element,
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    textColor: PropTypes.string,
  };

  render() {
    let alert = null;
    if (this.props.alert) {
      alert = (
        <AlertLayer>
          {this.props.alert}
        </AlertLayer>
      );
    }
    return (
      <MuiThemeProvider>
        <div style={{backgroundColor: 'black', height: '100%', color: 'white'}}>
            <div style={{maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto'}}>
              <svg viewBox={'0 0 80 7'}>
                <g>
                   <rect height="7" width="80" y="0" x="0" fill="white" />
                   <rect
                     height="6.8"
                     width="79.8"
                     y="0.1"
                     x="0.1"
                     fill={this.props.backgroundColor}
                   />
                   <text
                     fontFamily="sans-serif"
                     style={{textAnchor: 'middle', textAlign: 'center'}}
                     fill={this.props.textColor}
                   >
                     <tspan fontSize="5px" x="40" y="5">
                       {this.props.text}
                     </tspan>
                   </text>
                </g>
              </svg>
              {this.props.children}
            </div>
            {alert}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default GameBar;
