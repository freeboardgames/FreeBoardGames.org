import * as React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { isOnlineGame } from 'gamesShared/helpers/gameMode';
import { isFirstPersonView } from 'gamesShared/helpers/GameUtil';

import { IG } from './interfaces';
import * as CNST from './constants';
import { PlayerInfo, IPlayerInfo } from './svgComponents/playerInfo';
import PlayStatus from './svgComponents/playStatus';
import { WithCurrentGameTranslation, withCurrentGameTranslation } from 'infra/i18n';
import { compose } from 'recompose';
import { snakeCase } from 'lodash';

interface IBoardInnerProps extends WithCurrentGameTranslation {}
interface IBoardOutterProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

interface IBoardState {
  hintKey: string | null;
}

export class BoardInternal extends React.Component<IBoardInnerProps & IBoardOutterProps, IBoardState> {
  constructor(props) {
    super(props);
    this.state = { hintKey: null };
  }

  // common helpers

  _getPlayerID = () => (isOnlineGame(this.props.gameArgs) ? this.props.playerID : this.props.ctx.currentPlayer);

  _isFirstPerson = () => isFirstPersonView(this.props.gameArgs, this.props.playerID);

  _isActivePlayer = (playerID = null) => {
    if (!this._isFirstPerson()) {
      return false;
    }
    var activePlayers = this.props.ctx.activePlayers !== null ? this.props.ctx.activePlayers : [];
    return (playerID === null ? parseInt(this._getPlayerID()) : playerID) in activePlayers;
  };

  _getPlayerName = (playerID = null) => {
    const { translate } = this.props;
    const pID = playerID === null ? parseInt(this._getPlayerID()) : playerID;
    return (this.props.gameArgs.players[pID] || { name: translate('player', { id: pID + 1 }) }).name;
  };

  _getPolicyText = (peek = false) => {
    const { translate } = this.props;
    if (peek) {
      return this.props.G.policyPeek
        .map((p) => (p.garlic ? translate('symbol.good_po') : translate('symbol.bad_po')))
        .join(' ');
    } else {
      return this.props.G.policyHand
        .map((p) => (p.garlic ? translate('symbol.good_po') : translate('symbol.bad_po')))
        .join(' ');
    }
  };

  _getGameOver = () => {
    const { translate } = this.props;
    if (!this.props.ctx.gameover) {
      return null;
    }
    if (this.props.ctx.gameover.win == true) {
      return translate('villagers_win');
    } else {
      return translate('vampires_win');
    }
  };

  _getItemInfoText = () => {
    const { translate } = this.props;
    const hintText = [translate('info')];
    switch (this.state.hintKey) {
      case 'vampirePolicy':
        hintText.push(
          ...this.props
            .translate('vampire_policy', {
              value: this.props.G.policyBoardVampire.length,
            })
            .split('\n'),
        );
        break;

      case 'villagerPolicy':
        hintText.push(
          ...this.props
            .translate('villager_policy', {
              value: this.props.G.policyBoardHuman.length,
            })
            .split('\n'),
        );
        break;

      case 'electionCounter':
        hintText.push(...translate('election_counter').split('\n'));
        break;

      case 'vetoEnabled':
        hintText.push(...translate('veto_enabled').split('\n'));
        break;

      case 'draculaStrong':
        hintText.push(...translate('dracula_strong').split('\n'));
        break;
    }
    return hintText;
  };

  // render and render-related helpers

  render() {
    return (
      <GameLayout
        gameArgs={this.props.gameArgs}
        gameOver={this._getGameOver()}
        extraCardContent={
          this._getGameOver() ? (
            <div style={{ textAlign: 'center' }}> {this._renderPlayerAndProgressInfo(0.5)} </div>
          ) : null
        }
      >
        <div style={{ overflow: 'auto', backgroundColor: 'black' }}>
          {/* Leave some space on top for FBG logo and title */}
          <div style={{ height: '12%' }}></div>

          {/* Render Title and Player Info */}
          {this._renderCommonTitle()}
          {this._renderPlayerAndProgressInfo(1)}

          {/* Render Phase specific messages and interactions */}
          {this._renderPhaseReleatedMessage()}
          {this._renderPhaseRelatedInteractions()}
        </div>
      </GameLayout>
    );
  }

