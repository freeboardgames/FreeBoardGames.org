import React from 'react';
import Cookies from 'js-cookie';
import NicknamePrompt from './NicknamePrompt';
import { getAuthData, setAuthData } from 'misc/AuthHelper';

interface Props {
  onSuccess?: (...args: any) => void;
}

interface State {
  loginFormOpen: boolean;
  nickname?: string;
}

class NicknameRequired extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const authData = getAuthData();
    this.state = { loginFormOpen: !authData, nickname: authData?.nickname };
  }

  render() {
    if (this.state.loginFormOpen) {
      return (
        <React.Fragment>
          <NicknamePrompt
            nickname={this.state.nickname}
            setNickname={this._setNickname}
            closePrompt={this._closeNicknamePrompt}
          />
          {this.props.children}
        </React.Fragment>
      );
    } else {
      return this.props.children;
    }
  }

  _setNickname = (nickname: string, token: string) => {
    setAuthData(nickname, token);
    this.setState((oldState) => ({ ...oldState, nickname }));

    // call callback if passed in props:
    if (this.props.onSuccess) this.props.onSuccess();
  };

  _closeNicknamePrompt = () => {
    this.setState((oldState) => {
      return { ...oldState, loginFormOpen: false };
    });
  };
}
export default NicknameRequired;
