import React from 'react';
import { IHint } from '../interfaces';

interface InnerWrapper {
    hint: IHint

    keyPropagation: string;
}

const squares = [
    require('./media/green_square.png'),
    require('./media/gray_square.png'),
    require('./media/brown_square.png'),
    require('./media/yellow_square.png'),
    require('./media/blue_square.png'),
    require('./media/black_square.png')
]

export class BHint extends React.Component< InnerWrapper, {}> {
    render() {
        return (
            <div>
                { this.props.hint.color.map((value: number , index: number ) =>
                        {
                            return <img key={this.props.keyPropagation + "BHint" + index.toString()} src={(value !== -1) ? squares[index] : squares[5]} height="15" width="15"></img>
                        })
                }
                { this.props.hint.value.map((value: number , index: number ) =>
                        {
                            return(
                                <div key={this.props.keyPropagation + "BHint2" + index.toString()}>
                                    <img src={squares[5]} height="15" width="15"></img>
                                    <div> {(value !== -1) ? index : " "} </div>
                                </div>
                            )
                        })
                }
            </div>
        )
    }
}

// const colors = ['#80b28e',
//                 '#beb7a3',
//                 '#a38c49',
//                 '#f2f47d',
//                 '#9bcbee']