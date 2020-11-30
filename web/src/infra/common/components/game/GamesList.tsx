import React from 'react';
import { GAMES_LIST } from 'games';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import { GameCard } from './GameCard';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import SearchBox from './SearchBox';
import { DesktopView, MobileView } from 'infra/common/device/DesktopMobileView';
import css from './GamesList.css';

interface State {
  searchQuery?: string;
}

interface Props {
  showDevOnly?: boolean;
  gamePickedCallback?: (game: IGameDef) => void;
  hideHeader?: boolean;
}

export class GamesList extends React.Component<Props, State> {
  state = { searchQuery: '' };

  render() {
    if (this.props.hideHeader) {
      return this.renderGames();
    }
    return (
      <div style={{ marginBottom: '16px' }}>
        <DesktopView>
          <div style={{ display: 'inline' }}>
            <SearchBox handleSearchOnChange={this._handleSearchOnChange} style={{ float: 'right', width: '235px' }} />
            <Typography component="h2" variant="h6" style={{ marginBottom: '16px', marginLeft: '6px' }}>
              {this.getTitle()}
            </Typography>
          </div>
        </DesktopView>

        <MobileView>
          <Typography component="h2" variant="h6" style={{ marginBottom: '16px', marginLeft: '6px' }}>
            {this.getTitle()}
          </Typography>
          <SearchBox handleSearchOnChange={this._handleSearchOnChange} />
        </MobileView>
        {this.renderGames()}
      </div>
    );
  }

  renderGames() {
    const { searchQuery } = this.state;
    let gamesList: React.ReactNode[];
    let filteredGamesList: IGameDef[];

    filteredGamesList = this.getFilteredGamesList();

    if (searchQuery) {
      const searchQueryL = searchQuery.toLowerCase();
      filteredGamesList = filteredGamesList.filter((game) => {
        const nameL = game.name.toLowerCase();
        const descL = game.description.toLowerCase();
        const descTagL = game.descriptionTag.toLowerCase();
        if (nameL.includes(searchQueryL)) return true;
        if (descL.includes(searchQueryL)) return true;
        if (descTagL.includes(searchQueryL)) return true;
      });
    }

    gamesList = filteredGamesList.map((game) => this.renderGameCard(game));
    return <div style={{ margin: '0 4px', display: 'flex', flexWrap: 'wrap' }}>{gamesList}</div>;
  }

  _handleSearchOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    this.setState({ searchQuery });
  };

  getTitle() {
    return this.props.showDevOnly ? 'Games In Development' : 'Games';
  }

  renderGameCard(game: IGameDef) {
    if (this.props.gamePickedCallback) {
      return (
        <a className={css.Card} onClick={this.onClick(game)} key={game.code}>
          <GameCard game={game} isLink={true} />
        </a>
      );
    } else {
      return (
        <Link href={`/play/[gameCode]`} as={`/play/${game.urlName || game.code}`} key={game.code}>
          <a className={css.Card}>
            <GameCard game={game} isLink={true} />
          </a>
        </Link>
      );
    }
  }
  getFilteredGamesList() {
    const status = this.props.showDevOnly ? IGameStatus.IN_DEVELOPMENT : IGameStatus.PUBLISHED;
    return GAMES_LIST.filter((gameDef) => gameDef.status === status);
  }

  onClick = (game: IGameDef) => () => {
    this.props.gamePickedCallback(game);
  };
}
