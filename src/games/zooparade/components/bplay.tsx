import React from 'react';

interface InnerWrapper {
    onPlay(): any;
    onTrash(): any;
    myTurn: boolean;
}

export class BPlay extends React.Component< InnerWrapper, { } > {
    render() {
        if (this.props.myTurn){
            return (
                <div>
                    <div onClick={this.props.onPlay}>PLAY</div>
                    |
                    <div onClick={this.props.onTrash}>TRASH</div>
                </div>
            )
        }
        return (
            <div>
                <div > waiting </div>
                |
                <div> waiting </div>
            </div>
        )
    }
}
