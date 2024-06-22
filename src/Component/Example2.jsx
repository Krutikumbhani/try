import React, { forwardRef } from 'react';

const Example2 = forwardRef(({ id, title }, ref) => {
    return (
        <div ref={ref} id={id} style={{ height: '100vh', border: '1px solid black', padding: '20px' }}>
            <h2>visha</h2>
            <p>i am Full stack developer</p>
        </div>
    );
});

export default Example2;