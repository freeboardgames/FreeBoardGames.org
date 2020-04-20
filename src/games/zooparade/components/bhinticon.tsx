import React from 'react';
import { IHintIcon } from '../interfaces';

interface InnerWrapper {
    hintIcon: IHintIcon;

    keyPropagation: string;
}

const colors = ['#80b28e',
                 '#beb7a3',
                 '#a38c49',
                 '#f2f47d',
                 '#9bcbee']

export class BHintIcon extends React.Component< InnerWrapper, {}> {
    render() {
        return (
            <div
              style={{
                      height: '15px',
                      width: '15px',
                      display: 'inline-block',
                      boxSizing: 'border-box',
                      overflow: 'hidden',
                      border: '2.5px solid #572511',
                      borderRadius: '10%',
                      backgroundColor: this.props.hintIcon.color !== -1 ?
                        colors[this.props.hintIcon.color] : 'black',
                      fontSize: '0.8em',
                      lineHeight: '0.9'
                }}
              key={this.props.keyPropagation}
              >
                {(this.props.hintIcon.value !== -1) ? this.props.hintIcon.value : " "}
            </div>
        )
    }
}
