import React from 'react';

interface InnerWrapper {
    yes(): any;
    no(): any;
}

export class BVote extends React.Component<InnerWrapper, {}> {
    render() {
        return (
            <div>
                <div> Yes: 
                    <button onClick={()=> this.props.yes() }>YES</button>
                </div>
                <div> No: 
                    <button onClick={()=> this.props.no() }>NO</button>
                </div>

            </div>
        )
    }
}