import {
  sendClick,
  default as chessReducer
} from 'games/ChessGame/modules/chessGameState'

describe('Chess', () => {
  it('should start with correct board configuration', () => {
    let initialBoard = chessReducer(null, {type: 'NOOP'}).board;
    let expectedBoard = [
      ['rd_00', 'nd_01', 'bd_02', 'qd_03', 'kd_04', 'bd_005', 'nd_06', 'rd_07'],
      ['pd_08', 'pd_09', 'pd_10', 'pd_11', 'pd_12', 'pd_13', 'pd_14', 'pd_15'],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['pl_16', 'pl_17', 'pl_18', 'pl_19', 'pl_20', 'pl_21', 'pl_22', 'pl_23'],
      ['rl_24', 'nl_25', 'bl_26', 'ql_27', 'kl_28', 'bl_29', 'nl_30', 'rl_31']
    ];
    expect(initialBoard).to.eql(expectedBoard);
  })

  describe('King', () => {
    it('should move correctly in the middle', () => {
      let initialState = {board: [
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', 'kd_01', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ],
        loading: false,
        turn: 0,
        winner: null};
        let action = sendClick(null, 4, 4, 0);
        let afterClick = chessReducer(initialState, action);
        expect(afterClick.board).to.eql([
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '*', '*', '*', '', ''],
          ['', '', '', '*', 'kd_01@', '*', '', ''],
          ['', '', '', '*', '*', '*', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]);
    })
    it('should move correctly in the border', () => {
      let initialState = {board: [
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', 'kd_01'],
        ],
        loading: false,
        turn: 0,
        winner: null};
        let action = sendClick(null, 7, 7, 0);
        let afterClick = chessReducer(initialState, action);
        expect(afterClick.board).to.eql([
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '*', '*'],
          ['', '', '', '', '', '', '*', 'kd_01@'],
        ]);
    })
  })


  describe('Queen', () => {
    it('should move correctly in the middle', () => {
      let initialState = {board: [
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', 'qd_01', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ],
        loading: false,
        turn: 0,
        winner: null};
        let action = sendClick(null, 4, 4, 0);
        let afterClick = chessReducer(initialState, action);
        expect(afterClick.board).to.eql([
          ['*', '', '', '', '*', '', '', ''],
          ['', '*', '', '', '*', '', '', '*'],
          ['', '', '*', '', '*', '', '*', ''],
          ['', '', '', '*', '*', '*', '', ''],
          ['*', '*', '*', '*', 'qd_01@', '*', '*', '*'],
          ['', '', '', '*', '*', '*', '', ''],
          ['', '', '*', '', '*', '', '*', ''],
          ['', '*', '', '', '*', '', '', '*'],
        ]);
    })
    it('should move correctly in the border', () => {
      let initialState = {board: [
        ['', '', '', '', '', '', '', 'qd_01'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ],
        loading: false,
        turn: 0,
        winner: null};
        let action = sendClick(null, 7, 0, 0);
        let afterClick = chessReducer(initialState, action);
        expect(afterClick.board).to.eql([
          ['*', '*', '*', '*', '*', '*', '*', 'qd_01@'],
          ['', '', '', '', '', '', '*', '*'],
          ['', '', '', '', '', '*', '', '*'],
          ['', '', '', '', '*', '', '', '*'],
          ['', '', '', '*', '', '', '', '*'],
          ['', '', '*', '', '', '', '', '*'],
          ['', '*', '', '', '', '', '', '*'],
          ['*', '', '', '', '', '', '', '*'],
        ]);
    })
  })
  /*
  it('Should export a constant COUNTER_INCREMENT.', () => {
    expect(COUNTER_INCREMENT).to.equal('COUNTER_INCREMENT')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(counterReducer).to.be.a('function')
    })

    it('Should initialize with a state of 0 (Number).', () => {
      expect(counterReducer(undefined, {})).to.equal(0)
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = counterReducer(undefined, {})
      expect(state).to.equal(0)
      state = counterReducer(state, { type: '@@@@@@@' })
      expect(state).to.equal(0)
      state = counterReducer(state, increment(5))
      expect(state).to.equal(5)
      state = counterReducer(state, { type: '@@@@@@@' })
      expect(state).to.equal(5)
    })
  })

  describe('(Action Creator) increment', () => {
    it('Should be exported as a function.', () => {
      expect(increment).to.be.a('function')
    })

    it('Should return an action with type "COUNTER_INCREMENT".', () => {
      expect(increment()).to.have.property('type', COUNTER_INCREMENT)
    })

    it('Should assign the first argument to the "payload" property.', () => {
      expect(increment(5)).to.have.property('payload', 5)
    })

    it('Should default the "payload" property to 1 if not provided.', () => {
      expect(increment()).to.have.property('payload', 1)
    })
  })

  describe('(Action Creator) doubleAsync', () => {
    let _globalState
    let _dispatchSpy
    let _getStateSpy

    beforeEach(() => {
      _globalState = {
        counter : counterReducer(undefined, {})
      }
      _dispatchSpy = sinon.spy((action) => {
        _globalState = {
          ..._globalState,
          counter : counterReducer(_globalState.counter, action)
        }
      })
      _getStateSpy = sinon.spy(() => {
        return _globalState
      })
    })

    it('Should be exported as a function.', () => {
      expect(doubleAsync).to.be.a('function')
    })

    it('Should return a function (is a thunk).', () => {
      expect(doubleAsync()).to.be.a('function')
    })

    it('Should return a promise from that thunk that gets fulfilled.', () => {
      return doubleAsync()(_dispatchSpy, _getStateSpy).should.eventually.be.fulfilled
    })

    it('Should call dispatch and getState exactly once.', () => {
      return doubleAsync()(_dispatchSpy, _getStateSpy)
        .then(() => {
          _dispatchSpy.should.have.been.calledOnce
          _getStateSpy.should.have.been.calledOnce
        })
    })

    it('Should produce a state that is double the previous state.', () => {
      _globalState = { counter: 2 }

      return doubleAsync()(_dispatchSpy, _getStateSpy)
        .then(() => {
          _dispatchSpy.should.have.been.calledOnce
          _getStateSpy.should.have.been.calledOnce
          expect(_globalState.counter).to.equal(4)
          return doubleAsync()(_dispatchSpy, _getStateSpy)
        })
        .then(() => {
          _dispatchSpy.should.have.been.calledTwice
          _getStateSpy.should.have.been.calledTwice
          expect(_globalState.counter).to.equal(8)
        })
    })
  })

  // NOTE: if you have a more complex state, you will probably want to verify
  // that you did not mutate the state. In this case our state is just a number
  // (which cannot be mutated).
  describe('(Action Handler) COUNTER_INCREMENT', () => {
    it('Should increment the state by the action payload\'s "value" property.', () => {
      let state = counterReducer(undefined, {})
      expect(state).to.equal(0)
      state = counterReducer(state, increment(1))
      expect(state).to.equal(1)
      state = counterReducer(state, increment(2))
      expect(state).to.equal(3)
      state = counterReducer(state, increment(-3))
      expect(state).to.equal(0)
    })
  })*/
})
