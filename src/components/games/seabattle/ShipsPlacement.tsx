import * as React from 'react';
import * as PropTypes from 'prop-types';

import { IShip, generateRandomShips } from './game';
import { Radar } from './Radar';

interface IShipsPlacementProps {
  playerID: string;
  setShips: (ships: IShip[]) => void;
}

interface IShipsPlacementState {
  ships: IShip[]
}

export class ShipsPlacement extends React.Component<IShipsPlacementProps, IShipsPlacementState> {
  static propTypes = {
    playerID: PropTypes.string.isRequired,
    setShips: PropTypes.any,
  };
  constructor(props: IShipsPlacementProps) {
    super(props);
    this.state = {ships: generateRandomShips(Number(props.playerID))};
  }

  render() {
    // TODO: Allow user to move pre-positioned ships. Show "OK" button only if valid positioning.
    // TODO: Show red in the UI if invalid positioning. Allow drag and drop of ships with two clicks.
    // TODO: Allow rotation of ships with double click.
    return (
      <Radar
        ships={this.state.ships} 
      />
    );
  }
}
