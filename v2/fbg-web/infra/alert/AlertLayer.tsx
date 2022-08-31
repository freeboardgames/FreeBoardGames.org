import React from "react";
import css from "./AlertLayer.module.css";

interface AlertLayerProps {
  onClickaway?: () => void;
  children: React.ReactNode;
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
      if (this.props.onClickaway) {
        this.props.onClickaway();
      }
    }
  };
}

export default AlertLayer;
