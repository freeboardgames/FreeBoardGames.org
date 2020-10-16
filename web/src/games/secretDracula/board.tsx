import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';

import { IG } from './interfaces';

import { BVampirePolicies} from './components/bvampirepolicy';
import { BPlayer } from './components/bplayer';
import { BHumanPolicies} from './components/bhumanpolicy';

import { BVote } from './components/bvote';
import { BDiscard } from './components/bdiscard';

import { Type } from 'boardgame.io/dist/types/src/server/db/base';
import { createTextChangeRange } from 'typescript';
interface IBoardProps { 
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps> {
  
    render() {

      var playerorder = Array(this.props.ctx.numPlayers).fill(0)
      var deads = Array(this.props.ctx.numPlayers).fill(false)
      var vampires = Array(this.props.ctx.numPlayers).fill(false)
      for (var i=0 ; i < this.props.ctx.numPlayers; i++){
        playerorder[i] = i
        if (this.props.G.deadIDs.includes(i)) {
          deads[i] = true
        }
        if (this.props.G.vampireIDs.includes(i)) {
          vampires[i] = true
        }
      }


      return (
        <>
          <GameLayout gameArgs={this.props.gameArgs} allowWiderScreen={true}>
            <BVampirePolicies
              playedPolicies={this.props.G.policyBoardVampire.length}
              playerCount={this.props.ctx.numPlayers}
            ></BVampirePolicies>
            {playerorder.map( (a) => {
              return (<div>
                <BPlayer 
                  me={Number(this.props.playerID) == a}
                  playerName={this.props.gameArgs.players[a].name}
                  playerActive={a in this.props.ctx.activePlayers}
                  dead={deads[a]}

                  vampire={vampires[a]}

                  dracula={this.props.G.draculaID == a}
                  mayor={this.props.G.mayorID == a}
                  priest={this.props.G.priestID == a}
                >
                </BPlayer>
              </div>)
            })}
            <BHumanPolicies
              playedPolicies={this.props.G.policyBoardHuman.length}
              playerCount={this.props.ctx.numPlayers}
            ></BHumanPolicies>
                          
            <BDiscard policies={this.props.G.policyHand}
                      vetoEnabled={this.props.G.vetoPower}
                      mayor={this.props.G.mayorID == parseInt(this.props.playerID)}
                      
                      discard={this._discardWrapper(parseInt(this.props.playerID))}
                      veto={this._vetoWrapper(parseInt(this.props.playerID))}
            ></BDiscard>
            <div>
              { this.props.G.log.map((a) => {
                return(<div>
                    { a }
                  </div>)
              }) }
            </div>

            <div>
                  <pre id="json">
                   { JSON.stringify(this.props.ctx, null, '\t') }
                  </pre>
            </div>
          </GameLayout>
        </>
      );
    }

    _discardWrapper(playerIndex: number) {
      if (this.props.ctx.phase == 'phaseDiscardMayor'){
        return (index: number) => {return this.props.moves.moveDiscardMayor(index, playerIndex)}
      }
      if (this.props.ctx.phase == 'phaseDiscardPriest'){
        return (index: number) => {return this.props.moves.moveDiscardPriest(index, playerIndex)}
      }
      if (this.props.ctx.phase == 'phaseDiscardPriestVeto'){
        return (index: number) => {return this.props.moves.moveDiscardPriest(index, playerIndex)}
      }

      return (index: number) => {return}
    }

    _vetoWrapper(playerIndex: number) {
      if (this.props.ctx.phase == 'phaseDiscardPriestVeto'){
        return () => {return this.props.moves.moveWantVetoPriest(playerIndex)}
      }
      if (this.props.ctx.phase == 'phaseDiscardMayor'){
        return (want: boolean) => {return this.props.moves.moveWantVetoPriest(want, playerIndex)}
      }
      return () => {return}
    }

  }

