import { movePickMayor } from './moves';
import { moveOK } from './moves';
import { moveExecute } from './/moves';
import { moveInvestigateStart } from './moves';
import { moveInvestigateEnd } from './moves';

import { IG, IPolicy } from './../../interfaces';
import { Ctx } from 'boardgame.io';

export let phasePeekPolicy = {
  onBegin: (G: IG, ctx: Ctx) => {
    //- console.log('starting phasePeekPolicy');
    let p = G.mayorID;
    let activePlayers = { value: {} };
    activePlayers.value[p] = 'phasePeekPolicy';
    ctx.events.setActivePlayers(activePlayers);

    if (G.policyDraw.length < 3) {
      G.policyDraw.push(...G.policyDiscard);
      G.policyDiscard = <IPolicy[]>Array(0);
    }
    G.policyPeek.push(G.policyDraw.pop());
    G.policyPeek.push(G.policyDraw.pop());
    G.policyPeek.push(G.policyDraw.pop());

    return G;
  },
  endIf: (G: IG, ctx: Ctx) => {
    //- console.log('endIf phasePeekPolicy');
    if (G.ok) {
      return { next: 'phaseNoSpecial' };
    }
  },
  moves: {
    moveOK: {
      move: moveOK,
      client: false,
    },
  },
  onEnd: (G: IG, ctx: Ctx) => {
    //- console.log('ending phasePeekPolicy');
    return { ...G, ok: false };
  },
};

export let phaseInvestigate1 = {
  onBegin: (G: IG, ctx: Ctx) => {
    //- console.log('starting phaseInvestigate1');
    let p = G.mayorID;
    let activePlayers = { value: {} };
    activePlayers.value[p] = 'phaseInvestigate1';
    ctx.events.setActivePlayers(activePlayers);
  },
  endIf: (G: IG, ctx: Ctx) => {
    //- console.log('endIf phaseInvestigate1');
    if (G.ok) {
      return { next: 'phaseInvestigate2' };
    }
  },
  onEnd: (G: IG, ctx: Ctx) => {
    //- console.log('ending phaseInvestigate1');
    return { ...G, ok: false };
  },
  moves: {
    moveInvestigateStart: {
      move: moveInvestigateStart,
      client: false,
    },
  },
};

export let phaseInvestigate2 = {
  onBegin: (G: IG, ctx: Ctx) => {
    //- console.log('starting phaseInvestigate2');
    let p = G.mayorID;
    let activePlayers = { value: {} };
    activePlayers.value[p] = 'phaseInvestigate2';
    ctx.events.setActivePlayers(activePlayers);
  },
  endIf: (G: IG, ctx: Ctx) => {
    //- console.log('endIf phaseInvestigate2');
    if (G.ok) {
      return { next: 'phaseNoSpecial' };
    }
  },
  onEnd: (G: IG, ctx: Ctx) => {
    //- console.log('ending phaseInvestigate2');
    return { ...G, ok: false };
  },
  moves: {
    moveInvestigateEnd: {
      move: moveInvestigateEnd,
      client: false,
    },
  },
};

export let phaseSpecialElection = {
  onBegin: (G: IG, ctx: Ctx) => {
    //- console.log('starting phaseSpecialElection');
    let p = G.mayorID;
    let activePlayers = { value: {} };
    activePlayers.value[p] = 'phaseSpecialElection';
    ctx.events.setActivePlayers(activePlayers);
    G.specialElection = -1;
    return G;
  },
  endIf: (G: IG, ctx: Ctx) => {
    //- console.log('endIf phaseSpecialElection');
    if (G.ok) {
      return { next: 'phaseChosePriest' };
    }
  },
  onEnd: (G: IG, ctx: Ctx) => {
    //- console.log('ending phaseSpecialElection');
    G.electionTracker = 0;
    G.priestID = -1;
    G.ok = false;
    return G;
  },
  moves: {
    movePickMayor: {
      move: movePickMayor,
      client: false,
    },
  },
};

export let phaseExecution = {
  onBegin: (G: IG, ctx: Ctx) => {
    //- console.log('starting phaseExecution');
    let p = G.mayorID;
    let activePlayers = { value: {} };
    activePlayers.value[p] = 'phaseExecution';
    ctx.events.setActivePlayers(activePlayers);
  },
  endIf: (G: IG, ctx: Ctx) => {
    //- console.log('endIf phaseExecution');
    if (G.ok) {
      return { next: 'phaseNoSpecial' };
    }
  },
  onEnd: (G: IG, ctx: Ctx) => {
    //- console.log('ending phaseExecution');
    return { ...G, ok: false };
  },
  moves: {
    moveExecute: {
      move: moveExecute,
      client: false,
    },
  },
};
