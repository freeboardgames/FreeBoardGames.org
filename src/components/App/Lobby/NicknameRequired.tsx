import React from 'react';
import { NicknamePrompt } from './NicknamePrompt';
import { LobbyService } from './LobbyService';
import { connect } from 'react-redux';
import { ActionNames, AuthData } from '../../../redux/actions';
import FreeBoardGamesBar from 'components/App/FreeBoardGamesBar';

interface Props {
  onSuccess?: (...args: any) => void;
  handleClickaway?: () => void;
}

interface State {
  open: boolean;
}

class NicknameRequired extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const nickname = LobbyService.getNickname();
    let payload: AuthData;
    if (nickname) {
      payload = { ready: true, loggedIn: true, nickname };
    } else {
      payload = { ready: true, loggedIn: false };
    }
    (this.props as any).dispatch({ type: ActionNames.SyncUser, payload });
  }

  render() {
    const nickname: string = (this.props as any).user.nickname;
    if (!nickname) {
      return (
        <FreeBoardGamesBar>
          <NicknamePrompt nickname={nickname} setNickname={this._setNickname} closePrompt={this._closeNicknamePrompt} />
        </FreeBoardGamesBar>
      );
    } else {
      return this.props.children;
    }
  }

  _setNickname = (nickname: string) => {
    LobbyService.setNickname(nickname);
    this.setState((oldState) => ({ ...oldState, nickname }));
    const payload: AuthData = { ready: true, loggedIn: true, nickname };
    (this.props as any).dispatch({ type: ActionNames.SyncUser, payload });
    if (this.props.onSuccess) this.props.onSuccess();
  };

  _closeNicknamePrompt = () => {
    this.setState({ open: false });
  };
}

const mapStateToProps = function (state) {
  return {
    user: { ...state.user },
  };
};

export default connect(mapStateToProps)(NicknameRequired);
