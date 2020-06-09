import React from 'react';
import classes from './questionComponent.module.css';


const QuestionComponent = () => {
    return (
        <div>
            <div className={classes.Question}>
                <p>Question</p>
                <hr />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe neque exercitationem at, sed nihil,</p>
                <option value="1">option 1</option>
                <option value="1">option 1</option>
                <option value="1">option 1</option>
                <option value="1">option 1</option>
                <button>Save for Later</button>
                <button>Save</button>
                <button>Clear ans</button>
            </div>
        </div>
    )
}

export default QuestionComponent;