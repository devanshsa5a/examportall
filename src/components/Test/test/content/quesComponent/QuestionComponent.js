import PropTypes from "prop-types";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './questionComponent.module.css';



class QuestionComponent extends Component {
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
        des: state.currentQuestionDes,
        o1: state.currentQuestionOption1,
        o2: state.currentQuestionOption2,
        o3: state.currentQuestionOption3,
        o4: state.currentQuestionOption4,
    }
};


QuestionComponent.propTypes = {
    quesDes: PropTypes.string,
    questionOption1: PropTypes.string,
    questionOption2: PropTypes.string,
    questionOption3: PropTypes.string,
    questionOption4: PropTypes.string
}

export default connect(mapStateToProps)(QuestionComponent);