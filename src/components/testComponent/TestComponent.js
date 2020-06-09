import React from 'react';
import TestNavComponent from '../navTestComponent/NavTestComponent';
import TestContentComponent from '../testContentComponent/TestContentComponent';

const TestComponent = () => {
    return (
        <React.Fragment>
            <TestNavComponent />
            <TestContentComponent />
        </React.Fragment>
    )
}

export default TestComponent;