import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { IG } from './game';
import grey from '@material-ui/core/colors/grey';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

interface IBoardState {
  currentColourId: number | null;
}
export class Board extends React.Component<IBoardProps, IBoardState> {
  constructor(props) {
    super(props);

    this.state = {
      currentColourId: null,
    }
  }

  selectColour = (id: number) => {
    this.setState({ currentColourId: id });
  }

  render() {
    const { ctx, G, gameArgs, moves } = this.props;
    return (
      <GameLayout
        gameArgs={gameArgs}>
        <div style={{backgroundColor: grey[200] }}>
        {G.attempts.map((attempt) => (
          <>
            {attempt.combination.map((combinationValue, position) => (
              <span key={position} style={{ display: 'inline-block', width: '50px', height: '50px', backgroundColor: combinationValue.hex}}>&nbsp;</span>
            ))}
            {attempt.hints.map((value, position) => (
              <span key={position} style={{ display: 'inline-block', width: '25px', height: '25px', backgroundColor: 'grey'}}>({value})</span>
            ))}
            <hr />
          </>
        ))}
        <hr />
        {G.colours.map((colour) => (
          <button key={colour.id} onClick={() => this.selectColour(colour.id)} style={{ width: '50px', height: '50px', backgroundColor: colour.hex}}>{colour.img}</button>
        ))}
        <hr />
        {G.current.map((currentValue, position) => (
          <button key={position} onClick={() => moves.setColourInPosition(this.state.currentColourId, position)} style={{ width: '50px', height: '50px', backgroundColor: currentValue && currentValue.hex || 'grey'}}>&nbsp;</button>
        ))}
        <button onClick={() => moves.check()}>confirm</button>
        </div>
      </GameLayout>
    );
  }
}
