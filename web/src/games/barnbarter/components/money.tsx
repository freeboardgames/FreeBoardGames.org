import * as React from 'react';
import { IMoney } from '../definitions';

interface InnerWrapper {
  clickPay: any;
  moneys: IMoney[];
  key: string;
}

export class BMoney extends React.Component<InnerWrapper, {}> {
  state = {
    selected: Array(this.props.moneys.length).fill(0),
  };

  render() {
    return (
      <table>
        <tbody>
          <tr>
            {this.props.moneys.map((money, index) => {
              return (
                <td key={this.props.key + '_' + index}>
                  <div
                    style={this.state.selected[index] == 0 ? { color: 'white' } : { color: 'red' }}
                    onClick={() => {
                      this._click(index);
                    }}
                  >
                    |🪙{money.value !== -1 ? money.value : ' ?'}|
                  </div>
                </td>
              );
            })}
            <td
              onClick={() => {
                this.props.clickPay(getAllIndexes(this.state.selected, 1));
              }}
            >
              |PAY|
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  _click(index: number) {
    //TODO: Make sure this only works appropriatley

    let selected = this.state.selected;
    selected[index] += 1;
    selected[index] %= 2;
    this.setState({ selected: selected });
    return;
  }
}
function getAllIndexes(arr, val) {
  var indexes = [],
    i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i);
  }
  return indexes;
}
