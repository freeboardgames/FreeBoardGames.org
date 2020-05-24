import React from 'react';

interface InnerWrapper {
  onPlay(): any;
  onTrash(): any;
  myTurn: boolean;
}

var play = require('./media/play_temp.png');
var trash = require('./media/trash_temp.png');
var wait = require('./media/countdown2.png');

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
    return (
      <div>
        <div>
          <img src={wait} height="50" width="50"></img>
        </div>
      </div>
    );
  }
}
