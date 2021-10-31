import { IG } from './definitions';
import { Ctx } from 'boardgame.io';

export function finished(G: IG, ctx: Ctx) {
  if (G.cards.length !== 0) {
    return false;
  }

  for (let i = 0; i < ctx.numPlayers; i++) {
    let animals = G.players[i].cards.map((card) => {
      return card.name;
    });

    animals = animals.filter((name, ind) => {
      return animals.indexOf(name) == ind ? true : false;
    });

    for (const j in animals) {
      let len = G.players[i].cards.filter((card) => {
        return card.name == animals[j];
      }).length;
      if (len < 4) {
        return false;
      }
    }
  }

  return true;
}

export function score(G: IG, ctx: Ctx) {
  let maxScore = 0;
  let maxScoreId = -1;

  for (let i = 0; i < ctx.numPlayers; i++) {
    let animals = G.players[i].cards.map((card) => {
      return card.value;
    });

    animals = animals.filter((value, ind) => {
      return animals.indexOf(value) == ind ? true : false;
    });

    let score =
      animals.length *
      animals.reduce((accum, value) => {
        return value + accum;
      }, 0);
    if (maxScore < score) {
      maxScore = score;
      maxScoreId = i;
    }
  }

  return maxScoreId;
}

export function canMakeNoMoves(G: IG) {
  if (G.cards.length !== 0) {
    return false;
  }

  let i = G.playerTurnId;
  let animals = G.players[i].cards.map((card) => {
    return card.name;
  });

  animals = animals.filter((name, ind) => {
    return animals.indexOf(name) == ind ? true : false;
  });

  for (const j in animals) {
    let len = G.players[i].cards.filter((card) => {
      return card.name == animals[j];
    }).length;
    if (len < 4) {
      return false;
    }
  }

  return true;
}
