import React from 'react';
import { ICard, IHint } from '../interfaces';
import { BCard } from './bcard';

interface InnerWrapper {
    countdown: number
    treats: number
}

export class BToken extends React.Component< InnerWrapper, {}> {
    render() {
        return (
            <div>
                <h2> Countdown : { this.props.countdown } </h2>
                <h2> Treats : { this.props.treats } </h2>
            </div>
        )
    }
}
