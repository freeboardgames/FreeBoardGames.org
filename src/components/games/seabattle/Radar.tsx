import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Grid } from 'boardgame.io/ui';
import { Token } from 'boardgame.io/ui';

export interface IColorMap {
  [key: string]: string;
}
interface IRadarProps {
  style: React.CSSProperties;
}
export class Radar extends React.Component<any, any> {
  static propTypes = {
    style: PropTypes.object,
  };
  static defaultProps = {
    style: {},
  };

  render() {
    const colorMap = {} as IColorMap;
    for (let x = 0; x < 10; x++) {
      for (let y = 0; y < 10; y++) {
        const key = `${x},${y}`;
        colorMap[key] = 'black';
      }
    }
    const noop = () => {
      return;
    };
    return (
      <div className="seabattle-radar">
        <Grid
          rows={10}
          cols={10}
          outline={true}
          style={this.props.style}
          colorMap={colorMap}
          onClick={noop}
        >
          <Token x={4} y={1} />
        </Grid>
      </div>
    );
  }
}
