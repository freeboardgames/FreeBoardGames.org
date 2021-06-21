import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withCurrentGameTranslation, WithCurrentGameTranslation } from 'infra/i18n';
import React from 'react';
import { compose } from 'recompose';
import { generateRandomShips, IShip, validateShips } from './game';
import { Radar } from './Radar';

interface IShipsPlacementInnerProps extends WithCurrentGameTranslation {}

interface IShipsPlacementOutterProps {
  playerID: string;
  setShips: (ships: IShip[]) => void;
}

interface IShipsPlacementState {
  ships: IShip[];
}

export class ShipsPlacementInternal extends React.Component<
  IShipsPlacementInnerProps & IShipsPlacementOutterProps,
  IShipsPlacementState
> {
  constructor(props: IShipsPlacementInnerProps & IShipsPlacementOutterProps) {
    super(props);
    this.state = { ships: generateRandomShips(Number(props.playerID)) };
  }

  render() {
    let message = this.props.translate('drag_drop_click_to_rotate');
    const validShips = validateShips(this.state.ships).valid;
    if (!validShips) {
      message = this.props.translate('invalid_positioning');
    }
    return (
      <div>
        <Typography variant="h5" style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}>
          {message}
        </Typography>
        <Radar ships={this.state.ships} editable={true} onEdit={this.onEdit} />
        <Button
          style={{ float: 'right', marginTop: '8px' }}
          variant="contained"
          color="primary"
          onClick={this.done}
          disabled={!validShips}
        >
          {this.props.translate('done')}
        </Button>
      </div>
    );
  }

  onEdit = (ships: IShip[]) => {
    this.setState({
      ships,
    });
  };

  done = () => {
    this.props.setShips(this.state.ships);
  };
}

const enhance = compose<IShipsPlacementInnerProps, IShipsPlacementOutterProps>(withCurrentGameTranslation);
export const ShipsPlacement = enhance(ShipsPlacementInternal);
