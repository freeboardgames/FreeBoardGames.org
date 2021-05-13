import { IGameDef } from 'gamesShared/definitions/game';
import { GameMode } from 'gamesShared/definitions/mode';
import { LoadingMessage } from 'infra/common/components/alert/LoadingMessage';
import SEO from 'infra/common/helpers/SEO';
import dynamic from 'next/dynamic';
import Error from 'pages/_error';
import React from 'react';
import { getGameDefinition } from './utils';

const GameWrapper = dynamic(import('infra/game/Game'), {
  ssr: false,
  loading: LoadingMessage,
});

interface AILocalGameProps {
  gameCode: string;
  gameDef: IGameDef;
  mode: string;
}

export default class AILocalGame extends React.Component<AILocalGameProps, {}> {
  render() {
    if (this.props.gameDef) {
      return (
        <React.Fragment>
          <SEO noindex={true} />
          <GameWrapper mode={this.props.mode} gameCode={this.props.gameCode} matchCode={this.props.mode} />
        </React.Fragment>
      );
    } else {
      return <Error />;
    }
  }

  static async getInitialProps(router) {
    const gameCode = router.query.gameCode as string;
    const gameDef: IGameDef = getGameDefinition(gameCode);
    if (!gameDef && router.res) {
      router.res.statusCode = 404;
      router.res.end();
    }
    const mode = router.query.mode as GameMode;
    return { gameDef, gameCode, mode };
  }
}
