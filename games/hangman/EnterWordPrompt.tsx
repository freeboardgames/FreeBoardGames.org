import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

interface IEnterWordPromptProps {
  setEnterWord: (nickname: string) => void;
  togglePrompt?: () => void;
  nickname?: string;
}

interface IEnterWordPromptState {
  wordTextField: string;
}

export class EnterWordPrompt extends React.Component<IEnterWordPromptProps, IEnterWordPromptState> {
  state = { wordTextField: '' };
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
            <Typography style={{ paddingTop: '16px' }} variant="h5" component="h3" noWrap={true}>
              Enter Word
            </Typography>
            <CardContent>
              <div>
                <TextField
                  autoFocus={true}
                  type="text"
                //   defaultValue={this.props.nickname}
                  onChange={this._onChange}
                  onKeyPress={this._setEnterWordOnEnterButton}
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '16px' }}
                onClick={this._onClick}
                disabled={!this._nicknameIsValid()}
              >
                Play
              </Button>
            </CardContent>
          </Card>
        </ClickAwayListener>
      </div>
    );
  }

  _setEnterWordOnEnterButton = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' && this._nicknameIsValid()) {
      this._onClick();
    }
  };

  _nicknameIsValid = () => {
    const name = this.state.wordTextField;
    return name && name.length > 0;
  };

  _onClick = () => {
    if (this._nicknameIsValid()) {
      this.props.setEnterWord(this.state.wordTextField);
    }
  };

  _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const wordTextField = event.target.value!;
    this.setState(oldState => {
      return { ...oldState, wordTextField };
    });
  };

  _togglePrompt = () => {
    if (this.props.togglePrompt) {
      this.props.togglePrompt();
    }
  };
}
