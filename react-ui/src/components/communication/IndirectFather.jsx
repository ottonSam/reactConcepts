import React, { useState } from 'react';
import IndirectSon from './IndirectSon';


export default (props) => {
    const [text, setText] = useState('?');
    const [number, setNumber] = useState(0);
    const [boll, setBoll] = useState(false);

    function replayInfo(text, number, bool) {
        setText(text);
        setNumber(number);
        setBoll(bool);
    };

    return (
        <div>
            <div>
                <span>{ text } </span>
                <span>{ number } </span>
                <span>{ boll ? 'True' : 'False' }</span>
            </div>
            <IndirectSon replayInfo={replayInfo}></IndirectSon>
        </div>
    )
}