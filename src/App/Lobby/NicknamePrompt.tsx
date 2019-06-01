import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

interface INicknamePromptProps {
  setNickname: (nickname: string) => void;
  nickname?: string;
}

interface INicknamePromptState {
  nameTextField: string;
}

export class NicknamePrompt extends React.Component<INicknamePromptProps, INicknamePromptState> {
  state = { nameTextField: '' };
  render() {
    return (
      <div>
        <div>
          <TextField
            autoFocus={true}
            type="text"
            defaultValue={this.props.nickname}
            onChange={this._onChange}
            onKeyPress={this._setNicknameOnEnterButton}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '16px' }}
          onClick={this._onClick}
          disabled={!this._nicknameIsValid()}
        >
          Set Nickname
        </Button>
      </div>
    );
  }

  _setNicknameOnEnterButton = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' && this._nicknameIsValid()) {
      this._onClick();
    }
  };

  _nicknameIsValid = () => {
    const name = this.state.nameTextField;
    return name && name.length > 0;
  };

  _onClick = () => {
    if (this._nicknameIsValid()) {
      this.props.setNickname(this.state.nameTextField);
    }
  };

  _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nameTextField = event.target.value!;
    this.setState(oldState => {
      return { ...oldState, nameTextField };
    });
  };
}
