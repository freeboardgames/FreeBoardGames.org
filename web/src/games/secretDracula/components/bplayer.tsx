import React from 'react';

interface InnerWrapper {
    me: boolean;

    playerName: string;
    playerActive: boolean;

    dead: boolean;
    vampire: boolean;
    dracula: boolean;

    onYes(): any;
    onNo(): any;
}

export class BPlayer extends React.Component<InnerWrapper, {}> {
    render() {
        return (
            <div>
                <br></br>
                <div> Me: {this.props.me ? 'Yes' : 'No' } </div>
                <div> Player: { this.props.playerName } </div>
                <div> Active: { this.props.playerActive ? 'Yes' : 'No' } </div>
                <div> Dead: { this.props.dead ? 'Yes' : 'No'} </div>
                <div> Vampire: { this.props.vampire ? 'Yes' : 'No'} </div>
                <div> Dracula: { this.props.dracula? 'Yes' : 'No'} </div>
                <div> Yes: 
                    <button onClick={()=> this.props.onYes() }>YES</button>
                </div>
                <div> No: 
                    <button onClick={()=> this.props.onNo() }>NO</button>
                </div>


            </div>
        )
    }
}