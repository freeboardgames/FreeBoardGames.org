import * as React from 'react';
import { IGameArgs } from 'components/App/Game/GameBoardWrapper';
import { GameLayout } from 'components/App/Game/GameLayout';
import { Ctx } from 'boardgame.io';
import { IG } from './game';
import { Scoreboard } from './Scoreboard';
import { PlayerHand } from './PlayerHand';
import { Phases, getScoreBoard, HighestBid } from './game';
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
  _gs = () => { this.props.moves.GameStart(this.props.playerID == null); }

  render() {
    console.log(this.props.ctx);
    console.log(this.props.G);

    if (this.props.ctx.gameover) {
      return <GameLayout
        gameOver={this._getGameOver()}
        extraCardContent={this._getScoreBoard()}
        gameArgs={this.props.gameArgs}
        />;
    }

    return (
      <GameLayout gameArgs={this.props.gameArgs} allowWiderScreen={true}>
        <div className={css.board}>
        <PlayerBadges
          scores={getScoreBoard(this.props.G)}
          playerID={this.props.playerID}
          players={this.props.gameArgs.players}
          ctx={this.props.ctx}
        />
        <div className={css.tableau}>
          {this.getDeck()}
          {this.getStartGameButton()}
          <div className={css.cards}>
            {this.getCardsOnTable()}
          </div>
        </div>
        { this.getBidPanel() }
        <PlayerHand
          playerIndex={parseInt(this.props.playerID ?? this.props.ctx.currentPlayer)}
          player={this.props.G.players[this.props.playerID ?? this.props.ctx.currentPlayer]}
          selectCard={((this.props.ctx.phase && this.props.ctx.phase.includes(Phases.property_selection))) ? this._selectCard.bind(this) : null}
          />
        </div>
      </GameLayout>
    );
  }

  getStartGameButton(){
    if (this.props.ctx.phase == null){
      if (this.props.playerID == this.props.ctx.currentPlayer || this.props.playerID == null)    
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
          currentHighBid={HighestBid(this.props.G.players)}
          />
      );
    }
  }

  getDeck(){
    if (this.props.ctx.phase == Phases.auction){
      return (
        <DeckComponent cards={this.props.G.buildings} numCardsPerRound={this.props.ctx.numPlayers} />
      )
    } else if (this.props.ctx.phase && this.props.ctx.phase.includes(Phases.property_selection)){
      return (
        <DeckComponent cards={this.props.G.checks} numCardsPerRound={this.props.ctx.numPlayers} />
      )
    }
  }

  getCardsOnTable() {
    return [...this.props.G.cardsontable]
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

  _selectCard(playerIndex:number, i:number) {
    console.log("Player "+(playerIndex+1)+" selected building: ", i);
    this.props.moves.MoveSelectBuilding(playerIndex, i);
  }

  _getStatus() {
    if (isOnlineGame(this.props.gameArgs) || isAIGame(this.props.gameArgs)) {
      if (!this._canPlay()) {
        return 'Waiting for opponents...';
      }
      if (this.props.ctx.phase && this.props.ctx.phase.includes(Phases.property_selection)) {
        return 'Select Building';
      }
      return 'Bid or Pass';
    }
    const player:number = parseInt(this.props.ctx.currentPlayer);

    return "Player "+(player+1)+"'s Turn";
  }

  _canPlay() {
    if (this.props.ctx.phase && this.props.ctx.phase.includes(Phases.property_selection)) {
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
      />
    );
  }

  _getGameOver() {
    const winner = this.props.ctx.gameover.winner;
    if (this.props.ctx.gameover.winner !== undefined) {
      if (this.props.playerID){
        if (this.props.ctx.gameover.winner === this.props.playerID) {
          return 'you won';
        } else {
          return 'you lost';
        }
      }
      return "Player "+(parseInt(this.props.ctx.gameover.winner)+1)+' won';
    }
    return "it is a tie"
  }
}
