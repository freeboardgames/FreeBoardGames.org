import React from 'react';
import NicknamePrompt from './NicknamePrompt';
import { getAuthData, setAuthData } from 'misc/AuthHelper';
import { connect } from 'react-redux';

interface Props {
  onSuccess: (...args: any) => void;
  requiredIf: boolean;
}

class NicknameRequired extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const authData = getAuthData();
    let payload;
    if (authData) {
      payload = { loggedIn: true, nickname: authData.nickname };
    } else {
      payload = { loggedIn: false };
    }
    (this.props as any).dispatch({ type: 'SYNC_AUTH', payload });
  }

  render() {
    if (this.props.requiredIf) {
      const nickname: string = (this.props as any).auth.nickname;
      return (
        <React.Fragment>
          <NicknamePrompt
            nickname={nickname}
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

const mapStateToProps = function (state) {
  console.log('state is', state);
  return {
    auth: { ...state.auth },
  };
};

export default connect(mapStateToProps)(NicknameRequired);
