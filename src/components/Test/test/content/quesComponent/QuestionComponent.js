import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './questionComponent.module.css';
import * as getActions from '../../../../../store/action/getQuestion';



class QuestionComponent extends Component {
    componentDidMount = () => {
        this.props.onInnit();
    }
    render() {
        let content
        if (this.props.o1 === null) {
            content = <p>No question selected </p>
        } else {
            content = (<div>
                <p> {this.props.des}</p>
                <option value="1">{this.props.o1}</option>
                <option value="2">{this.props.o2}</option>
                <option value="3">{this.props.o3}</option>
                <option value="4">{this.props.o4}</option>
                <button>Save for Later</button>
                <button>Save</button>
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
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInnit: () => dispatch(getActions.initTest()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionComponent);