import React from 'react';
import { NicknamePrompt } from './NicknamePrompt';
import { LobbyService } from './LobbyService';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import FreeBoardGamesBar from 'components/App/FreeBoardGamesBar';
import { ReduxState, ReduxUserState } from 'redux/definitions';

interface Props {
  onSuccess?: (...args: any) => void;
  handleClickaway?: () => void;
  renderAsPopup?: boolean;
  user: ReduxUserState;
  dispatch: Dispatch;
}

interface State {
  loading: boolean;
  errorText: string;
}

class NicknameRequired extends React.Component<Props, State> {
  state = { errorText: undefined, loading: false };
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
      this.setState({ loading: true });
      await LobbyService.newUser(nickname);
      this.setState({ loading: false });
      this.props.dispatch(LobbyService.getSyncUserAction());
    } catch (e) {
      const errorText = e.response?.body?.message || 'Unknown error';
      this.setState({ errorText, loading: false });
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
