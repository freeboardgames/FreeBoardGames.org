import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';

import { IG } from './interfaces';

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

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps> {
  render() {
    let playerorder = Array(this.props.ctx.numPlayers).fill(0);
    let deads = Array(this.props.ctx.numPlayers).fill(false);
    let vampires = Array(this.props.ctx.numPlayers).fill(false);
    for (let i = 0; i < this.props.ctx.numPlayers; i++) {
      playerorder[i] = i;
      if (this.props.G.deadIDs.includes(i)) {
        deads[i] = true;
      }
      if (this.props.G.vampireIDs.includes(i)) {
        vampires[i] = true;
      }
    }

    return (
      <div className={css.div}>
        <GameLayout gameArgs={this.props.gameArgs} allowWiderScreen={true} gameOver={this._getGameOver()}>
          <div className={css.header}>{this.render_players(playerorder, deads, vampires)}</div>

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

          <div className={css.bottom}>
            {this.render_chosePriest(playerorder, deads, vampires)}

            {this.render_votePriest(vampires)}

            {this.render_endVotePriest()}

            {this.render_discardMayor(vampires)}

            {this.render_discardPriest(vampires)}

            {this.render_vetoMayor()}

            {this.render_peekPolicy(vampires)}

            {this.render_investigate1(playerorder, deads, vampires)}

            {this.render_investigate2()}

            {this.render_specialElection(playerorder, deads, vampires)}

            {this.render_execution(playerorder, deads, vampires)}
          </div>
        </GameLayout>
      </div>
    );
  }

  render_players(playerorder: number[], deads, vampires) {
    return (
      <>
        {playerorder.map((a) => {
          var activePlayers = this.props.ctx.activePlayers !== null ? this.props.ctx.activePlayers : [];
          return (
            <>
              <span
                key={'render_players-' + a.toString}
                style={{ width: '49%', display: 'inline-block', border: '1px solid blue' }}
              >
                <BPlayer
                  me={Number(this.props.playerID) == a}
                  playerName={this.props.gameArgs.players[a].name}
                  playerActive={a in activePlayers}
                  dead={deads[a]}
                  vampire={vampires[a]}
                  dracula={this.props.G.draculaID == a}
                  mayor={this.props.G.mayorID == a}
                  priest={this.props.G.priestID == a}
                  chose={() => {
                    return;
                  }}
                ></BPlayer>
              </span>
            </>
          );
        })}
      </>
    );
  }

  render_chosePriest(playerorder, deads, vampires) {
    return (
      <>
        {
          // parseInt(this.props.playerID) in this.props.ctx.activePlayers &&
          this.props.ctx.phase == 'phaseChosePriest' ? (
            <div>
              {parseInt(this.props.playerID) in this.props.ctx.activePlayers ? (
                <>
                  <div style={{ textAlign: 'center' }}>
                    You are the Mayor 🏅 and are required to select a Priest ✝ ️ for your Term.
                  </div>
                  {playerorder.map((a) => {
                    return (
                      <>
                        <BPlayer
                          me={Number(this.props.playerID) == a}
                          playerName={this.props.gameArgs.players[a].name}
                          playerActive={false}
                          dead={deads[a]}
                          vampire={vampires[a]}
                          dracula={this.props.G.draculaID == a}
                          mayor={false}
                          priest={false}
                          chose={() => {
                            this.props.moves.moveChosePriest(a, parseInt(this.props.playerID));
                          }}
                        ></BPlayer>
                        <span style={{ width: '5%', display: 'inline-block' }}></span>
                      </>
                    );
                  })}
                </>
              ) : (
                <>
                  <div style={{ textAlign: 'center' }}>The Mayor 🏅 is selecting a Priest ✝ ️.</div>
                </>
              )}
            </div>
          ) : (
            <></>
          )
        }
      </>
    );
  }

  render_votePriest(vampires) {
    var priestID = this.props.G.priestID;
    var mayorID = this.props.G.mayorID;

    return (
      <>
        {
          //
          this.props.ctx.phase == 'phaseVotePriest' ? (
            <div>
              <span style={{ textAlign: 'center' }}>
                <p> Do you want to confirm </p>
                <p>
                  <BPlayer
                    me={false}
                    playerName={this.props.gameArgs.players[mayorID].name}
                    playerActive={false}
                    dead={false}
                    vampire={vampires[mayorID]}
                    dracula={this.props.G.draculaID == mayorID}
                    mayor={true}
                    priest={false}
                    chose={() => {
                      return;
                    }}
                  ></BPlayer>
                </p>
                <p>
                  <BPlayer
                    me={false}
                    playerName={this.props.gameArgs.players[priestID].name}
                    playerActive={false}
                    dead={false}
                    vampire={vampires[priestID]}
                    dracula={this.props.G.draculaID == priestID}
                    mayor={false}
                    priest={true}
                    chose={() => {
                      return;
                    }}
                  ></BPlayer>
                </p>
                <p> for this Term? </p>
              </span>
              {parseInt(this.props.playerID) in this.props.ctx.activePlayers ? (
                <span style={{ textAlign: 'center' }}>
                  <p>
                    <BVote
                      yes={() => {
                        this.props.moves.moveVoteYes(parseInt(this.props.playerID));
                      }}
                      no={() => {
                        this.props.moves.moveVoteNo(parseInt(this.props.playerID));
                      }}
                    ></BVote>
                  </p>
                </span>
              ) : (
                <>
                  <span style={{ textAlign: 'center' }}>
                    <p>Waiting for other players to Vote.</p>
                  </span>
                </>
              )}
            </div>
          ) : (
            <></>
          )
        }
      </>
    );
  }

  render_endVotePriest() {
    return (
      <>
        {
          //
          this.props.ctx.phase == 'phaseEndVotePriest' ? (
            <span style={{ textAlign: 'center' }}>
              <p> Results of the Election </p>
              {parseInt(this.props.playerID) in this.props.ctx.activePlayers ? (
                <BEndVote
                  yes={this.props.G.voteCountYes}
                  no={this.props.G.voteCountNo}
                  done={true}
                  ok={() => {
                    this.props.moves.moveOKVote(parseInt(this.props.playerID));
                  }}
                ></BEndVote>
              ) : (
                <BEndVote
                  yes={this.props.G.voteCountYes}
                  no={this.props.G.voteCountNo}
                  done={false}
                  ok={() => {
                    this.props.moves.moveOKVote(parseInt(this.props.playerID));
                  }}
                ></BEndVote>
              )}
            </span>
          ) : (
            <></>
          )
        }
      </>
    );
  }

  render_discardMayor(vampires) {
    var mayorID = this.props.G.mayorID;

    return (
      <>
        {
          // parseInt(this.props.playerID) in this.props.ctx.activePlayers &&
          this.props.ctx.phase == 'phaseDiscardMayor' ? (
            <div>
              <span style={{ textAlign: 'center' }}>
                {parseInt(this.props.playerID) == mayorID ? (
                  <>
                    <p>
                      {' '}
                      You are the Mayor 🏅 and must <b>discard</b> a sample!
                    </p>

                    <span style={{ textAlign: 'center' }}>
                      <p>
                        <BDiscard
                          policies={this.props.G.policyHand}
                          vetoEnabled={false}
                          mayor={this.props.G.mayorID == parseInt(this.props.playerID)}
                          discard={this._discardWrapper(parseInt(this.props.playerID))}
                          veto={this._vetoWrapper(parseInt(this.props.playerID))}
                        ></BDiscard>
                      </p>
                    </span>
                  </>
                ) : (
                  <p>
                    {' '}
                    The Mayor
                    <BPlayer
                      me={false}
                      playerName={this.props.gameArgs.players[mayorID].name}
                      playerActive={false}
                      dead={false}
                      vampire={vampires[mayorID]}
                      dracula={this.props.G.draculaID == mayorID}
                      mayor={true}
                      priest={false}
                      chose={() => {
                        return;
                      }}
                    ></BPlayer>
                    is chosing to discard a sample.
                  </p>
                )}
              </span>
            </div>
          ) : (
            <></>
          )
        }
      </>
    );
  }

  render_discardPriest(vampires) {
    var priestID = this.props.G.priestID;

    return (
      <>
        {
          // parseInt(this.props.playerID) in this.props.ctx.activePlayers &&
          this.props.ctx.phase == 'phaseDiscardPriest' || this.props.ctx.phase == 'phaseDiscardPriestVeto' ? (
            <div>
              <span style={{ textAlign: 'center' }}>
                {parseInt(this.props.playerID) == priestID ? (
                  <>
                    <p>
                      {' '}
                      You are the Priest and must <b>discard</b> a sample!
                    </p>
                    {this.props.G.vetoPower ? <p>You may also propse a Veto.</p> : <></>}
                    <span style={{ textAlign: 'center' }}>
                      <p>
                        <BDiscard
                          policies={this.props.G.policyHand.map((a) => {
                            return parseInt(this.props.playerID) in this.props.ctx.activePlayers ? a : null;
                          })}
                          vetoEnabled={this.props.G.vetoPower}
                          mayor={this.props.G.mayorID == parseInt(this.props.playerID)}
                          discard={this._discardWrapper(parseInt(this.props.playerID))}
                          veto={this._vetoWrapper(parseInt(this.props.playerID))}
                        ></BDiscard>
                      </p>
                    </span>
                  </>
                ) : (
                  <p>
                    {' '}
                    The Priest
                    <BPlayer
                      me={false}
                      playerName={this.props.gameArgs.players[priestID].name}
                      playerActive={false}
                      dead={false}
                      vampire={vampires[priestID]}
                      dracula={this.props.G.draculaID == priestID}
                      mayor={false}
                      priest={true}
                      chose={() => {
                        return;
                      }}
                    ></BPlayer>
                    is chosing to discard a sample.
                  </p>
                )}
              </span>
            </div>
          ) : (
            <></>
          )
        }
      </>
    );
  }

  render_vetoMayor() {
    return (
      <>
        {
          // parseInt(this.props.playerID) in this.props.ctx.activePlayers &&
          this.props.ctx.phase == 'phaseVetoMayor' ? (
            <div>
              <span style={{ textAlign: 'center' }}>
                {parseInt(this.props.playerID) in this.props.ctx.activePlayers ? (
                  <>
                    <p>You are the Mayor 🏅.</p>
                    <p>You may force (👎) the Priest ✝️ to play, or may agree (👍) to the Veto.</p>
                    <BDiscard
                      policies={this.props.G.policyHand}
                      vetoEnabled={this.props.G.vetoPower}
                      mayor={this.props.G.mayorID == parseInt(this.props.playerID)}
                      discard={this._discardWrapper(parseInt(this.props.playerID))}
                      veto={this._vetoWrapper(parseInt(this.props.playerID))}
                    ></BDiscard>
                  </>
                ) : (
                  <>
                    <p>The Mayor 🏅 is contemplating a Veto.</p>
                  </>
                )}
              </span>
            </div>
          ) : (
            <></>
          )
        }
      </>
    );
  }

  render_peekPolicy(vampires) {
    if (vampires) {
    }
    var mayorID = this.props.G.mayorID;

    return (
      <>
        {
          //
          this.props.ctx.phase == 'phasePeekPolicy' ? (
            <span style={{ textAlign: 'center' }}>
              {parseInt(this.props.playerID) == mayorID ? (
                <>
                  <p>
                    {' '}
                    🧪 <b> Peek </b> 🧪{' '}
                  </p>
                  <p> You are the Mayor 🏅. These are the following three samples.</p>
                </>
              ) : (
                <>
                  <p>
                    {' '}
                    🧪 <b> Peek </b>{' '}
                  </p>
                  <p> 🧪 The Mayor 🏅 is looking at te next three samples.</p>
                </>
              )}
              {parseInt(this.props.playerID) in this.props.ctx.activePlayers ? (
                <BPeek
                  policies={this.props.G.policyPeek}
                  ok={() => {
                    this.props.moves.moveOK(parseInt(this.props.playerID));
                  }}
                ></BPeek>
              ) : (
                <></>
              )}
            </span>
          ) : (
            <></>
          )
        }
      </>
    );
  }

  render_investigate1(playerorder, deads, vampires) {
    return (
      <>
        {
          // parseInt(this.props.playerID) in this.props.ctx.activePlayers && this.props.ctx.phase == 'phaseInvestigate1' ? (
          this.props.ctx.phase == 'phaseInvestigate1' ? (
            <div style={{ textAlign: 'center' }}>
              {parseInt(this.props.playerID) in this.props.ctx.activePlayers ? (
                <>
                  <p>
                    {' '}
                    🕵 <b> Investigate </b> 🕵{' '}
                  </p>
                  <p> You are the Mayor 🏅. Investigate a Player! </p>

                  {playerorder.map((a) => {
                    return (
                      <>
                        <BPlayer
                          me={Number(this.props.playerID) == a}
                          playerName={this.props.gameArgs.players[a].name}
                          playerActive={false}
                          dead={deads[a]}
                          vampire={vampires[a]}
                          dracula={this.props.G.draculaID == a}
                          mayor={false}
                          priest={false}
                          chose={() => {
                            this.props.moves.moveInvestigateStart(a, parseInt(this.props.playerID));
                          }}
                        ></BPlayer>
                        <span style={{ width: '5%', display: 'inline-block' }}></span>
                      </>
                    );
                  })}
                </>
              ) : (
                <>
                  <p>
                    {' '}
                    🕵 <b> Investigate </b> 🕵{' '}
                  </p>
                  <p> The Mayor 🏅 is Investigating a Player. </p>
                </>
              )}
            </div>
          ) : (
            <></>
          )
        }
      </>
    );
  }

  render_investigate2() {
    return (
      <>
        {
          // parseInt(this.props.playerID) in this.props.ctx.activePlayers &&
          this.props.ctx.phase == 'phaseInvestigate2' ? (
            <div style={{ textAlign: 'center' }}>
              <p>Investigation Results:</p>
              {parseInt(this.props.playerID) in this.props.ctx.activePlayers ? (
                <BShowPlayer
                  name={
                    this.props.gameArgs.players.map((player) => {
                      return player.name;
                    })[(this.props.G.investigateID, this.props.G.investigateID)]
                  }
                  vampire={this.props.G.investigate == 1}
                  finish={() => {
                    this.props.moves.moveInvestigateEnd(parseInt(this.props.playerID));
                  }}
                  iInvestigate={true}
                ></BShowPlayer>
              ) : (
                <BShowPlayer
                  name={
                    this.props.gameArgs.players.map((player) => {
                      return player.name;
                    })[(this.props.G.investigateID, this.props.G.investigateID)]
                  }
                  vampire={null}
                  finish={() => {
                    return;
                  }}
                  iInvestigate={false}
                ></BShowPlayer>
              )}
            </div>
          ) : (
            <></>
          )
        }
      </>
    );
  }

  render_specialElection(playerorder, deads, vampires) {
    return (
      <>
        {
          // parseInt(this.props.playerID) in this.props.ctx.activePlayers &&
          this.props.ctx.phase == 'phaseSpecialElection' ? (
            <div style={{ textAlign: 'center' }}>
              {parseInt(this.props.playerID) in this.props.ctx.activePlayers ? (
                <>
                  <p>
                    {' '}
                    🗳️ <b>Special Election</b> 🗳️{' '}
                  </p>
                  <p> Chose next Mayor!</p>
                  {playerorder.map((a) => {
                    return (
                      <>
                        <BPlayer
                          me={Number(this.props.playerID) == a}
                          playerName={this.props.gameArgs.players[a].name}
                          playerActive={false}
                          dead={deads[a]}
                          vampire={vampires[a]}
                          dracula={this.props.G.draculaID == a}
                          mayor={false}
                          priest={false}
                          chose={() => {
                            this.props.moves.movePickMayor(a, parseInt(this.props.playerID));
                          }}
                        ></BPlayer>
                        <span style={{ width: '5%', display: 'inline-block' }}></span>
                      </>
                    );
                  })}
                </>
              ) : (
                <>
                  <p>
                    {' '}
                    🗳️<b>Special Election</b> 🗳️{' '}
                  </p>
                  <p> The Mayor is chosing the next Mayor.</p>
                </>
              )}
            </div>
          ) : (
            <></>
          )
        }
      </>
    );
  }

  render_execution(playerorder, deads, vampires) {
    return (
      <>
        {
          // parseInt(this.props.playerID) in this.props.ctx.activePlayers &&
          this.props.ctx.phase == 'phaseExecution' ? (
            <div style={{ textAlign: 'center' }}>
              {parseInt(this.props.playerID) in this.props.ctx.activePlayers ? (
                <>
                  <p>
                    🗡️ <b>Execution </b> 🗡️{' '}
                  </p>
                  <p>You are the Mayor, and must Execute a Player!</p>
                  {playerorder.map((a) => {
                    return (
                      <>
                        <BPlayer
                          me={Number(this.props.playerID) == a}
                          playerName={this.props.gameArgs.players[a].name}
                          playerActive={false}
                          dead={deads[a]}
                          vampire={vampires[a]}
                          dracula={this.props.G.draculaID == a}
                          mayor={false}
                          priest={false}
                          chose={() => {
                            this.props.moves.moveExecute(a, parseInt(this.props.playerID));
                          }}
                        ></BPlayer>
                        <span style={{ width: '5%', display: 'inline-block' }}></span>
                      </>
                    );
                  })}
                </>
              ) : (
                <>
                  <p>
                    {' '}
                    🗡️ <b>Execution</b> 🗡️
                  </p>
                  <p> The Mayor must Execute a Player!</p>
                </>
              )}
            </div>
          ) : (
            <></>
          )
        }
      </>
    );
  }

  _discardWrapper(playerIndex: number) {
    if (this.props.ctx.phase == 'phaseDiscardMayor') {
      return (index: number) => {
        return this.props.moves.moveDiscardMayor(index, playerIndex);
      };
    }
    if (this.props.ctx.phase == 'phaseDiscardPriest') {
      return (index: number) => {
        return this.props.moves.moveDiscardPriest(index, playerIndex);
      };
    }
    if (this.props.ctx.phase == 'phaseDiscardPriestVeto') {
      return (index: number) => {
        return this.props.moves.moveDiscardPriest(index, playerIndex);
      };
    }

    return (index: number) => {
      // gotta trick the linter, but at the same time this function needs this signature...
      if (index == 1) {
        return;
      }
      return;
    };
  }

  _vetoWrapper(playerIndex: number) {
    if (this.props.ctx.phase == 'phaseDiscardPriestVeto') {
      return () => {
        return this.props.moves.moveWantVetoPriest(playerIndex);
      };
    }
    if (this.props.ctx.phase == 'phaseVetoMayor') {
      return (want: boolean) => {
        return this.props.moves.moveWantVetoMayor(want, playerIndex);
      };
    }
    return () => {
      return;
    };
  }

  _getGameOver() {
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
