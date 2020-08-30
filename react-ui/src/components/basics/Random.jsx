import React from 'react';

export default (props) => {
    const { max, min} = props;

    const Value = (Math.random() * (max - min)) + min;

    return (
        <div>
            <h2>Your number random</h2>
            <p>min - { min} || max - { max } </p>
            <strong>{ Value }</strong>
        </div>
    )

};