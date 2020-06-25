import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './questionComponent.module.css';
import * as getActions from '../../../../../store/action/getQuestion';
import Button from '../../../../ui/Button/BottonUI';
import parse from 'html-react-parser'

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
    nextHandler = () => {
        let index = this.props.index + 1;
        let questionType = this.props.questionType;
        // console.log('next handler clicked', questionType);

        if (questionType === '1') {
            let data = this.props.c;
            let len = data.length;
            // console.log(index)
            if (index >= len) {
                console.log('already last')
            } else {
                let d = data[index].funcInput;
                let payload = {
                    'Description': d.questionDesc,
                    'Option1': d.questionOptions[0],
                    'Option2': d.questionOptions[1],
                    'Option3': d.questionOptions[2],
                    'Option4': d.questionOptions[3],
                    'QuestionType': d.questionType,
                    'QuestionNo': d.questionNo,
                    'QuestionCode': d.questionCode,
                    'currentIndex': index
                }
                this.props.onButton(payload);
            }
        }
        if (questionType === '2') {
            let data = this.props.java;
            let len = data.length;
            // console.log(index)
            if (index >= len) {
                console.log('already last')
            } else {
                let d = data[index].funcInput;
                let payload = {
                    'Description': d.questionDesc,
                    'Option1': d.questionOptions[0],
                    'Option2': d.questionOptions[1],
                    'Option3': d.questionOptions[2],
                    'Option4': d.questionOptions[3],
                    'QuestionType': d.questionType,
                    'QuestionNo': d.questionNo,
                    'QuestionCode': d.questionCode,
                    'currentIndex': index
                }
                this.props.onButton(payload);
            }
        }
        if (questionType === '3') {
            let data = this.props.python;
            let len = data.length;
            // console.log(index)
            if (index >= len) {
                console.log('already last')
            } else {
                let d = data[index].funcInput;
                let payload = {
                    'Description': d.questionDesc,
                    'Option1': d.questionOptions[0],
                    'Option2': d.questionOptions[1],
                    'Option3': d.questionOptions[2],
                    'Option4': d.questionOptions[3],
                    'QuestionType': d.questionType,
                    'QuestionNo': d.questionNo,
                    'QuestionCode': d.questionCode,
                    'currentIndex': index
                }
                this.props.onButton(payload);
            }
        }
    }

    render() {
        let content
        if (this.props.o1 === null) {
            content = <p>No question selected </p>
        } else {
            content = (<div>
                <p> {this.props.des}</p>
                {parse(this.props.code)}
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
                <button>Clear ans</button>
                <button onClick={this.nextHandler}>Next </button></div>
            )
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
        msg: state.quesNo.msg,
        code: state.quesNo.currentQuestionCode,
        index: state.quesNo.index,
        c: state.questBase.c,
        java: state.questBase.java,
        python: state.questBase.python,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInnit: () => dispatch(getActions.initTest()),
        ansSubmitter: (response) => dispatch(getActions.ansSubmiter(response)),
        onButton: (payload) => dispatch(getActions.quesChanger(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionComponent);