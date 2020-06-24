import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './questionComponent.module.css';
import * as getActions from '../../../../../store/action/getQuestion';
import Button from '../../../../ui/Button/BottonUI';

class QuestionComponent extends Component {
    state = {
        questionNo: null,
        questionType: null,
        correctOption: null
    }
    componentDidMount = () => {
        this.props.onInnit();

    }
    optionHandler = (event) => {
        this.setState({
            correctOption: event.target.value,
            questionNo: this.props.questionNo,
            questionType: this.props.questionType
        })
    }
    ansHandler = () => {
        this.props.ansSubmitter(this.state)
    }

    render() {
        let content
        if (this.props.o1 === null) {
            content = <p>No question selected </p>
        } else {
            content = (<div>
                <p> {this.props.des}</p>
                <input type="radio" id="option1" name="option" value="1" onClick={this.optionHandler} />
                <label htmlFor="option1">{this.props.o1}</label><br />
                <input type="radio" id="option2" name="option" value="2" onClick={this.optionHandler} />
                <label htmlFor="option2">{this.props.o2}</label><br />
                <input type="radio" id="option3" name="option" value="3" onClick={this.optionHandler} />
                <label htmlFor="option3">{this.props.o3}</label><br />
                <input type="radio" id="option4" name="option" value="4" onClick={this.optionHandler} />
                <label htmlFor="option4">{this.props.o4}</label>
                <br />
                {this.props.msg}
                <br />
                <Button name='Submit this Answer' clicked={this.ansHandler} />
                <button>Save For Later</button>
                <button>Clear ans</button> </div>)
        }

        return (
            <div>
                <div className={classes.Question}>
                    <p>Question</p>
                    <hr />
                    {content}
                </div>
            </div >
        )
    }


}

const mapStateToProps = state => {
    return {
        des: state.quesNo.currentQuestionDes,
        o1: state.quesNo.currentQuestionOption1,
        o2: state.quesNo.currentQuestionOption2,
        o3: state.quesNo.currentQuestionOption3,
        o4: state.quesNo.currentQuestionOption4,
        questionType: state.quesNo.currentQuestionType,
        questionNo: state.quesNo.currentQuestionNo,
        msg: state.quesNo.msg
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInnit: () => dispatch(getActions.initTest()),
        ansSubmitter: (response) => dispatch(getActions.ansSubmiter(response))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionComponent);