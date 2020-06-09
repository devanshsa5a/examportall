import React from 'react';
import classes from './testContentComponent.module.css';
import QuestionComponent from '../quesComponent/QuestionComponent';
import QuestionNavigator from '../questionNavigatorComponent/QuestionNavigatorComponent';

const TestContentComponent = () => {
   
    return (
        <div  className={classes.Content}>
            <QuestionComponent />
            <QuestionNavigator/>
        </div>
    )
}

export default TestContentComponent;