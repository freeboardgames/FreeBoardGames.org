import * as React from 'react';

class AlertLayer extends React.Component<{}, {}> {
  render() {
    const mainStyle = {
      position: 'absolute', left: 0, top: 0,
      background: 'rgba(255,255,255,.85)',
      right: 0, height: '100%', zIndex: 9001,
      display: 'block', textAlign: 'center',
    };
    const alignStyle = {
      transform: 'translateX(-50%) translateY(-50%)',
      left: '50%', top: '50%', position: 'absolute',
    };
    return (
      <div style={mainStyle}>
        <div style={alignStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AlertLayer;
