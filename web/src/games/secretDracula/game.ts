import { IG, IPolicy } from './interfaces';

import { Ctx } from 'boardgame.io';
import { ActivePlayers } from 'boardgame.io/core';
import { isLose, isWin } from './endconditions';

import {validateOnEntry, validateEndIf, validateOnExit} from './phases/chosePriest/validateState';
import {moveChosePriest, moveValidTest} from './phases/chosePriest/moves';

import {moveVoteYes, moveVoteNo } from './phases/phaseVote/moves';

import {moveDiscardMayor} from './phases/phaseDiscardMayor/moves';
import {moveDiscardPriest} from './phases/phaseDiscardPriest/moves';

import {moveWantVetoPriest} from './phases/veto/moves';
import {moveWantVetoMayor} from './phases/veto/moves';

import {movePickMayor} from './phases/phaseSpecial/moves';
import {moveOK} from './phases/phaseSpecial/moves';
import {moveExecute} from './phases/phaseSpecial/moves';
import {moveInvestigateStart} from './phases/phaseSpecial/moves';
import {moveInvestigateEnd} from './phases/phaseSpecial/moves';
import { json } from 'express';

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
        policyHand: <IPolicy[]>Array(0).fill(null),
        policyDraw: policyDeck,
        policyDiscard: <IPolicy[]>Array(0).fill(null),
        policyBoardHuman: <IPolicy[]>Array(0).fill(null),
        policyBoardVampire: <IPolicy[]>Array(0).fill(null),
        policyPriestNr: <number> -1,

        specialPolicies: speicalPolicies,
        justPlayedVampirePolicy: -1,

        voting: false,
        votesYes: <boolean[]>Array(ctx.numPlayers).fill(null),
        votesNo: <boolean[]>Array(ctx.numPlayers).fill(null),

        mayorID: 0,
        priestID: <number>-1,
        lastMayorID: <number>-1,
        lastPriestID: <number>-1,

        electionTracker: <number>0,

        deadIDs: <number[]>Array(ctx.numPlayers).fill(-1),
        draculaID: draculaID,
        vampireIDs: vampireIDs,
        humanIDs: humanIDs,

        specialElection: -1,
        policyPeek: <IPolicy[]>Array(0).fill(null),
        investigate: 0,
        vetoPower: false,
        wantVeto: false,

        log: <string[]>Array(1).fill("Starting"),
    }

    return  finalG
}

