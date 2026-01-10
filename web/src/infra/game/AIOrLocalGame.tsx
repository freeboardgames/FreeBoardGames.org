import { IGameDef } from 'gamesShared/definitions/game';
import { GameMode } from 'gamesShared/definitions/mode';
import { LoadingMessage } from 'infra/common/components/alert/LoadingMessage';
import SEO from 'infra/common/helpers/SEO';
import { TGameCode } from 'infra/types';
import dynamic from 'next/dynamic';
import Error from 'next/error';
import React from 'react';

const Game = dynamic(import('infra/game/Game'), {
  ssr: false,
  loading: LoadingMessage,
});

interface AILocalGameProps {
  gameCode: TGameCode;
  gameDef: IGameDef;
  mode: GameMode.AI | GameMode.LocalFriend;
}

export default class AILocalGame extends React.Component<AILocalGameProps, object> {
  render() {
    if (this.props.gameDef) {
      return (
        <React.Fragment>
          <SEO noindex={true} />
          <Game mode={this.props.mode} gameCode={this.props.gameCode} />
        </React.Fragment>
      );
    } else {
      return <Error statusCode={404} />;
    }
  }
}
