import React from 'react';
import { GameMode } from '../../../../components/App/Game/GameModePicker';
import dynamic from 'next/dynamic';
import { IGameDef, GAMES_MAP } from '../../../../games';
import Error from '../../../_error';

const GameWrapper = dynamic(import('../../../../components/App/Game/Game'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

interface AILocalGameProps {
  gameCode: string;
  gameDef: IGameDef;
  mode: string;
}

export default class extends React.Component<AILocalGameProps, {}> {
  render() {
    if (!this.props.gameDef) {
      return <Error />;
    }
    return <GameWrapper mode={this.props.mode} gameCode={this.props.gameCode} matchCode={this.props.mode} />;
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
