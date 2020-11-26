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
        {this.props.iInvestigate ? <span> {this.props.vampire ? '🩸' : '💧'} </span> : <> ❔ </>}
        <span> {this.props.name} </span>
        {this.props.iInvestigate ? <span onClick={() => this.props.finish()}> 🆗 </span> : <></>}
      </div>
    );
  }
}
