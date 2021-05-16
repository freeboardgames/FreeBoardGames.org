import React, { ReactNode } from 'react';
import { NicknamePrompt } from './NicknamePrompt';
import { LobbyService } from '../../services/LobbyService';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import FreeBoardGamesBar from 'infra/common/components/base/FreeBoardGamesBar';
import { ReduxState, ReduxUserState } from 'infra/common/redux/definitions';

interface InnerProps {
  dispatch: Dispatch;
  user: ReduxUserState;
}

interface OutterProps {
  onSuccess?: (...args: any) => void;
  handleClickaway?: () => void;
  children: ReactNode;
  renderAsPopup?: boolean;
  skipFbgBar?: boolean;
}

interface State {
  errorText: string;
}

export class NicknameRequired extends React.Component<InnerProps & OutterProps, State> {
  state = { errorText: undefined };

  async componentDidMount() {
    this.props.dispatch(LobbyService.getSyncUserAction());
  }

  render() {
    const nickname: string = this.props.user.nickname;
    if (nickname) {
      return this.props.children;
    }
    const prompt = (
      <NicknamePrompt
        nickname={nickname}
        setNickname={this._setNickname}
        errorText={this.state.errorText}
        onChange={() => this.setState({ errorText: undefined })}
      />
    );
    if (this.props.renderAsPopup) {
      return (
        <React.Fragment>
          {prompt}
          {this.props.children}
        </React.Fragment>
      );
    } else if (this.props.skipFbgBar) {
      return prompt;
    } else {
      return <FreeBoardGamesBar>{prompt}</FreeBoardGamesBar>;
    }
  }

  _setNickname = async (nickname: string) => {
    try {
      await LobbyService.newUser(nickname);
      this.props.dispatch(LobbyService.getSyncUserAction());
    } catch (e) {
      const errorText = e.response?.body?.message || 'Unknown error';
      this.setState({ errorText });
    }
    if (this.props.onSuccess) this.props.onSuccess();
  };
}

/* istanbul ignore next */
const mapStateToProps = function (state: ReduxState) {
  return {
    user: { ...state.user },
  };
};

export default connect(mapStateToProps)(NicknameRequired);
