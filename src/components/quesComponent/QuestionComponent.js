import React from 'react';
import classes from './questionComponent.module.css';

// quesDes = { props.currentQuestionDes }
// questionOption1 = { props.currentQuestionOption1 }
// questionOption2 = { props.currentQuestionOption2 }
// questionOption3 = { props.currentQuestionOption3 }
// questionOption4 = { props.currentQuestionOption4 }

const QuestionComponent = (props) => {
    return (
        <div>
            <div className={classes.Question}>
                <p>Question</p>
                <hr />
                <p>{props.quesDes}</p>
                <option value="1">{props.questionOption1}</option>
                <option value="1">{props.questionOption2}</option>
                <option value="1">{props.questionOption3}</option>
                <option value="1">{props.questionOption4}</option>
                <button>Save for Later</button>
                <button>Save</button>
                <button>Clear ans</button>
            </div>
        </div>
    )
}

export default QuestionComponent;