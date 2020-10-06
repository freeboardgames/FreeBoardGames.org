import { Dictionary } from "cypress/types/lodash";

export interface IPolicy {
    garlic: boolean;
    chalice: boolean;
}

export interface IVoteCard {
    yes: boolean;
    no: boolean;
}

export interface IG{
    policyDiscard: IPolicy[];
    policyDraw: IPolicy[];
    policyDiscardCount: number;
    policyDrawCount: number;
    policyBoardHuman: IPolicy[];
    policyBoardVampire: IPolicy[];

    specialPolicies: any[]; // TODO

    voting: boolean;

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

    votes: IVoteCard[];
}
