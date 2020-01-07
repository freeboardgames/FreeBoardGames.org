import React from 'react';
import FreeBoardGamesBar from '../../../components/App/FreeBoardGamesBar';
import { GameCard } from '../../../components/App/Game/GameCard';
import { GameModePicker } from '../../../components/App/Game/GameModePicker';
import { GameInstructions } from '../../../components/App/Game/GameInstructions';
import { IGameDef, GAMES_MAP } from '../../../games';
import { withRouter } from 'next/router';
import { generatePageError } from 'next-with-error';
import SEO from '../../../components/SEO';

interface gameInfoProps {
  gameDef: IGameDef;
}

class GameInfo extends React.Component<gameInfoProps, {}> {
  render() {
    const gameDef = this.props.gameDef;
    return (
      <FreeBoardGamesBar>
        <SEO title={`Play ${gameDef.name}, ${gameDef.description}`} description={gameDef.descriptionTag} />
        <GameCard game={gameDef} />
        <GameModePicker gameDef={gameDef} />
        <GameInstructions gameDef={gameDef} />
      </FreeBoardGamesBar>
    );
  }
  static async getInitialProps(router) {
    const gameCode = router.query.gameCode as string;
    const gameDef: IGameDef = GAMES_MAP[gameCode];
    if (!gameDef && router.res) {
      return generatePageError(404);
    }
    return { gameDef };
  }
}

export default withRouter(GameInfo as any);
