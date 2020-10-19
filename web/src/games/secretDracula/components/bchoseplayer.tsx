import React from 'react';

interface InnerWrapper {
  names: string[];

  chose(id: number): any;
}

export class BChosePlayer extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              {this.props.names.map((name: string, index: number) => {
                return (
                  <td
                    onClick={() => {
                      this.props.chose(index);
                    }}
                  >
                    {name}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