  _renderCommonTitle = () => {
    const { ctx, translate } = this.props;
    return (
      <Typography
        key="sd_common_title"
        variant="h5"
        style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}
      >
        {!this._isFirstPerson() ? translate('spectator') : null}
        {translate(`phase.${snakeCase(ctx.phase)}`, translate('play'))}
      </Typography>
    );
  };

  _renderPlayerAndProgressInfo = (scale: number) => {
    return (
      <svg
        width={`${100 * scale}%`}
        height={`${55 * scale}%`}
        viewBox={`0 0 ${CNST.B_WIDTH} ${CNST.B_HEIGHT}`}
        style={{ backgroundColor: 'black' }}
      >
        {Array(this.props.ctx.numPlayers)
          .fill(0)
          .map((_, idx) =>
            this._getGameOver() === null ? (
              // Ingame Render
              <PlayerInfo
                key={`sd_player_info_${idx}`}
                id={idx}
                me={parseInt(this._getPlayerID()) == idx}
                renderForVampire={this.props.G.vampireIDs.includes(parseInt(this._getPlayerID()))}
                playerName={this._getPlayerName(idx)}
                playerActive={this._isActivePlayer(idx)}
                dead={this.props.G.deadIDs.includes(idx)}
                vampire={this.props.G.vampireIDs.includes(idx)}
                dracula={this.props.G.draculaID == idx}
                mayor={this.props.G.mayorID == idx}
                priest={this.props.G.priestID == idx}
                totalPlayers={this.props.ctx.numPlayers}
                phaseName={this.props.ctx.phase}
                isInvestigated={idx === this.props.G.investigateID}
                wasLastPreist={idx === this.props.G.lastPriestID}
                wasLastMayor={idx === this.props.G.lastMayorID}
                numAlivePlayers={this.props.ctx.numPlayers - this.props.G.deadIDs.length}
                isGameOver={this._getGameOver() !== null}
                isSpectator={!this._isFirstPerson()}
                chose={this._getPhaseRelatedPlayerFunction()}
              />
            ) : (
              // Endgame Render
              <PlayerInfo
                key={`sd_player_info_${idx}`}
                id={idx}
                me={parseInt(this._getPlayerID()) == idx}
                renderForVampire={true}
                playerName={this._getPlayerName(idx) + this.props.G.draculaID}
                playerActive={this._isActivePlayer(idx)}
                dead={this.props.G.deadIDs.includes(idx)}
                //dead={false} // if player is dead and vampire, it would show dead. So set this to false to 'overwrite' with vampire
                vampire={this.props.G.vampireIDs.includes(idx)}
                dracula={this.props.G.draculaID == idx}
                mayor={this.props.G.mayorID == idx}
                priest={this.props.G.priestID == idx}
                totalPlayers={this.props.ctx.numPlayers}
                phaseName={this.props.ctx.phase}
                isInvestigated={idx === this.props.G.investigateID}
                wasLastPreist={idx === this.props.G.lastPriestID}
                wasLastMayor={idx === this.props.G.lastMayorID}
                numAlivePlayers={this.props.ctx.numPlayers - this.props.G.deadIDs.length}
                isGameOver={this._getGameOver() !== null}
                isSpectator={!this._isFirstPerson()}
                chose={this._getPhaseRelatedPlayerFunction()}
              />
            ),
          )}
        <PlayStatus
          vampiresPlayed={this.props.G.policyBoardVampire.length}
          villagersPlayed={this.props.G.policyBoardHuman.length}
          electionCount={this.props.G.electionTracker}
          draculaStrength={this.props.G.policyBoardVampire[2] != null}
          vetoEnabled={this.props.G.vetoPower}
          playerCount={this.props.ctx.numPlayers}
          onItemClick={(k: string) => {
            this.setState({ hintKey: this.state.hintKey === k ? null : k });
          }}
        />
      </svg>
    );
  };

  _getPhaseRelatedPlayerFunction = () => {
    const phaseName = this.props.ctx.phase;
    const intPlayerID = parseInt(this._getPlayerID());

    switch (phaseName) {
      case 'phaseChosePriest':
        if (this._isActivePlayer()) {
          return (pInfo: IPlayerInfo) => {
            if (!pInfo.mayor && !pInfo.dead && !pInfo.wasLastPreist) {
              if (pInfo.wasLastMayor && pInfo.numAlivePlayers > 5) {
                return;
              }
              this.props.moves.moveChosePriest(pInfo.id, pInfo.me);
            }
          };
        }
        break;

      case 'phaseInvestigate1':
        if (this._isActivePlayer()) {
          return (pInfo: IPlayerInfo) => {
            if (!pInfo.mayor && !pInfo.dead) {
              this.props.moves.moveInvestigateStart(pInfo.id, intPlayerID);
            }
          };
        }
        break;

      case 'phaseSpecialElection':
      case 'phaseExecution':
        if (this._isActivePlayer()) {
          return (pInfo: IPlayerInfo) => {
            if (!pInfo.mayor && !pInfo.dead) {
              if (phaseName === 'phaseSpecialElection') {
                this.props.moves.movePickMayor(pInfo.id, intPlayerID);
              } else if (phaseName === 'phaseExecution') {
                this.props.moves.moveExecute(pInfo.id, intPlayerID);
              }
            }
          };
        }
        break;
    }

    // provide dummy function that accepts one argument
    return () => {};
  };

  _renderPhaseReleatedMessage = () => {
    let message: any = { error: [], success: [] };
    const { translate } = this.props;
    const intPlayerID = parseInt(this._getPlayerID());
    const { mayorID, priestID } = this.props.G;
    const phaseName = this.state.hintKey ? 'user-info' : this.props.ctx.phase;
    const isDead = this.props.G.deadIDs.includes(intPlayerID);

    if (isDead) {
      message.error.push(...translate('is_dead').split('\n'));
    }

    switch (phaseName) {
      case 'phaseChosePriest':
        if (this._isActivePlayer()) {
          message.primary = translate('phase_chose_priest.nominate_a_priest').split('\n');
        } else {
          message.info = translate('phase_chose_priest.wait_to_nominate_priest').split('\n');
          message.text = translate('phase_chose_priest.possible_nominees').split('\n');
        }
        break;

      case 'phaseVotePriest':
        if (this._isActivePlayer() && !isDead) {
          message.primary = this.props
            .translate('phase_vote_priest.new_priest_election', { name: this._getPlayerName(priestID) })
            .split('\n');
        } else {
          message.text = translate('phase_vote_priest.wait_others_to_vote').split('\n');
        }
        break;

      case 'phaseEndVotePriest':
        if (this._isActivePlayer() && !isDead) {
          const yes = this.props.G.voteCountYes;
          const no = this.props.G.voteCountNo;
          message[yes > no ? 'success' : 'error'].push(
            ...translate('phase_end_vote_priest.election_results', { yes, no }).split('\n'),
          );
          message.text = translate('ok_to_continue').split('\n');
        } else {
          message.text = translate('waiting_for_other_players_to_click_okay.').split('\n');
        }
        break;

      case 'phaseDiscardMayor':
      case 'phaseDiscardPriest':
      case 'phaseDiscardPriestVeto':
        const priestPhase = phaseName !== 'phaseDiscardMayor';
        const playerTag = priestPhase ? translate('cname.priest') : translate('cname.mayor');
        if (this._isActivePlayer() && intPlayerID === (priestPhase ? priestID : mayorID)) {
          message.warning = this.props
            .translate('phase_discard.you_must_discard_one_sample', { playerTag })
            .split('\n');
          message.text = translate('phase_discard.click_to_discard', { playerTag }).split('\n');
          // special actions related to priest Veto
          if (phaseName === 'phaseDiscardPriestVeto' && this.props.G.vetoPower) {
            message.secondary = translate('phase_discard.priest_veto_proposal', { playerTag }).split('\n');
          }
        } else {
          message.text = translate('phase_discard.wait_to_discard_a_sample').split('\n');
        }

        break;

      case 'phaseVetoMayor':
        if (this._isActivePlayer()) {
          message.warning = translate('phase_veto_mayor.reject_or_agree').split('\n');
          message.text = this.props
            .translate('phase_veto_mayor.policy_already_given_to_the_priest', { text: this._getPolicyText() })
            .split('\n');
        } else {
          message.warning = translate('phase_veto_mayor.priest_called_a_veto').split('\n');
        }
        break;

      case 'phasePeekPolicy':
        if (this._isActivePlayer() && intPlayerID === mayorID) {
          message.warning = translate('phase_peek_policy.upcoming_sample').split('\n');
          message.text = translate('ok_to_continue').split('\n');
        } else {
          message.text = translate('phase_peek_policy.mayor_is_looking').split('\n');
        }
        break;

      case 'phaseInvestigate1':
        if (this._isActivePlayer()) {
          message.warning = translate('phase_investigate1.you_are_the_mayor').split('\n');
        } else {
          message.text = translate('phase_investigate1.mayor_is_investigating').split('\n');
        }
        break;

      case 'phaseInvestigate2':
        const pi2PlayerName = this._getPlayerName(this.props.G.investigateID);
        if (this._isActivePlayer()) {
          const isVampire = this.props.G.investigate == 1;
          message.primary = isVampire
            ? translate('phase_investigate2.player_is_a_vampire', { name: pi2PlayerName })
            : translate('phase_investigate2.player_is_a_villager', { name: pi2PlayerName });
          message.text = translate('ok_to_continue').split('\n');
        } else {
          message.info = this.props
            .translate('phase_investigate2.player_is_being_investigated', { name: pi2PlayerName })
            .split('\n');
        }
        break;

      case 'phaseSpecialElection':
        if (this._isActivePlayer()) {
          message.warning = translate('phase_special_election.current_mayor').split('\n');
          message.text = translate('phase_special_election.click_on_candidate').split('\n');
        } else {
          message.info = translate('phase_special_election.next_mayor').split('\n');
        }
        break;

      case 'phaseExecution':
        if (this._isActivePlayer()) {
          message.warning = translate('phase_execution.you_are_the_mayor').split('\n');
          message.text = translate('phase_execution.click_on_candidate').split('\n');
        } else {
          message.error.push(...translate('phase_execution.mayor_will_execute_a_player').split('\n'));
        }
        break;

      case 'user-info':
        message.text = this._getItemInfoText();
        break;
    }

    const typogStyles = { marginRight: '10px', marginLeft: '10px' };

    return (
      <>
        {Object.keys(message).map((color, ic) => {
          return message[color].length > 0 ? (
            <Box
              key={`sd_mbox_${phaseName + (this.state.hintKey || '')}_${ic}`}
              bgcolor={color === 'text' ? 'text.primary' : `${color}.main`}
              color={color === 'text' ? 'background.paper' : `${color}.contrastText`}
              display="block"
              padding="7px"
            >
              <>
                {message[color].map((m, im) => (
                  <Typography
                    key={`sd_mtext_${phaseName + (this.state.hintKey || '')}_${ic}_${im}`}
                    align="left"
                    variant="body1"
                    style={typogStyles}
                  >
                    {m}
                  </Typography>
                ))}
              </>
            </Box>
          ) : null;
        })}
      </>
    );
  };

  _renderPhaseRelatedInteractions = () => {
    const interactions: any = [];
    const { translate } = this.props;
    const playerID = this._getPlayerID();
    const intPlayerID = parseInt(playerID);
    const { mayorID, priestID } = this.props.G;
    const phaseName = this.state.hintKey ? 'user-info' : this.props.ctx.phase;

    if (!this._isFirstPerson()) {
      return null; // spectators have no interactions
    }

    const isDead = this.props.G.deadIDs.includes(intPlayerID);
    if (isDead) {
      return null;
    }

    switch (phaseName) {
      case 'phaseVotePriest':
        if (this._isActivePlayer()) {
          interactions.push({
            text: translate('yes'),
            onClick: () => {
              this.props.moves.moveVoteYes(parseInt(playerID));
            },
          });
          interactions.push({
            text: translate('no'),
            onClick: () => {
              this.props.moves.moveVoteNo(parseInt(playerID));
            },
          });
        }
        break;

      case 'phaseEndVotePriest':
        if (this._isActivePlayer()) {
          interactions.push({
            text: translate('okay'),
            onClick: () => {
              this.props.moves.moveOKVote(intPlayerID);
            },
          });
        }
        break;

      case 'phaseDiscardMayor':
      case 'phaseDiscardPriest':
      case 'phaseDiscardPriestVeto':
        const priestPhase = phaseName !== 'phaseDiscardMayor';
        if (this._isActivePlayer() && intPlayerID === (priestPhase ? priestID : mayorID)) {
          this.props.G.policyHand.forEach((p, idx) => {
            interactions.push({
              text: p.garlic ? translate('symbol.good_po') : translate('symbol.bad_po'),
              onClick: () => {
                if (priestPhase) {
                  this.props.moves.moveDiscardPriest(idx, intPlayerID);
                } else {
                  this.props.moves.moveDiscardMayor(idx, intPlayerID);
                }
              },
            });
          });
          if (phaseName === 'phaseDiscardPriestVeto' && this.props.G.vetoPower) {
            interactions.push({
              text: translate('cname.veto'),
              color: 'secondary',
              onClick: () => {
                this.props.moves.moveWantVetoPriest(intPlayerID);
              },
            });
          }
        }
        break;

      case 'phaseVetoMayor':
        if (this._isActivePlayer()) {
          interactions.push({
            text: translate('cname.agree_veto'),
            color: 'primary',
            onClick: () => {
              this.props.moves.moveWantVetoMayor(true, intPlayerID);
            },
          });
          interactions.push({
            text: translate('cname.reject_veto'),
            color: 'secondary',
            onClick: () => {
              this.props.moves.moveWantVetoMayor(false, intPlayerID);
            },
          });
        }
        break;

      case 'phasePeekPolicy':
        if (this._isActivePlayer() && intPlayerID === mayorID) {
          interactions.push({
            text: translate('okay'),
            onClick: () => {
              this.props.moves.moveOK(intPlayerID);
            },
          });
        }
        break;

      case 'phaseInvestigate2':
        if (this._isActivePlayer()) {
          interactions.push({
            text: translate('okay'),
            onClick: () => {
              this.props.moves.moveInvestigateEnd(intPlayerID);
            },
          });
        }
        break;

      case 'user-info':
        interactions.push({
          text: translate('hide_info'),
          onClick: () => {
            this.setState({ hintKey: null });
          },
        });
    }

    return (
      <div style={{ display: 'flex' }}>
        {interactions.map((i, idx) => (
          <Button
            key={`sd_btn_${phaseName}_${idx}`}
            variant="contained"
            color={i.color || 'default'}
            style={{
              marginTop: '10px',
              alignContent: 'center',
              marginLeft: idx === 0 ? 'auto' : '10px',
              justifyContent: 'center',
            }}
            onClick={i.onClick}
          >
            {i.text}
          </Button>
        ))}
      </div>
    );
  };
}

const enhance = compose<IBoardInnerProps, IBoardOutterProps>(withCurrentGameTranslation);
export const Board = enhance(BoardInternal);
