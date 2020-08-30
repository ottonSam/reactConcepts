import React from 'react';
import DirectSon from './DirectSon';

export default (props) => {

    return (
        <div>
            <DirectSon text="son" number={1} bool={true}></DirectSon>
            <DirectSon text="son" number={2} bool={true}></DirectSon>
        </div>
    )
}