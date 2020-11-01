import { IG, IPolicy } from './../../interfaces';

import { Ctx } from 'boardgame.io';
import { moveDiscardMayor } from './moves';
import { moveDiscardPriest } from './moves';
import { moveWantVetoPriest } from './moves';
import { moveWantVetoMayor } from './moves';

export let phaseDiscardMayor = {
  onBegin: (G: IG, ctx: Ctx) => {
    //- console.log('starting phaseDiscardMayor');
    let p = G.mayorID;
    let activePlayers = { value: {} };
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
  endIf: (G: IG) => {
    if (G.policyHand.length == 2) {
      if (!G.vetoPower) {
        //- console.log('Moving to phaseDiscardPriest');
        return { next: 'phaseDiscardPriest' };
      } else if (G.vetoPower) {
        return { next: 'phaseDiscardPriestVeto' };
      }
    }
  },
  onEnd: (G: IG) => {
    //- console.log('ending phaseDiscardMayor');
    G.lastMayorID = G.mayorID;
    G.lastPriestID = G.priestID;
    G.justPlayedVampirePolicy = -1;
    return G;
  },
};
export let phaseDiscardPriest = {
  onBegin: (G: IG, ctx: Ctx) => {
    //- console.log('starting phaseDiscardPriest');
    let p = G.priestID;
    let activePlayers = { value: {} };
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
  endIf: (G: IG) => {
    if (G.policyHand.length == 1) {
      //- console.log('A0');
      return { next: 'phaseSpecial' };
    }
    return false;
  },
  onEnd: (G: IG) => {
    //- console.log('ending phaseDiscardPriest');
    //- console.log('and setting to ', G.policyHand[0].chalice ? G.policyBoardVampire.length : -1);
    //     //- console.log("B0")
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
};

export let phaseDiscardPriestVeto = {
  onBegin: (G: IG, ctx: Ctx) => {
    let p = G.priestID;
    let activePlayers = { value: {} };
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
  endIf: (G: IG) => {
    if (G.wantVeto) {
      return { next: 'phaseVetoMayor' }; 
    }
    if (G.policyHand.length == 1) {
      //- console.log('A0');
      return { next: 'phaseSpecial' };
    }
    return false
  },
  onEnd: (G: IG) => {
    if (!G.wantVeto) {
      return {
        ...G,
        policyHand: [],
        policyBoardHuman: G.policyHand[0].garlic ? [...G.policyBoardHuman, G.policyHand[0]] : [...G.policyBoardHuman],
        policyBoardVampire: G.policyHand[0].chalice
          ? [...G.policyBoardVampire, G.policyHand[0]]
          : [...G.policyBoardVampire],
        justPlayedVampirePolicy: G.policyHand[0].chalice ? G.policyBoardVampire.length : -1,
      };
    }
    return {
      ...G,
      ok: false
    };
  },
};

export let phaseVetoMayor = {
  onBegin: (G: IG, ctx: Ctx) => {
    let p = G.mayorID;
    let activePlayers = { value: {} };
    activePlayers.value[p] = 'phaseDiscardPriestVeto';
    ctx.events.setActivePlayers(activePlayers);

    return G;
  },
  endIf: (G: IG) => {
    if (G.ok) {
      if (!G.wantVeto) {
        return { next: 'phaseDiscardPriest' };
      } else {
        return { next: 'phaseNoSpecial' };
      }
    }
  },
  onEnd: (G: IG) => {
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
};
