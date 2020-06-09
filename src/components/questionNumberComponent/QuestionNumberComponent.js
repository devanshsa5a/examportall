import React from 'react';
import classes from './questionNumber.module.css';

const QuestionNumber = (props) => {
    return (
        <div className={classes.QuestionNo}>
            {props.no}
        </div>
    )
}

export default QuestionNumber;

