import React from 'react';
import Router from 'next/router';
import { IGameDef } from 'gamesShared/definitions/game';
import { GAMES_MAP } from 'games';
import { generatePageError } from 'next-with-error';

export default class extends React.Component {
  static async getInitialProps({ res, query }) {
    // our old URL scheme had the gameCode in place of the roomID, so capture that:
    const gameCode = query.roomID as string;
    const gameDef: IGameDef = GAMES_MAP[gameCode];
    if (!gameDef && res) {
      return generatePageError(404);
    }
    // if the gamecode exists, redirect them to the gameinfo page:
    const redirectTo = `/play/${gameCode}`;
    if (res) {
      res.writeHead(302, {
        Location: redirectTo,
      });
      res.end();
    } else {
      Router.push(redirectTo);
    }
    return {};
  }
}
