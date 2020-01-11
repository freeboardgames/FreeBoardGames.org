(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["npm.chess.js"],{

/***/ "./node_modules/chess.js/chess.js":
/*!****************************************!*\
  !*** ./node_modules/chess.js/chess.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Copyright (c) 2016, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 *----------------------------------------------------------------------------*/

/* minified license below  */

/* @license
 * Copyright (c) 2016, Jeff Hlywa (jhlywa@gmail.com)
 * Released under the BSD license
 * https://github.com/jhlywa/chess.js/blob/master/LICENSE
 */

var Chess = function(fen) {

  /* jshint indent: false */

  var BLACK = 'b';
  var WHITE = 'w';

  var EMPTY = -1;

  var PAWN = 'p';
  var KNIGHT = 'n';
  var BISHOP = 'b';
  var ROOK = 'r';
  var QUEEN = 'q';
  var KING = 'k';

  var SYMBOLS = 'pnbrqkPNBRQK';

  var DEFAULT_POSITION = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

  var POSSIBLE_RESULTS = ['1-0', '0-1', '1/2-1/2', '*'];

  var PAWN_OFFSETS = {
    b: [16, 32, 17, 15],
    w: [-16, -32, -17, -15]
  };

  var PIECE_OFFSETS = {
    n: [-18, -33, -31, -14,  18, 33, 31,  14],
    b: [-17, -15,  17,  15],
    r: [-16,   1,  16,  -1],
    q: [-17, -16, -15,   1,  17, 16, 15,  -1],
    k: [-17, -16, -15,   1,  17, 16, 15,  -1]
  };

  var ATTACKS = [
    20, 0, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0, 0,20, 0,
     0,20, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0,20, 0, 0,
     0, 0,20, 0, 0, 0, 0, 24,  0, 0, 0, 0,20, 0, 0, 0,
     0, 0, 0,20, 0, 0, 0, 24,  0, 0, 0,20, 0, 0, 0, 0,
     0, 0, 0, 0,20, 0, 0, 24,  0, 0,20, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0,20, 2, 24,  2,20, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0, 2,53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
    24,24,24,24,24,24,56,  0, 56,24,24,24,24,24,24, 0,
     0, 0, 0, 0, 0, 2,53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0,20, 2, 24,  2,20, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0,20, 0, 0, 24,  0, 0,20, 0, 0, 0, 0, 0,
     0, 0, 0,20, 0, 0, 0, 24,  0, 0, 0,20, 0, 0, 0, 0,
     0, 0,20, 0, 0, 0, 0, 24,  0, 0, 0, 0,20, 0, 0, 0,
     0,20, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0,20, 0, 0,
    20, 0, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0, 0,20
  ];

  var RAYS = [
     17,  0,  0,  0,  0,  0,  0, 16,  0,  0,  0,  0,  0,  0, 15, 0,
      0, 17,  0,  0,  0,  0,  0, 16,  0,  0,  0,  0,  0, 15,  0, 0,
      0,  0, 17,  0,  0,  0,  0, 16,  0,  0,  0,  0, 15,  0,  0, 0,
      0,  0,  0, 17,  0,  0,  0, 16,  0,  0,  0, 15,  0,  0,  0, 0,
      0,  0,  0,  0, 17,  0,  0, 16,  0,  0, 15,  0,  0,  0,  0, 0,
      0,  0,  0,  0,  0, 17,  0, 16,  0, 15,  0,  0,  0,  0,  0, 0,
      0,  0,  0,  0,  0,  0, 17, 16, 15,  0,  0,  0,  0,  0,  0, 0,
      1,  1,  1,  1,  1,  1,  1,  0, -1, -1,  -1,-1, -1, -1, -1, 0,
      0,  0,  0,  0,  0,  0,-15,-16,-17,  0,  0,  0,  0,  0,  0, 0,
      0,  0,  0,  0,  0,-15,  0,-16,  0,-17,  0,  0,  0,  0,  0, 0,
      0,  0,  0,  0,-15,  0,  0,-16,  0,  0,-17,  0,  0,  0,  0, 0,
      0,  0,  0,-15,  0,  0,  0,-16,  0,  0,  0,-17,  0,  0,  0, 0,
      0,  0,-15,  0,  0,  0,  0,-16,  0,  0,  0,  0,-17,  0,  0, 0,
      0,-15,  0,  0,  0,  0,  0,-16,  0,  0,  0,  0,  0,-17,  0, 0,
    -15,  0,  0,  0,  0,  0,  0,-16,  0,  0,  0,  0,  0,  0,-17
  ];

  var SHIFTS = { p: 0, n: 1, b: 2, r: 3, q: 4, k: 5 };

  var FLAGS = {
    NORMAL: 'n',
    CAPTURE: 'c',
    BIG_PAWN: 'b',
    EP_CAPTURE: 'e',
    PROMOTION: 'p',
    KSIDE_CASTLE: 'k',
    QSIDE_CASTLE: 'q'
  };

  var BITS = {
    NORMAL: 1,
    CAPTURE: 2,
    BIG_PAWN: 4,
    EP_CAPTURE: 8,
    PROMOTION: 16,
    KSIDE_CASTLE: 32,
    QSIDE_CASTLE: 64
  };

  var RANK_1 = 7;
  var RANK_2 = 6;
  var RANK_3 = 5;
  var RANK_4 = 4;
  var RANK_5 = 3;
  var RANK_6 = 2;
  var RANK_7 = 1;
  var RANK_8 = 0;

  var SQUARES = {
    a8:   0, b8:   1, c8:   2, d8:   3, e8:   4, f8:   5, g8:   6, h8:   7,
    a7:  16, b7:  17, c7:  18, d7:  19, e7:  20, f7:  21, g7:  22, h7:  23,
    a6:  32, b6:  33, c6:  34, d6:  35, e6:  36, f6:  37, g6:  38, h6:  39,
    a5:  48, b5:  49, c5:  50, d5:  51, e5:  52, f5:  53, g5:  54, h5:  55,
    a4:  64, b4:  65, c4:  66, d4:  67, e4:  68, f4:  69, g4:  70, h4:  71,
    a3:  80, b3:  81, c3:  82, d3:  83, e3:  84, f3:  85, g3:  86, h3:  87,
    a2:  96, b2:  97, c2:  98, d2:  99, e2: 100, f2: 101, g2: 102, h2: 103,
    a1: 112, b1: 113, c1: 114, d1: 115, e1: 116, f1: 117, g1: 118, h1: 119
  };

  var ROOKS = {
    w: [{square: SQUARES.a1, flag: BITS.QSIDE_CASTLE},
        {square: SQUARES.h1, flag: BITS.KSIDE_CASTLE}],
    b: [{square: SQUARES.a8, flag: BITS.QSIDE_CASTLE},
        {square: SQUARES.h8, flag: BITS.KSIDE_CASTLE}]
  };

  var board = new Array(128);
  var kings = {w: EMPTY, b: EMPTY};
  var turn = WHITE;
  var castling = {w: 0, b: 0};
  var ep_square = EMPTY;
  var half_moves = 0;
  var move_number = 1;
  var history = [];
  var header = {};

  /* if the user passes in a fen string, load it, else default to
   * starting position
   */
  if (typeof fen === 'undefined') {
    load(DEFAULT_POSITION);
  } else {
    load(fen);
  }

  function clear() {
    board = new Array(128);
    kings = {w: EMPTY, b: EMPTY};
    turn = WHITE;
    castling = {w: 0, b: 0};
    ep_square = EMPTY;
    half_moves = 0;
    move_number = 1;
    history = [];
    header = {};
    update_setup(generate_fen());
  }

  function reset() {
    load(DEFAULT_POSITION);
  }

  function load(fen) {
    var tokens = fen.split(/\s+/);
    var position = tokens[0];
    var square = 0;

    if (!validate_fen(fen).valid) {
      return false;
    }

    clear();

    for (var i = 0; i < position.length; i++) {
      var piece = position.charAt(i);

      if (piece === '/') {
        square += 8;
      } else if (is_digit(piece)) {
        square += parseInt(piece, 10);
      } else {
        var color = (piece < 'a') ? WHITE : BLACK;
        put({type: piece.toLowerCase(), color: color}, algebraic(square));
        square++;
      }
    }

    turn = tokens[1];

    if (tokens[2].indexOf('K') > -1) {
      castling.w |= BITS.KSIDE_CASTLE;
    }
    if (tokens[2].indexOf('Q') > -1) {
      castling.w |= BITS.QSIDE_CASTLE;
    }
    if (tokens[2].indexOf('k') > -1) {
      castling.b |= BITS.KSIDE_CASTLE;
    }
    if (tokens[2].indexOf('q') > -1) {
      castling.b |= BITS.QSIDE_CASTLE;
    }

    ep_square = (tokens[3] === '-') ? EMPTY : SQUARES[tokens[3]];
    half_moves = parseInt(tokens[4], 10);
    move_number = parseInt(tokens[5], 10);

    update_setup(generate_fen());

    return true;
  }

  /* TODO: this function is pretty much crap - it validates structure but
   * completely ignores content (e.g. doesn't verify that each side has a king)
   * ... we should rewrite this, and ditch the silly error_number field while
   * we're at it
   */
  function validate_fen(fen) {
    var errors = {
       0: 'No errors.',
       1: 'FEN string must contain six space-delimited fields.',
       2: '6th field (move number) must be a positive integer.',
       3: '5th field (half move counter) must be a non-negative integer.',
       4: '4th field (en-passant square) is invalid.',
       5: '3rd field (castling availability) is invalid.',
       6: '2nd field (side to move) is invalid.',
       7: '1st field (piece positions) does not contain 8 \'/\'-delimited rows.',
       8: '1st field (piece positions) is invalid [consecutive numbers].',
       9: '1st field (piece positions) is invalid [invalid piece].',
      10: '1st field (piece positions) is invalid [row too large].',
      11: 'Illegal en-passant square',
    };

    /* 1st criterion: 6 space-seperated fields? */
    var tokens = fen.split(/\s+/);
    if (tokens.length !== 6) {
      return {valid: false, error_number: 1, error: errors[1]};
    }

    /* 2nd criterion: move number field is a integer value > 0? */
    if (isNaN(tokens[5]) || (parseInt(tokens[5], 10) <= 0)) {
      return {valid: false, error_number: 2, error: errors[2]};
    }

    /* 3rd criterion: half move counter is an integer >= 0? */
    if (isNaN(tokens[4]) || (parseInt(tokens[4], 10) < 0)) {
      return {valid: false, error_number: 3, error: errors[3]};
    }

    /* 4th criterion: 4th field is a valid e.p.-string? */
    if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
      return {valid: false, error_number: 4, error: errors[4]};
    }

    /* 5th criterion: 3th field is a valid castle-string? */
    if( !/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(tokens[2])) {
      return {valid: false, error_number: 5, error: errors[5]};
    }

    /* 6th criterion: 2nd field is "w" (white) or "b" (black)? */
    if (!/^(w|b)$/.test(tokens[1])) {
      return {valid: false, error_number: 6, error: errors[6]};
    }

    /* 7th criterion: 1st field contains 8 rows? */
    var rows = tokens[0].split('/');
    if (rows.length !== 8) {
      return {valid: false, error_number: 7, error: errors[7]};
    }

    /* 8th criterion: every row is valid? */
    for (var i = 0; i < rows.length; i++) {
      /* check for right sum of fields AND not two numbers in succession */
      var sum_fields = 0;
      var previous_was_number = false;

      for (var k = 0; k < rows[i].length; k++) {
        if (!isNaN(rows[i][k])) {
          if (previous_was_number) {
            return {valid: false, error_number: 8, error: errors[8]};
          }
          sum_fields += parseInt(rows[i][k], 10);
          previous_was_number = true;
        } else {
          if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
            return {valid: false, error_number: 9, error: errors[9]};
          }
          sum_fields += 1;
          previous_was_number = false;
        }
      }
      if (sum_fields !== 8) {
        return {valid: false, error_number: 10, error: errors[10]};
      }
    }

    if ((tokens[3][1] == '3' && tokens[1] == 'w') ||
        (tokens[3][1] == '6' && tokens[1] == 'b')) {
          return {valid: false, error_number: 11, error: errors[11]};
    }

    /* everything's okay! */
    return {valid: true, error_number: 0, error: errors[0]};
  }

  function generate_fen() {
    var empty = 0;
    var fen = '';

    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
      if (board[i] == null) {
        empty++;
      } else {
        if (empty > 0) {
          fen += empty;
          empty = 0;
        }
        var color = board[i].color;
        var piece = board[i].type;

        fen += (color === WHITE) ?
                 piece.toUpperCase() : piece.toLowerCase();
      }

      if ((i + 1) & 0x88) {
        if (empty > 0) {
          fen += empty;
        }

        if (i !== SQUARES.h1) {
          fen += '/';
        }

        empty = 0;
        i += 8;
      }
    }

    var cflags = '';
    if (castling[WHITE] & BITS.KSIDE_CASTLE) { cflags += 'K'; }
    if (castling[WHITE] & BITS.QSIDE_CASTLE) { cflags += 'Q'; }
    if (castling[BLACK] & BITS.KSIDE_CASTLE) { cflags += 'k'; }
    if (castling[BLACK] & BITS.QSIDE_CASTLE) { cflags += 'q'; }

    /* do we have an empty castling flag? */
    cflags = cflags || '-';
    var epflags = (ep_square === EMPTY) ? '-' : algebraic(ep_square);

    return [fen, turn, cflags, epflags, half_moves, move_number].join(' ');
  }

  function set_header(args) {
    for (var i = 0; i < args.length; i += 2) {
      if (typeof args[i] === 'string' &&
          typeof args[i + 1] === 'string') {
        header[args[i]] = args[i + 1];
      }
    }
    return header;
  }

  /* called when the initial board setup is changed with put() or remove().
   * modifies the SetUp and FEN properties of the header object.  if the FEN is
   * equal to the default position, the SetUp and FEN are deleted
   * the setup is only updated if history.length is zero, ie moves haven't been
   * made.
   */
  function update_setup(fen) {
    if (history.length > 0) return;

    if (fen !== DEFAULT_POSITION) {
      header['SetUp'] = '1';
      header['FEN'] = fen;
    } else {
      delete header['SetUp'];
      delete header['FEN'];
    }
  }

  function get(square) {
    var piece = board[SQUARES[square]];
    return (piece) ? {type: piece.type, color: piece.color} : null;
  }

  function put(piece, square) {
    /* check for valid piece object */
    if (!('type' in piece && 'color' in piece)) {
      return false;
    }

    /* check for piece */
    if (SYMBOLS.indexOf(piece.type.toLowerCase()) === -1) {
      return false;
    }

    /* check for valid square */
    if (!(square in SQUARES)) {
      return false;
    }

    var sq = SQUARES[square];

    /* don't let the user place more than one king */
    if (piece.type == KING &&
        !(kings[piece.color] == EMPTY || kings[piece.color] == sq)) {
      return false;
    }

    board[sq] = {type: piece.type, color: piece.color};
    if (piece.type === KING) {
      kings[piece.color] = sq;
    }

    update_setup(generate_fen());

    return true;
  }

  function remove(square) {
    var piece = get(square);
    board[SQUARES[square]] = null;
    if (piece && piece.type === KING) {
      kings[piece.color] = EMPTY;
    }

    update_setup(generate_fen());

    return piece;
  }

  function build_move(board, from, to, flags, promotion) {
    var move = {
      color: turn,
      from: from,
      to: to,
      flags: flags,
      piece: board[from].type
    };

    if (promotion) {
      move.flags |= BITS.PROMOTION;
      move.promotion = promotion;
    }

    if (board[to]) {
      move.captured = board[to].type;
    } else if (flags & BITS.EP_CAPTURE) {
        move.captured = PAWN;
    }
    return move;
  }

  function generate_moves(options) {
    function add_move(board, moves, from, to, flags) {
      /* if pawn promotion */
      if (board[from].type === PAWN &&
         (rank(to) === RANK_8 || rank(to) === RANK_1)) {
          var pieces = [QUEEN, ROOK, BISHOP, KNIGHT];
          for (var i = 0, len = pieces.length; i < len; i++) {
            moves.push(build_move(board, from, to, flags, pieces[i]));
          }
      } else {
       moves.push(build_move(board, from, to, flags));
      }
    }

    var moves = [];
    var us = turn;
    var them = swap_color(us);
    var second_rank = {b: RANK_7, w: RANK_2};

    var first_sq = SQUARES.a8;
    var last_sq = SQUARES.h1;
    var single_square = false;

    /* do we want legal moves? */
    var legal = (typeof options !== 'undefined' && 'legal' in options) ?
                options.legal : true;

    /* are we generating moves for a single square? */
    if (typeof options !== 'undefined' && 'square' in options) {
      if (options.square in SQUARES) {
        first_sq = last_sq = SQUARES[options.square];
        single_square = true;
      } else {
        /* invalid square */
        return [];
      }
    }

    for (var i = first_sq; i <= last_sq; i++) {
      /* did we run off the end of the board */
      if (i & 0x88) { i += 7; continue; }

      var piece = board[i];
      if (piece == null || piece.color !== us) {
        continue;
      }

      if (piece.type === PAWN) {
        /* single square, non-capturing */
        var square = i + PAWN_OFFSETS[us][0];
        if (board[square] == null) {
            add_move(board, moves, i, square, BITS.NORMAL);

          /* double square */
          var square = i + PAWN_OFFSETS[us][1];
          if (second_rank[us] === rank(i) && board[square] == null) {
            add_move(board, moves, i, square, BITS.BIG_PAWN);
          }
        }

        /* pawn captures */
        for (j = 2; j < 4; j++) {
          var square = i + PAWN_OFFSETS[us][j];
          if (square & 0x88) continue;

          if (board[square] != null &&
              board[square].color === them) {
              add_move(board, moves, i, square, BITS.CAPTURE);
          } else if (square === ep_square) {
              add_move(board, moves, i, ep_square, BITS.EP_CAPTURE);
          }
        }
      } else {
        for (var j = 0, len = PIECE_OFFSETS[piece.type].length; j < len; j++) {
          var offset = PIECE_OFFSETS[piece.type][j];
          var square = i;

          while (true) {
            square += offset;
            if (square & 0x88) break;

            if (board[square] == null) {
              add_move(board, moves, i, square, BITS.NORMAL);
            } else {
              if (board[square].color === us) break;
              add_move(board, moves, i, square, BITS.CAPTURE);
              break;
            }

            /* break, if knight or king */
            if (piece.type === 'n' || piece.type === 'k') break;
          }
        }
      }
    }

    /* check for castling if: a) we're generating all moves, or b) we're doing
     * single square move generation on the king's square
     */
    if ((!single_square) || last_sq === kings[us]) {
      /* king-side castling */
      if (castling[us] & BITS.KSIDE_CASTLE) {
        var castling_from = kings[us];
        var castling_to = castling_from + 2;

        if (board[castling_from + 1] == null &&
            board[castling_to]       == null &&
            !attacked(them, kings[us]) &&
            !attacked(them, castling_from + 1) &&
            !attacked(them, castling_to)) {
          add_move(board, moves, kings[us] , castling_to,
                   BITS.KSIDE_CASTLE);
        }
      }

      /* queen-side castling */
      if (castling[us] & BITS.QSIDE_CASTLE) {
        var castling_from = kings[us];
        var castling_to = castling_from - 2;

        if (board[castling_from - 1] == null &&
            board[castling_from - 2] == null &&
            board[castling_from - 3] == null &&
            !attacked(them, kings[us]) &&
            !attacked(them, castling_from - 1) &&
            !attacked(them, castling_to)) {
          add_move(board, moves, kings[us], castling_to,
                   BITS.QSIDE_CASTLE);
        }
      }
    }

    /* return all pseudo-legal moves (this includes moves that allow the king
     * to be captured)
     */
    if (!legal) {
      return moves;
    }

    /* filter out illegal moves */
    var legal_moves = [];
    for (var i = 0, len = moves.length; i < len; i++) {
      make_move(moves[i]);
      if (!king_attacked(us)) {
        legal_moves.push(moves[i]);
      }
      undo_move();
    }

    return legal_moves;
  }

  /* convert a move from 0x88 coordinates to Standard Algebraic Notation
   * (SAN)
   *
   * @param {boolean} sloppy Use the sloppy SAN generator to work around over
   * disambiguation bugs in Fritz and Chessbase.  See below:
   *
   * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
   * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
   * 4. ... Ne7 is technically the valid SAN
   */
  function move_to_san(move, sloppy) {

    var output = '';

    if (move.flags & BITS.KSIDE_CASTLE) {
      output = 'O-O';
    } else if (move.flags & BITS.QSIDE_CASTLE) {
      output = 'O-O-O';
    } else {
      var disambiguator = get_disambiguator(move, sloppy);

      if (move.piece !== PAWN) {
        output += move.piece.toUpperCase() + disambiguator;
      }

      if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
        if (move.piece === PAWN) {
          output += algebraic(move.from)[0];
        }
        output += 'x';
      }

      output += algebraic(move.to);

      if (move.flags & BITS.PROMOTION) {
        output += '=' + move.promotion.toUpperCase();
      }
    }

    make_move(move);
    if (in_check()) {
      if (in_checkmate()) {
        output += '#';
      } else {
        output += '+';
      }
    }
    undo_move();

    return output;
  }

  // parses all of the decorators out of a SAN string
  function stripped_san(move) {
    return move.replace(/=/,'').replace(/[+#]?[?!]*$/,'');
  }

  function attacked(color, square) {
    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
      /* did we run off the end of the board */
      if (i & 0x88) { i += 7; continue; }

      /* if empty square or wrong color */
      if (board[i] == null || board[i].color !== color) continue;

      var piece = board[i];
      var difference = i - square;
      var index = difference + 119;

      if (ATTACKS[index] & (1 << SHIFTS[piece.type])) {
        if (piece.type === PAWN) {
          if (difference > 0) {
            if (piece.color === WHITE) return true;
          } else {
            if (piece.color === BLACK) return true;
          }
          continue;
        }

        /* if the piece is a knight or a king */
        if (piece.type === 'n' || piece.type === 'k') return true;

        var offset = RAYS[index];
        var j = i + offset;

        var blocked = false;
        while (j !== square) {
          if (board[j] != null) { blocked = true; break; }
          j += offset;
        }

        if (!blocked) return true;
      }
    }

    return false;
  }

  function king_attacked(color) {
    return attacked(swap_color(color), kings[color]);
  }

  function in_check() {
    return king_attacked(turn);
  }

  function in_checkmate() {
    return in_check() && generate_moves().length === 0;
  }

  function in_stalemate() {
    return !in_check() && generate_moves().length === 0;
  }

  function insufficient_material() {
    var pieces = {};
    var bishops = [];
    var num_pieces = 0;
    var sq_color = 0;

    for (var i = SQUARES.a8; i<= SQUARES.h1; i++) {
      sq_color = (sq_color + 1) % 2;
      if (i & 0x88) { i += 7; continue; }

      var piece = board[i];
      if (piece) {
        pieces[piece.type] = (piece.type in pieces) ?
                              pieces[piece.type] + 1 : 1;
        if (piece.type === BISHOP) {
          bishops.push(sq_color);
        }
        num_pieces++;
      }
    }

    /* k vs. k */
    if (num_pieces === 2) { return true; }

    /* k vs. kn .... or .... k vs. kb */
    else if (num_pieces === 3 && (pieces[BISHOP] === 1 ||
                                 pieces[KNIGHT] === 1)) { return true; }

    /* kb vs. kb where any number of bishops are all on the same color */
    else if (num_pieces === pieces[BISHOP] + 2) {
      var sum = 0;
      var len = bishops.length;
      for (var i = 0; i < len; i++) {
        sum += bishops[i];
      }
      if (sum === 0 || sum === len) { return true; }
    }

    return false;
  }

  function in_threefold_repetition() {
    /* TODO: while this function is fine for casual use, a better
     * implementation would use a Zobrist key (instead of FEN). the
     * Zobrist key would be maintained in the make_move/undo_move functions,
     * avoiding the costly that we do below.
     */
    var moves = [];
    var positions = {};
    var repetition = false;

    while (true) {
      var move = undo_move();
      if (!move) break;
      moves.push(move);
    }

    while (true) {
      /* remove the last two fields in the FEN string, they're not needed
       * when checking for draw by rep */
      var fen = generate_fen().split(' ').slice(0,4).join(' ');

      /* has the position occurred three or move times */
      positions[fen] = (fen in positions) ? positions[fen] + 1 : 1;
      if (positions[fen] >= 3) {
        repetition = true;
      }

      if (!moves.length) {
        break;
      }
      make_move(moves.pop());
    }

    return repetition;
  }

  function push(move) {
    history.push({
      move: move,
      kings: {b: kings.b, w: kings.w},
      turn: turn,
      castling: {b: castling.b, w: castling.w},
      ep_square: ep_square,
      half_moves: half_moves,
      move_number: move_number
    });
  }

  function make_move(move) {
    var us = turn;
    var them = swap_color(us);
    push(move);

    board[move.to] = board[move.from];
    board[move.from] = null;

    /* if ep capture, remove the captured pawn */
    if (move.flags & BITS.EP_CAPTURE) {
      if (turn === BLACK) {
        board[move.to - 16] = null;
      } else {
        board[move.to + 16] = null;
      }
    }

    /* if pawn promotion, replace with new piece */
    if (move.flags & BITS.PROMOTION) {
      board[move.to] = {type: move.promotion, color: us};
    }

    /* if we moved the king */
    if (board[move.to].type === KING) {
      kings[board[move.to].color] = move.to;

      /* if we castled, move the rook next to the king */
      if (move.flags & BITS.KSIDE_CASTLE) {
        var castling_to = move.to - 1;
        var castling_from = move.to + 1;
        board[castling_to] = board[castling_from];
        board[castling_from] = null;
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        var castling_to = move.to + 1;
        var castling_from = move.to - 2;
        board[castling_to] = board[castling_from];
        board[castling_from] = null;
      }

      /* turn off castling */
      castling[us] = '';
    }

    /* turn off castling if we move a rook */
    if (castling[us]) {
      for (var i = 0, len = ROOKS[us].length; i < len; i++) {
        if (move.from === ROOKS[us][i].square &&
            castling[us] & ROOKS[us][i].flag) {
          castling[us] ^= ROOKS[us][i].flag;
          break;
        }
      }
    }

    /* turn off castling if we capture a rook */
    if (castling[them]) {
      for (var i = 0, len = ROOKS[them].length; i < len; i++) {
        if (move.to === ROOKS[them][i].square &&
            castling[them] & ROOKS[them][i].flag) {
          castling[them] ^= ROOKS[them][i].flag;
          break;
        }
      }
    }

    /* if big pawn move, update the en passant square */
    if (move.flags & BITS.BIG_PAWN) {
      if (turn === 'b') {
        ep_square = move.to - 16;
      } else {
        ep_square = move.to + 16;
      }
    } else {
      ep_square = EMPTY;
    }

    /* reset the 50 move counter if a pawn is moved or a piece is captured */
    if (move.piece === PAWN) {
      half_moves = 0;
    } else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
      half_moves = 0;
    } else {
      half_moves++;
    }

    if (turn === BLACK) {
      move_number++;
    }
    turn = swap_color(turn);
  }

  function undo_move() {
    var old = history.pop();
    if (old == null) { return null; }

    var move = old.move;
    kings = old.kings;
    turn = old.turn;
    castling = old.castling;
    ep_square = old.ep_square;
    half_moves = old.half_moves;
    move_number = old.move_number;

    var us = turn;
    var them = swap_color(turn);

    board[move.from] = board[move.to];
    board[move.from].type = move.piece;  // to undo any promotions
    board[move.to] = null;

    if (move.flags & BITS.CAPTURE) {
      board[move.to] = {type: move.captured, color: them};
    } else if (move.flags & BITS.EP_CAPTURE) {
      var index;
      if (us === BLACK) {
        index = move.to - 16;
      } else {
        index = move.to + 16;
      }
      board[index] = {type: PAWN, color: them};
    }


    if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
      var castling_to, castling_from;
      if (move.flags & BITS.KSIDE_CASTLE) {
        castling_to = move.to + 1;
        castling_from = move.to - 1;
      } else if (move.flags & BITS.QSIDE_CASTLE) {
        castling_to = move.to - 2;
        castling_from = move.to + 1;
      }

      board[castling_to] = board[castling_from];
      board[castling_from] = null;
    }

    return move;
  }

  /* this function is used to uniquely identify ambiguous moves */
  function get_disambiguator(move, sloppy) {
    var moves = generate_moves({legal: !sloppy});

    var from = move.from;
    var to = move.to;
    var piece = move.piece;

    var ambiguities = 0;
    var same_rank = 0;
    var same_file = 0;

    for (var i = 0, len = moves.length; i < len; i++) {
      var ambig_from = moves[i].from;
      var ambig_to = moves[i].to;
      var ambig_piece = moves[i].piece;

      /* if a move of the same piece type ends on the same to square, we'll
       * need to add a disambiguator to the algebraic notation
       */
      if (piece === ambig_piece && from !== ambig_from && to === ambig_to) {
        ambiguities++;

        if (rank(from) === rank(ambig_from)) {
          same_rank++;
        }

        if (file(from) === file(ambig_from)) {
          same_file++;
        }
      }
    }

    if (ambiguities > 0) {
      /* if there exists a similar moving piece on the same rank and file as
       * the move in question, use the square as the disambiguator
       */
      if (same_rank > 0 && same_file > 0) {
        return algebraic(from);
      }
      /* if the moving piece rests on the same file, use the rank symbol as the
       * disambiguator
       */
      else if (same_file > 0) {
        return algebraic(from).charAt(1);
      }
      /* else use the file symbol */
      else {
        return algebraic(from).charAt(0);
      }
    }

    return '';
  }

  function ascii() {
    var s = '   +------------------------+\n';
    for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
      /* display the rank */
      if (file(i) === 0) {
        s += ' ' + '87654321'[rank(i)] + ' |';
      }

      /* empty piece */
      if (board[i] == null) {
        s += ' . ';
      } else {
        var piece = board[i].type;
        var color = board[i].color;
        var symbol = (color === WHITE) ?
                     piece.toUpperCase() : piece.toLowerCase();
        s += ' ' + symbol + ' ';
      }

      if ((i + 1) & 0x88) {
        s += '|\n';
        i += 8;
      }
    }
    s += '   +------------------------+\n';
    s += '     a  b  c  d  e  f  g  h\n';

    return s;
  }

  // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
  function move_from_san(move, sloppy) {
    // strip off any move decorations: e.g Nf3+?!
    var clean_move = stripped_san(move);

    // if we're using the sloppy parser run a regex to grab piece, to, and from
    // this should parse invalid SAN like: Pe2-e4, Rc1c4, Qf3xf7
    if (sloppy) {
      var matches = clean_move.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/);
      if (matches) {
        var piece = matches[1];
        var from = matches[2];
        var to = matches[3];
        var promotion = matches[4];
      }
    }

    var moves = generate_moves();
    for (var i = 0, len = moves.length; i < len; i++) {
      // try the strict parser first, then the sloppy parser if requested
      // by the user
      if ((clean_move === stripped_san(move_to_san(moves[i]))) ||
          (sloppy && clean_move === stripped_san(move_to_san(moves[i], true)))) {
        return moves[i];
      } else {
        if (matches &&
            (!piece || piece.toLowerCase() == moves[i].piece) &&
            SQUARES[from] == moves[i].from &&
            SQUARES[to] == moves[i].to &&
            (!promotion || promotion.toLowerCase() == moves[i].promotion)) {
          return moves[i];
        }
      }
    }

    return null;
  }


  /*****************************************************************************
   * UTILITY FUNCTIONS
   ****************************************************************************/
  function rank(i) {
    return i >> 4;
  }

  function file(i) {
    return i & 15;
  }

  function algebraic(i){
    var f = file(i), r = rank(i);
    return 'abcdefgh'.substring(f,f+1) + '87654321'.substring(r,r+1);
  }

  function swap_color(c) {
    return c === WHITE ? BLACK : WHITE;
  }

  function is_digit(c) {
    return '0123456789'.indexOf(c) !== -1;
  }

  /* pretty = external move object */
  function make_pretty(ugly_move) {
    var move = clone(ugly_move);
    move.san = move_to_san(move, false);
    move.to = algebraic(move.to);
    move.from = algebraic(move.from);

    var flags = '';

    for (var flag in BITS) {
      if (BITS[flag] & move.flags) {
        flags += FLAGS[flag];
      }
    }
    move.flags = flags;

    return move;
  }

  function clone(obj) {
    var dupe = (obj instanceof Array) ? [] : {};

    for (var property in obj) {
      if (typeof property === 'object') {
        dupe[property] = clone(obj[property]);
      } else {
        dupe[property] = obj[property];
      }
    }

    return dupe;
  }

  function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
  }

  /*****************************************************************************
   * DEBUGGING UTILITIES
   ****************************************************************************/
  function perft(depth) {
    var moves = generate_moves({legal: false});
    var nodes = 0;
    var color = turn;

    for (var i = 0, len = moves.length; i < len; i++) {
      make_move(moves[i]);
      if (!king_attacked(color)) {
        if (depth - 1 > 0) {
          var child_nodes = perft(depth - 1);
          nodes += child_nodes;
        } else {
          nodes++;
        }
      }
      undo_move();
    }

    return nodes;
  }

  return {
    /***************************************************************************
     * PUBLIC CONSTANTS (is there a better way to do this?)
     **************************************************************************/
    WHITE: WHITE,
    BLACK: BLACK,
    PAWN: PAWN,
    KNIGHT: KNIGHT,
    BISHOP: BISHOP,
    ROOK: ROOK,
    QUEEN: QUEEN,
    KING: KING,
    SQUARES: (function() {
                /* from the ECMA-262 spec (section 12.6.4):
                 * "The mechanics of enumerating the properties ... is
                 * implementation dependent"
                 * so: for (var sq in SQUARES) { keys.push(sq); } might not be
                 * ordered correctly
                 */
                var keys = [];
                for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
                  if (i & 0x88) { i += 7; continue; }
                  keys.push(algebraic(i));
                }
                return keys;
              })(),
    FLAGS: FLAGS,

    /***************************************************************************
     * PUBLIC API
     **************************************************************************/
    load: function(fen) {
      return load(fen);
    },

    reset: function() {
      return reset();
    },

    moves: function(options) {
      /* The internal representation of a chess move is in 0x88 format, and
       * not meant to be human-readable.  The code below converts the 0x88
       * square coordinates to algebraic coordinates.  It also prunes an
       * unnecessary move keys resulting from a verbose call.
       */

      var ugly_moves = generate_moves(options);
      var moves = [];

      for (var i = 0, len = ugly_moves.length; i < len; i++) {

        /* does the user want a full move object (most likely not), or just
         * SAN
         */
        if (typeof options !== 'undefined' && 'verbose' in options &&
            options.verbose) {
          moves.push(make_pretty(ugly_moves[i]));
        } else {
          moves.push(move_to_san(ugly_moves[i], false));
        }
      }

      return moves;
    },

    in_check: function() {
      return in_check();
    },

    in_checkmate: function() {
      return in_checkmate();
    },

    in_stalemate: function() {
      return in_stalemate();
    },

    in_draw: function() {
      return half_moves >= 100 ||
             in_stalemate() ||
             insufficient_material() ||
             in_threefold_repetition();
    },

    insufficient_material: function() {
      return insufficient_material();
    },

    in_threefold_repetition: function() {
      return in_threefold_repetition();
    },

    game_over: function() {
      return half_moves >= 100 ||
             in_checkmate() ||
             in_stalemate() ||
             insufficient_material() ||
             in_threefold_repetition();
    },

    validate_fen: function(fen) {
      return validate_fen(fen);
    },

    fen: function() {
      return generate_fen();
    },

    pgn: function(options) {
      /* using the specification from http://www.chessclub.com/help/PGN-spec
       * example for html usage: .pgn({ max_width: 72, newline_char: "<br />" })
       */
      var newline = (typeof options === 'object' &&
                     typeof options.newline_char === 'string') ?
                     options.newline_char : '\n';
      var max_width = (typeof options === 'object' &&
                       typeof options.max_width === 'number') ?
                       options.max_width : 0;
      var result = [];
      var header_exists = false;

      /* add the PGN header headerrmation */
      for (var i in header) {
        /* TODO: order of enumerated properties in header object is not
         * guaranteed, see ECMA-262 spec (section 12.6.4)
         */
        result.push('[' + i + ' \"' + header[i] + '\"]' + newline);
        header_exists = true;
      }

      if (header_exists && history.length) {
        result.push(newline);
      }

      /* pop all of history onto reversed_history */
      var reversed_history = [];
      while (history.length > 0) {
        reversed_history.push(undo_move());
      }

      var moves = [];
      var move_string = '';

      /* build the list of moves.  a move_string looks like: "3. e3 e6" */
      while (reversed_history.length > 0) {
        var move = reversed_history.pop();

        /* if the position started with black to move, start PGN with 1. ... */
        if (!history.length && move.color === 'b') {
          move_string = move_number + '. ...';
        } else if (move.color === 'w') {
          /* store the previous generated move_string if we have one */
          if (move_string.length) {
            moves.push(move_string);
          }
          move_string = move_number + '.';
        }

        move_string = move_string + ' ' + move_to_san(move, false);
        make_move(move);
      }

      /* are there any other leftover moves? */
      if (move_string.length) {
        moves.push(move_string);
      }

      /* is there a result? */
      if (typeof header.Result !== 'undefined') {
        moves.push(header.Result);
      }

      /* history should be back to what is was before we started generating PGN,
       * so join together moves
       */
      if (max_width === 0) {
        return result.join('') + moves.join(' ');
      }

      /* wrap the PGN output at max_width */
      var current_width = 0;
      for (var i = 0; i < moves.length; i++) {
        /* if the current move will push past max_width */
        if (current_width + moves[i].length > max_width && i !== 0) {

          /* don't end the line with whitespace */
          if (result[result.length - 1] === ' ') {
            result.pop();
          }

          result.push(newline);
          current_width = 0;
        } else if (i !== 0) {
          result.push(' ');
          current_width++;
        }
        result.push(moves[i]);
        current_width += moves[i].length;
      }

      return result.join('');
    },

    load_pgn: function(pgn, options) {
      // allow the user to specify the sloppy move parser to work around over
      // disambiguation bugs in Fritz and Chessbase
      var sloppy = (typeof options !== 'undefined' && 'sloppy' in options) ?
                    options.sloppy : false;

      function mask(str) {
        return str.replace(/\\/g, '\\');
      }

      function has_keys(object) {
        for (var key in object) {
          return true;
        }
        return false;
      }

      function parse_pgn_header(header, options) {
        var newline_char = (typeof options === 'object' &&
                            typeof options.newline_char === 'string') ?
                            options.newline_char : '\r?\n';
        var header_obj = {};
        var headers = header.split(new RegExp(mask(newline_char)));
        var key = '';
        var value = '';

        for (var i = 0; i < headers.length; i++) {
          key = headers[i].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/, '$1');
          value = headers[i].replace(/^\[[A-Za-z]+\s"(.*)"\]$/, '$1');
          if (trim(key).length > 0) {
            header_obj[key] = value;
          }
        }

        return header_obj;
      }

      var newline_char = (typeof options === 'object' &&
                          typeof options.newline_char === 'string') ?
                          options.newline_char : '\r?\n';
      var regex = new RegExp('^(\\[(.|' + mask(newline_char) + ')*\\])' +
                             '(' + mask(newline_char) + ')*' +
                             '1.(' + mask(newline_char) + '|.)*$', 'g');

      /* get header part of the PGN file */
      var header_string = pgn.replace(regex, '$1');

      /* no info part given, begins with moves */
      if (header_string[0] !== '[') {
        header_string = '';
      }

      reset();

      /* parse PGN header */
      var headers = parse_pgn_header(header_string, options);
      for (var key in headers) {
        set_header([key, headers[key]]);
      }

      /* load the starting position indicated by [Setup '1'] and
      * [FEN position] */
      if (headers['SetUp'] === '1') {
          if (!(('FEN' in headers) && load(headers['FEN']))) {
            return false;
          }
      }

      /* delete header to get the moves */
      var ms = pgn.replace(header_string, '').replace(new RegExp(mask(newline_char), 'g'), ' ');

      /* delete comments */
      ms = ms.replace(/(\{[^}]+\})+?/g, '');

      /* delete recursive annotation variations */
      var rav_regex = /(\([^\(\)]+\))+?/g
      while (rav_regex.test(ms)) {
        ms = ms.replace(rav_regex, '');
      }

      /* delete move numbers */
      ms = ms.replace(/\d+\.(\.\.)?/g, '');

      /* delete ... indicating black to move */
      ms = ms.replace(/\.\.\./g, '');

      /* delete numeric annotation glyphs */
      ms = ms.replace(/\$\d+/g, '');

      /* trim and get array of moves */
      var moves = trim(ms).split(new RegExp(/\s+/));

      /* delete empty entries */
      moves = moves.join(',').replace(/,,+/g, ',').split(',');
      var move = '';

      for (var half_move = 0; half_move < moves.length - 1; half_move++) {
        move = move_from_san(moves[half_move], sloppy);

        /* move not possible! (don't clear the board to examine to show the
         * latest valid position)
         */
        if (move == null) {
          return false;
        } else {
          make_move(move);
        }
      }

      /* examine last move */
      move = moves[moves.length - 1];
      if (POSSIBLE_RESULTS.indexOf(move) > -1) {
        if (has_keys(header) && typeof header.Result === 'undefined') {
          set_header(['Result', move]);
        }
      }
      else {
        move = move_from_san(move, sloppy);
        if (move == null) {
          return false;
        } else {
          make_move(move);
        }
      }
      return true;
    },

    header: function() {
      return set_header(arguments);
    },

    ascii: function() {
      return ascii();
    },

    turn: function() {
      return turn;
    },

    move: function(move, options) {
      /* The move function can be called with in the following parameters:
       *
       * .move('Nxb7')      <- where 'move' is a case-sensitive SAN string
       *
       * .move({ from: 'h7', <- where the 'move' is a move object (additional
       *         to :'h8',      fields are ignored)
       *         promotion: 'q',
       *      })
       */

      // allow the user to specify the sloppy move parser to work around over
      // disambiguation bugs in Fritz and Chessbase
      var sloppy = (typeof options !== 'undefined' && 'sloppy' in options) ?
                    options.sloppy : false;

      var move_obj = null;

      if (typeof move === 'string') {
        move_obj = move_from_san(move, sloppy);
      } else if (typeof move === 'object') {
        var moves = generate_moves();

        /* convert the pretty move object to an ugly move object */
        for (var i = 0, len = moves.length; i < len; i++) {
          if (move.from === algebraic(moves[i].from) &&
              move.to === algebraic(moves[i].to) &&
              (!('promotion' in moves[i]) ||
              move.promotion === moves[i].promotion)) {
            move_obj = moves[i];
            break;
          }
        }
      }

      /* failed to find move */
      if (!move_obj) {
        return null;
      }

      /* need to make a copy of move because we can't generate SAN after the
       * move is made
       */
      var pretty_move = make_pretty(move_obj);

      make_move(move_obj);

      return pretty_move;
    },

    undo: function() {
      var move = undo_move();
      return (move) ? make_pretty(move) : null;
    },

    clear: function() {
      return clear();
    },

    put: function(piece, square) {
      return put(piece, square);
    },

    get: function(square) {
      return get(square);
    },

    remove: function(square) {
      return remove(square);
    },

    perft: function(depth) {
      return perft(depth);
    },

    square_color: function(square) {
      if (square in SQUARES) {
        var sq_0x88 = SQUARES[square];
        return ((rank(sq_0x88) + file(sq_0x88)) % 2 === 0) ? 'light' : 'dark';
      }

      return null;
    },

    history: function(options) {
      var reversed_history = [];
      var move_history = [];
      var verbose = (typeof options !== 'undefined' && 'verbose' in options &&
                     options.verbose);

      while (history.length > 0) {
        reversed_history.push(undo_move());
      }

      while (reversed_history.length > 0) {
        var move = reversed_history.pop();
        if (verbose) {
          move_history.push(make_pretty(move));
        } else {
          move_history.push(move_to_san(move));
        }
        make_move(move);
      }

      return move_history;
    }

  };
};

