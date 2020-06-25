import React, { Component } from 'react';
import classes from './questionNavigator.module.css';
// import QuestionNumberContainer from '../questionNumberContainerComponent/questionNumberContainerComponent';
import Button from '../../../../ui/Button/BottonUI';
import { connect } from 'react-redux';
// import * as actionTypes from '../../../../../store/action/actionTypes';
import * as getActions from '../../../../../store/action/getQuestion'

class QuestionNavigator extends Component {

    questionChanger = (quesDetail, index) => {
        let payload = {
            'Description': quesDetail.questionDesc,
            'Option1': quesDetail.questionOptions[0],
            'Option2': quesDetail.questionOptions[1],
            'Option3': quesDetail.questionOptions[2],
            'Option4': quesDetail.questionOptions[3],
            'QuestionType': quesDetail.questionType,
            'QuestionNo': quesDetail.questionNo,
            'QuestionCode': quesDetail.questionCode,
            'currentIndex': index
        }
        this.props.onButton(payload);
    }
    render() {
        let c = null;
        let java = null;
        let python = null;
        if (this.props.c !== null) {
            c = this.props.c.map((ques, index) => {
                return <Button key={ques.key} name={ques.name} clicked={() => this.questionChanger(ques.funcInput, index)} />
            })
        }
        if (this.props.java) {
            java = this.props.java.map((ques, index) => {
                return <Button key={ques.key} name={ques.name} clicked={() => this.questionChanger(ques.funcInput, index)} />
            })
        }
        if (this.props.python) {
            python = this.props.python.map((ques, index) => {
                return <Button key={ques.key} name={ques.name} clicked={() => this.questionChanger(ques.funcInput, index)} />
            })
        }
        let content
        if (c === null) {
            content = 'Loading your navigator'
        } else {
            content = (<React.Fragment>
                <p>C</p>
                <p>{c}</p>
                <p> java</p>
                {java}
                <p>python</p>
                {python}
            </React.Fragment>)
        }
        return (
            <div className={classes.QuestionNavigator} >
                {/* <p>Apti</p>
                <QuestionNumberContainer /> */}
                <p>Navigator</p>
                {content}
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
        onButton: (payload) => dispatch(getActions.quesChanger(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionNavigator);
