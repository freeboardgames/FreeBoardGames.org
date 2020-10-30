import React from 'react';

interface InnerWrapper {
  name: string;
  vampire: boolean;
  iInvestigate: boolean;

  finish(): any;
}

export class BShowPlayer extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              {this.props.iInvestigate ? (
                <td>
                  <p> {this.props.vampire ? '🩸' : '💧'} </p>
                </td>
              ) : (
                <></>
              )}
              <td>
                <p> {this.props.name} </p>
              </td>
              {this.props.iInvestigate ? (
                <td>
                  <p onClick={() => this.props.finish()}> 👍 </p>
                </td>
              ) : (
                <></>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
