export default class Player {
    playerID: number;
    teamID: null|number;
    isSpymaster: boolean;

    constructor(ID: number) {
        this.playerID = ID;
        this.teamID = null;
        this.isSpymaster = false;
    }
}
