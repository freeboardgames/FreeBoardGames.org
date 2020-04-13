import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

interface INicknamePromptProps {
  setNickname: (nickname: string) => void;
  togglePrompt?: () => void;
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
        <ClickAwayListener onClickAway={this._togglePrompt}>
          <Card
            style={{
              marginTop: '16px',
              whiteSpace: 'nowrap',
              width: '250px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
            }}
          >
            <Typography style={{ paddingTop: '16px' }} variant="h5" component="h3">
              Enter Your Nickname
            </Typography>
            <CardContent>
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
            </CardContent>
          </Card>
        </ClickAwayListener>
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
    this.setState((oldState) => {
      return { ...oldState, nameTextField };
    });
  };

  _togglePrompt = () => {
    if (this.props.togglePrompt) {
      this.props.togglePrompt();
    }
  };
}
