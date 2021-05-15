import React from 'react';
import Game from 'infra/game/Game';
import { connect } from 'react-redux';
import { NextRouter, withRouter, withTranslation, WithTranslation } from 'infra/i18n';
import { Dispatch } from 'redux';
import NicknameRequired from 'infra/common/components/auth/NicknameRequired';
import MessagePage from 'infra/common/components/alert/MessagePage';
import { GetMatch_match } from 'gqlTypes/GetMatch';
import { LobbyService } from 'infra/common/services/LobbyService';
import * as Sentry from '@sentry/browser';
import { compose } from 'recompose';

interface MatchOutterProps {}

interface MatchInnerProps extends WithTranslation {
  router: NextRouter;
  dispatch: Dispatch;
}

interface MatchState {
  loading: boolean;
  match: GetMatch_match;
  error: boolean;
}

export class Match extends React.Component<MatchInnerProps & MatchOutterProps, MatchState> {
  state = { loading: true, error: false, match: undefined };

  componentDidMount() {
    const matchId = this.props.router.query.matchId as string;
    LobbyService.getMatch(this.props.dispatch, matchId)
      .then((getMatch) => {
        this.setState({ match: getMatch.match, loading: false });
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
    const { t } = this.props;
    if (this.state.loading) {
      return <MessagePage type={'loading'} message={t('loading')} />;
    } else if (this.state.error) {
      return <MessagePage type={'error'} message={t('could_not_load_match')} />;
    } else if (!this.state.match) {
      return <MessagePage type={'error'} message={t('match_not_found')} />;
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

const withNickNameRequired = function (Component) {
  return function (props) {
    return (
      <NicknameRequired>
        <Component {...props} />
      </NicknameRequired>
    );
  };
};

const enhance = compose<MatchInnerProps, MatchOutterProps>(
  withNickNameRequired,
  withRouter,
  withTranslation('Match'),
  connect(mapStateToProps),
);

export default enhance(Match);
