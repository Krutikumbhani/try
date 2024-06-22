import React, { forwardRef } from 'react';

const ExampleComponent = forwardRef(({ id, title }, ref) => {
    return (
        <div ref={ref} id={id} style={{ height: '100vh', border: '1px solid black', padding: '20px' }}>
            <h2>payal</h2>
            <p>Good morning</p>
        </div>
    );
});

export default ExampleComponent;