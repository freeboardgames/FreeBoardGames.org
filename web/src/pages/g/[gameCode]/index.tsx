import React from 'react';
import { Router } from 'infra/i18n';
import { IGameDef } from 'gamesShared/definitions/game';
import { GAMES_MAP } from 'games';
import { generatePageError } from 'next-with-error';
import { play } from 'infra/navigation';

export default class G extends React.Component {
  static async getInitialProps({ req, res, query }) {
    const gameCode = query.gameCode as string;
    const gameDef: IGameDef = GAMES_MAP[gameCode];
    if (!gameDef && res) {
      return generatePageError(404);
    }
    const redirectTo = play(gameDef)(req.language);
    if (res) {
      res.writeHead(301, { Location: redirectTo });
      res.end();
    } else {
      Router.push(redirectTo);
    }
    return {};
  }
}
