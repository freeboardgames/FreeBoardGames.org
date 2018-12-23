import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AlertLayer from './AlertLayer';
import * as PropTypes from 'prop-types';

interface IGameBarProps {
    children: React.ReactNode;
}

class GameBar extends React.Component<IGameBarProps, {}> {
  static propTypes = {
    children: PropTypes.element,
  };

  componentWillMount() {
    if (typeof window !== 'undefined') {
      document.body.style.backgroundColor = 'black';
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div style={{maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto'}}>
            {this.props.children}
          </div>
        </div>
     </MuiThemeProvider>
    );
  }
}

export default GameBar;
