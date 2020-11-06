import React from 'react';
import css from './/AlertLayer.css';

class AlertLayer extends React.Component<{}, {}> {
  render() {
    return (
      <div className={css.Main}>
        <div className={css.Inner}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AlertLayer;
