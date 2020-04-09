import Player from './player';

export default class Team {
  teamID: number;
  players: Player[];
  spymaster: null | Player;
  start: boolean;

  constructor(ID: number) {
    this.teamID = ID;
    this.players = [];
    this.spymaster = null;
    this.start = false;
  }
}
