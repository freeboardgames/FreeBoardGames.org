import { IG, IPolicy } from './../../interfaces';

import { Ctx } from 'boardgame.io';
import { moveDiscardMayor } from './moves';
import { moveDiscardPriest } from './moves';
import { moveWantVetoPriest } from './moves';
import { moveWantVetoMayor } from './moves';

export var phaseDiscardMayor = {
    onBegin: (G: IG, ctx: Ctx) => {
      console.log('starting phaseDiscardMayor');
      var p = G.mayorID;
      var activePlayers = { value: {} };
      activePlayers.value[p] = 'phaseDiscardMayor';
      ctx.events.setActivePlayers(activePlayers);
      if (G.policyDraw.length < 3) {
        G.policyDraw.push(...G.policyDiscard);
        G.policyDiscard = <IPolicy[]>Array(0);
      }
      G.policyHand.push(G.policyDraw.pop());
      G.policyHand.push(G.policyDraw.pop());
      G.policyHand.push(G.policyDraw.pop());

      return G;
    },
    moves: {
      moveDiscardMayor: {
        move: moveDiscardMayor,
        client: false,
      },
    },
    endIf: (G: IG, ctx: Ctx) => {
      if (G.policyHand.length == 2) {
        if (!G.vetoPower) {
          console.log('Moving to phaseDiscardPriest');
          return { next: 'phaseDiscardPriest' };
        } else if (G.vetoPower) {
          return { next: 'phaseDiscardPriestVeto' };
        }
      }
    },
    onEnd: (G: IG, ctx: Ctx) => {
      console.log('ending phaseDiscardMayor');
      G.lastMayorID = G.mayorID;
      G.lastPriestID = G.priestID;
      G.justPlayedVampirePolicy = -1;
      return G;
    },
  }
export var phaseDiscardPriest = {
    onBegin: (G: IG, ctx: Ctx) => {
      console.log('starting phaseDiscardPriest');
      var p = G.priestID;
      var activePlayers = { value: {} };
      activePlayers.value[p] = 'phaseDiscardPriest';
      ctx.events.setActivePlayers(activePlayers);
      return G;
    },
    moves: {
      moveDiscardPriest: {
        move: moveDiscardPriest,
        client: false,
      },
    },
    endIf: (G: IG, ctx: Ctx) => {
      if (G.policyHand.length == 1) {
        console.log('A0');
        return { next: 'phaseSpecial' };
      }
      return false;
    },
    onEnd: (G: IG, ctx: Ctx) => {
      console.log('ending phaseDiscardPriest');
      console.log('and setting to ', G.policyHand[0].chalice ? G.policyBoardVampire.length : -1);
      //     console.log("B0")
      //     return G
      return {
        ...G,
        policyHand: [],
        policyBoardHuman: G.policyHand[0].garlic ? [...G.policyBoardHuman, G.policyHand[0]] : [...G.policyBoardHuman],
        policyBoardVampire: G.policyHand[0].chalice
          ? [...G.policyBoardVampire, G.policyHand[0]]
          : [...G.policyBoardVampire],
        justPlayedVampirePolicy: G.policyHand[0].chalice ? G.policyBoardVampire.length : -1,
      };
    },
  }

export var  phaseDiscardPriestVeto =  {
    onBegin: (G: IG, ctx: Ctx) => {
      var p = G.priestID;
      var activePlayers = { value: {} };
      activePlayers.value[p] = 'phaseDiscardPriestVeto';
      ctx.events.setActivePlayers(activePlayers);

      return G;
    },
    moves: {
      moveDiscardPriest: {
        move: moveDiscardPriest,
        client: false,
      },
      moveWantVetoPriest: {
        move: moveWantVetoPriest,
        client: false,
      },
    },
    endIf: (G: IG, ctx: Ctx) => {
      if (!G.wantVeto) {
        return { next: 'phaseSpecial' }; // didn't use veto power
      } else if (G.wantVeto) {
        return { next: 'phaseVetoMayor' }; // didn't use veto power
      }
    },
    onEnd: (G: IG, ctx: Ctx) => {
      if (!G.wantVeto) {
        return {
          ...G,
          policyHand: [],
          policyBoardHuman: G.policyHand[0].garlic
            ? [...G.policyBoardHuman, G.policyHand[0]]
            : [...G.policyBoardHuman],
          policyBoardVampire: G.policyHand[0].chalice
            ? [...G.policyBoardVampire, G.policyHand[0]]
            : [...G.policyBoardVampire],
          justPlayedVampirePolicy: G.policyHand[0].chalice ? G.policyBoardVampire.length : -1,
        };
      }
      return G;
    },
  }

 export var phaseVetoMayor = {
    onBegin: (G: IG, ctx: Ctx) => {
      var p = G.mayorID;
      var activePlayers = { value: {} };
      activePlayers.value[p] = 'phaseDiscardPriestVeto';
      ctx.events.setActivePlayers(activePlayers);

      return G;
    },
    endIf: (G: IG, ctx: Ctx) => {
      if (ctx.activePlayers == null) {
        if (G.wantVeto) {
          return { next: 'phaseDiscardPriest' };
        } else {
          return { next: 'phaseNoSpecial' };
        }
      }
    },
    onEnd: (G: IG, ctx: Ctx) => {
      if (G.wantVeto) {
        G.policyDiscard.push(G.policyHand.pop());
        G.policyDiscard.push(G.policyHand.pop());
        G.wantVeto = false;
      }

      return G;
    },
    moves: {
      moveWantVetoMayor: {
        move: moveWantVetoMayor,
        client: false,
      },
    },
  }