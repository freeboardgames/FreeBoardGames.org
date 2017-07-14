import {
  sendClick,
  default as chessReducer
} from 'games/ChessGame/modules/chessGameState'

describe('Chess', () => {

  describe('General', () => {
    it('should start with correct board configuration', () => {
      let initialBoard = chessReducer(null, {type: 'NOOP'}).board;
      let expectedBoard = [
        ['rd_00', 'nd_01', 'bd_02', 'qd_03', 'kd_04', 'bd_05', 'nd_06', 'rd_07'],
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
      let state2 = chessReducer(state, sendClick(null, 0, 1, 0));
      expect(state).to.eql(state2);
    })
    it('should not allow moving pieces in opponent\'s turn', () => {
      let state = chessReducer(null, {type: 'NOOP'});
      let state2 = chessReducer(state, sendClick(null, 0, 1, 1));
      expect(state).to.eql(state2);
    })
    it('should allow moving its piece on the first turn', () => {
      let state = chessReducer(null, {type: 'NOOP'});
      let state2 = chessReducer(state, sendClick(null, 1, 7, 0));
      expect(state2.board).to.eql([
        ['rd_00', 'nd_01', 'bd_02', 'qd_03', 'kd_04', 'bd_05', 'nd_06', 'rd_07'],
        ['pd_08', 'pd_09', 'pd_10', 'pd_11', 'pd_12', 'pd_13', 'pd_14', 'pd_15'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['*', '', '*', '', '', '', '', ''],
        ['pl_16', 'pl_17', 'pl_18', 'pl_19', 'pl_20', 'pl_21', 'pl_22', 'pl_23'],
        ['rl_24', 'nl_25@', 'bl_26', 'ql_27', 'kl_28', 'bl_29', 'nl_30', 'rl_31']
      ]);
    })
    it('should actually move in the first turn', () => {
      let state = chessReducer(null, {type: 'NOOP'});
      let state2 = chessReducer(state, sendClick(null, 1, 7, 0));
      let state3 = chessReducer(state2, sendClick(null, 0, 5, 0));
      expect(state3.board).to.eql([
        ['rd_00', 'nd_01', 'bd_02', 'qd_03', 'kd_04', 'bd_05', 'nd_06', 'rd_07'],
        ['pd_08', 'pd_09', 'pd_10', 'pd_11', 'pd_12', 'pd_13', 'pd_14', 'pd_15'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['nl_25', '', '', '', '', '', '', ''],
        ['pl_16', 'pl_17', 'pl_18', 'pl_19', 'pl_20', 'pl_21', 'pl_22', 'pl_23'],
        ['rl_24', '', 'bl_26', 'ql_27', 'kl_28', 'bl_29', 'nl_30', 'rl_31']
      ]);
      expect(state3.turn).to.equal(1);
    })
    it('should actually move in the first turn and second turn', () => {
      let state = chessReducer(null, {type: 'NOOP'});
      let state2 = chessReducer(state, sendClick(null, 1, 7, 0));
      let state3 = chessReducer(state2, sendClick(null, 0, 5, 0));
      let state4 = chessReducer(state3, sendClick(null, 0, 1, 1));
      let state5 = chessReducer(state4, sendClick(null, 0, 3, 1));
      expect(state5.board).to.eql([
        ['rd_00', 'nd_01', 'bd_02', 'qd_03', 'kd_04', 'bd_05', 'nd_06', 'rd_07'],
        ['', 'pd_09', 'pd_10', 'pd_11', 'pd_12', 'pd_13', 'pd_14', 'pd_15'],
        ['', '', '', '', '', '', '', ''],
        ['pd_08', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['nl_25', '', '', '', '', '', '', ''],
        ['pl_16', 'pl_17', 'pl_18', 'pl_19', 'pl_20', 'pl_21', 'pl_22', 'pl_23'],
        ['rl_24', '', 'bl_26', 'ql_27', 'kl_28', 'bl_29', 'nl_30', 'rl_31']
      ]);
      expect(state5.turn).to.equal(2);
    })
    it('should unselect piece if clicked cell other than movable', () => {
      let state = chessReducer(null, {type: 'NOOP'});
      let state2 = chessReducer(state, sendClick(null, 1, 6, 0));
      let state3 = chessReducer(state2, sendClick(null, 0, 6, 0));
      expect(state3.board).to.eql(state.board);
    })
    it('should not show possibility of move that would check king', () => {
      let initialState = {board: [
        ['', '', '', 'rd_02', '', 'rd_03', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', 'kl_01', '', '', ''],
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
          ['', '', '', 'rd_02', '', 'rd_03', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '*', '', '', ''],
          ['', '', '', '', 'kl_01@', '', '', ''],
          ['', '', '', '', '*', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]);
    })
  })

  describe('King', () => {
    it('should move correctly in the middle', () => {
      let initialState = {board: [
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', 'kl_01', '', '', ''],
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
          ['', '', '', '*', 'kl_01@', '*', '', ''],
          ['', '', '', '*', '*', '*', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
        ]);
    })
    it('should move correctly in the first row', () => {
      let initialState = {board: [
        ['', '', '', 'kl_01', '', '', '', ''],
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
          ['', '', '*', 'kl_01@', '*', '', '', ''],
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
        ['', '', '', '', '', '', '', 'kl_01'],
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
          ['', '', '', '', '', '', '*', 'kl_01@'],
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
        ['', '', '', '', 'ql_01', '', '', ''],
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
          ['*', '*', '*', '*', 'ql_01@', '*', '*', '*'],
          ['', '', '', '*', '*', '*', '', ''],
          ['', '', '*', '', '*', '', '*', ''],
          ['', '*', '', '', '*', '', '', '*'],
        ]);
    })
    it('should not jump through pieces', () => {
      let initialState = {board: [
        ['', '', '', '', '', '', '', ''],
        ['', 'pd_02', '', '', '', '', '', ''],
        ['', '', '', '', 'pl_04', '', 'pl_03', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', 'pl_06', '', 'ql_01', '', 'pd_07', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', 'pd_05', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ],
        loading: false,
        turn: 0,
        winner: null};
        let action = sendClick(null, 4, 4, 0);
        let afterClick = chessReducer(initialState, action);
        expect(afterClick.board).to.eql([
          ['', '', '', '', '', '', '', ''],
          ['', 'pd_02*', '', '', '', '', '', ''],
          ['', '', '*', '', 'pl_04', '', 'pl_03', ''],
          ['', '', '', '*', '*', '*', '', ''],
          ['', '', 'pl_06', '*', 'ql_01@', '*', 'pd_07*', ''],
          ['', '', '', '*', '*', '*', '', ''],
          ['', '', '*', '', 'pd_05*', '', '*', ''],
          ['', '*', '', '', '', '', '', '*'],
        ]);
    })
    it('should move correctly in the border', () => {
      let initialState = {board: [
        ['', '', '', '', '', '', '', 'ql_01'],
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
          ['*', '*', '*', '*', '*', '*', '*', 'ql_01@'],
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
        ['', '', '', '', 'bl_01', '', '', ''],
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
          ['', '', '', '', 'bl_01@', '', '', ''],
          ['', '', '', '*', '', '*', '', ''],
          ['', '', '*', '', '', '', '*', ''],
          ['', '*', '', '', '', '', '', '*'],
        ]);
    })
    it('cannot jump over other pieces', () => {
      let initialState = {board: [
        ['', '', '', '', '', '', '', ''],
        ['', 'pd_02', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', 'pd_04', '', ''],
        ['', '', '', '', 'bl_01', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', 'rl_03', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ],
        loading: false,
        turn: 0,
        winner: null};
        let action = sendClick(null, 4, 4, 0);
        let afterClick = chessReducer(initialState, action);
        expect(afterClick.board).to.eql([
          ['', '', '', '', '', '', '', ''],
          ['', 'pd_02*', '', '', '', '', '', ''],
          ['', '', '*', '', '', '', '', ''],
          ['', '', '', '*', '', 'pd_04*', '', ''],
          ['', '', '', '', 'bl_01@', '', '', ''],
          ['', '', '', '*', '', '*', '', ''],
          ['', '', 'rl_03', '', '', '', '*', ''],
          ['', '', '', '', '', '', '', '*'],
        ]);
    })
    it('should move correctly in the border', () => {
      let initialState = {board: [
        ['', '', '', '', '', '', '', 'bl_01'],
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
          ['', '', '', '', '', '', '', 'bl_01@'],
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
          ['', '', '', '', 'rl_01', '', '', ''],
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
            ['*', '*', '*', '*', 'rl_01@', '*', '*', '*'],
            ['', '', '', '', '*', '', '', ''],
            ['', '', '', '', '*', '', '', ''],
            ['', '', '', '', '*', '', '', ''],
          ]);
      })
      it('should move correctly in the border', () => {
        let initialState = {board: [
          ['', '', '', '', '', '', '', 'rl_01'],
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
            ['*', '*', '*', '*', '*', '*', '*', 'rl_01@'],
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
          ['', '', '', '', 'pl_02', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', 'pd_03', '', 'rl_01', '', '', ''],
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
            ['', '', '', '', 'pl_02', '', '', ''],
            ['', '', '', '', '*', '', '', ''],
            ['', '', '', '', '*', '', '', ''],
            ['', '', 'pd_03*', '*', 'rl_01@', '*', '*', '*'],
            ['', '', '', '', '*', '', '', ''],
            ['', '', '', '', '*', '', '', ''],
            ['', '', '', '', '*', '', '', ''],
          ]);
      })
      it('castling - light king side', () => {
        let initialState = {board: [
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', 'ql_01', 'kl_02', '', '', 'rl_03'],
          ],
          loading: false,
          turn: 0,
          winner: null};
          let action = sendClick(null, 4, 7, 0);
          let state = chessReducer(initialState, action);
          expect(state.board).to.eql([
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '*', '*', '*', '', ''],
            ['', '', '', 'ql_01', 'kl_02@', '*', '*', 'rl_03'],
          ]);
          action = sendClick(null, 6, 7, 0);
          state = chessReducer(state, action);
          expect(state.board).to.eql([
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', 'ql_01', '', 'rl_03', 'kl_02', ''],
          ]);
          expect(state.turn).to.eql(1);
      })
      it('castling - dark queen side', () => {
        let initialState = {board: [
          ['rd_03', '', '', '', 'kd_02', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '', ''],
          ],
          loading: false,
          turn: 1,
          winner: null};
          let action = sendClick(null, 4, 0, 1);
          let state = chessReducer(initialState, action);
          expect(state.board).to.eql([
            ['rd_03', '', '*', '*', 'kd_02@', '*', '', ''],
            ['', '', '', '*', '*', '*', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
          ]);
          action = sendClick(null, 2, 0, 1);
          state = chessReducer(state, action);
          expect(state.board).to.eql([
            ['', '', 'kd_02', 'rd_03', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
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
          ['', '', '', '', 'nl_01', '', '', ''],
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
            ['', '', '', '', 'nl_01@', '', '', ''],
            ['', '', '*', '', '', '', '*', ''],
            ['', '', '', '*', '', '*', '', ''],
            ['', '', '', '', '', '', '', ''],
          ]);
      })
      it('should move correctly in the border', () => {
        let initialState = {board: [
          ['', '', '', '', '', '', '', 'nl_01'],
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
            ['', '', '', '', '', '', '', 'nl_01@'],
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
          turn: 1,
          winner: null};
          let action = sendClick(null, 4, 1, 1);
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
          turn: 1,
          winner: null};
          let action = sendClick(null, 4, 1, 1);
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
          turn: 1,
          winner: null};
          let action = sendClick(null, 2, 3, 1);
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
          turn: 1,
          winner: null};
          let action = sendClick(null, 6, 5, 1);
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
          ['', '', '', '', '', '', 'pl_01@', ''],
          ['', '', '', '', '', 'pd_02*', '*', 'pd_03*'],
          ['', '', '', '', '', '', '', ''],
          ],
          loading: false,
          turn: 1,
          winner: null};
          let action = sendClick(null, 5, 6, 1);
          let afterClick = chessReducer(initialState, action);
          expect(afterClick.board).to.eql([
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', 'pl_01', '', 'pd_03'],
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
        turn: 1,
        winner: null};
        let action = sendClick(null, 5, 1, 1);
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
        action = sendClick(null, 5, 3, 1);
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
        expect(state.turn).to.equal(2);
        action = sendClick(null, 4, 3, 0);
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
        action = sendClick(null, 5, 2, 0);
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
        expect(state.turn).to.equal(3);
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
        turn: 0,
        winner: null};
        let action = sendClick(null, 2, 5, 0);
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
        action = sendClick(null, 3, 5, 0);
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
        expect(state.turn).to.equal(1);
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
        turn: 0,
        winner: null};
        let action = sendClick(null, 6, 7, 0);
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
        action = sendClick(null, 7, 7, 0);
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
        expect(state.turn).to.equal(1);
        expect(state.check).to.equal(true);
        expect(state.winner).to.equal(0);
    })
    it('should NOT detect check mate - regression test 1', () => {
      let initialState = {board: [
        ['', '', 'bd_02', '', 'kd_04', '', '', 'rd_07'],
        ['', '', '', '', '', '', '', 'pd_15'],
        ['', '', '', '', '', '', 'pd_14', ''],
        ['', 'pd_09', '', '', '', 'pd_13', '', ''],
        ['qd_03', '', '', 'pd_11', '', 'pl_21', '', 'pl_23'],
        ['rd_00', '', '', '', '', 'bl_29', '', ''],
        ['', '', '', 'bl_26', 'kl_28', '', 'pl_22', 'rl_31'],
        ['', '', '', '', '', '', '', 'ql_27'],
        ],
        loading: false,
        turn: 1,
        winner: null};
        let action = sendClick(null, 0, 4, 1);
        let state = chessReducer(initialState, action);
        action = sendClick(null, 2, 4, 1);
        state = chessReducer(state, action);
        expect(state.board).to.eql([
          ['', '', 'bd_02', '', 'kd_04', '', '', 'rd_07'],
          ['', '', '', '', '', '', '', 'pd_15'],
          ['', '', '', '', '', '', 'pd_14', ''],
          ['', 'pd_09', '', '', '', 'pd_13', '', ''],
          ['', '', 'qd_03', 'pd_11', '', 'pl_21', '', 'pl_23'],
          ['rd_00', '', '', '', '', 'bl_29', '', ''],
          ['', '', '', 'bl_26', 'kl_28', '', 'pl_22', 'rl_31'],
          ['', '', '', '', '', '', '', 'ql_27'],
        ]);
        expect(state.turn).to.equal(2);
        expect(state.check).to.equal(true);
        expect(state.winner).to.equal(null);
    })
    it('should NOT detect check mate - regression test 2', () => {
      let initialState = {board: [
        ['', '', 'bd_02', '', 'kd_04', 'bd_05', '', ''],
        ['', 'pd_09', 'pd_10', '', 'pd_12', 'pd_13', '', 'pd_15'],
        ['', '', 'rd_00', '', '', '', '', ''],
        ['pd_08', 'pl_17', '', '', '', '', 'pd_14', ''],
        ['pl_16', 'qd_03', '', '', '', '', 'pl_22', ''],
        ['rl_24', '', '', '', '', 'pl_21', '', ''],
        ['', 'pl_17', '', 'bl_26', '', 'kl_28', '', 'pl_23'],
        ['', 'nl_25', '', 'ql_27', '', 'bl_29', '', 'rl_31'],
        ],
        loading: false,
        turn: 1,
        winner: null};
        let action = sendClick(null, 1, 4, 1);
        let state = chessReducer(initialState, action);
        action = sendClick(null, 3, 4, 1);
        state = chessReducer(state, action);
        expect(state.board).to.eql([
          ['', '', 'bd_02', '', 'kd_04', 'bd_05', '', ''],
          ['', 'pd_09', 'pd_10', '', 'pd_12', 'pd_13', '', 'pd_15'],
          ['', '', 'rd_00', '', '', '', '', ''],
          ['pd_08', 'pl_17', '', '', '', '', 'pd_14', ''],
          ['pl_16', '', '', 'qd_03', '', '', 'pl_22', ''],
          ['rl_24', '', '', '', '', 'pl_21', '', ''],
          ['', 'pl_17', '', 'bl_26', '', 'kl_28', '', 'pl_23'],
          ['', 'nl_25', '', 'ql_27', '', 'bl_29', '', 'rl_31'],
        ]);
        expect(state.turn).to.equal(2);
        expect(state.check).to.equal(true);
        expect(state.winner).to.equal(null);
    })
  })
})
