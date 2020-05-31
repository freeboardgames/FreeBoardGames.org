import React from 'react';
import { NicknamePrompt } from './NicknamePrompt';
import { LobbyService } from '../../services/LobbyService';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import FreeBoardGamesBar from 'infra/common/components/base/FreeBoardGamesBar';
import { ReduxState, ReduxUserState } from 'infra/common/redux/definitions';

interface Props {
  dispatch: Dispatch;
  onSuccess?: (...args: any) => void;
  handleClickaway?: () => void;
  conditional: boolean;
  renderAsPopup?: boolean;
  user: ReduxUserState;
}

interface State {
  errorText: string;
}

export class NicknameRequired extends React.Component<Props, State> {
  state = { errorText: undefined };
  constructor(props: Props) {
    super(props);
  }

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
