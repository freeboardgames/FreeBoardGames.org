import React from 'react';
import { IHint } from '../interfaces';

interface InnerWrapper {
    hint: IHint
}

export class BHint extends React.Component< InnerWrapper, {}> {
    render() {
        return (
            <div>
                C { this.props.hint.color } | 
                V { this.props.hint.value }
            </div>
        )
    }
}

const colors = ['#80b28e',
                '#beb7a3',
                '#a38c49',
                '#f2f47d',
                '#9bcbee']