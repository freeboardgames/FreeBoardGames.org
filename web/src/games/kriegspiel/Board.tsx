import React, { useRef, useState } from 'react';
import { BoardProps } from 'boardgame.io/react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameMode } from 'gamesShared/definitions/mode';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import * as Game from './Game';
import {
  objTypeList,
  strongholdTypeList,
  BoardSize,
  CellID,
  P_ID,
  GameState,
  ObjInstance,
  canPick,
  canAttack,
  canPut,
  CId2Pos,
  dualPlayerID,
  getBattleFactor,
  getChargedCavalries,
  getDirSuppliedLines,
  getSuppliedCells,
  exportGame,
} from './Game';

import { useGesture } from '@use-gesture/react';

interface GameProps extends BoardProps<GameState> {}

interface OutterProps {
  gameArgs?: IGameArgs;
  step?: any;
}

export const Board = ({ G, ctx, moves, isActive, events, ...props }: GameProps & OutterProps) => {
  const myID = (props.playerID !== null ? props.playerID : ctx.currentPlayer) as P_ID;
  const opponentID = dualPlayerID(myID);
  const currentPlayer = ctx.currentPlayer as P_ID;
  const [pickedID, pickUpID] = useState<CellID | null>(null);
  const editMode = ctx.activePlayers?.[myID] === 'edition';
  const opEditMode = ctx.activePlayers?.[opponentID] === 'edition';

  function pickedData(pId: CellID | null) {
    if (pId !== null && canPick(G, ctx, pId) && isActive) {
      return G.cells[pId];
    } else {
      return null;
    }
  }

  function myOnClick(id: CellID) {
    if (editMode) {
      if (editState !== null) {
        if (editState < 6) {
          const obj = G.cells[id] ? null : Game.newPiece(objTypeList[editState], editFiction);
          moves.editCells(id, obj);
        } else {
          const state = editState - 6;
          //only arsenal has fiction
          const fiction = state ? null : editFiction;
          const str = G.places[id] ? null : Game.newStronghold(strongholdTypeList[state], fiction);
          moves.editPlaces(id, str);
        }
      }
    } else {
      switch (pickedID) {
        case null:
          pickUpID(id);

          break;
        case id:
          if (canAttack(G, ctx, id)[0]) {
            moves.attack(id);
          }
          pickUpID(null);
          break;
        default:
          if (pickedData(pickedID) !== null) {
            pickUpID(null);
            moves.movePiece(pickedID, id);
          } else {
            pickUpID(id);
          }
      }
    }
  }

  function isAvailable(id: CellID) {
    if (!isActive) return false;
    else if (pickedID !== null && pickedData(pickedID) !== null && canPut(G, ctx, pickedID, id)) return true;
  }

  function getCellColor(id: CellID) {
    const strongholdColor = G.places[id]?.belong;
    if (id === pickedID) {
      return pico8Palette.dark_purple;
    } else if (isAvailable(id)) {
      //predict supply after moving
      if (
        getSuppliedCells(
          {
            ...G,
            cells: G.cells.map((obj, CId) => (CId === pickedID ? null : CId === id ? pickedData(pickedID) : obj)),
          },
          currentPlayer,
        ).includes(id)
      ) {
        return pico8Palette.green;
      } else {
        return pico8Palette.yellow;
      }
    } else if (typeof strongholdColor === 'string') {
      return fictionColor(strongholdColor);
    } else {
      const pos = CId2Pos(id);
      const colorCase = (pos.x + pos.y) % 2 === 0;
      return colorCase ? pico8Palette.light_grey : pico8Palette.white;
    }
  }

  function renderBattleEffect(CId: CellID, selected: boolean) {
    const obj = G.cells[CId];
    let result: JSX.Element[] = [];
    if (obj) {
      const belong = obj.belong;
      const [off, offLst] = getBattleFactor(G, dualPlayerID(belong), true, CId);
      const [def, defLst] = getBattleFactor(G, belong, false, CId);
      const relDef = def - off;
      //show the detailed info for selected cell, otherwise only cell in danger
      if (selected) {
        result = result.concat(
          offLst
            .map((id) => gTranslate(renderStr('⚔️', 0.4), CId2Pos(id).x - 0.3, CId2Pos(id).y - 0.3))
            .concat(defLst.map((id) => gTranslate(renderStr('🛡️', 0.4), CId2Pos(id).x - 0.3, CId2Pos(id).y - 0.3))),
        );
      }
      if (relDef < 0) {
        result = result.concat(
          gTranslate(renderStr(defState(relDef), 0.4), CId2Pos(CId).x + 0.3, CId2Pos(CId).y - 0.3),
        );
      }
      return result;
    }
  }

  function drawOneSupplyLine(line: CellID[], pId: P_ID) {
    {
      const offset = pId === '0' ? -0.05 : 0.05;
      return (
        line.length > 1 &&
        gTranslate(drawLine(line[0], line[line.length - 1], fictionColor(pId), 0.05, '0.4, 0.1'), offset, offset)
      );
    }
  }

  //draw all 8 direction supply lines form one point
  function draw8DirSupplyLines(lines: CellID[][], pId: P_ID) {
    return lines.map((line) => drawOneSupplyLine(line, pId));
  }

  function drawAllSupplyLines(pId: P_ID) {
    //get all supply lines groups from different points
    return getDirSuppliedLines(G, pId)[1].flatMap((lines) => draw8DirSupplyLines(lines, pId));
  }

  const boardRef = useRef(null);

  //map move ui
  const [mapPos, setMapPos] = useState<Game.Position>({ x: 0, y: 0 });
  const [mapScale, setMapScale] = useState<number>(1);

  useGesture(
    {
      onDrag: (state) => {
        const e = state.event;
        const svg = e.target as SVGAElement;
        const CTM = svg.getScreenCTM();
        if (CTM) {
          const move = state.offset;
          const dx = move[0] / CTM.a;
          const dy = move[1] / CTM.d;
          setMapPos({ x: dx, y: dy });
        }
      },
      onWheel: (state) => {
        const evt = state.event;
        evt.preventDefault();
        const spd = 0.0007;

        const newScale = mapScale * (1 - spd * state.movement[1]);

        setMapScale(newScale);
      },
      onPinch: (state) => {
        const newScale = state.offset[0];

        setMapScale(newScale);
      },
    },
    {
      target: boardRef,
      eventOptions: { passive: false },
      preventDefault: true,
    },
  );

  //render Main board

  const gameBoard = (
    <svg viewBox={`-0.6 -0.6 ${BoardSize.mx + 1.2} ${BoardSize.my + 1.2}`} ref={boardRef}>
      <g
        transform={`translate(${BoardSize.mx / 2} ${BoardSize.my / 2})  scale(${mapScale}) translate(${
          mapPos.x - BoardSize.mx / 2
        } ${mapPos.y - BoardSize.my / 2})`}
      >
        <rect
          x={-0.6}
          y={-0.6}
          width="100%"
          height="100%"
          fill={pico8Palette.light_peach}
          stroke={pico8Palette.dark_grey}
          strokeWidth="0.05"
        />
        {/* background */}
        {/* 4 border */}
        {Array(BoardSize.mx)
          .fill(null)
          .map((_, id) => gTranslate(renderStr((id + 1).toString()), id, -0.8))}
        {Array(BoardSize.my)
          .fill(null)
          .map((_, id) => gTranslate(renderStr(String.fromCharCode(65 + id)), -0.8, id))}
        {Array(BoardSize.mx)
          .fill(null)
          .map((_, id) => gTranslate(renderStr((id + 1).toString()), id, BoardSize.my - 1 + 0.8))}
        {Array(BoardSize.my)
          .fill(null)
          .map((_, id) => gTranslate(renderStr(String.fromCharCode(65 + id)), BoardSize.mx - 1 + 0.8, id))}
        {/* cells */}
        {renderLayer((_, id) => (
          <rect
            key={id}
            width="1"
            height="1"
            fill={getCellColor(id)}
            stroke={pico8Palette.dark_grey}
            strokeWidth="0.05"
          />
        ))}
        {/* middle line */}
        <line
          x1="0"
          y1={BoardSize.my / 2}
          x2={BoardSize.mx}
          y2={BoardSize.my / 2}
          stroke={pico8Palette.lavender}
          strokeWidth="0.2"
        />
        {/* supply line */}

        {drawAllSupplyLines('0')}
        {drawAllSupplyLines('1')}

        {/* stronghold */}
        {renderLayer(
          (stronghold) => (
            <>{stronghold && renderStr(stronghold.placeRender, 1)}</>
          ),
          G.places,
        )}
        {/* move indication */}
        {G.moveRecords['0'].map(([st, ed]) => drawLine(st, ed, pico8Palette.dark_blue, 0.5, '0.3, 0.1'))}
        {G.moveRecords['1'].map(([st, ed]) => drawLine(st, ed, pico8Palette.brown, 0.5, '0.3, 0.1'))}

        {/* piece */}
        {renderLayer(
          (obj) => (
            <>{obj && renderPiece(obj)}</>
          ),
          G.cells,
        )}
        {/* attack */}
        {[G.attackRecords['0'], G.attackRecords['1']].map(
          (atk) => atk !== null && gTranslate(renderStr('💥', 0.7), CId2Pos(atk[0]).x, CId2Pos(atk[0]).y),
        )}
        {/* charge */}
        {renderLayer(
          (obj, id) => (
            <>
              {obj &&
                getChargedCavalries(G, id).map((chargeRow) =>
                  chargeRow.map((pos, id, row) =>
                    gTranslate(renderStr('⚡'), pos.x - 0.5 * row[0].x, pos.y - 0.5 * row[0].y),
                  ),
                )}
            </>
          ),
          G.cells,
        )}
        {/* battle info indication */}
        {G.cells.map((_, id) => (
          <>{renderBattleEffect(id, id === pickedID)}</>
        ))}
        {/* control */}
        {renderLayer((_, id) => (
          <rect cursor="pointer" onClick={() => myOnClick(id)} width="1" height="1" fillOpacity="0" />
        ))}
      </g>
    </svg>
  );

  //render Battle info UI
  function battleFactorTable(id: CellID | null) {
    const nonNull = id !== null;
    const MyOff = nonNull ? getBattleFactor(G, myID, true, id)[0] : 0;
    const MyDef = nonNull ? getBattleFactor(G, myID, false, id)[0] : 0;
    const EnemyDef = nonNull ? getBattleFactor(G, opponentID, false, id)[0] : 0;
    const EnemyOff = nonNull ? getBattleFactor(G, opponentID, true, id)[0] : 0;
    const RelOff = MyOff - EnemyDef;
    const RelDef = MyDef - EnemyOff;
    const obj = nonNull ? G.cells[id] : null;
    const myOffTd = (
      <td style={{ backgroundColor: fictionColor(myID) }}>
        MyAtk: {MyOff} {offState(RelOff)}
      </td>
    );
    const myDefTd = (
      <td style={{ backgroundColor: fictionColor(myID) }}>
        MyDef: {MyDef} {defState(RelDef)}
      </td>
    );
    const eDefTd = (
      <td style={{ backgroundColor: fictionColor(opponentID) }}>
        EnemyDef: {EnemyDef} {defState(-RelOff)}
      </td>
    );
    const eOffTd = (
      <td style={{ backgroundColor: fictionColor(opponentID) }}>
        EnemyAtk: {EnemyOff} {offState(-RelDef)}
      </td>
    );

    return (
      <table>
        {obj?.belong === opponentID ? (
          <>
            <tr>
              {eDefTd}
              {myOffTd}
            </tr>
            <tr>
              {eOffTd}
              {myDefTd}
            </tr>
          </>
        ) : (
          <>
            <tr>
              {myDefTd}
              {eOffTd}
            </tr>
            <tr>
              {myOffTd}
              {eDefTd}
            </tr>
          </>
        )}
      </table>
    );
  }
  function offState(n: number) {
    if (n > 0) return '⚔️';
    else return '';
  }
  function defState(n: number) {
    if (n >= 0) return '🛡️';
    else if (n === -1) return '🏃‍♂️';
    else return '💀';
  }

  const sideBarPlay = (
    <div id="PlayUI">
      {/* how many units left */}

      <p>
        <label>Over All:</label>
        <br />
        {spanBGColor(
          <>
            {objTypeList.map((type) => {
              const num = Game.filterCId(G.cells, (obj) => obj.typeName === type && obj.belong === myID).length;
              return Game.objDataList[type].objRender + num;
            })}
          </>,
          fictionColor(myID),
        )}
        <br />
        {spanBGColor(
          <>
            {objTypeList.map((type) => {
              const num = Game.filterCId(G.cells, (obj) => obj.typeName === type && obj.belong === opponentID).length;
              return Game.objDataList[type].objRender + num;
            })}
          </>,
          fictionColor(opponentID),
        )}
      </p>

      {/* turn info */}
      <p>
        {spanBGColor(<>It is {currentPlayer === myID ? 'my' : "opponent's"} turn.</>, fictionColor(currentPlayer))}
        <button disabled={!isActive} onClick={props.undo}>
          Undo
        </button>
        <button
          disabled={!isActive}
          onClick={() => {
            events.endTurn && events.endTurn();
          }}
        >
          End Turn
        </button>
      </p>

      {/* action info */}
      <label title="Click below to undo.">My Moves and Attack:</label>
      <svg viewBox="-0.1 -0.1 6.2 1.2" onClick={props.undo} cursor="pointer">
        {renderLayer((_, id) => {
          const moveEdRec = G.moveRecords[myID].map((p) => p[1]);
          const atk = G.attackRecords[myID];
          if (id < 5) {
            const edCId = moveEdRec[id];
            const edObj = G.cells[edCId];
            //render moved pieces, if attacked, then can not move anymore
            return (
              <>
                <rect
                  width="1"
                  height="1"
                  fill={pico8Palette.light_peach}
                  stroke={pico8Palette.dark_grey}
                  strokeWidth="0.05"
                />

                {edObj ? renderPiece(edObj) : atk ? renderStr('❌') : null}
              </>
            );
          } else {
            return (
              <>
                <rect width="1" height="1" fill={pico8Palette.red} stroke={pico8Palette.dark_grey} strokeWidth="0.05" />
                {atk && (atk[1] === 'Arsenal' ? renderStr('🎪') : renderPiece(atk[1]))}
              </>
            );
          }
        }, Array(6).fill(null))}
      </svg>
      {/* retreat info */}
      {G.forcedRetreat[currentPlayer][0] !== null && <p>🏃‍♂️💥 I must retreat my unit from attack first.</p>}

      {/* chosen piece info */}

      <p>
        Chosen Unit{' '}
        {pickedID !== null &&
          ((id) => {
            const obj = G.cells[id];
            const str = G.places[id];
            const pos = CId2Pos(pickedID);

            return (
              <>
                {' '}
                at {pos.x + 1}
                {String.fromCharCode(65 + pos.y)}:{' '}
                {obj && (
                  <>
                    {spanBGColor(
                      <>
                        {obj.objRender + obj.typeName},<br />
                        <span title="Attack">⚔️: {obj.objType === 'Cavalry' ? '4(+3)' : obj.offense} </span>
                        <span title="Defense">🛡️: {obj.defense} </span>
                        <span title="Range">🎯: {obj.range} </span>
                        <span title="Speed">🐴: {obj.speed} </span>
                      </>,
                      fictionColor(obj.belong),
                    )}
                    <br />
                    <button
                      disabled={!(isActive && canAttack(G, ctx, pickedID)[0])}
                      onClick={() => {
                        pickUpID(null);
                        moves.attack(pickedID);
                      }}
                    >
                      💥Attack!
                    </button>
                  </>
                )}
                {str && (
                  <>
                    <br />
                    {spanBGColor(
                      <>
                        {str.placeRender + str.placeType}
                        {str.defenseAdd > 0 ? (
                          <>
                            , <span title="Additional Defense"> 🛡️+: {str.defenseAdd} </span>{' '}
                          </>
                        ) : (
                          ''
                        )}
                      </>,
                      str.belong ? fictionColor(str.belong) : '',
                    )}{' '}
                  </>
                )}
              </>
            );
          })(pickedID)}
      </p>

      {/* battle factor */}
      {battleFactorTable(pickedID)}
    </div>
  );
  // editor
  const [gameData, setGameData] = useState<string>('');
  const [editState, setEditState] = useState<CellID | null>(null);
  const [editFiction, setEditFiction] = useState<P_ID>(myID);

  function editorClick(id: CellID) {
    switch (editState) {
      case null:
        setEditState(id);
        break;
      case id:
        setEditState(null);
        break;
      default:
        setEditState(id);
    }
  }
  function editorCells(id: number, render: string) {
    return (
      <g
        cursor="pointer"
        onClick={() => {
          editorClick(id);
        }}
      >
        <rect
          width="0.9"
          height="0.9"
          x="0.05"
          y="0.05"
          fill={fictionColor(editFiction)}
          stroke={id === editState ? pico8Palette.red : pico8Palette.dark_grey}
          strokeWidth={id === editState ? 0.15 : 0.05}
        />
        {renderStr(render)}
      </g>
    );
  }

  const sideBarEdit = (
    <div id="EditUI">
      {/* Editor */}
      <div>
        <svg viewBox="-0.1 -0.2 6.2 2.2">
          {renderLayer((type, id) => editorCells(id, Game.objDataList[type].objRender), objTypeList)}
          {gTranslate(
            renderLayer((type, oid) => editorCells(oid + 6, Game.renderPlaceByType(type)[0]), strongholdTypeList),
            0,
            1,
          )}
        </svg>
        <input
          type="button"
          value="Change Color"
          onClick={() => {
            setEditFiction(dualPlayerID(editFiction));
          }}
        />
        <input type="button" value="Reset Board" onClick={() => moves.load(Game.onlyMap)} />
      </div>
      {/* Game Data */}
      <form>
        <label>GameData:</label>
        <textarea
          name="gameData"
          id="gameData"
          rows={10}
          style={{ width: '90%', height: '60%', resize: 'vertical' }}
          value={gameData}
          onChange={(e) => setGameData(e.target.value)}
        ></textarea>

        <input type="button" value="Export Game" onClick={() => setGameData(exportGame(G))} />
        <input type="button" value="Load Game" onClick={() => moves.load(gameData)} />
        <input type="button" value="Merge Game" onClick={() => moves.merge(gameData)} />
        <input
          type="button"
          value="Copy Data"
          onClick={() => {
            // Get the text field
            const copyText = document.getElementById('gameData') as HTMLInputElement;
            // Select the text field
            copyText.select();
            copyText.setSelectionRange(0, 99999); // For mobile devices
            // Copy the text inside the text field
            navigator.clipboard.writeText(gameData);
          }}
        />
        <input type="button" value="Remove Data" onClick={() => setGameData('')} />
      </form>
    </div>
  );

  //get winner
  function getWinner() {
    if (ctx.gameover) {
      const result = ctx.gameover.winner === '0' ? 'Blue' : 'Orange';
      return `The winner is ${result} Player`;
    } else {
      return null;
    }
  }
  const winner = getWinner();

  // render all

  if (winner) {
    return <GameLayout gameOver={winner} gameArgs={props.gameArgs} />;
  } else {
    return (
      <GameLayout maxWidth="100%" gameArgs={props.gameArgs}>
        <div
          style={{
            height: 'auto',
            color: 'black',
            fontFamily: "'Lato', sans-serif",
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              maxHeight: '100vh',
              minWidth: '55vw',
              flex: '4',
              maxWidth: '122vh',
              border: `2px solid ${pico8Palette.dark_green}`,
              backgroundColor: `${pico8Palette.white}`,
              touchAction: 'none',
            }}
          >
            {/* svg Game Board */}
            {gameBoard}
          </div>

          {/* info UI */}
          <div
            style={{
              minWidth: '250px',
              flex: '1',
              maxWidth: '100vw',
              border: `2px solid ${pico8Palette.dark_green}`,
              backgroundColor: `${pico8Palette.white}`,
            }}
          >
            {editMode ? sideBarEdit : sideBarPlay}

            <p>
              {opEditMode && (
                <>
                  Other player is editing.
                  <br />
                </>
              )}
              More information <a href="https://github.com/iamcxds/kriegspiel">here</a>.{' '}
              <input
                type="button"
                value="Edit Mode"
                onClick={() => {
                  if (!editMode) {
                    if (props.gameArgs.mode === GameMode.OnlineFriend) {
                      events.setActivePlayers({ all: 'edition' });
                    } else {
                      events.setStage('edition');
                    }
                  } else {
                    events.endStage();
                  }
                }}
              />
            </p>
          </div>
        </div>
      </GameLayout>
    );
  }
};

