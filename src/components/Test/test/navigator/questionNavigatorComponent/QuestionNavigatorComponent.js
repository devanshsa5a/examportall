import React, { Component } from 'react';
import classes from './questionNavigator.module.css';
import QuestionNumberContainer from '../questionNumberContainerComponent/questionNumberContainerComponent';
import Button from '../../../../ui/Button/BottonUI';
import { connect } from 'react-redux';
import * as actionTypes from '../../../../../store/action/actionTypes';

class QuestionNavigator extends Component {

    questionChanger = (quesDetail) => {
        let payload = {
            'Description': quesDetail.questionDesc,
            'Option1': quesDetail.questionOption[0],
            'Option2': quesDetail.questionOption[1],
            'Option3': quesDetail.questionOption[2],
            'Option4': quesDetail.questionOption[3],
            'QuestionType': quesDetail.questionType,
            'QuestionNo': quesDetail.questionNo,
        }
        this.props.onButton(payload);
    }
    render() {
        let c = null;
        let java = null;
        let python = null;
        if (this.props.c !== null) {
            c = this.props.c.map((ques) => {
                return <Button key={ques.key} name={ques.name} clicked={() => this.questionChanger(ques.funcInput)} />
            })
        }
        if (this.props.java) {
            java = this.props.java.map((ques) => {
                return <Button key={ques.key} name={ques.name} clicked={() => this.questionChanger(ques.funcInput)} />
            })
        }
        if (this.props.python) {
            python = this.props.python.map((ques) => {
                return <Button key={ques.key} name={ques.name} clicked={() => this.questionChanger(ques.funcInput)} />
            })
        }
        return (
            <div className={classes.QuestionNavigator} >
                <p>Navigator</p>
                <p>Apti</p>
                <QuestionNumberContainer />
                <p>C</p>
                <p>
                    {c}
                </p>
                < p > java</p >
                {java}
                <p>python</p>
                {python}
                {/* <p>Algo</p>
                <p>WEB/APP</p> */}

            </div >
        )
    }

}
const mapStateToProps = state => {
    return {
        c: state.questBase.c,
        java: state.questBase.java,
        python: state.questBase.python,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onButton: (payload) => dispatch({ type: actionTypes.QUES_CHANGER, payload: payload }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionNavigator);
