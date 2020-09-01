import React, { useState } from 'react';

export default (props) => {
    const [value, setValue] = useState('Initial');

    const alter = (event) => {
        setValue(event.target.value);
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <span>{value}</span>
            <input value={value} onChange={alter}/>
        </div>
    );
};