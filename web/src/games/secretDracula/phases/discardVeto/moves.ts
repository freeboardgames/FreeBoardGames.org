import { INVALID_MOVE } from 'boardgame.io/core';
import { IG } from '../../interfaces';
import { Ctx } from 'boardgame.io';

export function moveDiscardMayor(G: IG, ctx: Ctx, id: number, me: number): IG | 'INVALID_MOVE' {
  //- console.log(id);
  if (id == undefined) {
    return INVALID_MOVE;
  }
  if (id < 0 || id > 2) {
    return INVALID_MOVE;
  }

  return {
    ...G,
    policyHand:
      id == 2
        ? [G.policyHand[0], G.policyHand[1]]
        : id == 1
        ? [G.policyHand[0], G.policyHand[2]]
        : [G.policyHand[1], G.policyHand[2]],
    policyDiscard: [...G.policyDiscard, G.policyHand[id]],
    log: [...G.log, 'Player ' + me.toString() + ' moveDiscardMayor ' + id.toString()],
  };
}

export function moveDiscardPriest(G: IG, ctx: Ctx, id: number, me: number): IG | 'INVALID_MOVE' {
  //- console.log('Move Discard Priest: ', id.toString());
  //- console.log('Player ', me.toString());

  if (id == undefined) {
    return INVALID_MOVE;
  }

  if (id < 0 || id > 1) {
    return INVALID_MOVE;
  }

  return {
    ...G,
    policyDiscard: [...G.policyDiscard, G.policyHand[id]],
    policyHand: id == 1 ? [G.policyHand[0]] : [G.policyHand[1]],
    log: [...G.log, 'Player ' + me.toString() + ' moveDiscardPriest ' + id.toString()],
  };
}

export function moveWantVetoPriest(G: IG, ctx: Ctx, me: number): IG | 'INVALID_MOVE' {
  return {
    ...G,
    wantVeto: true,
    log: [...G.log, 'Player ' + me.toString() + 'moveWantVetoPriest'],
  };
}

export function moveWantVetoMayor(G: IG, ctx: Ctx, want: boolean, me: number): IG | 'INVALID_MOVE' {
  if (want == undefined) {
    return INVALID_MOVE;
  }

  return {
    ...G,
    wantVeto: want,
    ok: true,
    log: [...G.log, 'Player ' + me.toString() + 'moveWantVetoMayor'],
  };
}
