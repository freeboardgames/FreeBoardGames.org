import React from 'react';
import PropTypes from 'prop-types';

import { Radar } from './Radar';
import { ISeabattleState, IShip, ISalvo, ICell } from './game';

interface IBattleProps {
  G: ISeabattleState;
  ctx: any;
  moves: any;
  playerID: string;
  currentPlayer: string;
}

interface IBattleState {
  G: ISeabattleState;
  playerID: string;
  currentPlayer: string;
  showSalvo: boolean;
  prevPlayer?: string;
  startTime?: number;
  salvo?: ISalvo;
}

export class Battle extends React.Component<IBattleProps, IBattleState> {

  constructor(props: IBattleProps) {
    super(props);
    this.state = {
      G: props.G,
      playerID: props.playerID,
      currentPlayer: props.currentPlayer,
      showSalvo: false,
    };
  }
  _onClick = (cell: ICell) => {
    const uniqueMove = this.state.G.salvos.filter((salvo) => (
      salvo.player === parseInt(this.state.currentPlayer, 10) &&
      salvo.cell.x === cell.x &&
      salvo.cell.y === cell.y),
    ).length === 0;
    if (uniqueMove) {
      this.props.moves.salvo(cell.x, cell.y);
    }
  }

  componentDidUpdate(prevProps: IBattleProps) {
    if (prevProps.currentPlayer !== this.props.currentPlayer) {
      this.setState({
        G: this.props.G,
        playerID: this.props.playerID,
        currentPlayer: this.props.currentPlayer,
        showSalvo: true,
        prevPlayer: prevProps.currentPlayer,
        startTime: Date.now(),
        salvo: this.props.G.salvos[this.props.G.salvos.length - 1],
      });
      requestAnimationFrame(this._animate(Date.now()));
    }
  }

  render() {
    const player = parseInt((this.state.showSalvo) ? this.state.prevPlayer : this.state.currentPlayer, 10);
    const ships: IShip[] = this.state.G.ships.filter((ship) => ship.player !== player);
    const salvos: ISalvo[] = this.state.G.salvos.filter(
      (salvo: ISalvo) => salvo.player === player,
    );
    const message = this._getMessage();
    return (
      <div>
        {message}
        <Radar
          player={player}
          ships={ships}
          salvos={salvos}
          editable={false}
          blinkSalvo={this.state.showSalvo}
          onClick={this._onClick}
        />
      </div>
    );
  }

  _getMessage() {
    if (this.props.ctx.gameover) {
      return null;
    }
    let text;
    if (this.state.showSalvo) {
      text = (this.state.salvo.hit) ? 'HIT' : 'MISS';
    } else if (this.state.playerID === this.state.currentPlayer) {
      text = 'CLICK TO SHOOT';
    } else {
      text = 'Waiting for opponent...';
    }
    return (<h2 style={{ textAlign: 'center' }}>{text}</h2>);
  }

  _animate(now: number) {
    return (() => {
      const elapsed = now - this.state.startTime;
      if (elapsed < 2e3) {
        requestAnimationFrame(this._animate(Date.now()));
      } else {
        this.setState({
          ...this.state,
          showSalvo: false,
        });
      }
    }).bind(this);
  }
}
