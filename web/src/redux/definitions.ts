export interface ReduxUserState {
  nickname?: string;
  loggedIn: boolean;
  ready: boolean;
}

export interface ReduxState {
  user: ReduxUserState;
}
