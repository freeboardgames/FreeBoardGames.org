import * as React from 'react';
import { Ctx } from 'boardgame.io';
import { IGameArgs } from 'gamesShared/definitions/game';
import { Pattern, Suit } from 'gamesShared/definitions/cards';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Hand } from 'gamesShared/components/cards/Hand';
import { Card } from 'gamesShared/components/cards/Card';
import { Trick } from 'gamesShared/components/cards/Trick';
import { ButtonBar } from 'gamesShared/components/cards/ButtonBar';
import { PlayerZones } from 'gamesShared/components/cards/PlayerZones';
import { RoundScores } from 'gamesShared/components/cards/RoundScores';
import { IScore, Scoreboard } from 'gamesShared/components/scores/Scoreboard';
import { isLocalGame } from 'gamesShared/helpers/gameMode';
import { useCurrentGameTranslation } from 'infra/i18n';

import css from './board.module.css';

import { Phases, IGameMoves, IG } from './types';
import * as util from './util/misc';
import * as u_placement from './util/placement';

export function BgioBoard(props: { G: IG; ctx: Ctx; moves: IGameMoves; playerID: string; gameArgs?: IGameArgs }) {
  const { translate } = useCurrentGameTranslation();
  const spectatorMode = !props.playerID && !isLocalGame(props.gameArgs);

  const G = props.G;
  const ctx = props.ctx;
  const moves = props.moves;
  const playerID = isLocalGame(props.gameArgs) ? ctx.currentPlayer : props.playerID || G.players[0].id;
  const player = util.getPlayerById(G, playerID);
  const playerPhase = ctx.currentPlayer === playerID && ctx.phase;
  const playerNames = G.players.map((P) => playerName(P.id));
  const showRoundSummary = ctx.phase == Phases.round_end && G.roundSummaries.length > 0;

  const handSize = 6;
  const cmpCards = util.get_cmpCards(G.trumpSuit);
  const playerHands = G.players.map((P, i) => {
    if (ctx.phase == Phases.round_end) {
      return G.deck.slice(i * handSize, (i + 1) * handSize).sort(cmpCards);
    } else {
      return P.hand.map(() => null);
    }
  });

  const SuitSymbols = {
    Spades: <>&#x2660;&#xFE0F;</>,
    Hearts: <>&#x2665;&#xFE0F;</>,
    Diamonds: <>&#x2666;&#xFE0F;</>,
    Clubs: <>&#x2663;&#xFE0F;</>,
  };

  function renderBoard() {
    return (
      <GameLayout gameArgs={props.gameArgs} maxWidth="1500px">
        <div className={css.board}>
          <div className={css.upperBoard}>
            {renderRoundScores()}
            {renderPlayerZones()}
            {renderStock()}
            {renderTrick()}
            {renderButtonBar()}
          </div>
          <div className={css.lowerBoard}>{renderHand()}</div>
        </div>
      </GameLayout>
    );
  }

  function renderHand() {
    if (spectatorMode) {
      return (
        <div className={css.spectatorMsg}>
          <span>You are in spectator mode.</span>
        </div>
      );
    }
    let selectableCards: boolean[] = player.hand.map(() => false);
    let canSelectCards = false;
    if (playerPhase == Phases.placement) {
      selectableCards = u_placement.selectableCards(G, playerID);
      canSelectCards = true;
    }
    const selectedCards = [];
    return (
      <Hand
        hand={ctx.phase == Phases.round_end ? playerHands[+player.id] : player.hand}
        pattern={Pattern.Skat}
        selectable={selectableCards}
        selection={selectedCards || []}
        selectCards={canSelectCards ? moves.SelectCards : null}
      />
    );
  }

  function renderRoundScores() {
    const roundSummaries = G.roundSummaries.map((summary) => {
      const playerRoles = G.players.map((P) => P.id == summary.winnerId);
      const playerKeys = playerNames.map((_, i) => i);
      const players = playerKeys.filter((i) => playerRoles[i]).concat(playerKeys.filter((i) => !playerRoles[i]));
      return {
        players: players,
        scoring: players.map((i) => summary.scoring[i].toString()),
        details: [
          {
            description: translate('scoreboard_points'),
            values: players.map((i) => `${summary.points[i]}`),
          },
          {
            description: translate('scoreboard_schneider'),
            values: players.map((i) => (playerRoles[i] && !isNone(summary.schneider) ? `${summary.schneider}` : '-')),
          },
          {
            description: translate('scoreboard_schwarz'),
            values: players.map((i) => (playerRoles[i] && !isNone(summary.schwarz) ? `${summary.schwarz}` : '-')),
          },
          {
            description: translate('scoreboard_againstclose'),
            values: players.map((i) =>
              playerRoles[i] && !isNone(summary.againstClose) ? `${summary.againstClose}` : '-',
            ),
          },
          {
            description: translate('scoreboard_againstout'),
            values: players.map((i) => (playerRoles[i] && !isNone(summary.againstOut) ? `${summary.againstOut}` : '-')),
          },
        ],
      };
    });
    return (
      <RoundScores
        playerNames={playerNames}
        roundSummaries={roundSummaries}
        showRoundSummary={showRoundSummary}
        playerScores={G.players.map((p) => p.score)}
      />
    );
  }

  function renderStock() {
    const isRoundEnd = ctx.phase == Phases.round_end;
    let stock = isRoundEnd ? G.deck.slice(-12) : G.stock;
    if (!stock || stock.length === 0) return;
    return (
      <div className={[css.stock, isRoundEnd ? css.roundEnd : ''].join(' ')}>
        {stock.map((C, i) => {
          const isTrumpCard = i == 0 && (isRoundEnd || !G.closed);
          return (
            <div key={i} className={[css.cardContainer, isTrumpCard ? css.trumpCard : ''].join(' ')}>
              <Card pattern={Pattern.Skat} type={isRoundEnd || isTrumpCard ? C : null} height={150} />
            </div>
          );
        })}
      </div>
    );
  }

  function renderTrick() {
    const prevTrick = G.resolvedTricks.length > 0 ? G.resolvedTricks[G.resolvedTricks.length - 1] : G.trick;
    const trick = G.trick.cards.length > 0 ? G.trick : prevTrick;
    return (
      <Trick
        trick={trick ? trick.cards : []}
        pattern={Pattern.Skat}
        leaderPos={trick && trick.leaderId ? +trick.leaderId : 0}
        winnerPos={null}
        currPos={+player.id}
        numPlayers={G.players.length}
      />
    );
  }

  function renderButtonBar() {
    if (spectatorMode) return;
    const buttons = [renderButtonsTurn(), renderButtonsFinish()].filter((b) => b);
    return buttons.length > 0 ? buttons[0] : null;
  }

  function renderButtonsTurn() {
    if (playerPhase != Phases.placement || G.trick.cards.length != 0) return;
    let texts: (JSX.Element | string)[] = G.resolvedTricks.length > 0 ? [translate('button_out')] : [];
    let click = G.resolvedTricks.length > 0 ? [() => moves.GoOut()] : [];
    if (!G.closed) {
      if (player.hand.length < 6) {
        texts.push(translate('button_draw'));
        click.push(() => moves.DrawCards());
      }
      texts.push(translate('button_close'));
      click.push(() => moves.Close());
      if (player.hand.length == 6) {
        util
          .meldSuits(player.hand)
          .filter((S) => !player.melds.includes(S))
          .forEach((S) => {
            texts.push(
              <>
                {translate('button_meld')} {SuitSymbols[Suit[S]]}
              </>,
            );
            click.push(() => moves.Meld(S));
          });
      }
    }
    return <ButtonBar click={click} texts={texts} red={texts.map((_, i) => i == 0)} />;
  }

  function renderButtonsFinish() {
    if (player.isReady) return;
    return (
      <ButtonBar
        click={[() => moves.Finish(false), () => moves.Finish(true)]}
        texts={[translate('roundend_next'), translate('roundend_quit')]}
        red={[false, true]}
        below={true}
        noWrap={true}
      />
    );
  }

  function renderPlayerZones() {
    const currentPlayerId = showRoundSummary ? null : ctx.currentPlayer;
    const currentLeaderId = showRoundSummary ? '' : G.trick.leaderId;
    const isActive = G.players.map((P) => {
      return (!currentPlayerId && !P.isReady) || P.id === currentPlayerId;
    });
    const roundEnded = currentLeaderId == '';
    const announcements = G.players.map((P) => {
      if (G.exchanged9 == P.id) {
        return translate('announce_exchanged9');
      }
      const gameTime = util.gameTime(G) + (G.trick.cards.length == 1 ? 1 : 0);
      if (P.melds.length == 0 || G.lastMeldTime != gameTime) return null;
      const lastMeld = P.melds[P.melds.length - 1];
      const meldPoints = lastMeld == G.trumpSuit ? '(40)' : '(20)';
      return (
        <>
          {translate('announce_meld')} {SuitSymbols[Suit[lastMeld]]} {meldPoints}
        </>
      );
    });
    return (
      <PlayerZones
        currentPlayerId={currentPlayerId}
        perspectivePlayerId={player.id}
        currentLeaderId={currentLeaderId}
        bids={G.players.map(() => null)}
        bidPass={G.players.map(() => false)}
        bidding={G.players.map(() => -1)}
        announcements={announcements}
        announcementStyles={G.players.map(() => ({ color: 'black', backgroundColor: '#eee' }))}
        names={playerNames}
        hands={playerHands.map((H, i) => (G.players[i].id == playerID && !spectatorMode ? null : H))}
        pattern={Pattern.Skat}
        isActive={isActive}
        markActive={isActive.map((active) => !roundEnded && active)}
        isDealer={G.players.map((P) => !roundEnded && P.isDealer)}
        isTaker={G.players.map(() => false)}
        isOpponent={G.players.map(() => false)}
        isLeader={G.players.map((P) => !roundEnded && P.id === currentLeaderId)}
        scores={G.players.map((P) => P.score.toString())}
        clockwise={true}
      />
    );
  }

  function renderGameOver() {
    const scores: IScore[] = G.players.map((P) => ({ playerID: P.id, score: P.score }));
    scores.sort((a, b) => b.score - a.score);
    const player = G.players.find((P) => P.id === playerID);
    const scoreboard = <Scoreboard scoreboard={scores} players={props.gameArgs.players} playerID={ctx.playerID} />;
    return (
      <GameLayout
        gameOver={player.score >= scores[0].score ? translate('gameover_you_won') : translate('gameover_you_lost')}
        extraCardContent={scoreboard}
        gameArgs={props.gameArgs}
      />
    );
  }

  function playerIndex(id: string = playerID): number {
    return ctx.playOrder.indexOf(id);
  }

  function playerName(id: string = playerID): string {
    return props.gameArgs ? props.gameArgs.players[playerIndex(id)].name : translate('player_n', { n: id });
  }

  return ctx.gameover ? renderGameOver() : renderBoard();
}

function isNone(value: number): boolean {
  return isNaN(value) || value === null;
}
