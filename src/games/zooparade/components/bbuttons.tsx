import React from 'react';

interface InnerWrapper {
    onHintValue(nr: number): any
    onHintColor(nr: number): any

    myTurn: boolean;
}

const Values = [0, 1,2,3,4]

export class BButtons extends React.Component< InnerWrapper, {} > {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>
                               V
                            </th>
                            <th>
                               C
                            </th>
                        </tr>
                        {
                            Values.map( (value: number) => {
                                if (this.props.myTurn){
                                    return (<tr>
                                        <th>
                                            <div onClick={() => {this.props.onHintValue(value)}}> { value  }</div>
                                        </th>
                                        <th>
                                            <div onClick={() => {this.props.onHintColor(value)}}> { value }</div>
                                        </th>
                                    </tr>
                                    )
                                }
                                return (<tr>
                                    <th>
                                        <div> { value  }</div>
                                    </th>
                                    <th>
                                        <div> { value }</div>
                                    </th>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
