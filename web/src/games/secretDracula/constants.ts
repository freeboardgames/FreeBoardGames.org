
export const B_WIDTH = 10; 
export const B_HEIGHT = 7.5; 

// player info component 
export const PI_GRID = 5;
export const PI_AREA_HEIGHT = 5;
export const PI_MIN_NAME_SIZE = 8;


// different SYMOBLES
export const SY_PRIEST = '✝️'; 
export const SY_MAYOR = '🏅'; 
export const SY_CANDIDATE = '❓';
export const SY_HUMANS = [
    '👨‍',
    '🧑‍',
    '👨‍🦱',
    '🙎‍♀️',
    '👨‍🦰',
    '👳‍',
    '‍👱‍♀️',
    '🧔',    
    '👨‍🦳',
    '👨',
    '👳‍',
    '👳‍',
    '👳‍',
    '👳‍',
]; 
export const SY_VAMPIRE = '🧛'; 
export const SY_DRACULA = '👑';
export const SY_GOOD_PO = '🩸'; // Good policy symbol 
export const SY_BAD_PO = '💧';  // Bad policy symbol
export const SY_TUP = '👍';
export const SY_TDOWN = '👎';
export const SY_PEEK = '🕵️‍♂️';
export const SY_SEARCH = '🔍';
export const SY_EXECUTE = '🗡️';

// common names 
export const N_PRIEST = 'Priest ' + SY_PRIEST; 
export const N_MAYOR = 'Mayor ' + SY_MAYOR; 
export const N_VILLAGER = 'Villager 🧑‍🤝‍🧑'; 
export const N_VILLAGERS = 'Villagers 🧑‍🤝‍🧑🧑‍🤝‍🧑🧑‍🤝‍🧑'; 
export const N_VAMPIRE = 'Vampire ' + SY_VAMPIRE;
export const N_VAMPIRES = 'Vampires ' + SY_VAMPIRE + SY_VAMPIRE + SY_VAMPIRE;
export const N_SAMPLE = 'Sample';
export const N_VETO = 'Veto ✋'
export const N_AGREE_VETO = 'Agree Veto ' + SY_TUP; 
export const N_REJECT_VETO = 'Reject Veto ' + SY_TDOWN;
export const N_EXECUTE = 'Execute ' + SY_EXECUTE;

// phase titles 
export const PHASE_TITLES = {
    phaseChosePriest: 'Mayor is nominating a Priest',
    phaseVotePriest: 'Vote for Priest 🗳️',
    phaseEndVotePriest: 'Priest Voting Outcome',
    phaseDiscardMayor: `Mayor discards a ${N_SAMPLE}`,
    phaseDiscardPriest: `Priest discards a ${N_SAMPLE}`,
    phaseDiscardPriestVeto: `Priest can ${N_VETO}`,
    phaseVetoMayor: `Mayor reviews ${N_VETO}`,
    phaseCheckElectionCounter: 'Counting Votes',
    phaseSpecial: 'Special Phase',
    phaseNoSpecial: 'Ending Special Election',
    phaseExecution: SY_EXECUTE + ' Execute a Player ' + SY_EXECUTE,
    phaseSpecialElection: 'Special Election 🗳️',
    phaseInvestigate1: 'Investigate 🕵️‍♂️',
    phaseInvestigate2: 'Investigate 🕵️‍♂️',
    phasePeekPolicy: 'Peek Upcoming Policies',
  }
