import partyReducer from './party.js';

describe('Party Reducer', () => {

  it('should have a valid initial state', () => {
    let state = partyReducer(undefined, {type: 'NOOP'});

    expect(state.matches.length).to.eql(0);
    expect(state.games.length).to.least(1);
  });
  it('should set matches', () => {
    let state = partyReducer(undefined, {type: 'NOOP'});

    let state2 = partyReducer(state, {type: 'SET_MATCHES', matches: [{},{}]});
    expect(state2.matches.length).to.eql(2);
  });
  it('should set info and avoid overriding currentUser', () => {
    let state = partyReducer(undefined, {type: 'NOOP'});

    let state2 = partyReducer(state, {type: 'SET_INFO',
      info: {currentUser: 'A', other: 1}});
    let state3 = partyReducer(state2, {type: 'SET_INFO',
      info: {currentUser: 'B', other: 2}});
    expect(state3.info).to.eql({currentUser: 'A', other: 2});
  });
  it('should set downMapping and set games as not loading', () => {
    let state = partyReducer(undefined, {type: 'NOOP'});
    state.games[0].loading = true;
    let downMapping = {'game_code': ['user1', 'user2']};

    let state2 = partyReducer(state, {type: 'SET_DOWN_MAPPING',
      downMapping});

    expect(state2.games[0].loading).to.eql(false);
    expect(state2.downMapping).to.eql(downMapping);
  });
  it('should set game as loading with down request', () => {
    let state = partyReducer(undefined, {type: 'NOOP'});

    let state2 = partyReducer(state, {type: 'DOWN_REQUEST',
      game: state.games[0].code});

    expect(state2.games[0].loading).to.eql(true);
  });
});
