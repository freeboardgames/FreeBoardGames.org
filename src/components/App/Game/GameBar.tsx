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
        <div
          style={{
            width: '100%',
            color: 'white',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '500px',
          }}
        >
          {this.props.children}
        </div>
     </MuiThemeProvider>
    );
  }
}

export default GameBar;
