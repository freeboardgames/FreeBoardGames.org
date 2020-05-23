import React from 'react';

interface InnerWrapper {
    lines: string[];
}

export class BLog extends React.Component< InnerWrapper, {}> {
    render() {
        return (
            <div>
                { this.props.lines.map((value: string, _: number) => {
                   return <p> { value } </p>
                })}
            </div>
        )
    }
}
