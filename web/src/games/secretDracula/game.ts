import { IG, IPolicy } from './interfaces';

import { Ctx, ActivePlayers, } from 'boardgame.io';
import { isLose, isWin } from './endconditions';

import {validateOnEntry, validateEndIf, validateOnExit} from './phases/choseMayor/validateState';
import {moveChosePriest, moveValidTest} from './phases/choseMayor/moves';

function setup(ctx: Ctx): IG {
    // SETUP BOARD
    var policyDeck = <IPolicy[]>Array(17).fill(<IPolicy>{garlic: true, chalice: false});
    for (var i=6; i < 17; i++){
        policyDeck[i] = <IPolicy>{garlic: false, chalice: true}
    } // 6 + 11

    var speicalPolicies =  Array(6).fill(null)

    // SETUP PLAYERS
    // shuffle players
    var playerIDToGameID = <number[]>Array(ctx.numPlayers).fill(0)
    for (var i=0; i < ctx.numPlayers; i++){
        playerIDToGameID[i] = i
    }
    playerIDToGameID = ctx.random.Shuffle(playerIDToGameID)
    // chose dracula
    var draculaID = playerIDToGameID[0]
    if (ctx.numPlayers <= 2) { // This is never the case in a real game, just in '1v1 with bot' for debug
        var vampireCount = 1
    } else if (ctx.numPlayers <= 6) { // 2 vampires (1+1 Drac)
        var vampireCount = 2
    } else if (ctx.numPlayers <= 8) { // 3 vampires (2+1 Drac)
        var vampireCount = 3
    } else  {
        var vampireCount = 4
    }
    var vampireIDs = [...<number[]>playerIDToGameID.slice(0,vampireCount)]
    var humanIDs = playerIDToGameID.slice(vampireCount, ctx.numPlayers)
    

    var finalG = <IG>{
        policyDraw: policyDeck,
        policyDrawCount: 17,
        policyDiscard: <IPolicy[]>Array(17).fill(null),
        policyDiscardCount: 0,
        policyBoardHuman: <IPolicy[]>Array(5).fill(null),
        policyBoardVampire: <IPolicy[]>Array(6).fill(null),

        specialPolicies: speicalPolicies,

        voting: false,
        mayorID: 0,
        priestID: <number>-1,
        lastMayorID: <number>-1,
        lastPriestID: <number>-1,

        electionTracker: <number>0,

        deadIDs: <number[]>Array(ctx.numPlayers).fill(-1),
        draculaID: draculaID,
        vampireIDs: vampireIDs,
        humanIDs: humanIDs,
    }

    return  finalG
}

export const SecretDraculaGame = {
    name: 'secretdracula',

    setup: setup,

    playerView: (G: IG, ctx: Ctx, playerID) => {
        var playerIDInt = parseInt(playerID);


        if (isNaN(playerIDInt)) {
          // However, if this is not a multiplayer then this is NaN.
          //     // For testing only, as this game can only be played Multiplayer.
          return G;
        }

        return {
            ...G,
            policyDraw: G.policyDraw.map(() => {
                return null
            }), // NOBODY
            policyDiscard: G.policyDiscard.map(() => {
                return null
            }), // NOBODY
            draculaID: G.draculaID == playerIDInt ? G.draculaID : -1, // ONLY DRACULA
            // ONLY VAMPIRES:
            vampireIDs: G.vampireIDs.includes(playerIDInt) ?
                [...G.vampireIDs]
                :
                [...G.vampireIDs.map(() => {
                    return -1 
                })],
            humanIDs: G.vampireIDs.includes(playerIDInt) ?
                G.humanIDs
                :
                G.humanIDs.map(() => {
                    return -1 
                }),
        }
    },

    phases: {
        phaseChosePriest: {
            start: true,
            onBegin: (G, ctx) => {
                if (!validateOnEntry(G, ctx)){
                    console.log("Error 1 !")
                }
                if (G.lastMayorID == -1){ //First Round
                    var gameID = '0'
                    console.log(gameID)
                    ctx.events.setActivePlayers({
                         value: {
                             '0': 'phaseChosePriest',
                        },
                    })
                } else {
                    
                } 

            },
            moves: {
                moveValidTest,
                moveChosePriest,
            },
            endIf: (G, ctx) => {
                return validateEndIf(G, ctx)
            },
            next: 'phaseVotePriest',
            onEnd: (G,ctx) => {
                if (!validateOnExit(G, ctx)){
                    console.log("Error 2 !")
                }

            }
        },
        phaseVotePriest: {
            endIf: (G,ctx) => {

            }
        }

    },

    endif: (G, ctx) => {
        if (isLose(G)){
            return { lose: true}
        }
        if (isWin(G)){
            return { win: true}
        }
    },

}