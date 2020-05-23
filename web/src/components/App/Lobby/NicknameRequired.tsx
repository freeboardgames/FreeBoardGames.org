import React from 'react';
import { NicknamePrompt } from './NicknamePrompt';
import { LobbyService } from './LobbyService';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import FreeBoardGamesBar from 'components/App/FreeBoardGamesBar';
import { ReduxState, ReduxUserState } from 'redux/definitions';
import { Mutation } from '@apollo/react-components';
import { NewUser, NewUserVariables } from 'queries/NewUser';

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

  render() {
    const nickname: string = this.props.user.nickname;
    if (nickname) {
      return this.props.children;
    }
    const prompt = (
      <Mutation<NewUser, NewUserVariables> mutation={LobbyService.NEW_USER}>
        {(newUser, { data }) => {
          if (data) {
            LobbyService.setNickname(nickname);
            LobbyService.setJwt(data.newUser.jwtToken);
            this.props.dispatch(LobbyService.getSyncUserAction());
          }
          return (
            <NicknamePrompt
              nickname={nickname}
              setNickname={(nickname: string) => {
                newUser({ variables: { nickname } });
              }}
              errorText={this.state.errorText}
              onChange={() => this.setState({ errorText: undefined })}
            />
          );
        }}
      </Mutation>
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
}

/* istanbul ignore next */
const mapStateToProps = function (state: ReduxState) {
  return {
    user: { ...state.user },
  };
};

export default connect(mapStateToProps)(NicknameRequired);
