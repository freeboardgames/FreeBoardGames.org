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

  componentWillMount() {
    document.body.style.backgroundColor = 'black';
  }

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
        <div>
          <div style={{maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto'}}>
            <svg
              viewBox={'0 0 80 7'}
              style={{maxWidth: '500px', position: 'fixed'}}
            >
              <g>
                 <rect
                   height="7"
                   width="80"
                   y="0"
                   x="0"
                   fill={this.props.backgroundColor}
                   style={{strokeWidth: 0.5, stroke: 'white'}}
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