/* export Chess object if using node or any other CommonJS compatible
 * environment */
if (true) exports.Chess = Chess;
/* export Chess object for any RequireJS compatible environment */
if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return Chess;  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2hlc3MuanMvY2hlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsK0JBQStCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMsNENBQTRDO0FBQ3JELFNBQVMsNENBQTRDO0FBQ3JELFNBQVMsNENBQTRDO0FBQ3JELFNBQVMsNENBQTRDO0FBQ3JEOztBQUVBO0FBQ0EsZUFBZTtBQUNmO0FBQ0Esa0JBQWtC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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLElBQThCO0FBQ2xDO0FBQ0EsSUFBSSxJQUE2QixFQUFFLG1DQUFRLGFBQWEsY0FBYyxHQUFHO0FBQUEsb0dBQUMiLCJmaWxlIjoiYzIyMjFhMmU3MzNjMWYyZGQ5NGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE2LCBKZWZmIEhseXdhIChqaGx5d2FAZ21haWwuY29tKVxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAqIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuICpcbiAqIDEuIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqICAgIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiAyLiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiAgICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uXG4gKiAgICBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuICogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuICogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiAqIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRVxuICogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuICogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiAqIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuICogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiAqIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4gKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuICogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4gKlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyogbWluaWZpZWQgbGljZW5zZSBiZWxvdyAgKi9cblxuLyogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNiwgSmVmZiBIbHl3YSAoamhseXdhQGdtYWlsLmNvbSlcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBCU0QgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2pobHl3YS9jaGVzcy5qcy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxudmFyIENoZXNzID0gZnVuY3Rpb24oZmVuKSB7XG5cbiAgLyoganNoaW50IGluZGVudDogZmFsc2UgKi9cblxuICB2YXIgQkxBQ0sgPSAnYic7XG4gIHZhciBXSElURSA9ICd3JztcblxuICB2YXIgRU1QVFkgPSAtMTtcblxuICB2YXIgUEFXTiA9ICdwJztcbiAgdmFyIEtOSUdIVCA9ICduJztcbiAgdmFyIEJJU0hPUCA9ICdiJztcbiAgdmFyIFJPT0sgPSAncic7XG4gIHZhciBRVUVFTiA9ICdxJztcbiAgdmFyIEtJTkcgPSAnayc7XG5cbiAgdmFyIFNZTUJPTFMgPSAncG5icnFrUE5CUlFLJztcblxuICB2YXIgREVGQVVMVF9QT1NJVElPTiA9ICdybmJxa2Juci9wcHBwcHBwcC84LzgvOC84L1BQUFBQUFBQL1JOQlFLQk5SIHcgS1FrcSAtIDAgMSc7XG5cbiAgdmFyIFBPU1NJQkxFX1JFU1VMVFMgPSBbJzEtMCcsICcwLTEnLCAnMS8yLTEvMicsICcqJ107XG5cbiAgdmFyIFBBV05fT0ZGU0VUUyA9IHtcbiAgICBiOiBbMTYsIDMyLCAxNywgMTVdLFxuICAgIHc6IFstMTYsIC0zMiwgLTE3LCAtMTVdXG4gIH07XG5cbiAgdmFyIFBJRUNFX09GRlNFVFMgPSB7XG4gICAgbjogWy0xOCwgLTMzLCAtMzEsIC0xNCwgIDE4LCAzMywgMzEsICAxNF0sXG4gICAgYjogWy0xNywgLTE1LCAgMTcsICAxNV0sXG4gICAgcjogWy0xNiwgICAxLCAgMTYsICAtMV0sXG4gICAgcTogWy0xNywgLTE2LCAtMTUsICAgMSwgIDE3LCAxNiwgMTUsICAtMV0sXG4gICAgazogWy0xNywgLTE2LCAtMTUsICAgMSwgIDE3LCAxNiwgMTUsICAtMV1cbiAgfTtcblxuICB2YXIgQVRUQUNLUyA9IFtcbiAgICAyMCwgMCwgMCwgMCwgMCwgMCwgMCwgMjQsICAwLCAwLCAwLCAwLCAwLCAwLDIwLCAwLFxuICAgICAwLDIwLCAwLCAwLCAwLCAwLCAwLCAyNCwgIDAsIDAsIDAsIDAsIDAsMjAsIDAsIDAsXG4gICAgIDAsIDAsMjAsIDAsIDAsIDAsIDAsIDI0LCAgMCwgMCwgMCwgMCwyMCwgMCwgMCwgMCxcbiAgICAgMCwgMCwgMCwyMCwgMCwgMCwgMCwgMjQsICAwLCAwLCAwLDIwLCAwLCAwLCAwLCAwLFxuICAgICAwLCAwLCAwLCAwLDIwLCAwLCAwLCAyNCwgIDAsIDAsMjAsIDAsIDAsIDAsIDAsIDAsXG4gICAgIDAsIDAsIDAsIDAsIDAsMjAsIDIsIDI0LCAgMiwyMCwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgICAgMCwgMCwgMCwgMCwgMCwgMiw1MywgNTYsIDUzLCAyLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgIDI0LDI0LDI0LDI0LDI0LDI0LDU2LCAgMCwgNTYsMjQsMjQsMjQsMjQsMjQsMjQsIDAsXG4gICAgIDAsIDAsIDAsIDAsIDAsIDIsNTMsIDU2LCA1MywgMiwgMCwgMCwgMCwgMCwgMCwgMCxcbiAgICAgMCwgMCwgMCwgMCwgMCwyMCwgMiwgMjQsICAyLDIwLCAwLCAwLCAwLCAwLCAwLCAwLFxuICAgICAwLCAwLCAwLCAwLDIwLCAwLCAwLCAyNCwgIDAsIDAsMjAsIDAsIDAsIDAsIDAsIDAsXG4gICAgIDAsIDAsIDAsMjAsIDAsIDAsIDAsIDI0LCAgMCwgMCwgMCwyMCwgMCwgMCwgMCwgMCxcbiAgICAgMCwgMCwyMCwgMCwgMCwgMCwgMCwgMjQsICAwLCAwLCAwLCAwLDIwLCAwLCAwLCAwLFxuICAgICAwLDIwLCAwLCAwLCAwLCAwLCAwLCAyNCwgIDAsIDAsIDAsIDAsIDAsMjAsIDAsIDAsXG4gICAgMjAsIDAsIDAsIDAsIDAsIDAsIDAsIDI0LCAgMCwgMCwgMCwgMCwgMCwgMCwyMFxuICBdO1xuXG4gIHZhciBSQVlTID0gW1xuICAgICAxNywgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwgMTYsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsIDE1LCAwLFxuICAgICAgMCwgMTcsICAwLCAgMCwgIDAsICAwLCAgMCwgMTYsICAwLCAgMCwgIDAsICAwLCAgMCwgMTUsICAwLCAwLFxuICAgICAgMCwgIDAsIDE3LCAgMCwgIDAsICAwLCAgMCwgMTYsICAwLCAgMCwgIDAsICAwLCAxNSwgIDAsICAwLCAwLFxuICAgICAgMCwgIDAsICAwLCAxNywgIDAsICAwLCAgMCwgMTYsICAwLCAgMCwgIDAsIDE1LCAgMCwgIDAsICAwLCAwLFxuICAgICAgMCwgIDAsICAwLCAgMCwgMTcsICAwLCAgMCwgMTYsICAwLCAgMCwgMTUsICAwLCAgMCwgIDAsICAwLCAwLFxuICAgICAgMCwgIDAsICAwLCAgMCwgIDAsIDE3LCAgMCwgMTYsICAwLCAxNSwgIDAsICAwLCAgMCwgIDAsICAwLCAwLFxuICAgICAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAxNywgMTYsIDE1LCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAwLFxuICAgICAgMSwgIDEsICAxLCAgMSwgIDEsICAxLCAgMSwgIDAsIC0xLCAtMSwgIC0xLC0xLCAtMSwgLTEsIC0xLCAwLFxuICAgICAgMCwgIDAsICAwLCAgMCwgIDAsICAwLC0xNSwtMTYsLTE3LCAgMCwgIDAsICAwLCAgMCwgIDAsICAwLCAwLFxuICAgICAgMCwgIDAsICAwLCAgMCwgIDAsLTE1LCAgMCwtMTYsICAwLC0xNywgIDAsICAwLCAgMCwgIDAsICAwLCAwLFxuICAgICAgMCwgIDAsICAwLCAgMCwtMTUsICAwLCAgMCwtMTYsICAwLCAgMCwtMTcsICAwLCAgMCwgIDAsICAwLCAwLFxuICAgICAgMCwgIDAsICAwLC0xNSwgIDAsICAwLCAgMCwtMTYsICAwLCAgMCwgIDAsLTE3LCAgMCwgIDAsICAwLCAwLFxuICAgICAgMCwgIDAsLTE1LCAgMCwgIDAsICAwLCAgMCwtMTYsICAwLCAgMCwgIDAsICAwLC0xNywgIDAsICAwLCAwLFxuICAgICAgMCwtMTUsICAwLCAgMCwgIDAsICAwLCAgMCwtMTYsICAwLCAgMCwgIDAsICAwLCAgMCwtMTcsICAwLCAwLFxuICAgIC0xNSwgIDAsICAwLCAgMCwgIDAsICAwLCAgMCwtMTYsICAwLCAgMCwgIDAsICAwLCAgMCwgIDAsLTE3XG4gIF07XG5cbiAgdmFyIFNISUZUUyA9IHsgcDogMCwgbjogMSwgYjogMiwgcjogMywgcTogNCwgazogNSB9O1xuXG4gIHZhciBGTEFHUyA9IHtcbiAgICBOT1JNQUw6ICduJyxcbiAgICBDQVBUVVJFOiAnYycsXG4gICAgQklHX1BBV046ICdiJyxcbiAgICBFUF9DQVBUVVJFOiAnZScsXG4gICAgUFJPTU9USU9OOiAncCcsXG4gICAgS1NJREVfQ0FTVExFOiAnaycsXG4gICAgUVNJREVfQ0FTVExFOiAncSdcbiAgfTtcblxuICB2YXIgQklUUyA9IHtcbiAgICBOT1JNQUw6IDEsXG4gICAgQ0FQVFVSRTogMixcbiAgICBCSUdfUEFXTjogNCxcbiAgICBFUF9DQVBUVVJFOiA4LFxuICAgIFBST01PVElPTjogMTYsXG4gICAgS1NJREVfQ0FTVExFOiAzMixcbiAgICBRU0lERV9DQVNUTEU6IDY0XG4gIH07XG5cbiAgdmFyIFJBTktfMSA9IDc7XG4gIHZhciBSQU5LXzIgPSA2O1xuICB2YXIgUkFOS18zID0gNTtcbiAgdmFyIFJBTktfNCA9IDQ7XG4gIHZhciBSQU5LXzUgPSAzO1xuICB2YXIgUkFOS182ID0gMjtcbiAgdmFyIFJBTktfNyA9IDE7XG4gIHZhciBSQU5LXzggPSAwO1xuXG4gIHZhciBTUVVBUkVTID0ge1xuICAgIGE4OiAgIDAsIGI4OiAgIDEsIGM4OiAgIDIsIGQ4OiAgIDMsIGU4OiAgIDQsIGY4OiAgIDUsIGc4OiAgIDYsIGg4OiAgIDcsXG4gICAgYTc6ICAxNiwgYjc6ICAxNywgYzc6ICAxOCwgZDc6ICAxOSwgZTc6ICAyMCwgZjc6ICAyMSwgZzc6ICAyMiwgaDc6ICAyMyxcbiAgICBhNjogIDMyLCBiNjogIDMzLCBjNjogIDM0LCBkNjogIDM1LCBlNjogIDM2LCBmNjogIDM3LCBnNjogIDM4LCBoNjogIDM5LFxuICAgIGE1OiAgNDgsIGI1OiAgNDksIGM1OiAgNTAsIGQ1OiAgNTEsIGU1OiAgNTIsIGY1OiAgNTMsIGc1OiAgNTQsIGg1OiAgNTUsXG4gICAgYTQ6ICA2NCwgYjQ6ICA2NSwgYzQ6ICA2NiwgZDQ6ICA2NywgZTQ6ICA2OCwgZjQ6ICA2OSwgZzQ6ICA3MCwgaDQ6ICA3MSxcbiAgICBhMzogIDgwLCBiMzogIDgxLCBjMzogIDgyLCBkMzogIDgzLCBlMzogIDg0LCBmMzogIDg1LCBnMzogIDg2LCBoMzogIDg3LFxuICAgIGEyOiAgOTYsIGIyOiAgOTcsIGMyOiAgOTgsIGQyOiAgOTksIGUyOiAxMDAsIGYyOiAxMDEsIGcyOiAxMDIsIGgyOiAxMDMsXG4gICAgYTE6IDExMiwgYjE6IDExMywgYzE6IDExNCwgZDE6IDExNSwgZTE6IDExNiwgZjE6IDExNywgZzE6IDExOCwgaDE6IDExOVxuICB9O1xuXG4gIHZhciBST09LUyA9IHtcbiAgICB3OiBbe3NxdWFyZTogU1FVQVJFUy5hMSwgZmxhZzogQklUUy5RU0lERV9DQVNUTEV9LFxuICAgICAgICB7c3F1YXJlOiBTUVVBUkVTLmgxLCBmbGFnOiBCSVRTLktTSURFX0NBU1RMRX1dLFxuICAgIGI6IFt7c3F1YXJlOiBTUVVBUkVTLmE4LCBmbGFnOiBCSVRTLlFTSURFX0NBU1RMRX0sXG4gICAgICAgIHtzcXVhcmU6IFNRVUFSRVMuaDgsIGZsYWc6IEJJVFMuS1NJREVfQ0FTVExFfV1cbiAgfTtcblxuICB2YXIgYm9hcmQgPSBuZXcgQXJyYXkoMTI4KTtcbiAgdmFyIGtpbmdzID0ge3c6IEVNUFRZLCBiOiBFTVBUWX07XG4gIHZhciB0dXJuID0gV0hJVEU7XG4gIHZhciBjYXN0bGluZyA9IHt3OiAwLCBiOiAwfTtcbiAgdmFyIGVwX3NxdWFyZSA9IEVNUFRZO1xuICB2YXIgaGFsZl9tb3ZlcyA9IDA7XG4gIHZhciBtb3ZlX251bWJlciA9IDE7XG4gIHZhciBoaXN0b3J5ID0gW107XG4gIHZhciBoZWFkZXIgPSB7fTtcblxuICAvKiBpZiB0aGUgdXNlciBwYXNzZXMgaW4gYSBmZW4gc3RyaW5nLCBsb2FkIGl0LCBlbHNlIGRlZmF1bHQgdG9cbiAgICogc3RhcnRpbmcgcG9zaXRpb25cbiAgICovXG4gIGlmICh0eXBlb2YgZmVuID09PSAndW5kZWZpbmVkJykge1xuICAgIGxvYWQoREVGQVVMVF9QT1NJVElPTik7XG4gIH0gZWxzZSB7XG4gICAgbG9hZChmZW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgYm9hcmQgPSBuZXcgQXJyYXkoMTI4KTtcbiAgICBraW5ncyA9IHt3OiBFTVBUWSwgYjogRU1QVFl9O1xuICAgIHR1cm4gPSBXSElURTtcbiAgICBjYXN0bGluZyA9IHt3OiAwLCBiOiAwfTtcbiAgICBlcF9zcXVhcmUgPSBFTVBUWTtcbiAgICBoYWxmX21vdmVzID0gMDtcbiAgICBtb3ZlX251bWJlciA9IDE7XG4gICAgaGlzdG9yeSA9IFtdO1xuICAgIGhlYWRlciA9IHt9O1xuICAgIHVwZGF0ZV9zZXR1cChnZW5lcmF0ZV9mZW4oKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBsb2FkKERFRkFVTFRfUE9TSVRJT04pO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9hZChmZW4pIHtcbiAgICB2YXIgdG9rZW5zID0gZmVuLnNwbGl0KC9cXHMrLyk7XG4gICAgdmFyIHBvc2l0aW9uID0gdG9rZW5zWzBdO1xuICAgIHZhciBzcXVhcmUgPSAwO1xuXG4gICAgaWYgKCF2YWxpZGF0ZV9mZW4oZmVuKS52YWxpZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNsZWFyKCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc2l0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGllY2UgPSBwb3NpdGlvbi5jaGFyQXQoaSk7XG5cbiAgICAgIGlmIChwaWVjZSA9PT0gJy8nKSB7XG4gICAgICAgIHNxdWFyZSArPSA4O1xuICAgICAgfSBlbHNlIGlmIChpc19kaWdpdChwaWVjZSkpIHtcbiAgICAgICAgc3F1YXJlICs9IHBhcnNlSW50KHBpZWNlLCAxMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY29sb3IgPSAocGllY2UgPCAnYScpID8gV0hJVEUgOiBCTEFDSztcbiAgICAgICAgcHV0KHt0eXBlOiBwaWVjZS50b0xvd2VyQ2FzZSgpLCBjb2xvcjogY29sb3J9LCBhbGdlYnJhaWMoc3F1YXJlKSk7XG4gICAgICAgIHNxdWFyZSsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHR1cm4gPSB0b2tlbnNbMV07XG5cbiAgICBpZiAodG9rZW5zWzJdLmluZGV4T2YoJ0snKSA+IC0xKSB7XG4gICAgICBjYXN0bGluZy53IHw9IEJJVFMuS1NJREVfQ0FTVExFO1xuICAgIH1cbiAgICBpZiAodG9rZW5zWzJdLmluZGV4T2YoJ1EnKSA+IC0xKSB7XG4gICAgICBjYXN0bGluZy53IHw9IEJJVFMuUVNJREVfQ0FTVExFO1xuICAgIH1cbiAgICBpZiAodG9rZW5zWzJdLmluZGV4T2YoJ2snKSA+IC0xKSB7XG4gICAgICBjYXN0bGluZy5iIHw9IEJJVFMuS1NJREVfQ0FTVExFO1xuICAgIH1cbiAgICBpZiAodG9rZW5zWzJdLmluZGV4T2YoJ3EnKSA+IC0xKSB7XG4gICAgICBjYXN0bGluZy5iIHw9IEJJVFMuUVNJREVfQ0FTVExFO1xuICAgIH1cblxuICAgIGVwX3NxdWFyZSA9ICh0b2tlbnNbM10gPT09ICctJykgPyBFTVBUWSA6IFNRVUFSRVNbdG9rZW5zWzNdXTtcbiAgICBoYWxmX21vdmVzID0gcGFyc2VJbnQodG9rZW5zWzRdLCAxMCk7XG4gICAgbW92ZV9udW1iZXIgPSBwYXJzZUludCh0b2tlbnNbNV0sIDEwKTtcblxuICAgIHVwZGF0ZV9zZXR1cChnZW5lcmF0ZV9mZW4oKSk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qIFRPRE86IHRoaXMgZnVuY3Rpb24gaXMgcHJldHR5IG11Y2ggY3JhcCAtIGl0IHZhbGlkYXRlcyBzdHJ1Y3R1cmUgYnV0XG4gICAqIGNvbXBsZXRlbHkgaWdub3JlcyBjb250ZW50IChlLmcuIGRvZXNuJ3QgdmVyaWZ5IHRoYXQgZWFjaCBzaWRlIGhhcyBhIGtpbmcpXG4gICAqIC4uLiB3ZSBzaG91bGQgcmV3cml0ZSB0aGlzLCBhbmQgZGl0Y2ggdGhlIHNpbGx5IGVycm9yX251bWJlciBmaWVsZCB3aGlsZVxuICAgKiB3ZSdyZSBhdCBpdFxuICAgKi9cbiAgZnVuY3Rpb24gdmFsaWRhdGVfZmVuKGZlbikge1xuICAgIHZhciBlcnJvcnMgPSB7XG4gICAgICAgMDogJ05vIGVycm9ycy4nLFxuICAgICAgIDE6ICdGRU4gc3RyaW5nIG11c3QgY29udGFpbiBzaXggc3BhY2UtZGVsaW1pdGVkIGZpZWxkcy4nLFxuICAgICAgIDI6ICc2dGggZmllbGQgKG1vdmUgbnVtYmVyKSBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci4nLFxuICAgICAgIDM6ICc1dGggZmllbGQgKGhhbGYgbW92ZSBjb3VudGVyKSBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXIuJyxcbiAgICAgICA0OiAnNHRoIGZpZWxkIChlbi1wYXNzYW50IHNxdWFyZSkgaXMgaW52YWxpZC4nLFxuICAgICAgIDU6ICczcmQgZmllbGQgKGNhc3RsaW5nIGF2YWlsYWJpbGl0eSkgaXMgaW52YWxpZC4nLFxuICAgICAgIDY6ICcybmQgZmllbGQgKHNpZGUgdG8gbW92ZSkgaXMgaW52YWxpZC4nLFxuICAgICAgIDc6ICcxc3QgZmllbGQgKHBpZWNlIHBvc2l0aW9ucykgZG9lcyBub3QgY29udGFpbiA4IFxcJy9cXCctZGVsaW1pdGVkIHJvd3MuJyxcbiAgICAgICA4OiAnMXN0IGZpZWxkIChwaWVjZSBwb3NpdGlvbnMpIGlzIGludmFsaWQgW2NvbnNlY3V0aXZlIG51bWJlcnNdLicsXG4gICAgICAgOTogJzFzdCBmaWVsZCAocGllY2UgcG9zaXRpb25zKSBpcyBpbnZhbGlkIFtpbnZhbGlkIHBpZWNlXS4nLFxuICAgICAgMTA6ICcxc3QgZmllbGQgKHBpZWNlIHBvc2l0aW9ucykgaXMgaW52YWxpZCBbcm93IHRvbyBsYXJnZV0uJyxcbiAgICAgIDExOiAnSWxsZWdhbCBlbi1wYXNzYW50IHNxdWFyZScsXG4gICAgfTtcblxuICAgIC8qIDFzdCBjcml0ZXJpb246IDYgc3BhY2Utc2VwZXJhdGVkIGZpZWxkcz8gKi9cbiAgICB2YXIgdG9rZW5zID0gZmVuLnNwbGl0KC9cXHMrLyk7XG4gICAgaWYgKHRva2Vucy5sZW5ndGggIT09IDYpIHtcbiAgICAgIHJldHVybiB7dmFsaWQ6IGZhbHNlLCBlcnJvcl9udW1iZXI6IDEsIGVycm9yOiBlcnJvcnNbMV19O1xuICAgIH1cblxuICAgIC8qIDJuZCBjcml0ZXJpb246IG1vdmUgbnVtYmVyIGZpZWxkIGlzIGEgaW50ZWdlciB2YWx1ZSA+IDA/ICovXG4gICAgaWYgKGlzTmFOKHRva2Vuc1s1XSkgfHwgKHBhcnNlSW50KHRva2Vuc1s1XSwgMTApIDw9IDApKSB7XG4gICAgICByZXR1cm4ge3ZhbGlkOiBmYWxzZSwgZXJyb3JfbnVtYmVyOiAyLCBlcnJvcjogZXJyb3JzWzJdfTtcbiAgICB9XG5cbiAgICAvKiAzcmQgY3JpdGVyaW9uOiBoYWxmIG1vdmUgY291bnRlciBpcyBhbiBpbnRlZ2VyID49IDA/ICovXG4gICAgaWYgKGlzTmFOKHRva2Vuc1s0XSkgfHwgKHBhcnNlSW50KHRva2Vuc1s0XSwgMTApIDwgMCkpIHtcbiAgICAgIHJldHVybiB7dmFsaWQ6IGZhbHNlLCBlcnJvcl9udW1iZXI6IDMsIGVycm9yOiBlcnJvcnNbM119O1xuICAgIH1cblxuICAgIC8qIDR0aCBjcml0ZXJpb246IDR0aCBmaWVsZCBpcyBhIHZhbGlkIGUucC4tc3RyaW5nPyAqL1xuICAgIGlmICghL14oLXxbYWJjZGVmZ2hdWzM2XSkkLy50ZXN0KHRva2Vuc1szXSkpIHtcbiAgICAgIHJldHVybiB7dmFsaWQ6IGZhbHNlLCBlcnJvcl9udW1iZXI6IDQsIGVycm9yOiBlcnJvcnNbNF19O1xuICAgIH1cblxuICAgIC8qIDV0aCBjcml0ZXJpb246IDN0aCBmaWVsZCBpcyBhIHZhbGlkIGNhc3RsZS1zdHJpbmc/ICovXG4gICAgaWYoICEvXihLUT9rP3E/fFFrP3E/fGtxP3xxfC0pJC8udGVzdCh0b2tlbnNbMl0pKSB7XG4gICAgICByZXR1cm4ge3ZhbGlkOiBmYWxzZSwgZXJyb3JfbnVtYmVyOiA1LCBlcnJvcjogZXJyb3JzWzVdfTtcbiAgICB9XG5cbiAgICAvKiA2dGggY3JpdGVyaW9uOiAybmQgZmllbGQgaXMgXCJ3XCIgKHdoaXRlKSBvciBcImJcIiAoYmxhY2spPyAqL1xuICAgIGlmICghL14od3xiKSQvLnRlc3QodG9rZW5zWzFdKSkge1xuICAgICAgcmV0dXJuIHt2YWxpZDogZmFsc2UsIGVycm9yX251bWJlcjogNiwgZXJyb3I6IGVycm9yc1s2XX07XG4gICAgfVxuXG4gICAgLyogN3RoIGNyaXRlcmlvbjogMXN0IGZpZWxkIGNvbnRhaW5zIDggcm93cz8gKi9cbiAgICB2YXIgcm93cyA9IHRva2Vuc1swXS5zcGxpdCgnLycpO1xuICAgIGlmIChyb3dzLmxlbmd0aCAhPT0gOCkge1xuICAgICAgcmV0dXJuIHt2YWxpZDogZmFsc2UsIGVycm9yX251bWJlcjogNywgZXJyb3I6IGVycm9yc1s3XX07XG4gICAgfVxuXG4gICAgLyogOHRoIGNyaXRlcmlvbjogZXZlcnkgcm93IGlzIHZhbGlkPyAqL1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgLyogY2hlY2sgZm9yIHJpZ2h0IHN1bSBvZiBmaWVsZHMgQU5EIG5vdCB0d28gbnVtYmVycyBpbiBzdWNjZXNzaW9uICovXG4gICAgICB2YXIgc3VtX2ZpZWxkcyA9IDA7XG4gICAgICB2YXIgcHJldmlvdXNfd2FzX251bWJlciA9IGZhbHNlO1xuXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHJvd3NbaV0ubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgaWYgKCFpc05hTihyb3dzW2ldW2tdKSkge1xuICAgICAgICAgIGlmIChwcmV2aW91c193YXNfbnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4ge3ZhbGlkOiBmYWxzZSwgZXJyb3JfbnVtYmVyOiA4LCBlcnJvcjogZXJyb3JzWzhdfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3VtX2ZpZWxkcyArPSBwYXJzZUludChyb3dzW2ldW2tdLCAxMCk7XG4gICAgICAgICAgcHJldmlvdXNfd2FzX251bWJlciA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCEvXltwcm5icWtQUk5CUUtdJC8udGVzdChyb3dzW2ldW2tdKSkge1xuICAgICAgICAgICAgcmV0dXJuIHt2YWxpZDogZmFsc2UsIGVycm9yX251bWJlcjogOSwgZXJyb3I6IGVycm9yc1s5XX07XG4gICAgICAgICAgfVxuICAgICAgICAgIHN1bV9maWVsZHMgKz0gMTtcbiAgICAgICAgICBwcmV2aW91c193YXNfbnVtYmVyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdW1fZmllbGRzICE9PSA4KSB7XG4gICAgICAgIHJldHVybiB7dmFsaWQ6IGZhbHNlLCBlcnJvcl9udW1iZXI6IDEwLCBlcnJvcjogZXJyb3JzWzEwXX07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCh0b2tlbnNbM11bMV0gPT0gJzMnICYmIHRva2Vuc1sxXSA9PSAndycpIHx8XG4gICAgICAgICh0b2tlbnNbM11bMV0gPT0gJzYnICYmIHRva2Vuc1sxXSA9PSAnYicpKSB7XG4gICAgICAgICAgcmV0dXJuIHt2YWxpZDogZmFsc2UsIGVycm9yX251bWJlcjogMTEsIGVycm9yOiBlcnJvcnNbMTFdfTtcbiAgICB9XG5cbiAgICAvKiBldmVyeXRoaW5nJ3Mgb2theSEgKi9cbiAgICByZXR1cm4ge3ZhbGlkOiB0cnVlLCBlcnJvcl9udW1iZXI6IDAsIGVycm9yOiBlcnJvcnNbMF19O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVfZmVuKCkge1xuICAgIHZhciBlbXB0eSA9IDA7XG4gICAgdmFyIGZlbiA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IFNRVUFSRVMuYTg7IGkgPD0gU1FVQVJFUy5oMTsgaSsrKSB7XG4gICAgICBpZiAoYm9hcmRbaV0gPT0gbnVsbCkge1xuICAgICAgICBlbXB0eSsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGVtcHR5ID4gMCkge1xuICAgICAgICAgIGZlbiArPSBlbXB0eTtcbiAgICAgICAgICBlbXB0eSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbG9yID0gYm9hcmRbaV0uY29sb3I7XG4gICAgICAgIHZhciBwaWVjZSA9IGJvYXJkW2ldLnR5cGU7XG5cbiAgICAgICAgZmVuICs9IChjb2xvciA9PT0gV0hJVEUpID9cbiAgICAgICAgICAgICAgICAgcGllY2UudG9VcHBlckNhc2UoKSA6IHBpZWNlLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoaSArIDEpICYgMHg4OCkge1xuICAgICAgICBpZiAoZW1wdHkgPiAwKSB7XG4gICAgICAgICAgZmVuICs9IGVtcHR5O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgIT09IFNRVUFSRVMuaDEpIHtcbiAgICAgICAgICBmZW4gKz0gJy8nO1xuICAgICAgICB9XG5cbiAgICAgICAgZW1wdHkgPSAwO1xuICAgICAgICBpICs9IDg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNmbGFncyA9ICcnO1xuICAgIGlmIChjYXN0bGluZ1tXSElURV0gJiBCSVRTLktTSURFX0NBU1RMRSkgeyBjZmxhZ3MgKz0gJ0snOyB9XG4gICAgaWYgKGNhc3RsaW5nW1dISVRFXSAmIEJJVFMuUVNJREVfQ0FTVExFKSB7IGNmbGFncyArPSAnUSc7IH1cbiAgICBpZiAoY2FzdGxpbmdbQkxBQ0tdICYgQklUUy5LU0lERV9DQVNUTEUpIHsgY2ZsYWdzICs9ICdrJzsgfVxuICAgIGlmIChjYXN0bGluZ1tCTEFDS10gJiBCSVRTLlFTSURFX0NBU1RMRSkgeyBjZmxhZ3MgKz0gJ3EnOyB9XG5cbiAgICAvKiBkbyB3ZSBoYXZlIGFuIGVtcHR5IGNhc3RsaW5nIGZsYWc/ICovXG4gICAgY2ZsYWdzID0gY2ZsYWdzIHx8ICctJztcbiAgICB2YXIgZXBmbGFncyA9IChlcF9zcXVhcmUgPT09IEVNUFRZKSA/ICctJyA6IGFsZ2VicmFpYyhlcF9zcXVhcmUpO1xuXG4gICAgcmV0dXJuIFtmZW4sIHR1cm4sIGNmbGFncywgZXBmbGFncywgaGFsZl9tb3ZlcywgbW92ZV9udW1iZXJdLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldF9oZWFkZXIoYXJncykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgaWYgKHR5cGVvZiBhcmdzW2ldID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBhcmdzW2kgKyAxXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaGVhZGVyW2FyZ3NbaV1dID0gYXJnc1tpICsgMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBoZWFkZXI7XG4gIH1cblxuICAvKiBjYWxsZWQgd2hlbiB0aGUgaW5pdGlhbCBib2FyZCBzZXR1cCBpcyBjaGFuZ2VkIHdpdGggcHV0KCkgb3IgcmVtb3ZlKCkuXG4gICAqIG1vZGlmaWVzIHRoZSBTZXRVcCBhbmQgRkVOIHByb3BlcnRpZXMgb2YgdGhlIGhlYWRlciBvYmplY3QuICBpZiB0aGUgRkVOIGlzXG4gICAqIGVxdWFsIHRvIHRoZSBkZWZhdWx0IHBvc2l0aW9uLCB0aGUgU2V0VXAgYW5kIEZFTiBhcmUgZGVsZXRlZFxuICAgKiB0aGUgc2V0dXAgaXMgb25seSB1cGRhdGVkIGlmIGhpc3RvcnkubGVuZ3RoIGlzIHplcm8sIGllIG1vdmVzIGhhdmVuJ3QgYmVlblxuICAgKiBtYWRlLlxuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlX3NldHVwKGZlbikge1xuICAgIGlmIChoaXN0b3J5Lmxlbmd0aCA+IDApIHJldHVybjtcblxuICAgIGlmIChmZW4gIT09IERFRkFVTFRfUE9TSVRJT04pIHtcbiAgICAgIGhlYWRlclsnU2V0VXAnXSA9ICcxJztcbiAgICAgIGhlYWRlclsnRkVOJ10gPSBmZW47XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBoZWFkZXJbJ1NldFVwJ107XG4gICAgICBkZWxldGUgaGVhZGVyWydGRU4nXTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXQoc3F1YXJlKSB7XG4gICAgdmFyIHBpZWNlID0gYm9hcmRbU1FVQVJFU1tzcXVhcmVdXTtcbiAgICByZXR1cm4gKHBpZWNlKSA/IHt0eXBlOiBwaWVjZS50eXBlLCBjb2xvcjogcGllY2UuY29sb3J9IDogbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1dChwaWVjZSwgc3F1YXJlKSB7XG4gICAgLyogY2hlY2sgZm9yIHZhbGlkIHBpZWNlIG9iamVjdCAqL1xuICAgIGlmICghKCd0eXBlJyBpbiBwaWVjZSAmJiAnY29sb3InIGluIHBpZWNlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qIGNoZWNrIGZvciBwaWVjZSAqL1xuICAgIGlmIChTWU1CT0xTLmluZGV4T2YocGllY2UudHlwZS50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKiBjaGVjayBmb3IgdmFsaWQgc3F1YXJlICovXG4gICAgaWYgKCEoc3F1YXJlIGluIFNRVUFSRVMpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHNxID0gU1FVQVJFU1tzcXVhcmVdO1xuXG4gICAgLyogZG9uJ3QgbGV0IHRoZSB1c2VyIHBsYWNlIG1vcmUgdGhhbiBvbmUga2luZyAqL1xuICAgIGlmIChwaWVjZS50eXBlID09IEtJTkcgJiZcbiAgICAgICAgIShraW5nc1twaWVjZS5jb2xvcl0gPT0gRU1QVFkgfHwga2luZ3NbcGllY2UuY29sb3JdID09IHNxKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGJvYXJkW3NxXSA9IHt0eXBlOiBwaWVjZS50eXBlLCBjb2xvcjogcGllY2UuY29sb3J9O1xuICAgIGlmIChwaWVjZS50eXBlID09PSBLSU5HKSB7XG4gICAgICBraW5nc1twaWVjZS5jb2xvcl0gPSBzcTtcbiAgICB9XG5cbiAgICB1cGRhdGVfc2V0dXAoZ2VuZXJhdGVfZmVuKCkpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmUoc3F1YXJlKSB7XG4gICAgdmFyIHBpZWNlID0gZ2V0KHNxdWFyZSk7XG4gICAgYm9hcmRbU1FVQVJFU1tzcXVhcmVdXSA9IG51bGw7XG4gICAgaWYgKHBpZWNlICYmIHBpZWNlLnR5cGUgPT09IEtJTkcpIHtcbiAgICAgIGtpbmdzW3BpZWNlLmNvbG9yXSA9IEVNUFRZO1xuICAgIH1cblxuICAgIHVwZGF0ZV9zZXR1cChnZW5lcmF0ZV9mZW4oKSk7XG5cbiAgICByZXR1cm4gcGllY2U7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZF9tb3ZlKGJvYXJkLCBmcm9tLCB0bywgZmxhZ3MsIHByb21vdGlvbikge1xuICAgIHZhciBtb3ZlID0ge1xuICAgICAgY29sb3I6IHR1cm4sXG4gICAgICBmcm9tOiBmcm9tLFxuICAgICAgdG86IHRvLFxuICAgICAgZmxhZ3M6IGZsYWdzLFxuICAgICAgcGllY2U6IGJvYXJkW2Zyb21dLnR5cGVcbiAgICB9O1xuXG4gICAgaWYgKHByb21vdGlvbikge1xuICAgICAgbW92ZS5mbGFncyB8PSBCSVRTLlBST01PVElPTjtcbiAgICAgIG1vdmUucHJvbW90aW9uID0gcHJvbW90aW9uO1xuICAgIH1cblxuICAgIGlmIChib2FyZFt0b10pIHtcbiAgICAgIG1vdmUuY2FwdHVyZWQgPSBib2FyZFt0b10udHlwZTtcbiAgICB9IGVsc2UgaWYgKGZsYWdzICYgQklUUy5FUF9DQVBUVVJFKSB7XG4gICAgICAgIG1vdmUuY2FwdHVyZWQgPSBQQVdOO1xuICAgIH1cbiAgICByZXR1cm4gbW92ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlX21vdmVzKG9wdGlvbnMpIHtcbiAgICBmdW5jdGlvbiBhZGRfbW92ZShib2FyZCwgbW92ZXMsIGZyb20sIHRvLCBmbGFncykge1xuICAgICAgLyogaWYgcGF3biBwcm9tb3Rpb24gKi9cbiAgICAgIGlmIChib2FyZFtmcm9tXS50eXBlID09PSBQQVdOICYmXG4gICAgICAgICAocmFuayh0bykgPT09IFJBTktfOCB8fCByYW5rKHRvKSA9PT0gUkFOS18xKSkge1xuICAgICAgICAgIHZhciBwaWVjZXMgPSBbUVVFRU4sIFJPT0ssIEJJU0hPUCwgS05JR0hUXTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGllY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBtb3Zlcy5wdXNoKGJ1aWxkX21vdmUoYm9hcmQsIGZyb20sIHRvLCBmbGFncywgcGllY2VzW2ldKSk7XG4gICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICBtb3Zlcy5wdXNoKGJ1aWxkX21vdmUoYm9hcmQsIGZyb20sIHRvLCBmbGFncykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtb3ZlcyA9IFtdO1xuICAgIHZhciB1cyA9IHR1cm47XG4gICAgdmFyIHRoZW0gPSBzd2FwX2NvbG9yKHVzKTtcbiAgICB2YXIgc2Vjb25kX3JhbmsgPSB7YjogUkFOS183LCB3OiBSQU5LXzJ9O1xuXG4gICAgdmFyIGZpcnN0X3NxID0gU1FVQVJFUy5hODtcbiAgICB2YXIgbGFzdF9zcSA9IFNRVUFSRVMuaDE7XG4gICAgdmFyIHNpbmdsZV9zcXVhcmUgPSBmYWxzZTtcblxuICAgIC8qIGRvIHdlIHdhbnQgbGVnYWwgbW92ZXM/ICovXG4gICAgdmFyIGxlZ2FsID0gKHR5cGVvZiBvcHRpb25zICE9PSAndW5kZWZpbmVkJyAmJiAnbGVnYWwnIGluIG9wdGlvbnMpID9cbiAgICAgICAgICAgICAgICBvcHRpb25zLmxlZ2FsIDogdHJ1ZTtcblxuICAgIC8qIGFyZSB3ZSBnZW5lcmF0aW5nIG1vdmVzIGZvciBhIHNpbmdsZSBzcXVhcmU/ICovXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAndW5kZWZpbmVkJyAmJiAnc3F1YXJlJyBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy5zcXVhcmUgaW4gU1FVQVJFUykge1xuICAgICAgICBmaXJzdF9zcSA9IGxhc3Rfc3EgPSBTUVVBUkVTW29wdGlvbnMuc3F1YXJlXTtcbiAgICAgICAgc2luZ2xlX3NxdWFyZSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBpbnZhbGlkIHNxdWFyZSAqL1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IGZpcnN0X3NxOyBpIDw9IGxhc3Rfc3E7IGkrKykge1xuICAgICAgLyogZGlkIHdlIHJ1biBvZmYgdGhlIGVuZCBvZiB0aGUgYm9hcmQgKi9cbiAgICAgIGlmIChpICYgMHg4OCkgeyBpICs9IDc7IGNvbnRpbnVlOyB9XG5cbiAgICAgIHZhciBwaWVjZSA9IGJvYXJkW2ldO1xuICAgICAgaWYgKHBpZWNlID09IG51bGwgfHwgcGllY2UuY29sb3IgIT09IHVzKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocGllY2UudHlwZSA9PT0gUEFXTikge1xuICAgICAgICAvKiBzaW5nbGUgc3F1YXJlLCBub24tY2FwdHVyaW5nICovXG4gICAgICAgIHZhciBzcXVhcmUgPSBpICsgUEFXTl9PRkZTRVRTW3VzXVswXTtcbiAgICAgICAgaWYgKGJvYXJkW3NxdWFyZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgYWRkX21vdmUoYm9hcmQsIG1vdmVzLCBpLCBzcXVhcmUsIEJJVFMuTk9STUFMKTtcblxuICAgICAgICAgIC8qIGRvdWJsZSBzcXVhcmUgKi9cbiAgICAgICAgICB2YXIgc3F1YXJlID0gaSArIFBBV05fT0ZGU0VUU1t1c11bMV07XG4gICAgICAgICAgaWYgKHNlY29uZF9yYW5rW3VzXSA9PT0gcmFuayhpKSAmJiBib2FyZFtzcXVhcmVdID09IG51bGwpIHtcbiAgICAgICAgICAgIGFkZF9tb3ZlKGJvYXJkLCBtb3ZlcywgaSwgc3F1YXJlLCBCSVRTLkJJR19QQVdOKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBwYXduIGNhcHR1cmVzICovXG4gICAgICAgIGZvciAoaiA9IDI7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICB2YXIgc3F1YXJlID0gaSArIFBBV05fT0ZGU0VUU1t1c11bal07XG4gICAgICAgICAgaWYgKHNxdWFyZSAmIDB4ODgpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgaWYgKGJvYXJkW3NxdWFyZV0gIT0gbnVsbCAmJlxuICAgICAgICAgICAgICBib2FyZFtzcXVhcmVdLmNvbG9yID09PSB0aGVtKSB7XG4gICAgICAgICAgICAgIGFkZF9tb3ZlKGJvYXJkLCBtb3ZlcywgaSwgc3F1YXJlLCBCSVRTLkNBUFRVUkUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlID09PSBlcF9zcXVhcmUpIHtcbiAgICAgICAgICAgICAgYWRkX21vdmUoYm9hcmQsIG1vdmVzLCBpLCBlcF9zcXVhcmUsIEJJVFMuRVBfQ0FQVFVSRSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBqID0gMCwgbGVuID0gUElFQ0VfT0ZGU0VUU1twaWVjZS50eXBlXS5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICAgIHZhciBvZmZzZXQgPSBQSUVDRV9PRkZTRVRTW3BpZWNlLnR5cGVdW2pdO1xuICAgICAgICAgIHZhciBzcXVhcmUgPSBpO1xuXG4gICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHNxdWFyZSArPSBvZmZzZXQ7XG4gICAgICAgICAgICBpZiAoc3F1YXJlICYgMHg4OCkgYnJlYWs7XG5cbiAgICAgICAgICAgIGlmIChib2FyZFtzcXVhcmVdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgYWRkX21vdmUoYm9hcmQsIG1vdmVzLCBpLCBzcXVhcmUsIEJJVFMuTk9STUFMKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChib2FyZFtzcXVhcmVdLmNvbG9yID09PSB1cykgYnJlYWs7XG4gICAgICAgICAgICAgIGFkZF9tb3ZlKGJvYXJkLCBtb3ZlcywgaSwgc3F1YXJlLCBCSVRTLkNBUFRVUkUpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyogYnJlYWssIGlmIGtuaWdodCBvciBraW5nICovXG4gICAgICAgICAgICBpZiAocGllY2UudHlwZSA9PT0gJ24nIHx8IHBpZWNlLnR5cGUgPT09ICdrJykgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogY2hlY2sgZm9yIGNhc3RsaW5nIGlmOiBhKSB3ZSdyZSBnZW5lcmF0aW5nIGFsbCBtb3Zlcywgb3IgYikgd2UncmUgZG9pbmdcbiAgICAgKiBzaW5nbGUgc3F1YXJlIG1vdmUgZ2VuZXJhdGlvbiBvbiB0aGUga2luZydzIHNxdWFyZVxuICAgICAqL1xuICAgIGlmICgoIXNpbmdsZV9zcXVhcmUpIHx8IGxhc3Rfc3EgPT09IGtpbmdzW3VzXSkge1xuICAgICAgLyoga2luZy1zaWRlIGNhc3RsaW5nICovXG4gICAgICBpZiAoY2FzdGxpbmdbdXNdICYgQklUUy5LU0lERV9DQVNUTEUpIHtcbiAgICAgICAgdmFyIGNhc3RsaW5nX2Zyb20gPSBraW5nc1t1c107XG4gICAgICAgIHZhciBjYXN0bGluZ190byA9IGNhc3RsaW5nX2Zyb20gKyAyO1xuXG4gICAgICAgIGlmIChib2FyZFtjYXN0bGluZ19mcm9tICsgMV0gPT0gbnVsbCAmJlxuICAgICAgICAgICAgYm9hcmRbY2FzdGxpbmdfdG9dICAgICAgID09IG51bGwgJiZcbiAgICAgICAgICAgICFhdHRhY2tlZCh0aGVtLCBraW5nc1t1c10pICYmXG4gICAgICAgICAgICAhYXR0YWNrZWQodGhlbSwgY2FzdGxpbmdfZnJvbSArIDEpICYmXG4gICAgICAgICAgICAhYXR0YWNrZWQodGhlbSwgY2FzdGxpbmdfdG8pKSB7XG4gICAgICAgICAgYWRkX21vdmUoYm9hcmQsIG1vdmVzLCBraW5nc1t1c10gLCBjYXN0bGluZ190byxcbiAgICAgICAgICAgICAgICAgICBCSVRTLktTSURFX0NBU1RMRSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogcXVlZW4tc2lkZSBjYXN0bGluZyAqL1xuICAgICAgaWYgKGNhc3RsaW5nW3VzXSAmIEJJVFMuUVNJREVfQ0FTVExFKSB7XG4gICAgICAgIHZhciBjYXN0bGluZ19mcm9tID0ga2luZ3NbdXNdO1xuICAgICAgICB2YXIgY2FzdGxpbmdfdG8gPSBjYXN0bGluZ19mcm9tIC0gMjtcblxuICAgICAgICBpZiAoYm9hcmRbY2FzdGxpbmdfZnJvbSAtIDFdID09IG51bGwgJiZcbiAgICAgICAgICAgIGJvYXJkW2Nhc3RsaW5nX2Zyb20gLSAyXSA9PSBudWxsICYmXG4gICAgICAgICAgICBib2FyZFtjYXN0bGluZ19mcm9tIC0gM10gPT0gbnVsbCAmJlxuICAgICAgICAgICAgIWF0dGFja2VkKHRoZW0sIGtpbmdzW3VzXSkgJiZcbiAgICAgICAgICAgICFhdHRhY2tlZCh0aGVtLCBjYXN0bGluZ19mcm9tIC0gMSkgJiZcbiAgICAgICAgICAgICFhdHRhY2tlZCh0aGVtLCBjYXN0bGluZ190bykpIHtcbiAgICAgICAgICBhZGRfbW92ZShib2FyZCwgbW92ZXMsIGtpbmdzW3VzXSwgY2FzdGxpbmdfdG8sXG4gICAgICAgICAgICAgICAgICAgQklUUy5RU0lERV9DQVNUTEUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogcmV0dXJuIGFsbCBwc2V1ZG8tbGVnYWwgbW92ZXMgKHRoaXMgaW5jbHVkZXMgbW92ZXMgdGhhdCBhbGxvdyB0aGUga2luZ1xuICAgICAqIHRvIGJlIGNhcHR1cmVkKVxuICAgICAqL1xuICAgIGlmICghbGVnYWwpIHtcbiAgICAgIHJldHVybiBtb3ZlcztcbiAgICB9XG5cbiAgICAvKiBmaWx0ZXIgb3V0IGlsbGVnYWwgbW92ZXMgKi9cbiAgICB2YXIgbGVnYWxfbW92ZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbW92ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIG1ha2VfbW92ZShtb3Zlc1tpXSk7XG4gICAgICBpZiAoIWtpbmdfYXR0YWNrZWQodXMpKSB7XG4gICAgICAgIGxlZ2FsX21vdmVzLnB1c2gobW92ZXNbaV0pO1xuICAgICAgfVxuICAgICAgdW5kb19tb3ZlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZ2FsX21vdmVzO1xuICB9XG5cbiAgLyogY29udmVydCBhIG1vdmUgZnJvbSAweDg4IGNvb3JkaW5hdGVzIHRvIFN0YW5kYXJkIEFsZ2VicmFpYyBOb3RhdGlvblxuICAgKiAoU0FOKVxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNsb3BweSBVc2UgdGhlIHNsb3BweSBTQU4gZ2VuZXJhdG9yIHRvIHdvcmsgYXJvdW5kIG92ZXJcbiAgICogZGlzYW1iaWd1YXRpb24gYnVncyBpbiBGcml0eiBhbmQgQ2hlc3NiYXNlLiAgU2VlIGJlbG93OlxuICAgKlxuICAgKiByMWJxa2Juci9wcHAycHBwLzJuNS8xQjFwUDMvNFAzLzgvUFBQUDJQUC9STkJRSzFOUiBiIEtRa3EgLSAyIDRcbiAgICogNC4gLi4uIE5nZTcgaXMgb3Zlcmx5IGRpc2FtYmlndWF0ZWQgYmVjYXVzZSB0aGUga25pZ2h0IG9uIGM2IGlzIHBpbm5lZFxuICAgKiA0LiAuLi4gTmU3IGlzIHRlY2huaWNhbGx5IHRoZSB2YWxpZCBTQU5cbiAgICovXG4gIGZ1bmN0aW9uIG1vdmVfdG9fc2FuKG1vdmUsIHNsb3BweSkge1xuXG4gICAgdmFyIG91dHB1dCA9ICcnO1xuXG4gICAgaWYgKG1vdmUuZmxhZ3MgJiBCSVRTLktTSURFX0NBU1RMRSkge1xuICAgICAgb3V0cHV0ID0gJ08tTyc7XG4gICAgfSBlbHNlIGlmIChtb3ZlLmZsYWdzICYgQklUUy5RU0lERV9DQVNUTEUpIHtcbiAgICAgIG91dHB1dCA9ICdPLU8tTyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBkaXNhbWJpZ3VhdG9yID0gZ2V0X2Rpc2FtYmlndWF0b3IobW92ZSwgc2xvcHB5KTtcblxuICAgICAgaWYgKG1vdmUucGllY2UgIT09IFBBV04pIHtcbiAgICAgICAgb3V0cHV0ICs9IG1vdmUucGllY2UudG9VcHBlckNhc2UoKSArIGRpc2FtYmlndWF0b3I7XG4gICAgICB9XG5cbiAgICAgIGlmIChtb3ZlLmZsYWdzICYgKEJJVFMuQ0FQVFVSRSB8IEJJVFMuRVBfQ0FQVFVSRSkpIHtcbiAgICAgICAgaWYgKG1vdmUucGllY2UgPT09IFBBV04pIHtcbiAgICAgICAgICBvdXRwdXQgKz0gYWxnZWJyYWljKG1vdmUuZnJvbSlbMF07XG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0ICs9ICd4JztcbiAgICAgIH1cblxuICAgICAgb3V0cHV0ICs9IGFsZ2VicmFpYyhtb3ZlLnRvKTtcblxuICAgICAgaWYgKG1vdmUuZmxhZ3MgJiBCSVRTLlBST01PVElPTikge1xuICAgICAgICBvdXRwdXQgKz0gJz0nICsgbW92ZS5wcm9tb3Rpb24udG9VcHBlckNhc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYWtlX21vdmUobW92ZSk7XG4gICAgaWYgKGluX2NoZWNrKCkpIHtcbiAgICAgIGlmIChpbl9jaGVja21hdGUoKSkge1xuICAgICAgICBvdXRwdXQgKz0gJyMnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0ICs9ICcrJztcbiAgICAgIH1cbiAgICB9XG4gICAgdW5kb19tb3ZlKCk7XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgLy8gcGFyc2VzIGFsbCBvZiB0aGUgZGVjb3JhdG9ycyBvdXQgb2YgYSBTQU4gc3RyaW5nXG4gIGZ1bmN0aW9uIHN0cmlwcGVkX3Nhbihtb3ZlKSB7XG4gICAgcmV0dXJuIG1vdmUucmVwbGFjZSgvPS8sJycpLnJlcGxhY2UoL1srI10/Wz8hXSokLywnJyk7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRhY2tlZChjb2xvciwgc3F1YXJlKSB7XG4gICAgZm9yICh2YXIgaSA9IFNRVUFSRVMuYTg7IGkgPD0gU1FVQVJFUy5oMTsgaSsrKSB7XG4gICAgICAvKiBkaWQgd2UgcnVuIG9mZiB0aGUgZW5kIG9mIHRoZSBib2FyZCAqL1xuICAgICAgaWYgKGkgJiAweDg4KSB7IGkgKz0gNzsgY29udGludWU7IH1cblxuICAgICAgLyogaWYgZW1wdHkgc3F1YXJlIG9yIHdyb25nIGNvbG9yICovXG4gICAgICBpZiAoYm9hcmRbaV0gPT0gbnVsbCB8fCBib2FyZFtpXS5jb2xvciAhPT0gY29sb3IpIGNvbnRpbnVlO1xuXG4gICAgICB2YXIgcGllY2UgPSBib2FyZFtpXTtcbiAgICAgIHZhciBkaWZmZXJlbmNlID0gaSAtIHNxdWFyZTtcbiAgICAgIHZhciBpbmRleCA9IGRpZmZlcmVuY2UgKyAxMTk7XG5cbiAgICAgIGlmIChBVFRBQ0tTW2luZGV4XSAmICgxIDw8IFNISUZUU1twaWVjZS50eXBlXSkpIHtcbiAgICAgICAgaWYgKHBpZWNlLnR5cGUgPT09IFBBV04pIHtcbiAgICAgICAgICBpZiAoZGlmZmVyZW5jZSA+IDApIHtcbiAgICAgICAgICAgIGlmIChwaWVjZS5jb2xvciA9PT0gV0hJVEUpIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocGllY2UuY29sb3IgPT09IEJMQUNLKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBpZiB0aGUgcGllY2UgaXMgYSBrbmlnaHQgb3IgYSBraW5nICovXG4gICAgICAgIGlmIChwaWVjZS50eXBlID09PSAnbicgfHwgcGllY2UudHlwZSA9PT0gJ2snKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICB2YXIgb2Zmc2V0ID0gUkFZU1tpbmRleF07XG4gICAgICAgIHZhciBqID0gaSArIG9mZnNldDtcblxuICAgICAgICB2YXIgYmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoaiAhPT0gc3F1YXJlKSB7XG4gICAgICAgICAgaWYgKGJvYXJkW2pdICE9IG51bGwpIHsgYmxvY2tlZCA9IHRydWU7IGJyZWFrOyB9XG4gICAgICAgICAgaiArPSBvZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWJsb2NrZWQpIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGtpbmdfYXR0YWNrZWQoY29sb3IpIHtcbiAgICByZXR1cm4gYXR0YWNrZWQoc3dhcF9jb2xvcihjb2xvciksIGtpbmdzW2NvbG9yXSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbl9jaGVjaygpIHtcbiAgICByZXR1cm4ga2luZ19hdHRhY2tlZCh0dXJuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluX2NoZWNrbWF0ZSgpIHtcbiAgICByZXR1cm4gaW5fY2hlY2soKSAmJiBnZW5lcmF0ZV9tb3ZlcygpLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluX3N0YWxlbWF0ZSgpIHtcbiAgICByZXR1cm4gIWluX2NoZWNrKCkgJiYgZ2VuZXJhdGVfbW92ZXMoKS5sZW5ndGggPT09IDA7XG4gIH1cblxuICBmdW5jdGlvbiBpbnN1ZmZpY2llbnRfbWF0ZXJpYWwoKSB7XG4gICAgdmFyIHBpZWNlcyA9IHt9O1xuICAgIHZhciBiaXNob3BzID0gW107XG4gICAgdmFyIG51bV9waWVjZXMgPSAwO1xuICAgIHZhciBzcV9jb2xvciA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gU1FVQVJFUy5hODsgaTw9IFNRVUFSRVMuaDE7IGkrKykge1xuICAgICAgc3FfY29sb3IgPSAoc3FfY29sb3IgKyAxKSAlIDI7XG4gICAgICBpZiAoaSAmIDB4ODgpIHsgaSArPSA3OyBjb250aW51ZTsgfVxuXG4gICAgICB2YXIgcGllY2UgPSBib2FyZFtpXTtcbiAgICAgIGlmIChwaWVjZSkge1xuICAgICAgICBwaWVjZXNbcGllY2UudHlwZV0gPSAocGllY2UudHlwZSBpbiBwaWVjZXMpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlc1twaWVjZS50eXBlXSArIDEgOiAxO1xuICAgICAgICBpZiAocGllY2UudHlwZSA9PT0gQklTSE9QKSB7XG4gICAgICAgICAgYmlzaG9wcy5wdXNoKHNxX2NvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBudW1fcGllY2VzKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogayB2cy4gayAqL1xuICAgIGlmIChudW1fcGllY2VzID09PSAyKSB7IHJldHVybiB0cnVlOyB9XG5cbiAgICAvKiBrIHZzLiBrbiAuLi4uIG9yIC4uLi4gayB2cy4ga2IgKi9cbiAgICBlbHNlIGlmIChudW1fcGllY2VzID09PSAzICYmIChwaWVjZXNbQklTSE9QXSA9PT0gMSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGllY2VzW0tOSUdIVF0gPT09IDEpKSB7IHJldHVybiB0cnVlOyB9XG5cbiAgICAvKiBrYiB2cy4ga2Igd2hlcmUgYW55IG51bWJlciBvZiBiaXNob3BzIGFyZSBhbGwgb24gdGhlIHNhbWUgY29sb3IgKi9cbiAgICBlbHNlIGlmIChudW1fcGllY2VzID09PSBwaWVjZXNbQklTSE9QXSArIDIpIHtcbiAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgdmFyIGxlbiA9IGJpc2hvcHMubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBzdW0gKz0gYmlzaG9wc1tpXTtcbiAgICAgIH1cbiAgICAgIGlmIChzdW0gPT09IDAgfHwgc3VtID09PSBsZW4pIHsgcmV0dXJuIHRydWU7IH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBpbl90aHJlZWZvbGRfcmVwZXRpdGlvbigpIHtcbiAgICAvKiBUT0RPOiB3aGlsZSB0aGlzIGZ1bmN0aW9uIGlzIGZpbmUgZm9yIGNhc3VhbCB1c2UsIGEgYmV0dGVyXG4gICAgICogaW1wbGVtZW50YXRpb24gd291bGQgdXNlIGEgWm9icmlzdCBrZXkgKGluc3RlYWQgb2YgRkVOKS4gdGhlXG4gICAgICogWm9icmlzdCBrZXkgd291bGQgYmUgbWFpbnRhaW5lZCBpbiB0aGUgbWFrZV9tb3ZlL3VuZG9fbW92ZSBmdW5jdGlvbnMsXG4gICAgICogYXZvaWRpbmcgdGhlIGNvc3RseSB0aGF0IHdlIGRvIGJlbG93LlxuICAgICAqL1xuICAgIHZhciBtb3ZlcyA9IFtdO1xuICAgIHZhciBwb3NpdGlvbnMgPSB7fTtcbiAgICB2YXIgcmVwZXRpdGlvbiA9IGZhbHNlO1xuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciBtb3ZlID0gdW5kb19tb3ZlKCk7XG4gICAgICBpZiAoIW1vdmUpIGJyZWFrO1xuICAgICAgbW92ZXMucHVzaChtb3ZlKTtcbiAgICB9XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgLyogcmVtb3ZlIHRoZSBsYXN0IHR3byBmaWVsZHMgaW4gdGhlIEZFTiBzdHJpbmcsIHRoZXkncmUgbm90IG5lZWRlZFxuICAgICAgICogd2hlbiBjaGVja2luZyBmb3IgZHJhdyBieSByZXAgKi9cbiAgICAgIHZhciBmZW4gPSBnZW5lcmF0ZV9mZW4oKS5zcGxpdCgnICcpLnNsaWNlKDAsNCkuam9pbignICcpO1xuXG4gICAgICAvKiBoYXMgdGhlIHBvc2l0aW9uIG9jY3VycmVkIHRocmVlIG9yIG1vdmUgdGltZXMgKi9cbiAgICAgIHBvc2l0aW9uc1tmZW5dID0gKGZlbiBpbiBwb3NpdGlvbnMpID8gcG9zaXRpb25zW2Zlbl0gKyAxIDogMTtcbiAgICAgIGlmIChwb3NpdGlvbnNbZmVuXSA+PSAzKSB7XG4gICAgICAgIHJlcGV0aXRpb24gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW1vdmVzLmxlbmd0aCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIG1ha2VfbW92ZShtb3Zlcy5wb3AoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGV0aXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoKG1vdmUpIHtcbiAgICBoaXN0b3J5LnB1c2goe1xuICAgICAgbW92ZTogbW92ZSxcbiAgICAgIGtpbmdzOiB7Yjoga2luZ3MuYiwgdzoga2luZ3Mud30sXG4gICAgICB0dXJuOiB0dXJuLFxuICAgICAgY2FzdGxpbmc6IHtiOiBjYXN0bGluZy5iLCB3OiBjYXN0bGluZy53fSxcbiAgICAgIGVwX3NxdWFyZTogZXBfc3F1YXJlLFxuICAgICAgaGFsZl9tb3ZlczogaGFsZl9tb3ZlcyxcbiAgICAgIG1vdmVfbnVtYmVyOiBtb3ZlX251bWJlclxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZV9tb3ZlKG1vdmUpIHtcbiAgICB2YXIgdXMgPSB0dXJuO1xuICAgIHZhciB0aGVtID0gc3dhcF9jb2xvcih1cyk7XG4gICAgcHVzaChtb3ZlKTtcblxuICAgIGJvYXJkW21vdmUudG9dID0gYm9hcmRbbW92ZS5mcm9tXTtcbiAgICBib2FyZFttb3ZlLmZyb21dID0gbnVsbDtcblxuICAgIC8qIGlmIGVwIGNhcHR1cmUsIHJlbW92ZSB0aGUgY2FwdHVyZWQgcGF3biAqL1xuICAgIGlmIChtb3ZlLmZsYWdzICYgQklUUy5FUF9DQVBUVVJFKSB7XG4gICAgICBpZiAodHVybiA9PT0gQkxBQ0spIHtcbiAgICAgICAgYm9hcmRbbW92ZS50byAtIDE2XSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2FyZFttb3ZlLnRvICsgMTZdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBpZiBwYXduIHByb21vdGlvbiwgcmVwbGFjZSB3aXRoIG5ldyBwaWVjZSAqL1xuICAgIGlmIChtb3ZlLmZsYWdzICYgQklUUy5QUk9NT1RJT04pIHtcbiAgICAgIGJvYXJkW21vdmUudG9dID0ge3R5cGU6IG1vdmUucHJvbW90aW9uLCBjb2xvcjogdXN9O1xuICAgIH1cblxuICAgIC8qIGlmIHdlIG1vdmVkIHRoZSBraW5nICovXG4gICAgaWYgKGJvYXJkW21vdmUudG9dLnR5cGUgPT09IEtJTkcpIHtcbiAgICAgIGtpbmdzW2JvYXJkW21vdmUudG9dLmNvbG9yXSA9IG1vdmUudG87XG5cbiAgICAgIC8qIGlmIHdlIGNhc3RsZWQsIG1vdmUgdGhlIHJvb2sgbmV4dCB0byB0aGUga2luZyAqL1xuICAgICAgaWYgKG1vdmUuZmxhZ3MgJiBCSVRTLktTSURFX0NBU1RMRSkge1xuICAgICAgICB2YXIgY2FzdGxpbmdfdG8gPSBtb3ZlLnRvIC0gMTtcbiAgICAgICAgdmFyIGNhc3RsaW5nX2Zyb20gPSBtb3ZlLnRvICsgMTtcbiAgICAgICAgYm9hcmRbY2FzdGxpbmdfdG9dID0gYm9hcmRbY2FzdGxpbmdfZnJvbV07XG4gICAgICAgIGJvYXJkW2Nhc3RsaW5nX2Zyb21dID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAobW92ZS5mbGFncyAmIEJJVFMuUVNJREVfQ0FTVExFKSB7XG4gICAgICAgIHZhciBjYXN0bGluZ190byA9IG1vdmUudG8gKyAxO1xuICAgICAgICB2YXIgY2FzdGxpbmdfZnJvbSA9IG1vdmUudG8gLSAyO1xuICAgICAgICBib2FyZFtjYXN0bGluZ190b10gPSBib2FyZFtjYXN0bGluZ19mcm9tXTtcbiAgICAgICAgYm9hcmRbY2FzdGxpbmdfZnJvbV0gPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvKiB0dXJuIG9mZiBjYXN0bGluZyAqL1xuICAgICAgY2FzdGxpbmdbdXNdID0gJyc7XG4gICAgfVxuXG4gICAgLyogdHVybiBvZmYgY2FzdGxpbmcgaWYgd2UgbW92ZSBhIHJvb2sgKi9cbiAgICBpZiAoY2FzdGxpbmdbdXNdKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gUk9PS1NbdXNdLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChtb3ZlLmZyb20gPT09IFJPT0tTW3VzXVtpXS5zcXVhcmUgJiZcbiAgICAgICAgICAgIGNhc3RsaW5nW3VzXSAmIFJPT0tTW3VzXVtpXS5mbGFnKSB7XG4gICAgICAgICAgY2FzdGxpbmdbdXNdIF49IFJPT0tTW3VzXVtpXS5mbGFnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogdHVybiBvZmYgY2FzdGxpbmcgaWYgd2UgY2FwdHVyZSBhIHJvb2sgKi9cbiAgICBpZiAoY2FzdGxpbmdbdGhlbV0pIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBST09LU1t0aGVtXS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAobW92ZS50byA9PT0gUk9PS1NbdGhlbV1baV0uc3F1YXJlICYmXG4gICAgICAgICAgICBjYXN0bGluZ1t0aGVtXSAmIFJPT0tTW3RoZW1dW2ldLmZsYWcpIHtcbiAgICAgICAgICBjYXN0bGluZ1t0aGVtXSBePSBST09LU1t0aGVtXVtpXS5mbGFnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogaWYgYmlnIHBhd24gbW92ZSwgdXBkYXRlIHRoZSBlbiBwYXNzYW50IHNxdWFyZSAqL1xuICAgIGlmIChtb3ZlLmZsYWdzICYgQklUUy5CSUdfUEFXTikge1xuICAgICAgaWYgKHR1cm4gPT09ICdiJykge1xuICAgICAgICBlcF9zcXVhcmUgPSBtb3ZlLnRvIC0gMTY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcF9zcXVhcmUgPSBtb3ZlLnRvICsgMTY7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVwX3NxdWFyZSA9IEVNUFRZO1xuICAgIH1cblxuICAgIC8qIHJlc2V0IHRoZSA1MCBtb3ZlIGNvdW50ZXIgaWYgYSBwYXduIGlzIG1vdmVkIG9yIGEgcGllY2UgaXMgY2FwdHVyZWQgKi9cbiAgICBpZiAobW92ZS5waWVjZSA9PT0gUEFXTikge1xuICAgICAgaGFsZl9tb3ZlcyA9IDA7XG4gICAgfSBlbHNlIGlmIChtb3ZlLmZsYWdzICYgKEJJVFMuQ0FQVFVSRSB8IEJJVFMuRVBfQ0FQVFVSRSkpIHtcbiAgICAgIGhhbGZfbW92ZXMgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYWxmX21vdmVzKys7XG4gICAgfVxuXG4gICAgaWYgKHR1cm4gPT09IEJMQUNLKSB7XG4gICAgICBtb3ZlX251bWJlcisrO1xuICAgIH1cbiAgICB0dXJuID0gc3dhcF9jb2xvcih0dXJuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuZG9fbW92ZSgpIHtcbiAgICB2YXIgb2xkID0gaGlzdG9yeS5wb3AoKTtcbiAgICBpZiAob2xkID09IG51bGwpIHsgcmV0dXJuIG51bGw7IH1cblxuICAgIHZhciBtb3ZlID0gb2xkLm1vdmU7XG4gICAga2luZ3MgPSBvbGQua2luZ3M7XG4gICAgdHVybiA9IG9sZC50dXJuO1xuICAgIGNhc3RsaW5nID0gb2xkLmNhc3RsaW5nO1xuICAgIGVwX3NxdWFyZSA9IG9sZC5lcF9zcXVhcmU7XG4gICAgaGFsZl9tb3ZlcyA9IG9sZC5oYWxmX21vdmVzO1xuICAgIG1vdmVfbnVtYmVyID0gb2xkLm1vdmVfbnVtYmVyO1xuXG4gICAgdmFyIHVzID0gdHVybjtcbiAgICB2YXIgdGhlbSA9IHN3YXBfY29sb3IodHVybik7XG5cbiAgICBib2FyZFttb3ZlLmZyb21dID0gYm9hcmRbbW92ZS50b107XG4gICAgYm9hcmRbbW92ZS5mcm9tXS50eXBlID0gbW92ZS5waWVjZTsgIC8vIHRvIHVuZG8gYW55IHByb21vdGlvbnNcbiAgICBib2FyZFttb3ZlLnRvXSA9IG51bGw7XG5cbiAgICBpZiAobW92ZS5mbGFncyAmIEJJVFMuQ0FQVFVSRSkge1xuICAgICAgYm9hcmRbbW92ZS50b10gPSB7dHlwZTogbW92ZS5jYXB0dXJlZCwgY29sb3I6IHRoZW19O1xuICAgIH0gZWxzZSBpZiAobW92ZS5mbGFncyAmIEJJVFMuRVBfQ0FQVFVSRSkge1xuICAgICAgdmFyIGluZGV4O1xuICAgICAgaWYgKHVzID09PSBCTEFDSykge1xuICAgICAgICBpbmRleCA9IG1vdmUudG8gLSAxNjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0gbW92ZS50byArIDE2O1xuICAgICAgfVxuICAgICAgYm9hcmRbaW5kZXhdID0ge3R5cGU6IFBBV04sIGNvbG9yOiB0aGVtfTtcbiAgICB9XG5cblxuICAgIGlmIChtb3ZlLmZsYWdzICYgKEJJVFMuS1NJREVfQ0FTVExFIHwgQklUUy5RU0lERV9DQVNUTEUpKSB7XG4gICAgICB2YXIgY2FzdGxpbmdfdG8sIGNhc3RsaW5nX2Zyb207XG4gICAgICBpZiAobW92ZS5mbGFncyAmIEJJVFMuS1NJREVfQ0FTVExFKSB7XG4gICAgICAgIGNhc3RsaW5nX3RvID0gbW92ZS50byArIDE7XG4gICAgICAgIGNhc3RsaW5nX2Zyb20gPSBtb3ZlLnRvIC0gMTtcbiAgICAgIH0gZWxzZSBpZiAobW92ZS5mbGFncyAmIEJJVFMuUVNJREVfQ0FTVExFKSB7XG4gICAgICAgIGNhc3RsaW5nX3RvID0gbW92ZS50byAtIDI7XG4gICAgICAgIGNhc3RsaW5nX2Zyb20gPSBtb3ZlLnRvICsgMTtcbiAgICAgIH1cblxuICAgICAgYm9hcmRbY2FzdGxpbmdfdG9dID0gYm9hcmRbY2FzdGxpbmdfZnJvbV07XG4gICAgICBib2FyZFtjYXN0bGluZ19mcm9tXSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmU7XG4gIH1cblxuICAvKiB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gdW5pcXVlbHkgaWRlbnRpZnkgYW1iaWd1b3VzIG1vdmVzICovXG4gIGZ1bmN0aW9uIGdldF9kaXNhbWJpZ3VhdG9yKG1vdmUsIHNsb3BweSkge1xuICAgIHZhciBtb3ZlcyA9IGdlbmVyYXRlX21vdmVzKHtsZWdhbDogIXNsb3BweX0pO1xuXG4gICAgdmFyIGZyb20gPSBtb3ZlLmZyb207XG4gICAgdmFyIHRvID0gbW92ZS50bztcbiAgICB2YXIgcGllY2UgPSBtb3ZlLnBpZWNlO1xuXG4gICAgdmFyIGFtYmlndWl0aWVzID0gMDtcbiAgICB2YXIgc2FtZV9yYW5rID0gMDtcbiAgICB2YXIgc2FtZV9maWxlID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBtb3Zlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIGFtYmlnX2Zyb20gPSBtb3Zlc1tpXS5mcm9tO1xuICAgICAgdmFyIGFtYmlnX3RvID0gbW92ZXNbaV0udG87XG4gICAgICB2YXIgYW1iaWdfcGllY2UgPSBtb3Zlc1tpXS5waWVjZTtcblxuICAgICAgLyogaWYgYSBtb3ZlIG9mIHRoZSBzYW1lIHBpZWNlIHR5cGUgZW5kcyBvbiB0aGUgc2FtZSB0byBzcXVhcmUsIHdlJ2xsXG4gICAgICAgKiBuZWVkIHRvIGFkZCBhIGRpc2FtYmlndWF0b3IgdG8gdGhlIGFsZ2VicmFpYyBub3RhdGlvblxuICAgICAgICovXG4gICAgICBpZiAocGllY2UgPT09IGFtYmlnX3BpZWNlICYmIGZyb20gIT09IGFtYmlnX2Zyb20gJiYgdG8gPT09IGFtYmlnX3RvKSB7XG4gICAgICAgIGFtYmlndWl0aWVzKys7XG5cbiAgICAgICAgaWYgKHJhbmsoZnJvbSkgPT09IHJhbmsoYW1iaWdfZnJvbSkpIHtcbiAgICAgICAgICBzYW1lX3JhbmsrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaWxlKGZyb20pID09PSBmaWxlKGFtYmlnX2Zyb20pKSB7XG4gICAgICAgICAgc2FtZV9maWxlKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYW1iaWd1aXRpZXMgPiAwKSB7XG4gICAgICAvKiBpZiB0aGVyZSBleGlzdHMgYSBzaW1pbGFyIG1vdmluZyBwaWVjZSBvbiB0aGUgc2FtZSByYW5rIGFuZCBmaWxlIGFzXG4gICAgICAgKiB0aGUgbW92ZSBpbiBxdWVzdGlvbiwgdXNlIHRoZSBzcXVhcmUgYXMgdGhlIGRpc2FtYmlndWF0b3JcbiAgICAgICAqL1xuICAgICAgaWYgKHNhbWVfcmFuayA+IDAgJiYgc2FtZV9maWxlID4gMCkge1xuICAgICAgICByZXR1cm4gYWxnZWJyYWljKGZyb20pO1xuICAgICAgfVxuICAgICAgLyogaWYgdGhlIG1vdmluZyBwaWVjZSByZXN0cyBvbiB0aGUgc2FtZSBmaWxlLCB1c2UgdGhlIHJhbmsgc3ltYm9sIGFzIHRoZVxuICAgICAgICogZGlzYW1iaWd1YXRvclxuICAgICAgICovXG4gICAgICBlbHNlIGlmIChzYW1lX2ZpbGUgPiAwKSB7XG4gICAgICAgIHJldHVybiBhbGdlYnJhaWMoZnJvbSkuY2hhckF0KDEpO1xuICAgICAgfVxuICAgICAgLyogZWxzZSB1c2UgdGhlIGZpbGUgc3ltYm9sICovXG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGFsZ2VicmFpYyhmcm9tKS5jaGFyQXQoMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNjaWkoKSB7XG4gICAgdmFyIHMgPSAnICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcXG4nO1xuICAgIGZvciAodmFyIGkgPSBTUVVBUkVTLmE4OyBpIDw9IFNRVUFSRVMuaDE7IGkrKykge1xuICAgICAgLyogZGlzcGxheSB0aGUgcmFuayAqL1xuICAgICAgaWYgKGZpbGUoaSkgPT09IDApIHtcbiAgICAgICAgcyArPSAnICcgKyAnODc2NTQzMjEnW3JhbmsoaSldICsgJyB8JztcbiAgICAgIH1cblxuICAgICAgLyogZW1wdHkgcGllY2UgKi9cbiAgICAgIGlmIChib2FyZFtpXSA9PSBudWxsKSB7XG4gICAgICAgIHMgKz0gJyAuICc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcGllY2UgPSBib2FyZFtpXS50eXBlO1xuICAgICAgICB2YXIgY29sb3IgPSBib2FyZFtpXS5jb2xvcjtcbiAgICAgICAgdmFyIHN5bWJvbCA9IChjb2xvciA9PT0gV0hJVEUpID9cbiAgICAgICAgICAgICAgICAgICAgIHBpZWNlLnRvVXBwZXJDYXNlKCkgOiBwaWVjZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBzICs9ICcgJyArIHN5bWJvbCArICcgJztcbiAgICAgIH1cblxuICAgICAgaWYgKChpICsgMSkgJiAweDg4KSB7XG4gICAgICAgIHMgKz0gJ3xcXG4nO1xuICAgICAgICBpICs9IDg7XG4gICAgICB9XG4gICAgfVxuICAgIHMgKz0gJyAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXFxuJztcbiAgICBzICs9ICcgICAgIGEgIGIgIGMgIGQgIGUgIGYgIGcgIGhcXG4nO1xuXG4gICAgcmV0dXJuIHM7XG4gIH1cblxuICAvLyBjb252ZXJ0IGEgbW92ZSBmcm9tIFN0YW5kYXJkIEFsZ2VicmFpYyBOb3RhdGlvbiAoU0FOKSB0byAweDg4IGNvb3JkaW5hdGVzXG4gIGZ1bmN0aW9uIG1vdmVfZnJvbV9zYW4obW92ZSwgc2xvcHB5KSB7XG4gICAgLy8gc3RyaXAgb2ZmIGFueSBtb3ZlIGRlY29yYXRpb25zOiBlLmcgTmYzKz8hXG4gICAgdmFyIGNsZWFuX21vdmUgPSBzdHJpcHBlZF9zYW4obW92ZSk7XG5cbiAgICAvLyBpZiB3ZSdyZSB1c2luZyB0aGUgc2xvcHB5IHBhcnNlciBydW4gYSByZWdleCB0byBncmFiIHBpZWNlLCB0bywgYW5kIGZyb21cbiAgICAvLyB0aGlzIHNob3VsZCBwYXJzZSBpbnZhbGlkIFNBTiBsaWtlOiBQZTItZTQsIFJjMWM0LCBRZjN4ZjdcbiAgICBpZiAoc2xvcHB5KSB7XG4gICAgICB2YXIgbWF0Y2hlcyA9IGNsZWFuX21vdmUubWF0Y2goLyhbcG5icnFrUE5CUlFLXSk/KFthLWhdWzEtOF0peD8tPyhbYS1oXVsxLThdKShbcXJiblFSQk5dKT8vKTtcbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHZhciBwaWVjZSA9IG1hdGNoZXNbMV07XG4gICAgICAgIHZhciBmcm9tID0gbWF0Y2hlc1syXTtcbiAgICAgICAgdmFyIHRvID0gbWF0Y2hlc1szXTtcbiAgICAgICAgdmFyIHByb21vdGlvbiA9IG1hdGNoZXNbNF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIG1vdmVzID0gZ2VuZXJhdGVfbW92ZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbW92ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIC8vIHRyeSB0aGUgc3RyaWN0IHBhcnNlciBmaXJzdCwgdGhlbiB0aGUgc2xvcHB5IHBhcnNlciBpZiByZXF1ZXN0ZWRcbiAgICAgIC8vIGJ5IHRoZSB1c2VyXG4gICAgICBpZiAoKGNsZWFuX21vdmUgPT09IHN0cmlwcGVkX3Nhbihtb3ZlX3RvX3Nhbihtb3Zlc1tpXSkpKSB8fFxuICAgICAgICAgIChzbG9wcHkgJiYgY2xlYW5fbW92ZSA9PT0gc3RyaXBwZWRfc2FuKG1vdmVfdG9fc2FuKG1vdmVzW2ldLCB0cnVlKSkpKSB7XG4gICAgICAgIHJldHVybiBtb3Zlc1tpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChtYXRjaGVzICYmXG4gICAgICAgICAgICAoIXBpZWNlIHx8IHBpZWNlLnRvTG93ZXJDYXNlKCkgPT0gbW92ZXNbaV0ucGllY2UpICYmXG4gICAgICAgICAgICBTUVVBUkVTW2Zyb21dID09IG1vdmVzW2ldLmZyb20gJiZcbiAgICAgICAgICAgIFNRVUFSRVNbdG9dID09IG1vdmVzW2ldLnRvICYmXG4gICAgICAgICAgICAoIXByb21vdGlvbiB8fCBwcm9tb3Rpb24udG9Mb3dlckNhc2UoKSA9PSBtb3Zlc1tpXS5wcm9tb3Rpb24pKSB7XG4gICAgICAgICAgcmV0dXJuIG1vdmVzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgKiBVVElMSVRZIEZVTkNUSU9OU1xuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgZnVuY3Rpb24gcmFuayhpKSB7XG4gICAgcmV0dXJuIGkgPj4gNDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGUoaSkge1xuICAgIHJldHVybiBpICYgMTU7XG4gIH1cblxuICBmdW5jdGlvbiBhbGdlYnJhaWMoaSl7XG4gICAgdmFyIGYgPSBmaWxlKGkpLCByID0gcmFuayhpKTtcbiAgICByZXR1cm4gJ2FiY2RlZmdoJy5zdWJzdHJpbmcoZixmKzEpICsgJzg3NjU0MzIxJy5zdWJzdHJpbmcocixyKzEpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3dhcF9jb2xvcihjKSB7XG4gICAgcmV0dXJuIGMgPT09IFdISVRFID8gQkxBQ0sgOiBXSElURTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzX2RpZ2l0KGMpIHtcbiAgICByZXR1cm4gJzAxMjM0NTY3ODknLmluZGV4T2YoYykgIT09IC0xO1xuICB9XG5cbiAgLyogcHJldHR5ID0gZXh0ZXJuYWwgbW92ZSBvYmplY3QgKi9cbiAgZnVuY3Rpb24gbWFrZV9wcmV0dHkodWdseV9tb3ZlKSB7XG4gICAgdmFyIG1vdmUgPSBjbG9uZSh1Z2x5X21vdmUpO1xuICAgIG1vdmUuc2FuID0gbW92ZV90b19zYW4obW92ZSwgZmFsc2UpO1xuICAgIG1vdmUudG8gPSBhbGdlYnJhaWMobW92ZS50byk7XG4gICAgbW92ZS5mcm9tID0gYWxnZWJyYWljKG1vdmUuZnJvbSk7XG5cbiAgICB2YXIgZmxhZ3MgPSAnJztcblxuICAgIGZvciAodmFyIGZsYWcgaW4gQklUUykge1xuICAgICAgaWYgKEJJVFNbZmxhZ10gJiBtb3ZlLmZsYWdzKSB7XG4gICAgICAgIGZsYWdzICs9IEZMQUdTW2ZsYWddO1xuICAgICAgfVxuICAgIH1cbiAgICBtb3ZlLmZsYWdzID0gZmxhZ3M7XG5cbiAgICByZXR1cm4gbW92ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb25lKG9iaikge1xuICAgIHZhciBkdXBlID0gKG9iaiBpbnN0YW5jZW9mIEFycmF5KSA/IFtdIDoge307XG5cbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvcGVydHkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGR1cGVbcHJvcGVydHldID0gY2xvbmUob2JqW3Byb3BlcnR5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkdXBlW3Byb3BlcnR5XSA9IG9ialtwcm9wZXJ0eV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGR1cGU7XG4gIH1cblxuICBmdW5jdGlvbiB0cmltKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xuICB9XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIERFQlVHR0lORyBVVElMSVRJRVNcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIGZ1bmN0aW9uIHBlcmZ0KGRlcHRoKSB7XG4gICAgdmFyIG1vdmVzID0gZ2VuZXJhdGVfbW92ZXMoe2xlZ2FsOiBmYWxzZX0pO1xuICAgIHZhciBub2RlcyA9IDA7XG4gICAgdmFyIGNvbG9yID0gdHVybjtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBtb3Zlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgbWFrZV9tb3ZlKG1vdmVzW2ldKTtcbiAgICAgIGlmICgha2luZ19hdHRhY2tlZChjb2xvcikpIHtcbiAgICAgICAgaWYgKGRlcHRoIC0gMSA+IDApIHtcbiAgICAgICAgICB2YXIgY2hpbGRfbm9kZXMgPSBwZXJmdChkZXB0aCAtIDEpO1xuICAgICAgICAgIG5vZGVzICs9IGNoaWxkX25vZGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGVzKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHVuZG9fbW92ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIFBVQkxJQyBDT05TVEFOVFMgKGlzIHRoZXJlIGEgYmV0dGVyIHdheSB0byBkbyB0aGlzPylcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgV0hJVEU6IFdISVRFLFxuICAgIEJMQUNLOiBCTEFDSyxcbiAgICBQQVdOOiBQQVdOLFxuICAgIEtOSUdIVDogS05JR0hULFxuICAgIEJJU0hPUDogQklTSE9QLFxuICAgIFJPT0s6IFJPT0ssXG4gICAgUVVFRU46IFFVRUVOLFxuICAgIEtJTkc6IEtJTkcsXG4gICAgU1FVQVJFUzogKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8qIGZyb20gdGhlIEVDTUEtMjYyIHNwZWMgKHNlY3Rpb24gMTIuNi40KTpcbiAgICAgICAgICAgICAgICAgKiBcIlRoZSBtZWNoYW5pY3Mgb2YgZW51bWVyYXRpbmcgdGhlIHByb3BlcnRpZXMgLi4uIGlzXG4gICAgICAgICAgICAgICAgICogaW1wbGVtZW50YXRpb24gZGVwZW5kZW50XCJcbiAgICAgICAgICAgICAgICAgKiBzbzogZm9yICh2YXIgc3EgaW4gU1FVQVJFUykgeyBrZXlzLnB1c2goc3EpOyB9IG1pZ2h0IG5vdCBiZVxuICAgICAgICAgICAgICAgICAqIG9yZGVyZWQgY29ycmVjdGx5XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gU1FVQVJFUy5hODsgaSA8PSBTUVVBUkVTLmgxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGlmIChpICYgMHg4OCkgeyBpICs9IDc7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICBrZXlzLnB1c2goYWxnZWJyYWljKGkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgICAgICAgIH0pKCksXG4gICAgRkxBR1M6IEZMQUdTLFxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIFBVQkxJQyBBUElcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgbG9hZDogZnVuY3Rpb24oZmVuKSB7XG4gICAgICByZXR1cm4gbG9hZChmZW4pO1xuICAgIH0sXG5cbiAgICByZXNldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gcmVzZXQoKTtcbiAgICB9LFxuXG4gICAgbW92ZXM6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIC8qIFRoZSBpbnRlcm5hbCByZXByZXNlbnRhdGlvbiBvZiBhIGNoZXNzIG1vdmUgaXMgaW4gMHg4OCBmb3JtYXQsIGFuZFxuICAgICAgICogbm90IG1lYW50IHRvIGJlIGh1bWFuLXJlYWRhYmxlLiAgVGhlIGNvZGUgYmVsb3cgY29udmVydHMgdGhlIDB4ODhcbiAgICAgICAqIHNxdWFyZSBjb29yZGluYXRlcyB0byBhbGdlYnJhaWMgY29vcmRpbmF0ZXMuICBJdCBhbHNvIHBydW5lcyBhblxuICAgICAgICogdW5uZWNlc3NhcnkgbW92ZSBrZXlzIHJlc3VsdGluZyBmcm9tIGEgdmVyYm9zZSBjYWxsLlxuICAgICAgICovXG5cbiAgICAgIHZhciB1Z2x5X21vdmVzID0gZ2VuZXJhdGVfbW92ZXMob3B0aW9ucyk7XG4gICAgICB2YXIgbW92ZXMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHVnbHlfbW92ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblxuICAgICAgICAvKiBkb2VzIHRoZSB1c2VyIHdhbnQgYSBmdWxsIG1vdmUgb2JqZWN0IChtb3N0IGxpa2VseSBub3QpLCBvciBqdXN0XG4gICAgICAgICAqIFNBTlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAndW5kZWZpbmVkJyAmJiAndmVyYm9zZScgaW4gb3B0aW9ucyAmJlxuICAgICAgICAgICAgb3B0aW9ucy52ZXJib3NlKSB7XG4gICAgICAgICAgbW92ZXMucHVzaChtYWtlX3ByZXR0eSh1Z2x5X21vdmVzW2ldKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW92ZXMucHVzaChtb3ZlX3RvX3Nhbih1Z2x5X21vdmVzW2ldLCBmYWxzZSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtb3ZlcztcbiAgICB9LFxuXG4gICAgaW5fY2hlY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGluX2NoZWNrKCk7XG4gICAgfSxcblxuICAgIGluX2NoZWNrbWF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW5fY2hlY2ttYXRlKCk7XG4gICAgfSxcblxuICAgIGluX3N0YWxlbWF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW5fc3RhbGVtYXRlKCk7XG4gICAgfSxcblxuICAgIGluX2RyYXc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGhhbGZfbW92ZXMgPj0gMTAwIHx8XG4gICAgICAgICAgICAgaW5fc3RhbGVtYXRlKCkgfHxcbiAgICAgICAgICAgICBpbnN1ZmZpY2llbnRfbWF0ZXJpYWwoKSB8fFxuICAgICAgICAgICAgIGluX3RocmVlZm9sZF9yZXBldGl0aW9uKCk7XG4gICAgfSxcblxuICAgIGluc3VmZmljaWVudF9tYXRlcmlhbDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW5zdWZmaWNpZW50X21hdGVyaWFsKCk7XG4gICAgfSxcblxuICAgIGluX3RocmVlZm9sZF9yZXBldGl0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbl90aHJlZWZvbGRfcmVwZXRpdGlvbigpO1xuICAgIH0sXG5cbiAgICBnYW1lX292ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGhhbGZfbW92ZXMgPj0gMTAwIHx8XG4gICAgICAgICAgICAgaW5fY2hlY2ttYXRlKCkgfHxcbiAgICAgICAgICAgICBpbl9zdGFsZW1hdGUoKSB8fFxuICAgICAgICAgICAgIGluc3VmZmljaWVudF9tYXRlcmlhbCgpIHx8XG4gICAgICAgICAgICAgaW5fdGhyZWVmb2xkX3JlcGV0aXRpb24oKTtcbiAgICB9LFxuXG4gICAgdmFsaWRhdGVfZmVuOiBmdW5jdGlvbihmZW4pIHtcbiAgICAgIHJldHVybiB2YWxpZGF0ZV9mZW4oZmVuKTtcbiAgICB9LFxuXG4gICAgZmVuOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBnZW5lcmF0ZV9mZW4oKTtcbiAgICB9LFxuXG4gICAgcGduOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAvKiB1c2luZyB0aGUgc3BlY2lmaWNhdGlvbiBmcm9tIGh0dHA6Ly93d3cuY2hlc3NjbHViLmNvbS9oZWxwL1BHTi1zcGVjXG4gICAgICAgKiBleGFtcGxlIGZvciBodG1sIHVzYWdlOiAucGduKHsgbWF4X3dpZHRoOiA3MiwgbmV3bGluZV9jaGFyOiBcIjxiciAvPlwiIH0pXG4gICAgICAgKi9cbiAgICAgIHZhciBuZXdsaW5lID0gKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubmV3bGluZV9jaGFyID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5uZXdsaW5lX2NoYXIgOiAnXFxuJztcbiAgICAgIHZhciBtYXhfd2lkdGggPSAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLm1heF93aWR0aCA9PT0gJ251bWJlcicpID9cbiAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5tYXhfd2lkdGggOiAwO1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgdmFyIGhlYWRlcl9leGlzdHMgPSBmYWxzZTtcblxuICAgICAgLyogYWRkIHRoZSBQR04gaGVhZGVyIGhlYWRlcnJtYXRpb24gKi9cbiAgICAgIGZvciAodmFyIGkgaW4gaGVhZGVyKSB7XG4gICAgICAgIC8qIFRPRE86IG9yZGVyIG9mIGVudW1lcmF0ZWQgcHJvcGVydGllcyBpbiBoZWFkZXIgb2JqZWN0IGlzIG5vdFxuICAgICAgICAgKiBndWFyYW50ZWVkLCBzZWUgRUNNQS0yNjIgc3BlYyAoc2VjdGlvbiAxMi42LjQpXG4gICAgICAgICAqL1xuICAgICAgICByZXN1bHQucHVzaCgnWycgKyBpICsgJyBcXFwiJyArIGhlYWRlcltpXSArICdcXFwiXScgKyBuZXdsaW5lKTtcbiAgICAgICAgaGVhZGVyX2V4aXN0cyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChoZWFkZXJfZXhpc3RzICYmIGhpc3RvcnkubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKG5ld2xpbmUpO1xuICAgICAgfVxuXG4gICAgICAvKiBwb3AgYWxsIG9mIGhpc3Rvcnkgb250byByZXZlcnNlZF9oaXN0b3J5ICovXG4gICAgICB2YXIgcmV2ZXJzZWRfaGlzdG9yeSA9IFtdO1xuICAgICAgd2hpbGUgKGhpc3RvcnkubGVuZ3RoID4gMCkge1xuICAgICAgICByZXZlcnNlZF9oaXN0b3J5LnB1c2godW5kb19tb3ZlKCkpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbW92ZXMgPSBbXTtcbiAgICAgIHZhciBtb3ZlX3N0cmluZyA9ICcnO1xuXG4gICAgICAvKiBidWlsZCB0aGUgbGlzdCBvZiBtb3Zlcy4gIGEgbW92ZV9zdHJpbmcgbG9va3MgbGlrZTogXCIzLiBlMyBlNlwiICovXG4gICAgICB3aGlsZSAocmV2ZXJzZWRfaGlzdG9yeS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBtb3ZlID0gcmV2ZXJzZWRfaGlzdG9yeS5wb3AoKTtcblxuICAgICAgICAvKiBpZiB0aGUgcG9zaXRpb24gc3RhcnRlZCB3aXRoIGJsYWNrIHRvIG1vdmUsIHN0YXJ0IFBHTiB3aXRoIDEuIC4uLiAqL1xuICAgICAgICBpZiAoIWhpc3RvcnkubGVuZ3RoICYmIG1vdmUuY29sb3IgPT09ICdiJykge1xuICAgICAgICAgIG1vdmVfc3RyaW5nID0gbW92ZV9udW1iZXIgKyAnLiAuLi4nO1xuICAgICAgICB9IGVsc2UgaWYgKG1vdmUuY29sb3IgPT09ICd3Jykge1xuICAgICAgICAgIC8qIHN0b3JlIHRoZSBwcmV2aW91cyBnZW5lcmF0ZWQgbW92ZV9zdHJpbmcgaWYgd2UgaGF2ZSBvbmUgKi9cbiAgICAgICAgICBpZiAobW92ZV9zdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgICAgICBtb3Zlcy5wdXNoKG1vdmVfc3RyaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbW92ZV9zdHJpbmcgPSBtb3ZlX251bWJlciArICcuJztcbiAgICAgICAgfVxuXG4gICAgICAgIG1vdmVfc3RyaW5nID0gbW92ZV9zdHJpbmcgKyAnICcgKyBtb3ZlX3RvX3Nhbihtb3ZlLCBmYWxzZSk7XG4gICAgICAgIG1ha2VfbW92ZShtb3ZlKTtcbiAgICAgIH1cblxuICAgICAgLyogYXJlIHRoZXJlIGFueSBvdGhlciBsZWZ0b3ZlciBtb3Zlcz8gKi9cbiAgICAgIGlmIChtb3ZlX3N0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgbW92ZXMucHVzaChtb3ZlX3N0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIC8qIGlzIHRoZXJlIGEgcmVzdWx0PyAqL1xuICAgICAgaWYgKHR5cGVvZiBoZWFkZXIuUmVzdWx0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtb3Zlcy5wdXNoKGhlYWRlci5SZXN1bHQpO1xuICAgICAgfVxuXG4gICAgICAvKiBoaXN0b3J5IHNob3VsZCBiZSBiYWNrIHRvIHdoYXQgaXMgd2FzIGJlZm9yZSB3ZSBzdGFydGVkIGdlbmVyYXRpbmcgUEdOLFxuICAgICAgICogc28gam9pbiB0b2dldGhlciBtb3Zlc1xuICAgICAgICovXG4gICAgICBpZiAobWF4X3dpZHRoID09PSAwKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQuam9pbignJykgKyBtb3Zlcy5qb2luKCcgJyk7XG4gICAgICB9XG5cbiAgICAgIC8qIHdyYXAgdGhlIFBHTiBvdXRwdXQgYXQgbWF4X3dpZHRoICovXG4gICAgICB2YXIgY3VycmVudF93aWR0aCA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8qIGlmIHRoZSBjdXJyZW50IG1vdmUgd2lsbCBwdXNoIHBhc3QgbWF4X3dpZHRoICovXG4gICAgICAgIGlmIChjdXJyZW50X3dpZHRoICsgbW92ZXNbaV0ubGVuZ3RoID4gbWF4X3dpZHRoICYmIGkgIT09IDApIHtcblxuICAgICAgICAgIC8qIGRvbid0IGVuZCB0aGUgbGluZSB3aXRoIHdoaXRlc3BhY2UgKi9cbiAgICAgICAgICBpZiAocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9PT0gJyAnKSB7XG4gICAgICAgICAgICByZXN1bHQucG9wKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzdWx0LnB1c2gobmV3bGluZSk7XG4gICAgICAgICAgY3VycmVudF93aWR0aCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoaSAhPT0gMCkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKCcgJyk7XG4gICAgICAgICAgY3VycmVudF93aWR0aCsrO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKG1vdmVzW2ldKTtcbiAgICAgICAgY3VycmVudF93aWR0aCArPSBtb3Zlc1tpXS5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQuam9pbignJyk7XG4gICAgfSxcblxuICAgIGxvYWRfcGduOiBmdW5jdGlvbihwZ24sIG9wdGlvbnMpIHtcbiAgICAgIC8vIGFsbG93IHRoZSB1c2VyIHRvIHNwZWNpZnkgdGhlIHNsb3BweSBtb3ZlIHBhcnNlciB0byB3b3JrIGFyb3VuZCBvdmVyXG4gICAgICAvLyBkaXNhbWJpZ3VhdGlvbiBidWdzIGluIEZyaXR6IGFuZCBDaGVzc2Jhc2VcbiAgICAgIHZhciBzbG9wcHkgPSAodHlwZW9mIG9wdGlvbnMgIT09ICd1bmRlZmluZWQnICYmICdzbG9wcHknIGluIG9wdGlvbnMpID9cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5zbG9wcHkgOiBmYWxzZTtcblxuICAgICAgZnVuY3Rpb24gbWFzayhzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFxcL2csICdcXFxcJyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGhhc19rZXlzKG9iamVjdCkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwYXJzZV9wZ25faGVhZGVyKGhlYWRlciwgb3B0aW9ucykge1xuICAgICAgICB2YXIgbmV3bGluZV9jaGFyID0gKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLm5ld2xpbmVfY2hhciA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm5ld2xpbmVfY2hhciA6ICdcXHI/XFxuJztcbiAgICAgICAgdmFyIGhlYWRlcl9vYmogPSB7fTtcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBoZWFkZXIuc3BsaXQobmV3IFJlZ0V4cChtYXNrKG5ld2xpbmVfY2hhcikpKTtcbiAgICAgICAgdmFyIGtleSA9ICcnO1xuICAgICAgICB2YXIgdmFsdWUgPSAnJztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhlYWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBrZXkgPSBoZWFkZXJzW2ldLnJlcGxhY2UoL15cXFsoW0EtWl1bQS1aYS16XSopXFxzLipcXF0kLywgJyQxJyk7XG4gICAgICAgICAgdmFsdWUgPSBoZWFkZXJzW2ldLnJlcGxhY2UoL15cXFtbQS1aYS16XStcXHNcIiguKilcIlxcXSQvLCAnJDEnKTtcbiAgICAgICAgICBpZiAodHJpbShrZXkpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGhlYWRlcl9vYmpba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoZWFkZXJfb2JqO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3bGluZV9jaGFyID0gKHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5uZXdsaW5lX2NoYXIgPT09ICdzdHJpbmcnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMubmV3bGluZV9jaGFyIDogJ1xccj9cXG4nO1xuICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXihcXFxcWygufCcgKyBtYXNrKG5ld2xpbmVfY2hhcikgKyAnKSpcXFxcXSknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgbWFzayhuZXdsaW5lX2NoYXIpICsgJykqJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICcxLignICsgbWFzayhuZXdsaW5lX2NoYXIpICsgJ3wuKSokJywgJ2cnKTtcblxuICAgICAgLyogZ2V0IGhlYWRlciBwYXJ0IG9mIHRoZSBQR04gZmlsZSAqL1xuICAgICAgdmFyIGhlYWRlcl9zdHJpbmcgPSBwZ24ucmVwbGFjZShyZWdleCwgJyQxJyk7XG5cbiAgICAgIC8qIG5vIGluZm8gcGFydCBnaXZlbiwgYmVnaW5zIHdpdGggbW92ZXMgKi9cbiAgICAgIGlmIChoZWFkZXJfc3RyaW5nWzBdICE9PSAnWycpIHtcbiAgICAgICAgaGVhZGVyX3N0cmluZyA9ICcnO1xuICAgICAgfVxuXG4gICAgICByZXNldCgpO1xuXG4gICAgICAvKiBwYXJzZSBQR04gaGVhZGVyICovXG4gICAgICB2YXIgaGVhZGVycyA9IHBhcnNlX3Bnbl9oZWFkZXIoaGVhZGVyX3N0cmluZywgb3B0aW9ucyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gaGVhZGVycykge1xuICAgICAgICBzZXRfaGVhZGVyKFtrZXksIGhlYWRlcnNba2V5XV0pO1xuICAgICAgfVxuXG4gICAgICAvKiBsb2FkIHRoZSBzdGFydGluZyBwb3NpdGlvbiBpbmRpY2F0ZWQgYnkgW1NldHVwICcxJ10gYW5kXG4gICAgICAqIFtGRU4gcG9zaXRpb25dICovXG4gICAgICBpZiAoaGVhZGVyc1snU2V0VXAnXSA9PT0gJzEnKSB7XG4gICAgICAgICAgaWYgKCEoKCdGRU4nIGluIGhlYWRlcnMpICYmIGxvYWQoaGVhZGVyc1snRkVOJ10pKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogZGVsZXRlIGhlYWRlciB0byBnZXQgdGhlIG1vdmVzICovXG4gICAgICB2YXIgbXMgPSBwZ24ucmVwbGFjZShoZWFkZXJfc3RyaW5nLCAnJykucmVwbGFjZShuZXcgUmVnRXhwKG1hc2sobmV3bGluZV9jaGFyKSwgJ2cnKSwgJyAnKTtcblxuICAgICAgLyogZGVsZXRlIGNvbW1lbnRzICovXG4gICAgICBtcyA9IG1zLnJlcGxhY2UoLyhcXHtbXn1dK1xcfSkrPy9nLCAnJyk7XG5cbiAgICAgIC8qIGRlbGV0ZSByZWN1cnNpdmUgYW5ub3RhdGlvbiB2YXJpYXRpb25zICovXG4gICAgICB2YXIgcmF2X3JlZ2V4ID0gLyhcXChbXlxcKFxcKV0rXFwpKSs/L2dcbiAgICAgIHdoaWxlIChyYXZfcmVnZXgudGVzdChtcykpIHtcbiAgICAgICAgbXMgPSBtcy5yZXBsYWNlKHJhdl9yZWdleCwgJycpO1xuICAgICAgfVxuXG4gICAgICAvKiBkZWxldGUgbW92ZSBudW1iZXJzICovXG4gICAgICBtcyA9IG1zLnJlcGxhY2UoL1xcZCtcXC4oXFwuXFwuKT8vZywgJycpO1xuXG4gICAgICAvKiBkZWxldGUgLi4uIGluZGljYXRpbmcgYmxhY2sgdG8gbW92ZSAqL1xuICAgICAgbXMgPSBtcy5yZXBsYWNlKC9cXC5cXC5cXC4vZywgJycpO1xuXG4gICAgICAvKiBkZWxldGUgbnVtZXJpYyBhbm5vdGF0aW9uIGdseXBocyAqL1xuICAgICAgbXMgPSBtcy5yZXBsYWNlKC9cXCRcXGQrL2csICcnKTtcblxuICAgICAgLyogdHJpbSBhbmQgZ2V0IGFycmF5IG9mIG1vdmVzICovXG4gICAgICB2YXIgbW92ZXMgPSB0cmltKG1zKS5zcGxpdChuZXcgUmVnRXhwKC9cXHMrLykpO1xuXG4gICAgICAvKiBkZWxldGUgZW1wdHkgZW50cmllcyAqL1xuICAgICAgbW92ZXMgPSBtb3Zlcy5qb2luKCcsJykucmVwbGFjZSgvLCwrL2csICcsJykuc3BsaXQoJywnKTtcbiAgICAgIHZhciBtb3ZlID0gJyc7XG5cbiAgICAgIGZvciAodmFyIGhhbGZfbW92ZSA9IDA7IGhhbGZfbW92ZSA8IG1vdmVzLmxlbmd0aCAtIDE7IGhhbGZfbW92ZSsrKSB7XG4gICAgICAgIG1vdmUgPSBtb3ZlX2Zyb21fc2FuKG1vdmVzW2hhbGZfbW92ZV0sIHNsb3BweSk7XG5cbiAgICAgICAgLyogbW92ZSBub3QgcG9zc2libGUhIChkb24ndCBjbGVhciB0aGUgYm9hcmQgdG8gZXhhbWluZSB0byBzaG93IHRoZVxuICAgICAgICAgKiBsYXRlc3QgdmFsaWQgcG9zaXRpb24pXG4gICAgICAgICAqL1xuICAgICAgICBpZiAobW92ZSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1ha2VfbW92ZShtb3ZlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBleGFtaW5lIGxhc3QgbW92ZSAqL1xuICAgICAgbW92ZSA9IG1vdmVzW21vdmVzLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKFBPU1NJQkxFX1JFU1VMVFMuaW5kZXhPZihtb3ZlKSA+IC0xKSB7XG4gICAgICAgIGlmIChoYXNfa2V5cyhoZWFkZXIpICYmIHR5cGVvZiBoZWFkZXIuUmVzdWx0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHNldF9oZWFkZXIoWydSZXN1bHQnLCBtb3ZlXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBtb3ZlID0gbW92ZV9mcm9tX3Nhbihtb3ZlLCBzbG9wcHkpO1xuICAgICAgICBpZiAobW92ZSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1ha2VfbW92ZShtb3ZlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIGhlYWRlcjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc2V0X2hlYWRlcihhcmd1bWVudHMpO1xuICAgIH0sXG5cbiAgICBhc2NpaTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gYXNjaWkoKTtcbiAgICB9LFxuXG4gICAgdHVybjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHVybjtcbiAgICB9LFxuXG4gICAgbW92ZTogZnVuY3Rpb24obW92ZSwgb3B0aW9ucykge1xuICAgICAgLyogVGhlIG1vdmUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRoIGluIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcbiAgICAgICAqXG4gICAgICAgKiAubW92ZSgnTnhiNycpICAgICAgPC0gd2hlcmUgJ21vdmUnIGlzIGEgY2FzZS1zZW5zaXRpdmUgU0FOIHN0cmluZ1xuICAgICAgICpcbiAgICAgICAqIC5tb3ZlKHsgZnJvbTogJ2g3JywgPC0gd2hlcmUgdGhlICdtb3ZlJyBpcyBhIG1vdmUgb2JqZWN0IChhZGRpdGlvbmFsXG4gICAgICAgKiAgICAgICAgIHRvIDonaDgnLCAgICAgIGZpZWxkcyBhcmUgaWdub3JlZClcbiAgICAgICAqICAgICAgICAgcHJvbW90aW9uOiAncScsXG4gICAgICAgKiAgICAgIH0pXG4gICAgICAgKi9cblxuICAgICAgLy8gYWxsb3cgdGhlIHVzZXIgdG8gc3BlY2lmeSB0aGUgc2xvcHB5IG1vdmUgcGFyc2VyIHRvIHdvcmsgYXJvdW5kIG92ZXJcbiAgICAgIC8vIGRpc2FtYmlndWF0aW9uIGJ1Z3MgaW4gRnJpdHogYW5kIENoZXNzYmFzZVxuICAgICAgdmFyIHNsb3BweSA9ICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Nsb3BweScgaW4gb3B0aW9ucykgP1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnNsb3BweSA6IGZhbHNlO1xuXG4gICAgICB2YXIgbW92ZV9vYmogPSBudWxsO1xuXG4gICAgICBpZiAodHlwZW9mIG1vdmUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG1vdmVfb2JqID0gbW92ZV9mcm9tX3Nhbihtb3ZlLCBzbG9wcHkpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbW92ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFyIG1vdmVzID0gZ2VuZXJhdGVfbW92ZXMoKTtcblxuICAgICAgICAvKiBjb252ZXJ0IHRoZSBwcmV0dHkgbW92ZSBvYmplY3QgdG8gYW4gdWdseSBtb3ZlIG9iamVjdCAqL1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbW92ZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBpZiAobW92ZS5mcm9tID09PSBhbGdlYnJhaWMobW92ZXNbaV0uZnJvbSkgJiZcbiAgICAgICAgICAgICAgbW92ZS50byA9PT0gYWxnZWJyYWljKG1vdmVzW2ldLnRvKSAmJlxuICAgICAgICAgICAgICAoISgncHJvbW90aW9uJyBpbiBtb3Zlc1tpXSkgfHxcbiAgICAgICAgICAgICAgbW92ZS5wcm9tb3Rpb24gPT09IG1vdmVzW2ldLnByb21vdGlvbikpIHtcbiAgICAgICAgICAgIG1vdmVfb2JqID0gbW92ZXNbaV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogZmFpbGVkIHRvIGZpbmQgbW92ZSAqL1xuICAgICAgaWYgKCFtb3ZlX29iaikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLyogbmVlZCB0byBtYWtlIGEgY29weSBvZiBtb3ZlIGJlY2F1c2Ugd2UgY2FuJ3QgZ2VuZXJhdGUgU0FOIGFmdGVyIHRoZVxuICAgICAgICogbW92ZSBpcyBtYWRlXG4gICAgICAgKi9cbiAgICAgIHZhciBwcmV0dHlfbW92ZSA9IG1ha2VfcHJldHR5KG1vdmVfb2JqKTtcblxuICAgICAgbWFrZV9tb3ZlKG1vdmVfb2JqKTtcblxuICAgICAgcmV0dXJuIHByZXR0eV9tb3ZlO1xuICAgIH0sXG5cbiAgICB1bmRvOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBtb3ZlID0gdW5kb19tb3ZlKCk7XG4gICAgICByZXR1cm4gKG1vdmUpID8gbWFrZV9wcmV0dHkobW92ZSkgOiBudWxsO1xuICAgIH0sXG5cbiAgICBjbGVhcjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gY2xlYXIoKTtcbiAgICB9LFxuXG4gICAgcHV0OiBmdW5jdGlvbihwaWVjZSwgc3F1YXJlKSB7XG4gICAgICByZXR1cm4gcHV0KHBpZWNlLCBzcXVhcmUpO1xuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uKHNxdWFyZSkge1xuICAgICAgcmV0dXJuIGdldChzcXVhcmUpO1xuICAgIH0sXG5cbiAgICByZW1vdmU6IGZ1bmN0aW9uKHNxdWFyZSkge1xuICAgICAgcmV0dXJuIHJlbW92ZShzcXVhcmUpO1xuICAgIH0sXG5cbiAgICBwZXJmdDogZnVuY3Rpb24oZGVwdGgpIHtcbiAgICAgIHJldHVybiBwZXJmdChkZXB0aCk7XG4gICAgfSxcblxuICAgIHNxdWFyZV9jb2xvcjogZnVuY3Rpb24oc3F1YXJlKSB7XG4gICAgICBpZiAoc3F1YXJlIGluIFNRVUFSRVMpIHtcbiAgICAgICAgdmFyIHNxXzB4ODggPSBTUVVBUkVTW3NxdWFyZV07XG4gICAgICAgIHJldHVybiAoKHJhbmsoc3FfMHg4OCkgKyBmaWxlKHNxXzB4ODgpKSAlIDIgPT09IDApID8gJ2xpZ2h0JyA6ICdkYXJrJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcblxuICAgIGhpc3Rvcnk6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHZhciByZXZlcnNlZF9oaXN0b3J5ID0gW107XG4gICAgICB2YXIgbW92ZV9oaXN0b3J5ID0gW107XG4gICAgICB2YXIgdmVyYm9zZSA9ICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3ZlcmJvc2UnIGluIG9wdGlvbnMgJiZcbiAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudmVyYm9zZSk7XG5cbiAgICAgIHdoaWxlIChoaXN0b3J5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV2ZXJzZWRfaGlzdG9yeS5wdXNoKHVuZG9fbW92ZSgpKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHJldmVyc2VkX2hpc3RvcnkubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgbW92ZSA9IHJldmVyc2VkX2hpc3RvcnkucG9wKCk7XG4gICAgICAgIGlmICh2ZXJib3NlKSB7XG4gICAgICAgICAgbW92ZV9oaXN0b3J5LnB1c2gobWFrZV9wcmV0dHkobW92ZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vdmVfaGlzdG9yeS5wdXNoKG1vdmVfdG9fc2FuKG1vdmUpKTtcbiAgICAgICAgfVxuICAgICAgICBtYWtlX21vdmUobW92ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtb3ZlX2hpc3Rvcnk7XG4gICAgfVxuXG4gIH07XG59O1xuXG4vKiBleHBvcnQgQ2hlc3Mgb2JqZWN0IGlmIHVzaW5nIG5vZGUgb3IgYW55IG90aGVyIENvbW1vbkpTIGNvbXBhdGlibGVcbiAqIGVudmlyb25tZW50ICovXG5pZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSBleHBvcnRzLkNoZXNzID0gQ2hlc3M7XG4vKiBleHBvcnQgQ2hlc3Mgb2JqZWN0IGZvciBhbnkgUmVxdWlyZUpTIGNvbXBhdGlibGUgZW52aXJvbm1lbnQgKi9cbmlmICh0eXBlb2YgZGVmaW5lICE9PSAndW5kZWZpbmVkJykgZGVmaW5lKCBmdW5jdGlvbiAoKSB7IHJldHVybiBDaGVzczsgIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==