import * as React from 'react';

import css from './ButtonComponent.css';

interface IButtonProps {
    disabled?: boolean;
    click?: () => void;
}

export class ButtonComponent extends React.Component<IButtonProps> {
    render() {
        if (this.props.disabled){
            return (
                <button className={css.disabled}>
                    {this.props.children}
                </button>
            );
        }

        return (
            <button onClick={this.props.click}>
                {this.props.children}
            </button>
        );
    }
}