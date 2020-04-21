import React from 'react';
import NicknamePrompt from './NicknamePrompt';
import { getAuthData, setAuthData } from 'misc/AuthHelper';

interface Props {
  onSuccess: (...args: any) => void;
  showIf: boolean;
}

interface State {
  nickname?: string;
}

class NicknameRequired extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const authData = getAuthData();
    this.state = { nickname: authData?.nickname };
  }

  render() {
    if (this.props.showIf) {
      return (
        <React.Fragment>
          <NicknamePrompt
            nickname={this.state.nickname}
            setNickname={this._setNickname}
            closePrompt={this._closeNicknamePrompt}
            blockClickaway={true}
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
    this.props.onSuccess();
  };

  _closeNicknamePrompt = () => {
    this.setState((oldState) => {
      return { ...oldState, loginFormOpen: false };
    });
  };
}

export default NicknameRequired;
