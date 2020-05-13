import React from 'react';
import { NicknamePrompt } from './NicknamePrompt';
import { LobbyService } from './LobbyService';
import { connect } from 'react-redux';
import FreeBoardGamesBar from 'components/App/FreeBoardGamesBar';

interface Props {
  onSuccess?: (...args: any) => void;
  handleClickaway?: () => void;
}

interface State {
  errorText: string;
}

export class NicknameRequired extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { errorText: undefined };
  }

  componentDidMount() {
    LobbyService.sync((this.props as any).dispatch);
  }

  render() {
    const nickname: string = (this.props as any).user.nickname;
    if (!nickname) {
      return (
        <FreeBoardGamesBar>
          <NicknamePrompt
            nickname={nickname}
            setNickname={this._setNickname}
            errorText={this.state.errorText}
            onChange={() => this.setState({ errorText: undefined })}
          />
        </FreeBoardGamesBar>
      );
    } else {
      return this.props.children;
    }
  }

  _setNickname = async (nickname: string) => {
    try {
      await LobbyService.newUser((this.props as any).dispatch, nickname);
    } catch (e) {
      const errorText = e.response?.body?.message || 'Unknown error';
      this.setState({ errorText });
    }
    await LobbyService.profile();
    if (this.props.onSuccess) this.props.onSuccess();
  };
}

/* istanbul ignore next */
const mapStateToProps = function (state) {
  return {
    user: { ...state.user },
  };
};

export default connect(mapStateToProps)(NicknameRequired);
