import React from 'react';
import classes from './testContentComponent.module.css';
import QuestionComponent from '../quesComponent/QuestionComponent';
import QuestionNavigator from '../questionNavigatorComponent/QuestionNavigatorComponent';

const TestContentComponent = (props) => {
    return (
        <div className={classes.Content}>
            <QuestionComponent quesDes={props.quesDes} questionOption1={props.questionOption1} questionOption2={props.questionOption2} questionOption3={props.questionOption3} questionOption4={props.questionOption4} />
            <QuestionNavigator btn1={props.btn1} btn2={props.btn2} btn3={props.btn3} />
        </div>
    )
}

export default TestContentComponent;