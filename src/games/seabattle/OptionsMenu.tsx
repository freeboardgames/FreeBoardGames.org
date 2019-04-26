import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

interface IOptionsState {
  soundEnabled: boolean;
}

export class OptionsMenu extends React.Component<{}, IOptionsState> {
  constructor(state: IOptionsState) {
    super(state);
    this.state = {
      soundEnabled: true,
    };
  }

  render() {
    const actionText = this.state.soundEnabled ? 'Disable' : 'Enable';
    const toggleText = `${actionText} sound`;
    return <MenuItem onClick={this._toggleSound}>{toggleText}</MenuItem>;
  }

  _toggleSound = () => {
    const soundEnabled = this.state.soundEnabled ? false : true;
    this.setState({ ... this.state, soundEnabled });
  }
}
