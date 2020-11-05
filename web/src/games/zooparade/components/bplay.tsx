import React from 'react';
import play from './media/play_temp.png';
import trash from './media/trash_temp.png';

interface InnerWrapper {
  onPlay(): any;
  onTrash(): any;
  myTurn: boolean;
}

let buttonStyle = {
  background: 'none',
  border: '0',
  padding: '0',
  height: '50%',
  width: '50%',
};

let imageStyle = {
  height: '100%',
  width: '100%',
};

export class BPlay extends React.Component<InnerWrapper, {}> {
  render() {
    if (this.props.myTurn) {
      return (
        <div>
          <button onClick={this.props.onPlay} style={buttonStyle}>
            <img src={play} style={imageStyle}></img>
          </button>

          <button onClick={this.props.onTrash} style={buttonStyle}>
            <img src={trash} style={imageStyle}></img>
          </button>
        </div>
      );
    }
    return null;
  }
}
