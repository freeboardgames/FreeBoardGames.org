import * as React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';

import { IG } from './interfaces';
import * as CNST from './constants';
import { PlayerInfo, IPlayerInfo } from './svgComponents/playerInfo';
import PlayStatus from './svgComponents/playStatus';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

interface IBoardState {
  hintKey: string | null;
}

export class Board extends React.Component<IBoardProps, IBoardState> {
  constructor(props) {
    super(props);
    this.state = { hintKey: null };
  }

  // common helpers

  _getPlayerID = () => this.props.playerID || this.props.ctx.currentPlayer;

  _isActivePlayer = (playerID = null) => {
    var activePlayers = this.props.ctx.activePlayers !== null ? this.props.ctx.activePlayers : [];
    return (playerID === null ? parseInt(this._getPlayerID()) : playerID) in activePlayers;
  };

  _getPlayerName = (playerID = null) => {
    const pID = playerID === null ? parseInt(this._getPlayerID()) : playerID;
    return (this.props.gameArgs.players[pID] || { name: `Player ${pID + 1}` }).name;
  };

  _getPolicyText = (peek = false) => {
    if (peek) {
      return this.props.G.policyPeek.map((p) => (p.garlic ? CNST.SY_GOOD_PO : CNST.SY_BAD_PO)).join(' ');
    } else {
      return this.props.G.policyHand.map((p) => (p.garlic ? CNST.SY_GOOD_PO : CNST.SY_BAD_PO)).join(' ');
    }
  };

  _getGameOver = () => {
    if (!this.props.ctx.gameover) {
      return;
    }
    // Online game
    if (this.props.ctx.gameover.win == true) {
      return `${CNST.N_VILLAGERS} win`;
    } else {
      return `${CNST.N_VAMPIRES} win`;
    }
  };

  _getItemInfoText = () => {
    const hintText = ['Info: '];
    switch (this.state.hintKey) {
      case 'vampirePolicy':
        hintText.push(
          `The 7 boxes show the number of ${CNST.N_VAMPIRE} ${CNST.N_SAMPLE}s (${CNST.SY_BAD_PO}) passed. `,
        );
        hintText.push(`Current value: ${this.props.G.policyBoardVampire.length}`);
        hintText.push(`${CNST.SY_PEEK} - allows ${CNST.N_MAYOR} to see upcoming cards.`);
        hintText.push(`${CNST.SY_INVESTG} - allows ${CNST.N_MAYOR} to investigate a player.`);
        hintText.push(`${CNST.SY_ELECT} - a new ${CNST.N_MAYOR} gets elected.`);
        hintText.push(`${CNST.SY_EXECUTE} - requires ${CNST.N_MAYOR} to a player to execute.`);
        hintText.push(`${CNST.SY_COFFIN} - ${CNST.N_VAMPIRES} win the game.`);
        break;

      case 'villagerPolicy':
        hintText.push(
          `The 6 boxes show the number of ${CNST.N_VILLAGER} ${CNST.N_SAMPLE}s (${CNST.SY_GOOD_PO}) passed. `,
        );
        hintText.push(`Current value: ${this.props.G.policyBoardHuman.length}`);
        break;

      case 'electionCounter':
        hintText.push(`${CNST.SY_ELECT} ${CNST.SY_ELECT} ${CNST.SY_ELECT} is the Election Tracker.`);
        hintText.push(
          `If three consecutive elections fail (❌) because of too many No 👎 votes, the topmost ${CNST.N_SAMPLE} is played automatically. No special actions like ${CNST.SY_PEEK}, ${CNST.SY_INVESTG}, ${CNST.SY_EXECUTE}, etc. get triggerd.`,
        );
        break;

      case 'vetoEnabled':
        hintText.push(`${CNST.N_VETO} power is now enabled ☑️.`);
        hintText.push(
          `The ${CNST.N_PRIEST} may propose a Veto, and if the ${CNST.N_MAYOR} agrees to the Veto no ${CNST.N_SAMPLE} is played. If the ${CNST.N_MAYOR} disagrees to the Veto, the ${CNST.N_PRIEST} must play a ${CNST.N_SAMPLE}.`,
        );
        break;

      case 'draculaStrong':
        hintText.push(`${CNST.N_VAMPIRES} are now strong 💪🏻.`);
        hintText.push(
          `Here on, electing Electing ${CNST.N_DRACULA} as ${CNST.N_PRIEST} ends the game in favor of the ${CNST.N_VAMPIRES}`,
        );
        break;
    }
    return hintText;
  };

  // render and render-related helpers

