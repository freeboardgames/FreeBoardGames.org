import React from 'react';
import { GAMES_LIST, IGameDef } from 'games';
import { GameCard } from './Game/GameCard';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import SearchBox from './SearchBox';
import { DesktopView, MobileView } from 'components/DesktopMobileView';

interface State {
  searchQuery?: string;
}

export class GamesList extends React.Component<{}, State> {
  state = { searchQuery: '' };

  render() {
    const { searchQuery } = this.state;
    let gamesList: JSX.Element[];
    let filteredGamesList: IGameDef[];

    if (searchQuery) {
      const searchQueryL = searchQuery.toLowerCase();
      filteredGamesList = GAMES_LIST.filter((game) => {
        const nameL = game.name.toLowerCase();
        const descL = game.description.toLowerCase();
        const descTagL = game.descriptionTag.toLowerCase();
        if (nameL.includes(searchQueryL)) return true;
        if (descL.includes(searchQueryL)) return true;
        if (descTagL.includes(searchQueryL)) return true;
      });
    } else {
      filteredGamesList = GAMES_LIST;
    }

    gamesList = filteredGamesList.map((game) => (
      <Link href={`/play/[gameCode]`} as={`/play/${game.code}`} key={game.code}>
        <a style={{ textDecoration: 'none', flex: 1, minWidth: '300px', maxWidth: '380px', margin: '8px' }}>
          <GameCard game={game} isLink={true} />
        </a>
      </Link>
    ));
    return (
      <div style={{ marginBottom: '16px' }}>
        <DesktopView>
          <div style={{ display: 'inline' }}>
            <SearchBox handleSearchOnChange={this._handleSearchOnChange} style={{ float: 'right', width: '235px' }} />
            <Typography component="h2" variant="h6" style={{ marginBottom: '16px', marginLeft: '6px' }}>
              Games
            </Typography>
          </div>
        </DesktopView>

        <MobileView>
          <Typography component="h2" variant="h6" style={{ marginBottom: '16px', marginLeft: '6px' }}>
            Games
          </Typography>
          <SearchBox handleSearchOnChange={this._handleSearchOnChange} />
        </MobileView>
        <div style={{ margin: '0 4px', display: 'flex', flexWrap: 'wrap' }}>{gamesList}</div>
      </div>
    );
  }
  _handleSearchOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    this.setState({ searchQuery });
  };
}
