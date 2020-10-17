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

    justPlayedVampirePolicy: number; // -1 = last was human. otherwise Zero-indexed.

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

    specialElection: number; // -1 = No Special active. otherwise x= Player ID.
    policyPeek: IPolicy[];
    investigate: number; // -1 = human, 0 nothing, 1=vampire
    investigateID: number; // -1 for empty.
    vetoPower: boolean;
    wantVeto: boolean;

    ok: boolean;

    log: string[];

}
