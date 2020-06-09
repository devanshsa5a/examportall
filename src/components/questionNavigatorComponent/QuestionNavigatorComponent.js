import React from 'react';
import classes from './questionNavigator.module.css';
import QuestionNumberContainer from '../questionNumberContainerComponent/questionNumberContainerComponent';

const QuestionNavigator = () => {
    return (
        <div className={classes.QuestionNavigator}>
            <p>Navigator</p>
            <p>Apti</p>
            <QuestionNumberContainer />
            <p>C</p>
            <QuestionNumberContainer />
            <p>Opps</p>
            <QuestionNumberContainer />
            <p>ML/BigData</p>
            <QuestionNumberContainer />
            <p>Algo</p>
            <QuestionNumberContainer />
            <p>WEB/APP</p>
            <QuestionNumberContainer />

        </div>
    )
}

export default QuestionNavigator;