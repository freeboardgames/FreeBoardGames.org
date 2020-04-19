import React from 'react';
import { IHint } from '../interfaces';
import { BHintIcon } from './bhinticon';

interface InnerWrapper {
    hint: IHint;

    keyPropagation: string;
}

export class BHint extends React.Component< InnerWrapper, {}> {
    render() {
        return (
            <div>
              <div>
                { this.props.hint.color.map((value: number , index: number ) =>
                        {
                            return <BHintIcon
                                     hintIcon={{color: (value !== -1 ? index : -1), value: -1}}
                                     keyPropagation={this.props.keyPropagation + "BHint" + index.toString()}
                                     ></BHintIcon>
                        })
                }
              </div><div>
                { this.props.hint.value.map((value: number , index: number ) =>
                        {
                            return <BHintIcon
                                     hintIcon={{color: -1, value: (value !== -1 ? index : -1)}}
                                     keyPropagation={this.props.keyPropagation + "BHint" + index.toString()}
                                     ></BHintIcon>
                        })
                }
              </div>
            </div>
        )
    }
}