export const SecretDraculaGame = {
    name: 'secretdracula',

    setup: setup,

    playerView: (G: IG, ctx: Ctx, playerID) => {
        return G
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
            votesYes: G.votesYes.map(() => { return null}),
            votesNo: G.votesNo.map(() => { return null}),
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

                var p = G.mayorID
                var activePlayers = { value: {} };
                activePlayers.value[p] = 'phaseChosePriest';
                ctx.events.setActivePlayers(activePlayers)

                return G
            },
            moves: {
                moveValidTest: { 
                    move: moveValidTest,
                    client: false,
                    },
                moveChosePriest: {
                    move: moveChosePriest,
                    client: false,
                    },
            },
            endIf: (G, ctx) => {
                if (validateEndIf(G, ctx)){
                    return {next: 'phaseVotePriest'}
                }
            },
            onEnd: (G,ctx) => {
                if (!validateOnExit(G, ctx)){
                    console.log("Error 2 !")
                }
                return G
            }
        },
        phaseVotePriest: {
            onBegin: (G, ctx) => {
                return G

            },
            moves: {
                moveVoteYes: {
                    move: moveVoteYes,
                    client: false,
                },
                moveVoteNo:{
                    move: moveVoteNo,
                    client: false,
                },
            },
            endIf: (G: IG,ctx: Ctx) => {
                var yesVotes = G.votesYes.reduce((a, b) => {return b == true ? a+1 : a}, 0)
                var noVotes = G.votesNo.reduce((a, b) => {return b == true ? a+1 : a}, 0)
                if (yesVotes +noVotes == ctx.numPlayers ){
                    if (yesVotes > noVotes){ // Successful Vote
                        return { next: 'phaseDiscardMayor'}
                    } else { 
                        return {next: 'phaseCheckElectionCounter'}
                    }
                }
                return false
            },
            onEnd: (G,ctx) => {
                G.voting = false
                G.votesYes = <boolean[]>Array(ctx.numPlayers).fill(null)
                G.votesNo = <boolean[]>Array(ctx.numPlayers).fill(null)
                return G
            },
            turn: {
              activePlayers: { all: 'phaseVotePriest', moveLimit: 1}
            },
        },
        phaseCheckElectionCounter: {
            onEnd: (G: IG, ctx: Ctx) => {
                if (G.electionTracker == 2){
                    G.electionTracker = 0

                    if (G.policyDraw.length < 3){
                        G.policyDraw.push(...G.policyDiscard)
                        G.policyDiscard = <IPolicy[]>Array(0)
                    }
                    var topCard = G.policyDraw.pop()

                    if (topCard.chalice) {
                        var n = G.policyBoardVampire.push(topCard)
                        G.justPlayedVampirePolicy = n
                    } else {
                        var n = G.policyBoardHuman.push(topCard)
                    }
                } else {
                    G.electionTracker += 1
                }

                G.lastMayorID = -1
                G.lastPriestID = -1
                G.mayorID = (G.mayorID + 1) % ctx.numPlayers
                G.priestID = -1

                return G
            },
            endIf: (G: IG, ctx: Ctx) => {
                return {next: 'phaseChosePriest'}
            }
        },
        phaseDiscardMayor:{
            onBegin: (G: IG, ctx: Ctx) => {
                var p = G.mayorID
                var activePlayers = { value: {} };
                activePlayers.value[p] = 'phaseDiscardMayor';
                ctx.events.setActivePlayers(activePlayers)
                if (G.policyDraw.length < 3){
                    G.policyDraw.push(...G.policyDiscard)
                    G.policyDiscard = <IPolicy[]>Array(0)
                }
                G.policyHand.push(G.policyDraw.pop())
                G.policyHand.push(G.policyDraw.pop())
                G.policyHand.push(G.policyDraw.pop())

                return G
            },
            moves:{
                moveDiscardMayor:{
                    move: moveDiscardMayor,
                    client: false,
                },
            },
            endIf: (G: IG, ctx: Ctx) => {
                if (G.policyHand.length == 2) {
                    if (!G.vetoPower) {
                        console.log("Moving to phaseDiscardPriest")
                        return {next: 'phaseDiscardPriest'}
                    } else if (G.vetoPower) {
                        return {next: 'phaseDiscardPriestVeto'}
                    }
                }
            },
            onEnd: (G: IG, ctx: Ctx) => {
                G.lastMayorID = G.mayorID
                G.lastPriestID = G.priestID
                G.justPlayedVampirePolicy = -1
                return G
            },
        },
        phaseDiscardPriest: {
            onBegin: (G: IG, ctx: Ctx) => {
                var p = G.priestID
                var activePlayers = { value: {} };
                activePlayers.value[p] = 'phaseDiscardPriest';
                ctx.events.setActivePlayers(activePlayers)
                return G
            },
            moves:{
                moveDiscardPriest:{
                    move: moveDiscardPriest,
                    client: false,
                },
            },
            endIf: (G: IG, ctx: Ctx) => {
                if (G.policyHand.length == 1) { 
                    console.log("A0")
                    return {next: 'phaseSpecial'}
                }
                return false
            },
            // onEnd: (G: IG, ctx: Ctx) => {
            // //     console.log("B0")
            // //     return G
            //     return {
            //         ...G,
            //         policyHand: [],
            //         policyBoardHuman: G.policyHand[0].garlic    ? [...G.policyBoardHuman, G.policyHand[0]] : [...G.policyBoardHuman],
            //         policyBoardVampire: G.policyHand[0].chalice ? [...G.policyBoardVampire, G.policyHand[0]] : [...G.policyBoardVampire],
            //         justPlayedVampirePolicy: G.policyHand[0].chalice ? G.policyBoardVampire.length + 1 :  -1,
            //     }
            // },
        },
        // phaseAfterDiscardPriest: {
        //     onBegin: (G: IG, ctx: Ctx) => {
        //         console.log("C0")
        //         console.log(JSON.stringify(G))

        //         return {
        //             ...G,
        //             policyHand: [],
        //             policyBoardHuman: G.policyHand[0].garlic    ? [...G.policyBoardHuman, G.policyHand[0]] : [...G.policyBoardHuman],
        //             policyBoardVampire: G.policyHand[0].chalice ? [...G.policyBoardVampire, G.policyHand[0]] : [...G.policyBoardVampire],
        //             justPlayedVampirePolicy: G.policyHand[0].chalice ? G.policyBoardVampire.length + 1 :  -1,
        //         }
        //     },
        //     endIf: (G: IG, ctx: Ctx) => {
        //         return {next: 'phaseSpecial'}
        //     },
        // },
        phaseDiscardPriestVeto: {
            onBegin: (G: IG, ctx: Ctx) => {
                var p = G.priestID
                var activePlayers = { value: {} };
                activePlayers.value[p] = 'phaseDiscardPriestVeto';
                ctx.events.setActivePlayers(activePlayers)

                return G
            },
            moves:{
                moveDiscardPriest:{
                    move: moveDiscardPriest,
                    client: false,
                },
                moveWantVetoPriest:{
                    move: moveWantVetoPriest,
                    client: false,
                },
            },
            endIf: (G: IG, ctx: Ctx) => {
                if (G.policyPriestNr != -1){
                    return {next: 'phaseSpecial'} // didn't use veto power
                } else if (G.wantVeto) {
                    return {next: 'phaseVetoMayor'} // didn't use veto power
                }
            },
            onEnd: (G: IG, ctx: Ctx) => {
                if (G.policyPriestNr != -1){
                    if (G.policyPriestNr == 1) { 
                        var card = G.policyHand.pop()
                        G.policyHand.pop()
                    } else { //drop first
                        G.policyHand.pop()
                        var card = G.policyHand.pop()
                    }

                    if (card.chalice){
                        var n = G.policyBoardVampire.push(card)
                        G.justPlayedVampirePolicy = n
                    } else {
                        G.policyBoardHuman.push(card)
                    }
                    G.policyPriestNr = -1
                }
                return G
            },
        },
        phaseVetoMayor: {
            onBegin: (G: IG, ctx: Ctx) => {
                var p = G.mayorID
                var activePlayers = { value: {} };
                activePlayers.value[p] = 'phaseDiscardPriestVeto';
                ctx.events.setActivePlayers(activePlayers)

                return G
            },
            endIf: (G: IG, ctx: Ctx) => {
                if(ctx.activePlayers == null) {
                    if (G.wantVeto){
                        return {next: 'phaseDiscardPriest'}
                    } else {
                        return {next: 'phaseNoSpecial'}
                    }
                }
            },
            onEnd: (G: IG, ctx: Ctx) => {
                if (G.wantVeto){
                    G.policyDiscard.push(G.policyHand.pop())
                    G.policyDiscard.push(G.policyHand.pop())
                    G.wantVeto = false
                }

                return G
            },
            moves:{
                moveWantVetoMayor:{
                    move:moveWantVetoMayor,
                    client: false,
                },
            }
        },
        phaseSpecial: { // Used to see if we need to start a special phase or go back to start
            onBegin: (G: IG, ctx: Ctx) => {
                if (G.specialElection != -1){  // We were just in special. Go back to normal
                    G.mayorID = G.specialElection
                    G.specialElection = -1
                }

                return G

            },
            endIf: (G: IG, ctx: Ctx) => {
                if (G.justPlayedVampirePolicy == -1){
                    return {next: 'phaseNoSpecial'}
                }
                if (ctx.numPlayers < 7){
                    if (G.justPlayedVampirePolicy == 2){
                        return {next: 'phasePeekPolicy'}
                    } else if (G.justPlayedVampirePolicy == 3){
                        return {next: 'phaseExecution'}
                    } else if (G.justPlayedVampirePolicy == 4){
                        return {next: 'phaseExecution'}
                    }
                    return {next: 'phaseNoSpecial'} // Game over anyways
                } else if (ctx.numPlayers < 9){
                    if (G.justPlayedVampirePolicy == 1){
                        return {next: 'phaseInvestigate1'}
                    } else if (G.justPlayedVampirePolicy == 2){
                        return {next: 'phaseSpecialElection'}
                    } else if (G.justPlayedVampirePolicy == 3){
                        return {next: 'phaseExecution'}
                    } else if (G.justPlayedVampirePolicy == 4){
                        return {next: 'phaseExecution'}
                    }
                    return {next: 'phaseNoSpecial'} // Game over anyways
                } else {
                    if (G.justPlayedVampirePolicy == 0){
                        return {next: 'phaseInvestigate1'}
                    } else if (G.justPlayedVampirePolicy == 1){
                        return {next: 'phaseInvestigate1'}
                    } else if (G.justPlayedVampirePolicy == 2){
                        return {next: 'phaseSpecialElection'}
                    } else if (G.justPlayedVampirePolicy == 3){
                        return {next: 'phaseExecution'}
                    } else if (G.justPlayedVampirePolicy == 4){
                        return {next: 'phaseExecution'}
                    }
                    return {next: 'phaseNoSpecial'} // Game over anyways

                }
            },
            onEnd: (G: IG, ctx: Ctx) => {
                if (G.justPlayedVampirePolicy == 4){
                    G.vetoPower = true
                }
                G.justPlayedVampirePolicy = -1
                return G
            }
        },
        phaseNoSpecial:{
            endIf: (G: IG, ctx: Ctx) => {
                return {next: 'phaseChosePriest'}
            },
            onEnd: (G: IG, ctx: Ctx) => {
                G.electionTracker = 0
                G.priestID = -1
                G.mayorID = (G.mayorID + 1) % ctx.numPlayers
                while (!G.deadIDs.includes(G.mayorID)){
                    G.mayorID = (G.mayorID + 1) % ctx.numPlayers
                }

                return G
            }
        },
        phasePeekPolicy:{
            onBegin: (G: IG, ctx: Ctx) => {
                var p = G.mayorID
                var activePlayers = { value: {} };
                activePlayers.value[p] = 'phasePeekPolicy';
                ctx.events.setActivePlayers(activePlayers)

                if (G.policyDraw.length < 3){
                    G.policyDraw.push(...G.policyDiscard)
                    G.policyDiscard = <IPolicy[]>Array(0)
                }
                G.policyPeek.push(G.policyDraw.pop())
                G.policyPeek.push(G.policyDraw.pop())
                G.policyPeek.push(G.policyDraw.pop())

                return G
            },
            endIf: (G: IG, ctx: Ctx) => {
                if (G.policyPeek.length == 0) {
                    return {next: 'phaseNoSpecial'}
                }

            },
            moves: {
                moveOK:{
                    move:moveOK,
                    client: false,
                },
            },
        },
        phaseInvestigate1:{
            onBegin: (G: IG, ctx: Ctx) => {
                var p = G.mayorID
                var activePlayers = { value: {} };
                activePlayers.value[p] = 'phaseInvestigate1';
                ctx.events.setActivePlayers(activePlayers)
            },
            endIf: (G: IG, ctx: Ctx) => {
                if(G.investigate != 0) {
                    return {next: 'phaseInvestigate2'}
                }
            },
            onEnd: (G: IG, ctx: Ctx) => {
                return G

            },
            moves: {
                moveInvestigateStart:{
                    move:moveInvestigateStart,
                    client: false,
                },
            },
        },
        phaseInvestigate2:{
            onBegin: (G: IG, ctx: Ctx) => {
                var p = G.mayorID
                var activePlayers = { value: {} };
                activePlayers.value[p] = 'phaseInvestigate2';
                ctx.events.setActivePlayers(activePlayers)
            },
            endIf: (G: IG, ctx: Ctx) => {
                if(G.investigate == 0) {
                    return {next: 'phaseNoSpecial'}
                }
            },
            onEnd: (G: IG, ctx: Ctx) => {
            },
            moves: {
                moveInvestigateEnd:{
                    move:moveInvestigateEnd,
                    client: false,
                },
            },
        },
        phaseSpecialElection:{
            onBegin: (G: IG, ctx: Ctx) => {
                var p = G.mayorID
                var activePlayers = { value: {} };
                activePlayers.value[p] = 'phaseSpecialElection';
                ctx.events.setActivePlayers(activePlayers)
                G.specialElection = -1
                return G
            },
            endIf: (G: IG, ctx: Ctx) => {
                if (G.specialElection != -1){
                    return {next: "phaseChosePriest"}
                }
            },
            onEnd: (G: IG, ctx: Ctx) => {
                G.electionTracker = 0
                G.priestID = -1
                return G
            },
            moves: {
                movePickMayor:{
                    move:movePickMayor,
                    client: false,
                },
            },

        },
        phaseExecution:{
            onBegin: (G: IG, ctx: Ctx) => {
                var p = G.mayorID
                var activePlayers = { value: {} };
                activePlayers.value[p] = 'phaseExecution';
                ctx.events.setActivePlayers(activePlayers)
            },
            endIf: (G: IG, ctx: Ctx) => {
                if(ctx.activePlayers == null) {
                    return {next: 'phaseNoSpecial'}
                }
            },
            onEnd: (G: IG, ctx: Ctx) => {

            },
            moves: {
                moveExecute:{
                    move:moveExecute,
                    client: false,
                },
            },
        },
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