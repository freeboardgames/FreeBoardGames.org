import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';

import { IG } from './interfaces';

import { BPlayer } from './components/bplayer';
import { Type } from 'boardgame.io/dist/types/src/server/db/base';
import { createTextChangeRange } from 'typescript';
interface IBoardProps { G: IG;
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

      console.log(deads)
      console.log(vampires)
      console.log(playerorder)

      return (
        <>
          <GameLayout gameArgs={this.props.gameArgs} allowWiderScreen={true}>
              {playerorder.map( (a) => {
                return (<div>
                  <BPlayer 
                    me={Number(this.props.playerID) == a}

                    playerName={'name'}
                    playerActive={true}
                    dead={deads[a]}
                    vampire={vampires[a]}
                    dracula={this.props.G.draculaID == a}

                    onYes={() => {console.log("YES")}}
                    onNo={() => {console.log("NO")}}
                  >
                  </BPlayer>
                </div>)
              })}
            
          </GameLayout>
        </>
      );
    }
  }

