import React from 'react';

interface InnerWrapper {
    lines: string[];

    keyPropagation: string;
}

export class BLog extends React.Component< InnerWrapper, {}> {
    render() {
        return (
            <div >
                { this.props.lines.map((value: string ) => {
                   return <p key={ this.props.keyPropagation }> { value } </p>
                })}
            </div>
        )
    }
}
