import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import AlertLayer from '../Game/AlertLayer';
import CircularProgress from '@material-ui/core/CircularProgress';

interface Props {
  closePrompt?: () => void;
  setNickname: (nickname: string) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  blockClickaway?: boolean;
  nickname?: string;
  errorText?: string;
  loading?: boolean;
}

interface State {
  hasChangedTextSinceError: boolean;
  nameTextField: string;
}

export class NicknamePrompt extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { nameTextField: '', hasChangedTextSinceError: false };
  }

  render() {
    const errorText = this.state.hasChangedTextSinceError ? null : this.props.errorText;
    let content = (
      <React.Fragment>
        <div>
          <TextField
            autoFocus={true}
            type="text"
            defaultValue={this.props.nickname}
            onChange={this._onChange}
            onKeyPress={this._setNicknameOnEnterButton}
            helperText={errorText}
            error={!!errorText}
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
      </React.Fragment>
    );
    if (this.props.loading) {
      content = <CircularProgress />;
    }
    return (
      <AlertLayer>
        <ClickAwayListener onClickAway={this._handleClickaway}>
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
            <CardContent>{content}</CardContent>
          </Card>
        </ClickAwayListener>
      </AlertLayer>
    );
  }

  /** Only close the prompt if permitted */
  _handleClickaway = () => {
    if (this.props.closePrompt && !!this.props.nickname && !this.props.blockClickaway) {
      this.props.closePrompt();
    }
  };

  _setNicknameOnEnterButton = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
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
    this.setState({ nameTextField });
    if (this.props.onChange) this.props.onChange(event);
  };
}
