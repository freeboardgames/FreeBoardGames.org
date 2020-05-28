import * as React from 'react';
import { IGameArgs } from 'components/App/Game/GameBoardWrapper';
import { GameLayout } from 'components/App/Game/GameLayout';
import { Ctx } from 'boardgame.io';
import { IG } from './game';
import { Scoreboard } from './Scoreboard';
import { PlayerHand } from './PlayerHand';
import { Phases, getScoreBoard } from './game';
import { ButtonComponent } from './ButtonComponent';
import { BidPanelComponent } from './BidPanelComponent';
import ICard from './card';
import { MoneyCardComponent, BuildingCardComponent } from './CardComponent';
import { PlayerBadges } from './PlayerBadges';
import { isOnlineGame, isLocalGame, isAIGame } from '../common/gameMode';

import css from './Board.css';
import { DeckComponent } from './DeckComponent';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps> {
  _gs = () => { this.props.moves.GameStart(); }

  render() {
    console.log(this.props.ctx);
    console.log(this.props.G);

    if (this.props.ctx.gameover) {
      return <GameLayout gameOver={this._getGameOver()} gameArgs={this.props.gameArgs} />;
    }

    return (
      <GameLayout gameArgs={this.props.gameArgs} allowWiderScreen={true}>
        <PlayerBadges
          scores={getScoreBoard(this.props.G)}
          playerID={this.props.playerID}
          players={this.props.gameArgs.players}
          ctx={this.props.ctx}
        />
        {this.getStartGameButton()}
        <div className={css.tableau}>
          {this.getDeck()}
          <div className={css.cards}>
            {this.getCardsOnTable()}
          </div>
        </div>
        { this.getBidPanel() }
        <PlayerHand
          player={this.props.G.players[this.props.playerID ?? this.props.ctx.currentPlayer]}
          selectCard={(this.props.ctx.phase == Phases.property_selection) ? this._selectCard.bind(this) : null}
          />
        <div className={css.statusBar}>
          {this._getStatus()}
        </div>
      </GameLayout>
    );
  }

  getStartGameButton(){
    if (this.props.ctx.phase == null){
      return (
        <div className={css.startButtonContainer}>
          <ButtonComponent click={this._gs}>START GAME</ButtonComponent>
        </div>
      );
    }
  }

  getBidPanel(){
    if (this.props.ctx.phase == Phases.auction){
      return (
        <BidPanelComponent
          players={this.props.G.players}
          currentPlayer={this.props.ctx.currentPlayer}
          moves={this.props.moves}
          playerID={this.props.playerID}
          />
      );
    }
  }

  getDeck(){
    if (this.props.ctx.phase == Phases.auction){
      return (
        <DeckComponent cards={this.props.G.buildings} />
      )
    } else if (this.props.ctx.phase == Phases.property_selection){
      return (
        <DeckComponent cards={this.props.G.checks} />
      )
    }
  }

  getCardsOnTable() {
    return [...this.props.G.cardsontable]
      .sort((a: ICard, b: ICard) => (a.value - b.value))
      .map((card: any, index:number) => {
        const ComponentTag:any = (card.building) ? BuildingCardComponent : MoneyCardComponent;
        
        return (
          <div className={css.cardContainer} key={card.number}>
            <ComponentTag
              card={card}
            />
          </div>
        );
      });
  };

  _selectCard(i:number) {
    console.log("Player selected building: ", i);
    this.props.moves.MoveSelectBuilding(i);
  }

  _getStatus() {
    if (isOnlineGame(this.props.gameArgs) || isAIGame(this.props.gameArgs)) {
      if (!this._canPlay()) {
        return 'Waiting for opponents...';
      }
      if (this.props.ctx.phase === Phases.property_selection) {
        return 'Select Building';
      }
      return 'Bid or Pass';
    }
    const player:number = parseInt(this.props.ctx.currentPlayer);

    return "Player "+(player+1)+"'s Turn";
  }

  _canPlay() {
    if (this.props.ctx.phase === Phases.property_selection) {
      return (
        this.props.ctx.activePlayers !== null &&
        Object.keys(this.props.ctx.activePlayers)?.includes(this.props.playerID)
      );
    } else {
      return this.props.playerID === this.props.ctx.currentPlayer;
    }
  }

  _getScoreBoard() {
    return (
      <Scoreboard
        scoreboard={getScoreBoard(this.props.G)}
        playerID={this.props.playerID}
        players={this.props.gameArgs.players}
        scoreName="Penalty points"
      />
    );
  }

  _getGameOver() {
    const winner = this.props.ctx.gameover.winner;
    if (winner) {
      if (isLocalGame(this.props.gameArgs)) {
        return "Someone won TODO"  ;
      }
    }
  }
}
