import React from 'react';
import TestNavComponent from '../nav/navTestComponent/NavTestComponent';
import TestContentComponent from '../test/content/testContentComponent/TestContentComponent';



const TestComponent = () => {
    return (
        <React.Fragment>
            <TestNavComponent />
            <TestContentComponent />
        </React.Fragment >
    )

}

export default TestComponent;
