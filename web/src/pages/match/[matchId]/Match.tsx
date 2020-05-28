import React from 'react';
import Game from 'components/App/Game/Game';
import { connect } from 'react-redux';
import { NextRouter, withRouter } from 'next/router';
import { Dispatch } from 'redux';
import NicknameRequired from 'components/App/Lobby/NicknameRequired';
import MessagePage from 'components/App/MessagePageClass';
import { Match as MatchDto } from 'dto/match/Match';
import { LobbyService } from 'components/App/Lobby/LobbyService';
import * as Sentry from '@sentry/browser';

interface MatchProps {
  router: NextRouter;
  dispatch: Dispatch;
}

interface MatchState {
  loading: boolean;
  match: MatchDto;
  error: boolean;
}

export class Match extends React.Component<MatchProps, MatchState> {
  state = { loading: true, error: false, match: undefined };

  componentDidMount() {
    const matchId = this.props.router.query.matchId as string;
    LobbyService.getMatch(this.props.dispatch, matchId)
      .then((match) => {
        this.setState({ match, loading: false });
      })
      .catch((e) => {
        if (e.response?.notFound) {
          this.setState({ loading: false, match: null });
        } else {
          this.setState({ loading: false, error: true });
          Sentry.captureException(e);
        }
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <NicknameRequired>
          <MessagePage type={'loading'} message={'Loading...'} />
        </NicknameRequired>
      );
    } else if (this.state.error) {
      return <MessagePage type={'error'} message={'Could not load match.'} />;
    } else if (!this.state.match) {
      return <MessagePage type={'error'} message={'Match not found.'} />;
    }
    return <Game match={this.state.match} />;
  }
}

/* istanbul ignore next */
const mapStateToProps = function (state) {
  return {
    user: { ...state.user },
  };
};

export default withRouter(connect(mapStateToProps)(Match));
