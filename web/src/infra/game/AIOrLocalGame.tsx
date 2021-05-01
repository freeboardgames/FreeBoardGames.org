import React from 'react';
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef } from 'gamesShared/definitions/game';
import dynamic from 'next/dynamic';
import { GAMES_MAP } from 'games';
import Error from 'pages/_error';
import SEO from 'infra/common/helpers/SEO';

const GameWrapper = dynamic(import('infra/game/Game'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
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
    const gameDef: IGameDef = GAMES_MAP[gameCode];
    if (!gameDef && router.res) {
      router.res.statusCode = 404;
      router.res.end();
    }
    const mode = router.query.mode as GameMode;
    return { gameDef, gameCode, mode };
  }
}