function renderLayer<T>(
  objRender: (a: T, b: CellID) => JSX.Element | JSX.Element[],
  objLst: readonly T[] = Array(BoardSize.mx * BoardSize.my).fill(null),
) {
  return objLst.map((obj, id) => {
    const pos = CId2Pos(id);
    return gTranslate(objRender(obj, id), pos.x, pos.y);
  });
}
function renderPiece(obj: ObjInstance) {
  return (
    <>
      {
        <circle
          cx="0.5"
          cy="0.5"
          r="0.4"
          stroke={pico8Palette.dark_grey}
          strokeWidth="0.05"
          fill={fictionColor(obj.belong)}
        />
      }
      {renderStr(obj.objRender)}
      {!obj.supplied && renderStr('😅', 0.4)}
      {obj.retreating && renderStr('🏃‍♂️', 0.4)}
    </>
  );
}
function renderStr(str: string, size: number = 0.5) {
  return (
    <text fontSize={`${size}`} x="0.5" y="0.5" dominantBaseline="middle" textAnchor="middle">
      {str}
    </text>
  );
}

function gTranslate(jsx: JSX.Element | JSX.Element[], x = 0, y = 0) {
  return <g transform={`translate(${x} ${y})`}>{jsx}</g>;
}

function drawLine(stCId: CellID, edCId: CellID, color: string = 'black', width: number = 0.1, dash: string = '') {
  const stPos = CId2Pos(stCId);
  const edPos = CId2Pos(edCId);
  return (
    <line
      x1={stPos.x + 0.5}
      y1={stPos.y + 0.5}
      x2={edPos.x + 0.5}
      y2={edPos.y + 0.5}
      stroke={color}
      strokeWidth={width}
      strokeDasharray={dash}
    />
  );
}

function spanBGColor(jsx: JSX.Element | JSX.Element[], color: string) {
  return <span style={{ backgroundColor: color, whiteSpace: 'normal' }}>{jsx}</span>;
}

function fictionColor(pID: P_ID) {
  switch (pID) {
    case '0':
      return pico8Palette.blue;
    case '1':
      return pico8Palette.orange;
  }
}

const pico8Palette = {
  black: '#00000',
  dark_blue: '#1d2b53',
  dark_purple: '#7e2553',
  dark_green: '#008751',
  brown: '#ab5236',
  dark_grey: '#5f574f',
  light_grey: '#c2c3c7',
  white: '#fff1e8',
  red: '#ff004d',
  orange: '#ffa300',
  yellow: '#ffec27',
  green: '#00e436',
  blue: '#29adff',
  lavender: '#83769c',
  pink: '#ff77a8',
  light_peach: '#ffccaa',
};