  render() {
    return (
      <GameLayout gameArgs={this.props.gameArgs} gameOver={this._getGameOver()}>
        <div style={{ height: '80vh', overflow: 'auto' }}>
          {this._renderCommonTitle()}

          {this._renderPlayerAndProgressInfo()}

          <div style={{ minHeight: '25%' }}>
            {this._renderPhaseReleatedMessage()}

            {this._renderPhaseRelatedInteractions()}
          </div>
        </div>
      </GameLayout>
    );
  }

  _renderCommonTitle = () => {
    return (
      <Typography
        key="sd_common_title"
        variant="h5"
        style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}
      >
        {CNST.PHASE_TITLES[this.props.ctx.phase] || 'Play'}
      </Typography>
    );
  };

  _renderPlayerAndProgressInfo = () => {
    return (
      <svg width="100%" height="55%" viewBox={`0 0 ${CNST.B_WIDTH} ${CNST.B_HEIGHT}`}>
        {Array(this.props.ctx.numPlayers)
          .fill(0)
          .map((_, idx) => (
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
              chose={this._getPhaseRelatedPlayerFunction()}
            />
          ))}
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
    let message: any = { error: [] };
    const intPlayerID = parseInt(this._getPlayerID());
    const { mayorID, priestID } = this.props.G;
    const phaseName = this.state.hintKey ? 'user-info' : this.props.ctx.phase;
    const isDead = this.props.G.deadIDs.includes(intPlayerID);

    if (isDead) {
      message.error = [
        `You have been executed ${CNST.SY_DEAD}.`,
        // TODO: if dead not required to play, then comment this
        `But please continue playing till the end !!!`,
      ];
    }

    switch (phaseName) {
      case 'phaseChosePriest':
        if (this._isActivePlayer()) {
          message.primary = [
            `As the ${CNST.N_MAYOR}, you are required to nominate a ${CNST.N_PRIEST}.`,
            `You can do this by clicking on one of the players with ${CNST.SY_CANDIDATE} tag above.`,
          ];
        } else {
          message.info = [`Wait for the ${CNST.N_MAYOR} to nominate a ${CNST.N_PRIEST} for voting ...`];
          message.text = [`${CNST.SY_CANDIDATE} tag represents possible nominees for priest.`];
        }
        break;

      case 'phaseVotePriest':
        if (this._isActivePlayer() && !isDead) {
          message.primary = [
            `Would your like to elect ${this._getPlayerName(priestID)} as the new ${CNST.N_PRIEST} ${
              CNST.SY_CANDIDATE
            }`,
          ];
        } else {
          message.text = ['Waiting for other players to vote...'];
        }
        break;

      case 'phaseEndVotePriest':
        if (this._isActivePlayer() && !isDead) {
          const yes = this.props.G.voteCountYes;
          const no = this.props.G.voteCountNo;
          message[yes > no ? 'success' : 'error'] = [`Election Results: ${yes} Yes 👍 and ${no} No 👎`];
          message.text = ['Click Okay to continue...'];
        } else {
          message.text = ['Waiting for other players to click Okay...'];
        }
        break;

      case 'phaseDiscardMayor':
      case 'phaseDiscardPriest':
      case 'phaseDiscardPriestVeto':
        const priestPhase = phaseName !== 'phaseDiscardMayor';
        const playerTag = priestPhase ? CNST.N_PRIEST : CNST.N_MAYOR;
        if (this._isActivePlayer() && intPlayerID === (priestPhase ? priestID : mayorID)) {
          message.warning = [`As the ${playerTag}, you must discard one  ${CNST.N_SAMPLE}.`];
          message.text = [
            `${CNST.SY_BAD_PO} is for ${CNST.N_VAMPIRES} and ${CNST.SY_GOOD_PO} is for ${CNST.N_VILLAGERS}.`,
            `Click on the ${CNST.N_SAMPLE} you want to discard,`,
          ];
          // special actions related to priest Veto
          if (phaseName === 'phaseDiscardPriestVeto' && this.props.G.vetoPower) {
            message.secondary = ['You may also propse a Veto.'];
          }
        } else {
          message.text = [`Wait for the ${playerTag} to discard a ${CNST.N_SAMPLE}...`];
        }

        break;

      case 'phaseVetoMayor':
        if (this._isActivePlayer()) {
          message.warning = [
            `As the ${CNST.N_MAYOR}, you can`,
            `either Reject ${CNST.SY_TDOWN} or Agree ${CNST.SY_TUP} with the ${CNST.N_VETO}`,
          ];
          message.text = [`Previously, ${this._getPolicyText()} was given to the ${CNST.N_PRIEST}.`];
        } else {
          message.warning = [
            `The ${CNST.N_PRIEST} called for a ${CNST.N_VETO}, and the ${CNST.N_MAYOR} is considering it !`,
            `If the Veto is rejected, the ${CNST.N_PRIEST} will be forced to play a ${CNST.N_SAMPLE}. Otherwise a new round will start.`,
          ];
        }
        break;

      case 'phasePeekPolicy':
        if (this._isActivePlayer() && intPlayerID === mayorID) {
          message.warning = [
            `You can see the upcoming ${CNST.N_SAMPLE}s`,
            `Upcoming sample are:  ${this._getPolicyText(true)}`,
          ];
          message.text = ['Click Okay to continue...'];
        } else {
          message.text = [`The ${CNST.N_MAYOR} is looking at te next three samples.`];
        }
        break;

      case 'phaseInvestigate1':
        if (this._isActivePlayer()) {
          message.warning = [
            `You are the ${CNST.N_MAYOR}.`,
            `You can investigate any player with the ${CNST.SY_SEARCH} symbol.`,
            `Click on the player you would like to search...`,
          ];
        } else {
          message.text = [`The ${CNST.N_MAYOR} is Investigating ${CNST.SY_PEEK} a Player...`];
        }
        break;

      case 'phaseInvestigate2':
        const pi2PlayerName = this._getPlayerName(this.props.G.investigateID);
        if (this._isActivePlayer()) {
          const isVampire = this.props.G.investigate == 1;
          message.primary = [`Player ${pi2PlayerName} is a ${isVampire ? CNST.N_VAMPIRE : CNST.N_VILLAGER}`];
          message.text = ['Click Okay to continue...'];
        } else {
          message.info = [`Player ${pi2PlayerName} is being investigated.`];
        }
        break;

      case 'phaseSpecialElection':
        if (this._isActivePlayer()) {
          message.warning = [`You are the current ${CNST.N_MAYOR}, please choose the next ${CNST.N_MAYOR}`];
          message.text = [`You can do this by clicking on one of the player with the ${CNST.SY_CANDIDATE} symbol.`];
        } else {
          message.info = [`Current ${CNST.N_MAYOR} is selecting the next ${CNST.N_MAYOR}.`];
        }
        break;

      case 'phaseExecution':
        if (this._isActivePlayer()) {
          message.warning = [`You are the ${CNST.N_MAYOR}, you must ${CNST.N_EXECUTE} one Player!`];
          message.text = [`You can do this by clicking on one of the player with the ${CNST.SY_CANDIDATE} symbol.`];
        } else {
          message.error.push(`The ${CNST.N_MAYOR} will ${CNST.N_EXECUTE} a Player!.`);
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
    const playerID = this._getPlayerID();
    const intPlayerID = parseInt(playerID);
    const { mayorID, priestID } = this.props.G;
    const phaseName = this.state.hintKey ? 'user-info' : this.props.ctx.phase;

    // TODO: if dead not required to play, then uncomment this!
    // const isDead = this.props.G.deadIDs.includes(intPlayerID);
    // if (isDead){
    //   return null;
    // }

    switch (phaseName) {
      case 'phaseVotePriest':
        if (this._isActivePlayer()) {
          interactions.push({
            text: 'Yes 👍',
            onClick: () => {
              this.props.moves.moveVoteYes(parseInt(playerID));
            },
          });
          interactions.push({
            text: 'No 👎',
            onClick: () => {
              this.props.moves.moveVoteNo(parseInt(playerID));
            },
          });
        }
        break;

      case 'phaseEndVotePriest':
        if (this._isActivePlayer()) {
          interactions.push({
            text: 'Okay',
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
              text: p.garlic ? CNST.SY_GOOD_PO : CNST.SY_BAD_PO,
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
              text: `${CNST.N_VETO}`,
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
            text: CNST.N_AGREE_VETO,
            color: 'primary',
            onClick: () => {
              this.props.moves.moveWantVetoMayor(true, intPlayerID);
            },
          });
          interactions.push({
            text: CNST.N_REJECT_VETO,
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
            text: 'Okay',
            onClick: () => {
              this.props.moves.moveOK(intPlayerID);
            },
          });
        }
        break;

      case 'phaseInvestigate2':
        if (this._isActivePlayer()) {
          interactions.push({
            text: 'Okay',
            onClick: () => {
              this.props.moves.moveInvestigateEnd(intPlayerID);
            },
          });
        }
        break;

      case 'user-info':
        interactions.push({
          text: 'Hide Info',
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
