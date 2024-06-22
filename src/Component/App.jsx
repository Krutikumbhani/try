import React, { useRef } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Example2 from './Example2';
import ExampleComponent from './Example';

const App = () => {
    const component1Ref = useRef(null);
    const component2Ref = useRef(null);
    const component3Ref = useRef(null);

    const scrollToComponent = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Router>
            <div>
                <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#fff', padding: '10px', zIndex: 1000 }}>
                    <Link to="#" onClick={() => scrollToComponent(component1Ref)}>Go to Component 1</Link>
                    <Link to="#" onClick={() => scrollToComponent(component2Ref)}>Go to Component 2</Link>
                    <Link to="#" onClick={() => scrollToComponent(component3Ref)}>Go to Component 3</Link>
                </nav>
                <div style={{ paddingTop: '60px' }}>
                    <ExampleComponent ref={component1Ref} id="component1" title="Component 1" />
                    <Example2 ref={component2Ref} id="component2" title="Component 2" />
                    <ExampleComponent ref={component3Ref} id="component3" title="Payal 3" />
                </div>
            </div>
        </Router>
    );
};

export default App;



