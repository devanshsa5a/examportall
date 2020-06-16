import PropTypes from "prop-types";
import React from 'react';
import classes from './testContentComponent.module.css';
import QuestionComponent from '../quesComponent/QuestionComponent';
import QuestionNavigator from '../../navigator/questionNavigatorComponent/QuestionNavigatorComponent';

const TestContentComponent = (props) => {
    return (
        <div className={classes.Content}>
            <QuestionComponent quesDes={props.quesDes} questionOption1={props.questionOption1} questionOption2={props.questionOption2} questionOption3={props.questionOption3} questionOption4={props.questionOption4} />
            <QuestionNavigator btn1={props.btn1} btn2={props.btn2} btn3={props.btn3} />
        </div>
    )
}

TestContentComponent.propTypes = {
    btn1: PropTypes.string,
    btn2: PropTypes.string,
    btn3: PropTypes.string,
    quesDes: PropTypes.string,
    questionOption1: PropTypes.string,
    questionOption2: PropTypes.string,
    questionOption3: PropTypes.string,
    questionOption4: PropTypes.string
}

export default TestContentComponent;