import React from 'react';

export default (props) => {
    const { number } = props;
    const conditional = (number % 2 === 0);

    return (
        <div>
            Your number { number } is <strong>{conditional ? 'Pair' : 'Odd'}</strong>
        </div>
    );
};