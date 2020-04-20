import React from 'react';
import { BHintIcon } from './bhinticon';

interface InnerWrapper {
    onHintValue(nr: number): any
    onHintColor(nr: number): any

    myTurn: boolean;
    keyPropagation: string;
}

const Values = [0, 1,2,3,4]

let buttonStyle = {
  background: 'none',
  border: '0',
  padding: '0'
}

export class BButtons extends React.Component< InnerWrapper, {} > {
    render() {

        return (
            <div>
                <table>
                    <tbody>
                        {
                            Values.map( (value: number) => {
                                if (this.props.myTurn){
                                    return (<tr key={this.props.keyPropagation + "BButton" + value.toString()}>
                                        <th>
                                          <button
                                            onClick={() => {this.props.onHintValue(value)}}
                                            style={buttonStyle}
                                            >
                                            <BHintIcon
                                              hintIcon={{color: -1, value}}
                                              keyPropagation={this.props.keyPropagation + "BButton" + value.toString()}
                                              ></BHintIcon>
                                          </button>
                                        </th>
                                        <th>
                                          <button
                                            onClick={() => {this.props.onHintColor(value)}}
                                            style={buttonStyle}
                                            > 
                                            <BHintIcon
                                              hintIcon={{color: value, value: -1}}
                                              keyPropagation={this.props.keyPropagation + "BButton" + value.toString()}
                                              ></BHintIcon>
                                          </button>
                                        </th>
                                    </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
