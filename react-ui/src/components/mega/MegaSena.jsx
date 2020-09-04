import React, { useState } from 'react';
import Generate from '../numberGenerator/Generate.js';

import './MegaSena.css';


export default (props) => {
    const initialNumbers = Array(6).fill(0);
    const [numbers, setNumbers] = useState(initialNumbers);

    return (
        <div>
            <h2>MegaSena numbers generate</h2>
            <div className="Numbers">
                <h3>{ numbers.join(' - ') }</h3>
            </div>
            <button onClick={_ => setNumbers(Generate(6))}>
                Generate!
            </button>
        </div>
    )
}