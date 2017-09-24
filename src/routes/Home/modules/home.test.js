import homeReducer from './home.js';

describe('Home Reducer', () => {

  it('should have a valid initial state', () => {
    let state = homeReducer(undefined, {type: 'NOOP'});

    expect(state.parties.length).to.eql(0);
    expect(state.matches.length).to.eql(0);
    expect(state.games.length).to.least(1);
  });
  it('should set matches', () => {
    let state = homeReducer(undefined, {type: 'NOOP'});

    let state2 = homeReducer(state, {type: 'SET_MATCHES', matches: [{},{}]});
    expect(state2.matches.length).to.eql(2);
  });
  it('should set parties', () => {
    let state = homeReducer(undefined, {type: 'NOOP'});

    let state2 = homeReducer(state, {type: 'SET_PARTIES', parties: [{},{}]});
    expect(state2.parties.length).to.eql(2);
  });
});
