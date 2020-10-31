import { IG, IPolicy } from './interfaces';

import { Ctx } from 'boardgame.io';
import { isLose, isWin } from './endconditions';

import { phaseChosePriest } from './phases/chosePriest/phase';

import { phaseVotePriest, phaseEndVotePriest } from './phases/vote/phase';

import {
  phaseExecution,
  phaseSpecialElection,
  phaseInvestigate2,
  phaseInvestigate1,
  phasePeekPolicy,
} from './phases/special/phase';

import {
  phaseDiscardMayor,
  phaseDiscardPriest,
  phaseDiscardPriestVeto,
  phaseVetoMayor,
} from './phases/discardVeto/phase';

function setup(ctx: Ctx): IG {

  return _setup(ctx, true, true)
}

//this is the function used for having a better test setup
export function _setup(ctx: Ctx, randomPlayers: boolean, randomDeck: boolean): IG {
  // SETUP BOARD
  let policyDeck = <IPolicy[]>Array(17).fill(<IPolicy>{ garlic: true, chalice: false });
  for (let i = 6; i < 17; i++) {
    policyDeck[i] = <IPolicy>{ garlic: false, chalice: true };
  } // 6 + 11
  if (randomDeck) {
    policyDeck = ctx.random.Shuffle(policyDeck);
  }

  // SETUP PLAYERS
  // shuffle players
  let playerIDToGameID = <number[]>Array(ctx.numPlayers).fill(0);
  for (let i = 0; i < ctx.numPlayers; i++) {
    playerIDToGameID[i] = i;
  }
  if (randomPlayers) {
    playerIDToGameID = ctx.random.Shuffle(playerIDToGameID);
  }
  // chose dracula
  let draculaID = playerIDToGameID[0];
  let vampireCount;
  if (ctx.numPlayers <= 2) {
    // This is never the case in a real game, just in '1v1 with bot' for debug
    vampireCount = 1;
  } else if (ctx.numPlayers <= 6) {
    // 2 vampires (1+1 Drac)
    vampireCount = 2;
  } else if (ctx.numPlayers <= 8) {
    // 3 vampires (2+1 Drac)
    vampireCount = 3;
  } else {
    vampireCount = 4;
  }
  let vampireIDs = [...(<number[]>playerIDToGameID.slice(0, vampireCount))];
  let humanIDs = playerIDToGameID.slice(vampireCount, ctx.numPlayers);

  let finalG = <IG>{
    policyHand: <IPolicy[]>Array(0).fill(null),
    policyDraw: policyDeck,
    policyDiscard: <IPolicy[]>Array(0).fill(null),
    policyBoardHuman: <IPolicy[]>Array(0).fill(null),
    policyBoardVampire: <IPolicy[]>Array(0).fill(null),

    justPlayedVampirePolicy: -1,

    voting: false,
    votesYes: <boolean[]>Array(ctx.numPlayers).fill(null),
    votesNo: <boolean[]>Array(ctx.numPlayers).fill(null),
    voteCountYes: -1,
    voteCountNo: -1,
    voteOks: <boolean[]>Array(ctx.numPlayers).fill(false),

    mayorID: 0,
    priestID: <number>-1,
    lastMayorID: <number>-1,
    lastPriestID: <number>-1,

    electionTracker: <number>0,

    deadIDs: <number[]>Array(0),
    draculaID: draculaID,
    vampireIDs: vampireIDs,
    humanIDs: humanIDs,

    specialElection: -1,
    policyPeek: <IPolicy[]>Array(0).fill(null),
    investigate: 0,
    investigateID: -1,
    vetoPower: false,
    wantVeto: false,

    ok: false,

    log: <string[]>Array(1).fill('Starting'),
  };

  return finalG;
}

