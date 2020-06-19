import React, { Component } from 'react';
import TestNavComponent from '../nav/navTestComponent/NavTestComponent';
import TestContentComponent from '../test/content/testContentComponent/TestContentComponent';
import ButtonUI from '../../ui/Button/BottonUI';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action/actionTypes';


class TestComponent extends Component {
    state = {
        data: [
            {
                "questionType": "1",
                "questionDesc": "what is question 1?",
                "questionOption": ["1", "2", "3", "4"],
                "questionNo": "1",
            },
            {
                "questionType": "2",
                "questionDesc": "what is question 1 type 2?",
                "questionOption": ["1", "2", "3", "4"],
                "questionNo": "1",
            },
            {
                "questionType": "3",
                "questionDesc": "what is question 1 type 3?",
                "questionOption": ["1", "2", "3", "4"],
                "questionNo": "1",
            },
            {
                "questionType": "1",
                "questionDesc": "what is question 2?",
                "questionOption": ["1", "2", "3", "4"],
                "questionNo": "2",
            },
            {
                "questionType": "1",
                "questionDesc": "what is question 3?",
                "questionOption": ["1", "2", "3", "4"],
                "questionNo": "3",
            },
            {
                "questionType": "2",
                "questionDesc": "what is question 2 type 2?",
                "questionOption": ["1", "2", "3", "4"],
                "questionNo": "2",
            },
            {
                "questionType": "3",
                "questionDesc": "what is question 2 typ 3?",
                "questionOption": ["1", "2", "3", "4"],
                "questionNo": "2",
            },
            {
                "questionType": "3",
                "questionDesc": "what is question 3 type 3?",
                "questionOption": ["1", "2", "3", "4"],
                "questionNo": "3",
            }
        ]
    }

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

    componentDidMount = () => {
        this.props.onInnit();
    }

    render() {
        const response = this.state.data;
        let c = [];
        let java = [];
        let python = [];
        for (var i = 0; i < response.length; i++) {
            if (response[i].questionType === '1') {
                const details = response[i];
                const btn = <ButtonUI key={`${details.questionType}:${details.questionNo}`} name={details.questionNo}
                    clicked={
                        () => this.questionChanger(details)
                    } />
                c.push(btn);
            }
            else if (response[i].questionType === '2') {
                const details = response[i];
                const btn = <ButtonUI key={`${details.questionType}:${details.questionNo}`} name={details.questionNo}
                    clicked={
                        () => this.questionChanger(details)
                    } />
                java.push(btn);
            } else {
                const details = response[i];
                const btn = <ButtonUI key={`${details.questionType}:${details.questionNo}`} name={details.questionNo}
                    clicked={
                        () => this.questionChanger(details)
                    } />
                python.push(btn);
            }
        }

        return (
            <React.Fragment>
                <TestNavComponent />
                <TestContentComponent btn1={c} btn2={java} btn3={python} />
            </React.Fragment >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInnit: () => dispatch({ type: actionTypes.INIT_QUESTION }),
        onButton: (payload) => dispatch({ type: actionTypes.QUES_CHANGER, payload: payload })
    };
};

export default connect(null, mapDispatchToProps)(TestComponent);
