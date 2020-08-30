import React from 'react';

export default (props) => {
        
    // {...props} ->  Passes all properties from father to son
    return (
        <div>
            {
                props.children.map((child, i) => {
                    return React.cloneElement(child, { ...props, key: i})
                })
            }
        </div>
    );
};