import * as React from 'react';
import { Ctx } from 'boardgame.io';
import { IGameArgs } from 'gamesShared/definitions/game';
import { Suit, Pattern, ICard } from 'gamesShared/definitions/cards';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Hand } from 'gamesShared/components/cards/Hand';
import { PreviousTrick, SuitSymbols } from 'gamesShared/components/cards/PreviousTrick';
import { DisplayCard } from 'gamesShared/components/cards/DisplayCard';
import { Trick } from 'gamesShared/components/cards/Trick';
import { ButtonBar } from 'gamesShared/components/cards/ButtonBar';
import { PlayerZones } from 'gamesShared/components/cards/PlayerZones';
import { RoundScores } from 'gamesShared/components/cards/RoundScores';
import { IScore, Scoreboard } from 'gamesShared/components/scores/Scoreboard';
import { isLocalGame } from 'gamesShared/helpers/gameMode';
import { useCurrentGameTranslation } from 'infra/i18n';

import css from './board.module.css';

import { Contract, Call, Phases, Stages, IGameMoves, IG } from './types';
import * as util from './util/misc';
import * as u_placement from './util/placement';

export function BgioBoard(props: { G: IG; ctx: Ctx; moves: IGameMoves; playerID: string; gameArgs?: IGameArgs }) {
  const { translate } = useCurrentGameTranslation();
  const [selContr_i, setSelContr_i] = React.useState(0);
  const spectatorMode = !props.playerID && !isLocalGame(props.gameArgs);

  const G = props.G;
  const ctx = props.ctx;
  const moves = props.moves;
  const playerID = isLocalGame(props.gameArgs) ? ctx.currentPlayer : props.playerID || G.players[0].id;
  const player = util.getPlayerById(G, playerID);
  const playerIsDeclarer = [G.declarerId, G.partnerId].includes(player.id);
  const playerPhase = ctx.currentPlayer === playerID && ctx.phase;
  const playerStage = ctx.activePlayers && ctx.activePlayers[playerIndex()];
  const playerNames = G.players.map((P) => playerName(P.id));
  const showRoundSummary = ctx.phase == Phases.round_end && G.roundSummaries.length > 0;

  const openingDone = ctx.phase == Phases.placement && (G.resolvedTricks.length > 0 || G.trick.cards.length > 0);
  let prevTrick = G.trick;
  if (G.resolvedTricks.length > 0 && G.trick.cards.length == 0) {
    prevTrick = G.resolvedTricks[G.resolvedTricks.length - 1];
  }

  const handSize = 13;
  const cmpCards = util.get_cmpCards(G.contract?.trumps);
  const playerHands = G.players.map((P, i) => {
    if (ctx.phase == Phases.round_end) {
      return G.deck.slice(i * handSize, (i + 1) * handSize).sort(cmpCards);
    } else {
      return openingDone && P.id == G.partnerId ? P.hand : P.hand.map(() => null);
    }
  });

  function renderBoard() {
    return (
      <GameLayout gameArgs={props.gameArgs} maxWidth="1500px">
        <div className={css.board}>
          <div className={css.upperBoard}>
            {renderDummyHand()}
            {renderRoundScores()}
            {renderTrumpSuit()}
            {renderPrevTrick()}
            {renderPlayerZones()}
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
    if (playerPhase == Phases.placement && playerID != G.partnerId) {
      selectableCards = u_placement.selectableCards(G, playerID);
    }
    return (
      <Hand
        hand={ctx.phase == Phases.round_end ? playerHands[+playerID] : player.hand}
        pattern={Pattern.English}
        selectable={selectableCards}
        selection={[]}
        selectCards={playerPhase == Phases.placement ? moves.SelectCards : null}
      />
    );
  }

  function renderDummyHand() {
    if (spectatorMode || player.id != G.declarerId || !openingDone) return;

    let selectableCards: boolean[] = player.hand.map(() => false);
    if (playerStage == Stages.select_dummy_card) {
      selectableCards = u_placement.selectableCards(G, G.partnerId);
    }
    let onClick = moves.SelectDummyCards;
    if (playerStage != Stages.select_dummy_card) {
      onClick = null;
    }
    return (
      <div className={css.dummyHand}>
        <Hand
          hand={playerHands[+G.partnerId]}
          pattern={Pattern.English}
          selectable={selectableCards}
          selection={[]}
          selectCards={onClick}
          placement={'top'}
        />
      </div>
    );
  }

  function renderContract(contract: Contract) {
    if (!contract) {
      return <>{'ERR'}</>;
    }
    if (contract.trumps === null) {
      return <>{`${contract.value}NT`}</>;
    }
    return (
      <>
        {contract.value}
        {SuitSymbols[Suit[contract.trumps]]}
      </>
    );
  }

  function renderRoundScores() {
    const roundSummaries = G.roundSummaries.map((summary) => {
      const playerRoles = G.players.map((P) => {
        return P.id == summary.declarerId || P.id == summary.partnerId;
      });
      const playerKeys = playerNames.map((_, i) => i);
      const rPlayers = playerKeys.filter((i) => playerRoles[i]).concat(playerKeys.filter((i) => !playerRoles[i]));
      const nTricks = rPlayers.map((i) => {
        const reTricks = summary.reTricks;
        if (playerRoles[i]) {
          return (
            <>
              {reTricks} ({6 + summary.contract.value})
            </>
          );
        } else {
          return <>{13 - reTricks}</>;
        }
      });
      const honorsBonus = rPlayers.map((i) => {
        if (isNone(summary.honorsBonus)) {
          return '-';
        }
        const bonus = Math.abs(summary.honorsBonus);
        const isPositive = summary.honorsBonus > 0;
        return playerRoles[i] == isPositive ? `${bonus}` : '-';
      });
      return {
        players: rPlayers,
        scoring: rPlayers.map((i) => summary.scoring[i].toString()),
        details: [
          {
            description: translate('scoreboard_tricks'),
            values: nTricks,
          },
          {
            description: translate('scoreboard_contractpoints'),
            values: rPlayers.map((i) =>
              playerRoles[i] && !isNone(summary.contractPoints) ? `${summary.contractPoints}` : '-',
            ),
          },
          {
            description: translate('scoreboard_overtricks'),
            values: rPlayers.map((i) =>
              playerRoles[i] && !isNone(summary.overtrickBonus) ? `${summary.overtrickBonus}` : '-',
            ),
          },
          {
            description: translate('scoreboard_slam'),
            values: rPlayers.map((i) => (playerRoles[i] && !isNone(summary.slamBonus) ? `${summary.slamBonus}` : '-')),
          },
          {
            description: translate('scoreboard_double'),
            values: rPlayers.map((i) =>
              playerRoles[i] && !isNone(summary.doubleBonus) ? `${summary.doubleBonus}` : '-',
            ),
          },
          {
            description: translate('scoreboard_honors'),
            values: honorsBonus,
          },
          {
            description: translate('scoreboard_penalty'),
            values: rPlayers.map((i) =>
              !playerRoles[i] && !isNone(summary.penaltyBonus) ? `${-summary.penaltyBonus}` : '-',
            ),
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

  function renderPrevTrick() {
    const inGame = prevTrick.cards.length > 0;
    if (!inGame) return;
    return (
      <PreviousTrick
        trick={prevTrick.cards}
        pattern={Pattern.English}
        leaderPos={+prevTrick.leaderId}
        currPos={+playerID}
        numPlayers={G.players.length}
        isKitty={false}
      />
    );
  }

  function renderTrumpSuit() {
    if (ctx.phase == Phases.bidding || !G.contract || G.contract.trumps === null) return;
    const trumpCard: ICard = { suit: G.contract.trumps, value: 1 };
    return <DisplayCard description={translate('trumpsuit')} card={trumpCard} pattern={Pattern.English} />;
  }

  function renderTrick() {
    const trick = G.trick.cards.length > 0 ? G.trick : prevTrick;
    return (
      <Trick
        trick={trick ? trick.cards : []}
        pattern={Pattern.English}
        leaderPos={trick && trick.leaderId ? +trick.leaderId : 0}
        winnerPos={trick && trick.winnerId ? +trick.winnerId : -1}
        currPos={+playerID}
        numPlayers={G.players.length}
      />
    );
  }

  function renderButtonBar() {
    if (spectatorMode) return;
    const buttons = [renderButtonsBid(), renderButtonsFinish()].filter((b) => b);
    return buttons.length > 0 ? buttons[0] : null;
  }

  function renderButtonsBid() {
    if (playerPhase != Phases.bidding) return;

    const allowed_contracts = util.allowedContracts(G.contract);
    const selContr = allowed_contracts[selContr_i];

    let texts: (JSX.Element | string)[] = [translate('bid_pass')];
    let click = [
      () => {
        moves.MakeBid(Call.Pass);
        setSelContr_i(0);
      },
    ];

    if (G.contract !== null) {
      if (!playerIsDeclarer && G.doubling == 1) {
        texts.push(translate('bid_double'));
        click.push(() => moves.MakeBid(Call.Double));
      } else if (playerIsDeclarer && G.doubling == 2) {
        texts.push(translate('bid_redouble'));
        click.push(() => moves.MakeBid(Call.Redouble));
      }
    }

    texts = texts.concat(['<', renderContract(selContr), '>']);
    click = click.concat([
      selContr_i <= 0 ? null : () => setSelContr_i(selContr_i - 1),
      () => {
        moves.MakeBid(selContr);
        setSelContr_i(0);
      },
      selContr_i >= allowed_contracts.length ? null : () => setSelContr_i(selContr_i + 1),
    ]);

    let red = Array(click.length).fill(false);
    red[0] = true;

    return <ButtonBar click={click} texts={texts} red={red} />;
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
      if (ctx.phase == Phases.placement) {
        if (P.id == G.partnerId) {
          return false;
        }
        if (P.id == G.declarerId && currentPlayerId == G.partnerId) {
          return true;
        }
      }
      return (!currentPlayerId && !P.isReady) || P.id === currentPlayerId;
    });
    const isBidPhase = ctx.phase == Phases.bidding;
    const biddingEnded = !isBidPhase;
    const bidStrings = G.players.map((P) => {
      return (
        <>
          {P.bids
            .slice()
            .reverse()
            .map((B, i) => {
              let el = <></>;
              if (typeof B !== 'number') {
                el = renderContract(B);
              } else if (B == Call.Pass) {
                el = <>{'Pass'}</>;
              } else if (B == Call.Double) {
                el = <>{'X'}</>;
              } else if (B == Call.Redouble) {
                el = <>{'XX'}</>;
              }
              if (i < P.bids.length - 1) {
                el = (
                  <>
                    {el}
                    {', '}
                  </>
                );
              }
              return el;
            })}
        </>
      );
    });
    const roundEnded = currentLeaderId == '';
    const hands = playerHands.map((H, i) => {
      if (spectatorMode) return H;
      const P = G.players[i];
      const partnerHandShown = G.declarerId == playerID && openingDone;
      if (P.id == playerID || (P.id == G.partnerId && partnerHandShown)) {
        return null;
      }
      return H;
    });
    return (
      <PlayerZones
        currentPlayerId={currentPlayerId}
        perspectivePlayerId={playerID}
        currentLeaderId={currentLeaderId}
        bids={bidStrings}
        bidPass={G.players.map((P) => P.id != G.declarerId)}
        bidding={G.players.map(() => -1)}
        announcements={G.players.map(() => null)}
        names={playerNames}
        hands={hands}
        handExposed={G.players.map((P) => openingDone && P.id == G.partnerId)}
        pattern={Pattern.English}
        isActive={isActive}
        markActive={isActive.map((active) => biddingEnded && !roundEnded && active)}
        isDealer={G.players.map((P) => !roundEnded && P.isDealer)}
        isTaker={G.players.map((P) => biddingEnded && P.isDeclarer)}
        isOpponent={G.players.map((P) => biddingEnded && !P.isDeclarer)}
        isLeader={G.players.map((P) => !roundEnded && biddingEnded && P.id === currentLeaderId)}
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
