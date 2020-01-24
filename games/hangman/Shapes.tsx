import * as React from 'react'; 

interface IShapeProps {
    letter: string;
}

export const Correct = (props: IShapeProps) => {
    return (
        <div>
            {props.letter}
        </div>

    );
};

export const Incorrect = (props: IShapeProps) => {
    return (
        <div>
            {props.letter}
        </div>

    );
};