export const SecretDraculaGame = {
  name: 'secretdracula',

  setup: setup,

  playerView: (G: IG, ctx: Ctx, playerID: string) => {
    let playerIDInt = parseInt(playerID);

    if (isNaN(playerIDInt)) {
      // However, if this is not a multiplayer then this is NaN.
      //     // For testing only, as this game can only be played Multiplayer.
      return G;
    }

    return {
      ...G,
      policyDraw: G.policyDraw.map(() => {
        return null;
      }), // NOBODY
      policyDiscard: G.policyDiscard.map(() => {
        return null;
      }), // NOBODY
      votesYes: G.votesYes.map(() => {
        return null;
      }),
      votesNo: G.votesNo.map(() => {
        return null;
      }),
      draculaID: 
        (ctx.numPlayers < 7)
        ?
          (G.draculaID == playerIDInt) ? G.draculaID : -1 // only dracula knows if <7 players
        :
          (playerIDInt in G.vampireIDs) ? G.draculaID : -1, // all vampires know if >= 7 players
      
      vampireIDs: 
        (ctx.numPlayers < 7)
        ?
        // in <7 player game, all vampires know of all others
          G.vampireIDs.includes(playerIDInt) ? 
                    [...G.vampireIDs]
                    : [
                         ...G.vampireIDs.map(() => {
                           return -1;
                         }),
                       ]
        :
        // in >=7 player game, dracula doesn't know about other vampires
          G.vampireIDs.includes(playerIDInt) 
            ? 
                    G.draculaID == playerIDInt
                    ? [playerIDInt]
                    : [...G.vampireIDs]
            : [
               ...G.vampireIDs.map(() => {
               return -1;
               }),
            ],
      humanIDs: G.vampireIDs.includes(playerIDInt)
        ? G.humanIDs
        : G.humanIDs.map(() => {
            return -1;
          }),
      policyHand:
        playerIDInt == G.mayorID && G.policyHand.length == 3 // I'm Mayor and 3 cards, so my draw
          ? G.policyHand
          : (playerIDInt == G.priestID || playerIDInt == G.mayorID) && G.policyHand.length == 2 // I'm Priest and 2 cards, so my draw
          ? // or im Mayor and it comes back to me due to Veto
            G.policyHand
          : //No other players should see the hand ever
            G.policyHand.map(() => {
              return null;
            }),
      policyPeek: playerIDInt == G.mayorID && G.policyPeek.length == 3 ? G.policyPeek : [],
      investigate: playerIDInt == G.mayorID ? G.investigate : 0,
      // everyone gets investigateID
    };
  },

  phases: {
    phaseChosePriest: phaseChosePriest,

    phaseVotePriest: phaseVotePriest,
    phaseEndVotePriest: phaseEndVotePriest,

    phaseDiscardMayor: phaseDiscardMayor,
    phaseDiscardPriest: phaseDiscardPriest,
    phaseDiscardPriestVeto: phaseDiscardPriestVeto,
    phaseVetoMayor: phaseVetoMayor,

    phaseCheckElectionCounter: {
      onBegin: (G) => {
        //- console.log('starting phaseCheckElectionCounter');
        return G;
      },
      endIf: (G: IG) => {
        //- console.log('endIf phaseCheckElectionCounter');
          return { next: 'phaseChosePriest' };
      },
      onEnd: (G: IG, ctx: Ctx) => {
        //- console.log('ending phaseCheckElectionCounter');
        if (G.electionTracker == 2) {
          G.electionTracker = 0
          if (G.policyDraw.length < 3) {
            G.policyDraw.push(...G.policyDiscard);
            G.policyDiscard = <IPolicy[]>Array(0);
          }
          let topCard = G.policyDraw.pop();
          G.policyBoardVampire.push(topCard);

          G.lastMayorID = -1; // any mayor priest combi allowed again.
          G.lastPriestID = -1;
          G.mayorID = (G.mayorID + 1) % ctx.numPlayers; // chose next mayor
          G.priestID = -1; // no active priest
        } else {
          G.electionTracker += 1;
          G.mayorID = (G.mayorID + 1) % ctx.numPlayers; // chose next mayor
          G.priestID = -1; // no active priest
        }

        return G;
      },
    },
    //used to navigate to special phases (if relevant)
    phaseSpecial: {
      // Used to see if we need to start a special phase or go back to start
      onBegin: (G: IG) => {
        //- console.log('starting phaseSpecial');
        if (G.specialElection != -1) {
          // We were just in special. Go back to normal
          G.mayorID = G.specialElection;
          G.specialElection = -1;
        }

        return G;
      },
      endIf: (G: IG, ctx: Ctx) => {
        //- console.log('endIf phaseSpecial' + G.justPlayedVampirePolicy);
        if (G.electionTracker != 0){ // we got here by forcing a card due to the tracker
          //- console.log(' 0 ');
          return { next: 'phaseNoSpecial' };
        }
        if (G.justPlayedVampirePolicy == -1) {
          //- console.log(' 1 ');
          return { next: 'phaseNoSpecial' };
        }
        if (ctx.numPlayers < 7) {
          if (G.justPlayedVampirePolicy == 2) {
            //- console.log(' 2 ');
            return { next: 'phasePeekPolicy' };
          } else if (G.justPlayedVampirePolicy == 3) {
            //- console.log(' 3 this one');
            return { next: 'phaseExecution' };
            //- console.log(' 3 ');
          } else if (G.justPlayedVampirePolicy == 4) {
            //- console.log(' 4 ');
            return { next: 'phaseExecution' };
          }
          //- console.log(' 5 ');
          return { next: 'phaseNoSpecial' };
        } else if (ctx.numPlayers < 9) {
          if (G.justPlayedVampirePolicy == 1) {
            //- console.log(' 6 ');
            return { next: 'phaseInvestigate1' };
          } else if (G.justPlayedVampirePolicy == 2) {
            //- console.log(' 7 ');
            return { next: 'phaseSpecialElection' };
          } else if (G.justPlayedVampirePolicy == 3) {
            //- console.log(' 8 ');
            return { next: 'phaseExecution' };
          } else if (G.justPlayedVampirePolicy == 4) {
            //- console.log(' 9 ');
            return { next: 'phaseExecution' };
          }
          //- console.log(' 10 ');
          return { next: 'phaseNoSpecial' };
        } else {
          if (G.justPlayedVampirePolicy == 0) {
            //- console.log(' 11 ');
            return { next: 'phaseInvestigate1' };
          } else if (G.justPlayedVampirePolicy == 1) {
            //- console.log(' 11 ');
            return { next: 'phaseInvestigate1' };
          } else if (G.justPlayedVampirePolicy == 2) {
            //- console.log(' 12 ');
            return { next: 'phaseSpecialElection' };
          } else if (G.justPlayedVampirePolicy == 3) {
            //- console.log(' 13 ');
            return { next: 'phaseExecution' };
          } else if (G.justPlayedVampirePolicy == 4) {
            //- console.log(' 14 ');
            return { next: 'phaseExecution' };
          }
          //- console.log(' 15 ');
          return { next: 'phaseNoSpecial' };
        }
      },
      onEnd: (G: IG) => {
        //- console.log('ending phaseSpecial');
        if (G.justPlayedVampirePolicy == 4) {
          G.vetoPower = true;
        }
        G.justPlayedVampirePolicy = -1;
        return G;
      },
    },
    //used to reset things after speical elections
    phaseNoSpecial: {
      onBegin: (G: IG) => {
        //- console.log('starting phaseNoSpecial');
        return G;
      },
      endIf: () => {
        //- console.log('endIf phaseNoSpecial');
        return { next: 'phaseChosePriest' };
      },
      onEnd: (G: IG, ctx: Ctx) => {
        //- console.log('ending phaseNoSpecial');
        G.priestID = -1;
        if (G.specialElection != -1) {
          //- console.log('reseting Mayor back to prior to special');
          G.mayorID = G.specialElection;
          G.specialElection = -1;
        }
        G.mayorID = (G.mayorID + 1) % ctx.numPlayers;
        while (G.deadIDs.includes(G.mayorID)) {
          //- console.log('Mayor ' + G.mayorID + ' is dead. Going to next.');
          G.mayorID = (G.mayorID + 1) % ctx.numPlayers;
        }

        return G;
      },
    },
    phaseExecution: phaseExecution,
    phaseSpecialElection: phaseSpecialElection,
    phaseInvestigate2: phaseInvestigate2,
    phaseInvestigate1: phaseInvestigate1,
    phasePeekPolicy: phasePeekPolicy,
  },

  endif: (G) => {
    if (isLose(G)) {
      return { lose: true };
    }
    if (isWin(G)) {
      return { win: true };
    }
  },
};
