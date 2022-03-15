/* eslint-disable react/prop-types */
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import { getAllGames } from 'infra/game';
import { play } from 'infra/navigation';
import React, { Fragment, useMemo, useState } from 'react';
import { GameCard } from './GameCard';
import { Container, Games, Header, Navigable } from './GamesList.ui';
import SearchBox from './SearchBox';

interface Props {
  showDevOnly?: boolean;
  gamePickedCallback?: (game: IGameDef) => void;
  hideHeader?: boolean;
}

export function GamesList({ hideHeader, showDevOnly, gamePickedCallback }: Props) {
  const [query, setQuery] = useState('');
  const games = useFilteredGamesList(query, { showDevOnly });

  const Wrapper = hideHeader ? Fragment : Container;

  return (
    <Wrapper>
      <Header showDevOnly={showDevOnly}>
        <SearchBox onInputChange={(value: string) => setQuery(value)} />
      </Header>
      <Games>
        {games.map((game) => (
          <Navigable key={game.code} href={play(game)} onClick={gamePickedCallback?.bind(null, game)}>
            <GameCard game={game} isLink={true} />
          </Navigable>
        ))}
      </Games>
    </Wrapper>
  );
}

function useFilteredGamesList(searchQuery: string, options: { showDevOnly?: boolean }) {
  return useMemo(() => {
    const status = options.showDevOnly ? IGameStatus.IN_DEVELOPMENT : IGameStatus.PUBLISHED;
    return getAllGames().filter((game) => {
      if (searchQuery) {
        return [
          game?.code,
          ...Object.values(game?.codes || []),
          game.name.toLowerCase(),
          game.description.toLowerCase(),
          game.descriptionTag.toLowerCase(),
        ].some((text) => text.includes(searchQuery.toLowerCase()));
      }
      return game.status === status;
    });
  }, [searchQuery, options.showDevOnly]);
}
