import React from 'react';
import AlertLayer from '../Game/AlertLayer';
import { Card, Typography, Button, TextField, Theme, FormControl, withStyles } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import InputAdornment from '@material-ui/core/InputAdornment';
import CardContent from '@material-ui/core/CardContent';
import { LoginService, RESULT_CODE } from './LoginService';

const styles = (theme: Theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
});

interface State {
  email: string;
  password: string;
  loginButtonEnabled: boolean;
  loginStatus: RESULT_CODE;
}

class LoginForm extends React.Component<any, State> {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', loginButtonEnabled: false, loginStatus: null };
  }

  render() {
    const { classes } = this.props;
    const { loginStatus } = this.state;
    return (
      <AlertLayer>
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
          <Typography style={{ paddingTop: '16px' }} variant="h6" component="h3" noWrap={true}>
            Log in
          </Typography>
          <CardContent>
            <FormControl className={classes.margin}>
              <div>
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                  autoFocus
                  required
                  error={loginStatus === RESULT_CODE.UNKNOWN_EMAIL}
                  helperText={loginStatus === RESULT_CODE.UNKNOWN_EMAIL ? 'Unknown email' : null}
                  onChange={this._onChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div style={{ paddingTop: '24px' }}>
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  required
                  error={loginStatus === RESULT_CODE.BAD_PASSWORD}
                  helperText={loginStatus === RESULT_CODE.BAD_PASSWORD ? 'Incorrect password' : null}
                  onChange={this._onChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKeyIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </FormControl>
            <div style={{ marginTop: '8px' }}>
              <Button disableFocusRipple disableRipple style={{ textTransform: 'none' }} variant="text" color="primary">
                Forgot password?
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                disabled={!this.state.loginButtonEnabled}
                onClick={this._loginButtonClicked}
                style={{ marginTop: '16px' }}
              >
                Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </AlertLayer>
    );
  }

  _loginButtonClicked = async () => {
    const { email, password } = this.state;
    const res = await LoginService.authenticate(email, password);
    this.setState((oldState: State) => ({ ...oldState, loginStatus: res.status }));
  };

  _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    this.setState((oldState: State) => {
      const newState = { ...oldState };
      newState[id] = value;
      newState.loginButtonEnabled = this._validateFields(newState);
      return newState;
    });
  };

  _validateFields = (newState: State) => {
    const { email, password } = newState;
    if (!email || !password) return false;
    if (!this._validateEmail(email)) return false;
    return true;
  };

  _validateEmail = (email: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };
}

export default withStyles(styles)(LoginForm);
