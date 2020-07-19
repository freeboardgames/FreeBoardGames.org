import React from 'react';
import countdown1 from './media/countdown1.png';
import countdown2 from './media/countdown2.png';
import countdown3 from './media/countdown3.png';
import css from './btoken.css';

interface InnerWrapper {
  countdown: number;
  treats: number;
}

export class BToken extends React.Component<InnerWrapper, {}> {
  render() {
    var imagetreat = require('./media/treat.png');
    var imagecountdown: any;

    if (this.props.countdown === 3) {
      imagecountdown = countdown3;
    } else if (this.props.countdown === 2) {
      imagecountdown = countdown2;
    } else if (this.props.countdown === 1) {
      imagecountdown = countdown1;
    }

    return (
      <>
        <div className={css.treatWrapper}>
          <img src={imagetreat} height="50" width="50"></img>
          <h2 className={css.treatCount}>x{this.props.treats}</h2>
        </div>
        <div className="image">
          <img src={imagecountdown} height="50" width="50"></img>
        </div>
      </>
    );
  }
}
