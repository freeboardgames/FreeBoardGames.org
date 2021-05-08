import React from 'react';
import { Router } from 'infra/i18n';
import { IGameDef } from 'gamesShared/definitions/game';
import { generatePageError } from 'next-with-error';
import { play } from 'infra/navigation';
import { getGameDefinition } from 'infra/game';

export default class LegacyRoom extends React.Component {
  static async getInitialProps({ req, res, query }) {
    // our old URL scheme had the gameCode in place of the roomID, so capture that:
    const gameCode = query.roomID as string;
    const gameDef: IGameDef = getGameDefinition(gameCode);
    if (!gameDef && res) {
      return generatePageError(404);
    }
    // if the gamecode exists, redirect them to the gameinfo page:
    const redirectTo = play(gameDef)(req.language);
    if (res) {
      res.writeHead(302, { Location: redirectTo });
      res.end();
    } else {
      Router.push(redirectTo);
    }
    return {};
  }
}
