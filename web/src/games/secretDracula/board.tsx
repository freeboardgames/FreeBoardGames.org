import * as React from 'react';
import { Typography, Box, Button } from '@material-ui/core';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';

import { IG } from './interfaces';
import * as CNST from './constants';
import {PlayerInfo, IPlayerInfo} from './svgComponents/playerInfo';
import PlayStatus from './svgComponents/playStatus';

import { BVampirePolicies } from './components/bvampirepolicy';
import { BPlayer } from './components/bplayer';
import { BHumanPolicies } from './components/bhumanpolicy';
import { BElectionTracker } from './components/belectiontracker';

import { BVote } from './phases/vote/bvote';
import { BEndVote } from './phases/vote/bvoteresults';
import { BDiscard } from './phases/discardVeto/bdiscard';
import { BPeek } from './phases/special/bpeek';
import { BShowPlayer } from './components/bshowplayer';


import css from './board.css';

import {B_HEIGHT, B_WIDTH} from './constants';


interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps> {
  render() {

    return (
        <GameLayout gameArgs={this.props.gameArgs} allowWiderScreen={true} gameOver={this._getGameOver()}>
         

          <div className={css.middle}>
            <BElectionTracker count={this.props.G.electionTracker}></BElectionTracker>

            <BVampirePolicies
              playedPolicies={this.props.G.policyBoardVampire.length}
              playerCount={this.props.ctx.numPlayers}
            ></BVampirePolicies>

            <BHumanPolicies
              playedPolicies={this.props.G.policyBoardHuman.length}
              playerCount={this.props.ctx.numPlayers}
            ></BHumanPolicies>

            <div>
              <span className={css.tooltip}>
                {this.props.G.vetoPower ? (
                  <>
                    Veto Power <b>Enabled</b>.
                  </>
                ) : (
                  <>
                    Veto Power <b>Disabled</b>.
                  </>
                )}
                <span className={css.tooltiptext}>
                  <p>
                    <b>Enabled:</b> The Priest may <i>propose</i> a Veto. If the Mayor <b>agrees</b> to the Veto no
                    sample is played. If the Mayor <b>disagrees</b> to the Veto, the Priest must play a sample.
                  </p>
                  <p>
                    <b>Disabled:</b> This ability is not yet enabled. The Prist must play a sample.
                  </p>
                </span>
              </span>
            </div>
            <div>
              <span className={css.tooltip}>
                {this.props.G.policyBoardVampire[2] != null ? (
                  <>
                    Draculas power is <b>great</b>.
                  </>
                ) : (
                  <>
                    Draculas power is <b>weak</b>.
                  </>
                )}
                <span className={css.tooltiptext}>
                  <p>
                    <b>great:</b> Electing Dracula as Priest ends the game in favor of the Vampires.
                  </p>
                  <p>
                    <b>weak:</b> Electing Dracula as Priest has no further consequences.
                  </p>
                </span>
              </span>
            </div>
          </div>

          {this._renderCommonTitle()}

          {this._renderMainBoard()}

          {this._renderPhaseReleatedMessage()}

          {this._renderPhaseRelatedInteractions()}

        </GameLayout>
    );
  }

  _getPlayerID = () => (this.props.playerID || this.props.ctx.currentPlayer);

  _isActivePlayer = (playerID = null) => {
    var activePlayers = this.props.ctx.activePlayers !== null ? this.props.ctx.activePlayers : [];
    return (playerID === null ? parseInt(this._getPlayerID()) : playerID) in activePlayers;
  }

  _getPlayerName = (playerID = null) => {
    return (this.props.gameArgs.players[playerID === null ? parseInt(this._getPlayerID()) : playerID] || {name: 'BLA BLA BLA'}).name
  }

  _getPolicyText = () => (this.props.G.policyHand.map((p)=>(p.garlic ? CNST.SY_BAD_PO : CNST.SY_GOOD_PO)).join(' '));

  _renderCommonTitle = () => {
    return (
      <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
        {CNST.PHASE_TITLES[this.props.ctx.phase] || 'Play'}
      </Typography>
    );
  }

  _renderMainBoard = () => {
    const nP = 0;
    return (
      <svg width="500px" height="350px" viewBox={`0 0 ${B_WIDTH} ${B_HEIGHT}`}>
        {
          Array(this.props.ctx.numPlayers + nP).fill(0).map((_, idx) => (
            <PlayerInfo
              id={idx}
              me={Number(this._getPlayerID()) == idx}
              renderForVampire={this.props.G.vampireIDs.includes(Number(this._getPlayerID()))}
              playerName={this._getPlayerName(idx)}
              playerActive={this._isActivePlayer(idx)}
              dead={this.props.G.deadIDs.includes(idx)}
              vampire={this.props.G.vampireIDs.includes(idx)}
              dracula={this.props.G.draculaID == idx}
              mayor={this.props.G.mayorID == idx}
              priest={this.props.G.priestID == idx}
              totalPlayers={this.props.ctx.numPlayers + nP}
              phaseName={this.props.ctx.phase}
              isInvestigated={idx === this.props.G.investigateID}
              chose={this._getPhaseRelatedPlayerFunction()}
          />))
        }
        <PlayStatus
          vampiresPlayed={this.props.G.policyBoardVampire.length}
          villagersPlayed={this.props.G.policyBoardHuman.length}
          electionCount={this.props.G.electionTracker}
          draculaStrength={this.props.G.policyBoardVampire[2] != null}
          vetoEnabled={this.props.G.vetoPower}
          playerCount={this.props.ctx.numPlayers}
          onItemClick={(itemName: string) => {}}
        />
      </svg>
    );
  };

  _getPhaseRelatedPlayerFunction = () => {
    const phaseName = this.props.ctx.phase;
    const intPlayerID = parseInt(this._getPlayerID());

    switch (phaseName) {
      case 'phaseChosePriest': 
        if(this._isActivePlayer()){
          return (pInfo: IPlayerInfo) => {
            if(!pInfo.mayor && !pInfo.dead){
              this.props.moves.moveChosePriest(pInfo.id, pInfo.me);
            }
          }
        }
        break;

      case 'phaseInvestigate1': 
        if(this._isActivePlayer()){
          return (pInfo: IPlayerInfo) => {
            if(!pInfo.mayor && !pInfo.dead){
              this.props.moves.moveInvestigateStart(pInfo.id, intPlayerID);
            }
          }
        }
        break;

      case 'phaseSpecialElection': 
      case 'phaseExecution':
        if (this._isActivePlayer()){
          return (pInfo: IPlayerInfo) => {
            if(!pInfo.mayor && !pInfo.dead) {
              if (phaseName === 'phaseSpecialElection'){
                this.props.moves.movePickMayor(pInfo.id, intPlayerID);
              } else if (phaseName === 'phaseExecution') {
                this.props.moves.moveExecute(pInfo.id, intPlayerID);
              }
            }
          }
        }
        break;


    };
    return (pInfo: IPlayerInfo) => {};
  }

  _renderPhaseReleatedMessage = () => {
    let message: any = {}; 
    const intPlayerID = parseInt(this._getPlayerID());
    const {mayorID, priestID, lastMayorID, lastPriestID} = this.props.G; 
    switch (this.props.ctx.phase) {
      case 'phaseChosePriest':
        if(this._isActivePlayer()) {
          message.primary = [
            `As the ${CNST.N_MAYOR}, you are required to nominate a ${CNST.N_PRIEST}.`,
            `You can do this by clicking on one of the players with ${CNST.SY_CANDIDATE} above.`
          ];
        } else {
          message.info = [`Wait for the ${CNST.N_MAYOR} to nominate a ${CNST.N_PRIEST} for voting ...`];
          message.text = [`${CNST.SY_CANDIDATE} represents possible nominees for priest.`]
        }
        break;

      case 'phaseVotePriest': 
        if(this._isActivePlayer()){
          message.primary = [`Give your vote for ${this._getPlayerName(priestID)} ${CNST.SY_CANDIDATE} as the new ${CNST.N_PRIEST}.`];
        } else {
          message.text = ['Waiting for other players to vote...'];
        }
        break; 

      case 'phaseEndVotePriest': 
        if(this._isActivePlayer()){
          const yes = this.props.G.voteCountYes;
          const no = this.props.G.voteCountNo; 
          message[ yes > no ? 'success' : 'error' ] = [`Election Results: ${yes} Yes 👍 and ${no} No 👎`];
          message.text = ['Click Okay to continue...'];
        } else {
          message.text = ['Waiting for other players to click Okay...'];
        }
        break;
      
      case 'phaseDiscardMayor': 
      case 'phaseDiscardPriest':
      case 'phaseDiscardPriestVeto': 
        const priestPhase = (this.props.ctx.phase !== 'phaseDiscardMayor');
        const playerTag = priestPhase? CNST.N_PRIEST : CNST.N_MAYOR;
        if (this._isActivePlayer() && (intPlayerID === (priestPhase ? priestID : mayorID))) {
          message.warning = [
            `As the ${playerTag}, you must discard one  ${CNST.N_SAMPLE}.`, 
          ]; 
          message.text = [
            `${CNST.SY_BAD_PO} is for ${CNST.N_VAMPIRES} and ${CNST.SY_GOOD_PO} is for ${CNST.N_VILLAGERS}.`,
            `Click on a ${CNST.N_SAMPLE} to discard,`
          ];
          // special actions related to priest Veto 
          if(priestPhase && this.props.G.vetoPower) {
            message.secondary = ['You may also propse a Veto.']; 
          }
        } else {
          message.text = [`Wait for the ${playerTag} to discard a ${CNST.N_SAMPLE}...`]
        }

        break; 

      case 'phaseVetoMayor': 
        if (this._isActivePlayer()){
          message.warning = [
            `As the ${CNST.N_MAYOR}, you can`, 
            `either Reject ${CNST.SY_TDOWN} or Agree ${CNST.SY_TUP} with the ${CNST.N_VETO}`, 
          ];
          message.text = [
            `Previously, ${this._getPolicyText()} was given to the ${CNST.N_PRIEST}.`
          ]; 
        } else {
          message.text = [
            `The ${CNST.N_MAYOR} is considering the ${CNST.N_VETO}...`
          ];
        }
        break;

      case 'phasePeekPolicy': 
        if (this._isActivePlayer() && intPlayerID === mayorID){
          message.warning = [
            `You can see the upcoming ${CNST.N_SAMPLE}s`,
            `Upcoming sample are:  ${this._getPolicyText()}`
          ]; 
          message.text = ['Click Okay to continue...'];
        } else {
          message.text = [`The ${CNST.N_MAYOR} is looking at te next three samples.`]
        }
        break;

      case 'phaseInvestigate1': 
        if(this._isActivePlayer()){
          message.warning = [
            `You are the ${CNST.N_MAYOR}.`, 
            `You can investigate any player with the ${CNST.SY_SEARCH} symbol.`, 
            `Click on the player you would like to search...`
          ]
        } else {
          message.text = [`The ${CNST.N_MAYOR} is Investigating ${CNST.SY_PEEK} a Player...`];
        }
        break;

      case 'phaseInvestigate2': 
        const pi2PlayerName = this._getPlayerName(this.props.G.investigateID);
        if(this._isActivePlayer()){
          const isVampire = (this.props.G.investigate == 1);
          message.primary = [`Player ${pi2PlayerName} is a ${isVampire ? CNST.N_VAMPIRE : CNST.N_VILLAGER}`];
          message.text = ['Click Okay to continue...'];
        } else {
          message.info = [`Player ${pi2PlayerName} is being investigated.`]
        }
        break;

      case 'phaseSpecialElection': 
        if (this._isActivePlayer()){
          message.warning = [
            `You are the current ${CNST.N_MAYOR}, please choose the next ${CNST.N_MAYOR}`, 
          ];
          message.text = [
            `You can do this by clicking on one of the player with the ${CNST.SY_CANDIDATE} symbol.`
          ];
        } else {
          message.info = [`Current ${CNST.N_MAYOR} is selecting the next ${CNST.N_MAYOR}.`]
        }
        break; 

      case 'phaseExecution': 
        if (this._isActivePlayer()){
          message.warning = [
            `You are the ${CNST.N_MAYOR}, any you must ${CNST.N_EXECUTE} a Player!`, 
          ];
          message.text = [
            `You can do this by clicking on one of the player with the ${CNST.SY_CANDIDATE} symbol.`
          ];
        } else {
          message.error = [`The ${CNST.N_MAYOR} will ${CNST.N_EXECUTE} a Player!.`]
        }
        break; 


    }

    const typogStyles = {marginRight: '10px', marginLeft: '10px'}

    return (
      <> 
        {
          Object.keys(message).map((color) => {
            return (
              <Box 
                bgcolor={color === 'text' ? 'text.primary':`${color}.main`} 
                color={color === 'text' ? 'background.paper': `${color}.contrastText`} display='block' 
                maxWidth='486px'
                padding='7px'
              >
                <> 
                {
                  message[color].map((m) => (
                    <Typography align='left' variant='body1' style={typogStyles} >
                      {m}
                    </Typography>
                  ))
                }
                </>
              </Box>
            );
          })
        }
      
      </>      
    );
  }

  _renderPhaseRelatedInteractions = () => {

    const interactions: any = []; 
    const playerID = this._getPlayerID();
    const intPlayerID = parseInt(playerID);
    const {mayorID, priestID, lastMayorID, lastPriestID} = this.props.G; 

    switch (this.props.ctx.phase) {

      case 'phaseVotePriest': 
        if(this._isActivePlayer()){
          interactions.push({
            text: 'Yes 👍',
            onClick: () => {this.props.moves.moveVoteYes(parseInt(playerID))}
          });
          interactions.push({
            text: 'No 👎',
            onClick: () => {this.props.moves.moveVoteNo(parseInt(playerID))}
          });
        }
        break; 

      case 'phaseEndVotePriest': 
        if(this._isActivePlayer()){
          interactions.push({
            text: 'Okay', 
            onClick: () => {this.props.moves.moveOKVote(intPlayerID)},
          })
        }
        break;

      case 'phaseDiscardMayor': 
      case 'phaseDiscardPriest':
      case 'phaseDiscardPriestVeto': 
        const priestPhase = (this.props.ctx.phase !== 'phaseDiscardMayor');
        if (this._isActivePlayer() && (intPlayerID === (priestPhase ? priestID : mayorID))) {
          this.props.G.policyHand.forEach((p, idx) => {
            interactions.push({
              text: p.garlic ? `${CNST.SY_BAD_PO}` : `${CNST.SY_GOOD_PO}`,
              onClick: () => {
                if(priestPhase){
                  this.props.moves.moveDiscardPriest(idx, intPlayerID);
                } else {
                  this.props.moves.moveDiscardMayor(idx, intPlayerID);
                }
              },
            })
          });
          if(priestPhase && this.props.G.vetoPower){
            interactions.push({
              text: `${CNST.N_VETO}`,
              color: 'secondary',
              onClick: () => {
                this.props.moves.moveWantVetoPriest(intPlayerID);
              }
            })
          }
        }
        break;

      case 'phaseVetoMayor': 
        if (this._isActivePlayer()) {
          interactions.push({
            text: CNST.N_AGREE_VETO, 
            color: 'primary', 
            onClick: () => {this.props.moves.moveWantVetoMayor(true, intPlayerID);}
          });
          interactions.push({
            text: CNST.N_REJECT_VETO, 
            color: 'secondary', 
            onClick: () => {this.props.moves.moveWantVetoMayor(false, intPlayerID);}
          });
        }
        break;

      case 'phasePeekPolicy': 
        if (this._isActivePlayer() && intPlayerID === mayorID) {
          interactions.push({
            text: 'Okay', 
            onClick: () => {this.props.moves.moveOK(intPlayerID);}
          });
        }
        break;

      case 'phaseInvestigate2': 
        if (this._isActivePlayer()) {
          interactions.push({
            text: 'Okay', 
            onClick: () => {this.props.moves.moveInvestigateEnd(intPlayerID);}
          })
        }
        break;

    }; 

    return (
      <div style={{ display: 'flex', maxWidth: '500px' }}>
        {
          interactions.map((i, idx) => (
            <Button
              key={`sd_btn_${this.props.ctx.phase}_${idx}`}
              variant="contained"
              color= { i.color || "default"}
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
          ))
        }

      </div>
    );

  }


  _getGameOver = () => {
    if (!this.props.ctx.gameover) {
      return;
    }
    // Online game
    if (this.props.ctx.gameover.win == true) {
      return 'Humans win';
    } else {
      return 'Vampires win';
    }
  }
}
