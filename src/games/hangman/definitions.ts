export interface Guesses {
  [letter: string]: number[]; // Indexes where the letter is present.
}

export interface PlayerState {
  secret: string;
  secretLength: number;
  hint?: string;
  guesses: Guesses;
}

export interface Players {
  [player: string]: PlayerState;
}

export interface HangmanState {
  players: Players;
}
