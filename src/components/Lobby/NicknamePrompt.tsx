import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import AlertLayer from 'components/App/Game/AlertLayer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { LobbyService } from 'components/Lobby/LobbyService';
import { CheckinResponseStatus, CheckinResponse } from 'dto/User';

interface Props {
  setNickname: (nickname: string, credential: string) => void;
  nickname?: string;
  closePrompt?: () => void;
}

interface State {
  nameTextField: string;
  errorText: string;
}

class NicknamePrompt extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { nameTextField: props.nickname, errorText: '' };
  }
  render() {
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
              Choose a Nickname
            </Typography>
            <CardContent>
              <div>
                <TextField
                  autoFocus={true}
                  type="text"
                  defaultValue={this.props.nickname}
                  error={!!this.state.errorText}
                  helperText={this.state.errorText}
                  onChange={this._onChange}
                  onKeyPress={this._setNicknameOnEnterButton}
                />
              </div>
              <Button variant="contained" color="primary" style={{ marginTop: '16px' }} onClick={this._onClick}>
                Set Nickname
              </Button>
            </CardContent>
          </Card>
        </ClickAwayListener>
      </AlertLayer>
    );
  }

  /** Allow the user to exit the nickname prompt if they already have a nickname. */
  _handleClickaway = () => {
    if (!!this.props.nickname) {
      this.props.closePrompt();
    }
  };

  _setNicknameOnEnterButton = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      this._onClick();
    }
  };

  _getValidationErrors = () => {
    const name = this.state.nameTextField;
    let errorText = '';
    if (!name || name.length < 1 || name.length > 12) {
      errorText = 'Invalid nickname.';
    }
    this.setState({ errorText });
    return errorText;
  };

  _handleErrorResponse = (status: CheckinResponseStatus) => {
    let errorText: string;
    switch (status) {
      case CheckinResponseStatus.BadNickname:
        errorText = 'Invalid nickname.';
        break;
      default:
        errorText = 'Unknown error.';
    }
    return errorText;
  };

  _onClick = async () => {
    const validationErrors = this._getValidationErrors();
    if (!validationErrors) {
      const nickname = this.state.nameTextField;
      let response: CheckinResponse;
      try {
        response = await LobbyService.checkin(nickname);
      } catch {
        response = { result: CheckinResponseStatus.Exception };
      }
      if (response.result === CheckinResponseStatus.Success) {
        this.props.setNickname(this.state.nameTextField, response.token);
        this.props.closePrompt();
      } else {
        const errorText = this._handleErrorResponse(response.result);
        this.setState({ errorText });
      }
    }
  };

  _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nameTextField = event.target.value!;
    this.setState((oldState) => {
      return { ...oldState, nameTextField };
    });
  };
}

export default NicknamePrompt;
