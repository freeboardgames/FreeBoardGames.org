import {
  sendClick,
  default as chessReducer
} from 'games/ChessGame/modules/chessGameState'

describe('Chess', () => {

  describe('General', () => {
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
    it('should not allow moving opponents piece', () => {
      let state = chessReducer(null, {type: 'NOOP'});
      let state2 = chessReducer(state, sendClick(null, 0, 6, 0));
      expect(state).to.eql(state2);
    })
    it('should not allow moving pieces in opponent\'s turn', () => {
      let state = chessReducer(null, {type: 'NOOP'});
      let state2 = chessReducer(state, sendClick(null, 0, 6, 1));
      expect(state).to.eql(state2);
    })
    it('should allow moving its piece on the first turn', () => {
      let state = chessReducer(null, {type: 'NOOP'});
      let state2 = chessReducer(state, sendClick(null, 1, 0, 0));
      expect(state2.board).to.eql([
        ['rd_00', 'nd_01@', 'bd_02', 'qd_03', 'kd_04', 'bd_005', 'nd_06', 'rd_07'],
        ['pd_08', 'pd_09', 'pd_10', 'pd_11', 'pd_12', 'pd_13', 'pd_14', 'pd_15'],
        ['*', '', '*', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['pl_16', 'pl_17', 'pl_18', 'pl_19', 'pl_20', 'pl_21', 'pl_22', 'pl_23'],
        ['rl_24', 'nl_25', 'bl_26', 'ql_27', 'kl_28', 'bl_29', 'nl_30', 'rl_31']
      ]);
    })
    it('should actually move in the first turn', () => {
      let state = chessReducer(null, {type: 'NOOP'});
      let state2 = chessReducer(state, sendClick(null, 1, 0, 0));
      let state3 = chessReducer(state2, sendClick(null, 0, 2, 0));
      expect(state3.board).to.eql([
        ['rd_00', '', 'bd_02', 'qd_03', 'kd_04', 'bd_005', 'nd_06', 'rd_07'],
        ['pd_08', 'pd_09', 'pd_10', 'pd_11', 'pd_12', 'pd_13', 'pd_14', 'pd_15'],
        ['nd_01', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['pl_16', 'pl_17', 'pl_18', 'pl_19', 'pl_20', 'pl_21', 'pl_22', 'pl_23'],
        ['rl_24', 'nl_25', 'bl_26', 'ql_27', 'kl_28', 'bl_29', 'nl_30', 'rl_31']
      ]);
      expect(state3.turn).to.equal(1);
    })
    it('should actually move in the first turn and second turn', () => {
      let state = chessReducer(null, {type: 'NOOP'});
      let state2 = chessReducer(state, sendClick(null, 1, 0, 0));
      let state3 = chessReducer(state2, sendClick(null, 0, 2, 0));
      let state4 = chessReducer(state3, sendClick(null, 0, 6, 1));
      let state5 = chessReducer(state4, sendClick(null, 0, 4, 1));
      expect(state5.board).to.eql([
        ['rd_00', '', 'bd_02', 'qd_03', 'kd_04', 'bd_005', 'nd_06', 'rd_07'],
        ['pd_08', 'pd_09', 'pd_10', 'pd_11', 'pd_12', 'pd_13', 'pd_14', 'pd_15'],
        ['nd_01', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['pl_16', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', 'pl_17', 'pl_18', 'pl_19', 'pl_20', 'pl_21', 'pl_22', 'pl_23'],
        ['rl_24', 'nl_25', 'bl_26', 'ql_27', 'kl_28', 'bl_29', 'nl_30', 'rl_31']
      ]);
      expect(state5.turn).to.equal(2);
    })
    it('should unselect piece if clicked cell other than movable', () => {
      let state = chessReducer(null, {type: 'NOOP'});
      let state2 = chessReducer(state, sendClick(null, 1, 1, 0));
      let state3 = chessReducer(state2, sendClick(null, 0, 1, 0));
      expect(state3.board).to.eql(state.board);
    })
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
    it('should move correctly in the first row', () => {
      let initialState = {board: [
        ['', '', '', 'kd_01', '', '', '', ''],
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
        let action = sendClick(null, 3, 0, 0);
        let afterClick = chessReducer(initialState, action);
        expect(afterClick.board).to.eql([
          ['', '', '*', 'kd_01@', '*', '', '', ''],
          ['', '', '*', '*', '*', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
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
    it('should not jump through pieces', () => {
      let initialState = {board: [
        ['', '', '', '', '', '', '', ''],
        ['', 'pl_02', '', '', '', '', '', ''],
        ['', '', '', '', 'pd_04', '', 'pd_03', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', 'pd_06', '', 'qd_01', '', 'pl_07', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', 'pl_05', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ],
        loading: false,
        turn: 0,
        winner: null};
        let action = sendClick(null, 4, 4, 0);
        let afterClick = chessReducer(initialState, action);
        expect(afterClick.board).to.eql([
          ['', '', '', '', '', '', '', ''],
          ['', 'pl_02*', '', '', '', '', '', ''],
          ['', '', '*', '', 'pd_04', '', 'pd_03', ''],
          ['', '', '', '*', '*', '*', '', ''],
          ['', '', 'pd_06', '*', 'qd_01@', '*', 'pl_07*', ''],
          ['', '', '', '*', '*', '*', '', ''],
          ['', '', '*', '', 'pl_05*', '', '*', ''],
          ['', '*', '', '', '', '', '', '*'],
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


  describe('Bishop', () => {
    it('should move correctly in the middle', () => {
      let initialState = {board: [
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', 'bd_01', '', '', ''],
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
          ['*', '', '', '', '', '', '', ''],
          ['', '*', '', '', '', '', '', '*'],
          ['', '', '*', '', '', '', '*', ''],
          ['', '', '', '*', '', '*', '', ''],
          ['', '', '', '', 'bd_01@', '', '', ''],
          ['', '', '', '*', '', '*', '', ''],
          ['', '', '*', '', '', '', '*', ''],
          ['', '*', '', '', '', '', '', '*'],
        ]);
    })
    it('cannot jump over other pieces', () => {
      let initialState = {board: [
        ['', '', '', '', '', '', '', ''],
        ['', 'pl_02', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', 'pl_04', '', ''],
        ['', '', '', '', 'bd_01', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', 'rd_03', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ],
        loading: false,
        turn: 0,
        winner: null};
        let action = sendClick(null, 4, 4, 0);
        let afterClick = chessReducer(initialState, action);
        expect(afterClick.board).to.eql([
          ['', '', '', '', '', '', '', ''],
          ['', 'pl_02*', '', '', '', '', '', ''],
          ['', '', '*', '', '', '', '', ''],
          ['', '', '', '*', '', 'pl_04*', '', ''],
          ['', '', '', '', 'bd_01@', '', '', ''],
          ['', '', '', '*', '', '*', '', ''],
          ['', '', 'rd_03', '', '', '', '*', ''],
          ['', '', '', '', '', '', '', '*'],
        ]);
    })
    it('should move correctly in the border', () => {
      let initialState = {board: [
        ['', '', '', '', '', '', '', 'bd_01'],
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
          ['', '', '', '', '', '', '', 'bd_01@'],
          ['', '', '', '', '', '', '*', ''],
          ['', '', '', '', '', '*', '', ''],
          ['', '', '', '', '*', '', '', ''],
          ['', '', '', '*', '', '', '', ''],
          ['', '', '*', '', '', '', '', ''],
          ['', '*', '', '', '', '', '', ''],
          ['*', '', '', '', '', '', '', ''],
        ]);
    })
  })


    describe('Rook', () => {
      it('should move correctly in the middle', () => {
        let initialState = {board: [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', 'rd_01', '', '', ''],
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
            ['', '', '', '', '*', '', '', ''],
            ['', '', '', '', '*', '', '', ''],
            ['', '', '', '', '*', '', '', ''],
            ['', '', '', '', '*', '', '', ''],
            ['*', '*', '*', '*', 'rd_01@', '*', '*', '*'],
            ['', '', '', '', '*', '', '', ''],
            ['', '', '', '', '*', '', '', ''],
            ['', '', '', '', '*', '', '', ''],
          ]);
      })
      it('should move correctly in the border', () => {
        let initialState = {board: [
          ['', '', '', '', '', '', '', 'rd_01'],
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
            ['*', '*', '*', '*', '*', '*', '*', 'rd_01@'],
            ['', '', '', '', '', '', '', '*'],
            ['', '', '', '', '', '', '', '*'],
            ['', '', '', '', '', '', '', '*'],
            ['', '', '', '', '', '', '', '*'],
            ['', '', '', '', '', '', '', '*'],
            ['', '', '', '', '', '', '', '*'],
            ['', '', '', '', '', '', '', '*'],
          ]);
      })
      it('cannot jump over other pieces', () => {
        let initialState = {board: [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', 'pd_02', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', 'pl_03', '', 'rd_01', '', '', ''],
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
            ['', '', '', '', 'pd_02', '', '', ''],
            ['', '', '', '', '*', '', '', ''],
            ['', '', '', '', '*', '', '', ''],
            ['', '', 'pl_03*', '*', 'rd_01@', '*', '*', '*'],
            ['', '', '', '', '*', '', '', ''],
            ['', '', '', '', '*', '', '', ''],
            ['', '', '', '', '*', '', '', ''],
          ]);
      })
      it('castling - dark king side', () => {
        let initialState = {board: [
          ['', '', '', 'qd_01', 'kd_02', '', '', 'rd_03'],
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
          let state = chessReducer(initialState, action);
          expect(state.board).to.eql([
            ['', '', '', 'qd_01', 'kd_02', '*', '*', 'rd_03@'],
            ['', '', '', '', '', '', '', '*'],
            ['', '', '', '', '', '', '', '*'],
            ['', '', '', '', '', '', '', '*'],
            ['', '', '', '', '', '', '', '*'],
            ['', '', '', '', '', '', '', '*'],
            ['', '', '', '', '', '', '', '*'],
            ['', '', '', '', '', '', '', '*'],
          ]);
          action = sendClick(null, 5, 0, 0);
          state = chessReducer(state, action);
          expect(state.board).to.eql([
            ['', '', '', 'qd_01', 'rd_03', 'kd_02', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
          ]);
          expect(state.turn).to.eql(1);
      })
      it('castling - queen side', () => {
        let initialState = {board: [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['rl_03', '', '', 'ql_01', 'kl_02', '', '', ''],
          ],
          loading: false,
          turn: 1,
          winner: null};
          let action = sendClick(null, 0, 7, 1);
          let state = chessReducer(initialState, action);
          expect(state.board).to.eql([
            ['*', '', '', '', '', '', '', ''],
            ['*', '', '', '', '', '', '', ''],
            ['*', '', '', '', '', '', '', ''],
            ['*', '', '', '', '', '', '', ''],
            ['*', '', '', '', '', '', '', ''],
            ['*', '', '', '', '', '', '', ''],
            ['*', '', '', '', '', '', '', ''],
            ['rl_03@', '*', '*', 'ql_01', 'kl_02', '', '', ''],
          ]);
          action = sendClick(null, 2, 7, 1);
          state = chessReducer(state, action);
          expect(state.board).to.eql([
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', 'ql_01', 'rl_03', 'kl_02', '', '', ''],
          ]);
          expect(state.turn).to.eql(2);
      })
    })


    describe('Knight', () => {
      it('should move correctly in the middle', () => {
        let initialState = {board: [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', 'nd_01', '', '', ''],
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
            ['', '', '', '*', '', '*', '', ''],
            ['', '', '*', '', '', '', '*', ''],
            ['', '', '', '', 'nd_01@', '', '', ''],
            ['', '', '*', '', '', '', '*', ''],
            ['', '', '', '*', '', '*', '', ''],
            ['', '', '', '', '', '', '', ''],
          ]);
      })
      it('should move correctly in the border', () => {
        let initialState = {board: [
          ['', '', '', '', '', '', '', 'nd_01'],
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
            ['', '', '', '', '', '', '', 'nd_01@'],
            ['', '', '', '', '', '*', '', ''],
            ['', '', '', '', '', '', '*', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
          ]);
      })
    })


    describe('Pawn', () => {
      it('should walk two or one places on the first move', () => {
        let initialState = {board: [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', 'pd_01', '', '', ''],
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
          let action = sendClick(null, 4, 1, 0);
          let afterClick = chessReducer(initialState, action);
          expect(afterClick.board).to.eql([
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', 'pd_01@', '', '', ''],
            ['', '', '', '', '*', '', '', ''],
            ['', '', '', '', '*', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
          ]);
      })
      it('cannot jump over other piece', () => {
        let initialState = {board: [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', 'pd_01', '', '', ''],
          ['', '', '', '', 'pl_02', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ],
          loading: false,
          turn: 0,
          winner: null};
          let action = sendClick(null, 4, 1, 0);
          let afterClick = chessReducer(initialState, action);
          expect(afterClick.board).to.eql([
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', 'pd_01@', '', '', ''],
            ['', '', '', '', 'pl_02', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
          ]);
      })
      it('should walk one place after the first move', () => {
        let initialState = {board: [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', 'pd_01', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ],
          loading: false,
          turn: 0,
          winner: null};
          let action = sendClick(null, 2, 3, 0);
          let afterClick = chessReducer(initialState, action);
          expect(afterClick.board).to.eql([
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', 'pd_01@', '', '', '', '', ''],
            ['', '', '*', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
          ]);
      })
      it('should allow eating adjacent pieces', () => {
        let initialState = {board: [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', 'pd_01', ''],
          ['', '', '', '', '', 'pl_02', '', 'pl_03'],
          ['', '', '', '', '', '', '', ''],
          ],
          loading: false,
          turn: 0,
          winner: null};
          let action = sendClick(null, 6, 5, 0);
          let afterClick = chessReducer(initialState, action);
          expect(afterClick.board).to.eql([
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', 'pd_01@', ''],
            ['', '', '', '', '', 'pl_02*', '*', 'pl_03*'],
            ['', '', '', '', '', '', '', ''],
          ]);
      })
      it('should actually eat adjacent pieces', () => {
        let initialState = {board: [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', 'pd_01@', ''],
          ['', '', '', '', '', 'pl_02*', '*', 'pl_03*'],
          ['', '', '', '', '', '', '', ''],
          ],
          loading: false,
          turn: 0,
          winner: null};
          let action = sendClick(null, 5, 6, 0);
          let afterClick = chessReducer(initialState, action);
          expect(afterClick.board).to.eql([
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', 'pd_01', '', 'pl_03'],
            ['', '', '', '', '', '', '', ''],
          ]);
    })
    it('en passant', () => {
      let initialState = {board: [
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', 'pd_01', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', 'pl_02', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ],
        loading: false,
        turn: 0,
        winner: null};
        let action = sendClick(null, 5, 1, 0);
        let state = chessReducer(initialState, action);
        expect(state.board).to.eql([
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', 'pd_01@', '', ''],
          ['', '', '', '', '', '*', '', ''],
          ['', '', '', '', 'pl_02', '*', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]);
        action = sendClick(null, 5, 3, 0);
        state = chessReducer(state, action);
        expect(state.board).to.eql([
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', 'pl_02', 'pd_01', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]);
        expect(state.turn).to.equal(1);
        action = sendClick(null, 4, 3, 1);
        state = chessReducer(state, action);
        expect(state.board).to.eql([
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '*', '*', '', ''],
          ['', '', '', '', 'pl_02@', 'pd_01', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]);
        action = sendClick(null, 5, 2, 1);
        state = chessReducer(state, action);
        expect(state.board).to.eql([
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', 'pl_02', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]);
        expect(state.turn).to.equal(2);
  })
  })

  describe('Victory Detection', () => {
    it('should detect when king is in check', () => {
      let initialState = {board: [
        ['', '', '', 'kd_01', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', 'rl_03', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', 'kl_02', '', '', '', ''],
        ],
        loading: false,
        turn: 1,
        winner: null};
        let action = sendClick(null, 2, 5, 1);
        let state = chessReducer(initialState, action);
        expect(state.board).to.eql([
          ['', '', '*', 'kd_01', '', '', '', ''],
          ['', '', '*', '', '', '', '', ''],
          ['', '', '*', '', '', '', '', ''],
          ['', '', '*', '', '', '', '', ''],
          ['', '', '*', '', '', '', '', ''],
          ['*', '*', 'rl_03@', '*', '*', '*', '*', '*'],
          ['', '', '*', '', '', '', '', ''],
          ['', '', '*', 'kl_02', '', '', '', ''],
        ]);
        action = sendClick(null, 3, 5, 1);
        state = chessReducer(state, action);
        expect(state.board).to.eql([
          ['', '', '', 'kd_01', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', 'rl_03', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', 'kl_02', '', '', '', ''],
        ]);
        expect(state.turn).to.equal(2);
        expect(state.check).to.equal(true);
        expect(state.winner).to.equal(null);
    })
    it('should detect check mate', () => {
      let initialState = {board: [
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', 'kl_03', '', 'kd_01'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', 'rl_02', ''],
        ],
        loading: false,
        turn: 1,
        winner: null};
        let action = sendClick(null, 6, 7, 1);
        let state = chessReducer(initialState, action);
        expect(state.board).to.eql([
          ['', '', '', '', '', '', '*', ''],
          ['', '', '', '', '', '', '*', ''],
          ['', '', '', '', '', '', '*', ''],
          ['', '', '', '', '', 'kl_03', '*', 'kd_01'],
          ['', '', '', '', '', '', '*', ''],
          ['', '', '', '', '', '', '*', ''],
          ['', '', '', '', '', '', '*', ''],
          ['*', '*', '*', '*', '*', '*', 'rl_02@', '*'],
        ]);
        action = sendClick(null, 7, 7, 1);
        state = chessReducer(state, action);
        expect(state.board).to.eql([
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', 'kl_03', '', 'kd_01'],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', 'rl_02'],
        ]);
        expect(state.turn).to.equal(2);
        expect(state.check).to.equal(true);
        expect(state.winner).to.equal(1);
    })
  })
})
