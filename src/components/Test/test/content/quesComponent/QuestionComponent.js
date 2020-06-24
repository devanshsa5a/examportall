import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './questionComponent.module.css';
import * as getActions from '../../../../../store/action/getQuestion';



class QuestionComponent extends Component {
    componentDidMount = () => {
        this.props.onInnit();
    }
    render() {
       
        return (
            <div>
                <div className={classes.Question}>
                    <p>Question</p>
                    <hr />
                    <div dangerouslySetInnerHTML={{ __html: this.props.des }} />
                    {/* <p>{props.quesDes}</p> */}
                    <option value="1">{this.props.o1}</option>
                    <option value="1">{this.props.o2}</option>
                    <option value="1">{this.props.o3}</option>
                    <option value="1">{this.props.o4}</option>
                    <button>Save for Later</button>
                    <button>Save</button>
                    <button>Clear ans</button>
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
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInnit: () => dispatch(getActions.initTest()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionComponent);