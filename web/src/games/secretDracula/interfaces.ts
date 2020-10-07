import { Dictionary } from "cypress/types/lodash";

export interface IPolicy {
    garlic: boolean;
    chalice: boolean;
}

export interface IG{
    policyHand: IPolicy[];
    policyDiscard: IPolicy[];
    policyDraw: IPolicy[];
    policyBoardHuman: IPolicy[];
    policyBoardVampire: IPolicy[];
    policyPriestNr: number;

    justPlayedVampirePolicy: number;

    specialPolicies: any[]; // TODO

    voting: boolean;
    votesYes: boolean[];
    votesNo: boolean[];

    mayorID: number;
    priestID: number;

    lastMayorID: number;
    lastPriestID: number;

    electionTracker: number;

    deadIDs: number[];
    humanIDs: number[];
    vampireIDs: number[];
    draculaID: number;

    playerIDToGameID: number[];

    specialElection: number;
    policyPeek: IPolicy[];
    investigate: number; // -1 = human, 0 nothing, 1=vampire
    vetoPower: boolean;
    wantVeto: boolean;

    log: string[];
}
