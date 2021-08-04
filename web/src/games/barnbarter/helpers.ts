import { IG } from './definitions';
import { Ctx } from 'boardgame.io';

export function finished(G: IG, ctx: Ctx) {
  if (G.cards.length !== 0) {
    return false;
  }

  for (var i = 0; i < ctx.numPlayers; i++) {
    var animals = G.players[i].cards.map((card) => {
      return card.name;
    });

    animals = animals.filter((name, ind) => {
      return animals.indexOf(name) == ind ? true : false;
    });

    for (const j in animals) {
      var len = G.players[i].cards.filter((card) => {
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
  var maxScore = 0;
  var maxScoreId = -1;

  for (var i = 0; i < ctx.numPlayers; i++) {
    var animals = G.players[i].cards.map((card) => {
      return card.value;
    });

    animals = animals.filter((value, ind) => {
      return animals.indexOf(value) == ind ? true : false;
    });

    var score =
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

  var i = G.playerTurnId;
  var animals = G.players[i].cards.map((card) => {
    return card.name;
  });

  animals = animals.filter((name, ind) => {
    return animals.indexOf(name) == ind ? true : false;
  });

  for (const j in animals) {
    var len = G.players[i].cards.filter((card) => {
      return card.name == animals[j];
    }).length;
    if (len < 4) {
      return false;
    }
  }

  return true;
}
