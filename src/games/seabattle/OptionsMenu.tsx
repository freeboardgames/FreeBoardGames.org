import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

interface IOptionsProps {
  setSoundPref: (arg0: boolean) => void;
  getSoundPref: () => boolean;
}

interface IOptionsState {
  soundEnabled: boolean;
}

export class OptionsMenu extends React.Component<IOptionsProps, IOptionsState> {
  constructor(props: IOptionsProps, state: IOptionsState) {
    super(props, state);
    this.state = {
      soundEnabled: true,
    };
  }

  render() {
    const actionText = this.props.getSoundPref() ? 'Disable' : 'Enable';
    const toggleText = `${actionText} sound`;
    return <MenuItem onClick={this._toggleSound}>{toggleText}</MenuItem>;
  }

  _toggleSound = () => {
    const soundEnabled = this.state.soundEnabled ? false : true;
    this.setState({ ... this.state, soundEnabled });
    this.props.setSoundPref(soundEnabled);
  }
}
