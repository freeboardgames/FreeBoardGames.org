import React from 'react';
import { ICard, IHint } from '../interfaces';
import { BCard } from './bcard';

interface InnerWrapper {
    countdown: number
    treats: number
}

export class BToken extends React.Component< InnerWrapper, {}> {
    render() {

        var imagetreat = require('./media/treat.png');
        var imagecountdown : any 

        if (this.props.countdown === 3) {
            imagecountdown = require('./media/countdown3.png');
        } else if (this.props.countdown === 2) {
            imagecountdown = require('./media/countdown2.png');
        } else if (this.props.countdown === 1) {
            imagecountdown = require('./media/countdown1.png');
        }
        
        return (
            <div>
                    <div className="image">
                        <img src={ imagetreat } height="100" width="100"></img>
                        <h2> Treats : { this.props.treats } </h2>
                    </div>
                    <div className="image">
                        <img src={ imagecountdown } height="100" width="100"></img>
                    </div>
            </div>
        )
    }
}
