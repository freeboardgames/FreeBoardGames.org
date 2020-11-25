import React from 'react';
import css from './belectiontracker.css';

interface InnerWrapper {
  count: number;
}

export class BElectionTracker extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div className={css.et}>
        <div className={css.tooltip}>
          {this.props.count == 0 ? '❤️' : '💔'}
          {this.props.count <= 1 ? '❤️' : '💔'}
          {this.props.count <= 2 ? '❤️' : '💔'}
          <span className={css.tooltiptext}>
            <b>Election Tracker</b>. If three consecutive elections fail due to having too many 👎 votes, the topmost 💧
            or 🩸 is played automatically. No special actions like 🕵 🧪 🗳 🗡️ get triggerd. If a 5th 💧 is played, the
            humans win. If a 6th 🩸 is played, the vampires win.
          </span>
        </div>
      </div>
    );
  }
}
