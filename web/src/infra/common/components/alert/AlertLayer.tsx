import React from 'react';
import css from './/AlertLayer.css';

interface AlertLayerProps {
  onClickaway?: () => void;
}

class AlertLayer extends React.Component<AlertLayerProps, {}> {
  outerLayerRef = React.createRef<HTMLDivElement>();

  render() {
    return (
      <div className={css.Main} onClick={this.onClick} ref={this.outerLayerRef}>
        <div className={css.Inner}>{this.props.children}</div>
      </div>
    );
  }

  onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === this.outerLayerRef.current) {
      this.props.onClickaway();
    }
  };
}

export default AlertLayer;
