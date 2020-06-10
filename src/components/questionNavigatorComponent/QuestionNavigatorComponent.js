import React from 'react';
import classes from './questionNavigator.module.css';
import QuestionNumberContainer from '../questionNumberContainerComponent/questionNumberContainerComponent';

const QuestionNavigator = (props) => {
    return (
        <div className={classes.QuestionNavigator}>
            <p>Navigator</p>
            <p>Apti</p>
            <QuestionNumberContainer />
            <p>C</p>
            {props.btn1}
            <QuestionNumberContainer />
            <p>Opps</p>
            {props.btn2}
            <QuestionNumberContainer />
            <p>ML/BigData</p>
            {props.btn3}
            <QuestionNumberContainer />
            <p>Algo</p>
            <QuestionNumberContainer />
            <p>WEB/APP</p>
            <QuestionNumberContainer />

        </div>
    )
}

export default QuestionNavigator;