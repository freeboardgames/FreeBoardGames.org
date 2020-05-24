import React from 'react';
import { BHintIcon } from './bhinticon';

interface InnerWrapper {
  onHintValue(nr: number): any;
  onHintColor(nr: number): any;

  myTurn: boolean;
  keyPropagation: string;
}

const Values = [0, 1, 2, 3, 4];

let buttonStyle = {
  background: 'none',
  border: '0',
  padding: '0',
};

let gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '5px',
};

export class BButtons extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div style={gridStyle}>
        {Values.map((value: number) => {
          if (this.props.myTurn) {
            return (
              <>
                <button
                  onClick={() => {
                    this.props.onHintValue(value);
                  }}
                  style={buttonStyle}
                >
                  <BHintIcon
                    hintIcon={{ color: -1, value }}
                    keyPropagation={this.props.keyPropagation + 'BButtonValue' + value.toString()}
                  ></BHintIcon>
                </button>
                <button
                  onClick={() => {
                    this.props.onHintColor(value);
                  }}
                  style={buttonStyle}
                >
                  <BHintIcon
                    hintIcon={{ color: value, value: -1 }}
                    keyPropagation={this.props.keyPropagation + 'BButtonColor' + value.toString()}
                  ></BHintIcon>
                </button>
              </>
            );
          }
        })}
      </div>
    );
  }
}
