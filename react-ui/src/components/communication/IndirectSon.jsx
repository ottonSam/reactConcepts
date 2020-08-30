import React from 'react';

export default (props) => {

    return (
        <div>
            <div>Son</div>
            <button onClick={
                (e) => {
                    props.replayInfo('Jão', 40, true)
                }
            }>
                Info replay
            </button>
        </div>
    )
}