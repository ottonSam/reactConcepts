import React from 'react';

export default (props) => {
    const { text, number, bool } = props;

    return (
        <div>
            <span>{ text } </span>
            <strong>{ number } </strong>
            <span>{ bool ? 'True' : 'False'}!</span>
        </div>
    )
}