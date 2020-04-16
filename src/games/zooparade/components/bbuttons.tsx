import React from 'react';

interface InnerWrapper {
    onHintValue(nr: number): any
    onHintColor(nr: number): any

    myTurn: boolean;
    keyPropagation: string;
}

const Values = [0, 1,2,3,4]

const squares = [
    require('./media/green_square.png'),
    require('./media/gray_square.png'),
    require('./media/brown_square.png'),
    require('./media/yellow_square.png'),
    require('./media/blue_square.png'),
    require('./media/black_square.png')
]

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
                                            <div onClick={() => {this.props.onHintValue(value)}}> 
                                                <div className="image">
                                                    <img src={squares[5]} height="15" width="15"></img>
                                                    <h2> {value} </h2>
                                                </div>
                                            </div>
                                        </th>
                                        <th>
                                            <div onClick={() => {this.props.onHintColor(value)}}> 
                                                <div className="image">
                                                    <img src={squares[value]} height="15" width="15"></img>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    )
                                }
                                return (<tr key={this.props.keyPropagation + "BButton2" + value.toString()}>
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
